import React from 'react';
import { MatchResult, Scheme } from '../types';
import {
  CheckCircle2,
  AlertTriangle,
  XCircle,
  ExternalLink,
  ChevronRight,
  Bookmark,
  CheckSquare,
  Square,
  Building2,
  Clock,
  ArrowUpRight
} from 'lucide-react';

interface SchemeCardProps {
  result: MatchResult;
  onOpenDetails: (scheme: Scheme) => void;
  isBookmarked: boolean;
  onToggleBookmark: (schemeId: string) => void;
  isSelectedForCompare: boolean;
  onToggleCompare: (schemeId: string) => void;
  disableCompareSelect: boolean;
}

export const SchemeCard: React.FC<SchemeCardProps> = ({
  result,
  onOpenDetails,
  isBookmarked,
  onToggleBookmark,
  isSelectedForCompare,
  onToggleCompare,
  disableCompareSelect,
}) => {
  const { scheme, status, score, metCriteria, unmetCriteria, conditionalNotes } = result;

  const isEligible = status === 'eligible';
  const isConditional = status === 'conditional';
  const isIneligible = status === 'ineligible';

  return (
    <div
      className={`bg-white rounded-xl border transition-all hover:shadow-md flex flex-col justify-between ${
        isEligible
          ? 'border-emerald-200/90 shadow-xs ring-1 ring-emerald-500/10'
          : isConditional
          ? 'border-amber-200/90 shadow-xs'
          : 'border-slate-200/70 opacity-80 hover:opacity-100 bg-slate-50/40'
      }`}
    >
      <div className="p-5">
        {/* Top Kicker & Actions */}
        <div className="flex items-start justify-between gap-3 mb-2">
          {/* Unboxed Metadata Kicker (Anti-Pill discipline) */}
          <div className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500 font-medium">
            <span className="text-slate-700 font-semibold">{scheme.category}</span>
            <span aria-hidden="true">·</span>
            <span>{scheme.level}</span>
            <span aria-hidden="true">·</span>
            <span className="text-slate-600">{scheme.benefitType}</span>
          </div>

          {/* Card action controls: Bookmark & Compare */}
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={() => onToggleBookmark(scheme.id)}
              className={`p-1.5 rounded-lg transition-colors ${
                isBookmarked
                  ? 'text-emerald-700 bg-emerald-50'
                  : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
              }`}
              title={isBookmarked ? 'Remove bookmark' : 'Bookmark scheme'}
            >
              <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-emerald-600' : ''}`} />
            </button>

            <button
              type="button"
              disabled={!isSelectedForCompare && disableCompareSelect}
              onClick={() => onToggleCompare(scheme.id)}
              className={`p-1.5 rounded-lg text-xs flex items-center gap-1 transition-colors ${
                isSelectedForCompare
                  ? 'text-blue-700 bg-blue-50 font-medium'
                  : disableCompareSelect
                  ? 'text-slate-300 cursor-not-allowed'
                  : 'text-slate-400 hover:text-slate-700 hover:bg-slate-100'
              }`}
              title={isSelectedForCompare ? 'Remove from compare' : 'Add to side-by-side compare'}
            >
              {isSelectedForCompare ? (
                <CheckSquare className="w-4 h-4 text-blue-600" />
              ) : (
                <Square className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>

        {/* Scheme Title */}
        <div className="mb-2.5">
          <h3
            onClick={() => onOpenDetails(scheme)}
            className="text-base font-bold text-slate-900 leading-snug hover:text-emerald-700 transition-colors cursor-pointer"
          >
            {scheme.name}
          </h3>
          {scheme.hindiName && (
            <p className="text-xs text-slate-400 font-serif mt-0.5">
              {scheme.hindiName}
            </p>
          )}
        </div>

        {/* Benefit Highlight Box */}
        <div className="bg-slate-50 border border-slate-100 rounded-lg px-3 py-2 mb-3 flex items-baseline justify-between gap-2">
          <div>
            <span className="text-[10px] text-slate-500 uppercase tracking-wider font-semibold block">
              Entitlement Benefit
            </span>
            <span className="text-sm font-bold text-slate-900">
              {scheme.monetaryValueDisplay}
            </span>
          </div>
          <span className="text-[11px] text-slate-500 font-medium text-right shrink-0">
            {scheme.applicationMode}
          </span>
        </div>

        {/* Description */}
        <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-3.5">
          {scheme.description}
        </p>

        {/* Qualification Status & Checks */}
        <div className="pt-3 border-t border-slate-100 space-y-2 text-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 font-semibold">
              {isEligible && (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="text-emerald-800 font-bold">100% Eligible</span>
                </>
              )}
              {isConditional && (
                <>
                  <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                  <span className="text-amber-800 font-bold">Conditionally Eligible</span>
                </>
              )}
              {isIneligible && (
                <>
                  <XCircle className="w-4 h-4 text-slate-400 shrink-0" />
                  <span className="text-slate-600 font-medium">Currently Ineligible</span>
                </>
              )}
            </div>

            <span className="font-mono text-xs font-bold text-slate-500">
              Match {score}%
            </span>
          </div>

          {/* Met / Unmet highlights */}
          {isEligible && (
            <div className="text-[11px] text-emerald-700 bg-emerald-50/70 p-2 rounded border border-emerald-100/80">
              <span className="font-medium block">✓ All statutory criteria verified:</span>
              <span className="text-emerald-900/80 line-clamp-2">
                {metCriteria.slice(0, 2).join(' · ')}
              </span>
            </div>
          )}

          {isConditional && (
            <div className="text-[11px] text-amber-800 bg-amber-50/70 p-2 rounded border border-amber-100/80">
              <span className="font-medium block">⚠ Action required:</span>
              <span className="text-amber-900 line-clamp-2">
                {conditionalNotes?.[0] || unmetCriteria[0]}
              </span>
            </div>
          )}

          {isIneligible && (
            <div className="text-[11px] text-slate-600 bg-slate-100/70 p-2 rounded border border-slate-200/60">
              <span className="font-medium text-slate-700 block">Gap / Reason:</span>
              <span className="text-slate-600 line-clamp-2">
                {unmetCriteria.slice(0, 2).join(' · ')}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="px-5 py-3 bg-slate-50/80 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
        <span className="text-slate-500 flex items-center gap-1 text-[11px]">
          <Clock className="w-3 h-3 text-slate-400" />
          <span>{scheme.processingFee}</span>
        </span>

        <button
          type="button"
          onClick={() => onOpenDetails(scheme)}
          className="flex items-center gap-1 font-semibold text-emerald-700 hover:text-emerald-800 transition-colors py-1 cursor-pointer"
        >
          <span>View Guidelines</span>
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
