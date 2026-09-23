import React from 'react';
import { CitizenProfile, MatchResult } from '../types';
import { Printer, X, Landmark, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface PrintDossierProps {
  profile: CitizenProfile;
  matchedResults: MatchResult[];
  onClose: () => void;
}

export const PrintDossier: React.FC<PrintDossierProps> = ({
  profile,
  matchedResults,
  onClose,
}) => {
  const eligibleMatches = matchedResults.filter((r) => r.status === 'eligible');
  const conditionalMatches = matchedResults.filter((r) => r.status === 'conditional');

  const totalValue = eligibleMatches.reduce(
    (acc, m) => acc + m.scheme.monetaryValueEstimate,
    0
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 p-4 sm:p-8 flex justify-center items-start">
      <div className="bg-white w-full max-w-4xl rounded-xl shadow-2xl overflow-hidden border border-slate-300">
        {/* Top Control Bar (Hidden during actual print) */}
        <div className="no-print bg-slate-900 text-white p-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Landmark className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-sm">Citizen Welfare Entitlement Dossier</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-4 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-xs font-bold transition-colors cursor-pointer"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 rounded hover:bg-slate-800 text-slate-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Official Printable Report Document */}
        <div className="p-8 sm:p-12 text-slate-900 space-y-8 font-sans">
          {/* Government Document Header */}
          <div className="text-center border-b-2 border-slate-900 pb-6 space-y-1">
            <div className="inline-block p-2 rounded-full border border-slate-800 mb-1">
              <Landmark className="w-8 h-8 text-slate-900 mx-auto" />
            </div>
            <h1 className="text-2xl font-black uppercase tracking-wider font-serif">
              JanKalyan Citizen Welfare Entitlement Dossier
            </h1>
            <p className="text-xs text-slate-600 font-medium">
              National Government Scheme Eligibility & Statutory Verification Report
            </p>
            <div className="text-[11px] text-slate-500 flex justify-center gap-4 pt-1 font-mono">
              <span>Date Generated: {new Date().toLocaleDateString('en-IN', { dateStyle: 'long' })}</span>
              <span>·</span>
              <span>Report Ref: JK-{Math.floor(100000 + Math.random() * 900000)}</span>
            </div>
          </div>

          {/* Citizen Profile Summary Table */}
          <div className="space-y-2">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1.5 rounded">
              01. Verified Citizen Demographic & Economic Parameters
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 border border-slate-200 rounded-lg text-xs">
              <div>
                <span className="text-slate-500 block">Applicant Name:</span>
                <span className="font-bold text-slate-900 text-sm">{profile.name}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Age & Gender:</span>
                <span className="font-bold text-slate-900">{profile.age} yrs · {profile.gender}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Social Category:</span>
                <span className="font-bold text-slate-900">{profile.socialCategory}</span>
              </div>
              <div>
                <span className="text-slate-500 block">State & Area:</span>
                <span className="font-bold text-slate-900">{profile.state} ({profile.areaType})</span>
              </div>

              <div>
                <span className="text-slate-500 block">Primary Occupation:</span>
                <span className="font-bold text-slate-900">{profile.occupation}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Annual Income:</span>
                <span className="font-bold text-slate-900 font-mono">₹{profile.annualIncome.toLocaleString()}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Ration Card:</span>
                <span className="font-bold text-slate-900">{profile.rationCardType}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Landholding:</span>
                <span className="font-bold text-slate-900">{profile.landholdingAcres} Acres</span>
              </div>
            </div>
          </div>

          {/* Entitlement Summary Box */}
          <div className="bg-emerald-50 border border-emerald-300 rounded-lg p-5 flex items-center justify-between">
            <div>
              <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider block">
                Total Estimated Potential Financial Cover
              </span>
              <span className="text-2xl font-black text-emerald-950 font-mono">
                ₹{totalValue.toLocaleString()}
              </span>
              <span className="text-xs text-emerald-800 block mt-0.5">
                Calculated across {eligibleMatches.length} statutory eligible welfare programs
              </span>
            </div>
            <ShieldCheck className="w-12 h-12 text-emerald-600" />
          </div>

          {/* Eligible Schemes Breakdown */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1.5 rounded">
              02. Statutory Eligible Welfare Programs ({eligibleMatches.length})
            </h2>

            <div className="divide-y divide-slate-200 border border-slate-200 rounded-lg overflow-hidden">
              {eligibleMatches.map((m, i) => (
                <div key={m.scheme.id} className="p-4 space-y-1 text-xs">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="flex items-baseline gap-2">
                        <span className="font-mono text-slate-500">{i + 1}.</span>
                        <span className="font-bold text-sm text-slate-900">{m.scheme.name}</span>
                      </div>
                      <span className="text-slate-500 text-[11px] block mt-0.5">
                        {m.scheme.ministry} · {m.scheme.category}
                      </span>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="font-bold text-emerald-800 block font-mono text-xs">
                        {m.scheme.monetaryValueDisplay}
                      </span>
                      <span className="text-[10px] text-slate-500">{m.scheme.applicationMode}</span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-xs pt-1">{m.scheme.description}</p>

                  <div className="pt-2 text-[11px] text-slate-500">
                    <span className="font-semibold text-slate-700">Application Portal: </span>
                    <span className="font-mono">{m.scheme.applicationUrl}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Verification & Mandatory Documents Checklist */}
          <div className="space-y-3">
            <h2 className="text-xs font-black uppercase tracking-wider text-slate-800 bg-slate-100 px-3 py-1.5 rounded">
              03. Mandatory Document Verification Checklist
            </h2>

            <p className="text-xs text-slate-600">
              Carry original copies along with self-attested photocopies to your nearest Common Service Centre (CSC) or Gram Panchayat office:
            </p>

            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 p-2 border border-slate-200 rounded">
                <CheckCircle2 className="w-4 h-4 text-slate-900" />
                <span>Aadhaar Card (UIDAI) linked with mobile & bank</span>
              </div>
              <div className="flex items-center gap-2 p-2 border border-slate-200 rounded">
                <CheckCircle2 className="w-4 h-4 text-slate-900" />
                <span>Ration Card (PHH / AAY / BPL) or Family Register</span>
              </div>
              <div className="flex items-center gap-2 p-2 border border-slate-200 rounded">
                <CheckCircle2 className="w-4 h-4 text-slate-900" />
                <span>Income Certificate / Tehsildar Affidavit</span>
              </div>
              <div className="flex items-center gap-2 p-2 border border-slate-200 rounded">
                <CheckCircle2 className="w-4 h-4 text-slate-900" />
                <span>NPCI Seeded Bank Account Passbook</span>
              </div>
            </div>
          </div>

          {/* Legal Disclaimer Footer */}
          <div className="border-t border-slate-300 pt-4 text-[11px] text-slate-500 space-y-1">
            <p className="font-bold text-slate-700">Official Civic Advisory:</p>
            <p>
              This report is generated for citizen informational purposes based on current official Central and State welfare rules. Final sanction of financial assistance or benefits is subject to on-ground field verification by authorized government verification committees and submission of statutory documents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
