import { FocusArea, ObjectiveItem, TimelineEvent, GovernanceState, ArchiveFolder } from '../types';

export const NGO_PROFILE = {
  name: "KARNATAKA THINKERS FORUM (R)",
  kannadaName: "ಕರ್ನಾಟಕ ಥಿಂಕರ್ಸ್ ಫೋರಂ (ರ)",
  registrationStatus: "Registered Society under the Karnataka Societies Registration Act, 1960",
  registrationNumber: "66/2012-13",
  dateOfRegistration: "06 June 2012",
  registeredOffice: "Dharwad, Karnataka",
  district: "Dharwad",
  officialEmail: "karnatakathinkersforum.india@gmail.com",
  motto: "Let us be a ray of hope for the worried through the thoughts of the thinkers.",
  kannadaMotto: "ಚಿಂತಕರ ಚಿಂತನೆಗಳ ಮೂಲಕ ಚಿಂತಾಕ್ರಾಂತರಿಗೆ ಆಶಾದೀಪವಾಗೋಣ.",
  vision: "To build an informed, responsible, equitable and progressive society through knowledge, dialogue and collective action.",
  mission: [
    "To promote social justice, legal awareness, civic participation, youth development, human rights, consumer rights and community welfare through research, discussions, training programmes and public engagement.",
    "To promote research, legal awareness, civic participation and sustainable development through collaboration, advocacy and public engagement."
  ],
  coreValues: [
    { title: "Integrity", desc: "Unwavering commitment to truth, ethical conduct, and transparency in public action." },
    { title: "Inclusiveness", desc: "Ensuring space and voice for marginalized communities, women, youth, and elders." },
    { title: "Evidence-based Thinking", desc: "Grounding advocacy, representations, and policy inputs in thorough research and legal facts." },
    { title: "Accountability", desc: "Holding public institutions accountable while maintaining absolute financial and operational transparency." },
    { title: "Service", desc: "Selfless dedication to social equity and public welfare without commercial interest." }
  ]
};

export const FOCUS_AREAS: FocusArea[] = [
  {
    id: "justice-human-rights",
    number: 1,
    title: "Justice & Human Rights",
    kannadaTitle: "ನ್ಯಾಯ ಮತ್ತು ಮಾನವ ಹಕ್ಕುಗಳು",
    iconName: "Scale",
    whyItBelongs: "Central to your legal awareness and advocacy work, protecting constitutional rights and citizen entitlements.",
    includes: [
      "Legal Awareness",
      "Human Rights",
      "Consumer Rights",
      "Constitutional Values"
    ],
    color: "from-amber-600 to-orange-700",
    bgGradient: "bg-amber-50 dark:bg-amber-950/20"
  },
  {
    id: "knowledge-research",
    number: 2,
    title: "Knowledge & Research",
    kannadaTitle: "ಜ್ಞಾನ ಮತ್ತು ಸಂಶೋಧನೆ",
    iconName: "BookOpen",
    whyItBelongs: "Reflects the 'Thinkers' identity through research, publications, seminars, and evidence-based policy dialogue.",
    includes: [
      "Research & Field Studies",
      "Publications & Articles",
      "Discussions & Roundtables",
      "Academic & Public Seminars",
      "Policy Papers & Memorandums"
    ],
    color: "from-blue-600 to-indigo-700",
    bgGradient: "bg-blue-50 dark:bg-blue-950/20"
  },
  {
    id: "governance-civic-participation",
    number: 3,
    title: "Governance & Civic Participation",
    kannadaTitle: "ಆಡಳಿತ ಮತ್ತು ನಾಗರಿಕ ಭಾಗವಹಿಸುವಿಕೆ",
    iconName: "Building2",
    whyItBelongs: "Covers democracy, Panchayat Raj, public policy accountability, and active citizen engagement in local governance.",
    includes: [
      "Democracy & Electoral Literacy",
      "Panchayat Raj Institutions",
      "Public Policy Analysis",
      "Civic Engagement & Action",
      "Grassroots Leadership"
    ],
    color: "from-emerald-600 to-teal-700",
    bgGradient: "bg-emerald-50 dark:bg-emerald-950/20"
  },
  {
    id: "community-development",
    number: 4,
    title: "Community Development",
    kannadaTitle: "ಸಮುದಾಯ ಅಭಿವೃದ್ಧಿ",
    iconName: "Users",
    whyItBelongs: "Encompasses youth empowerment, marginalized group upliftment, senior citizens welfare, and self-help group support.",
    includes: [
      "Youth Empowerment & Training",
      "Women Development & Rights",
      "Senior Citizens Support",
      "Self-Help Groups (SHGs)",
      "Rural Development & Welfare"
    ],
    color: "from-rose-600 to-pink-700",
    bgGradient: "bg-rose-50 dark:bg-rose-950/20"
  },
  {
    id: "sustainable-development",
    number: 5,
    title: "Sustainable Development",
    kannadaTitle: "ಸುಸ್ಥಿರ ಅಭಿವೃದ್ಧಿ",
    iconName: "Leaf",
    whyItBelongs: "Represents environmental stewardship, sustainable urban planning, livelihoods, and long-term social progress.",
    includes: [
      "Environmental Protection",
      "Sustainable Livelihoods",
      "Social Equity",
      "Sustainable Urban Growth & Public Transit"
    ],
    color: "from-green-600 to-emerald-800",
    bgGradient: "bg-green-50 dark:bg-green-950/20"
  }
];

