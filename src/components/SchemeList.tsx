import React, { useState, useMemo } from 'react';
import { MatchResult, Scheme, SchemeCategory } from '../types';
import { SchemeCard } from './SchemeCard';
import { useLanguage } from '../context/LanguageContext';
import {
  Search,
  Filter,
  ArrowUpDown,
  CheckCircle2,
  AlertTriangle,
  Bookmark,
  SlidersHorizontal,
  X
} from 'lucide-react';

interface SchemeListProps {
  matchResults: MatchResult[];
  onOpenDetails: (scheme: Scheme) => void;
  bookmarks: string[];
  onToggleBookmark: (schemeId: string) => void;
  compareList: string[];
  onToggleCompare: (schemeId: string) => void;
  onGoToScreener: () => void;
}

export const SchemeList: React.FC<SchemeListProps> = ({
  matchResults,
  onOpenDetails,
  bookmarks,
  onToggleBookmark,
  compareList,
  onToggleCompare,
  onGoToScreener,
}) => {
  const { t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [statusFilter, setStatusFilter] = useState<'all' | 'eligible' | 'conditional' | 'ineligible' | 'bookmarked'>('all');
  const [sortBy, setSortBy] = useState<'match' | 'value' | 'name'>('match');

  const categories = [
    'All',
    'Health',
    'Agriculture',
    'Housing',
    'Business & MSME',
    'Women & Child',
    'Education',
    'Pensions & Elderly',
    'Social Welfare',
    'Employment & Skills',
  ];

  const counts = useMemo(() => {
    return {
      all: matchResults.length,
      eligible: matchResults.filter((r) => r.status === 'eligible').length,
      conditional: matchResults.filter((r) => r.status === 'conditional').length,
      ineligible: matchResults.filter((r) => r.status === 'ineligible').length,
      bookmarked: matchResults.filter((r) => bookmarks.includes(r.scheme.id)).length,
    };
  }, [matchResults, bookmarks]);

  const filteredAndSorted = useMemo(() => {
    return matchResults
      .filter((res) => {
        // Status tab filter
        if (statusFilter === 'eligible' && res.status !== 'eligible') return false;
        if (statusFilter === 'conditional' && res.status !== 'conditional') return false;
        if (statusFilter === 'ineligible' && res.status !== 'ineligible') return false;
        if (statusFilter === 'bookmarked' && !bookmarks.includes(res.scheme.id)) return false;

        // Category filter
        if (selectedCategory !== 'All' && res.scheme.category !== selectedCategory) {
          return false;
        }

        // Search text
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = res.scheme.name.toLowerCase().includes(q);
          const matchHindi = res.scheme.hindiName?.toLowerCase().includes(q);
          const matchDesc = res.scheme.description.toLowerCase().includes(q);
          const matchTags = res.scheme.tags.some((t) => t.toLowerCase().includes(q));
          const matchMinistry = res.scheme.ministry.toLowerCase().includes(q);
          if (!matchName && !matchHindi && !matchDesc && !matchTags && !matchMinistry) {
            return false;
          }
        }

        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'match') {
          const statusWeight = { eligible: 3, conditional: 2, ineligible: 1 };
          if (statusWeight[a.status] !== statusWeight[b.status]) {
            return statusWeight[b.status] - statusWeight[a.status];
          }
          return b.score - a.score;
        }
        if (sortBy === 'value') {
          return b.scheme.monetaryValueEstimate - a.scheme.monetaryValueEstimate;
        }
        if (sortBy === 'name') {
          return a.scheme.name.localeCompare(b.scheme.name);
        }
        return 0;
      });
  }, [matchResults, statusFilter, selectedCategory, searchQuery, sortBy, bookmarks]);

  return (
    <div className="space-y-5">
      {/* Search and Sort Toolbar */}
      <div className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder}
              className="w-full text-xs pl-9 pr-8 py-2 rounded-lg border border-slate-200 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 text-xs shrink-0">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <span className="text-slate-500 hidden sm:inline">{t.sortLabel}:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="text-xs border border-slate-200 rounded-lg px-2.5 py-2 text-slate-800 bg-slate-50 focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer"
            >
              <option value="match">{t.sortHighestMatch}</option>
              <option value="value">{t.sortHighestValue}</option>
              <option value="name">{t.sortAlphabetical}</option>
            </select>
          </div>
        </div>

        {/* Status Segmented Control (Interactive buttons) */}
        <div className="flex items-center flex-wrap gap-1.5 pt-1 border-t border-slate-100 text-xs font-medium">
          <button
            type="button"
            onClick={() => setStatusFilter('all')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
              statusFilter === 'all'
                ? 'bg-slate-900 text-white font-semibold shadow-xs'
                : 'bg-slate-100 text-slate-600 hover:text-slate-900'
            }`}
          >
            <span>{t.filterAll}</span>
            <span className="text-[11px] opacity-80">({counts.all})</span>
          </button>

          <button
            type="button"
            onClick={() => setStatusFilter('eligible')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
              statusFilter === 'eligible'
                ? 'bg-emerald-700 text-white font-semibold shadow-xs'
                : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>{t.filterEligible}</span>
            <span className="text-[11px] opacity-80">({counts.eligible})</span>
          </button>

          <button
            type="button"
            onClick={() => setStatusFilter('conditional')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
              statusFilter === 'conditional'
                ? 'bg-amber-600 text-white font-semibold shadow-xs'
                : 'bg-amber-50 text-amber-800 hover:bg-amber-100'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>{t.filterConditional}</span>
            <span className="text-[11px] opacity-80">({counts.conditional})</span>
          </button>

          <button
            type="button"
            onClick={() => setStatusFilter('ineligible')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
              statusFilter === 'ineligible'
                ? 'bg-slate-700 text-white font-semibold shadow-xs'
                : 'bg-slate-100 text-slate-500 hover:text-slate-700'
            }`}
          >
            <span>{t.filterIneligible}</span>
            <span className="text-[11px] opacity-80">({counts.ineligible})</span>
          </button>

          <button
            type="button"
            onClick={() => setStatusFilter('bookmarked')}
            className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer ${
              statusFilter === 'bookmarked'
                ? 'bg-indigo-700 text-white font-semibold shadow-xs'
                : 'bg-indigo-50 text-indigo-800 hover:bg-indigo-100'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5" />
            <span>{t.filterSaved}</span>
            <span className="text-[11px] opacity-80">({counts.bookmarked})</span>
          </button>
        </div>

        {/* Category Horizontal Bar */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 text-xs no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-200 text-slate-900 font-bold'
                  : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Compare Notice Bar if items selected */}
      {compareList.length > 0 && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 flex items-center justify-between gap-3 text-xs">
          <span className="text-blue-900 font-medium">
            <strong>{compareList.length} of 3</strong> schemes selected for side-by-side comparison matrix.
          </span>
          <div className="flex items-center gap-2">
            <span className="text-slate-500 text-[11px] hidden sm:inline">
              Switch to "04. Scheme Comparator" tab to view.
            </span>
          </div>
        </div>
      )}

      {/* Schemes Grid */}
      {filteredAndSorted.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredAndSorted.map((res) => (
            <SchemeCard
              key={res.scheme.id}
              result={res}
              onOpenDetails={onOpenDetails}
              isBookmarked={bookmarks.includes(res.scheme.id)}
              onToggleBookmark={onToggleBookmark}
              isSelectedForCompare={compareList.includes(res.scheme.id)}
              onToggleCompare={onToggleCompare}
              disableCompareSelect={compareList.length >= 3 && !compareList.includes(res.scheme.id)}
            />
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-dashed border-slate-300 p-12 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto text-slate-400">
            <Filter className="w-6 h-6" />
          </div>
          <h3 className="text-sm font-bold text-slate-800">No schemes matched the current filters</h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            Try adjusting your search query, changing the category, or revising your demographic answers in the screener.
          </p>
          <div className="pt-2">
            <button
              type="button"
              onClick={onGoToScreener}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Modify Citizen Screener Answers</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
