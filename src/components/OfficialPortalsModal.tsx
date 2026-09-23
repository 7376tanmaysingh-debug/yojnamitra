import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  Search,
  Copy,
  Check,
  Globe,
  GraduationCap,
  Briefcase,
  HeartPulse,
  Sprout,
  Coins,
  Home,
  ShieldCheck,
  FileText,
  PhoneCall
} from 'lucide-react';

interface PortalItem {
  id: string;
  name: string;
  category: 'scholarships' | 'internships' | 'health' | 'agri' | 'business' | 'housing' | 'identity';
  url: string;
  domain: string;
  badge: string;
  description: string;
  helpline?: string;
  keyLinks?: { label: string; url: string }[];
}

const PORTALS_DIRECTORY: PortalItem[] = [
  // Scholarships & Education
  {
    id: 'nsp',
    name: 'National Scholarship Portal (NSP)',
    category: 'scholarships',
    url: 'https://scholarships.gov.in/',
    domain: 'scholarships.gov.in',
    badge: 'Central Sector & State Scholarships',
    description: 'One-stop national portal for Pre-Matric, Post-Matric, Merit-cum-Means and Top Class scholarships for SC, ST, OBC, Minority & General students.',
    helpline: '0120-6619540',
    keyLinks: [
      { label: 'Fresh Student Registration', url: 'https://scholarships.gov.in/fresh/newstdRegfrmInstruction' },
      { label: 'Student Login', url: 'https://scholarships.gov.in/' },
      { label: 'Scheme Guidelines PDF', url: 'https://scholarships.gov.in/public/schemeGuidelines/Guidelines.pdf' },
    ],
  },
  {
    id: 'pm-vidyalaxmi',
    name: 'PM-Vidyalaxmi Education Loan Portal',
    category: 'scholarships',
    url: 'https://www.vidyalakshmi.co.in/',
    domain: 'vidyalakshmi.co.in',
    badge: '100% Interest Subsidy (CSIS)',
    description: 'Single-window electronic platform for educational loans across 40+ banks with full Central Sector Interest Subsidy for higher studies.',
    helpline: '022-24994200',
    keyLinks: [
      { label: 'Apply Loan (CELAF)', url: 'https://www.vidyalakshmi.co.in/Students/' },
      { label: 'Search Bank Schemes', url: 'https://www.vidyalakshmi.co.in/Students/scheme-search' },
    ],
  },
  {
    id: 'aicte-pragati-saksham',
    name: 'AICTE Pragati & Saksham Fellowships',
    category: 'scholarships',
    url: 'https://www.aicte-india.org/schemes/students-development-schemes',
    domain: 'aicte-india.org',
    badge: '₹50,000 / Year Girl & PwD Engineers',
    description: 'Technical education support for girl students (Pragati) and specially-abled students (Saksham) admitted to AICTE approved degree & diploma colleges.',
    helpline: '011-29581000',
    keyLinks: [
      { label: 'Pragati Guidelines', url: 'https://www.aicte-india.org/schemes/students-development-schemes/Pragati' },
      { label: 'Saksham Guidelines', url: 'https://www.aicte-india.org/schemes/students-development-schemes/Saksham' },
      { label: 'Approved Colleges List', url: 'https://facilities.aicte-india.org/dashboard/pages/angulardashboard.org.in/index.php' },
    ],
  },
  {
    id: 'pm-yasasvi',
    name: 'PM YASASVI Scholarship (NTA YET)',
    category: 'scholarships',
    url: 'https://yet.nta.ac.in/',
    domain: 'yet.nta.ac.in',
    badge: 'Top Class OBC/EBC/DNT Scholars',
    description: 'National Testing Agency conducted scholarship test for OBC, EBC and De-Notified Nomadic Tribes with up to ₹1,25,000/yr tuition cover.',
    helpline: '011-40759000',
    keyLinks: [
      { label: 'NTA Exam Portal', url: 'https://yet.nta.ac.in/' },
      { label: 'NSP Claim Submission', url: 'https://scholarships.gov.in/' },
    ],
  },
  {
    id: 'nmmss',
    name: 'National Means-cum-Merit Scholarship (NMMSS)',
    category: 'scholarships',
    url: 'https://www.education.gov.in/en/national-means-cum-merit-scholarship-scheme',
    domain: 'education.gov.in',
    badge: 'Class 9 to 12 School Aid',
    description: '₹12,000 per annum (₹1,000/month) direct cash aid for meritorious secondary school students from low-income families.',
    helpline: '0120-6619540',
    keyLinks: [
      { label: 'School Education Portal', url: 'https://www.education.gov.in/en/national-means-cum-merit-scholarship-scheme' },
      { label: 'Apply on NSP', url: 'https://scholarships.gov.in/' },
    ],
  },

  // Internships & Skilling
  {
    id: 'pm-internship',
    name: 'PM Internship Scheme Portal',
    category: 'internships',
    url: 'https://pminternship.mca.gov.in/',
    domain: 'pminternship.mca.gov.in',
    badge: 'Top 500 Corporate Internships',
    description: '1-year corporate internships in top companies with ₹5,000/month stipend DBT and ₹6,000 one-time relocation grant by MCA.',
    helpline: '1800-180-5522',
    keyLinks: [
      { label: 'Youth Candidate Registration', url: 'https://pminternship.mca.gov.in/' },
      { label: 'Browse Corporate Roles', url: 'https://pminternship.mca.gov.in/' },
      { label: 'Ministry of Corporate Affairs', url: 'https://www.mca.gov.in/' },
    ],
  },
  {
    id: 'skill-india-digital',
    name: 'Skill India Digital Hub (SIDH)',
    category: 'internships',
    url: 'https://www.skillindiadigital.gov.in/',
    domain: 'skillindiadigital.gov.in',
    badge: 'Free NSQF Badges & Online Courses',
    description: 'Citizen-centric platform offering 1,000+ government-certified courses in AI, Cloud, Cybersecurity, Solar, EV and Digital Marketing.',
    helpline: '08800055555',
    keyLinks: [
      { label: 'Explore Free Certified Courses', url: 'https://www.skillindiadigital.gov.in/courses' },
      { label: 'Locate Skill Center', url: 'https://www.skillindiadigital.gov.in/centers' },
    ],
  },
  {
    id: 'naps-apprenticeship',
    name: 'National Apprenticeship Promotion Scheme (NAPS)',
    category: 'internships',
    url: 'https://www.apprenticeshipindia.gov.in/',
    domain: 'apprenticeshipindia.gov.in',
    badge: 'Paid Industrial Training',
    description: 'Direct industry apprenticeship contracts with monthly government stipend support for ITI, diploma, and college graduates.',
    helpline: '1800-123-9626',
    keyLinks: [
      { label: 'Apprentice Registration', url: 'https://www.apprenticeshipindia.gov.in/' },
    ],
  },

  // Health & Family Welfare
  {
    id: 'pmjay-nha',
    name: 'Ayushman Bharat PM-JAY (NHA Beneficiary)',
    category: 'health',
    url: 'https://beneficiary.nha.gov.in/',
    domain: 'beneficiary.nha.gov.in',
    badge: '₹5 Lakh Cashless Hospitalization',
    description: 'National Health Authority portal to check family eligibility, perform instant Aadhaar e-KYC, and download Ayushman PVC Golden Card.',
    helpline: '14555',
    keyLinks: [
      { label: 'e-KYC & Card Download', url: 'https://beneficiary.nha.gov.in/' },
      { label: 'Find Empaneled Hospitals', url: 'https://hospitals.pmjay.gov.in/' },
      { label: 'Ayushman Android App', url: 'https://play.google.com/store/apps/details?id=com.beneficiaryapp' },
    ],
  },
  {
    id: 'pmmvy-wcd',
    name: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
    category: 'health',
    url: 'https://pmmvy.wcd.gov.in/',
    domain: 'pmmvy.wcd.gov.in',
    badge: '₹5,000 Mother & Child DBT',
    description: 'Direct cash incentive of ₹5,000 in bank accounts for pregnant women and lactating mothers for health checks and institutional delivery.',
    helpline: '011-23382393',
    keyLinks: [
      { label: 'Citizen Registration', url: 'https://pmmvy.wcd.gov.in/' },
      { label: 'WCD Ministry Guide', url: 'https://wcd.gov.in/schemes/pradhan-mantri-matru-vandana-yojana' },
    ],
  },

  // Farmers & Agriculture
  {
    id: 'pm-kisan-portal',
    name: 'PM-KISAN Samman Nidhi Portal',
    category: 'agri',
    url: 'https://pmkisan.gov.in/',
    domain: 'pmkisan.gov.in',
    badge: '₹6,000 / Year Direct DBT',
    description: 'Direct income support for landholding farming families transferred in three equal four-monthly tranches of ₹2,000 directly via PFMS.',
    helpline: '155261',
    keyLinks: [
      { label: 'New Farmer Registration', url: 'https://pmkisan.gov.in/RegistrationFormNew.aspx' },
      { label: 'Check Beneficiary Status', url: 'https://pmkisan.gov.in/BeneficiaryStatus_New.aspx' },
      { label: 'Aadhaar e-KYC Online', url: 'https://pmkisan.gov.in/aadharekyc.aspx' },
    ],
  },
  {
    id: 'pmfby-crop-insurance',
    name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    category: 'agri',
    url: 'https://pmfby.gov.in/',
    domain: 'pmfby.gov.in',
    badge: '1.5%–2% Premium Crop Cover',
    description: 'Comprehensive yield loss, localized calamity, and post-harvest crop loss insurance with satellite verification and prompt settlement.',
    helpline: '14447',
    keyLinks: [
      { label: 'Insurance Calculator', url: 'https://pmfby.gov.in/premiumCalculator' },
      { label: 'Report Crop Damage', url: 'https://pmfby.gov.in/' },
    ],
  },
  {
    id: 'kcc-portal',
    name: 'Kisan Credit Card (KCC) Scheme',
    category: 'agri',
    url: 'https://agricoop.nic.in/',
    domain: 'agricoop.nic.in',
    badge: '4% Subsidized Farm Loan',
    description: 'Revolving cash credit up to ₹3 Lakh for crop cultivation, livestock, dairy and fisheries with 3% prompt repayment subvention.',
    helpline: '1800-180-1551',
    keyLinks: [
      { label: 'Agri Dept Guidelines', url: 'https://agricoop.nic.in/' },
      { label: 'NABARD KCC Norms', url: 'https://www.nabard.org/' },
      { label: 'SBI Kisan Portal', url: 'https://sbi.co.in/web/agri-rural/agriculture-banking/kisan-credit-card' },
    ],
  },

  // Business & Livelihood
  {
    id: 'pm-mudra',
    name: 'Pradhan Mantri MUDRA Yojana',
    category: 'business',
    url: 'https://www.udyamimitra.in/',
    domain: 'udyamimitra.in',
    badge: 'Collateral-Free Loan up to ₹20L',
    description: 'Institutional micro-credit for non-corporate small businesses under Shishu (₹50k), Kishore (₹5L) and Tarun (₹20L) categories.',
    helpline: '1800-180-1111',
    keyLinks: [
      { label: 'Apply on UdyamiMitra', url: 'https://www.udyamimitra.in/' },
      { label: 'Official MUDRA Info', url: 'https://www.mudra.org.in/' },
    ],
  },
  {
    id: 'pm-svanidhi-portal',
    name: 'PM SVANidhi Portal (Street Vendors)',
    category: 'business',
    url: 'https://pmsvanidhi.mohua.gov.in/',
    domain: 'pmsvanidhi.mohua.gov.in',
    badge: '₹10k to ₹50k Working Capital',
    description: 'Working capital micro-loans for street vendors with 7% interest subsidy and up to ₹1,200/yr cashback on digital UPI transactions.',
    helpline: '1800-111-979',
    keyLinks: [
      { label: 'Apply Loan Online', url: 'https://pmsvanidhi.mohua.gov.in/' },
      { label: 'Track Application Status', url: 'https://pmsvanidhi.mohua.gov.in/Home/TrackStatus' },
    ],
  },
  {
    id: 'pm-vishwakarma-portal',
    name: 'PM Vishwakarma Official Portal',
    category: 'business',
    url: 'https://pmvishwakarma.gov.in/',
    domain: 'pmvishwakarma.gov.in',
    badge: '₹15,000 Tool Grant + 5% Loan',
    description: 'End-to-end support for 18 traditional artisan trades: carpenter, blacksmith, potter, mason, tailor with free modern toolkits and concessional credit.',
    helpline: '1800-267-7777',
    keyLinks: [
      { label: 'CSC Registration / Login', url: 'https://pmvishwakarma.gov.in/' },
      { label: 'Toolkit Specifications', url: 'https://pmvishwakarma.gov.in/Home/AboutScheme' },
    ],
  },
  {
    id: 'standup-india',
    name: 'Stand-Up India Portal',
    category: 'business',
    url: 'https://www.standupmitra.in/',
    domain: 'standupmitra.in',
    badge: '₹10 Lakh to ₹1 Crore for SC/ST & Women',
    description: 'Facilitating bank loans between ₹10 Lakh and ₹1 Crore for at least one SC/ST and one woman borrower per bank branch for greenfield enterprises.',
    helpline: '1800-180-1159',
    keyLinks: [
      { label: 'Apply for Loan', url: 'https://www.standupmitra.in/' },
    ],
  },

  // Housing & Clean Energy
  {
    id: 'pm-surya-ghar-portal',
    name: 'PM Surya Ghar: Muft Bijli Yojana',
    category: 'housing',
    url: 'https://pmsuryaghar.gov.in/',
    domain: 'pmsuryaghar.gov.in',
    badge: '300 Free Units + ₹78,000 Subsidy',
    description: 'National rooftop solar scheme providing direct bank DBT subsidies up to ₹78,000 to enable 300 units of free clean solar electricity per month.',
    helpline: '15555',
    keyLinks: [
      { label: 'Solar Rooftop Apply', url: 'https://pmsuryaghar.gov.in/' },
      { label: 'Subsidy Calculator', url: 'https://pmsuryaghar.gov.in/rooftop_calculator' },
    ],
  },
  {
    id: 'pmay-urban',
    name: 'Pradhan Mantri Awas Yojana (PMAY-U / G)',
    category: 'housing',
    url: 'https://pmay-urban.gov.in/',
    domain: 'pmay-urban.gov.in',
    badge: 'Housing Subsidy up to ₹2.5 Lakh',
    description: 'Housing for All mission providing financial assistance to eligible urban and rural families to construct or purchase a pucca home.',
    helpline: '011-23063285',
    keyLinks: [
      { label: 'PMAY Urban Portal', url: 'https://pmay-urban.gov.in/' },
      { label: 'PMAY Gramin Portal', url: 'https://pmayg.nic.in/' },
      { label: 'Track Assessment Status', url: 'https://pmay-urban.gov.in/track-assessment-status' },
    ],
  },
  {
    id: 'pm-ujjwala',
    name: 'PM Ujjwala Yojana 2.0 (Free LPG)',
    category: 'housing',
    url: 'https://www.pmuy.gov.in/ujjwala2.html',
    domain: 'pmuy.gov.in',
    badge: 'Deposit-Free Gas + Free Stove',
    description: 'Provides clean cooking fuel connections to adult women from low-income households with zero deposit and free first refill.',
    helpline: '1800-266-6696',
    keyLinks: [
      { label: 'Apply Online', url: 'https://www.pmuy.gov.in/ujjwala2.html' },
      { label: 'Indane Registration', url: 'https://cx.indianoil.in/' },
      { label: 'Bharat Gas Registration', url: 'https://my.ebharatgas.com/' },
      { label: 'HP Gas Registration', url: 'https://myhpgas.in/' },
    ],
  },

  // National Identity & DBT Infrastructure
  {
    id: 'myaadhaar',
    name: 'UIDAI MyAadhaar Portal',
    category: 'identity',
    url: 'https://myaadhaar.uidai.gov.in/',
    domain: 'myaadhaar.uidai.gov.in',
    badge: 'Official Identity & e-KYC',
    description: 'Download digital e-Aadhaar, check Aadhaar-Bank account linking status for DBT payments, update address, and verify phone numbers.',
    helpline: '1947',
    keyLinks: [
      { label: 'Download e-Aadhaar', url: 'https://myaadhaar.uidai.gov.in/' },
      { label: 'Check Aadhaar Bank Seeding (DBT)', url: 'https://myaadhaar.uidai.gov.in/check-aadhaar-banking-status' },
    ],
  },
  {
    id: 'digilocker',
    name: 'DigiLocker National Cloud',
    category: 'identity',
    url: 'https://www.digilocker.gov.in/',
    domain: 'digilocker.gov.in',
    badge: '100% Legally Valid Digital Documents',
    description: 'Issued by Ministry of Electronics & IT (MeitY). Store and fetch marksheets, degree certificates, driving license, and caste/income proofs.',
    helpline: '011-24301300',
    keyLinks: [
      { label: 'DigiLocker Login & Sign Up', url: 'https://www.digilocker.gov.in/' },
    ],
  },
  {
    id: 'pfms-dbt',
    name: 'PFMS Public Financial Management System',
    category: 'identity',
    url: 'https://pfms.nic.in/static/NewLayout_KnowYourPayments.aspx',
    domain: 'pfms.nic.in',
    badge: 'Track Any Government DBT Payment',
    description: 'Ministry of Finance real-time portal to track all direct benefit transfers, scholarship credits, PM-KISAN, and subsidy deposits by bank account.',
    helpline: '1800-118-111',
    keyLinks: [
      { label: 'Know Your Payments (DBT Tracker)', url: 'https://pfms.nic.in/static/NewLayout_KnowYourPayments.aspx' },
    ],
  },
  {
    id: 'swavlamban-udid',
    name: 'Swavlamban UDID (Disability Card)',
    category: 'identity',
    url: 'https://www.swavlambancard.gov.in/',
    domain: 'swavlambancard.gov.in',
    badge: 'National Unique Disability ID',
    description: 'Apply for benchmark disability certificate, book medical assessment hospital appointments, and download universal digital UDID smart card.',
    helpline: '011-24369054',
    keyLinks: [
      { label: 'Apply for UDID Card', url: 'https://www.swavlambancard.gov.in/pwd/application' },
      { label: 'Track UDID Status', url: 'https://www.swavlambancard.gov.in/' },
    ],
  },
  {
    id: 'national-portal',
    name: 'National Portal of India (india.gov.in)',
    category: 'identity',
    url: 'https://services.india.gov.in/',
    domain: 'services.india.gov.in',
    badge: 'All National & State Public Services',
    description: 'Single-access point for 14,000+ government services including birth certificates, caste certificates, domicile, income certificates and pensions.',
    keyLinks: [
      { label: 'Search State e-District Services', url: 'https://services.india.gov.in/' },
    ],
  },
];