export const OBJECTIVES: ObjectiveItem[] = [
  {
    id: 1,
    title: "Marginalized Section Upliftment",
    description: "Identify the needs and challenges of weaker and marginalized sections of society and promote solutions based on equality, brotherhood, social justice and sustainable development.",
    category: "Social Justice",
    icon: "HeartHandshake"
  },
  {
    id: 2,
    title: "Legal & Civic Awareness",
    description: "Create awareness regarding legal rights, government welfare schemes, constitutional values and fundamental civic responsibilities.",
    category: "Legal & Constitutional",
    icon: "ShieldCheck"
  },
  {
    id: 3,
    title: "Seminars & Educational Workshops",
    description: "Conduct seminars, lectures, workshops, discussions and awareness programmes on social, legal, educational and environmental issues.",
    category: "Knowledge & Education",
    icon: "GraduationCap"
  },
  {
    id: 4,
    title: "Social Development Studies & Research",
    description: "Undertake rigorous studies, research projects and training activities for evidence-based social development.",
    category: "Research",
    icon: "FileSearch"
  },
  {
    id: 5,
    title: "Youth Empowerment & Nation Building",
    description: "Empower youth and encourage their active participation in nation-building, leadership, and community development activities.",
    category: "Youth & Community",
    icon: "Sparkles"
  },
  {
    id: 6,
    title: "Human Rights & Democratic Participation",
    description: "Promote human rights, consumer rights protection, and active democratic participation across all levels of society.",
    category: "Rights & Governance",
    icon: "Vote"
  },
  {
    id: 7,
    title: "Support for Weaker Sections, SC/ST & Elders",
    description: "Support the development of weaker sections including women, children, senior citizens, Scheduled Castes and Scheduled Tribes.",
    category: "Social Justice",
    icon: "Users2"
  },
  {
    id: 8,
    title: "Self-Help Groups & Community Organizations",
    description: "Assist in the formation, capacity building, and strengthening of self-help groups (SHGs) and grassroots community organizations.",
    category: "Youth & Community",
    icon: "Handshake"
  },
  {
    id: 9,
    title: "Panchayat Raj & Local Governance Awareness",
    description: "Create grassroots awareness regarding Panchayat Raj institutions, rural local bodies, and participatory decentralization.",
    category: "Rights & Governance",
    icon: "Landmark"
  },
  {
    id: 10,
    title: "Multi-Agency & Academic Collaboration",
    description: "Collaborate with government agencies, non-governmental organizations, educational institutions and socially responsible organizations for developmental activities.",
    category: "Knowledge & Education",
    icon: "Network"
  },
  {
    id: 11,
    title: "Public Benefit Publications & Reports",
    description: "Publish books, reports, research articles, policy papers and other educational material for wide public benefit.",
    category: "Research",
    icon: "BookOpenCheck"
  },
  {
    id: 12,
    title: "Eradication of Social Evils & Discrimination",
    description: "Undertake action programmes aimed at eliminating social evils, caste discrimination, exploitation, and structural inequality.",
    category: "Social Justice",
    icon: "Flame"
  },
  {
    id: 13,
    title: "Sole Organizational Resource Integrity",
    description: "Ensure that all income and resources of the Forum are utilized solely for achieving the charitable and developmental objectives of the organization.",
    category: "Rights & Governance",
    icon: "BadgeDollarSign"
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    date: "2012-06-06",
    formattedDate: "06 June 2012",
    event: "Official Society Registration",
    kannadaEvent: "ಸಂಸ್ಥೆಯ ಅಧಿಕೃತ ನೋಂದಣಿ",
    description: "Karnataka Thinkers Forum (R) was registered under the Karnataka Societies Registration Act, 1960 with Registration No. 66/2012-13. The first Executive Committee was constituted under the presidency of Shri P.H. Neeralakeri.",
    category: "Governance",
    highlight: true
  },
  {
    date: "2013-05-08",
    formattedDate: "08 May 2013",
    event: "First Annual General Meeting (AGM 2012-13)",
    description: "AGM held under the chairmanship of President P.H. Neeralakeri. Audit Report, Income & Expenditure Statement, and Balance Sheet for FY 2012-13 were presented and unanimously approved. Executive Committee continued for 2013-14.",
    category: "AGM"
  },
  {
    date: "2013-11-16",
    formattedDate: "16 November 2013",
    event: "Support to KSLU International Moot Court Competition",
    description: "Contributed ₹25,000 towards prize distribution for the International Moot Court Competition organized by Karnataka State Law University (KSLU), promoting legal education among law students.",
    category: "Legal",
    highlight: true
  },
  {
    date: "2014-08-09",
    formattedDate: "09 August 2014",
    event: "Annual General Meeting (2013-14)",
    description: "Audit report and financial statements for FY 2013-14 approved. Existing Executive Committee continued for the term 2014-15.",
    category: "AGM"
  },
  {
    date: "2014-10-14",
    formattedDate: "14 October 2014",
    event: "HDBRTS Flyover Proposal Representation",
    description: "Forum representatives participated in consultations with HDBRTS regarding the proposed flyover between Toll Naka and Jubilee Circle, Dharwad. The Forum firmly opposed the flyover, advocating instead for wider roads, better urban planning, preservation of the city's green landscape, and long-term sustainable public transport solutions.",
    category: "Advocacy",
    highlight: true
  },
  {
    date: "2014-12-18",
    formattedDate: "18 December 2014",
    event: "High-Level Memorandum to Chief Minister of Karnataka",
    kannadaEvent: "ಕರ್ನಾಟಕದ ಮುಖ್ಯಮಂತ್ರಿಗಳಿಗೆ ಮನವಿ ಸಲ್ಲಿಕೆ",
    description: "President Shri P.H. Neeralakeri submitted an extensive representation to Chief Minister Siddaramaiah highlighting critical public policy concerns: sugarcane dues payable to farmers, the urgent Kalasa-Banduri Nala Link Project, and the Belagavi border issue, urging public accountability and government intervention.",
    category: "Advocacy",
    highlight: true
  },
  {
    date: "2014-12-27",
    formattedDate: "27 December 2014",
    event: "Public Advocacy for Original BRTS Plan",
    description: "Karnataka Thinkers Forum publicly advocated for the execution of the Hubli-Dharwad BRTS project strictly according to its original design. The Forum argued that long-term urban planning must take precedence over short-term commercial pressures.",
    category: "Advocacy"
  },
  {
    date: "2015-05-20",
    formattedDate: "20 May 2015",
    event: "Annual General Meeting & EC Extension (2015-18)",
    description: "AGM held at Dharwad under President Shri P.H. Neeralakeri. Audit reports, income & expenditure statements, and profit & loss accounts for FY 2014-15 approved. Executive Committee unanimously extended for the 2015-18 term.",
    category: "AGM"
  },
  {
    date: "2016-04-12",
    formattedDate: "12 April 2016",
    event: "Submission of Statutory Accounts to Registrar",
    description: "Karnataka Thinkers Forum submitted complete statutory annual accounts and audit records for FY 2012-13, 2013-14, 2014-15, and 2015-16 to the Registrar of Societies for statutory compliance.",
    category: "Governance"
  },
  {
    date: "2016-05-31",
    formattedDate: "31 May 2016",
    event: "Registrar Compliance Acknowledgement Received",
    description: "Registrar of Societies formally acknowledged receipt and filing of all annual accounts, executive committee records, and statutory documents.",
    category: "Governance"
  },
  {
    date: "2026-01-01",
    formattedDate: "2026 Current Status",
    event: "Digital Archive & Committee Reorganization",
    description: "Active leadership under President Shri P.H. Neeralakeri, establishing the official web presence, digital archives, and preparing executive committee nominations for new tenure.",
    category: "Governance",
    highlight: true
  }
];

