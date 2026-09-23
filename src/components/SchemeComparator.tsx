import React from 'react';
import { Scheme } from '../types';
import { SchemeSticker } from './SchemeSticker';
import { Check, X, ExternalLink, Trash2, Plus, Building2, Clock, FileText } from 'lucide-react';

interface SchemeComparatorProps {
  selectedSchemes: Scheme[];
  allSchemes: Scheme[];
  onRemoveScheme: (id: string) => void;
  onAddScheme: (id: string) => void;
  onOpenDetails: (scheme: Scheme) => void;
}

export const SchemeComparator: React.FC<SchemeComparatorProps> = ({
  selectedSchemes,
  allSchemes,
  onRemoveScheme,
  onAddScheme,
  onOpenDetails,
}) => {
  const availableToAdd = allSchemes.filter(
    (s) => !selectedSchemes.some((sel) => sel.id === s.id)
  );

  return (
    <div className="space-y-6">
      {/* Comparator Header */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-bold font-serif text-slate-900">
            Side-by-Side Scheme Comparison Matrix
          </h2>
          <p className="text-xs text-slate-500 mt-0.5">
            Compare benefits, income ceilings, processing timelines, and document requirements side by side (up to 3 schemes).
          </p>
        </div>

        {selectedSchemes.length < 3 && availableToAdd.length > 0 && (
          <div className="flex items-center gap-2 text-xs">
            <Plus className="w-4 h-4 text-emerald-600" />
            <span className="text-slate-600 font-medium">Add to compare:</span>
            <select
              aria-label="Add scheme to compare"
              onChange={(e) => {
                if (e.target.value) {
                  onAddScheme(e.target.value);
                  e.target.value = '';
                }
              }}
              defaultValue=""
              className="border border-slate-300 rounded-lg px-2.5 py-1.5 text-xs text-slate-900 bg-slate-50 focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
            >
              <option value="" disabled>Select scheme...</option>
              {availableToAdd.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Comparison Grid */}
      {selectedSchemes.length === 0 ? (
        <div className="bg-white rounded-xl border border-dashed border-slate-300 p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <FileText className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-bold text-slate-800">No Schemes Selected for Comparison</h3>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            Click the comparison checkbox on any scheme card or select a program from the dropdown above to inspect features side by side.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto bg-white rounded-xl border border-slate-200 shadow-xs">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50/80">
                <th className="p-4 font-bold text-slate-700 w-1/4 min-w-[160px]">Attribute</th>
                {selectedSchemes.map((scheme) => (
                  <th key={scheme.id} className="p-4 font-bold text-slate-900 w-1/4 min-w-[220px]">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-sm block leading-snug">{scheme.name}</span>
                        <span className="text-[11px] font-normal text-slate-500 block mb-1.5">{scheme.ministry}</span>
                        {scheme.sticker && (
                          <SchemeSticker sticker={scheme.sticker} variant="compact" />
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => onRemoveScheme(scheme.id)}
                        className="p-1 text-slate-400 hover:text-red-600 rounded transition-colors"
                        title="Remove from comparison"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {/* Category & Sector */}
              <tr>
                <td className="p-4 font-semibold text-slate-600 bg-slate-50/50">Category & Level</td>
                {selectedSchemes.map((s) => (
                  <td key={s.id} className="p-4 text-slate-800">
                    <span className="font-medium text-slate-900 block">{s.category}</span>
                    <span className="text-slate-500 text-[11px]">{s.level}</span>
                  </td>
                ))}
              </tr>

              {/* Benefit Type */}
              <tr>
                <td className="p-4 font-semibold text-slate-600 bg-slate-50/50">Benefit Type</td>
                {selectedSchemes.map((s) => (
                  <td key={s.id} className="p-4 text-slate-800 font-medium">
                    {s.benefitType}
                  </td>
                ))}
              </tr>

              {/* Entitlement Value */}
              <tr>
                <td className="p-4 font-semibold text-slate-600 bg-slate-50/50">Direct Benefit Value</td>
                {selectedSchemes.map((s) => (
                  <td key={s.id} className="p-4">
                    <span className="font-extrabold text-sm text-emerald-800 font-mono block">
                      {s.monetaryValueDisplay}
                    </span>
                    <span className="text-[11px] text-slate-500">{s.targetAudienceText}</span>
                  </td>
                ))}
              </tr>

              {/* Age Limits */}
              <tr>
                <td className="p-4 font-semibold text-slate-600 bg-slate-50/50">Age Limits</td>
                {selectedSchemes.map((s) => (
                  <td key={s.id} className="p-4 text-slate-800">
                    {s.eligibilityCriteria.minAge || s.eligibilityCriteria.maxAge ? (
                      <span>
                        {s.eligibilityCriteria.minAge ? `Min: ${s.eligibilityCriteria.minAge} yrs` : 'No min age'}{' · '}
                        {s.eligibilityCriteria.maxAge ? `Max: ${s.eligibilityCriteria.maxAge} yrs` : 'No max age'}
                      </span>
                    ) : (
                      <span className="text-slate-500">Any age eligible</span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Income Cap */}
              <tr>
                <td className="p-4 font-semibold text-slate-600 bg-slate-50/50">Income Cap / Means Test</td>
                {selectedSchemes.map((s) => (
                  <td key={s.id} className="p-4 text-slate-800">
                    {s.eligibilityCriteria.maxAnnualIncome ? (
                      <span className="font-semibold text-slate-900">
                        Up to ₹{s.eligibilityCriteria.maxAnnualIncome.toLocaleString()} / year
                      </span>
                    ) : (
                      <span className="text-slate-500">No formal income ceiling</span>
                    )}
                    {s.eligibilityCriteria.requiresBpl && (
                      <span className="block text-[11px] text-amber-700 font-medium mt-0.5">
                        Requires BPL / Antyodaya Ration Card
                      </span>
                    )}
                  </td>
                ))}
              </tr>

              {/* Application Mode */}
              <tr>
                <td className="p-4 font-semibold text-slate-600 bg-slate-50/50">Application Channel</td>
                {selectedSchemes.map((s) => (
                  <td key={s.id} className="p-4 text-slate-800">
                    <span className="font-medium text-slate-900 block">{s.applicationMode}</span>
                    <span className="text-slate-500 text-[11px]">{s.disbursalTimeline}</span>
                  </td>
                ))}
              </tr>

              {/* Key Mandatory Documents */}
              <tr>
                <td className="p-4 font-semibold text-slate-600 bg-slate-50/50">Required Documents</td>
                {selectedSchemes.map((s) => (
                  <td key={s.id} className="p-4 text-slate-700">
                    <ul className="space-y-1">
                      {s.documentsRequired.map((doc) => (
                        <li key={doc.id} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{doc.name}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>

              {/* Action Buttons */}
              <tr className="bg-slate-50/60">
                <td className="p-4 font-semibold text-slate-600">Direct Actions</td>
                {selectedSchemes.map((s) => (
                  <td key={s.id} className="p-4 space-y-2">
                    <button
                      type="button"
                      onClick={() => onOpenDetails(s)}
                      className="w-full text-center px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white rounded font-medium text-xs transition-colors cursor-pointer"
                    >
                      Inspect Guidelines
                    </button>
                    <a
                      href={s.applicationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1 px-3 py-1.5 border border-slate-300 text-slate-700 hover:bg-slate-100 rounded font-medium text-xs transition-colors cursor-pointer"
                    >
                      <span>Official Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