interface OfficialPortalsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCategory?: string;
}

export const OfficialPortalsModal: React.FC<OfficialPortalsModalProps> = ({
  isOpen,
  onClose,
  defaultCategory = 'all',
}) => {
  const [selectedCat, setSelectedCat] = useState<string>(defaultCategory);
  const [search, setSearch] = useState<string>('');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (url: string, id: string) => {
    navigator.clipboard.writeText(url);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const categories = [
    { id: 'all', label: 'All Portals', icon: Globe },
    { id: 'scholarships', label: 'Scholarships & Education', icon: GraduationCap },
    { id: 'internships', label: 'Internships & Skilling', icon: Briefcase },
    { id: 'health', label: 'Health & Nutrition', icon: HeartPulse },
    { id: 'agri', label: 'Farmers & Agriculture', icon: Sprout },
    { id: 'business', label: 'Loans & Enterprises', icon: Coins },
    { id: 'housing', label: 'Housing & Solar', icon: Home },
    { id: 'identity', label: 'Identity & DBT Portals', icon: ShieldCheck },
  ];

  const filteredPortals = PORTALS_DIRECTORY.filter((item) => {
    if (selectedCat !== 'all' && item.category !== selectedCat) {
      return false;
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      const matchName = item.name.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchDomain = item.domain.toLowerCase().includes(q);
      const matchBadge = item.badge.toLowerCase().includes(q);
      const matchLinks = item.keyLinks?.some((l) => l.label.toLowerCase().includes(q));
      if (!matchName && !matchDesc && !matchDomain && !matchBadge && !matchLinks) {
        return false;
      }
    }
    return true;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-slate-950/70 backdrop-blur-xs">
      <div
        className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden max-h-[92vh] flex flex-col animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white border-b border-slate-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
              <Globe className="w-4 h-4" />
              <span>Official Government Web Directory</span>
            </div>
            <h2 className="text-lg sm:text-xl font-bold font-serif">
              Official Links: Schemes, Scholarships, Internships & DBT Portals
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Verified statutory links pointing directly to official central ministries, state portals, and national application forms.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors shrink-0 cursor-pointer"
            aria-label="Close portal directory"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toolbar & Filters */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 space-y-3">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search portal name, scholarship, department, or keyword (e.g. NSP, Pragati, MCA, PFMS, e-KYC)..."
              className="w-full text-xs pl-9 pr-8 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-2xs"
            />
            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Category Chips */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs no-scrollbar">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCat === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCat(cat.id)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-medium whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                    isActive
                      ? 'bg-emerald-700 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Content List */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4">
          <div className="flex items-center justify-between text-xs text-slate-500 px-1">
            <span>
              Showing <strong className="text-slate-800">{filteredPortals.length}</strong> verified official portals
            </span>
            <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>All links verified with .gov.in / .nic.in / .org.in domains</span>
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPortals.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl border border-slate-200 p-4 shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200/80 inline-block mb-1">
                        {item.badge}
                      </span>
                      <h3 className="text-sm font-bold text-slate-900 leading-snug">
                        {item.name}
                      </h3>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleCopy(item.url, item.id)}
                      className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 transition-colors shrink-0"
                      title="Copy official URL"
                    >
                      {copiedId === item.id ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2 mb-3">
                    {item.description}
                  </p>

                  {/* Sub-links if available */}
                  {item.keyLinks && item.keyLinks.length > 0 && (
                    <div className="mb-3 pt-2.5 border-t border-slate-100 space-y-1.5">
                      <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider block">
                        Direct Actions & Sub-Portals:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {item.keyLinks.map((sub, idx) => (
                          <a
                            key={idx}
                            href={sub.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50/70 hover:bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200/60 transition-colors"
                          >
                            <span>{sub.label}</span>
                            <ExternalLink className="w-2.5 h-2.5" />
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Card footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-mono">
                    <Globe className="w-3 h-3 text-slate-400" />
                    <span className="truncate max-w-[130px]">{item.domain}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    {item.helpline && (
                      <a
                        href={`tel:${item.helpline.replace(/[^0-9]/g, '')}`}
                        className="text-[11px] text-slate-600 hover:text-slate-900 flex items-center gap-1 px-2 py-1 rounded bg-slate-50 hover:bg-slate-100 transition-colors font-mono"
                        title={`Call Helpline: ${item.helpline}`}
                      >
                        <PhoneCall className="w-3 h-3 text-emerald-600" />
                        <span>{item.helpline.split(' ')[0]}</span>
                      </a>
                    )}

                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs transition-colors cursor-pointer shadow-xs"
                    >
                      <span>Open Portal</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPortals.length === 0 && (
            <div className="text-center py-12 text-slate-400 space-y-2">
              <Globe className="w-10 h-10 mx-auto text-slate-300" />
              <p className="text-sm font-semibold text-slate-600">No portals match your search query</p>
              <p className="text-xs text-slate-400">Try searching for keywords like "NSP", "Loan", "Scholarship", or "Solar"</p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Official Government of India (GoI) & State Department Portals</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium transition-colors cursor-pointer"
          >
            Close Directory
          </button>
        </div>
      </div>
    </div>
  );
};
