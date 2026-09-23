import React, { useState } from 'react';
import { CitizenProfile, MatchResult } from '../types';
import {
  Sparkles,
  Send,
  AlertCircle,
  HelpCircle,
  TrendingUp,
  ShieldAlert,
  FileSearch,
  CheckCircle2,
  RefreshCw
} from 'lucide-react';

interface AIAdvisorProps {
  profile: CitizenProfile;
  matchedResults: MatchResult[];
}

export const AIAdvisor: React.FC<AIAdvisorProps> = ({ profile, matchedResults }) => {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState<
    Array<{ type: 'user' | 'assistant'; text: string; timestamp: string }>
  >([]);
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const eligibleSchemes = matchedResults
    .filter((r) => r.status === 'eligible')
    .map((r) => ({
      name: r.scheme.name,
      category: r.scheme.category,
      benefit: r.scheme.monetaryValueDisplay,
    }));

  const handleAsk = async (customQuery?: string, actionType?: string) => {
    const q = (customQuery || query).trim();
    if (!q && !actionType) return;

    const userText = q || (actionType === 'benefit_optimization' ? 'Generate Benefit Maximization Roadmap' : 'Analyze Eligibility');

    const newConvo = [
      ...conversation,
      {
        type: 'user' as const,
        text: userText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ];
    setConversation(newConvo);
    setQuery('');
    setLoading(true);

    try {
      const response = await fetch('/api/ai/advisor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: q,
          profile,
          matchedSchemes: eligibleSchemes,
          action: actionType || 'edge_case_query',
        }),
      });

      const contentType = response.headers.get('content-type') || '';
      let answer = '';

      if (response.ok && contentType.includes('application/json')) {
        const data = await response.json();
        answer = data.analysis || data.message || 'Unable to generate response. Please try again.';
      } else {
        // Fallback civic analysis for static hosting (Vercel / GitHub Pages)
        answer = `### 🏛️ Official Welfare Entitlement Assessment

For **${profile.name}** (${profile.occupation}, ${profile.state}):
- **Annual Income**: ₹${profile.annualIncome.toLocaleString('en-IN')}
- **Priority Matched Programs**: ${eligibleSchemes.slice(0, 4).map((s) => s.name).join(', ')}

#### Key Application Steps:
1. **Direct Benefit Transfer (DBT)**: Verify your bank account is linked to your Aadhaar card via NPCI mapper to receive direct subsidies.
2. **Identity & Eligibility Documents**: Keep your Ration Card (${profile.rationCardType}), Aadhaar, and Income Certificate ready.
3. **Application Mode**: Apply directly through the official National Portal (**services.india.gov.in**) or visit your nearest Gram Panchayat / Common Service Center (CSC).

*Note: All official government scheme applications are 100% free of charge. Do not pay unauthorized intermediaries.*`;
      }

      setConversation([
        ...newConvo,
        {
          type: 'assistant' as const,
          text: answer,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } catch (err: any) {
      console.error(err);
      setConversation([
        ...newConvo,
        {
          type: 'assistant' as const,
          text: `### Civic Advisory Note\n\nFor ${profile.name} (${profile.occupation}, ${profile.state}):\n- Ensure Aadhaar is mapped to your primary bank account on the NPCI DBT portal.\n- Visit your nearest Common Service Center (CSC) with your Ration Card and Income Certificate to initiate claims for ${eligibleSchemes.slice(0, 3).map((s) => s.name).join(', ')}.`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const sampleQuestions = [
    'Can I apply for both PM-KISAN and PM-JAY Ayushman Bharat together?',
    'What if my father is a farmer but the land records are still in my grandfather’s name?',
    'I earn cash daily and have no formal payslip. How do I get an Income Certificate?',
    'Which scheme gives the fastest financial disbursement if I need urgent medical support?',
  ];

  return (
    <div className="space-y-6">
      {/* Top Advisory Banner */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 rounded-xl p-6 text-white border border-indigo-900/60 shadow-md">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1.5">
          <Sparkles className="w-4 h-4" />
          <span>AI Civic Welfare & Entitlement Policy Advisor</span>
        </div>
        <h2 className="text-xl font-bold font-serif mb-2">
          Personalized Welfare Guidance & Benefit Maximizer
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
          Ask complex questions about non-standard situations, combined welfare claims, prerequisite documents, or generate a strategic roadmap sequencing your applications.
        </p>

        {/* 1-Click Benefit Maximizer Action */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-3">
          <button
            type="button"
            disabled={loading}
            onClick={() => {
              setActivePreset('maximizer');
              handleAsk('Analyze my profile and create an optimal application sequence to maximize my family benefits without rejection.', 'benefit_optimization');
            }}
            className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold rounded-lg text-xs transition-all shadow-sm cursor-pointer disabled:opacity-50"
          >
            <TrendingUp className="w-4 h-4" />
            <span>Generate Benefit Maximization Roadmap</span>
          </button>

          <span className="text-xs text-slate-400">
            Current Profile: {profile.name} · {profile.occupation} · ₹{profile.annualIncome.toLocaleString()} / yr
          </span>
        </div>
      </div>

      {/* Suggested Quick Prompts */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs">
        <span className="text-xs font-bold text-slate-700 block mb-2.5">
          Frequently Inquired Civic Scenarios:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {sampleQuestions.map((q, idx) => (
            <button
              key={idx}
              type="button"
              disabled={loading}
              onClick={() => handleAsk(q, 'edge_case_query')}
              className="text-left p-2.5 rounded-lg border border-slate-200 text-xs text-slate-700 hover:border-emerald-500 hover:bg-emerald-50/50 hover:text-emerald-900 transition-colors flex items-start gap-2 cursor-pointer disabled:opacity-50"
            >
              <HelpCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
              <span className="line-clamp-2">{q}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat / Analysis Conversation Log */}
      {conversation.length > 0 ? (
        <div className="space-y-4">
          {conversation.map((msg, index) => (
            <div
              key={index}
              className={`p-5 rounded-xl border leading-relaxed text-xs sm:text-sm ${
                msg.type === 'user'
                  ? 'bg-slate-100 border-slate-200 text-slate-900 ml-8 sm:ml-16'
                  : 'bg-white border-slate-200/90 text-slate-800 mr-8 sm:mr-16 shadow-xs'
              }`}
            >
              <div className="flex items-center justify-between mb-2 text-xs font-semibold text-slate-400">
                <span>{msg.type === 'user' ? 'Citizen Inquiry' : 'JanKalyan Welfare Advisor'}</span>
                <span>{msg.timestamp}</span>
              </div>

              {msg.type === 'user' ? (
                <p className="font-medium text-slate-800">{msg.text}</p>
              ) : (
                <div className="prose prose-xs max-w-none text-slate-800 space-y-2 whitespace-pre-line leading-relaxed font-sans">
                  {msg.text}
                </div>
              )}
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-slate-200/80 p-8 text-center space-y-2 text-xs text-slate-500">
          <FileSearch className="w-8 h-8 text-slate-400 mx-auto" />
          <p className="font-semibold text-slate-700">No active consultation yet</p>
          <p>
            Click one of the suggested civic questions above, generate the Benefit Roadmap, or type your specific situation below.
          </p>
        </div>
      )}

      {loading && (
        <div className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-3 text-xs text-slate-600 animate-pulse">
          <RefreshCw className="w-4 h-4 animate-spin text-emerald-600" />
          <span>Analyzing official gazette guidelines and statutory criteria...</span>
        </div>
      )}

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAsk();
        }}
        className="flex items-center gap-2 bg-white rounded-xl border border-slate-300 p-2 shadow-xs focus-within:ring-2 focus-within:ring-emerald-500 focus-within:border-emerald-500"
      >
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask any question about eligibility, required forms, income proof, or edge cases..."
          disabled={loading}
          className="flex-1 text-xs sm:text-sm px-3 py-1.5 text-slate-900 placeholder:text-slate-400 focus:outline-none bg-transparent"
        />

        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5 cursor-pointer disabled:opacity-40"
        >
          <span>Ask Advisor</span>
          <Send className="w-3.5 h-3.5" />
        </button>
      </form>
    </div>
  );
};
