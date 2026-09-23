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
      { id: 'aadhaar', name: 'Aadhaar Card', purpose: 'Identity & Biometric verification', issuer: 'UIDAI', mandatory: true },
      { id: 'ration-card', name: 'Ration Card (NFSA / BPL / Antyodaya)', purpose: 'Family roster and deprivation verification', issuer: 'State Food & Civil Supplies Dept', mandatory: true },
      { id: 'mobile', name: 'Active Mobile Number', purpose: 'OTP generation for PMJAY Golden Card', issuer: 'Telecom Operator', mandatory: true }
    ],
    applicationMode: 'CSC / Common Service Center',
    applicationUrl: 'https://beneficiary.nha.gov.in/',
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
      { id: 'aadhaar', name: 'Aadhaar Card', purpose: 'Mandatory for PM-KISAN e-KYC and DBT transfer', issuer: 'UIDAI', mandatory: true },
      { id: 'land-records', name: 'Land Ownership Document (Khatauni / Khasra / RoR)', purpose: 'Proof of cultivable landholding in applicant’s name', issuer: 'State Revenue Department / Bhulekh', mandatory: true },
      { id: 'bank-passbook', name: 'NPCI Seeded Bank Account Passbook', purpose: 'For DBT direct bank deposit', issuer: 'Any Scheduled Bank or Post Office', mandatory: true }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://pmkisan.gov.in/',
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
      { id: 'aadhaar', name: 'Aadhaar of all family members', purpose: 'De-duplication and identity check', issuer: 'UIDAI', mandatory: true },
      { id: 'income-cert', name: 'Income Certificate / Self Declaration', purpose: 'Verifying EWS/LIG income classification', issuer: 'Tehsildar / Sub-Divisional Magistrate', mandatory: true },
      { id: 'land-patta', name: 'Land Patta / Ownership Proof or Municipal allotment', purpose: 'Title of construction plot', issuer: 'Local Revenue Authority / Nagar Nigam', mandatory: true },
      { id: 'bank-passbook', name: 'Bank Account Details', purpose: 'Installment release based on geo-tagged construction stages', issuer: 'Bank', mandatory: true }
    ],
    applicationMode: 'Gram Panchayat',
    applicationUrl: 'https://pmaymis.gov.in/',
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
      { id: 'aadhaar', name: 'Aadhaar / Voter ID / PAN Card', purpose: 'Identity and address KYC', issuer: 'UIDAI / IT Dept', mandatory: true },
      { id: 'business-proof', name: 'Business Registration / Trade License / Udyam Certificate', purpose: 'Proof of micro-enterprise activity', issuer: 'MSME Ministry / Local Body', mandatory: false },
      { id: 'bank-statement', name: 'Bank Account Statement (Past 6 Months)', purpose: 'Credit assessment', issuer: 'Applicant Bank', mandatory: true },
      { id: 'project-report', name: 'Business Project Proposal / Quotation for machinery', purpose: 'Utilization of funds', issuer: 'Applicant / Supplier', mandatory: true }
    ],
    applicationMode: 'Bank Branch',
    applicationUrl: 'https://www.udyamimitra.in/',
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
      { id: 'aadhaar', name: 'Aadhaar Card with linked mobile', purpose: 'Biometric registration & e-KYC', issuer: 'UIDAI', mandatory: true },
      { id: 'bank-passbook', name: 'Bank Account Passbook', purpose: 'Stipend and toolkit e-voucher crediting', issuer: 'Bank', mandatory: true },
      { id: 'ration-card', name: 'Family Ration Card', purpose: 'One member per family rule verification', issuer: 'State Food Dept', mandatory: true }
    ],
    applicationMode: 'CSC / Common Service Center',
    applicationUrl: 'https://pmvishwakarma.gov.in/',
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
      { id: 'aadhaar', name: 'Aadhaar Card', purpose: 'Identity & e-KYC', issuer: 'UIDAI', mandatory: true },
      { id: 'bank-passbook', name: 'Bank Passbook / UPI QR Code', purpose: 'Direct loan disbursal and digital cashback', issuer: 'Bank / Payment Provider', mandatory: true }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://pmsvanidhi.mohua.gov.in/',
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
      { id: 'income-cert', name: 'Income Certificate (< ₹2.5 Lakh)', purpose: 'Proof of parental annual income ceiling', issuer: 'Revenue Authority / Tehsildar', mandatory: true },
      { id: 'caste-cert', name: 'Caste / Community Certificate', purpose: 'Social category verification', issuer: 'Competent District Magistrate / Tehsildar', mandatory: true },
      { id: 'marksheet', name: 'Previous Academic Year Marksheet', purpose: 'Passing percentage verification', issuer: 'School Board / University', mandatory: true },
      { id: 'fee-receipt', name: 'Current Course Bonafide Certificate & Fee Receipt', purpose: 'Proof of ongoing enrollment', issuer: 'College / Educational Institution', mandatory: true },
      { id: 'bank-passbook', name: 'Student’s Own Bank Passbook', purpose: 'DBT scholarship crediting', issuer: 'Scheduled Bank', mandatory: true }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://scholarships.gov.in/',
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
      { id: 'aadhaar', name: 'Aadhaar Card', purpose: 'Identity and age verification', issuer: 'UIDAI', mandatory: true },
      { id: 'bank-account', name: 'Savings Bank Account with Auto-Debit facility', purpose: 'Automatic monthly/quarterly contribution deductions', issuer: 'Bank / Post Office', mandatory: true },
      { id: 'nominee-details', name: 'Nominee Aadhaar & Identity', purpose: 'Corpus inheritance rights', issuer: 'UIDAI', mandatory: true }
    ],
    applicationMode: 'Bank Branch',
    applicationUrl: 'https://enps.nsdl.com/eNPS/ApySubForm.html',
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
      { id: 'bank-passbook', name: 'Mother’s Own Bank Passbook', purpose: 'Aadhaar-seeded account for DBT', issuer: 'Bank', mandatory: true }
    ],
    applicationMode: 'CSC / Common Service Center',
    applicationUrl: 'https://pmmvy.wcd.gov.in/',
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
      { id: 'ration-card', name: 'Ration Card / Annexure-I Family Composition Declaration', purpose: 'Proof that household has no existing LPG connection', issuer: 'State Food & Civil Supplies Dept', mandatory: true },
      { id: 'bank-passbook', name: 'Bank Passbook linked with Aadhaar', purpose: 'Direct cylinder subsidy credit', issuer: 'Bank', mandatory: true }
    ],
    applicationMode: 'CSC / Common Service Center',
    applicationUrl: 'https://www.pmuy.gov.in/',
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
      { id: 'aadhaar', name: 'Aadhaar Card', purpose: 'Age proof and DBT verification', issuer: 'UIDAI', mandatory: true },
      { id: 'bpl-proof', name: 'BPL Ration Card / SECC Inclusion Slip', purpose: 'Proof of below-poverty line status', issuer: 'Gram Panchayat / Block Office', mandatory: true },
      { id: 'bank-passbook', name: 'Single Bank Account Passbook', purpose: 'Monthly pension credit', issuer: 'Bank', mandatory: true }
    ],
    applicationMode: 'District Welfare Office',
    applicationUrl: 'https://nsap.nic.in/',
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
      { id: 'caste-cert', name: 'SC/ST Certificate (if male applicant)', purpose: 'Eligibility verification', issuer: 'District Magistrate', mandatory: false },
      { id: 'project-report', name: 'Detailed Project Report (DPR)', purpose: 'Viability and machinery costs analysis', issuer: 'Chartered Accountant / Consultant', mandatory: true },
      { id: 'shareholding', name: 'Partnership deed / RoC Incorporation (51% female or SC/ST stake)', purpose: 'Majority controlling stake proof for non-individual units', issuer: 'MCA', mandatory: false }
    ],
    applicationMode: 'Bank Branch',
    applicationUrl: 'https://www.standupmitra.in/',
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
      { id: 'aadhaar', name: 'Aadhaar Card', purpose: 'Biometric student attendance and Skill India ID', issuer: 'UIDAI', mandatory: true },
      { id: 'edu-proof', name: 'Last Educational Qualification Marksheet', purpose: 'Course entry criteria check', issuer: 'School / College', mandatory: true },
      { id: 'bank-passbook', name: 'Bank Passbook', purpose: 'Direct credit of training stipend', issuer: 'Bank', mandatory: true }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://www.skillindiadigital.gov.in/',
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
      { id: 'disability-cert', name: 'Disability Certificate / UDID Card', purpose: 'Medical board disability assessment (>40%)', issuer: 'District Chief Medical Officer (CMO)', mandatory: true },
      { id: 'aadhaar', name: 'Aadhaar Card', purpose: 'Identity & DBT', issuer: 'UIDAI', mandatory: true },
      { id: 'bpl-cert', name: 'BPL Card / Income Certificate', purpose: 'Economic means test', issuer: 'Revenue Authority', mandatory: true },
      { id: 'bank-passbook', name: 'Applicant Bank Passbook', purpose: 'Pension disbursal', issuer: 'Bank', mandatory: true }
    ],
    applicationMode: 'District Welfare Office',
    applicationUrl: 'https://www.swavlambancard.gov.in/',
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
      { id: 'aadhaar', name: 'Aadhaar Card of Electricity Consumer', purpose: 'Identity & subsidy DBT', issuer: 'UIDAI', mandatory: true },
      { id: 'bank-passbook', name: 'Cancelled Cheque / Bank Passbook', purpose: 'Direct bank credit of ₹78,000 subsidy', issuer: 'Bank', mandatory: true }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://pmsuryaghar.gov.in/',
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
      { id: 'aadhaar', name: 'Aadhaar Card', purpose: 'KYC and claim settlement link', issuer: 'UIDAI', mandatory: true },
      { id: 'bank-passbook', name: 'Aadhaar-seeded Bank Passbook', purpose: 'Claim compensation DBT', issuer: 'Bank', mandatory: true }
    ],
    applicationMode: 'Online Portal',
    applicationUrl: 'https://pmfby.gov.in/',
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