export const GOVERNANCE_DATA: GovernanceState = {
  foundingYear: "2012",
  foundingOfficeBearers: [
    { role: "President", name: "Shri Panduranga H. Neeralakeri" },
    { role: "Vice President", name: "Dr. Yamanappa Balvanthgol" },
    { role: "Secretary", name: "Shri Chandrashekar R. Hiremath" },
    { role: "Joint Secretary", name: "Shri Vinay Suryanarayana Hegde" },
    { role: "Treasurer", name: "Shri Deepak Sadashiva Shetty" },
    { role: "Executive Member", name: "Shri Mohammed Ali Hasanasab Goodabai" },
    { role: "Executive Member", name: "Mrs. Varamahalakshmi Burugapalli" }
  ],
  currentStatusYear: "2026",
  currentOfficeBearers: [
    { role: "President", name: "Shri Panduranga H. Neeralakeri", status: "Active" },
    { role: "Executive Member", name: "Shri Mohammed Ali Hasanasab Goodabai", status: "Active" },
    { role: "Vice President", name: "To be confirmed", isVacancy: true },
    { role: "Secretary", name: "Vacancy proposed upon acceptance of resignation", isVacancy: true },
    { role: "Joint Secretary", name: "Vacancy proposed upon acceptance of resignation", isVacancy: true },
    { role: "Treasurer", name: "Vacancy proposed upon acceptance of resignation", isVacancy: true },
    { role: "Executive Member", name: "Vacancy proposed upon acceptance of resignation", isVacancy: true }
  ],
  documentsAvailable: [
    "Registration Certificate & Documents (Reg No. 66/2012-13)",
    "Objectives and Memorandum of Association (MoA)",
    "Founding Executive Committee Resolution (2012)",
    "Historical Office Bearer Records & Attendance Register",
    "Audit Reports & Balance Sheets (FY 2012-16)"
  ],
  documentsToOrganize: [
    "Constitution & Updated Rules & Regulations",
    "PAN Card Records & Income Tax Exemptions",
    "Official Bank Account Records & Authorizations",
    "Membership Register & Application Forms",
    "Executive Committee Meeting Minutes",
    "Signed Resignation Letters & Transition Filings",
    "Updated Office Bearer List (2026)",
    "Centralized Digital Repository & Public Portal"
  ],
  immediateActionItems: [
    "Obtain signed resignation letters from outgoing office bearers (Shri Chandrashekar R. Hiremath, Shri Vinay Suryanarayana Hegde, Shri Deepak Sadashiva Shetty, Mrs. Varamahalakshmi Burugapalli)",
    "Convene Executive Committee Meeting to review committee composition",
    "Pass formal resolution accepting pending resignations",
    "Appoint / elect new office bearers for vacant positions",
    "Update membership records and issue new digital identity cards",
    "Create official domain email system and digital archive",
    "Establish official web portal and public dialogue desk"
  ]
};

