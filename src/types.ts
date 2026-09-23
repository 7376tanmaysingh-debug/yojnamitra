export type SocialCategory = 'General' | 'OBC' | 'SC' | 'ST' | 'EWS' | 'Minority';

export type OccupationType =
  | 'Farmer'
  | 'Student'
  | 'Small Business / MSME'
  | 'Street Vendor / Hawker'
  | 'Artisan / Craftsman'
  | 'Daily Wage / Construction'
  | 'Salaried Employee'
  | 'Unemployed'
  | 'Homemaker'
  | 'Senior Citizen / Retired';

export type AreaType = 'Rural' | 'Urban' | 'Semi-Urban';

export type GenderType = 'Male' | 'Female' | 'Transgender';

export type MaritalStatusType = 'Single' | 'Married' | 'Widowed' | 'Divorced';

export type RationCardType = 'None' | 'AAY (Antyodaya)' | 'BPL (Priority)' | 'APL (Non-Priority)';

export type HousingType = 'Kutcha / Mud House' | 'Semi-Pucca' | 'Pucca' | 'Rented' | 'Homeless';

export interface CitizenUser {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  authProvider: 'google' | 'email' | 'mobile_otp';
  avatarUrl?: string;
  isAadhaarLinked: boolean;
  isPhoneVerified: boolean;
  isEmailVerified: boolean;
  createdAt: string;
  lastLoginAt: string;
}

export interface CitizenProfile {
  name: string;
  age: number;
  gender: GenderType;
  maritalStatus: MaritalStatusType;
  socialCategory: SocialCategory;
  state: string;
  district?: string;
  areaType: AreaType;
  occupation: OccupationType;
  annualIncome: number;
  hasBplRationCard: boolean;
  rationCardType: RationCardType;
  isIncomeTaxPayer: boolean;
  landholdingAcres: number;
  hasGirlChildUnder10: boolean;
  isPregnantOrLactating: boolean;
  isPersonWithDisability: boolean;
  disabilityPercentage: number;
  hasSeniorCitizenInFamily: boolean;
  housingType: HousingType;
  isShgMember: boolean; // Self Help Group
}

export type SchemeCategory =
  | 'Health'
  | 'Agriculture'
  | 'Housing'
  | 'Education'
  | 'Business & MSME'
  | 'Women & Child'
  | 'Pensions & Elderly'
  | 'Employment & Skills'
  | 'Social Welfare';

export type BenefitType =
  | 'Direct Cash Transfer'
  | 'Subsidized Credit / Loan'
  | 'Insurance & Cover'
  | 'Asset Subsidy'
  | 'Scholarship'
  | 'Monthly Pension'
  | 'Free Foodgrains'
  | 'Skill Certification'
  | 'Internship & Stipend';

export interface SchemeEligibilityRules {
  minAge?: number;
  maxAge?: number;
  gender?: 'Any' | 'Male' | 'Female' | 'Transgender';
  maritalStatus?: ('Single' | 'Married' | 'Widowed' | 'Divorced')[] | 'Any';
  socialCategories?: SocialCategory[] | 'Any';
  occupations?: OccupationType[] | 'Any';
  maxAnnualIncome?: number;
  states?: string[] | 'All';
  areaType?: AreaType[] | 'Any';
  requiresBpl?: boolean;
  requiresNonTaxpayer?: boolean;
  maxLandholdingAcres?: number;
  requiresFarmland?: boolean;
  requiresGirlChildUnder10?: boolean;
  requiresPregnantOrLactating?: boolean;
  requiresDisability?: boolean;
  minDisabilityPercentage?: number;
  requiresKutchaOrHomeless?: boolean;
  requiresShgMember?: boolean;
  isStreetVendorOnly?: boolean;
  isArtisanOnly?: boolean;
}

export interface SchemeDocument {
  id: string;
  name: string;
  purpose: string;
  issuer: string;
  mandatory: boolean;
}

export type StickerTheme =
  | 'emerald'
  | 'amber'
  | 'rose'
  | 'indigo'
  | 'blue'
  | 'purple'
  | 'teal'
  | 'cyan'
  | 'orange';

export interface SchemeSticker {
  emoji: string;
  badge: string;      // e.g. "TOP 500 CORPORATE", "FREE NSQF BADGE", "100% CASHLESS"
  title: string;      // e.g. "₹66,000 / yr PM Internship"
  tagline: string;    // e.g. "₹5,000/mo DBT + ₹6k Relocation Grant"
  theme: StickerTheme;
}

export interface Scheme {
  id: string;
  name: string;
  hindiName?: string;
  shortName: string;
  ministry: string;
  level: 'Central' | 'Centrally Sponsored' | 'State';
  category: SchemeCategory;
  benefitType: BenefitType;
  monetaryValueEstimate: number; // in INR for aggregate calculation
  monetaryValueDisplay: string;
  sticker: SchemeSticker;
  description: string;
  keyBenefits: string[];
  eligibilityCriteria: SchemeEligibilityRules;
  documentsRequired: SchemeDocument[];
  applicationMode: 'Online Portal' | 'CSC / Common Service Center' | 'Bank Branch' | 'Gram Panchayat' | 'District Welfare Office';
  applicationUrl: string;
  disbursalTimeline: string;
  processingFee: string;
  applicationSteps: string[];
  commonRejectionReasons: string[];
  tags: string[];
  targetAudienceText: string;
}

export interface MatchResult {
  scheme: Scheme;
  status: 'eligible' | 'conditional' | 'ineligible';
  score: number;
  metCriteria: string[];
  unmetCriteria: string[];
  conditionalNotes?: string[];
  recommendation: string;
}
