import React, { useState, useMemo, useEffect } from 'react';
import { CitizenProfile, Scheme, MatchResult } from './types';
import { SCHEMES, DEFAULT_CITIZEN_PROFILES } from './data/schemes';
import { matchAllSchemes } from './utils/matcher';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { LoginPage } from './components/LoginPage';
import { Header } from './components/Header';
import { ProfileWizard } from './components/ProfileWizard';
import { SchemeList } from './components/SchemeList';
import { SchemeComparator } from './components/SchemeComparator';
import { DocumentChecklist } from './components/DocumentChecklist';
import { AIAdvisor } from './components/AIAdvisor';
import { SchemeDetailModal } from './components/SchemeDetailModal';
import { PrintDossier } from './components/PrintDossier';
import {
  Landmark,
  ShieldCheck,
  PhoneCall,
  ExternalLink,
  Lock,
  CheckCircle2,
  AlertCircle,
  Smartphone,
  Sparkles,
  KeyRound,
  RefreshCw
} from 'lucide-react';

function AppContent() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const { t } = useLanguage();

  // Citizen profile state
  const [profile, setProfile] = useState<CitizenProfile>(() => {
    try {
      const saved = localStorage.getItem('jankalyan_profile');
      return saved ? JSON.parse(saved) : DEFAULT_CITIZEN_PROFILES[0].profile;
    } catch {
      return DEFAULT_CITIZEN_PROFILES[0].profile;
    }
  });

  // Sync profile applicant name with logged-in citizen
  useEffect(() => {
    if (user?.name) {
      setProfile((prev) => ({ ...prev, name: user.name }));
    }
  }, [user]);

  // Active view tab
  const [activeTab, setActiveTab] = useState<'screener' | 'schemes' | 'compare' | 'documents' | 'ai'>('screener');

  // Selected scheme for detail modal
  const [activeDetailScheme, setActiveDetailScheme] = useState<Scheme | null>(null);

  // Bookmarks persistence
  const [bookmarks, setBookmarks] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('jankalyan_bookmarks');
      return saved ? JSON.parse(saved) : ['ayushman-bharat-pmjay', 'pm-kisan'];
    } catch {
      return ['ayushman-bharat-pmjay', 'pm-kisan'];
    }
  });

  // Comparison list (IDs, max 3)
  const [compareList, setCompareList] = useState<string[]>(['ayushman-bharat-pmjay', 'pm-kisan']);

  // Print modal toggle
  const [showPrintModal, setShowPrintModal] = useState<boolean>(false);

  // Accessibility font size
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');

  // Save profile to local storage
  useEffect(() => {
    try {
      localStorage.setItem('jankalyan_profile', JSON.stringify(profile));
    } catch (e) {
      console.error(e);
    }
  }, [profile]);

  // Save bookmarks
  useEffect(() => {
    try {
      localStorage.setItem('jankalyan_bookmarks', JSON.stringify(bookmarks));
    } catch (e) {
      console.error(e);
    }
  }, [bookmarks]);

  // Real-time deterministic matching
  const matchResults = useMemo(() => {
    return matchAllSchemes(profile, SCHEMES);
  }, [profile]);

  const eligibleResults = useMemo(() => {
    return matchResults.filter((r) => r.status === 'eligible');
  }, [matchResults]);

  const conditionalResults = useMemo(() => {
    return matchResults.filter((r) => r.status === 'conditional');
  }, [matchResults]);

  const totalEntitlementSum = useMemo(() => {
    return eligibleResults.reduce((sum, res) => sum + res.scheme.monetaryValueEstimate, 0);
  }, [eligibleResults]);

  const toggleBookmark = (schemeId: string) => {
    setBookmarks((prev) =>
      prev.includes(schemeId) ? prev.filter((id) => id !== schemeId) : [...prev, schemeId]
    );
  };

  const toggleCompare = (schemeId: string) => {
    setCompareList((prev) => {
      if (prev.includes(schemeId)) {
        return prev.filter((id) => id !== schemeId);
      }
      if (prev.length >= 3) {
        return prev;
      }
      return [...prev, schemeId];
    });
  };

  const handleSelectPersona = (newProfile: CitizenProfile) => {
    setProfile(newProfile);
    setActiveTab('schemes');
  };

  const selectedCompareSchemes = useMemo(() => {
    return SCHEMES.filter((s) => compareList.includes(s.id));
  }, [compareList]);

  // Font size class mapping
  const fontSizeClass =
    fontSize === 'xlarge'
      ? 'text-[17px]'
      : fontSize === 'large'
      ? 'text-[15px]'
      : 'text-[14px]';

  // 1. Loading Splash
  if (isLoading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-4 space-y-4">
        <div className="w-12 h-12 rounded-xl bg-emerald-600 flex items-center justify-center shadow-lg animate-pulse">
          <Landmark className="w-7 h-7 text-white" />
        </div>
        <div className="text-center space-y-1">
          <h2 className="text-lg font-serif font-bold tracking-tight">{t.appName} {t.schemeFinder}</h2>
          <p className="text-xs text-slate-400 flex items-center justify-center gap-2">
            <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-400" />
            <span>Establishing 256-bit TLS encrypted citizen session...</span>
          </p>
        </div>
      </div>
    );
  }

  // 2. GATED LOGIN PAGE: If not logged in, user sees the Login Page first
  if (!isAuthenticated) {
    return <LoginPage />;
  }

  // 3. FULL SITE ACCESS: Displayed once user logs in
  return (
    <div className={`min-h-screen flex flex-col bg-[#f8fafc] ${fontSizeClass}`}>
      {/* Civic Portal Header */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        eligibleCount={eligibleResults.length}
        totalEntitlementSum={totalEntitlementSum}
        bookmarksCount={bookmarks.length}
        onSelectPersona={handleSelectPersona}
        onOpenPrint={() => setShowPrintModal(true)}
        fontSize={fontSize}
        setFontSize={setFontSize}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 space-y-5">
        {/* Logged In Citizen Welcome Banner */}
        {user && (
          <div className="bg-white rounded-xl border border-slate-200 p-3.5 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm shrink-0">
                {user.name ? user.name.charAt(0).toUpperCase() : 'C'}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900 text-sm">
                    {t.welcome}, {user.name}
                  </span>
                  <span className="text-[10px] bg-emerald-50 text-emerald-800 border border-emerald-200 px-1.5 py-0.2 rounded font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-600" />
                    <span>{t.verifiedCitizen}</span>
                  </span>
                </div>
                <span className="text-slate-500 block text-[11px]">
                  Logged in with{' '}
                  <strong className="text-emerald-700 capitalize">
                    {user.authProvider === 'mobile_otp' ? t.tabMobileOtp : user.authProvider}
                  </strong>{' '}
                  · Full site access unlocked · 20+ statutory schemes active
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 self-end sm:self-center shrink-0 text-slate-500 font-mono text-[11px]">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t.tlsEncrypted}</span>
            </div>
          </div>
        )}

        {/* Tab Views */}
        {activeTab === 'screener' && (
          <ProfileWizard
            profile={profile}
            onChange={setProfile}
            onReset={() => setProfile(DEFAULT_CITIZEN_PROFILES[0].profile)}
            onViewMatches={() => setActiveTab('schemes')}
            eligibleCount={eligibleResults.length}
            conditionalCount={conditionalResults.length}
            totalEntitlementSum={totalEntitlementSum}
          />
        )}

        {activeTab === 'schemes' && (
          <SchemeList
            matchResults={matchResults}
            onOpenDetails={(s) => setActiveDetailScheme(s)}
            bookmarks={bookmarks}
            onToggleBookmark={toggleBookmark}
            compareList={compareList}
            onToggleCompare={toggleCompare}
            onGoToScreener={() => setActiveTab('screener')}
          />
        )}

        {activeTab === 'compare' && (
          <SchemeComparator
            selectedSchemes={selectedCompareSchemes}
            allSchemes={SCHEMES}
            onRemoveScheme={(id) => setCompareList((prev) => prev.filter((item) => item !== id))}
            onAddScheme={(id) => {
              if (compareList.length < 3 && !compareList.includes(id)) {
                setCompareList((prev) => [...prev, id]);
              }
            }}
            onOpenDetails={(s) => setActiveDetailScheme(s)}
          />
        )}

        {activeTab === 'documents' && (
          <DocumentChecklist eligibleResults={eligibleResults} />
        )}

        {activeTab === 'ai' && (
          <AIAdvisor profile={profile} matchedResults={matchResults} />
        )}
      </main>

      {/* Scheme Detail Modal */}
      {activeDetailScheme && (
        <SchemeDetailModal
          scheme={activeDetailScheme}
          matchResult={matchResults.find((r) => r.scheme.id === activeDetailScheme.id)}
          onClose={() => setActiveDetailScheme(null)}
          isBookmarked={bookmarks.includes(activeDetailScheme.id)}
          onToggleBookmark={toggleBookmark}
        />
      )}

      {/* Printable Entitlement Dossier Modal */}
      {showPrintModal && (
        <PrintDossier
          profile={profile}
          matchedResults={matchResults}
          onClose={() => setShowPrintModal(false)}
        />
      )}

      {/* Civic Public Service Footer */}
      <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 text-xs py-10 mt-12 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Mission Statement */}
            <div className="space-y-2.5 md:col-span-1">
              <div className="flex items-center gap-2 text-white font-bold font-serif text-sm">
                <Landmark className="w-4 h-4 text-emerald-400" />
                <span>{t.appName} {t.schemeFinder}</span>
              </div>
              <p className="text-slate-400 leading-relaxed text-[11px]">
                Empowering Indian citizens with direct, transparent, and unmediated access to welfare benefits, subsidies, and social security entitlements guaranteed by Constitution and Government Gazettes.
              </p>
            </div>

            {/* Official Portals Directory */}
            <div className="space-y-2">
              <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
                Official Apex Portals
              </h4>
              <ul className="space-y-1 text-slate-400 text-[11px]">
                <li>
                  <a href="https://www.india.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1">
                    <span>National Portal of India</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                </li>
                <li>
                  <a href="https://services.india.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1">
                    <span>National Government Services Portal</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                </li>
                <li>
                  <a href="https://www.myscheme.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1">
                    <span>myScheme Platform</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                </li>
                <li>
                  <a href="https://dbtbharat.gov.in" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 flex items-center gap-1">
                    <span>DBT Bharat Direct Transfer</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Helpline Numbers */}
            <div className="space-y-2">
              <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px]">
                Toll-Free Citizen Helplines
              </h4>
              <ul className="space-y-1.5 text-slate-400 text-[11px]">
                <li className="flex items-center gap-2">
                  <PhoneCall className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>{t.tollFreePMJAY}</span>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneCall className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>{t.tollFreeKisan}</span>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneCall className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>{t.tollFreeGrievance}</span>
                </li>
                <li className="flex items-center gap-2">
                  <PhoneCall className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>{t.tollFreeWomen}</span>
                </li>
              </ul>
            </div>

            {/* Anti Fraud Advisory */}
            <div className="space-y-2 bg-slate-800/60 p-3.5 rounded-lg border border-slate-700/60 text-[11px]">
              <div className="flex items-center gap-1.5 font-bold text-amber-400">
                <ShieldCheck className="w-4 h-4 shrink-0" />
                <span>Anti-Bribery & Fraud Warning</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {t.freeServiceNotice}
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-2">
            <span>© 2026 {t.appName} Public Entitlement Portal. Open Civic Information Service.</span>
            <div className="flex items-center gap-4">
              <span>Data Grounded in Official GoI Gazettes</span>
              <span>·</span>
              <span>Accessibility WCAG AA Compliant</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </LanguageProvider>
  );
}