export const ARCHIVE_FOLDERS: ArchiveFolder[] = [
  {
    id: "registration-legal",
    code: "01",
    name: "Registration & Legal",
    icon: "FileCheck",
    files: [
      { id: "f-101", name: "Registration Certificate (66/2012-13).pdf", type: "PDF", date: "06 Jun 2012", status: "Available", description: "Official Registration Certificate under Karnataka Societies Registration Act 1960", size: "1.2 MB" },
      { id: "f-102", name: "Memorandum of Association (MoA).pdf", type: "PDF", date: "06 Jun 2012", status: "Available", description: "Foundational Memorandum outlining Objectives and Organizational Charter", size: "2.4 MB" },
      { id: "f-103", name: "Rules & Regulations Bylaws.pdf", type: "PDF", date: "06 Jun 2012", status: "Pending Organization", description: "Rules governing membership, meetings, elections, and funds", size: "1.8 MB" },
      { id: "f-104", name: "Objectives of the Forum.pdf", type: "PDF", date: "06 Jun 2012", status: "Available", description: "13 Core Statutory Objectives of KTF", size: "850 KB" },
      { id: "f-105", name: "PAN Card Record.pdf", type: "PDF", status: "Pending Organization", description: "Permanent Account Number statutory filing", size: "450 KB" },
      { id: "f-106", name: "Registrar Correspondence Records.pdf", type: "PDF", date: "31 May 2016", status: "Available", description: "Official communications and filing receipts from Registrar of Societies", size: "3.1 MB" }
    ]
  },
  {
    id: "governance",
    code: "02",
    name: "Governance",
    icon: "ShieldAlert",
    files: [
      { id: "f-201", name: "Founding Resolution (2012).pdf", type: "PDF", date: "06 Jun 2012", status: "Available", description: "First Executive Committee constitution resolution", size: "1.1 MB" },
      { id: "f-202", name: "Office Bearers - Historical (2012-2015).pdf", type: "PDF", date: "20 May 2015", status: "Available", description: "Historical register of elected office bearers", size: "920 KB" },
      { id: "f-203", name: "Office Bearers - Current (2026).pdf", type: "PDF", date: "2026", status: "Pending Organization", description: "Updated current status and vacancies breakdown", size: "640 KB" },
      { id: "f-204", name: "Resignation Letters File.pdf", type: "PDF", status: "Pending Organization", description: "Pending signed transition letters", size: "510 KB" },
      { id: "f-205", name: "Appointment Letters & Notifications.pdf", type: "PDF", status: "Pending Organization", description: "Executive committee appointment records", size: "780 KB" },
      { id: "f-206", name: "Meeting Notices & Agendas.pdf", type: "PDF", date: "2012-2016", status: "Available", description: "Notices issued for AGMs and EC meetings", size: "1.5 MB" },
      { id: "f-207", name: "Meeting Minutes Register.pdf", type: "PDF", date: "2012-2016", status: "Pending Organization", description: "Proceedings and resolutions passed during AGMs", size: "4.2 MB" }
    ]
  },
  {
    id: "members",
    code: "03",
    name: "Members",
    icon: "UserCheck",
    files: [
      { id: "f-301", name: "Founding Members List.pdf", type: "PDF", date: "06 Jun 2012", status: "Available", description: "Register of 7 founding members who signed the MoA", size: "780 KB" },
      { id: "f-302", name: "Current Members Register.pdf", type: "PDF", date: "2026", status: "Pending Organization", description: "Updated membership directory", size: "1.9 MB" },
      { id: "f-303", name: "Membership Applications Archive.pdf", type: "PDF", status: "Pending Organization", description: "Submitted membership forms and referee verifications", size: "2.8 MB" }
    ]
  },
  {
    id: "finance",
    code: "04",
    name: "Finance",
    icon: "Receipt",
    files: [
      { id: "f-401", name: "Audit Reports (FY 2012-13 to 2015-16).pdf", type: "PDF", date: "12 Apr 2016", status: "Available", description: "Audited balance sheets, income & expenditure accounts submitted to Registrar", size: "5.4 MB" },
      { id: "f-402", name: "Income & Expenditure Statements.pdf", type: "PDF", date: "2012-2016", status: "Available", description: "Detailed break-up of public contributions and activity expenditure", size: "3.2 MB" },
      { id: "f-403", name: "Bank Account Documents & Passbooks.pdf", type: "PDF", status: "Pending Organization", description: "Authorized bank signatures and bank statements", size: "2.1 MB" },
      { id: "f-404", name: "Donations & Contribution Register.pdf", type: "PDF", status: "Pending Organization", description: "Voluntary contributions log", size: "1.4 MB" },
      { id: "f-405", name: "KSLU Moot Court Support Receipt (₹25,000).pdf", type: "PDF", date: "16 Nov 2013", status: "Available", description: "Official receipt from Karnataka State Law University", size: "650 KB" }
    ]
  },
  {
    id: "projects-activities",
    code: "05",
    name: "Projects & Activities",
    icon: "Briefcase",
    files: [
      { id: "f-501", name: "Seminars & Law Workshops File.pdf", type: "PDF", status: "Available", description: "Documentation on public lectures and workshops", size: "3.6 MB" },
      { id: "f-502", name: "CM Representation - Farmers & Kalasa-Banduri.pdf", type: "PDF", date: "18 Dec 2014", status: "Available", description: "Memorandum submitted to Chief Minister Siddaramaiah on sugarcane dues, Kalasa-Banduri, Belagavi border", size: "1.7 MB" },
      { id: "f-503", name: "Hubli-Dharwad BRTS Advocacy Paper.pdf", type: "PDF", date: "27 Dec 2014", status: "Available", description: "Public memorandum advocating for original BRTS transit design", size: "1.4 MB" },
      { id: "f-504", name: "HDBRTS Flyover Consultation Objections.pdf", type: "PDF", date: "14 Oct 2014", status: "Available", description: "Representation opposing Toll Naka–Jubilee Circle flyover", size: "1.1 MB" },
      { id: "f-505", name: "Community Legal Awareness Campaigns.pdf", type: "PDF", status: "Available", description: "Reports on rural & urban legal literacy drives", size: "2.9 MB" }
    ]
  },
  {
    id: "media-publications",
    code: "06",
    name: "Media & Publications",
    icon: "Newspaper",
    files: [
      { id: "f-601", name: "Press Coverage Archive (2012-2016).pdf", type: "PDF", status: "Available", description: "Kannada and English press clippings of KTF interventions", size: "8.5 MB" },
      { id: "f-602", name: "Articles & Thinker Essays.pdf", type: "PDF", status: "Available", description: "Published papers on constitutional rights and governance", size: "4.1 MB" },
      { id: "f-603", name: "News Clippings - BRTS & Flyover Advocacy.pdf", type: "PDF", date: "Oct-Dec 2014", status: "Available", description: "Coverage of KTF public hearings and CM representations", size: "3.8 MB" }
    ]
  },
  {
    id: "digital-presence",
    code: "07",
    name: "Digital Presence",
    icon: "Globe",
    files: [
      { id: "f-701", name: "Official Email Credentials & Policy.pdf", type: "PDF", date: "2026", status: "Available", description: "karnatakathinkersforum.india@gmail.com administrative policy", size: "300 KB" },
      { id: "f-702", name: "Official Web Portal Architecture.pdf", type: "PDF", date: "2026", status: "Available", description: "Digital portal specifications and transparency dashboard", size: "1.5 MB" },
      { id: "f-703", name: "Official Logo Guidelines & Assets.pdf", type: "PDF", date: "2026", status: "Available", description: "Vector logo specifications featuring unity hands, tricolor, and scales of justice", size: "2.2 MB" }
    ]
  },
  {
    id: "archive",
    code: "08",
    name: "Archive",
    icon: "FolderArchive",
    files: [
      { id: "f-801", name: "Historical Documents (2012-2016).pdf", type: "PDF", date: "2012-2016", status: "Archived", description: "Foundational correspondence and notice copies", size: "6.8 MB" },
      { id: "f-802", name: "Old Member Registers (Historical).pdf", type: "PDF", date: "2012", status: "Archived", description: "Original founding sign-up records", size: "1.4 MB" },
      { id: "f-803", name: "Expired Statutory Records.pdf", type: "PDF", status: "Archived", description: "Superseded administrative filings", size: "2.1 MB" }
    ]
  }
];
