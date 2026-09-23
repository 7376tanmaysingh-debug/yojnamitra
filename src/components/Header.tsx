import React from 'react';
import { Landmark, Sparkles, Printer, BookmarkCheck, SlidersHorizontal, UserCheck } from 'lucide-react';
import { DEFAULT_CITIZEN_PROFILES } from '../data/schemes';
import { CitizenProfile } from '../types';

interface HeaderProps {
  activeTab: 'screener' | 'schemes' | 'compare' | 'documents' | 'ai';
  setActiveTab: (tab: 'screener' | 'schemes' | 'compare' | 'documents' | 'ai') => void;
  eligibleCount: number;
  totalEntitlementSum: number;
  bookmarksCount: number;
  onSelectPersona: (profile: CitizenProfile) => void;
  onOpenPrint: () => void;
  fontSize: 'normal' | 'large' | 'xlarge';
  setFontSize: (size: 'normal' | 'large' | 'xlarge') => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  eligibleCount,
  totalEntitlementSum,
  bookmarksCount,
  onSelectPersona,
  onOpenPrint,
  fontSize,
  setFontSize,
}) => {
  return (
    <header className="bg-slate-900 text-slate-100 border-b border-slate-800 sticky top-0 z-30 shadow-md no-print">
      {/* Top Civic Utility Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2.5 pb-2 flex flex-wrap items-center justify-between border-b border-slate-800/80 text-xs text-slate-400 gap-3">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
          <span className="font-medium text-slate-300">JanKalyan Civic Portal</span>
          <span aria-hidden="true">·</span>
          <span>Official Public Entitlement Registry & Welfare Screener</span>
        </div>

        <div className="flex items-center gap-4">
          {/* Quick Persona Picker */}
          <div className="flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Try Sample Citizen:</span>
            <select
              aria-label="Try Sample Citizen Profile"
              onChange={(e) => {
                const selected = DEFAULT_CITIZEN_PROFILES.find((p) => p.label === e.target.value);
                if (selected) onSelectPersona(selected.profile);
              }}
              defaultValue=""
              className="bg-slate-800 text-slate-200 border border-slate-700 rounded px-2 py-0.5 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
            >
              <option value="" disabled>Choose Persona...</option>
              {DEFAULT_CITIZEN_PROFILES.map((p) => (
                <option key={p.label} value={p.label}>
                  {p.label}
                </option>
              ))}
            </select>
          </div>

          <span aria-hidden="true" className="text-slate-700 hidden sm:inline">|</span>

          {/* Accessibility text resizer */}
          <div className="flex items-center gap-1">
            <span className="text-slate-400 hidden sm:inline">Text Size:</span>
            <button
              type="button"
              onClick={() => setFontSize('normal')}
              title="Standard text size"
              className={`px-1.5 py-0.5 rounded text-xs font-semibold ${fontSize === 'normal' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              A
            </button>
            <button
              type="button"
              onClick={() => setFontSize('large')}
              title="Large text size"
              className={`px-1.5 py-0.5 rounded text-xs font-bold ${fontSize === 'large' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              A+
            </button>
            <button
              type="button"
              onClick={() => setFontSize('xlarge')}
              title="Extra large text size"
              className={`px-1.5 py-0.5 rounded text-xs font-extrabold ${fontSize === 'xlarge' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:text-white'}`}
            >
              A++
            </button>
          </div>
        </div>
      </div>

      {/* Main Branding & Navigation Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white shadow-inner flex-shrink-0">
            <Landmark className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white font-serif">
                JanKalyan
              </h1>
              <span className="text-xs text-emerald-400 font-medium tracking-wide uppercase">
                Scheme Finder
              </span>
            </div>
            <p className="text-xs text-slate-400">
              Check statutory eligibility for 20+ Central & State Welfare Programs
            </p>
          </div>
        </div>

        {/* Action Highlights */}
        <div className="flex items-center flex-wrap gap-2 text-xs">
          <div className="bg-slate-800/80 border border-slate-700/60 rounded-lg px-3 py-1.5 flex items-center gap-2">
            <span className="text-slate-400">Eligible:</span>
            <span className="font-bold text-emerald-400 text-sm">{eligibleCount} Programs</span>
            {totalEntitlementSum > 0 && (
              <>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400">Value:</span>
                <span className="font-bold text-amber-400 text-sm">₹{(totalEntitlementSum / 100000).toFixed(1)}L+</span>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={onOpenPrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
            title="Download or Print Citizen Welfare Dossier"
          >
            <Printer className="w-3.5 h-3.5 text-slate-300" />
            <span className="font-medium">Print Dossier</span>
          </button>
        </div>
      </div>

      {/* Tabs navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex overflow-x-auto gap-1 border-t border-slate-800 text-xs font-medium">
        <button
          type="button"
          onClick={() => setActiveTab('screener')}
          className={`py-2.5 px-3.5 border-b-2 flex items-center gap-1.5 whitespace-nowrap transition-colors ${
            activeTab === 'screener'
              ? 'border-emerald-500 text-emerald-400 font-semibold bg-slate-800/40'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <SlidersHorizontal className="w-3.5 h-3.5" />
          <span>01. Profile & Screener</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('schemes')}
          className={`py-2.5 px-3.5 border-b-2 flex items-center gap-1.5 whitespace-nowrap transition-colors ${
            activeTab === 'schemes'
              ? 'border-emerald-500 text-emerald-400 font-semibold bg-slate-800/40'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <span>02. Matched Schemes</span>
          <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-950 text-emerald-300 border border-emerald-800">
            {eligibleCount}
          </span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('documents')}
          className={`py-2.5 px-3.5 border-b-2 flex items-center gap-1.5 whitespace-nowrap transition-colors ${
            activeTab === 'documents'
              ? 'border-emerald-500 text-emerald-400 font-semibold bg-slate-800/40'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <BookmarkCheck className="w-3.5 h-3.5" />
          <span>03. Document Locker & Checklist</span>
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('compare')}
          className={`py-2.5 px-3.5 border-b-2 flex items-center gap-1.5 whitespace-nowrap transition-colors ${
            activeTab === 'compare'
              ? 'border-emerald-500 text-emerald-400 font-semibold bg-slate-800/40'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <span>04. Scheme Comparator</span>
          {bookmarksCount > 0 && (
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-slate-800 text-slate-300 border border-slate-700">
              {bookmarksCount}
            </span>
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('ai')}
          className={`py-2.5 px-3.5 border-b-2 flex items-center gap-1.5 whitespace-nowrap transition-colors ${
            activeTab === 'ai'
              ? 'border-amber-500 text-amber-300 font-semibold bg-slate-800/40'
              : 'border-transparent text-slate-400 hover:text-slate-200'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>05. AI Entitlements Advisor</span>
        </button>
      </div>
    </header>
  );
};
