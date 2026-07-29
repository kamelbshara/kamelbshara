export const profile = {
  name: "Kamel Bshara",
  tagline: "Math Teacher → AI & EdTech Builder",
  roles: ["Mathematics Teacher", "AI Enthusiast", "EdTech Builder", "Project Manager"],
  location: "Al-Ain, United Arab Emirates",
  email: "kamelbesharah@gmail.com",
  phone: "+971 54 777 8522",
  languages: "Arabic (Native) · English (IELTS Academic 6.5)",
  vision:
    "Educator-turned-technologist with a strong mathematics foundation and 8 years of project management experience, passionate about using AI and data to build smarter solutions and drive real-world impact.",
  objectives: [
    "Apply years of mathematical thinking to tech and AI roles that solve real problems.",
    "Use data and analytical skills to help teams build smarter, more effective solutions.",
    "Grow fast in a technology environment — bringing structure, curiosity, and a fresh perspective.",
  ],
  cvFile: "/Kamel_Bshara_CV.pdf",
};

export type Experience = {
  role: string;
  org: string;
  period: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Mathematics Teacher",
    org: "Ministry of Education — UAE",
    period: "2019 – Present",
    bullets: [
      "Delivered MOE curriculum-aligned mathematics instruction to 150+ students across multiple grade levels.",
      "Prepared and coached students for EmSAT mathematics assessments, tracking progress against national benchmarks.",
      "Designed data-driven lesson plans using digital platforms, increasing student engagement by 30%.",
      "Conducted regular grade analysis using UAE School Inspection Framework (USIF) standards to guide teaching quality.",
      "Led curriculum innovation as school leadership licence holder (MOE, 2025).",
    ],
  },
  {
    role: "Mid Leadership — School Administrator",
    org: "Ministry of Education — UAE",
    period: "2019 – Present",
    bullets: [
      "Managed school safety, E-Maturity, and E-Safety files in compliance with MOE and USIF standards.",
      "Led grade analysis cycles aligned to EmSAT performance targets and MOE assessment policy.",
      "Coordinated school timetable, executive planning, and scheduling across departments.",
      "Oversaw student life quality and wellbeing programmes in line with MOE wellbeing framework.",
      "Supported school improvement planning using USIF inspection criteria and continuous development goals.",
    ],
  },
  {
    role: "Project Manager & Engineer",
    org: "Semat Est. — Saudi Arabia",
    period: "2012 – 2019",
    bullets: [
      "Managed 7+ concurrent projects across residential, commercial & corporate sectors.",
      "Delivered a villas compound (Royal Commission), showrooms, and corporate HQs.",
      "Coordinated cross-functional teams of engineers, contractors and clients.",
    ],
  },
  {
    role: "Project Engineer",
    org: "IBSF Co. — KAFD Conference Center, KSA",
    period: "2011 – 2013",
    bullets: [
      "Served as project engineer on the KAFD Conference Center — a large-scale conference, film, and lecture facility within King Abdullah Financial District, Riyadh.",
      "Project recognized as the 2nd Most Beautiful Construction Project of 2012.",
      "Contributed to large-scale infrastructure delivery across the KAFD masterplan.",
      "Gained experience in technical reporting, scheduling, and team coordination.",
    ],
  },
];

export type SkillGroup = {
  title: string;
  level: number;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: "AI & Data",
    level: 85,
    items: [
      "AI-driven analytics",
      "Data interpretation",
      "Prompt engineering",
      "LLM-powered app features",
      "Data-driven decision making",
    ],
  },
  {
    title: "Development",
    level: 75,
    items: [
      "Web development (Next.js/React)",
      "Interactive educational platforms",
      "Bilingual (AR/EN) product design",
      "UI/UX for learning tools",
    ],
  },
  {
    title: "Teaching & Curriculum",
    level: 95,
    items: [
      "Curriculum design",
      "Assessment & EmSAT prep",
      "Data-driven lesson planning",
      "Student coaching",
      "Classroom management",
    ],
  },
  {
    title: "Project & Engineering Delivery",
    level: 90,
    items: [
      "Problem solving",
      "Resource management",
      "Value engineering",
      "Scheduling & cost control",
      "Cross-functional coordination",
    ],
  },
  {
    title: "Leadership & Communication",
    level: 88,
    items: [
      "Team leadership",
      "Public speaking",
      "School operations",
      "Stakeholder management",
      "Strategic planning",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  role: string;
  stack: string[];
  features: string[];
  link?: string;
  status: "Live" | "In Progress" | "Concept";
};

export const projects: Project[] = [
  {
    slug: "kbws",
    name: "Khaled Bin Al Waleed Smart Platform",
    tagline: "AI-powered school intelligence platform, live in a real UAE school",
    description:
      "A bilingual (Arabic-first / English) school intelligence platform built to bring AI into everyday school operations — from lesson planning to behavior tracking to school-wide analytics. Designed and built end-to-end, drawing directly on my own classroom and school-administration experience to shape what the platform actually needed to do.",
    role: "Product designer & full-stack builder",
    stack: ["Next.js (App Router)", "TypeScript", "Prisma + PostgreSQL", "Auth.js", "OpenAI API", "next-intl (AR/EN)", "Vercel", "Expo (mobile)"],
    features: [
      "AI-generated, curriculum-aligned lesson plans from a weekly schedule — edit and print/export to PDF",
      "Behavior tracking and reporting workflows aligned to school policy",
      "Admin analytics dashboards: grade analysis, statistics, operational planning & SMART goals",
      "Bilingual Arabic/English interface with full RTL support",
      "Companion mobile app (iOS/Android via Expo) for teachers on the go",
    ],
    link: "https://kbws.vercel.app",
    status: "Live",
  },
];

export const education = [
  { degree: "BA Civil Engineering", org: "An-Najah National University", period: "2007 – 2011" },
  { degree: "Teaching Licence", org: "Ministry of Education", period: "2021 –" },
  { degree: "School Leadership Licence", org: "Ministry of Education", period: "2025 –" },
];

export type Award = {
  title: string;
  titleAr?: string;
  org: string;
  year: string;
};

export const awards: Award[] = [
  {
    title: "Best Playwright — Abu Dhabi School Theatre Festival",
    titleAr: "أفضل كاتب مسرحي في مهرجان أبوظبي للمسرح المدرسي",
    org: "Abu Dhabi School Theatre Festival",
    year: "2023",
  },
  {
    title: "2nd Most Beautiful Construction Project",
    org: "KAFD Conference Center — IBSF Co., Riyadh, KSA",
    year: "2012",
  },
];

export const activities = ["EXPO 2020 — Volunteer", "Toastmasters International — Member"];

export const interests = ["Writing", "Rap Music", "Football", "Hiking", "Travelling"];
