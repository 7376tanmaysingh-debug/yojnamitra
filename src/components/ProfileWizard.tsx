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
            <span>Interactive Welfare Screener</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold font-serif">
            Calculate Your Government Scheme Entitlements
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Answer a few simple questions below. Our deterministic engine cross-checks your exact age, social category, income, and occupation against 20+ verified Central and State welfare guidelines.
          </p>
        </div>

        <div className="flex flex-row md:flex-col items-center md:items-end gap-3 w-full md:w-auto justify-between border-t md:border-t-0 pt-3 md:pt-0 border-slate-700/60">
          <div className="text-left md:text-right">
            <span className="text-xs text-slate-400 block">Identified Entitlements:</span>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-extrabold text-emerald-400 font-mono">{eligibleCount}</span>
              <span className="text-xs text-slate-300">Schemes 100% Eligible</span>
            </div>
            {conditionalCount > 0 && (
              <span className="text-[11px] text-amber-300 block">
                +{conditionalCount} conditionally eligible
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onViewMatches}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-semibold shadow-sm transition-colors whitespace-nowrap cursor-pointer"
          >
            <span>Inspect All Matches</span>
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
              <h3 className="text-sm font-bold text-slate-900">Demographics & Identity</h3>
              <p className="text-xs text-slate-500">Basic citizen background parameters</p>
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Citizen / Applicant Name
            </label>
            <input
              type="text"
              value={profile.name}
              onChange={(e) => updateField('name', e.target.value)}
              placeholder="e.g. Ramesh Kumar"
              className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Age & Gender */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Age: <span className="font-bold text-emerald-700">{profile.age} yrs</span>
              </label>
              <input
                type="number"
                min={1}
                max={105}
                value={profile.age}
                onChange={(e) => updateField('age', Math.max(1, parseInt(e.target.value) || 18))}
                className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 font-mono"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Gender
              </label>
              <select
                value={profile.gender}
                onChange={(e) => updateField('gender', e.target.value as GenderType)}
                className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Transgender">Transgender</option>
              </select>
            </div>
          </div>

          {/* Marital Status & Social Category */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Marital Status
              </label>
              <select
                value={profile.maritalStatus}
                onChange={(e) => updateField('maritalStatus', e.target.value as MaritalStatusType)}
                className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              >
                <option value="Single">Single / Unmarried</option>
                <option value="Married">Married</option>
                <option value="Widowed">Widowed</option>
                <option value="Divorced">Divorced</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-700 mb-1">
                Social Category
              </label>
              <select
                value={profile.socialCategory}
                onChange={(e) => updateField('socialCategory', e.target.value as SocialCategory)}
                className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
              >
                <option value="General">General</option>
                <option value="OBC">OBC (Other Backward Class)</option>
                <option value="SC">SC (Scheduled Caste)</option>
                <option value="ST">ST (Scheduled Tribe)</option>
                <option value="EWS">EWS (Economically Weaker)</option>
                <option value="Minority">Minority Community</option>
              </select>
            </div>
          </div>

          {/* State / UT */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              State / Union Territory
            </label>
            <select
              value={profile.state}
              onChange={(e) => updateField('state', e.target.value)}
              className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
            >
              {STATES_AND_UT.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>

          {/* Residence Area Type */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1.5">
              Area of Residence
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Rural', 'Semi-Urban', 'Urban'] as AreaType[]).map((area) => (
                <button
                  key={area}
                  type="button"
                  onClick={() => updateField('areaType', area)}
                  className={`py-1.5 text-xs font-medium rounded-lg border transition-all text-center ${
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

        {/* Column 2: Occupation & Income Profile */}
        <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs p-5 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <div className="w-7 h-7 rounded-md bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-xs">
              2
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Occupation & Income</h3>
              <p className="text-xs text-slate-500">Economic means and livelihood sector</p>
            </div>
          </div>

          {/* Primary Occupation */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Primary Occupation / Livelihood
            </label>
            <select
              value={profile.occupation}
              onChange={(e) => updateField('occupation', e.target.value as OccupationType)}
              className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
            >
              <option value="Farmer">Farmer / Agriculture</option>
              <option value="Student">Student (School / College)</option>
              <option value="Small Business / MSME">Small Business / Shopkeeper / MSME</option>
              <option value="Street Vendor / Hawker">Street Vendor / Hawker / Cart Operator</option>
              <option value="Artisan / Craftsman">Artisan / Traditional Craftsman</option>
              <option value="Daily Wage / Construction">Daily Wage / Construction Worker</option>
              <option value="Salaried Employee">Salaried Private Employee</option>
              <option value="Unemployed">Unemployed Youth</option>
              <option value="Homemaker">Homemaker</option>
              <option value="Senior Citizen / Retired">Senior Citizen / Retired</option>
            </select>
          </div>

          {/* Annual Household Income Slider & Input */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-medium text-slate-700">
                Annual Household Income
              </label>
              <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                ₹{profile.annualIncome.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              min={0}
              max={1500000}
              step={10000}
              value={profile.annualIncome}
              onChange={(e) => updateField('annualIncome', parseInt(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            {/* Quick Income presets */}
            <div className="flex items-center justify-between text-[11px] text-slate-400 mt-1">
              <button
                type="button"
                onClick={() => updateField('annualIncome', 60000)}
                className="hover:text-emerald-700 underline"
              >
                ₹60k (BPL)
              </button>
              <button
                type="button"
                onClick={() => updateField('annualIncome', 150000)}
                className="hover:text-emerald-700 underline"
              >
                ₹1.5L (EWS)
              </button>
              <button
                type="button"
                onClick={() => updateField('annualIncome', 250000)}
                className="hover:text-emerald-700 underline"
              >
                ₹2.5L
              </button>
              <button
                type="button"
                onClick={() => updateField('annualIncome', 600000)}
                className="hover:text-emerald-700 underline"
              >
                ₹6L (LIG)
              </button>
            </div>
          </div>

          {/* Ration Card Status */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Ration Card Category
            </label>
            <select
              value={profile.rationCardType}
              onChange={(e) => {
                const val = e.target.value as RationCardType;
                updateField('rationCardType', val);
                updateField('hasBplRationCard', val === 'AAY (Antyodaya)' || val === 'BPL (Priority)');
              }}
              className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
            >
              <option value="None">None / Not Issued</option>
              <option value="AAY (Antyodaya)">AAY (Antyodaya Anna Yojana - Poorest)</option>
              <option value="BPL (Priority)">BPL / Priority Household (PHH)</option>
              <option value="APL (Non-Priority)">APL / Non-Priority (General)</option>
            </select>
          </div>

          {/* Income Tax Payer Toggle */}
          <div className="pt-2 border-t border-slate-100">
            <label className="flex items-center justify-between cursor-pointer">
              <span className="text-xs font-medium text-slate-700">
                Does any family member file Income Tax?
              </span>
              <input
                type="checkbox"
                checked={profile.isIncomeTaxPayer}
                onChange={(e) => updateField('isIncomeTaxPayer', e.target.checked)}
                className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
              />
            </label>
            <p className="text-[11px] text-slate-400 mt-0.5">
              Many non-contributory welfare grants (PM-KISAN, NFSA, Ayushman) exclude income tax filers.
            </p>
          </div>

          {/* Housing Status */}
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1">
              Current Housing / Shelter Type
            </label>
            <select
              value={profile.housingType}
              onChange={(e) => updateField('housingType', e.target.value as HousingType)}
              className="w-full text-xs rounded-lg border border-slate-200 px-3 py-2 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 bg-white"
            >
              <option value="Kutcha / Mud House">Kutcha / Thatched / Mud House</option>
              <option value="Semi-Pucca">Semi-Pucca (Asbestos / Tin Roof)</option>
              <option value="Pucca">Pucca (Concrete / Permanent Brick)</option>
              <option value="Rented">Rented House / Room</option>
              <option value="Homeless">Homeless / Temporary Shelter</option>
            </select>
          </div>
        </div>

        {/* Column 3: Special Circumstances & Specific Criteria */}
        <div className="bg-white rounded-xl border border-slate-200/90 shadow-xs p-5 space-y-4">
          <div className="flex items-center gap-2 pb-3 border-b border-slate-100">
            <div className="w-7 h-7 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-xs">
              3
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-900">Special Criteria & Needs</h3>
              <p className="text-xs text-slate-500">Unlocks targeted specialized schemes</p>
            </div>
          </div>

          {/* Farmland Acreage (if Farmer or general) */}
          <div className="bg-slate-50/70 p-3 rounded-lg border border-slate-100">
            <div className="flex items-center justify-between mb-1">
              <label className="text-xs font-medium text-slate-700">
                Cultivable Farmland Owned (Acres)
              </label>
              <span className="text-xs font-mono font-bold text-slate-800">
                {profile.landholdingAcres} Acres
              </span>
            </div>
            <input
              type="number"
              min={0}
              max={50}
              step={0.1}
              value={profile.landholdingAcres}
              onChange={(e) => updateField('landholdingAcres', parseFloat(e.target.value) || 0)}
              className="w-full text-xs rounded-lg border border-slate-200 px-3 py-1.5 bg-white text-slate-900 font-mono"
            />
            <span className="text-[10px] text-slate-400 mt-1 block">
              Required for PM-KISAN, KCC, and PMFBY crop insurance.
            </span>
          </div>

          {/* Family & Demographic Specifics */}
          <div className="space-y-3 pt-1">
            {/* Girl child under 10 */}
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={profile.hasGirlChildUnder10}
                onChange={(e) => updateField('hasGirlChildUnder10', e.target.checked)}
                className="w-4 h-4 mt-0.5 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
              />
              <div>
                <span className="text-xs font-medium text-slate-800 block">
                  Has Girl Child (Age 0 - 10 years)
                </span>
                <span className="text-[11px] text-slate-500">
                  Unlocks Sukanya Samriddhi Yojana (8.2% tax-free interest).
                </span>
              </div>
            </label>

            {/* Pregnant or Lactating */}
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={profile.isPregnantOrLactating}
                onChange={(e) => updateField('isPregnantOrLactating', e.target.checked)}
                className="w-4 h-4 mt-0.5 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
              />
              <div>
                <span className="text-xs font-medium text-slate-800 block">
                  Pregnant Woman or Lactating Mother
                </span>
                <span className="text-[11px] text-slate-500">
                  Unlocks PMMVY cash maternity benefit (₹5,000 - ₹6,000).
                </span>
              </div>
            </label>

            {/* Self Help Group (SHG) Member */}
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={profile.isShgMember}
                onChange={(e) => updateField('isShgMember', e.target.checked)}
                className="w-4 h-4 mt-0.5 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
              />
              <div>
                <span className="text-xs font-medium text-slate-800 block">
                  Member of Women Self-Help Group (SHG)
                </span>
                <span className="text-[11px] text-slate-500">
                  Unlocks NRLM Aajeevika revolving funds & subsidized loans.
                </span>
              </div>
            </label>

            {/* Senior Citizen in family */}
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={profile.hasSeniorCitizenInFamily}
                onChange={(e) => updateField('hasSeniorCitizenInFamily', e.target.checked)}
                className="w-4 h-4 mt-0.5 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
              />
              <div>
                <span className="text-xs font-medium text-slate-800 block">
                  Senior Citizen (Age 60+) in Household
                </span>
                <span className="text-[11px] text-slate-500">
                  Unlocks Old Age Pensions & Rashtriya Vayoshri aids.
                </span>
              </div>
            </label>

            {/* Person with Disability (PwD) */}
            <div className="pt-2 border-t border-slate-100">
              <label className="flex items-start gap-2.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={profile.isPersonWithDisability}
                  onChange={(e) => updateField('isPersonWithDisability', e.target.checked)}
                  className="w-4 h-4 mt-0.5 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
                />
                <div>
                  <span className="text-xs font-medium text-slate-800 block">
                    Person with Benchmark Disability (PwD / UDID)
                  </span>
                  <span className="text-[11px] text-slate-500">
                    Qualifies for disability pensions and free assistive equipment.
                  </span>
                </div>
              </label>

              {profile.isPersonWithDisability && (
                <div className="mt-2 pl-6">
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-slate-600">Disability Percentage:</span>
                    <span className="font-bold text-emerald-700">{profile.disabilityPercentage}%</span>
                  </div>
                  <input
                    type="range"
                    min={40}
                    max={100}
                    value={profile.disabilityPercentage || 40}
                    onChange={(e) => updateField('disabilityPercentage', parseInt(e.target.value))}
                    className="w-full accent-emerald-600"
                  />
                  <span className="text-[10px] text-slate-400">
                    Statutory threshold is ≥ 40% certified by CMO medical board.
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex flex-wrap items-center justify-between bg-white rounded-xl border border-slate-200/90 p-4 gap-4 shadow-xs">
        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Reset Form to Default</span>
        </button>

        <div className="flex items-center gap-3">
          <div className="text-xs text-slate-500 hidden sm:block">
            All eligibility evaluations are executed in real-time according to Gazette guidelines.
          </div>
          <button
            type="button"
            onClick={onViewMatches}
            className="flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold shadow-sm transition-colors cursor-pointer"
          >
            <span>Review Matched Schemes ({eligibleCount})</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
