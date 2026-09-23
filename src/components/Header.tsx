import React, { useState, useRef, useEffect } from 'react';
import {
  Landmark,
  Sparkles,
  Printer,
  BookmarkCheck,
  SlidersHorizontal,
  UserCheck,
  ShieldCheck,
  Lock,
  LogOut,
  User,
  CheckCircle2,
  ChevronDown,
  KeyRound,
  Globe
} from 'lucide-react';
import { DEFAULT_CITIZEN_PROFILES } from '../data/schemes';
import { CitizenProfile } from '../types';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSelector } from './LanguageSelector';

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
  const { user, isAuthenticated, logout, openAuthModal } = useAuth();
  const { t } = useLanguage();
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(e.target as Node)) {
        setIsProfileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-slate-900 text-slate-100 border-b border-slate-800 sticky top-0 z-30 shadow-md no-print">
      {/* Top Civic Utility & Language Selector Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2 pb-2 flex flex-wrap items-center justify-between border-b border-slate-800/80 text-xs text-slate-400 gap-2">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
          <span className="font-medium text-slate-300">{t.appName} Civic Portal</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span className="hidden md:inline">{t.civicSubtitle}</span>
          <span aria-hidden="true" className="hidden sm:inline">·</span>
          <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-mono">
            <Lock className="w-3 h-3" />
            <span>{t.securedBadge}</span>
          </span>
        </div>

        <div className="flex items-center gap-3">
          {/* Multi-Language Selector (English, Hindi, Marathi, Tamil) */}
          <LanguageSelector variant="dark" />

          <span aria-hidden="true" className="text-slate-700 hidden sm:inline">|</span>

          {/* Quick Persona Picker */}
          <div className="flex items-center gap-1.5">
            <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden lg:inline">{t.tryPersona}:</span>
            <select
              aria-label="Try Sample Citizen Profile"
              onChange={(e) => {
                const selected = DEFAULT_CITIZEN_PROFILES.find((p) => p.label === e.target.value);
                if (selected) onSelectPersona(selected.profile);
              }}
              defaultValue=""
              className="bg-slate-800 text-slate-200 border border-slate-700 rounded px-2 py-0.5 text-xs focus:outline-none focus:ring-1 focus:ring-emerald-500 cursor-pointer max-w-[140px] sm:max-w-none truncate"
            >
              <option value="" disabled>{t.choosePersona}</option>
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
            <span className="text-slate-400 hidden sm:inline">{t.textSize}:</span>
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

      {/* Main Branding & Citizen Action Row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-600 to-teal-800 flex items-center justify-center text-white shadow-inner shrink-0">
            <Landmark className="w-6 h-6" />
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <h1 className="text-lg sm:text-xl font-bold tracking-tight text-white font-serif">
                {t.appName}
              </h1>
              <span className="text-xs text-emerald-400 font-medium tracking-wide uppercase">
                {t.schemeFinder}
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {t.tagline}
            </p>
          </div>
        </div>

        {/* Action Highlights & Secured Citizen Controls */}
        <div className="flex items-center flex-wrap gap-2 text-xs">
          <div className="bg-slate-800/80 border border-slate-700/60 rounded-lg px-3 py-1.5 flex items-center gap-2">
            <span className="text-slate-400">{t.eligible}:</span>
            <span className="font-bold text-emerald-400 text-sm">{eligibleCount} {t.programs}</span>
            {totalEntitlementSum > 0 && (
              <>
                <span className="text-slate-600">·</span>
                <span className="text-slate-400">{t.value}:</span>
                <span className="font-bold text-amber-400 text-sm">₹{(totalEntitlementSum / 100000).toFixed(1)}L+</span>
              </>
            )}
          </div>

          <button
            type="button"
            onClick={onOpenPrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer"
            title="Download or Print Citizen Welfare Dossier"
          >
            <Printer className="w-3.5 h-3.5 text-slate-300" />
            <span className="font-medium">{t.printDossier}</span>
          </button>

          {/* Secured Citizen Profile Dropdown */}
          {isAuthenticated && user && (
            <div className="relative" ref={profileMenuRef}>
              <button
                type="button"
                onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 bg-emerald-950/80 hover:bg-emerald-900/80 text-emerald-200 border border-emerald-700/80 rounded-lg transition-colors cursor-pointer shadow-xs"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                  {user.name ? user.name.charAt(0).toUpperCase() : 'C'}
                </div>
                <div className="text-left">
                  <span className="font-bold text-xs block text-white leading-none">
                    {user.name}
                  </span>
                  <span className="text-[10px] text-emerald-400 flex items-center gap-1 mt-0.5">
                    <CheckCircle2 className="w-2.5 h-2.5" />
                    <span>{t.verifiedCitizen}</span>
                  </span>
                </div>
                <ChevronDown className="w-3 h-3 text-emerald-400 ml-0.5" />
              </button>

              {/* Profile Dropdown */}
              {isProfileMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white text-slate-900 rounded-xl shadow-xl border border-slate-200 py-2 z-50 text-xs animate-in fade-in zoom-in-95 duration-100">
                  <div className="px-4 py-2 border-b border-slate-100">
                    <p className="font-bold text-sm text-slate-900">{user.name}</p>
                    <p className="text-slate-500 font-mono text-[11px] truncate">
                      {user.email || user.phone}
                    </p>
                    <div className="mt-1.5 flex items-center gap-1.5 text-[10px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 inline-flex">
                      <ShieldCheck className="w-3 h-3 text-emerald-600" />
                      <span>Provider: {user.authProvider.toUpperCase()}</span>
                    </div>
                  </div>

                  <div className="px-2 py-1 space-y-0.5">
                    <button
                      type="button"
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        setActiveTab('documents');
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center justify-between text-slate-700"
                    >
                      <span>{t.tabDocuments}</span>
                      <BookmarkCheck className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        onOpenPrint();
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-100 flex items-center justify-between text-slate-700"
                    >
                      <span>{t.printDossier}</span>
                      <Printer className="w-3.5 h-3.5 text-slate-400" />
                    </button>
                  </div>

                  <div className="border-t border-slate-100 px-2 pt-1 mt-1">
                    <button
                      type="button"
                      onClick={() => {
                        setIsProfileMenuOpen(false);
                        logout();
                      }}
                      className="w-full text-left px-3 py-2 rounded-lg hover:bg-red-50 text-red-700 font-semibold flex items-center justify-between transition-colors"
                    >
                      <span>{t.signOut}</span>
                      <LogOut className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
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
          <span>{t.tabScreener}</span>
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
          <span>{t.tabSchemes}</span>
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
          <span>{t.tabDocuments}</span>
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
          <span>{t.tabCompare}</span>
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
          <span>{t.tabAI}</span>
        </button>
      </div>
    </header>
  );
};
