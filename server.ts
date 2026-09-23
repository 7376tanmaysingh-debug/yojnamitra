import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

app.use(express.json());

// Server-side Gemini AI Scheme Advisor endpoint
app.post('/api/ai/advisor', async (req, res) => {
  try {
    const { query, profile, matchedSchemes, action } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return res.json({
        success: false,
        fallback: true,
        message: "Gemini API key not detected in environment. Using built-in civic rules engine for analysis.",
        analysis: generateHeuristicAnalysis(profile, matchedSchemes, query)
      });
    }

    const ai = new GoogleGenAI();

    let prompt = '';
    if (action === 'edge_case_query') {
      prompt = `
You are JanKalyan's senior Indian Citizen Welfare Officer and Public Policy Expert.
A citizen is asking for guidance on government schemes and eligibility.

Citizen Profile:
${JSON.stringify(profile, null, 2)}

Top matched schemes identified by screener:
${JSON.stringify(matchedSchemes?.slice(0, 5) || [], null, 2)}

Citizen Question/Situation:
"${query}"

Provide an authoritative, compassionate, practical, and structured response:
1. Eligibility Verdict & Direct Assessment for their specific situation.
2. Best matching Central & State schemes to apply for immediately.
3. Essential Documents Checklist needed before visiting CSC / portal.
4. Step-by-Step Action Plan (Online portal vs offline Gram Panchayat / CSC Kendra).
5. Crucial Precautions (Avoid middleman fraud, mandatory Aadhaar-bank linking, DBT mode).

Keep the language clear, empathetic, and citizen-friendly. Use bullet points and bold highlights.
`;
    } else if (action === 'benefit_optimization') {
      prompt = `
You are a senior Public Entitlement Strategist.
Analyze the following citizen profile and their eligible schemes:

Profile:
${JSON.stringify(profile, null, 2)}

Eligible Schemes:
${JSON.stringify(matchedSchemes, null, 2)}

Provide a "Benefit Maximization & Application Roadmap":
1. Total Entitlement Value summary.
2. Recommended Application Sequence (which scheme to apply for first to unlock prerequisite documents or subsidies, e.g. Ration card -> Ayushman Bharat -> PMAY).
3. Overlooked / Hidden entitlements they should not miss (e.g. state top-up, pension, girl child bonus, subsidized education loans).
4. Critical Verification Traps (common reasons applications get rejected, e.g., mismatched name in Aadhaar vs Bank account, unseeded NPCI DBT).
`;
    } else {
      prompt = `
Analyze this citizen request regarding welfare schemes:
Query: "${query}"
Profile: ${JSON.stringify(profile || {})}
Provide exact schemes, eligibility requirements, and portal steps.
`;
    }

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        systemInstruction: "You are an official, highly knowledgeable Indian civic entitlements advisor. You provide accurate welfare scheme guidance under Government of India and State Governments (e.g., PM-KISAN, PMAY, Ayushman Bharat PM-JAY, MUDRA, Sukanya Samriddhi, NSP Scholarships, PM Vishwakarma, etc.). Do not hallucinate fake schemes. Always emphasize official government portals (.gov.in / .nic.in).",
        temperature: 0.3,
      }
    });

    const text = response.text || "No response generated.";
    return res.json({
      success: true,
      analysis: text
    });
  } catch (error: any) {
    console.error("AI Advisor error:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Failed to process advisor request",
      fallback: true,
      analysis: generateHeuristicAnalysis(req.body.profile, req.body.matchedSchemes, req.body.query)
    });
  }
});

function generateHeuristicAnalysis(profile: any, matchedSchemes: any[], query?: string) {
  const schemeNames = matchedSchemes && matchedSchemes.length > 0
    ? matchedSchemes.map((s: any) => s.name).join(', ')
    : 'relevant central & state social welfare schemes';

  return `### Official Entitlement Assessment & Roadmap

Based on the verified profile parameters:
- **Occupation & Income Tier**: ${profile?.occupation || 'Citizen'} with annual income in the ₹${profile?.annualIncome?.toLocaleString() || 'applicable'} bracket.
- **Demographic Category**: ${profile?.category || 'General/All'} in ${profile?.state || 'India'}.
- **Key Matched Programs**: ${schemeNames}.

#### 1. Immediate Next Action
- Ensure your **Aadhaar is linked with your primary Bank Account** via NPCI mapping (crucial for Direct Benefit Transfer / DBT disbursals without intermediate rejection).
- Download your digital credentials directly to **DigiLocker** (Income Certificate, Caste/Category Certificate if applicable, and Ration Card) for instantaneous verification on government portals.

#### 2. Priority Application Route
1. **Health Protection**: Apply first for Ayushman Bharat (PM-JAY) Golden Card at your nearest Common Service Centre (CSC) or empaneled hospital.
2. **Direct Financial Assistance / Livelihood**: Submit your application on the official National Unified Portal (services.india.gov.in) or scheme-specific direct portals.

#### 3. Anti-Fraud & Citizen Advisory
- Government welfare applications are **100% free of charge** on official \`.gov.in\` or \`.nic.in\` portals. Never pay unauthorized agents or private cybercafes for fee-free forms.`;
}

// Development with Vite vs Production static serving
async function startServer() {
  const isDev = process.env.NODE_ENV !== 'production';

  if (isDev) {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`JanKalyan Government Scheme Finder server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
