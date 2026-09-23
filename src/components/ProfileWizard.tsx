import React from 'react';
import {
  CitizenProfile,
  SocialCategory,
  OccupationType,
  AreaType,
  GenderType,
  MaritalStatusType,
  RationCardType,
  HousingType
} from '../types';
import { STATES_AND_UT } from '../data/schemes';
import { useLanguage } from '../context/LanguageContext';
import {
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  TrendingUp,
  ArrowRight,
  ShieldCheck,
  RefreshCw,
  Home,
  Briefcase,
  Users,
  Wallet
} from 'lucide-react';

interface ProfileWizardProps {
  profile: CitizenProfile;
  onChange: (updated: CitizenProfile) => void;
  onReset: () => void;
  onViewMatches: () => void;
  eligibleCount: number;
  conditionalCount: number;
  totalEntitlementSum: number;
}

export const ProfileWizard: React.FC<ProfileWizardProps> = ({
  profile,
  onChange,
  onReset,
  onViewMatches,
  eligibleCount,
  conditionalCount,
  totalEntitlementSum,
}) => {
  const { t } = useLanguage();

  const updateField = <K extends keyof CitizenProfile>(field: K, value: CitizenProfile[K]) => {
    onChange({
      ...profile,
      [field]: value
    });
  };

  return (
    <div className="space-y-6">
      {/* Top Banner Summary */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700/80 rounded-xl p-5 sm:p-6 text-white shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div className="space-y-1.5 max-w-xl">
          <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>{t.wizardTitle}</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif">
            {t.tagline}
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {t.wizardSub}
          </p>
        </div>

        <div className="flex flex-row md:flex-col items-center md:items-end gap-3 w-full md:w-auto justify-between border-t md:border-t-0 pt-3 md:pt-0 border-slate-700/60">
          <div className="text-left md:text-right">
            <span className="text-xs text-slate-400 block">{t.eligible}:</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-emerald-400 font-mono">{eligibleCount}</span>
              <span className="text-xs text-slate-300">{t.programs} (100%)</span>
            </div>
            {conditionalCount > 0 && (
              <span className="text-[11px] text-amber-300 block">
                +{conditionalCount} {t.filterConditional}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onViewMatches}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>{t.viewMatchesBtn}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Screener Form Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Column 1: Demographic & Identity */}
        <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs p-5 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <div className="w-7 h-7 rounded-md bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-xs">
              1
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">{t.step1}</h3>
              <p className="text-xs text-slate-500">Basic citizen background parameters</p>
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              {t.fullNameLabel}
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => updateField('name', e.target.value)}
              placeholder="e.g. Tanmay Singh"
              className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Age & Gender in two columns */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                {t.age} (Years)
              </label>
              <input
                type="number"
                min={0}
                max={120}
                value={profile.age}
                onChange={(e) => updateField('age', Number(e.target.value))}
                className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                {t.gender}
              </label>
              <select
                value={profile.gender}
                onChange={(e) => updateField('gender', e.target.value as GenderType)}
                className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
              </select>
            </div>
          </div>

          {/* Marital Status */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              {t.maritalStatus}
            </label>
            <select
              value={profile.maritalStatus}
              onChange={(e) => updateField('maritalStatus', e.target.value as MaritalStatusType)}
              className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="Single">Single / Unmarried</option>
              <option value="Married">Married</option>
              <option value="Widowed">Widowed</option>
              <option value="Divorced">Divorced / Separated</option>
            </select>
          </div>

          {/* Social Category */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-medium text-slate-700">
                {t.socialCategory}
              </label>
              <span className="text-[10px] text-slate-400">Affects affirmative schemes</span>
            </div>
            <select
              value={profile.socialCategory}
              onChange={(e) => updateField('socialCategory', e.target.value as SocialCategory)}
              className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="General">General</option>
              <option value="OBC">Other Backward Class (OBC)</option>
              <option value="SC">Scheduled Caste (SC)</option>
              <option value="ST">Scheduled Tribe (ST)</option>
              <option value="EWS">Economically Weaker Section (EWS)</option>
              <option value="Minority">Minority</option>
            </select>
          </div>

          {/* State / UT */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              {t.stateUt}
            </label>
            <select
              value={profile.state}
              onChange={(e) => updateField('state', e.target.value)}
              className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              {STATES_AND_UT.map((st) => (
                <option key={st} value={st}>
                  {st}
                </option>
              ))}
            </select>
          </div>

          {/* Living Area (Rural / Urban) */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              {t.areaType}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Rural', 'Urban', 'Semi-Urban'] as AreaType[]).map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => updateField('areaType', area)}
                  className={`py-1.5 text-xs rounded-lg border capitalize transition-colors ${
                    profile.areaType === area
                      ? 'border-emerald-600 bg-emerald-50 text-emerald-800 font-semibold'
                      : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  {area}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Column 2: Occupation, Income & Assets */}
        <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs p-5 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
              2
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">{t.step2}</h3>
              <p className="text-xs text-slate-500">Economic benchmarks and farmland</p>
            </div>
          </div>

          {/* Primary Occupation */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              {t.occupation}
            </label>
            <select
              value={profile.occupation}
              onChange={(e) => updateField('occupation', e.target.value as OccupationType)}
              className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="Farmer">Farmer / Cultivator</option>
              <option value="Daily Wage / Construction">Daily Wage / Construction / Unorganized</option>
              <option value="Street Vendor / Hawker">Street Vendor / Hawker</option>
              <option value="Artisan / Craftsman">Traditional Artisan / Craftsman</option>
              <option value="Small Business / MSME">Small Business / MSME Owner</option>
              <option value="Salaried Employee">Salaried Employee</option>
              <option value="Student">Student</option>
              <option value="Unemployed">Unemployed / Job Seeker</option>
              <option value="Homemaker">Homemaker</option>
              <option value="Senior Citizen / Retired">Senior Citizen / Retired</option>
            </select>
          </div>

          {/* Annual Family Income */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-medium text-slate-700">
                {t.annualIncome} (INR)
              </label>
              <span className="text-xs font-mono font-bold text-slate-800">
                ₹{profile.annualIncome.toLocaleString('en-IN')}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={1500000}
              step={20000}
              value={profile.annualIncome}
              onChange={(e) => updateField('annualIncome', Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            <div className="flex justify-between text-[10px] text-slate-400 mt-1 font-mono">
              <span>₹0 (BPL)</span>
              <span>₹2.5L (EWS)</span>
              <span>₹8.0L (Creamy)</span>
              <span>₹15L+</span>
            </div>
          </div>

          {/* Ration Card Type */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              {t.rationCard}
            </label>
            <select
              value={profile.rationCardType}
              onChange={(e) => updateField('rationCardType', e.target.value as RationCardType)}
              className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="AAY (Antyodaya)">AAY (Antyodaya Anna Yojana - Poorest)</option>
              <option value="BPL (Priority)">BPL / PHH (Priority Household)</option>
              <option value="APL (Non-Priority)">APL (Above Poverty Line / Non-Priority)</option>
              <option value="None">No Ration Card Issued</option>
            </select>
          </div>

          {/* Landholding (Acres) - conditional highlight if farmer */}
          <div className={profile.occupation === 'Farmer' ? 'bg-amber-50/50 p-2.5 rounded-lg border border-amber-200/80' : ''}>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-medium text-slate-700">
                {t.landholding}
              </label>
              <span className="text-xs font-mono font-bold text-slate-800">
                {profile.landholdingAcres} Acres
              </span>
            </div>
            <input
              type="number"
              step="0.5"
              min={0}
              max={50}
              value={profile.landholdingAcres}
              onChange={(e) => updateField('landholdingAcres', Number(e.target.value))}
              className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
            />
            <span className="text-[10px] text-slate-500 block mt-1">
              Small & Marginal farmer criteria is typically ≤ 5.0 acres (2 hectares).
            </span>
          </div>

          {/* Housing Condition */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              {t.housingType}
            </label>
            <select
              value={profile.housingType}
              onChange={(e) => updateField('housingType', e.target.value as HousingType)}
              className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="Homeless">Homeless / Houseless</option>
              <option value="Kutcha / Mud House">Kutcha (Mud / Thatched / Temporary)</option>
              <option value="Semi-Pucca">Semi-Pucca House</option>
              <option value="Pucca">Pucca (Concrete House)</option>
              <option value="Rented">Rented Accommodation</option>
            </select>
          </div>

          {/* Income Tax Payer Checkbox */}
          <div className="pt-1">
            <label className="flex items-start gap-2 text-xs text-slate-700 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={profile.isIncomeTaxPayer}
                onChange={(e) => updateField('isIncomeTaxPayer', e.target.checked)}
                className="mt-0.5 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
              />
              <span>
                <strong>{t.incomeTaxPayer}</strong> (Mandatory exclusion criterion for PM-Kisan and many subsidies)
              </span>
            </label>
          </div>
        </div>

        {/* Column 3: Special Circumstances & Family Criteria */}
        <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs p-5 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <div className="w-7 h-7 rounded-md bg-purple-50 text-purple-700 flex items-center justify-center font-bold text-xs">
              3
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">{t.step3}</h3>
              <p className="text-xs text-slate-500">Targeted welfare circumstances</p>
            </div>
          </div>

          {/* Disability / PwD */}
          <div className="space-y-2 border border-slate-100 rounded-lg p-3">
            <label className="flex items-center justify-between text-xs font-medium text-slate-800 cursor-pointer">
              <span>{t.disability}</span>
              <input
                type="checkbox"
                checked={profile.isPersonWithDisability}
                onChange={(e) => updateField('isPersonWithDisability', e.target.checked)}
                className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4"
              />
            </label>

            {profile.isPersonWithDisability && (
              <div className="pt-2 border-t border-slate-100 space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-600">{t.disabilityPercent}:</span>
                  <span className="font-mono font-bold text-slate-900">{profile.disabilityPercentage}%</span>
                </div>
                <input
                  type="range"
                  min={40}
                  max={100}
                  step={5}
                  value={profile.disabilityPercentage}
                  onChange={(e) => updateField('disabilityPercentage', Number(e.target.value))}
                  className="w-full accent-emerald-600 cursor-pointer"
                />
                <span className="text-[10px] text-slate-400 block">
                  Statutory benchmark disability benefits require ≥ 40% certificate.
                </span>
              </div>
            )}
          </div>

          {/* Girl child under 10 */}
          <div className="border border-slate-100 rounded-lg p-3">
            <label className="flex items-center justify-between text-xs font-medium text-slate-800 cursor-pointer">
              <div>
                <span>{t.girlChild}</span>
                <span className="block text-[10px] text-slate-400">Unlocks Sukanya Samriddhi Yojana (SSY)</span>
              </div>
              <input
                type="checkbox"
                checked={profile.hasGirlChildUnder10}
                onChange={(e) => updateField('hasGirlChildUnder10', e.target.checked)}
                className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4"
              />
            </label>
          </div>

          {/* Pregnant or Lactating Mother */}
          <div className="border border-slate-100 rounded-lg p-3">
            <label className="flex items-center justify-between text-xs font-medium text-slate-800 cursor-pointer">
              <div>
                <span>{t.pregnantOrLactating}</span>
                <span className="block text-[10px] text-slate-400">Unlocks PM Matru Vandana Yojana (PMMVY)</span>
              </div>
              <input
                type="checkbox"
                checked={profile.isPregnantOrLactating}
                onChange={(e) => updateField('isPregnantOrLactating', e.target.checked)}
                className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4"
              />
            </label>
          </div>

          {/* Senior citizen in household */}
          <div className="border border-slate-100 rounded-lg p-3">
            <label className="flex items-center justify-between text-xs font-medium text-slate-800 cursor-pointer">
              <div>
                <span>{t.seniorCitizenFamily}</span>
                <span className="block text-[10px] text-slate-400">Ayushman Bharat ₹5L Top-up (Age 70+) & NOAPS</span>
              </div>
              <input
                type="checkbox"
                checked={profile.hasSeniorCitizenInFamily}
                onChange={(e) => updateField('hasSeniorCitizenInFamily', e.target.checked)}
                className="rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 w-4 h-4"
              />
            </label>
          </div>

          {/* Reset & Quick Trigger Buttons */}
          <div className="pt-2 flex items-center gap-2">
            <button
              type="button"
              onClick={onReset}
              className="flex-1 py-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>{t.resetDefaults}</span>
            </button>

            <button
              type="button"
              onClick={onViewMatches}
              className="flex-1 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-sm"
            >
              <span>{t.viewMatchesBtn}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
