import { Scheme } from '../types';

export const SCHEMES: Scheme[] = [
  {
    id: 'ayushman-bharat-pmjay',
    name: 'Ayushman Bharat - Pradhan Mantri Jan Arogya Yojana (PM-JAY)',
    hindiName: 'आयुष्मान भारत - प्रधानमंत्री जन आरोग्य योजना',
    shortName: 'PM-JAY',
    ministry: 'Ministry of Health and Family Welfare / NHA',
    level: 'Centrally Sponsored',
    category: 'Health',
    benefitType: 'Insurance & Cover',
    monetaryValueEstimate: 500000,
    monetaryValueDisplay: '₹5,00,000 / family / year',
    sticker: {
      emoji: '🏥',
      badge: '100% CASHLESS',
      title: '₹5 Lakh Annual Family Health Cover',
      tagline: 'Zero Hospital Bills · PM-JAY Gold Card',
      theme: 'rose',
    },
    description: 'World’s largest government-funded health assurance scheme providing secondary and tertiary cashless inpatient care hospitalization at empaneled public and private hospitals across India.',
    keyBenefits: [
      'Cashless & paperless treatment up to ₹5 Lakh annually per eligible household',
      'Covers pre-existing conditions from Day 1 with zero waiting period',
      'Includes 3 days pre-hospitalization and 15 days post-hospitalization medicine expenses',
      'No cap on family size, age, or gender'
    ],
    targetAudienceText: 'Deprived rural and specified occupational urban families under SECC 2011 / NFSA Ration Card holders',
    eligibilityCriteria: {
      requiresBpl: true,
      requiresNonTaxpayer: true,
      maxAnnualIncome: 250000,
    },
    documentsRequired: [
      { id: 'aadhaar', name: 'Aadhaar Card', purpose: 'Identity & Biometric verification', issuer: 'UIDAI', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/' },
      { id: 'ration-card', name: 'Ration Card (NFSA / BPL / Antyodaya)', purpose: 'Family roster and deprivation verification', issuer: 'State Food & Civil Supplies Dept', mandatory: true, downloadUrl: 'https://nfsa.gov.in/' },
      { id: 'mobile', name: 'Active Mobile Number', purpose: 'OTP generation for PMJAY Golden Card', issuer: 'Telecom Operator', mandatory: true }
    ],
    applicationMode: 'CSC / Common Service Center',
    applicationUrl: 'https://beneficiary.nha.gov.in/',
    helplineNumber: '14555 (Toll-Free National Health Helpline)',
    officialLinks: [
          {
                "title": "NHA Beneficiary Portal (Check Eligibility & e-KYC)",
                "url": "https://beneficiary.nha.gov.in/",
                "type": "apply",
                "badge": "Direct Portal",
                "description": "Instant Aadhaar OTP / Biometric e-KYC and download Ayushman PVC Card"
          },
          {
                "title": "Find Empaneled Cashless Hospitals Near You",
                "url": "https://hospitals.pmjay.gov.in/",
                "type": "portal",
                "badge": "Hospital Directory",
                "description": "Search 29,000+ government and private network hospitals across India"
          },
          {
                "title": "Ayushman App (Official Android App)",
                "url": "https://play.google.com/store/apps/details?id=com.beneficiaryapp",
                "type": "portal",
                "badge": "Mobile App",
                "description": "Generate Ayushman Bharat health card directly on smartphone"
          },
          {
                "title": "PM-JAY Official Benefit Guidelines & Treatment Packages",
                "url": "https://pmjay.gov.in/sites/default/files/2018-09/Guidelines_on_Processes_for_Empanelment_of_Hospitals.pdf",
                "type": "guidelines",
                "badge": "PDF Manual",
                "description": "1,949 medical procedures and complete hospitalization rules"
          }
    ],
    disbursalTimeline: 'Instant Ayushman Golden Card generation upon Aadhaar e-KYC',
    processingFee: '₹0 (Free government service)',
    applicationSteps: [
      'Visit your nearest Common Service Centre (CSC) or empaneled hospital Ayushman Mitra desk.',
      'Provide your Aadhaar number or Ration Card number to search the SECC beneficiary registry.',
      'Complete biometric or OTP-based e-KYC verification.',
      'Download your Ayushman Bharat PVC Card on your phone or collect printout.'
    ],
    commonRejectionReasons: [
      'Family name missing from SECC 2011 database or active state NFSA list.',
      'Name mismatch between Aadhaar and Ration card.',
      'Active income taxpayer in the household.'
    ],
    tags: ['Health', 'Cashless Hospitalization', 'BPL', 'Medical Insurance']
  },
  {
    id: 'pm-kisan',
    name: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)',
    hindiName: 'प्रधानमंत्री किसान सम्मान निधि',
    shortName: 'PM-KISAN',
    ministry: 'Ministry of Agriculture and Farmers Welfare',
    level: 'Central',
    category: 'Agriculture',
    benefitType: 'Direct Cash Transfer',
    monetaryValueEstimate: 6000,
    monetaryValueDisplay: '₹6,000 / year (₹2,000 every 4 months)',
    sticker: {
      emoji: '🌾',
      badge: 'DIRECT CASH DBT',
      title: '₹6,000 / Year Assured Income',
      tagline: '3 Direct Tranches · No Middlemen',
      theme: 'emerald',
    },
    description: 'Central sector income support scheme providing ₹6,000 annually in three equal installments of ₹2,000 directly transferred into the bank accounts of all cultivable landholding farmer families.',
    keyBenefits: [
      '₹6,000 guaranteed annual income support deposited directly via DBT',
      'Direct credit into bank account linked with Aadhaar NPCI mapper',
      'Helps procure quality seeds, fertilizers, and meet seasonal agricultural operational expenses'
    ],
    targetAudienceText: 'Small and marginal cultivable landholding farmers',
    eligibilityCriteria: {
      occupations: ['Farmer'],
      requiresFarmland: true,
      requiresNonTaxpayer: true,
    },
    documentsRequired: [
      { id: 'aadhaar', name: 'Aadhaar Card', purpose: 'Mandatory for PM-KISAN e-KYC and DBT transfer', issuer: 'UIDAI', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/' },
      { id: 'land-records', name: 'Land Ownership Document (Khatauni / Khasra / RoR)', purpose: 'Proof of cultivable landholding in applicant’s name', issuer: 'State Revenue Department / Bhulekh', mandatory: true },
      { id: 'bank-passbook', name: 'NPCI Seeded Bank Account Passbook', purpose: 'For DBT direct bank deposit', issuer: 'Any Scheduled Bank or Post Office', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-banking-status' }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://pmkisan.gov.in/',
    helplineNumber: '155261 / 011-24300606 (PM-Kisan Farmer Helpline)',
    officialLinks: [
          {
                "title": "PM-Kisan New Farmer Online Registration",
                "url": "https://pmkisan.gov.in/RegistrationFormNew.aspx",
                "type": "apply",
                "badge": "Online Form",
                "description": "Submit land revenue records and Aadhaar details for ₹6,000/year DBT"
          },
          {
                "title": "Check Beneficiary Payment Status & Installments",
                "url": "https://pmkisan.gov.in/BeneficiaryStatus_New.aspx",
                "type": "status",
                "badge": "DBT Tracker",
                "description": "View 4-monthly ₹2,000 installment credits and PFMS bank status"
          },
          {
                "title": "Aadhaar Face / OTP e-KYC Online Authentication",
                "url": "https://pmkisan.gov.in/aadharekyc.aspx",
                "type": "apply",
                "badge": "Mandatory e-KYC",
                "description": "Complete mandatory e-KYC to keep installments active"
          },
          {
                "title": "Official PM-Kisan Scheme Guidelines",
                "url": "https://pmkisan.gov.in/Documents/Operational_Guidelines.pdf",
                "type": "guidelines",
                "badge": "Official PDF",
                "description": "Ministry of Agriculture rules on landholding eligibility and exclusions"
          }
    ],
    disbursalTimeline: 'Credited directly in April-July, August-November, and December-March cycles',
    processingFee: '₹0 (Free self-registration)',
    applicationSteps: [
      'Open pmkisan.gov.in and navigate to "Farmer Corner" -> "New Farmer Registration".',
      'Select Rural Farmer or Urban Farmer, enter Aadhaar number, mobile number, and select your state.',
      'Fill in land parcel details (Khata number, Khasra number, land area in hectares) as per revenue records.',
      'Complete mandatory facial or OTP e-KYC on the portal or PM-KISAN mobile app.'
    ],
    commonRejectionReasons: [
      'Land registered after February 1, 2019 (except inheritance transfer).',
      'Applicant or spouse is an income tax payer or constitutional post holder.',
      'Aadhaar is not seeded with bank account on NPCI mapper for DBT.'
    ],
    tags: ['Farmers', 'Agriculture', 'Direct Cash Transfer', 'DBT', 'Rural']
  },
  {
    id: 'pmay-urban-gramin',
    name: 'Pradhan Mantri Awas Yojana (PMAY - Urban & Gramin)',
    hindiName: 'प्रधानमंत्री आवास योजना',
    shortName: 'PMAY',
    ministry: 'Ministry of Housing and Urban Affairs & Ministry of Rural Development',
    level: 'Centrally Sponsored',
    category: 'Housing',
    benefitType: 'Asset Subsidy',
    monetaryValueEstimate: 267000,
    monetaryValueDisplay: 'Up to ₹2,67,000 Subsidy / ₹1.3 Lakh Grant',
    sticker: {
      emoji: '🏠',
      badge: 'HOUSING SUBSIDY',
      title: '₹1.2L to ₹2.5L Pucca Home Grant',
      tagline: 'Direct Construction Subsidy · Geo-tagged',
      theme: 'amber',
    },
    description: 'Affordable housing initiative providing financial assistance for constructing a pucca house with basic amenities (piped water, sanitation, electricity, LPG) to homeless or kutcha house dwellers.',
    keyBenefits: [
      'In Gramin: Direct financial grant of ₹1,20,000 (Plains) or ₹1,30,000 (Hilly/North-East states)',
      'In Urban: Interest subsidy up to ₹2.67 Lakh on home loans under Credit Linked Subsidy Scheme (CLSS)',
      'Additional 90/95 days of unskilled labor wages under MGNREGS (approx. ₹20,000)',
      'Mandatory co-ownership or sole ownership in the name of the female head of household'
    ],
    targetAudienceText: 'Families with no pucca house anywhere in India, living in kutcha or dilapidated shelter',
    eligibilityCriteria: {
      maxAnnualIncome: 600000,
      requiresKutchaOrHomeless: true,
      requiresNonTaxpayer: true
    },
    documentsRequired: [
      { id: 'aadhaar', name: 'Aadhaar of all family members', purpose: 'De-duplication and identity check', issuer: 'UIDAI', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/' },
      { id: 'income-cert', name: 'Income Certificate / Self Declaration', purpose: 'Verifying EWS/LIG income classification', issuer: 'Tehsildar / Sub-Divisional Magistrate', mandatory: true, downloadUrl: 'https://services.india.gov.in/' },
      { id: 'land-patta', name: 'Land Patta / Ownership Proof or Municipal allotment', purpose: 'Title of construction plot', issuer: 'Local Revenue Authority / Nagar Nigam', mandatory: true },
      { id: 'bank-passbook', name: 'Bank Account Details', purpose: 'Installment release based on geo-tagged construction stages', issuer: 'Bank', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-banking-status' }
    ],
    applicationMode: 'Gram Panchayat',
    applicationUrl: 'https://pmaymis.gov.in/',
    helplineNumber: '011-23063285 / 1800-11-6163',
    officialLinks: [
          {
                "title": "PMAY Urban Official National Portal",
                "url": "https://pmay-urban.gov.in/",
                "type": "portal",
                "badge": "Urban Portal",
                "description": "Affordable Housing in Partnership, BLC, and Interest Subsidy"
          },
          {
                "title": "PMAY Gramin (AwaasSoft Rural Housing Portal)",
                "url": "https://pmayg.nic.in/",
                "type": "portal",
                "badge": "Rural Portal",
                "description": "Track rural pucca house sanction list and geo-tagged installment releases"
          },
          {
                "title": "Track Citizen Assessment / Application Status",
                "url": "https://pmay-urban.gov.in/track-assessment-status",
                "type": "status",
                "badge": "Track Status",
                "description": "Real-time assessment search by Aadhaar number or Assessment ID"
          },
          {
                "title": "PMAY Operational Guidelines & Subsidies",
                "url": "https://pmay-urban.gov.in/guidelines",
                "type": "guidelines",
                "badge": "Guidelines",
                "description": "Ministry of Housing and Urban Affairs subsidy specifications"
          }
    ],
    disbursalTimeline: 'Staged disbursals linked with geo-tagged foundation, lintel, and roof completion photos',
    processingFee: '₹0 (Free government scheme)',
    applicationSteps: [
      'For Gramin: Contact your Gram Panchayat Secretary or check Awaas+ priority list with Block Development Officer (BDO).',
      'For Urban: Apply online through PMAY-U portal or via Citizen Service Center under Beneficiary Led Construction (BLC).',
      'Field inspector visits your proposed construction site for baseline geo-tagging.',
      'Upon sanction, funds are released in 3-4 milestone tranches directly to your Aadhaar-linked account.'
    ],
    commonRejectionReasons: [
      'Any member of applicant family already owns a pucca house anywhere in India.',
      'Annual family income exceeds applicable EWS/LIG bracket.',
      'Failure to upload milestone geo-tagged photos during house construction.'
    ],
    tags: ['Housing', 'Pucca House', 'Subsidy', 'Gramin', 'Urban Poor']
  },
  {
    id: 'pm-mudra-yojana',
    name: 'Pradhan Mantri MUDRA Yojana (PMMY)',
    hindiName: 'प्रधानमंत्री मुद्रा योजना',
    shortName: 'MUDRA Loan',
    ministry: 'Ministry of Finance / SIDBI',
    level: 'Central',
    category: 'Business & MSME',
    benefitType: 'Subsidized Credit / Loan',
    monetaryValueEstimate: 1000000,
    monetaryValueDisplay: 'Collateral-free loan up to ₹10,00,000 (Expanded to ₹20L)',
    sticker: {
      emoji: '💼',
      badge: 'ZERO COLLATERAL',
      title: 'Collateral-Free MSME Loan up to ₹20L',
      tagline: 'Shishu, Kishore & Tarun Business Capital',
      theme: 'blue',
    },
    description: 'Provides formal micro-finance credit to non-corporate, non-farm small and micro enterprises across manufacturing, trading, and services without requiring collateral security.',
    keyBenefits: [
      'Zero collateral security or third-party guarantee required',
      'Three progressive loan brackets: Shishu (up to ₹50,000), Kishore (₹50,000 to ₹5 Lakh), Tarun (₹5 Lakh to ₹10 Lakh)',
      'Subsidized processing fees and competitive commercial lending rates',
      'Provides MUDRA RuPay debit card for working capital cash credit drawdown'
    ],
    targetAudienceText: 'Small shopkeepers, fruits/vegetable vendors, artisans, micro-manufacturers, transport operators, service units',
    eligibilityCriteria: {
      minAge: 18,
      maxAge: 65,
      occupations: ['Small Business / MSME', 'Street Vendor / Hawker', 'Artisan / Craftsman', 'Daily Wage / Construction', 'Unemployed'],
    },
    documentsRequired: [
      { id: 'aadhaar', name: 'Aadhaar / Voter ID / PAN Card', purpose: 'Identity and address KYC', issuer: 'UIDAI / IT Dept', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/' },
      { id: 'business-proof', name: 'Business Registration / Trade License / Udyam Certificate', purpose: 'Proof of micro-enterprise activity', issuer: 'MSME Ministry / Local Body', mandatory: false },
      { id: 'bank-statement', name: 'Bank Account Statement (Past 6 Months)', purpose: 'Credit assessment', issuer: 'Applicant Bank', mandatory: true },
      { id: 'project-report', name: 'Business Project Proposal / Quotation for machinery', purpose: 'Utilization of funds', issuer: 'Applicant / Supplier', mandatory: true }
    ],
    applicationMode: 'Bank Branch',
    applicationUrl: 'https://www.udyamimitra.in/',
    helplineNumber: '1800-180-1111 (National Toll-Free)',
    officialLinks: [
          {
                "title": "UdyamiMitra Portal (Online MUDRA Loan Application)",
                "url": "https://www.udyamimitra.in/",
                "type": "apply",
                "badge": "Direct Apply",
                "description": "Apply digitally across 150+ commercial banks, RRBs, and MFIs"
          },
          {
                "title": "Official MUDRA Scheme Portal",
                "url": "https://www.mudra.org.in/",
                "type": "portal",
                "badge": "Central Portal",
                "description": "Complete details on Shishu (up to ₹50k), Kishore (up to ₹5L), Tarun (up to ₹20L)"
          },
          {
                "title": "List of Approved MUDRA Partner Banks & NBFCs",
                "url": "https://www.mudra.org.in/Borrowers/List_of_Lenders",
                "type": "portal",
                "badge": "Lender Directory",
                "description": "Direct contact details for bank branch loan officers"
          }
    ],
    disbursalTimeline: 'Usually 7 to 15 business days following bank credit appraisal',
    processingFee: 'Nil for Shishu loans; nominal for Kishore & Tarun loans',
    applicationSteps: [
      'Visit Udyamimitra portal (udyamimitra.in) or walk into any Commercial Bank, RRB, or Small Finance Bank branch.',
      'Submit the one-page MUDRA application form specifying Shishu, Kishore, or Tarun category.',
      'Submit quotation for equipment or working capital requirement details.',
      'Receive loan sanction and MUDRA debit card for instant liquidity.'
    ],
    commonRejectionReasons: [
      'Adverse credit bureau (CIBIL) default record on existing loans.',
      'Application submitted for agricultural farming (use KCC instead) or speculative activities.',
      'Applicant under 18 years of age.'
    ],
    tags: ['Business', 'MSME', 'Loans', 'Collateral-Free', 'Self-Employment']
  },
  {
    id: 'sukanya-samriddhi-yojana',
    name: 'Sukanya Samriddhi Yojana (SSY)',
    hindiName: 'सुकन्या समृद्धि योजना',
    shortName: 'Sukanya Samriddhi',
    ministry: 'Ministry of Finance (Beti Bachao Beti Padhao initiative)',
    level: 'Central',
    category: 'Women & Child',
    benefitType: 'Direct Cash Transfer',
    monetaryValueEstimate: 1500000,
    monetaryValueDisplay: '8.2% Sovereign Interest + Triple Tax Exemption (EEE)',
    sticker: {
      emoji: '🎀',
      badge: '8.2% TAX-FREE',
      title: 'Highest Sovereign Growth for Girl Child',
      tagline: 'Triple Tax Exemption (EEE) · Beti Bachao',
      theme: 'rose',
    },
    description: 'Government backed small savings program designed exclusively for parents of girl children to build a dedicated education and marriage corpus with guaranteed high sovereign return.',
    keyBenefits: [
      'Highest sovereign interest rate among small savings schemes (8.2% p.a. compounded annually)',
      'Exempt-Exempt-Exempt (EEE) status: Principal, accrued interest, and maturity proceeds are 100% tax-free under 80C',
      'Minimum deposit of only ₹250/year, up to ₹1,50,000/year',
      'Partial withdrawal of up to 50% allowed for higher education once the girl child turns 18'
    ],
    targetAudienceText: 'Parents or legal guardians of a girl child aged from birth up to 10 years',
    eligibilityCriteria: {
      requiresGirlChildUnder10: true,
    },
    documentsRequired: [
      { id: 'birth-cert', name: 'Girl Child Birth Certificate', purpose: 'Age proof (must be under 10 years at opening)', issuer: 'Municipal Registrar / Panchayat', mandatory: true },
      { id: 'parent-kyc', name: 'Parent / Guardian Aadhaar & PAN Card', purpose: 'KYC of guardian opening account', issuer: 'UIDAI / IT Dept', mandatory: true },
      { id: 'address-proof', name: 'Proof of Residence', purpose: 'Residential verification', issuer: 'Competent Authority', mandatory: true }
    ],
    applicationMode: 'Bank Branch',
    applicationUrl: 'https://www.indiapost.gov.in/Financial/Pages/Content/Sukanya-Samriddhi-Account.aspx',
    helplineNumber: '1800-266-6868 (India Post Helpdesk)',
    officialLinks: [
          {
                "title": "India Post SSY Official Savings Account Portal",
                "url": "https://www.indiapost.gov.in/Financial/Pages/Content/Post-Office-Saving-Schemes.aspx",
                "type": "portal",
                "badge": "Post Office",
                "description": "Account opening rules, deposit limits, interest rates, and branch locator"
          },
          {
                "title": "Sukanya Samriddhi Maturity Calculator & Rules",
                "url": "https://www.indiapost.gov.in/",
                "type": "guidelines",
                "badge": "Tax Free (EEE)",
                "description": "Section 80C tax deduction guide & 8.2% annual compound growth schedule"
          },
          {
                "title": "Reserve Bank of India Master Direction on SSY",
                "url": "https://www.rbi.org.in/",
                "type": "guidelines",
                "badge": "RBI Gazette",
                "description": "Official notifications on premature withdrawal for higher studies"
          }
    ],
    disbursalTimeline: 'Account opens immediately; matures upon 21 years or girl child’s marriage after age 18',
    processingFee: '₹0 (Free account opening with ₹250 initial deposit)',
    applicationSteps: [
      'Visit any Post Office branch or designated Public/Private sector bank.',
      'Fill Sukanya Samriddhi Account Opening Form (Form SSA-1).',
      'Attach girl child’s birth certificate and guardian’s KYC proofs.',
      'Deposit initial amount (min ₹250) in cash or cheque.'
    ],
    commonRejectionReasons: [
      'Girl child age exceeding 10 years at time of application.',
      'More than 2 accounts opened (allowed for maximum 2 girl children per family, with twin exception).',
      'Missing formal birth certificate from municipal/panchayat registrar.'
    ],
    tags: ['Girl Child', 'Education Savings', 'High Interest', 'Tax Free', 'Beti Bachao']
  },
  {
    id: 'pm-vishwakarma',
    name: 'PM Vishwakarma Yojana',
    hindiName: 'पीएम विश्वकर्मा योजना',
    shortName: 'PM Vishwakarma',
    ministry: 'Ministry of Micro, Small and Medium Enterprises',
    level: 'Central',
    category: 'Business & MSME',
    benefitType: 'Subsidized Credit / Loan',
    monetaryValueEstimate: 315000,
    monetaryValueDisplay: '₹15,000 Modern Toolkit + ₹3 Lakh Concessional Loan @ 5%',
    sticker: {
      emoji: '🛠️',
      badge: 'TOOLKIT GRANT',
      title: '₹15,000 Free Tools + 5% Subsidized Loan',
      tagline: '18 Traditional Artisan Crafts · PM Skill ID',
      theme: 'orange',
    },
    description: 'Holistic scheme providing end-to-end support to traditional artisans and craftspeople across 18 designated trades (Carpenters, Blacksmiths, Potters, Cobblers, Tailors, Weavers, etc.).',
    keyBenefits: [
      'PM Vishwakarma Certificate and ID Card conferring official recognition',
      'Skill upgradation with ₹500/day stipend during 5-7 days basic training',
      'Modern Toolkit incentive of ₹15,000 via e-RUPI voucher',
      'Collateral-free credit support: ₹1 Lakh (Tranche 1) and ₹2 Lakh (Tranche 2) at heavily subsidized interest rate of 5%'
    ],
    targetAudienceText: 'Artisans or craftspeople working with hands and traditional tools in 18 identified trades',
    eligibilityCriteria: {
      minAge: 18,
      occupations: ['Artisan / Craftsman'],
      requiresNonTaxpayer: true
    },
    documentsRequired: [
      { id: 'aadhaar', name: 'Aadhaar Card with linked mobile', purpose: 'Biometric registration & e-KYC', issuer: 'UIDAI', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/' },
      { id: 'bank-passbook', name: 'Bank Account Passbook', purpose: 'Stipend and toolkit e-voucher crediting', issuer: 'Bank', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-banking-status' },
      { id: 'ration-card', name: 'Family Ration Card', purpose: 'One member per family rule verification', issuer: 'State Food Dept', mandatory: true, downloadUrl: 'https://nfsa.gov.in/' }
    ],
    applicationMode: 'CSC / Common Service Center',
    applicationUrl: 'https://pmvishwakarma.gov.in/',
    helplineNumber: '1800-267-7777 / 011-23061574',
    officialLinks: [
          {
                "title": "PM Vishwakarma Official Portal & CSC Registration",
                "url": "https://pmvishwakarma.gov.in/",
                "type": "apply",
                "badge": "Direct Apply",
                "description": "Biometric registration for 18 traditional crafts via CSC centers"
          },
          {
                "title": "Artisan Login & Vishwakarma Digital Certificate",
                "url": "https://pmvishwakarma.gov.in/Home/Login",
                "type": "status",
                "badge": "Artisan ID",
                "description": "Download PM Vishwakarma ID card and check 3-tier verification status"
          },
          {
                "title": "₹15,000 Modern Toolkit E-Voucher Details",
                "url": "https://pmvishwakarma.gov.in/Home/AboutScheme",
                "type": "guidelines",
                "badge": "Toolkit Voucher",
                "description": "List of certified modern tools for carpenters, masons, cobblers, tailors, etc."
          }
    ],
    disbursalTimeline: 'Training scheduled within 3 weeks; toolkit e-voucher disbursed on completion',
    processingFee: '₹0 (Govt reimburses CSC fees)',
    applicationSteps: [
      'Visit nearest CSC centre with Aadhaar and bank details.',
      'Complete biometric e-KYC and declare your family craft trade (e.g. Carpenter, Tailor, Potter, etc.).',
      'Application undergoes 3-tier verification: Gram Panchayat / ULB -> District Implementation Committee -> Screening Committee.',
      'Attend mandatory 5-day basic skill training and receive ₹15,000 toolkit voucher.'
    ],
    commonRejectionReasons: [
      'Applicant does not practice any of the 18 designated traditional trades.',
      'Another member of the same family has already availed PM Vishwakarma benefits.',
      'Applicant or family member has existing outstanding MUDRA or PMEGP loans in default.'
    ],
    tags: ['Artisans', 'Craftsmen', 'Toolkit', 'Low Interest Loan', 'Traditional Trade']
  },
  {
    id: 'pm-svanidhi',
    name: 'PM Street Vendor’s AtmaNirbhar Nidhi (PM SVANidhi)',
    hindiName: 'पीएम स्वनिधि योजना',
    shortName: 'PM SVANidhi',
    ministry: 'Ministry of Housing and Urban Affairs',
    level: 'Central',
    category: 'Business & MSME',
    benefitType: 'Subsidized Credit / Loan',
    monetaryValueEstimate: 80000,
    monetaryValueDisplay: '₹10,000 -> ₹20,000 -> ₹50,000 Working Capital',
    sticker: {
      emoji: '🛒',
      badge: 'STREET CAPITAL',
      title: '₹10,000 to ₹50,000 Working Capital',
      tagline: '7% Interest Subsidy · Digital Cashback',
      theme: 'teal',
    },
    description: 'Special micro-credit facility providing affordable collateral-free working capital loans to urban and peri-urban street vendors to resume their livelihoods with 7% interest subsidy.',
    keyBenefits: [
      'First tranche loan of up to ₹10,000 without collateral; on timely repayment unlocks ₹20,000 and ₹50,000 tranches',
      'Interest subsidy of 7% per annum credited quarterly directly into vendor bank account',
      'Cashback reward up to ₹1,200 per year (₹100/month) for accepting digital UPI payments',
      'No pre-payment penalty for early loan closure'
    ],
    targetAudienceText: 'Urban, semi-urban, and peri-urban street vendors, hawkers, thela-wallas, and rehri operators',
    eligibilityCriteria: {
      minAge: 18,
      occupations: ['Street Vendor / Hawker'],
      areaType: ['Urban', 'Semi-Urban']
    },
    documentsRequired: [
      { id: 'vending-cert', name: 'Certificate of Vending / Vendor ID Card (CoV/LoR)', purpose: 'Proof of street vending from ULB/Town Vending Committee', issuer: 'Urban Local Body / Municipality', mandatory: true },
      { id: 'aadhaar', name: 'Aadhaar Card', purpose: 'Identity & e-KYC', issuer: 'UIDAI', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/' },
      { id: 'bank-passbook', name: 'Bank Passbook / UPI QR Code', purpose: 'Direct loan disbursal and digital cashback', issuer: 'Bank / Payment Provider', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-banking-status' }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://pmsvanidhi.mohua.gov.in/',
    helplineNumber: '1800-111-979 (Ministry of Housing & Urban Affairs)',
    officialLinks: [
          {
                "title": "PM SVANidhi Portal (Apply for Street Vendor Loan)",
                "url": "https://pmsvanidhi.mohua.gov.in/",
                "type": "apply",
                "badge": "Instant Apply",
                "description": "1st tranche ₹10,000, 2nd tranche ₹20,000, 3rd tranche ₹50,000 collateral-free credit"
          },
          {
                "title": "Track Application Status Online",
                "url": "https://pmsvanidhi.mohua.gov.in/Home/TrackStatus",
                "type": "status",
                "badge": "Live Status",
                "description": "Enter registered mobile number and application number to track bank sanction"
          },
          {
                "title": "Letter of Recommendation (LoR) Online Application",
                "url": "https://pmsvanidhi.mohua.gov.in/",
                "type": "apply",
                "badge": "ULB LoR Form",
                "description": "For vendors without existing vending certificate from urban local body"
          }
    ],
    disbursalTimeline: 'Usually within 10 to 14 days directly into applicant’s bank account',
    processingFee: '₹0 (Zero processing fee)',
    applicationSteps: [
      'Visit pmsvanidhi.mohua.gov.in or PM SVANidhi mobile app.',
      'Enter Aadhaar linked mobile number to verify OTP.',
      'Select your Urban Local Body (ULB) and enter Certificate of Vending (CoV) or Letter of Recommendation (LoR).',
      'Select preferred lending institution (Lender Bank) and submit.'
    ],
    commonRejectionReasons: [
      'Applicant does not possess Certificate of Vending or ULB Letter of Recommendation.',
      'Active commercial non-performing asset (NPA) in another bank.',
      'Vendor location is purely rural outside municipal limits.'
    ],
    tags: ['Street Vendors', 'Working Capital', 'Digital Cashback', 'Urban Livelihood']
  },
  {
    id: 'national-scholarship-portal',
    name: 'National Scholarship Portal - Post Matric Scholarships',
    hindiName: 'राष्ट्रीय छात्रवृत्ति पोर्टल - पोस्ट मैट्रिक स्कॉलरशिप',
    shortName: 'NSP Scholarship',
    ministry: 'Ministry of Social Justice & Empowerment / Tribal Affairs / Minority Affairs',
    level: 'Central',
    category: 'Education',
    benefitType: 'Scholarship',
    monetaryValueEstimate: 50000,
    monetaryValueDisplay: 'Full Tuition Fee Reimbursement + Monthly Maintenance Allowance',
    sticker: {
      emoji: '📚',
      badge: 'FULL REIMBURSEMENT',
      title: '100% Tuition Fee & Maintenance Grant',
      tagline: 'SC / ST / OBC Post-Matric Scholar Cover',
      theme: 'purple',
    },
    description: 'Flagship scholarship scheme supporting post-matriculation / post-secondary education for students from disadvantaged socio-economic backgrounds studying in recognized institutions.',
    keyBenefits: [
      '100% compulsory non-refundable fees reimbursed directly to institution or student',
      'Monthly maintenance allowance ranging from ₹550 to ₹1,200 per month for hostellers & day scholars',
      'Study tour charges, thesis typing allowance, and book grants for professional degree courses',
      'Direct Benefit Transfer (DBT) into student’s Aadhaar-seeded bank account'
    ],
    targetAudienceText: 'Class 11, Class 12, Diploma, ITI, Graduation, and Post-Graduation students from SC/ST/OBC/EWS/Minority communities',
    eligibilityCriteria: {
      occupations: ['Student'],
      socialCategories: ['OBC', 'SC', 'ST', 'EWS', 'Minority'],
      maxAnnualIncome: 250000,
      minAge: 15,
      maxAge: 32
    },
    documentsRequired: [
      { id: 'income-cert', name: 'Income Certificate (< ₹2.5 Lakh)', purpose: 'Proof of parental annual income ceiling', issuer: 'Revenue Authority / Tehsildar', mandatory: true, downloadUrl: 'https://services.india.gov.in/' },
      { id: 'caste-cert', name: 'Caste / Community Certificate', purpose: 'Social category verification', issuer: 'Competent District Magistrate / Tehsildar', mandatory: true, downloadUrl: 'https://services.india.gov.in/' },
      { id: 'marksheet', name: 'Previous Academic Year Marksheet', purpose: 'Passing percentage verification', issuer: 'School Board / University', mandatory: true },
      { id: 'fee-receipt', name: 'Current Course Bonafide Certificate & Fee Receipt', purpose: 'Proof of ongoing enrollment', issuer: 'College / Educational Institution', mandatory: true },
      { id: 'bank-passbook', name: 'Student’s Own Bank Passbook', purpose: 'DBT scholarship crediting', issuer: 'Scheduled Bank', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-banking-status' }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://scholarships.gov.in/',
    helplineNumber: '0120-6619540 / helpdesk@nsp.gov.in',
    officialLinks: [
          {
                "title": "National Scholarship Portal (NSP) - New Student Registration",
                "url": "https://scholarships.gov.in/fresh/newstdRegfrmInstruction",
                "type": "apply",
                "badge": "Fresh Application",
                "description": "OTR (One Time Registration) with Aadhaar and academic marksheet"
          },
          {
                "title": "NSP Student Login & Application Renewal",
                "url": "https://scholarships.gov.in/",
                "type": "status",
                "badge": "Student Login",
                "description": "Check institute nodal officer verification and state approval"
          },
          {
                "title": "PFMS DBT Payment Status (Know Your Payments)",
                "url": "https://pfms.nic.in/static/NewLayout_KnowYourPayments.aspx",
                "type": "status",
                "badge": "PFMS Tracker",
                "description": "Track scholarship money credit directly in your Aadhaar-linked bank account"
          },
          {
                "title": "NSP Official Scheme Guidelines & Eligibility Roster",
                "url": "https://scholarships.gov.in/public/schemeGuidelines/Guidelines.pdf",
                "type": "guidelines",
                "badge": "Official PDF",
                "description": "Post-Matric, Top Class, and Pre-Matric Central Sector guidelines"
          }
    ],
    disbursalTimeline: 'Disbursed directly into student account within 2-3 months after state nodal verification',
    processingFee: '₹0 (Free portal registration)',
    applicationSteps: [
      'Register on scholarships.gov.in using One-Time Registration (OTR) with Aadhaar FaceRD.',
      'Fill student academic and category profile and upload scanned certificates.',
      'Submit application to your college institute nodal officer for e-verification.',
      'Track status online through District and State verification levels.'
    ],
    commonRejectionReasons: [
      'Parental annual income on certificate exceeds ₹2.50 Lakh.',
      'Bank account is not in the student’s own sole name, or not seeded with Aadhaar.',
      'Student availed multiple concurrent government scholarships in the same academic year.'
    ],
    tags: ['Students', 'Scholarship', 'Tuition Fee Waiver', 'Education', 'College']
  },
  {
    id: 'atal-pension-yojana',
    name: 'Atal Pension Yojana (APY)',
    hindiName: 'अटल पेंशन योजना',
    shortName: 'APY',
    ministry: 'Ministry of Finance / PFRDA',
    level: 'Central',
    category: 'Pensions & Elderly',
    benefitType: 'Monthly Pension',
    monetaryValueEstimate: 60000,
    monetaryValueDisplay: 'Guaranteed ₹1,000 to ₹5,000 / month pension from age 60',
    sticker: {
      emoji: '🛡️',
      badge: 'GUARANTEED PENSION',
      title: '₹1,000 to ₹5,000 Lifelong Monthly Income',
      tagline: 'Sovereign Guarantee · Spouse Pension Cover',
      theme: 'cyan',
    },
    description: 'Government-backed pension scheme focused on workers in the unorganized sector, guaranteeing a fixed monthly pension from age 60 based on modest monthly contributions during working years.',
    keyBenefits: [
      'Guaranteed fixed pension of ₹1,000, ₹2,000, ₹3,000, ₹4,000, or ₹5,000 per month for life from age 60',
      'Spouse receives identical pension amount upon death of the subscriber',
      'Entire accumulated pension corpus returned to legal nominee upon death of both subscriber and spouse',
      'Nominal auto-debit contribution starting from as low as ₹42/month (for age 18)'
    ],
    targetAudienceText: 'All Indian citizens aged between 18 and 40 years working in the unorganized sector who are not income tax payers',
    eligibilityCriteria: {
      minAge: 18,
      maxAge: 40,
      requiresNonTaxpayer: true
    },
    documentsRequired: [
      { id: 'aadhaar', name: 'Aadhaar Card', purpose: 'Identity and age verification', issuer: 'UIDAI', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/' },
      { id: 'bank-account', name: 'Savings Bank Account with Auto-Debit facility', purpose: 'Automatic monthly/quarterly contribution deductions', issuer: 'Bank / Post Office', mandatory: true },
      { id: 'nominee-details', name: 'Nominee Aadhaar & Identity', purpose: 'Corpus inheritance rights', issuer: 'UIDAI', mandatory: true }
    ],
    applicationMode: 'Bank Branch',
    applicationUrl: 'https://enps.nsdl.com/eNPS/ApySubForm.html',
    helplineNumber: '1800-110-069 (PFRDA Pension Helpdesk)',
    officialLinks: [
          {
                "title": "NSDL CRA APY Portal & e-PRAN Download",
                "url": "https://www.npscra.nsdl.co.in/scheme-details.php",
                "type": "portal",
                "badge": "NSDL Portal",
                "description": "Download APY e-PRAN card and generate transaction statement"
          },
          {
                "title": "PFRDA Pension & Premium Contribution Calculator",
                "url": "https://www.pfrda.org.in/",
                "type": "guidelines",
                "badge": "Contribution Chart",
                "description": "Age-wise monthly contribution chart for guaranteed ₹1,000 to ₹5,000 pension"
          }
    ],
    disbursalTimeline: 'PRAN allotted immediately; guaranteed pension payout commences upon turning 60 years old',
    processingFee: '₹0 (Zero enrollment charge)',
    applicationSteps: [
      'Visit your bank branch or access net-banking / mobile banking portal.',
      'Fill APY enrollment form and select preferred monthly pension amount (₹1,000 - ₹5,000).',
      'Provide auto-debit mandate for periodic savings deduction.',
      'Receive Permanent Retirement Account Number (PRAN) SMS.'
    ],
    commonRejectionReasons: [
      'Applicant age is less than 18 or greater than 40 at the time of enrollment.',
      'Applicant is an income tax payer (as per mandate post Oct 1, 2022).',
      'Insufficient bank balance causing consecutive auto-debit defaults.'
    ],
    tags: ['Pension', 'Retirement', 'Unorganized Sector', 'Guaranteed Income']
  },
  {
    id: 'pmmvy',
    name: 'Pradhan Mantri Matru Vandana Yojana (PMMVY)',
    hindiName: 'प्रधानमंत्री मातृ वंदना योजना',
    shortName: 'PMMVY',
    ministry: 'Ministry of Women and Child Development',
    level: 'Centrally Sponsored',
    category: 'Women & Child',
    benefitType: 'Direct Cash Transfer',
    monetaryValueEstimate: 6000,
    monetaryValueDisplay: '₹5,000 - ₹6,000 Direct Maternity Cash Benefit',
    sticker: {
      emoji: '🍼',
      badge: 'MATERNITY BENEFIT',
      title: '₹5,000 Direct DBT Mother & Child Aid',
      tagline: 'Nutritional Support for 1st Living Child',
      theme: 'rose',
    },
    description: 'Direct cash incentive scheme for pregnant women and lactating mothers to partially compensate for wage loss, ensure nutritious diet, and promote safe institutional delivery.',
    keyBenefits: [
      '₹5,000 in two installments for first child upon registration, antenatal check-up, and vaccination',
      '₹6,000 incentive in single installment for second child if the newborn is a girl child (to prevent female foeticide)',
      'Direct Benefit Transfer (DBT) straight into mother’s Aadhaar-linked bank account',
      'Promotes institutional delivery and timely immunization'
    ],
    targetAudienceText: 'Pregnant women and lactating mothers (except regular government/PSU employees)',
    eligibilityCriteria: {
      gender: 'Female',
      minAge: 19,
      requiresPregnantOrLactating: true,
      requiresNonTaxpayer: true
    },
    documentsRequired: [
      { id: 'aadhaar-mother', name: 'Mother’s Aadhaar Card', purpose: 'Mandatory beneficiary identification', issuer: 'UIDAI', mandatory: true },
      { id: 'mcp-card', name: 'Mother and Child Protection (MCP) Card', purpose: 'Proof of pregnancy registration and ANC checkup', issuer: 'Anganwadi / Primary Health Centre', mandatory: true },
      { id: 'bank-passbook', name: 'Mother’s Own Bank Passbook', purpose: 'Aadhaar-seeded account for DBT', issuer: 'Bank', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-banking-status' }
    ],
    applicationMode: 'CSC / Common Service Center',
    applicationUrl: 'https://pmmvy.wcd.gov.in/',
    helplineNumber: '011-23382393 (Women & Child Development Helpdesk)',
    officialLinks: [
          {
                "title": "PMMVY Citizen Registration Portal",
                "url": "https://pmmvy.wcd.gov.in/",
                "type": "apply",
                "badge": "Citizen Portal",
                "description": "Direct citizen self-registration and installment tracking for pregnant women"
          },
          {
                "title": "Ministry of Women and Child Development Guidelines",
                "url": "https://wcd.gov.in/schemes/pradhan-mantri-matru-vandana-yojana",
                "type": "guidelines",
                "badge": "Guidelines",
                "description": "Mother and Child Protection (MCP) card rules and immunization milestone schedule"
          }
    ],
    disbursalTimeline: 'Direct bank transfer within 30 days of registering milestone on PMMVY portal',
    processingFee: '₹0 (Completely free at Anganwadi / Health Sub-Centre)',
    applicationSteps: [
      'Register pregnancy at nearest Anganwadi Centre (AWC) or authorized government health facility.',
      'Submit Form 1A along with MCP card details within 570 days of Last Menstrual Period (LMP).',
      'Undergo at least one Antenatal Check-up (ANC) for first installment.',
      'Submit child birth registration and initial vaccination cycle record for final installment.'
    ],
    commonRejectionReasons: [
      'Applicant is employed in central/state government or PSU with paid maternity leave.',
      'Bank account in husband’s or joint name (must be in mother’s own single account).',
      'Application delayed beyond 570 days from LMP date.'
    ],
    tags: ['Maternity', 'Pregnant Women', 'Nutrition', 'Direct Cash Transfer', 'Child Health']
  },
  {
    id: 'pm-ujjwala-2',
    name: 'Pradhan Mantri Ujjwala Yojana 2.0',
    hindiName: 'प्रधानमंत्री उज्ज्वला योजना २.०',
    shortName: 'PM Ujjwala',
    ministry: 'Ministry of Petroleum and Natural Gas',
    level: 'Central',
    category: 'Social Welfare',
    benefitType: 'Asset Subsidy',
    monetaryValueEstimate: 3600,
    monetaryValueDisplay: 'Deposit-free LPG Connection + Free Stove & 1st Refill + ₹300 Subsidy/cylinder',
    sticker: {
      emoji: '🔥',
      badge: 'CLEAN FUEL',
      title: 'Free LPG Gas Cylinder + Free Stove',
      tagline: 'Zero Security Deposit · Smoke-Free Kitchen',
      theme: 'amber',
    },
    description: 'Provides clean cooking fuel (LPG) connections to women from poor and underprivileged households without requiring any upfront security deposit.',
    keyBenefits: [
      'Deposit-free LPG cylinder connection (no security deposit for 14.2kg/5kg cylinder or pressure regulator)',
      'First LPG refill cylinder supplied completely free of charge',
      'Free two-burner domestic LPG hotplate / stove included',
      'Targeted ongoing direct subsidy of ₹300 per 14.2 kg cylinder for up to 12 refills per year'
    ],
    targetAudienceText: 'Adult women from poor households having no existing LPG connection in the family',
    eligibilityCriteria: {
      gender: 'Female',
      minAge: 18,
      requiresBpl: true,
    },
    documentsRequired: [
      { id: 'aadhaar-applicant', name: 'Aadhaar Card of Woman Applicant', purpose: 'Identity and age verification', issuer: 'UIDAI', mandatory: true },
      { id: 'ration-card', name: 'Ration Card / Annexure-I Family Composition Declaration', purpose: 'Proof that household has no existing LPG connection', issuer: 'State Food & Civil Supplies Dept', mandatory: true, downloadUrl: 'https://nfsa.gov.in/' },
      { id: 'bank-passbook', name: 'Bank Passbook linked with Aadhaar', purpose: 'Direct cylinder subsidy credit', issuer: 'Bank', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-banking-status' }
    ],
    applicationMode: 'CSC / Common Service Center',
    applicationUrl: 'https://www.pmuy.gov.in/',
    helplineNumber: '1800-266-6696 / 1906 (24x7 Gas Emergency)',
    officialLinks: [
          {
                "title": "PM Ujjwala Yojana 2.0 Online Application",
                "url": "https://www.pmuy.gov.in/ujjwala2.html",
                "type": "apply",
                "badge": "Apply Online",
                "description": "Free LPG connection with zero deposit, free stove & first refill for women"
          },
          {
                "title": "Indane Gas Ujjwala Registration",
                "url": "https://cx.indianoil.in/",
                "type": "apply",
                "badge": "Indane Gas",
                "description": "Indian Oil Corporation Ujjwala 2.0 distributor portal"
          },
          {
                "title": "Bharat Gas Ujjwala Registration",
                "url": "https://my.ebharatgas.com/",
                "type": "apply",
                "badge": "Bharat Gas",
                "description": "Bharat Petroleum online consumer enrollment"
          },
          {
                "title": "HP Gas Ujjwala Registration",
                "url": "https://myhpgas.in/",
                "type": "apply",
                "badge": "HP Gas",
                "description": "Hindustan Petroleum online consumer enrollment"
          }
    ],
    disbursalTimeline: 'LPG connection and stove delivered within 7 to 10 days of distributor verification',
    processingFee: '₹0 (Completely free for eligible beneficiaries)',
    applicationSteps: [
      'Apply online on pmuy.gov.in or submit physical form to your nearest Indane, Bharat Gas, or HP Gas distributor.',
      'Submit family composition declaration and Aadhaar copies of all adult family members.',
      'Gas agency verifies no pre-existing LPG connection exists in the de-duplication software.',
      'Collect free cylinder, regulator, safety hose, and stove from the gas dealership.'
    ],
    commonRejectionReasons: [
      'An existing active LPG connection is registered in the name of any family member at the same address.',
      'Applicant is male (scheme is strictly issued in the name of an adult woman of the household).'
    ],
    tags: ['LPG Gas', 'Women Empowerment', 'Clean Fuel', 'BPL', 'Subsidy']
  },
  {
    id: 'kisan-credit-card',
    name: 'Kisan Credit Card (KCC) Scheme',
    hindiName: 'किसान क्रेडिट कार्ड योजना',
    shortName: 'KCC',
    ministry: 'Ministry of Agriculture / RBI / NABARD',
    level: 'Central',
    category: 'Agriculture',
    benefitType: 'Subsidized Credit / Loan',
    monetaryValueEstimate: 300000,
    monetaryValueDisplay: 'Subsidized Crop Credit up to ₹3 Lakh at effective 4% Interest',
    sticker: {
      emoji: '🚜',
      badge: '4% SUBSIDIZED',
      title: 'Low-Interest Agri Credit up to ₹3 Lakh',
      tagline: 'RuPay Kisan ATM Card · Flexible Repayment',
      theme: 'emerald',
    },
    description: 'Provides timely and adequate credit to farmers for crop cultivation, post-harvest expenses, farm asset maintenance, and dairy/animal husbandry at heavily subsidized interest rates.',
    keyBenefits: [
      'Short-term production credit up to ₹3,00,000 at nominal 7% interest rate',
      'Additional 3% prompt repayment incentive (PRI), bringing effective interest down to just 4% per annum',
      'Collateral-free loan limit up to ₹1.60 Lakh (extended to ₹2.00 Lakh)',
      'Flexible revolving cash credit with RuPay KCC card usable at ATMs and fertilizer outlets'
    ],
    targetAudienceText: 'Owner cultivators, tenant farmers, oral lessees, sharecroppers, and dairy/fishery farmers',
    eligibilityCriteria: {
      minAge: 18,
      occupations: ['Farmer'],
      requiresFarmland: true
    },
    documentsRequired: [
      { id: 'kcc-application', name: 'Completed KCC Application Form', purpose: 'Credit appraisal', issuer: 'Bank', mandatory: true },
      { id: 'land-record', name: 'Land Record (Khata/Khasra/Patta) with Crop Pattern', purpose: 'Determination of scale of finance', issuer: 'Revenue Inspector / Tehsildar', mandatory: true },
      { id: 'aadhaar-pan', name: 'Aadhaar Card and PAN Card', purpose: 'Standard Banking KYC', issuer: 'UIDAI / IT Dept', mandatory: true }
    ],
    applicationMode: 'Bank Branch',
    applicationUrl: 'https://fasalrin.gov.in/',
    helplineNumber: '1800-180-1551 (Kisan Call Centre)',
    officialLinks: [
          {
                "title": "Department of Agriculture KCC Scheme Portal",
                "url": "https://agricoop.nic.in/",
                "type": "portal",
                "badge": "Agri Portal",
                "description": "Operational guidelines for crop, livestock, and fisheries loans at 4% effective interest"
          },
          {
                "title": "NABARD Kisan Credit Card Guidelines",
                "url": "https://www.nabard.org/",
                "type": "guidelines",
                "badge": "NABARD",
                "description": "Scale of finance and prompt repayment 3% interest subvention"
          },
          {
                "title": "SBI Kisan Credit Card Application Portal",
                "url": "https://sbi.co.in/web/agri-rural/agriculture-banking/kisan-credit-card",
                "type": "apply",
                "badge": "Bank Portal",
                "description": "Online application and RuPay Kisan Card activation"
          }
    ],
    disbursalTimeline: 'Bank must process and issue KCC within 14 days of receiving complete application',
    processingFee: 'Zero processing fee, documentation, or ledger folio charges for limits up to ₹3 Lakh',
    applicationSteps: [
      'Fill the simplified one-page KCC application form (also downloadable from pmkisan.gov.in).',
      'Attach copy of land revenue document showing your cultivable land area and intended crops.',
      'Submit to the bank branch where your PM-KISAN account is held.',
      'Collect KCC RuPay card and drawdown credit as needed throughout cropping season.'
    ],
    commonRejectionReasons: [
      'Outstanding overdue default in another agricultural credit society or bank.',
      'Land records disputed or not updated in the applicant’s name.'
    ],
    tags: ['Farmers', 'Cheap Loan', 'Crop Credit', 'Agriculture', 'Low Interest']
  },
  {
    id: 'ign-old-age-pension',
    name: 'Indira Gandhi National Old Age Pension Scheme (IGNOAPS)',
    hindiName: 'इंदिरा गांधी राष्ट्रीय वृद्धावस्था पेंशन योजना',
    shortName: 'Old Age Pension',
    ministry: 'Ministry of Rural Development (NSAP)',
    level: 'Centrally Sponsored',
    category: 'Pensions & Elderly',
    benefitType: 'Monthly Pension',
    monetaryValueEstimate: 12000,
    monetaryValueDisplay: '₹1,000 - ₹3,000 / month (Central + State Combined Contribution)',
    sticker: {
      emoji: '🧓',
      badge: 'SENIOR DIGNITY',
      title: 'Monthly Cash Pension for Elders (60+)',
      tagline: 'NSAP Direct Benefit Transfer to Bank',
      theme: 'blue',
    },
    description: 'Social security monthly pension provided to destitute elderly citizens living below the poverty line to ensure dignity and basic financial independence.',
    keyBenefits: [
      'Monthly direct cash transfer credited directly into senior citizen’s bank or post office account',
      'Base central assistance topped up substantially by State Government contributions (totaling ₹1,000 to ₹3,000/mo depending on state)',
      'Higher rate disbursed for super-senior citizens aged 80 and above'
    ],
    targetAudienceText: 'Citizens aged 60 years or above living below the poverty line (BPL / Antyodaya)',
    eligibilityCriteria: {
      minAge: 60,
      requiresBpl: true,
      requiresNonTaxpayer: true
    },
    documentsRequired: [
      { id: 'aadhaar', name: 'Aadhaar Card', purpose: 'Age proof and DBT verification', issuer: 'UIDAI', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/' },
      { id: 'bpl-proof', name: 'BPL Ration Card / SECC Inclusion Slip', purpose: 'Proof of below-poverty line status', issuer: 'Gram Panchayat / Block Office', mandatory: true },
      { id: 'bank-passbook', name: 'Single Bank Account Passbook', purpose: 'Monthly pension credit', issuer: 'Bank', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-banking-status' }
    ],
    applicationMode: 'District Welfare Office',
    applicationUrl: 'https://nsap.nic.in/',
    helplineNumber: '011-24360670 (National Social Assistance Programme)',
    officialLinks: [
          {
                "title": "NSAP National Social Assistance Portal",
                "url": "https://nsap.nic.in/",
                "type": "portal",
                "badge": "NSAP Portal",
                "description": "Check senior citizen pension eligibility and state-wise quota allocation"
          },
          {
                "title": "Track Pension Disbursal & Beneficiary Search",
                "url": "https://nsap.nic.in/",
                "type": "status",
                "badge": "Pension Tracker",
                "description": "Search payment history using Sanction Order Number or Application ID"
          },
          {
                "title": "UMANG Pension Services Gateway",
                "url": "https://web.umang.gov.in/",
                "type": "portal",
                "badge": "UMANG",
                "description": "Access digital life certificate submission and pension tracking"
          }
    ],
    disbursalTimeline: 'Monthly automatic DBT release following Block/District Sanction Committee approval',
    processingFee: '₹0 (Free government service)',
    applicationSteps: [
      'Submit physical or online application to the Block Development Officer (BDO) in rural areas or Sub-Divisional Officer (SDO) in urban areas.',
      'Enclose age proof (Aadhaar/Voter Card) and proof of BPL household status.',
      'Social Welfare Department conducts door-to-door verification.',
      'Sanction order issued and monthly pension begins via direct bank transfer.'
    ],
    commonRejectionReasons: [
      'Applicant age is below 60 years.',
      'Household is not on the recognized state BPL/SECC list.',
      'Receiving another government or employer pension.'
    ],
    tags: ['Elderly', 'Senior Citizens', 'Old Age Pension', 'BPL', 'Monthly Support']
  },
  {
    id: 'stand-up-india',
    name: 'Stand-Up India Scheme',
    hindiName: 'स्टैंड-अप इंडिया योजना',
    shortName: 'Stand-Up India',
    ministry: 'Ministry of Finance / SIDBI',
    level: 'Central',
    category: 'Business & MSME',
    benefitType: 'Subsidized Credit / Loan',
    monetaryValueEstimate: 5000000,
    monetaryValueDisplay: 'Bank Loans from ₹10 Lakh to ₹1 Crore for Greenfield Enterprises',
    sticker: {
      emoji: '🚀',
      badge: 'GREENFIELD VENTURE',
      title: '₹10 Lakh to ₹1 Crore Enterprise Loan',
      tagline: 'SC / ST & Women Entrepreneur Pioneers',
      theme: 'indigo',
    },
    description: 'Facilitates bank loans between ₹10 Lakh and ₹1 Crore to at least one Scheduled Caste (SC) or Scheduled Tribe (ST) borrower and at least one Woman borrower per commercial bank branch for setting up a greenfield enterprise.',
    keyBenefits: [
      'Composite loan (term loan + working capital) covering up to 85% of total project cost',
      'Low margin money requirement (only 15% which can be converged with eligible state subsidies)',
      'Repayable in up to 7 years with a moratorium period of up to 18 months',
      'Credit Guarantee Fund for Stand-Up India (CGFSI) backstop'
    ],
    targetAudienceText: 'SC/ST and/or Woman entrepreneurs above 18 years setting up their first greenfield business venture',
    eligibilityCriteria: {
      minAge: 18,
      socialCategories: ['SC', 'ST', 'General', 'OBC', 'EWS', 'Minority'], // General/OBC women are eligible
      gender: 'Any' // Filter logic: Women of any category OR SC/ST of any gender
    },
    documentsRequired: [
      { id: 'kyc', name: 'Aadhaar and PAN Card of Promoters', purpose: 'KYC and credit registry checks', issuer: 'UIDAI / IT Dept', mandatory: true },
      { id: 'caste-cert', name: 'SC/ST Certificate (if male applicant)', purpose: 'Eligibility verification', issuer: 'District Magistrate', mandatory: false, downloadUrl: 'https://services.india.gov.in/' },
      { id: 'project-report', name: 'Detailed Project Report (DPR)', purpose: 'Viability and machinery costs analysis', issuer: 'Chartered Accountant / Consultant', mandatory: true },
      { id: 'shareholding', name: 'Partnership deed / RoC Incorporation (51% female or SC/ST stake)', purpose: 'Majority controlling stake proof for non-individual units', issuer: 'MCA', mandatory: false }
    ],
    applicationMode: 'Bank Branch',
    applicationUrl: 'https://www.standupmitra.in/',
    helplineNumber: '1800-180-1159 (Stand-Up India Helpdesk)',
    officialLinks: [
          {
                "title": "Stand-Up India Official Portal",
                "url": "https://www.standupmitra.in/",
                "type": "apply",
                "badge": "Direct Apply",
                "description": "₹10 Lakh to ₹1 Crore greenfield enterprise bank loans for SC/ST and women"
          },
          {
                "title": "Locate Handholding Agencies (Training & DPR Preparation)",
                "url": "https://www.standupmitra.in/",
                "type": "portal",
                "badge": "Handholding",
                "description": "Connect with NABARD, SIDBI, and MSME-DI mentorship agencies"
          }
    ],
    disbursalTimeline: '30 to 45 business days for project appraisal and credit sanction',
    processingFee: 'Nominal bank appraisal fee as per commercial guidelines',
    applicationSteps: [
      'Register on standupmitra.in portal and choose your business category (Manufacturing, Services, Trading, or Agri-allied).',
      'Connect with SIDBI handholding agencies for DPR preparation and mentoring if needed.',
      'Submit loan application to your selected scheduled commercial bank branch.',
      'Receive sanction letter and margin money disbursement.'
    ],
    commonRejectionReasons: [
      'Existing brownfield expansion (must be a first-time greenfield setup).',
      'Male applicant who does not belong to SC or ST community.',
      'Borrower or co-promoter has existing credit default in commercial banks.'
    ],
    tags: ['Entrepreneurs', 'Women Business', 'SC/ST', 'Big Loan', 'Greenfield']
  },
  {
    id: 'pmkvy-4',
    name: 'Pradhan Mantri Kaushal Vikas Yojana 4.0 (PMKVY)',
    hindiName: 'प्रधानमंत्री कौशल विकास योजना',
    shortName: 'PMKVY',
    ministry: 'Ministry of Skill Development and Entrepreneurship (MSDE)',
    level: 'Central',
    category: 'Employment & Skills',
    benefitType: 'Skill Certification',
    monetaryValueEstimate: 18000,
    monetaryValueDisplay: '100% Free Skill Certification + ₹8,000 Stipend & Job Fair Access',
    sticker: {
      emoji: '🏭',
      badge: 'INDUSTRY 4.0',
      title: 'Free High-Demand Vocational Skilling',
      tagline: 'NSQF Certificate + ₹8,000 Cash Reward',
      theme: 'blue',
    },
    description: 'Flagship skill certification scheme to enable Indian youth to take up industry-relevant, future-ready skill training (AI, drones, IoT, healthcare, solar, logistics) to secure better livelihoods.',
    keyBenefits: [
      '100% government sponsored free training and assessment',
      'National Skills Qualifications Framework (NSQF) recognized government certificate',
      'Direct monetary allowance/stipend and accidental insurance cover during training',
      'Dedicated placement assistance and Rozgar Mela employment drives'
    ],
    targetAudienceText: 'Unemployed youth, school/college dropouts, or workers seeking formal industry skill recognition',
    eligibilityCriteria: {
      minAge: 15,
      maxAge: 45,
      occupations: ['Unemployed', 'Student', 'Daily Wage / Construction', 'Artisan / Craftsman']
    },
    documentsRequired: [
      { id: 'aadhaar', name: 'Aadhaar Card', purpose: 'Biometric student attendance and Skill India ID', issuer: 'UIDAI', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/' },
      { id: 'edu-proof', name: 'Last Educational Qualification Marksheet', purpose: 'Course entry criteria check', issuer: 'School / College', mandatory: true },
      { id: 'bank-passbook', name: 'Bank Passbook', purpose: 'Direct credit of training stipend', issuer: 'Bank', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-banking-status' }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://www.skillindiadigital.gov.in/',
    helplineNumber: '08800055555 (NSDC Candidate Helpline)',
    officialLinks: [
          {
                "title": "Skill India Digital Hub (SIDH)",
                "url": "https://www.skillindiadigital.gov.in/",
                "type": "portal",
                "badge": "Digital Hub",
                "description": "Enrol in Industry 4.0 courses, AI, robotics, drone pilot & mechatronics"
          },
          {
                "title": "Locate Nearest PMKVY Accredited Skill Center",
                "url": "https://www.skillindiadigital.gov.in/centers",
                "type": "portal",
                "badge": "Center Locator",
                "description": "Search Pradhan Mantri Kaushal Kendras (PMKK) across districts"
          },
          {
                "title": "PMKVY 4.0 Official Scheme Guidelines",
                "url": "https://www.msde.gov.in/en/schemes-initiatives/schemes-initiatives-through-nsdc/pradhan-mantri-kaushal-vikas-yojana-pmkvy",
                "type": "guidelines",
                "badge": "MSDE PDF",
                "description": "Assessment rules, NSQF level badges, and direct candidate wage stipend"
          }
    ],
    disbursalTimeline: 'Batches run throughout the year; certificate and placement support upon passing exam',
    processingFee: '₹0 (Completely free for candidates)',
    applicationSteps: [
      'Log into Skill India Digital portal (skillindiadigital.gov.in) with Aadhaar.',
      'Search for accredited PMKVY Training Centres near your pincode and select your desired job role.',
      'Enroll in the upcoming training batch and attend classroom/practical sessions.',
      'Take the assessment by third-party Sector Skill Council and receive government certification.'
    ],
    commonRejectionReasons: [
      'Candidate already certified under the exact same job role in a previous PMKVY version.',
      'Attendance fell below mandatory 80% biometric attendance threshold.'
    ],
    tags: ['Skills', 'Training', 'Youth', 'Jobs', 'Free Certificate']
  },
  {
    id: 'nfsa-ration-card',
    name: 'National Food Security Act (NFSA) - One Nation One Ration Card',
    hindiName: 'राष्ट्रीय खाद्य सुरक्षा अधिनियम - एक राष्ट्र एक राशन कार्ड',
    shortName: 'NFSA Ration',
    ministry: 'Ministry of Consumer Affairs, Food and Public Distribution',
    level: 'Centrally Sponsored',
    category: 'Social Welfare',
    benefitType: 'Free Foodgrains',
    monetaryValueEstimate: 14400,
    monetaryValueDisplay: '5 kg Free Foodgrains / person / month across ANY ration shop in India',
    sticker: {
      emoji: '🍚',
      badge: 'FREE RATION',
      title: '5kg Free Wheat/Rice Per Person/Month',
      tagline: 'One Nation One Ration Card · Pan-India Portability',
      theme: 'emerald',
    },
    description: 'Guarantees subsidized/free foodgrains (rice, wheat, coarse grains) to vulnerable citizens, with nationwide biometric portability allowing migrant workers to collect rations anywhere in India.',
    keyBenefits: [
      '5 kg of foodgrains per person per month completely free for Priority Households (PHH)',
      '35 kg of free foodgrains per family per month for Antyodaya Anna Yojana (AAY) poorest households',
      'Portability under One Nation One Ration Card: Collect rations from any Fair Price Shop across India using Aadhaar biometric authentication',
      'Protects food security during migration, illness, or economic distress'
    ],
    targetAudienceText: 'Economically weaker, underprivileged, and migrant citizen households',
    eligibilityCriteria: {
      requiresBpl: true,
      requiresNonTaxpayer: true,
      maxAnnualIncome: 180000
    },
    documentsRequired: [
      { id: 'aadhaar-all', name: 'Aadhaar of all family members', purpose: 'Biometric seeding on e-PoS device', issuer: 'UIDAI', mandatory: true },
      { id: 'income-proof', name: 'Income Certificate / BPL Survey Slip', purpose: 'Economic classification', issuer: 'Revenue Authority / Tehsildar', mandatory: true },
      { id: 'address-proof', name: 'Proof of Residence', purpose: 'Card jurisdictional assignment', issuer: 'State Food Dept', mandatory: true }
    ],
    applicationMode: 'CSC / Common Service Center',
    applicationUrl: 'https://nfsa.gov.in/',
    helplineNumber: '1967 / 1800-180-2087 (National Food Portal Helpline)',
    officialLinks: [
          {
                "title": "National Food Security Portal (Annavitran)",
                "url": "https://nfsa.gov.in/",
                "type": "portal",
                "badge": "Central Portal",
                "description": "Check NFSA ration entitlement and FPS (Fair Price Shop) allocations"
          },
          {
                "title": "One Nation One Ration Card (ONORC) National Portability",
                "url": "https://nfsa.gov.in/portal/onorc",
                "type": "status",
                "badge": "ONORC Status",
                "description": "Collect free foodgrains from any ration shop across India via Aadhaar"
          },
          {
                "title": "Mera Ration Mobile App (Google Play)",
                "url": "https://play.google.com/store/apps/details?id=com.nic.mops.rationcard",
                "type": "portal",
                "badge": "Mobile App",
                "description": "Check nearby FPS ration shops, entitlement quota, and transaction history"
          }
    ],
    disbursalTimeline: 'Monthly grain quota available on 1st of every calendar month at Fair Price Shops',
    processingFee: '₹0 (Zero fee for NFSA grain entitlement)',
    applicationSteps: [
      'Apply for new Ration Card or Member Addition via State Food & Civil Supplies portal or CSC.',
      'Submit family composition details and link Aadhaar numbers of all members.',
      'Upon verification, electronic Ration Card (e-Ration) is generated.',
      'Walk into any electronic Point of Sale (e-PoS) enabled Fair Price Shop and authenticate fingerprint/iris to collect foodgrains.'
    ],
    commonRejectionReasons: [
      'Family already possesses a pucca house with 3+ rooms, four-wheeler, or family member is government employee.',
      'Applicant has an active ration card registered in another district/state without cancellation certificate.'
    ],
    tags: ['Food Security', 'Free Ration', 'Wheat', 'Rice', 'Migrant Workers']
  },
  {
    id: 'disability-pension-igndps',
    name: 'Indira Gandhi National Disability Pension Scheme (IGNDPS) & UDID',
    hindiName: 'इंदिरा गांधी राष्ट्रीय दिव्यांग पेंशन योजना',
    shortName: 'Disability Pension',
    ministry: 'Ministry of Social Justice and Empowerment / Rural Development',
    level: 'Centrally Sponsored',
    category: 'Social Welfare',
    benefitType: 'Monthly Pension',
    monetaryValueEstimate: 18000,
    monetaryValueDisplay: '₹1,000 - ₹3,000 / month + Free Assistive Aids & Rail/Bus Concession',
    sticker: {
      emoji: '♿',
      badge: 'ACCESSIBLE AID',
      title: 'Disability Pension & National UDID Card',
      tagline: 'Benchmark 40%+ Disability Dignity Support',
      theme: 'purple',
    },
    description: 'Financial assistance and assistive equipment support for persons with severe or multiple disabilities living in poor households, accessible seamlessly via the Unique Disability ID (UDID).',
    keyBenefits: [
      'Monthly direct disability pension credited straight into bank account',
      'Free distribution of motorized tricycles, wheelchairs, hearing aids, and braille kits under ADIP scheme',
      'Rail and state road transport concession passes across India',
      'Unified Unique Disability ID (UDID) recognized pan-India eliminating repeated medical boards'
    ],
    targetAudienceText: 'Persons with 40% or more certified disability (80%+ for central pension) living below poverty line',
    eligibilityCriteria: {
      requiresDisability: true,
      minDisabilityPercentage: 40,
      requiresBpl: true
    },
    documentsRequired: [
      { id: 'disability-cert', name: 'Disability Certificate / UDID Card', purpose: 'Medical board disability assessment (>40%)', issuer: 'District Chief Medical Officer (CMO)', mandatory: true, downloadUrl: 'https://www.swavlambancard.gov.in/' },
      { id: 'aadhaar', name: 'Aadhaar Card', purpose: 'Identity & DBT', issuer: 'UIDAI', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/' },
      { id: 'bpl-cert', name: 'BPL Card / Income Certificate', purpose: 'Economic means test', issuer: 'Revenue Authority', mandatory: true },
      { id: 'bank-passbook', name: 'Applicant Bank Passbook', purpose: 'Pension disbursal', issuer: 'Bank', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-banking-status' }
    ],
    applicationMode: 'District Welfare Office',
    applicationUrl: 'https://www.swavlambancard.gov.in/',
    helplineNumber: '011-24369054 (Department of Empowerment of PwDs)',
    officialLinks: [
          {
                "title": "Swavlamban UDID Card Official Portal",
                "url": "https://www.swavlambancard.gov.in/",
                "type": "portal",
                "badge": "UDID Portal",
                "description": "National database for persons with disabilities and digital UDID Smart Card"
          },
          {
                "title": "Apply Online for Disability Certificate & UDID Card",
                "url": "https://www.swavlambancard.gov.in/pwd/application",
                "type": "apply",
                "badge": "Apply UDID",
                "description": "Medical board assessment slot booking and digital disability certificate issuance"
          },
          {
                "title": "NSAP Disability Pension Portal",
                "url": "https://nsap.nic.in/",
                "type": "status",
                "badge": "Pension Portal",
                "description": "Track monthly DBT disability grant status and bank account credits"
          }
    ],
    disbursalTimeline: 'Monthly pension release; UDID card delivered via Speed Post within 30 days',
    processingFee: '₹0 (Free government service)',
    applicationSteps: [
      'Apply online on swavlambancard.gov.in for UDID and select your nearest district hospital.',
      'Attend the designated medical board date for disability evaluation and percentage scoring.',
      'Submit UDID number to District Social Welfare Officer for automatic IGNDPS pension sanction.',
      'Collect assistive appliances at ADIP district camp.'
    ],
    commonRejectionReasons: [
      'Disability percentage assessed by medical board is under required statutory threshold.',
      'Applicant household income exceeds the state poverty line criteria.'
    ],
    tags: ['Disability', 'Divyangjan', 'UDID', 'Pension', 'Assistive Aids']
  },
  {
    id: 'pm-surya-ghar',
    name: 'PM Surya Ghar: Muft Bijli Yojana',
    hindiName: 'पीएम सूर्य घर: मुफ्त बिजली योजना',
    shortName: 'PM Surya Ghar',
    ministry: 'Ministry of New and Renewable Energy (MNRE)',
    level: 'Central',
    category: 'Housing',
    benefitType: 'Asset Subsidy',
    monetaryValueEstimate: 78000,
    monetaryValueDisplay: 'Direct Subsidy up to ₹78,000 + Up to 300 Units Free Electricity/month',
    sticker: {
      emoji: '☀️',
      badge: 'ZERO POWER BILL',
      title: '300 Units Free Power + ₹78,000 Subsidy',
      tagline: 'Direct Rooftop Solar Bank Disbursal',
      theme: 'amber',
    },
    description: 'National solar rooftop initiative providing massive direct subsidies to residential households to install rooftop solar panels, saving electricity bills and generating surplus income.',
    keyBenefits: [
      'Direct government subsidy of ₹30,000 for 1 kW, ₹60,000 for 2 kW, and ₹78,000 for 3 kW and above systems',
      'Provides up to 300 units of free electricity every month to household',
      'Sell excess generated power back to the grid via net metering for extra household income',
      'Collateral-free low interest bank loans at ~7% for balance system cost'
    ],
    targetAudienceText: 'Residential households with suitable rooftop space and an active electricity connection',
    eligibilityCriteria: {
      minAge: 18,
      requiresKutchaOrHomeless: false
    },
    documentsRequired: [
      { id: 'elec-bill', name: 'Latest Electricity Bill (Past 6 months)', purpose: 'Consumer number, sanctioned load, and DISCOM verification', issuer: 'State Electricity Distribution Company (DISCOM)', mandatory: true },
      { id: 'aadhaar', name: 'Aadhaar Card of Electricity Consumer', purpose: 'Identity & subsidy DBT', issuer: 'UIDAI', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/' },
      { id: 'bank-passbook', name: 'Cancelled Cheque / Bank Passbook', purpose: 'Direct bank credit of ₹78,000 subsidy', issuer: 'Bank', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-banking-status' }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://pmsuryaghar.gov.in/',
    helplineNumber: '15555 (Toll-Free National Solar Helpline)',
    officialLinks: [
          {
                "title": "PM Surya Ghar Muft Bijli Official Portal",
                "url": "https://pmsuryaghar.gov.in/",
                "type": "apply",
                "badge": "National Portal",
                "description": "Consumer registration, DISCOM meter approval, and direct bank subsidy release"
          },
          {
                "title": "Rooftop Solar Subsidy & Electricity Savings Calculator",
                "url": "https://pmsuryaghar.gov.in/rooftop_calculator",
                "type": "guidelines",
                "badge": "Calculator",
                "description": "Calculate system capacity (1kW, 2kW, 3kW), cost, and ₹30k to ₹78k subsidy"
          },
          {
                "title": "Find Registered DISCOM Solar Installers & Vendors",
                "url": "https://pmsuryaghar.gov.in/",
                "type": "portal",
                "badge": "Vendor Directory",
                "description": "Empaneled certified rooftop solar EPC contractors in your pin code"
          }
    ],
    disbursalTimeline: 'Subsidy credited directly to bank account within 30 days of net-meter installation',
    processingFee: '₹0 (Registration is completely free)',
    applicationSteps: [
      'Register on pmsuryaghar.gov.in with your State, Electricity Distribution Company (DISCOM), and Consumer Account Number.',
      'Apply for rooftop solar and wait for DISCOM feasibility approval.',
      'Install system through any DISCOM registered vendor of your choice.',
      'Apply for net-metering; post-inspection, commission certificate is issued and subsidy is disbursed directly via DBT.'
    ],
    commonRejectionReasons: [
      'Name on electricity connection does not match applicant KYC.',
      'Rooftop does not have clear shadow-free area or structural integrity.',
      'Commercial or industrial electricity connection (scheme is strictly residential).'
    ],
    tags: ['Solar Rooftop', 'Free Electricity', 'Clean Energy', 'Subsidy', 'Green Energy']
  },
  {
    id: 'pm-fasal-bima',
    name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    hindiName: 'प्रधानमंत्री फसल बीमा योजना',
    shortName: 'PMFBY',
    ministry: 'Ministry of Agriculture and Farmers Welfare',
    level: 'Centrally Sponsored',
    category: 'Agriculture',
    benefitType: 'Insurance & Cover',
    monetaryValueEstimate: 50000,
    monetaryValueDisplay: 'Full Sum Insured Cover at ultra-low 1.5% - 2% Farmer Premium',
    sticker: {
      emoji: '🌦️',
      badge: 'CROP SHIELD',
      title: 'Comprehensive Seasonal Crop Insurance',
      tagline: 'Just 1.5%–2% Premium · Satellite Assessed',
      theme: 'teal',
    },
    description: 'Comprehensive risk insurance covering all non-preventable natural risks (drought, flood, unseasonal rains, pest attacks, post-harvest cyclonic damage) from pre-sowing to post-harvest.',
    keyBenefits: [
      'Minimal uniform premium paid by farmer: 2% for Kharif crops, 1.5% for Rabi crops, 5% for annual commercial/horticulture crops',
      'Remaining high premium (often 80-90%) is fully subsidized by Central & State Governments',
      'Covers prevented sowing, localized calamities (hailstorm, landslide), and post-harvest losses up to 14 days',
      'Satellite, remote-sensing, and drone-based rapid crop-loss assessment for swift claim settlement'
    ],
    targetAudienceText: 'All farmers growing notified crops in notified areas, including sharecroppers and tenant farmers',
    eligibilityCriteria: {
      occupations: ['Farmer'],
      requiresFarmland: true
    },
    documentsRequired: [
      { id: 'land-possession', name: 'Land Record (Khatauni / Khasra / LPC)', purpose: 'Verification of crop sown area', issuer: 'Revenue Dept / Patwari', mandatory: true },
      { id: 'sowing-cert', name: 'Sowing Certificate / Self Declaration of Crop', purpose: 'Proof of notified crop cultivation', issuer: 'Patwari / Village Agriculture Officer', mandatory: true },
      { id: 'aadhaar', name: 'Aadhaar Card', purpose: 'KYC and claim settlement link', issuer: 'UIDAI', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/' },
      { id: 'bank-passbook', name: 'Aadhaar-seeded Bank Passbook', purpose: 'Claim compensation DBT', issuer: 'Bank', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-banking-status' }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://pmfby.gov.in/',
    helplineNumber: '14447 / 1800-180-1551 (PMFBY / Kisan Call Centre)',
    officialLinks: [
          {
                "title": "PMFBY National Crop Insurance Portal",
                "url": "https://pmfby.gov.in/",
                "type": "portal",
                "badge": "Insurance Portal",
                "description": "Direct farmer crop insurance enrollment and seasonal cut-off calendar"
          },
          {
                "title": "Farmer Insurance Premium Calculator",
                "url": "https://pmfby.gov.in/premiumCalculator",
                "type": "guidelines",
                "badge": "Premium Calculator",
                "description": "Calculate 1.5% Rabi / 2% Kharif premium and sum insured per hectare"
          },
          {
                "title": "Report Crop Loss & Track Claim Settlement",
                "url": "https://pmfby.gov.in/",
                "type": "status",
                "badge": "Claim Tracker",
                "description": "Intimate crop damage within 72 hours of unseasonal rain/flood/drought"
          }
    ],
    disbursalTimeline: 'Claims credited directly into bank account via National Crop Insurance Portal DBT within 3 weeks of loss assessment',
    processingFee: '₹0 administrative fee; only statutory 1.5%-2% farmer premium share',
    applicationSteps: [
      'Apply before seasonal cut-off date (usually July 31 for Kharif and Dec 31 for Rabi) on pmfby.gov.in or via CSC/bank.',
      'Enter land parcel details and specify the notified crop sown.',
      'Pay the subsidized farmer premium share via UPI or bank debit.',
      'In case of localized calamity, report loss within 72 hours via Crop Insurance App or toll-free 14447.'
    ],
    commonRejectionReasons: [
      'Application submitted after seasonal cut-off date.',
      'Crop sown does not match the officially notified crop in that taluka/block.',
      'Failure to report localized crop loss within 72 hours of rain/hail event.'
    ],
    tags: ['Farmers', 'Crop Insurance', 'Flood & Drought Protection', 'Agriculture']
  },
  {
    id: 'nrlm-shg-aajeevika',
    name: 'Deendayal Antyodaya Yojana - NRLM (SHG Bank Linkage)',
    hindiName: 'दीनदयाल अंत्योदय योजना - राष्ट्रीय ग्रामीण आजीविका मिशन',
    shortName: 'DAY-NRLM',
    ministry: 'Ministry of Rural Development',
    level: 'Centrally Sponsored',
    category: 'Employment & Skills',
    benefitType: 'Subsidized Credit / Loan',
    monetaryValueEstimate: 200000,
    monetaryValueDisplay: 'Collateral-free SHG Credit up to ₹20 Lakh @ subsidized 7% interest',
    sticker: {
      emoji: '👩‍👧‍👧',
      badge: 'LAKHPATI DIDI',
      title: '₹1 Lakh+ Annual Income SHG Mission',
      tagline: 'Collateral-Free ₹10L Credit · Rural Women Micro-Enterprises',
      theme: 'rose',
    },
    description: 'Mobilizes rural poor women into Self Help Groups (SHGs) and federations, providing revolving funds, community investment support, and low-interest credit for micro-livelihoods.',
    keyBenefits: [
      'Collateral-free institutional credit up to ₹20 Lakh for women Self Help Groups',
      'Interest subvention reducing net effective borrowing interest rate to 7% per annum',
      'Revolving Fund grant of ₹15,000 - ₹30,000 and Community Investment Support Fund (CIF) up to ₹1.5 Lakh per SHG',
      'Lakhpati Didi entrepreneurship training, financial literacy, and market linkages'
    ],
    targetAudienceText: 'Rural women participating in village Self Help Groups (SHGs)',
    eligibilityCriteria: {
      gender: 'Female',
      areaType: ['Rural'],
      requiresShgMember: true,
      minAge: 18
    },
    documentsRequired: [
      { id: 'shg-resolution', name: 'SHG Resolution & Loan Application', purpose: 'Internal group consensus and micro-credit plan', issuer: 'Self Help Group Village Organization', mandatory: true },
      { id: 'shg-passbook', name: 'SHG Group Savings Bank Passbook', purpose: 'Panchasutra grading history', issuer: 'Bank', mandatory: true },
      { id: 'aadhaar-member', name: 'Aadhaar of SHG Member', purpose: 'Individual identity verification', issuer: 'UIDAI', mandatory: true }
    ],
    applicationMode: 'Gram Panchayat',
    applicationUrl: 'https://nrlm.gov.in/',
    helplineNumber: '011-24654714 (DAY-NRLM National Helpdesk)',
    officialLinks: [
          {
                "title": "DAY-NRLM Aajeevika National Portal",
                "url": "https://aajeevika.gov.in/",
                "type": "portal",
                "badge": "National Portal",
                "description": "Self Help Group formation, revolving funds, and Community Investment Funds (CIF)"
          },
          {
                "title": "Lakhpati Didi National Mission Dashboard",
                "url": "https://lakhpatididi.gov.in/",
                "type": "portal",
                "badge": "Lakhpati Didi",
                "description": "Empowering 3 crore rural women to earn sustainable annual income above ₹1 Lakh"
          },
          {
                "title": "Ministry of Rural Development Policy Guidelines",
                "url": "https://rural.nic.in/",
                "type": "guidelines",
                "badge": "MoRD Guidelines",
                "description": "Collateral-free credit up to ₹10-20 Lakh for women SHGs"
          }
    ],
    disbursalTimeline: 'Direct bank release following grading by Block Mission Management Unit (BMMU)',
    processingFee: '₹0 (No processing fee for SHG loans)',
    applicationSteps: [
      'Join or form a 10-15 member women Self Help Group in your village through the local Community Resource Person (CRP).',
      'Practice regular weekly meetings, savings, internal lending, timely repayment, and book-keeping (Panchasutra).',
      'After 3-6 months, qualify for Revolving Fund and prepare Micro Credit Plan (MCP).',
      'Submit loan proposal to local bank branch through Village Organization (VO).'
    ],
    commonRejectionReasons: [
      'SHG does not adhere to regular Panchasutra savings or default on internal group loans.',
      'Applicant is male or lives outside designated rural operational area.'
    ],
    tags: ['Women SHG', 'Lakhpati Didi', 'Micro Enterprise', 'Rural Credit']
  },
  {
    id: 'pm-internship-scheme',
    name: 'Prime Minister\'s Internship Scheme in Top Companies (PMIS)',
    hindiName: 'प्रधानमंत्री इंटर्नशिप योजना (पीएमआईएस)',
    shortName: 'PM Internship Scheme',
    ministry: 'Ministry of Corporate Affairs (MCA)',
    level: 'Central',
    category: 'Employment & Skills',
    benefitType: 'Internship & Stipend',
    monetaryValueEstimate: 66000,
    monetaryValueDisplay: '₹66,000 / year (₹5,000/month stipend + ₹6,000 one-time grant)',
    sticker: {
      emoji: '🏢',
      badge: 'TOP 500 CORPORATE',
      title: '₹66,000 / yr PM Corporate Internship',
      tagline: '₹5,000/mo DBT + ₹6k Relocation Grant',
      theme: 'indigo',
    },
    description: 'Flagship national youth empowerment initiative offering 12-month paid internships in India’s top 500 companies (Tata, Reliance, Mahindra, L&T, HDFC, ITC, Maruti, etc.) with hands-on corporate mentorship and insurance coverage.',
    keyBenefits: [
      '₹5,000 monthly financial stipend (₹4,500 DBT by Government of India + ₹500 from corporate CSR)',
      '₹6,000 one-time grant directly disbursed upon joining for incidental, travel, and relocation expenses',
      '12 months of high-value industry exposure and formal corporate certificate of internship',
      'Accidental insurance coverage under PM Jeevan Jyoti Bima Yojana and PM Suraksha Bima Yojana fully sponsored by Govt',
      'Direct placement pathway and corporate networking opportunities for fresh graduates'
    ],
    targetAudienceText: 'Youth aged 21-24 years with Class 10/12, ITI, Polytechnic Diploma, or Higher Education Degree (BA, BSc, BCom, BCA, BBA, BPharma) seeking first formal job experience',
    eligibilityCriteria: {
      minAge: 21,
      maxAge: 24,
      occupations: ['Student', 'Unemployed'],
      requiresNonTaxpayer: true,
      maxAnnualIncome: 800000
    },
    documentsRequired: [
      { id: 'aadhaar', name: 'Aadhaar Card', purpose: 'Biometric identity & e-KYC verification', issuer: 'UIDAI', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/' },
      { id: 'edu-cert', name: 'Educational Marksheets / Diploma / Degree Certificate', purpose: 'Proof of Class 10/12/ITI/Diploma/Graduation completion', issuer: 'Recognized Board / University / Technical Board', mandatory: true, downloadUrl: 'https://www.digilocker.gov.in/' },
      { id: 'bank-passbook', name: 'Aadhaar-Seeded Bank Passbook', purpose: 'Direct Benefit Transfer (DBT) of monthly ₹5,000 stipend', issuer: 'Any Scheduled Commercial Bank or Post Office', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-banking-status' },
      { id: 'self-declaration', name: 'Self-Declaration Form', purpose: 'Confirmation of non-taxpayer household & non-govt employee status', issuer: 'Online Portal Self-attestation', mandatory: true }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://pminternship.mca.gov.in/',
    helplineNumber: '1800-180-5522 (PM Internship Scheme Helpdesk)',
    officialLinks: [
          {
                "title": "PM Internship Official Portal (Youth Registration)",
                "url": "https://pminternship.mca.gov.in/",
                "type": "apply",
                "badge": "Candidate Portal",
                "description": "Aadhaar e-KYC registration for paid corporate internships in top 500 companies"
          },
          {
                "title": "Search Available Internship Roles & Sectors",
                "url": "https://pminternship.mca.gov.in/",
                "type": "portal",
                "badge": "Job Explorer",
                "description": "Browse openings in Automotive, Banking, IT, Energy, FMCG & Manufacturing"
          },
          {
                "title": "Ministry of Corporate Affairs (MCA) Scheme Guidelines",
                "url": "https://www.mca.gov.in/",
                "type": "guidelines",
                "badge": "Official Rules",
                "description": "Monthly ₹5,000 stipend structure + ₹6,000 joining grant and corporate CSR rules"
          },
          {
                "title": "Candidate Dashboard & Offer Letter Acceptance",
                "url": "https://pminternship.mca.gov.in/",
                "type": "status",
                "badge": "Track Selection",
                "description": "View shortlist status, company interviews, and confirm internship joinings"
          }
    ],
    disbursalTimeline: 'Monthly DBT stipend credit directly into bank account via PFMS by 7th of every month',
    processingFee: '₹0 (100% Free Government Portal)',
    applicationSteps: [
      'Visit the official portal at pminternship.mca.gov.in and click on "Youth Registration".',
      'Complete Aadhaar e-KYC via OTP authentication to auto-fetch demographic details.',
      'Upload academic qualifications (10th, 12th, ITI, Diploma, or Degree marks and passing year).',
      'Select your preferred corporate sectors, job roles, and locations across India.',
      'Submit application and track company shortlist interviews and joining letters directly on the portal.'
    ],
    commonRejectionReasons: [
      'Candidate age is below 21 years or exceeds 24 years on the application cutoff date.',
      'Any immediate family member (self, parents, spouse) is an income taxpayer or regular government employee.',
      'Enrolled in full-time formal academic education program during the internship tenure.',
      'Graduates from IITs, IIMs, IISER, National Law Universities, or possessing CA/CMA/MBBS degrees are excluded to prioritize general youth.'
    ],
    tags: ['Internship', 'Youth', 'Skill India', 'Monthly Stipend', 'Top 500 Companies', 'Corporate Experience', 'Paid Training']
  },
  {
    id: 'skill-india-digital-certification',
    name: 'Skill India Digital Hub - Free NSQF Certification & National Apprenticeship',
    hindiName: 'स्किल इंडिया डिजिटल - निःशुल्क प्रमाणन एवं अप्रेंटिसशिप',
    shortName: 'Skill India Certification',
    ministry: 'Ministry of Skill Development and Entrepreneurship (MSDE)',
    level: 'Central',
    category: 'Employment & Skills',
    benefitType: 'Skill Certification',
    monetaryValueEstimate: 25000,
    monetaryValueDisplay: '100% Free Govt Certificate + Up to ₹9,000/month Apprenticeship Stipend',
    sticker: {
      emoji: '⚡',
      badge: 'FREE NSQF BADGE',
      title: 'Govt Certificate + Up to ₹9,000/mo Apprenticeship',
      tagline: 'DigiLocker QR Verifiable · 1,000+ Online Courses',
      theme: 'emerald',
    },
    description: 'Unified digital skilling ecosystem providing 1,000+ government-certified vocational courses, verifiable NSQF digital skill badges, and National Apprenticeship Promotion Scheme (NAPS) with government stipend support.',
    keyBenefits: [
      '100% free access to industry-recognized courses in AI, Cloud, Cybersecurity, Solar, EV, Drone tech, Logistics & Healthcare',
      'Verifiable QR-coded NSQF Digital Skill Certificate issued directly to applicant\'s DigiLocker',
      'Direct enrollment in National Apprenticeship Promotion Scheme (NAPS) with up to ₹1,500/month government-funded stipend co-contribution',
      'Direct interview calls from certified industry partners through integrated Rozgar Melas',
      'Course content available in 12 Indian regional languages with mobile self-paced learning'
    ],
    targetAudienceText: 'Students, job-seekers, ITI trainees, school dropouts, and youth looking to acquire market-relevant vocational skills',
    eligibilityCriteria: {
      minAge: 14,
      maxAge: 45,
      occupations: ['Student', 'Unemployed', 'Daily Wage / Construction', 'Artisan / Craftsman', 'Small Business / MSME']
    },
    documentsRequired: [
      { id: 'aadhaar', name: 'Aadhaar Card', purpose: 'Digital identity and Skill India Passbook creation', issuer: 'UIDAI', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/' },
      { id: 'mobile', name: 'Mobile Number', purpose: 'OTP login & course completion progress alerts', issuer: 'Telecom Provider', mandatory: true },
      { id: 'bank-passbook', name: 'Bank Account Passbook (For Apprenticeship)', purpose: 'Receipt of NAPS stipend direct benefit transfer', issuer: 'Any Scheduled Bank', mandatory: false, downloadUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-banking-status' }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://www.skillindiadigital.gov.in/',
    helplineNumber: '08800055555 / 1800-123-9626 (Skill India Hub)',
    officialLinks: [
          {
                "title": "Skill India Digital Hub - Explore Free Courses",
                "url": "https://www.skillindiadigital.gov.in/courses",
                "type": "apply",
                "badge": "Free Courses",
                "description": "1,000+ certified courses in AI, Cloud, Cybersecurity, Solar, EV & Healthcare"
          },
          {
                "title": "National Apprenticeship Promotion Scheme (NAPS) Portal",
                "url": "https://www.apprenticeshipindia.gov.in/",
                "type": "apply",
                "badge": "Apprenticeship",
                "description": "Apply for paid industrial apprenticeships with government stipend contribution"
          },
          {
                "title": "DigiLocker Verifiable Skill Badges & Certificates",
                "url": "https://www.digilocker.gov.in/",
                "type": "docs",
                "badge": "DigiLocker",
                "description": "Download tamper-proof QR-coded NSQF credentials to your national digital locker"
          },
          {
                "title": "Ministry of Skill Development & Entrepreneurship (MSDE)",
                "url": "https://www.msde.gov.in/",
                "type": "portal",
                "badge": "Ministry Portal",
                "description": "National policy on skill development, Rozgar Melas & international placement"
          }
    ],
    disbursalTimeline: 'Instant digital certificate upon passing online assessment; monthly stipend for apprentices',
    processingFee: '₹0 (Free government service)',
    applicationSteps: [
      'Register for free on skillindiadigital.gov.in using Aadhaar e-KYC or mobile OTP.',
      'Explore available skill courses by category (Digital, Technical, Green Jobs, Construction, Healthcare).',
      'Complete interactive video lessons and practical module quizzes on your smartphone or PC.',
      'Appear for the online assessment exam and receive your NSQF-certified credential on DigiLocker.',
      'Apply with 1-click for ongoing apprenticeship openings across private and public enterprises.'
    ],
    commonRejectionReasons: [
      'Failure to score the minimum passing threshold (typically 50-60%) in the module final assessment.',
      'Aadhaar name and date of birth mismatch prevents issuance of verifiable certificate.',
      'Age below 14 years.'
    ],
    tags: ['Skill India', 'Free Certificate', 'Apprenticeship', 'NSQF', 'Vocational Training', 'DigiLocker', 'AI Skills']
  },
  {
    id: 'pm-usp-college-scholarship',
    name: 'PM-USP: Central Sector Scheme of Scholarship for College and University Students',
    hindiName: 'पीएम-यूएसपी कॉलेज एवं विश्वविद्यालय छात्रवृत्ति योजना',
    shortName: 'College Merit Scholarship',
    ministry: 'Department of Higher Education, Ministry of Education',
    level: 'Central',
    category: 'Education',
    benefitType: 'Scholarship',
    monetaryValueEstimate: 36000,
    monetaryValueDisplay: '₹12,000 / year (UG Graduation) & ₹20,000 / year (PG Studies)',
    sticker: {
      emoji: '🎓',
      badge: '80TH PERCENTILE MERIT',
      title: '₹12,000 to ₹20,000 College Scholarship',
      tagline: 'Undergraduate & PG Direct PFMS Credit',
      theme: 'purple',
    },
    description: 'Central sector merit-cum-means scholarship supporting meritorious students scoring above the 80th percentile in Class 12 board examinations to pursue regular graduation, professional, and post-graduation degrees.',
    keyBenefits: [
      '₹12,000 annually for the first 3 years of undergraduate general/professional college studies',
      '₹20,000 annually for post-graduate degree studies (or 4th and 5th year of integrated/professional degrees)',
      '100% Direct Benefit Transfer (DBT) directly credited to student’s personal savings account via PFMS',
      '82,000 fresh scholarships distributed annually (41,000 boys and 41,000 girls) ensuring gender equity',
      'Continuous renewal every year upon securing minimum 50% marks and 75% attendance'
    ],
    targetAudienceText: 'Meritorious students pursuing regular college/university degree with >80th percentile in 12th board & annual family income under ₹4.5 Lakh',
    eligibilityCriteria: {
      occupations: ['Student'],
      minAge: 17,
      maxAge: 25,
      maxAnnualIncome: 450000,
      requiresNonTaxpayer: true
    },
    documentsRequired: [
      { id: '12th-marksheet', name: 'Class 12 Board Exam Marksheet & Roll Number', purpose: 'Verification of 80th percentile merit cutoff', issuer: 'CBSE / ICSE / State Secondary Board', mandatory: true, downloadUrl: 'https://www.digilocker.gov.in/' },
      { id: 'income-cert', name: 'Family Income Certificate (< ₹4.5 Lakh)', purpose: 'Income eligibility verification', issuer: 'Tehsildar / Competent Revenue Authority', mandatory: true, downloadUrl: 'https://services.india.gov.in/' },
      { id: 'college-bonafide', name: 'College Admission Bonafide & Fee Receipt', purpose: 'Proof of regular enrollment in recognized college/university', issuer: 'College Principal / Registrar', mandatory: true },
      { id: 'aadhaar-seeded-bank', name: 'Aadhaar Seeded Student Bank Account Passbook', purpose: 'Mandatory for scholarship DBT transfer via PFMS', issuer: 'Any Scheduled Commercial Bank', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-banking-status' }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://scholarships.gov.in/',
    helplineNumber: '0120-6619540 (NSP Helpdesk)',
    officialLinks: [
          {
                "title": "Apply on National Scholarship Portal (scholarships.gov.in)",
                "url": "https://scholarships.gov.in/",
                "type": "apply",
                "badge": "NSP Apply",
                "description": "Submit application under Department of Higher Education -> Central Sector Scheme"
          },
          {
                "title": "Higher Education Department Scholarship Guidelines",
                "url": "https://www.education.gov.in/scholarships-education-loan-0",
                "type": "guidelines",
                "badge": "Guidelines",
                "description": "Eligibility criteria, 80th percentile cutoff norms & renewal guidelines"
          },
          {
                "title": "Track Scholarship DBT via PFMS Portal",
                "url": "https://pfms.nic.in/static/NewLayout_KnowYourPayments.aspx",
                "type": "status",
                "badge": "Payment Tracker",
                "description": "Check bank transfer status for ₹12,000 (UG) and ₹20,000 (PG) payments"
          },
          {
                "title": "NSP Institute & College Nodal Officer Portal",
                "url": "https://scholarships.gov.in/",
                "type": "portal",
                "badge": "Institute Login",
                "description": "Colleges verify bonafide status and forward student applications"
          }
    ],
    disbursalTimeline: 'Direct bank release through National Scholarship Portal within 2-3 months of institute verification',
    processingFee: '₹0 (Free government scholarship application)',
    applicationSteps: [
      'Navigate to scholarships.gov.in (National Scholarship Portal) and register as a new student.',
      'Complete Aadhaar e-KYC and fill academic details including 12th board roll number and year.',
      'Select "Department of Higher Education -> Central Sector Scheme of Scholarship".',
      'Upload College Bonafide Certificate and Parental Income Certificate.',
      'Submit the form; your college nodal officer verifies the application online before state approval.'
    ],
    commonRejectionReasons: [
      'Class 12 board marks below the designated 80th percentile state board cutoff.',
      'Student is pursuing course through distance learning or correspondence (regular full-time course required).',
      'Family income exceeds ₹4.5 Lakh per annum.',
      'Availing any other government central or state scholarship scheme simultaneously.'
    ],
    tags: ['Education', 'Scholarship', 'College', 'Graduation', 'Post Graduation', 'Merit Scholarship', 'NSP']
  },
  {
    id: 'nmmss-school-scholarship',
    name: 'National Means-cum-Merit Scholarship Scheme (NMMSS)',
    hindiName: 'राष्ट्रीय साधन-सह-योग्यता छात्रवृत्ति योजना',
    shortName: 'NMMSS School Scholarship',
    ministry: 'Department of School Education and Literacy, Ministry of Education',
    level: 'Centrally Sponsored',
    category: 'Education',
    benefitType: 'Scholarship',
    monetaryValueEstimate: 48000,
    monetaryValueDisplay: '₹12,000 / year (₹1,000 / month from Class 9 to Class 12)',
    sticker: {
      emoji: '🎒',
      badge: 'DROPOUT SHIELD',
      title: '₹12,000 / Year Secondary School Grant',
      tagline: 'Class 9 to 12 · ₹1,000/mo Direct Bank Support',
      theme: 'blue',
    },
    description: 'Financial support awarded to meritorious students from economically weaker sections to prevent dropout at Class 8 and encourage them to complete secondary and senior secondary school education up to Class 12.',
    keyBenefits: [
      '₹12,000 per annum (₹1,000 per month) directly transferred into student\'s bank account',
      'Continuous 4-year support across Class 9, Class 10, Class 11, and Class 12',
      'Helps families cover school tuition fees, books, notebooks, stationery, and uniforms',
      '1,00,000 fresh meritorious students awarded nationwide every academic year'
    ],
    targetAudienceText: 'Meritorious students studying in State Government, Government-aided, and local body schools with parental income <= ₹3.5 Lakh',
    eligibilityCriteria: {
      occupations: ['Student'],
      minAge: 12,
      maxAge: 19,
      maxAnnualIncome: 350000
    },
    documentsRequired: [
      { id: 'class8-marksheet', name: 'Class 8 Report Card / Marksheet (≥ 55% marks)', purpose: 'Academic eligibility verification (50% for SC/ST)', issuer: 'School Headmaster / Principal', mandatory: true, downloadUrl: 'https://www.digilocker.gov.in/' },
      { id: 'income-cert', name: 'Parental Income Certificate (≤ ₹3.5 Lakh)', purpose: 'Means eligibility verification', issuer: 'Revenue Officer / Tehsildar', mandatory: true, downloadUrl: 'https://services.india.gov.in/' },
      { id: 'caste-cert', name: 'Caste Certificate (For SC / ST / OBC / EWS)', purpose: 'Category quota verification if applicable', issuer: 'Competent Authority', mandatory: false, downloadUrl: 'https://services.india.gov.in/' },
      { id: 'student-bank', name: 'Student Bank Account (Joint with Parent or Individual)', purpose: 'DBT scholarship crediting', issuer: 'Bank / Post Office', mandatory: true, downloadUrl: 'https://pfms.nic.in/static/NewLayout_KnowYourPayments.aspx' }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://scholarships.gov.in/',
    helplineNumber: '0120-6619540 (National Scholarship Portal)',
    officialLinks: [
          {
                "title": "Apply / Register on National Scholarship Portal",
                "url": "https://scholarships.gov.in/",
                "type": "apply",
                "badge": "NSP Portal",
                "description": "Class 9 to 12 students qualifying State MAT/SAT exams register for ₹12,000/yr aid"
          },
          {
                "title": "Department of School Education NMMSS Guidelines",
                "url": "https://www.education.gov.in/en/national-means-cum-merit-scholarship-scheme",
                "type": "guidelines",
                "badge": "Official PDF",
                "description": "Scheme norms, quota per State/UT, and quota rules for economically weaker sections"
          },
          {
                "title": "PFMS Public Financial Management DBT Status",
                "url": "https://pfms.nic.in/",
                "type": "status",
                "badge": "DBT Credit",
                "description": "Verify quarterly/annual scholarship credit in student or joint savings bank account"
          }
    ],
    disbursalTimeline: 'Quarterly or annual DBT installment transferred directly to the student\'s account',
    processingFee: '₹0 (Free government application)',
    applicationSteps: [
      'Appear for the State-level NMMSS Mental Ability Test (MAT) and Scholastic Aptitude Test (SAT) in Class 8.',
      'Upon qualifying in the merit list, register on the National Scholarship Portal (scholarships.gov.in).',
      'Submit student bank account and Aadhaar details for DBT verification.',
      'School headmaster verifies and forwards the application to District Education Officer (DEO).',
      'Scholarship amount is credited directly via Public Financial Management System (PFMS).'
    ],
    commonRejectionReasons: [
      'Students studying in Kendriya Vidyalayas, Navodaya Vidyalayas, or residential schools run by Govt where boarding/lodging is free.',
      'Students studying in private un-aided schools.',
      'Parental annual income exceeding ₹3,50,000.'
    ],
    tags: ['Education', 'School Scholarship', 'Class 9 to 12', 'Secondary School', 'DBT', 'Financial Aid']
  },
  {
    id: 'aicte-pragati-scholarship',
    name: 'AICTE Pragati Scholarship for Girl Students (Technical Degree & Diploma)',
    hindiName: 'एआईसीटीई प्रगति छात्रा छात्रवृत्ति योजना',
    shortName: 'Pragati Girl Scholarship',
    ministry: 'All India Council for Technical Education (AICTE), Ministry of Education',
    level: 'Central',
    category: 'Education',
    benefitType: 'Scholarship',
    monetaryValueEstimate: 50000,
    monetaryValueDisplay: '₹50,000 / year (up to 4 years for Degree / 3 years for Diploma)',
    sticker: {
      emoji: '👩‍💻',
      badge: 'WOMEN IN TECH',
      title: '₹50,000 / Year Technical Degree Fellowship',
      tagline: 'Laptops, Tuition & Books for Engineering Girls',
      theme: 'rose',
    },
    description: 'Empowerment scholarship providing substantial financial aid to meritorious young women admitted to first-year or lateral entry technical degree and diploma courses in AICTE-approved colleges.',
    keyBenefits: [
      '₹50,000 per annum paid as a lump sum towards college fees, laptop/PC purchase, books, software, and study equipment',
      'Awarded for the full course duration (4 years for B.Tech/BE degrees, 3 years for Diploma courses)',
      '10,000 fresh girl students awarded every academic year (5,000 for Degree, 5,000 for Diploma)',
      'All eligible girl candidates from 13 North-Eastern and Union Territory states/regions receive guaranteed award',
      'Direct Benefit Transfer (DBT) into the girl student\'s personal bank account'
    ],
    targetAudienceText: 'Girl students admitted to AICTE approved technical degree or diploma colleges with family income under ₹8 Lakh (up to 2 girls per family)',
    eligibilityCriteria: {
      gender: 'Female',
      occupations: ['Student'],
      minAge: 16,
      maxAge: 26,
      maxAnnualIncome: 800000
    },
    documentsRequired: [
      { id: '10th-12th-marksheet', name: '10th & 12th / ITI Marksheet', purpose: 'Qualifying exam score verification', issuer: 'Recognized Board', mandatory: true, downloadUrl: 'https://www.digilocker.gov.in/' },
      { id: 'allotment-letter', name: 'Centralized Admission Allotment Letter', purpose: 'Proof of merit admission in AICTE-approved college', issuer: 'State CET / JoSAA / DTE Admission Cell', mandatory: true },
      { id: 'income-cert', name: 'Parental Annual Income Certificate (< ₹8 Lakh)', purpose: 'Income eligibility verification', issuer: 'Tehsildar / Sub-Divisional Magistrate', mandatory: true, downloadUrl: 'https://services.india.gov.in/' },
      { id: 'bonafide-cert', name: 'Bonafide Certificate & Tuition Fee Receipt', purpose: 'Ongoing enrollment verification', issuer: 'College Principal', mandatory: true }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://scholarships.gov.in/',
    helplineNumber: '011-29581000 / 0120-6619540',
    officialLinks: [
          {
                "title": "Apply Online on National Scholarship Portal",
                "url": "https://scholarships.gov.in/",
                "type": "apply",
                "badge": "NSP Pragati",
                "description": "Apply under AICTE Schemes -> Pragati Scholarship for Girl Students"
          },
          {
                "title": "AICTE Pragati Official Scheme Guidelines",
                "url": "https://www.aicte-india.org/schemes/students-development-schemes/Pragati",
                "type": "guidelines",
                "badge": "AICTE Guidelines",
                "description": "₹50,000 annual lump-sum aid guidelines for technical degree and diploma girls"
          },
          {
                "title": "Check AICTE Approved Technical Colleges List",
                "url": "https://facilities.aicte-india.org/dashboard/pages/angulardashboard.org.in/index.php",
                "type": "portal",
                "badge": "Approved Colleges",
                "description": "Verify if your engineering/polytechnic college is recognized by AICTE"
          },
          {
                "title": "AICTE Student Development Schemes Portal",
                "url": "https://www.aicte-india.org/schemes/students-development-schemes",
                "type": "portal",
                "badge": "AICTE Portal",
                "description": "Student support schemes, internships, and research grants"
          }
    ],
    disbursalTimeline: 'Annual single-tranche DBT transfer directly into the girl student\'s bank account',
    processingFee: '₹0 (Free government application)',
    applicationSteps: [
      'Take admission in an AICTE-approved institution for a technical degree or diploma course.',
      'Register on the National Scholarship Portal (scholarships.gov.in) under AICTE Schemes -> Pragati Scholarship.',
      'Upload centralized admission letter, tuition fee receipt, and family income certificate.',
      'The institute verification officer verifies credentials online on the NSP portal.',
      'AICTE reviews merit list and disburses ₹50,000 directly to the student\'s account.'
    ],
    commonRejectionReasons: [
      'Family annual income exceeds ₹8 Lakh.',
      'Admission taken through management quota instead of centralized merit counseling.',
      'College or course is not approved by AICTE.',
      'More than two girl children applying from the same family.'
    ],
    tags: ['Education', 'Girls', 'Engineering', 'Diploma', 'Technical Education', 'AICTE', 'Scholarship']
  },
  {
    id: 'pm-yasasvi-scholarship',
    name: 'PM Young Achievers Scholarship Scheme for Vibrant India (PM YASASVI)',
    hindiName: 'पीएम यशस्वी छात्रवृत्ति योजना',
    shortName: 'PM YASASVI Scholarship',
    ministry: 'Ministry of Social Justice and Empowerment',
    level: 'Central',
    category: 'Education',
    benefitType: 'Scholarship',
    monetaryValueEstimate: 125000,
    monetaryValueDisplay: 'Up to ₹1,25,000 / year for School & Full Tuition Fee Waiver in Top Colleges',
    sticker: {
      emoji: '🏆',
      badge: 'TOP CLASS SCHOLARS',
      title: 'Up to ₹1,25,000/yr & Full College Fee Waiver',
      tagline: 'OBC, EBC & DNT Meritorious Students in Premier Institutes',
      theme: 'amber',
    },
    description: 'Comprehensive scholarship program empowering meritorious students belonging to Other Backward Classes (OBC), Economically Backward Classes (EBC), and De-notified Nomadic Tribes (DNT) in top schools and premier universities.',
    keyBenefits: [
      'School Scheme: ₹75,000 per year for Class 9 & 10; ₹1,25,000 per year for Class 11 & 12 in top-rated schools',
      'Top Class College Education: 100% full tuition fee reimbursement (up to ₹2 Lakh/year) in IITs, NITs, IIMs, AIIMS & NLUs',
      'Living expenses allowance of ₹3,000 per month for hosteller college scholars',
      'One-time grant of ₹45,000 for purchasing a latest laptop/computer and ₹5,000 annual book allowance',
      'Transparent online selection administered via National Testing Agency (NTA) and NSP'
    ],
    targetAudienceText: 'OBC, EBC, and DNT students studying in secondary school or higher education with parental income under ₹2.5 Lakh',
    eligibilityCriteria: {
      occupations: ['Student'],
      socialCategories: ['OBC', 'EWS'],
      minAge: 13,
      maxAge: 28,
      maxAnnualIncome: 250000
    },
    documentsRequired: [
      { id: 'caste-cert', name: 'OBC / EBC / DNT Category Certificate', purpose: 'Community reservation verification', issuer: 'Competent District Magistrate / Tehsildar', mandatory: true, downloadUrl: 'https://services.india.gov.in/' },
      { id: 'income-cert', name: 'Annual Income Certificate (≤ ₹2.5 Lakh)', purpose: 'Income ceiling proof', issuer: 'Revenue Authority', mandatory: true, downloadUrl: 'https://services.india.gov.in/' },
      { id: 'academic-marksheet', name: 'Previous Class Passing Marksheet (≥ 60% marks)', purpose: 'Academic merit verification', issuer: 'School / University', mandatory: true },
      { id: 'bank-passbook', name: 'Aadhaar-linked Bank Account Passbook', purpose: 'Direct Benefit Transfer (DBT)', issuer: 'Scheduled Bank', mandatory: true, downloadUrl: 'https://myaadhaar.uidai.gov.in/check-aadhaar-banking-status' }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://yet.nta.ac.in/',
    helplineNumber: '011-40759000 / 011-69227700 (National Testing Agency)',
    officialLinks: [
          {
                "title": "NTA YET Official Portal (PM YASASVI)",
                "url": "https://yet.nta.ac.in/",
                "type": "apply",
                "badge": "NTA Portal",
                "description": "Candidate registration, examination schedule, admit cards, and merit lists"
          },
          {
                "title": "National Scholarship Portal PM-YASASVI Section",
                "url": "https://scholarships.gov.in/",
                "type": "apply",
                "badge": "NSP Section",
                "description": "Direct scholarship claim submission for shortlisted OBC, EBC & DNT students"
          },
          {
                "title": "Ministry of Social Justice & Empowerment Portal",
                "url": "https://socialjustice.gov.in/",
                "type": "portal",
                "badge": "Ministry Portal",
                "description": "Top-class education institutions list and full tuition reimbursement guidelines"
          },
          {
                "title": "PM-YASASVI Information Bulletin & Empaneled Schools",
                "url": "https://yet.nta.ac.in/",
                "type": "guidelines",
                "badge": "Brochure PDF",
                "description": "List of premier residential schools and universities covered under PM YASASVI"
          }
    ],
    disbursalTimeline: 'Disbursed directly into student account via PFMS in 2 tranches per academic year',
    processingFee: '₹0 (Free government application)',
    applicationSteps: [
      'Visit yet.nta.ac.in or scholarships.gov.in and register under the PM YASASVI Scheme.',
      'Enter Aadhaar number and verify student identity via OTP.',
      'Upload caste/community certificate, parental income proof, and previous academic scorecards.',
      'Select your enrolled school or top-class college from the empanelled institutional roster.',
      'Submit application for online verification by institute and state welfare department.'
    ],
    commonRejectionReasons: [
      'Parental annual income from all sources exceeds ₹2.5 Lakh.',
      'Applicant belongs to General category without qualifying as EBC or DNT.',
      'Enrolled institution is not included in the officially recognized Top Class Institution list.'
    ],
    tags: ['Education', 'Scholarship', 'OBC', 'EBC', 'Top Class Education', 'PM YASASVI', 'NTA']
  },
  {
    id: 'pm-vidyalaxmi-loan-subsidy',
    name: 'PM-Vidyalaxmi & Central Sector Interest Subsidy (CSIS) on Education Loans',
    hindiName: 'पीएम-विद्यालक्ष्मी एवं केंद्रीय ब्याज सब्सिडी योजना',
    shortName: 'PM-Vidyalaxmi Subsidy',
    ministry: 'Department of Higher Education, Ministry of Education',
    level: 'Central',
    category: 'Education',
    benefitType: 'Subsidized Credit / Loan',
    monetaryValueEstimate: 150000,
    monetaryValueDisplay: '100% Full Interest Waiver on Education Loans up to ₹10 Lakh',
    sticker: {
      emoji: '📜',
      badge: '100% INTEREST WAIVER',
      title: 'Full Interest Subsidy on Loans up to ₹10 Lakh',
      tagline: 'Zero Interest During Entire Degree + 1 Year Grace',
      theme: 'cyan',
    },
    description: 'Central sector interest waiver providing 100% full interest subsidy during the moratorium period (entire course duration plus 1 year) on educational loans for technical and professional higher education in India.',
    keyBenefits: [
      'Government of India pays 100% of accumulated loan interest while the student is studying + 1 year grace period',
      'Covers professional and technical higher education degrees (Engineering, Medical, Law, Management, Architecture, Pharmacy)',
      'Applicable on educational loans up to ₹10 Lakh without requiring third-party guarantee or collateral security',
      'Unified single-window digital portal connected to 40+ scheduled commercial banks and regional rural banks',
      'Saves student families between ₹1,00,000 to ₹2,50,000 in loan interest charges before repayment begins'
    ],
    targetAudienceText: 'Students pursuing approved professional/technical higher education in India with annual family income up to ₹4.5 Lakh',
    eligibilityCriteria: {
      occupations: ['Student'],
      minAge: 17,
      maxAge: 32,
      maxAnnualIncome: 450000,
      requiresNonTaxpayer: true
    },
    documentsRequired: [
      { id: 'admission-proof', name: 'College Admission Letter & Course Fee Structure', purpose: 'Verification of professional degree course', issuer: 'Recognized College / University', mandatory: true },
      { id: 'income-cert', name: 'Income Certificate from Authorized State Authority', purpose: 'Income ceiling (≤ ₹4.5 Lakh) verification for interest waiver', issuer: 'Tehsildar / SDO', mandatory: true, downloadUrl: 'https://services.india.gov.in/' },
      { id: 'loan-sanction', name: 'Bank Education Loan Sanction Letter', purpose: 'Proof of IBA model education loan', issuer: 'Any Scheduled Bank', mandatory: true },
      { id: 'aadhaar-pan', name: 'Aadhaar & PAN Card of Student & Co-borrower', purpose: 'KYC and credit check', issuer: 'UIDAI & Income Tax Dept', mandatory: true }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://www.vidyalakshmi.co.in/',
    helplineNumber: '022-24994200 / support@vidyalakshmi.co.in',
    officialLinks: [
          {
                "title": "PM-Vidyalaxmi Education Loan Portal",
                "url": "https://www.vidyalakshmi.co.in/",
                "type": "apply",
                "badge": "Loan Portal",
                "description": "Single-window electronic platform for education loans across 40+ scheduled banks"
          },
          {
                "title": "Common Educational Loan Application Form (CELAF)",
                "url": "https://www.vidyalakshmi.co.in/Students/",
                "type": "apply",
                "badge": "Common Form",
                "description": "Fill 1 application to apply to multiple banks with Central Sector Interest Subsidy (CSIS)"
          },
          {
                "title": "Search Registered Bank Schemes & Interest Rates",
                "url": "https://www.vidyalakshmi.co.in/Students/scheme-search",
                "type": "portal",
                "badge": "Bank Comparison",
                "description": "Compare interest rates, loan limits, and collateral requirements"
          },
          {
                "title": "Canara Bank CSIS Nodal Agency Portal",
                "url": "https://canarabank.com/",
                "type": "guidelines",
                "badge": "Nodal Bank",
                "description": "Interest subsidy reimbursement guidelines for professional & technical degrees"
          }
    ],
    disbursalTimeline: 'Interest subsidy credited directly to student loan account by Canara Bank (Nodal Agency)',
    processingFee: '₹0 (Free portal registration)',
    applicationSteps: [
      'Register on the official PM-Vidyalaxmi portal (vidyalakshmi.co.in) with basic student details.',
      'Fill Common Educational Loan Application Form (CELAF) with course, college, and loan amount details.',
      'Search and apply to multiple participating banks offering educational loans with CSIS interest subsidy.',
      'Upload authorized income certificate establishing family income is within ₹4.5 Lakh limit.',
      'Once loan is sanctioned, the bank flags the account on the Canara Bank subsidy portal for automatic interest reimbursement.'
    ],
    commonRejectionReasons: [
      'Family income exceeds the statutory ceiling of ₹4.5 Lakh per annum at the time of loan sanction.',
      'Course pursued is non-technical/general arts without AICTE/UGC/MCI professional accreditation.',
      'Studies conducted abroad (CSIS interest subsidy is applicable solely for studies within India).'
    ],
    tags: ['Education Loan', 'Interest Subsidy', 'College', 'Engineering & Medical', 'Higher Studies', 'Vidyalaxmi']
  },
  {
    id: 'aicte-saksham-scholarship',
    name: 'AICTE Saksham Scholarship for Specially-Abled Students (PwD)',
    hindiName: 'एआईसीटीई सक्षम दिव्यांग छात्रवृत्ति योजना',
    shortName: 'Saksham PwD Scholarship',
    ministry: 'All India Council for Technical Education (AICTE), Ministry of Education',
    level: 'Central',
    category: 'Education',
    benefitType: 'Scholarship',
    monetaryValueEstimate: 50000,
    monetaryValueDisplay: '₹50,000 / year throughout Degree/Diploma Duration',
    sticker: {
      emoji: '✨',
      badge: 'BENCHMARK PWD AID',
      title: '₹50,000 / Year Specially-Abled Tech Award',
      tagline: 'Full Degree Tenure Support · UDID Certified',
      theme: 'indigo',
    },
    description: 'Dedicated national technical scholarship providing financial encouragement to students with benchmark disabilities (≥ 40%) admitted to AICTE-approved degree or diploma courses across India.',
    keyBenefits: [
      '₹50,000 per annum paid towards tuition fees, assistive technologies, accessible devices, books, and conveyance',
      'Supported for the entire study duration (4 years for technical degree, 3 years for diploma programs)',
      'All eligible specially-abled candidates who gain admission receive the scholarship (no state quota caps)',
      'Direct Benefit Transfer (DBT) directly into the student\'s personal savings bank account via PFMS'
    ],
    targetAudienceText: 'Differently-abled students (disability >= 40%) enrolled in AICTE-approved technical degree/diploma programs with family income <= ₹8 Lakh',
    eligibilityCriteria: {
      occupations: ['Student'],
      requiresDisability: true,
      minDisabilityPercentage: 40,
      minAge: 16,
      maxAge: 35,
      maxAnnualIncome: 800000
    },
    documentsRequired: [
      { id: 'disability-cert', name: 'Unique Disability ID (UDID) / Disability Certificate (≥ 40%)', purpose: 'Proof of benchmark disability', issuer: 'District Medical Board / Competent Hospital Authority', mandatory: true, downloadUrl: 'https://www.swavlambancard.gov.in/' },
      { id: 'admission-letter', name: 'Centralized Technical Admission Allotment Letter', purpose: 'Proof of merit admission in AICTE-approved college', issuer: 'State CET / JoSAA / Central Counseling Cell', mandatory: true },
      { id: 'income-cert', name: 'Family Income Certificate (< ₹8 Lakh)', purpose: 'Income ceiling proof', issuer: 'Tehsildar / SDO', mandatory: true, downloadUrl: 'https://services.india.gov.in/' },
      { id: 'college-bonafide', name: 'College Bonafide Certificate & Fee Receipt', purpose: 'Proof of active enrollment', issuer: 'College Principal', mandatory: true }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://scholarships.gov.in/',
    helplineNumber: '011-29581000 / 0120-6619540',
    officialLinks: [
          {
                "title": "Apply on National Scholarship Portal",
                "url": "https://scholarships.gov.in/",
                "type": "apply",
                "badge": "NSP Apply",
                "description": "Apply under AICTE Schemes -> Saksham Scholarship for Specially-Abled Students"
          },
          {
                "title": "AICTE Saksham Official Scheme Guidelines",
                "url": "https://www.aicte-india.org/schemes/students-development-schemes/Saksham",
                "type": "guidelines",
                "badge": "AICTE Guidelines",
                "description": "₹50,000/year grant for assistive aids, fees, and study equipment for PwD students"
          },
          {
                "title": "Swavlamban UDID Portal (Apply for Disability ID)",
                "url": "https://www.swavlambancard.gov.in/",
                "type": "docs",
                "badge": "UDID Card",
                "description": "Apply or download digital Unique Disability Identity Card (UDID)"
          },
          {
                "title": "AICTE Student Development Schemes Helpdesk",
                "url": "https://www.aicte-india.org/",
                "type": "portal",
                "badge": "Helpdesk",
                "description": "Contact nodal officers and track disbursement status"
          }
    ],
    disbursalTimeline: 'Annual lump sum credited directly into the student\'s bank account upon institute online verification',
    processingFee: '₹0 (Free government scholarship)',
    applicationSteps: [
      'Secure admission in an AICTE-approved technical degree or diploma college.',
      'Register on the National Scholarship Portal (scholarships.gov.in).',
      'Select AICTE Schemes -> Saksham Scholarship for Specially-Abled Students.',
      'Upload UDID disability certificate (with >= 40% benchmark disability), income certificate, and admission fee receipt.',
      'The college nodal officer verifies documents online, followed by AICTE sanction and DBT credit.'
    ],
    commonRejectionReasons: [
      'Disability percentage is certified below the 40% benchmark threshold.',
      'Family annual income exceeds ₹8 Lakh per annum.',
      'Course or institution is not approved by AICTE.'
    ],
    tags: ['Education', 'Disability', 'PwD', 'AICTE', 'Technical Degree', 'Scholarship', 'UDID']
  }
];

export const STATES_AND_UT = [
  'All India (Central)',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Delhi (NCT)',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Jammu and Kashmir',
  'Ladakh',
  'Puducherry'
];

export const DEFAULT_CITIZEN_PROFILES: { label: string; description: string; profile: import('../types').CitizenProfile }[] = [
  {
    label: 'Ramesh Kumar (Small Farmer)',
    description: '42 yrs · Marginal Farmer with 1.2 acres · Rural UP · Income ₹95k · Has BPL Card',
    profile: {
      name: 'Ramesh Kumar',
      age: 42,
      gender: 'Male',
      maritalStatus: 'Married',
      socialCategory: 'OBC',
      state: 'Uttar Pradesh',
      areaType: 'Rural',
      occupation: 'Farmer',
      annualIncome: 95000,
      hasBplRationCard: true,
      rationCardType: 'BPL (Priority)',
      isIncomeTaxPayer: false,
      landholdingAcres: 1.2,
      hasGirlChildUnder10: true,
      isPregnantOrLactating: false,
      isPersonWithDisability: false,
      disabilityPercentage: 0,
      hasSeniorCitizenInFamily: true,
      housingType: 'Kutcha / Mud House',
      isShgMember: false
    }
  },
  {
    label: 'Priya Sharma (College Student)',
    description: '20 yrs · B.Tech Student · Urban Maharashtra · OBC · Family Income ₹1.8L',
    profile: {
      name: 'Priya Sharma',
      age: 20,
      gender: 'Female',
      maritalStatus: 'Single',
      socialCategory: 'OBC',
      state: 'Maharashtra',
      areaType: 'Urban',
      occupation: 'Student',
      annualIncome: 180000,
      hasBplRationCard: false,
      rationCardType: 'APL (Non-Priority)',
      isIncomeTaxPayer: false,
      landholdingAcres: 0,
      hasGirlChildUnder10: false,
      isPregnantOrLactating: false,
      isPersonWithDisability: false,
      disabilityPercentage: 0,
      hasSeniorCitizenInFamily: false,
      housingType: 'Rented',
      isShgMember: false
    }
  },
  {
    label: 'Sunita Devi (Rural Artisan & SHG Leader)',
    description: '34 yrs · Female Weaver · SC · Rural Bihar · 1 Daughter (6 yrs) · SHG Member',
    profile: {
      name: 'Sunita Devi',
      age: 34,
      gender: 'Female',
      maritalStatus: 'Married',
      socialCategory: 'SC',
      state: 'Bihar',
      areaType: 'Rural',
      occupation: 'Artisan / Craftsman',
      annualIncome: 75000,
      hasBplRationCard: true,
      rationCardType: 'AAY (Antyodaya)',
      isIncomeTaxPayer: false,
      landholdingAcres: 0,
      hasGirlChildUnder10: true,
      isPregnantOrLactating: false,
      isPersonWithDisability: false,
      disabilityPercentage: 0,
      hasSeniorCitizenInFamily: false,
      housingType: 'Kutcha / Mud House',
      isShgMember: true
    }
  },
  {
    label: 'Mohammed Imran (Street Vendor)',
    description: '29 yrs · Urban Food Hawker · Minority · Delhi · Income ₹1.4L · Pucca Rented',
    profile: {
      name: 'Mohammed Imran',
      age: 29,
      gender: 'Male',
      maritalStatus: 'Married',
      socialCategory: 'Minority',
      state: 'Delhi (NCT)',
      areaType: 'Urban',
      occupation: 'Street Vendor / Hawker',
      annualIncome: 140000,
      hasBplRationCard: true,
      rationCardType: 'BPL (Priority)',
      isIncomeTaxPayer: false,
      landholdingAcres: 0,
      hasGirlChildUnder10: false,
      isPregnantOrLactating: false,
      isPersonWithDisability: false,
      disabilityPercentage: 0,
      hasSeniorCitizenInFamily: false,
      housingType: 'Rented',
      isShgMember: false
    }
  },
  {
    label: 'Kavita Patel (Senior Citizen Widow)',
    description: '64 yrs · Widow · Gujarat · General · Annual Income ₹45k · Living with grandson',
    profile: {
      name: 'Kavita Patel',
      age: 64,
      gender: 'Female',
      maritalStatus: 'Widowed',
      socialCategory: 'General',
      state: 'Gujarat',
      areaType: 'Semi-Urban',
      occupation: 'Senior Citizen / Retired',
      annualIncome: 45000,
      hasBplRationCard: true,
      rationCardType: 'BPL (Priority)',
      isIncomeTaxPayer: false,
      landholdingAcres: 0,
      hasGirlChildUnder10: false,
      isPregnantOrLactating: false,
      isPersonWithDisability: false,
      disabilityPercentage: 0,
      hasSeniorCitizenInFamily: true,
      housingType: 'Semi-Pucca',
      isShgMember: false
    }
  }
];
