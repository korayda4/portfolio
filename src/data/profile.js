// Single source of truth for all portfolio content.
// Everything rendered in the feed and the CV panel is read from here.

export const PROFILE = {
  name: "Koray Demir",
  handle: "korayda4",
  headline: "Full Stack Developer",
  focus: "MERN Stack",
  location: "Istanbul, Türkiye",
  timezone: "UTC+3",
  avatar: "/img/1754502027924.png",
  email: "koraydemirmc@gmail.com",
  links: {
    github: "https://github.com/korayda4",
    linkedin: "https://www.linkedin.com/in/koraydemir1/",
  },
  intro: "Building end-to-end web & mobile products.",
  summary:
    "Full Stack Developer with 2 years of professional experience (4 years hands-on) designing, building and deploying web and mobile applications. Front ends in React, Next.js and React Native; back ends in Node.js (Express, NestJS) and ASP.NET on Firebase and Supabase. Ships to production with CI/CD, Linux VPS and Vercel.",
};

export const STATS = [
  { value: "2", unit: "yrs", label: "Professional experience", note: "+ nearly 2 yrs of independent & own-company builds" },
  { value: "11.6", unit: "K", label: "Total web views", note: "Across live web projects" },
  { value: "3", unit: "", label: "Active real-world projects", note: "Currently in development" },
  { value: "MERN", unit: "", label: "Core stack", note: "MongoDB · Express · React · Node.js" },
  { value: "750", unit: "+", label: "Afet Noktası users", note: "4.6/5 on Google Play" },
  { value: "99", unit: "", label: "Lighthouse score", note: "Across 8+ e-commerce sites" },
]

export const FEATURED = [
  {
    id: "afet",
    name: "Afet Noktası",
    tagline: "Disaster alert platform",
    logo: "/img/afet-noktasi.png",
    link: "https://www.afettr.com/",
    linkLabel: "afettr.com",
    description:
      "React Native app for Android & iOS, a Next.js web platform and an ASP.NET REST API on a Linux VPS behind Cloudflare, shipped via GitHub Actions. Real-time quake and wildfire alerts with Firebase push, live sync and offline peer-to-peer messaging.",
    metrics: [
      { value: "750+", label: "Users" },
      { value: "4.6/5", label: "Google Play" },
      { value: "3", label: "Platforms" },
    ],
    stack: ["React Native", "Next.js", "ASP.NET", "Firebase", "TanStack Query", "Kotlin"],
  },
  {
    id: "ucuzz",
    name: "Ucuzz",
    logo: "/img/ucuzz.png",
    logoWide: true,
    tagline: "Price tracking & marketplace",
    description:
      "Mobile app and ASP.NET back end surfacing the cheapest new or second-hand option across stores — search, price tracking, campaigns and real-time push.",
    stack: ["React Native", "ASP.NET", "Firebase", "TanStack Query"],
  },
  {
    id: "evcill",
    name: "Evcill",
    tagline: "Pet community & services platform",
    description:
      "A platform where pet owners socialize, help each other, shop for their pets and hire freelancers for pet-care jobs — community, marketplace and gig work in one place.",
  },
];

// category: web | mobile | oss | client
export const PROJECTS = [
  {
    name: "vibe-security",
    description: "Open-source npm package, published and maintained as @korayda4/vibe-security (v1.4.0).",
    stack: ["Node.js", "npm"],
    category: "oss",
    badge: "Open source",
    link: "https://www.npmjs.com/package/@korayda4/vibe-security",
  },
  {
    name: "stockmanagement-mega",
    description: "Enterprise inventory system with a React front end and an ASP.NET back end.",
    stack: ["React", "ASP.NET"],
    category: "web",
    badge: "Public",
    link: "https://github.com/korayda4/stockmanagement-mega",
  },
  {
    name: "canlikul",
    description: "Native mobile experience for tourism with real-time data and interactive guides.",
    stack: ["React Native"],
    category: "mobile",
    badge: "Public",
    link: "https://github.com/korayda4/canlikul",
  },
  {
    name: "psikologecren.com",
    description: "SEO-optimized corporate platform for a practicing psychologist.",
    stack: ["Next.js", "React"],
    category: "client",
    badge: "Client",
    link: "https://www.psikologecren.com/",
  },
  {
    name: "rexiva.com.tr",
    description: "Marketing site for a digital agency.",
    stack: ["React"],
    category: "client",
    badge: "Client",
    link: "https://rexiva.com.tr/",
  },
  {
    name: "turkunhaberi.com",
    description: "Responsive news publication.",
    stack: ["Next.js"],
    category: "client",
    badge: "Client",
    link: "https://www.turkunhaberi.com/",
  },
  {
    name: "Management-App",
    description: "Kanban task manager with drag-and-drop boards.",
    stack: ["React", "Next.js"],
    category: "web",
    badge: "Public",
    link: "https://github.com/korayda4/Management-App",
  },
  {
    name: "next-auth",
    description: "Authentication system with protected routes in Next.js.",
    stack: ["Next.js"],
    category: "web",
    badge: "Public",
    link: "https://github.com/korayda4/next-auth",
  },
  {
    name: "my-ecommerce",
    description: "E-commerce storefront with state managed through Redux Toolkit.",
    stack: ["React", "Redux"],
    category: "web",
    badge: "Public",
    link: "https://github.com/korayda4/my-ecommerce",
  },
  {
    name: "FaceSwap",
    description: "Face swap web app powered by an AI model.",
    stack: ["React", "AI"],
    category: "web",
    badge: "Public",
    link: "https://github.com/korayda4/FaceSwap",
  },
  {
    name: "Translate-App",
    description: "Translation tool built on modern React patterns and a translation API.",
    stack: ["React", "REST API"],
    category: "web",
    badge: "Public",
    link: "https://github.com/korayda4/Translate-App",
  },
  {
    name: "FootbalApp",
    description: "Live match tracking and football statistics dashboard.",
    stack: ["React", "REST API"],
    category: "web",
    badge: "Public",
    link: "https://github.com/korayda4/FootbalApp",
  },
];

