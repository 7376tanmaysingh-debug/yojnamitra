import React, { useState, useEffect } from 'react';
import { MatchResult, SchemeDocument } from '../types';
import {
  FileCheck2,
  FileClock,
  AlertCircle,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  HelpCircle,
  Info
} from 'lucide-react';

interface DocumentChecklistProps {
  eligibleResults: MatchResult[];
}

interface DocAggregateItem {
  id: string;
  name: string;
  purpose: string;
  issuer: string;
  mandatory: boolean;
  downloadUrl?: string;
  requiredBySchemes: string[];
}

export const DocumentChecklist: React.FC<DocumentChecklistProps> = ({ eligibleResults }) => {
  // Local storage persistence for document readiness status
  const [readyDocIds, setReadyDocIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('jankalyan_ready_docs');
      return saved ? JSON.parse(saved) : ['aadhaar', 'mobile'];
    } catch {
      return ['aadhaar', 'mobile'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('jankalyan_ready_docs', JSON.stringify(readyDocIds));
    } catch (e) {
      console.error(e);
    }
  }, [readyDocIds]);

  const toggleDocReady = (docId: string) => {
    setReadyDocIds((prev) =>
      prev.includes(docId) ? prev.filter((id) => id !== docId) : [...prev, docId]
    );
  };

  // Deduplicate documents across all eligible programs
  const docMap = new Map<string, DocAggregateItem>();

  eligibleResults.forEach((res) => {
    res.scheme.documentsRequired.forEach((doc) => {
      const existing = docMap.get(doc.id);
      if (existing) {
        if (!existing.requiredBySchemes.includes(res.scheme.shortName)) {
          existing.requiredBySchemes.push(res.scheme.shortName);
        }
        if (!existing.downloadUrl && doc.downloadUrl) {
          existing.downloadUrl = doc.downloadUrl;
        }
      } else {
        docMap.set(doc.id, {
          ...doc,
          downloadUrl: doc.downloadUrl,
          requiredBySchemes: [res.scheme.shortName],
        });
      }
    });
  });

  const allRequiredDocs = Array.from(docMap.values());
  const readyCount = allRequiredDocs.filter((d) => readyDocIds.includes(d.id)).length;
  const totalCount = allRequiredDocs.length;
  const progressPercent = totalCount > 0 ? Math.round((readyCount / totalCount) * 100) : 0;

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-700 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Document Readiness Engine</span>
          </div>
          <h2 className="text-xl font-bold font-serif text-slate-900">
            Citizen Document Locker & Application Checklist
          </h2>
          <p className="text-xs text-slate-600 max-w-xl">
            These {totalCount} verified documents are required to complete your applications across all {eligibleResults.length} eligible welfare schemes. Mark the ones you currently have in hand to detect missing prerequisites early.
          </p>
        </div>

        {/* Readiness Metric */}
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 w-full md:w-auto min-w-[200px] shrink-0">
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            <span className="text-slate-600">Application Readiness:</span>
            <span className="font-mono text-emerald-700 font-bold">{progressPercent}%</span>
          </div>
          <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-emerald-600 transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <span className="text-[11px] text-slate-500 mt-1 block text-right font-mono">
            {readyCount} of {totalCount} documents verified
          </span>
        </div>
      </div>

      {/* Official Advice on Digital Documents */}
      <div className="bg-blue-50/80 border border-blue-200/90 rounded-xl p-4 flex items-start gap-3 text-xs text-blue-900">
        <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <h4 className="font-bold">Official DigiLocker & NPCI Seeding Advisory</h4>
          <p className="text-blue-800 leading-relaxed text-[11px]">
            Under Rule 9A of the Information Technology Rules 2016, digital certificates downloaded from <strong>DigiLocker (digilocker.gov.in)</strong> are legally treated on par with original physical certificates by all government departments. Also ensure your bank account has <strong>NPCI DBT mapper active</strong> so government grants are not rejected at the clearing house.
          </p>
        </div>
      </div>

      {/* Deduplicated Checklist Table / Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {allRequiredDocs.map((doc) => {
          const isReady = readyDocIds.includes(doc.id);

          return (
            <div
              key={doc.id}
              onClick={() => toggleDocReady(doc.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex flex-col justify-between ${
                isReady
                  ? 'bg-white border-emerald-300/80 shadow-xs'
                  : 'bg-slate-50/60 border-slate-200 hover:border-slate-300'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-start gap-2.5">
                    <div
                      className={`w-5 h-5 rounded flex items-center justify-center mt-0.5 transition-colors ${
                        isReady
                          ? 'bg-emerald-600 text-white'
                          : 'border border-slate-300 bg-white text-transparent'
                      }`}
                    >
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className={`text-sm font-bold ${isReady ? 'text-slate-900' : 'text-slate-700'}`}>
                          {doc.name}
                        </h4>
                        {doc.mandatory && (
                          <span className="text-[10px] text-red-600 font-semibold uppercase">
                            Mandatory
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">{doc.purpose}</p>
                    </div>
                  </div>

                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                      isReady
                        ? 'bg-emerald-50 text-emerald-800 border border-emerald-200'
                        : 'bg-amber-50 text-amber-800 border border-amber-200'
                    }`}
                  >
                    {isReady ? 'Ready in Hand' : 'Missing / To Apply'}
                  </span>
                </div>

                {/* Issuing Authority & Direct Verification / Download Link */}
                <div className="text-[11px] text-slate-600 mt-2 bg-slate-100/70 px-2.5 py-1.5 rounded flex items-center justify-between gap-2 flex-wrap">
                  <div>
                    <span className="text-slate-400">Issuing Authority:</span>{' '}
                    <span className="font-medium text-slate-700">{doc.issuer}</span>
                  </div>

                  {doc.downloadUrl && (
                    <a
                      href={doc.downloadUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1 font-semibold text-emerald-800 hover:text-emerald-950 bg-emerald-50 hover:bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200 transition-colors shrink-0"
                      title="Open issuing portal in new tab"
                    >
                      <span>Get / Verify Online</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>

              {/* Required by which schemes */}
              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Required by:</span>
                <span className="font-semibold text-slate-700 text-right">
                  {doc.requiredBySchemes.join(' · ')}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
