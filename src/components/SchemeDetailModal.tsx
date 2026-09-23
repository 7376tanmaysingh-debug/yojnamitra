import React, { useState } from 'react';
import { Scheme, MatchResult } from '../types';
import { SchemeSticker } from './SchemeSticker';
import {
  X,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  FileText,
  Clock,
  Building2,
  ShieldCheck,
  AlertCircle,
  ListOrdered,
  Bookmark,
  Globe,
  PhoneCall,
  Copy,
  Check,
  Download,
  FileCheck2,
  ArrowUpRight
} from 'lucide-react';

interface SchemeDetailModalProps {
  scheme: Scheme | null;
  matchResult?: MatchResult;
  onClose: () => void;
  isBookmarked: boolean;
  onToggleBookmark: (schemeId: string) => void;
}

export const SchemeDetailModal: React.FC<SchemeDetailModalProps> = ({
  scheme,
  matchResult,
  onClose,
  isBookmarked,
  onToggleBookmark,
}) => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!scheme) return null;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const isEligible = matchResult?.status === 'eligible';
  const isConditional = matchResult?.status === 'conditional';
  const isIneligible = matchResult?.status === 'ineligible';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/60 backdrop-blur-xs">
      <div
        className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white border-b border-slate-800 flex items-start justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center flex-wrap gap-2 text-xs text-slate-400 font-medium">
              <span className="text-emerald-400 font-semibold">{scheme.category}</span>
              <span aria-hidden="true">·</span>
              <span>{scheme.level}</span>
              <span aria-hidden="true">·</span>
              <span>{scheme.ministry}</span>
            </div>

            <h2 className="text-lg sm:text-xl font-bold font-serif text-white">
              {scheme.name}
            </h2>
            {scheme.hindiName && (
              <p className="text-xs text-slate-300 font-serif">
                {scheme.hindiName}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => onToggleBookmark(scheme.id)}
              className={`p-2 rounded-lg transition-colors ${
                isBookmarked
                  ? 'bg-emerald-600 text-white'
                  : 'bg-slate-800 hover:bg-slate-700 text-slate-300'
              }`}
              title={isBookmarked ? 'Saved to bookmarks' : 'Bookmark scheme'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-slate-800 text-sm">
          {/* Official Entitlement Sticker Seal */}
          {scheme.sticker && (
            <SchemeSticker sticker={scheme.sticker} variant="modal" />
          )}

          {/* Eligibility Status Banner */}
          {matchResult && (
            <div
              className={`p-4 rounded-xl border flex items-start gap-3.5 ${
                isEligible
                  ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                  : isConditional
                  ? 'bg-amber-50 border-amber-200 text-amber-900'
                  : 'bg-slate-50 border-slate-200 text-slate-800'
              }`}
            >
              <div className="mt-0.5">
                {isEligible && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                {isConditional && <AlertTriangle className="w-5 h-5 text-amber-600" />}
                {isIneligible && <XCircle className="w-5 h-5 text-slate-400" />}
              </div>

              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs uppercase tracking-wider">
                    {isEligible && '100% Eligible for this scheme'}
                    {isConditional && 'Conditionally Eligible (Action Required)'}
                    {isIneligible && 'Currently Ineligible'}
                  </span>
                  <span className="font-mono text-xs font-bold">
                    Match: {matchResult.score}%
                  </span>
                </div>
                <p className="text-xs leading-relaxed">{matchResult.recommendation}</p>

                {/* Unmet items */}
                {matchResult.unmetCriteria.length > 0 && (
                  <div className="mt-2 pt-2 border-t border-slate-200/60 text-xs">
                    <span className="font-semibold block mb-1">Unmet or Exceeded Criteria:</span>
                    <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                      {matchResult.unmetCriteria.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Core Benefit & Key Features */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Statutory Entitlement & Benefits
            </h3>
            <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs text-slate-500 block font-medium">Estimated Direct Value:</span>
                <span className="text-lg sm:text-xl font-extrabold text-slate-900">
                  {scheme.monetaryValueDisplay}
                </span>
              </div>
              <div className="text-xs text-slate-600 sm:text-right">
                <span className="font-semibold block text-slate-900">{scheme.benefitType}</span>
                <span>Mode: {scheme.applicationMode}</span>
              </div>
            </div>

            <ul className="space-y-2 text-xs text-slate-700">
              {scheme.keyBenefits.map((benefit, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Official Government Portals & Specific Direct Links */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-emerald-600" />
                <span>Official Government Portals & Specific Links</span>
              </h3>
              <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified .gov.in Domain</span>
              </span>
            </div>

            {/* Primary Portal Banner */}
            <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-50 border border-emerald-200/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <span className="text-[10px] uppercase font-black tracking-wider text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-300/60 inline-block mb-1">
                  Primary Application Portal
                </span>
                <h4 className="text-sm font-bold text-slate-900">
                  {scheme.name} Official Portal
                </h4>
                <p className="text-xs text-slate-600 font-mono mt-0.5 break-all">
                  {scheme.applicationUrl}
                </p>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => handleCopy(scheme.applicationUrl, 'primary-url')}
                  className="px-2.5 py-1.5 rounded-lg border border-emerald-300 bg-white hover:bg-emerald-50 text-slate-700 text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
                  title="Copy link"
                >
                  {copiedKey === 'primary-url' ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-slate-500" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={scheme.applicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <span>Open Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Helpline number if present */}
            {scheme.helplineNumber && (
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <PhoneCall className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 uppercase font-semibold block">Official Citizen Helpline</span>
                    <span className="font-bold text-slate-900 font-mono">{scheme.helplineNumber}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => handleCopy(scheme.helplineNumber!, 'helpline')}
                    className="p-1.5 text-slate-500 hover:text-slate-800 rounded hover:bg-slate-200 transition-colors"
                    title="Copy Helpline"
                  >
                    {copiedKey === 'helpline' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>

                  <a
                    href={`tel:${scheme.helplineNumber.replace(/[^0-9]/g, '')}`}
                    className="px-3 py-1 bg-emerald-100 hover:bg-emerald-200 text-emerald-900 font-semibold rounded-lg text-xs transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            )}

            {/* Specific Scheme Links List (Guidelines, Status, Portal) */}
            {scheme.officialLinks && scheme.officialLinks.length > 0 && (
              <div className="space-y-2 pt-1">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Specific Online Tools, Portals & Guidelines:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {scheme.officialLinks.map((link, idx) => {
                    const badgeColor =
                      link.type === 'apply'
                        ? 'bg-emerald-100 text-emerald-800 border-emerald-200'
                        : link.type === 'status'
                        ? 'bg-blue-100 text-blue-800 border-blue-200'
                        : link.type === 'guidelines'
                        ? 'bg-amber-100 text-amber-900 border-amber-200'
                        : 'bg-purple-100 text-purple-800 border-purple-200';

                    let linkDomain = '';
                    try {
                      linkDomain = new URL(link.url).hostname.replace(/^www\./, '');
                    } catch {
                      linkDomain = 'Official Portal';
                    }

                    return (
                      <div
                        key={idx}
                        className="p-3 bg-white border border-slate-200 rounded-xl hover:border-emerald-300 hover:shadow-xs transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-start justify-between gap-1.5 mb-1.5">
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-wider ${badgeColor}`}>
                              {link.badge || link.type}
                            </span>
                            <button
                              type="button"
                              onClick={() => handleCopy(link.url, `link-${idx}`)}
                              className="text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-100"
                              title="Copy URL"
                            >
                              {copiedKey === `link-${idx}` ? (
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </button>
                          </div>
                          <h5 className="text-xs font-bold text-slate-900 leading-snug">
                            {link.title}
                          </h5>
                          {link.description && (
                            <p className="text-[11px] text-slate-500 mt-1 line-clamp-2">
                              {link.description}
                            </p>
                          )}
                        </div>

                        <div className="pt-2.5 mt-2 border-t border-slate-100 flex items-center justify-between">
                          <span className="text-[10px] font-mono text-slate-400 truncate max-w-[130px]">
                            {linkDomain}
                          </span>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 hover:text-emerald-800 hover:underline"
                          >
                            <span>Open Link</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Mandatory Documents Required */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-slate-600" />
              <span>Required Documents & Verification Proofs</span>
            </h3>

            <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden bg-white">
              {scheme.documentsRequired.map((doc) => (
                <div key={doc.id} className="p-3 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-slate-900">{doc.name}</span>
                      {doc.mandatory && (
                        <span className="text-[10px] text-red-600 font-semibold uppercase">
                          Mandatory
                        </span>
                      )}
                    </div>
                    <p className="text-slate-500 text-[11px] mt-0.5">{doc.purpose}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <div className="text-[11px] text-slate-600 bg-slate-50 px-2.5 py-1 rounded border border-slate-100">
                      <span className="text-slate-400">Issuer:</span> {doc.issuer}
                    </div>

                    {doc.downloadUrl && (
                      <a
                        href={doc.downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-2.5 py-1 rounded border border-emerald-200 transition-colors"
                        title="Download or verify document online"
                      >
                        <span>Download / Verify</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Step by Step Application Guide */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
              <ListOrdered className="w-4 h-4 text-slate-600" />
              <span>Step-by-Step Official Application Procedure</span>
            </h3>

            <div className="space-y-2.5">
              {scheme.applicationSteps.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs">
                  <div className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <p className="text-slate-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Common Pitfalls & Rejection Reasons */}
          <div className="space-y-2 bg-amber-50/70 border border-amber-200/80 rounded-xl p-4">
            <h4 className="text-xs font-bold text-amber-900 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-700" />
              <span>Common Rejection Pitfalls to Avoid</span>
            </h4>
            <ul className="list-disc list-inside space-y-1 text-xs text-amber-950/90 pl-1">
              {scheme.commonRejectionReasons.map((reason, i) => (
                <li key={i}>{reason}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-500 text-[11px]">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Official Government Portal ({scheme.processingFee})</span>
          </div>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-100 font-medium transition-colors cursor-pointer w-full sm:w-auto text-center"
            >
              Close
            </button>

            <a
              href={scheme.applicationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold transition-colors cursor-pointer w-full sm:w-auto"
            >
              <span>Visit Official Portal</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