export const PROJECT_FILTERS = [
  { id: "all", label: "All" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "client", label: "Client" },
  { id: "oss", label: "Open source" },
];

// Core stack: shown up front. Everything else lives in the expandable toolkit.
export const STACK_PRIMARY = [
  { id: "mongodb", name: "MongoDB", role: "Database", note: "Document data modeling" },
  { id: "express", name: "Express", role: "API layer", note: "REST APIs & middleware" },
  { id: "react", name: "React", role: "Interface", note: "Components & state" },
  { id: "node", name: "Node.js", role: "Runtime", note: "Server & tooling" },
];

export const STACK_CORE_PLUS = [
  { id: "next", name: "Next.js", role: "Framework", note: "SSR & App Router" },
  { id: "rn", name: "React Native", role: "Mobile", note: "iOS & Android apps" },
  { id: "ts", name: "TypeScript", role: "Language", note: "Typed, safer code" },
];

export const STACK_SECONDARY = [
  { group: "Languages", items: ["JavaScript", "Kotlin", "PHP", "SQL", "HTML / CSS"] },
  { group: "Frontend", items: ["Tailwind CSS", "shadcn/ui", "MUI", "TanStack Query", "Redux"] },
  { group: "Backend", items: ["NestJS", "ASP.NET", "REST APIs", "Auth", "SSR"] },
  { group: "Data", items: ["Supabase", "PostgreSQL", "Firebase", "Firestore", "FCM"] },
  { group: "Mobile", items: ["Expo", "iOS", "Android", "Push notifications", "Google Play"] },
  { group: "DevOps", items: ["Git", "GitHub Actions", "CI/CD", "Linux", "VPS", "PM2", "Cloudflare", "Vercel", "Jest"] },
  { group: "Quality", items: ["Core Web Vitals", "Lighthouse", "Technical SEO", "WCAG"] },
];

// Mirrors the LinkedIn experience section.
// start / end: "YYYY-MM"; end: null means ongoing. Durations are computed.
// logo: optional image path — without one a monogram tile is rendered.
export const EXPERIENCE = [
  {
    kind: "break",
    role: "Layoff / Position eliminated",
    company: "Career break",
    start: "2026-09",
    end: null,
  },
  {
    role: "Team Lead | Full Stack Developer",
    company: "Rexiva",
    type: "Self-employed",
    start: "2024-06",
    end: "2026-09",
    location: "Istanbul, Türkiye",
    mode: "Remote",
    summary: [
      "We started this business by developing e-commerce plugins to make things easier for e-commerce sellers. After focusing on affiliate marketing for a while, we shifted our focus to mobile application development and marketing, and now we provide development and marketing services for mobile applications.",
    ],
    skills: ["Mobile Applications", "Mobile Application Development"],
    moreSkills: 2,
  },
  {
    role: "Full-Stack Developer / Project Specialist Trainee",
    company: "TNC Group",
    type: "Contract",
    start: "2026-06",
    end: "2026-08",
    location: "Belgrade, Serbia",
    mode: "Hybrid",
    summary: [
      "Completed the Project Specialist Training Program at TNC Group, combining professional training with hands-on project development and operational experience.",
    ],
    points: [
      "Completed 191 CPD-accredited training hours covering Software Development, Project Management, Human Resources Management, Company Law and Brand Design.",
      "Delivered 3 completed projects while contributing to an ongoing core project and producing daily project and development-related outputs.",
      "Gained practical experience across software development, project coordination, business operations and cross-functional collaboration.",
      "Worked remotely during the initial training period and participated in the on-site program in Belgrade, Serbia.",
      "Collaborated with professionals across software, project management, HR, legal and design disciplines.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Roi House Consultancy",
    type: "Full-time",
    start: "2026-02",
    end: "2026-06",
    location: "Istanbul, Türkiye",
    mode: "Remote",
    summary: [
      "I developed UX/UI and performance-oriented NextJS/SSR projects for affiliate marketing, integrating security and API connections, system validation, and A/B analytics into the company software.",
      "I managed Domain, Server, and CDN very well by creating 25+ websites / Presenter quickly and keeping them up-to-date.",
    ],
    skills: ["NextJS", "PHP"],
    moreSkills: 3,
  },
  {
    role: "Intern",
    company: "Software Persona",
    type: "Internship",
    start: "2026-01",
    end: "2026-02",
    location: "Istanbul, Türkiye",
    mode: "Remote",
    summary: [
      "I had a short but rewarding internship where I learned about UX/UI design, website creation, mobile applications, and business development and planning, culminating in a presentation and a final project. I gained experience and developed skills in Figma, Flutter, and React.",
    ],
    skills: ["Flutter", "Figma"],
    moreSkills: 2,
  },
  {
    role: "Jr. Frontend Developer - Web&Mobile",
    company: "AjansCode",
    type: "Seasonal",
    start: "2025-07",
    end: "2025-10",
    location: "Bakırköy, Istanbul, Türkiye",
    mode: "On-site",
    summary: [
      "I improved the SEO performance of clients' websites through UI optimization and performance optimizations, and developed high-UX mobile applications and navigation apps for some clients.",
    ],
    skills: ["NextJS", "React Native"],
    moreSkills: 3,
  },
  {
    role: "Jr. Frontend Developer",
    company: "SEOLOG SEO Ajansı",
    type: "Full-time",
    start: "2024-08",
    end: "2025-08",
    location: "Istanbul Aydın University",
    mode: "On-site",
    summary: [
      "I developed, managed, and ensured the operation of e-commerce websites using WordPress, React, NextJS, and IKAS software and platforms. Similarly, I created content and managed social media presence through Canva.",
    ],
  },
];

export const EDUCATION = [
  {
    school: "Istanbul Aydın University",
    degree: "Associate Degree, Computer Programming",
    period: "Aug 2023 — Oct 2025",
    note: "AA in core courses",
  },
  {
    school: "Istanbul Nişantaşı University",
    degree: "Extended Software Expertise Program",
    period: "May 2023 — May 2024",
    note: "5+ industry projects",
  },
]

export const MEMORIES = [
  {
    id: "dup",
    image: "/img/dup-participant-card.png",
    width: 1620,
    height: 1020,
    title: "Dijital Üniversite Platformu",
    subtitle: "Participant · AI & Data Analytics",
    period: "2026 — 2027",
  },
];

export const MARKS = [
  { name: "Afet Noktası", caption: "Flagship · Full stack", image: "/img/afet-noktasi.png", link: "https://www.afettr.com/" },
  { name: "RexAI", caption: "Orchestrator AI · Independent", image: "/img/rexai.png" },
];

// Certificate scans: landscape first, then portrait, so the panel grid rows line up.
// The Acunmedya scan has the national ID, barcode and QR removed.
export const CERTIFICATIONS = [
  {
    id: "software-persona",
    title: "Software Internship Certificate",
    subtitle: "Software Persona × TNC Group · SQL, JavaScript, Figma, Android / iOS",
    period: "2026",
    image: "/img/certs/software-persona.jpg",
    width: 1600,
    height: 1131,
  },
  {
    id: "btk-react",
    title: "Web Programming with React",
    subtitle: "BTK Akademi",
    period: "Jun 2024",
    image: "/img/certs/btk-react.jpg",
    width: 1600,
    height: 1131,
  },
  {
    id: "acunmedya",
    title: "Extended Software Expertise — Frontend",
    subtitle: "Istanbul Nişantaşı University × Acunmedya Akademi · 260 hours",
    period: "Mar — Nov 2023",
    image: "/img/certs/acunmedya.jpg",
    width: 1600,
    height: 1131,
  },
  {
    id: "tnc-project-specialist",
    title: "Project Specialist Training Program",
    subtitle: "TNC Group × Human Ports · 191 CPD hours",
    period: "Belgrade · 2026",
    image: "/img/certs/tnc-project-specialist.jpg",
    width: 1131,
    height: 1600,
  },
  {
    id: "tnc-reference",
    title: "Reference Letter",
    subtitle: "TNC Group × Human Ports",
    period: "Belgrade · 2026",
    image: "/img/certs/tnc-reference.jpg",
    width: 1131,
    height: 1600,
  },
]

export const LANGUAGES = [
  { name: "Turkish", level: "Native" },
  { name: "English", level: "Professional" },
];

export const SECTIONS = [
  { id: "overview", label: "Overview" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "featured", label: "Featured" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];
