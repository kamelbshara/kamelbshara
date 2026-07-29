export const profile = {
  name: "Kamel Bshara",
  tagline: "Math Teacher → AI & EdTech Builder",
  roles: ["Mathematics Teacher", "AI Enthusiast", "EdTech Builder", "Project Manager"],
  location: "Al-Ain, United Arab Emirates",
  email: "kamelbesharah@gmail.com",
  phone: "+971 54 777 8522",
  languages: "Arabic (Native) · English (IELTS Academic 6.5)",
  vision:
    "Mathematics educator and school leader with 8+ years of project management experience, now building AI-powered tools for education.",
  objectives: [
    "Apply years of mathematical thinking to tech and AI roles that solve real problems.",
    "Use data and analytical skills to help teams build smarter, more effective solutions.",
    "Grow fast in a technology environment — bringing structure, curiosity, and a fresh perspective.",
  ],
  cvFile: "/Kamel_Bshara_CV.pdf",
};

export const stats = [
  { value: "8", label: "Years in Project Management" },
  { value: "7", label: "Years in Education" },
  { value: "5", label: "Years in Mid-Leadership" },
];

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
      "Built and deployed custom AI and Apps Script tools — exam question generation, grade analysis, and follow-up planning — to support day-to-day teaching workflows.",
      "Mentored fellow teachers on integrating digital, data-driven methods into lesson delivery.",
      "Led curriculum innovation as school leadership licence holder (MOE, 2025).",
    ],
  },
  {
    role: "Mid Leadership — School Administrator",
    org: "Ministry of Education — UAE",
    period: "2021 – Present",
    bullets: [
      "Managed school safety, E-Maturity, and E-Safety files in compliance with MOE and USIF standards.",
      "Led grade analysis cycles aligned to EmSAT performance targets and MOE assessment policy.",
      "Coordinated school timetable, executive planning, and scheduling across departments.",
      "Oversaw student life quality and wellbeing programmes in line with MOE wellbeing framework.",
      "Supported school improvement planning using USIF inspection criteria and continuous development goals.",
      "Balanced administrative leadership duties alongside a full teaching load.",
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
      "Applied value engineering to balance cost, quality, and schedule trade-offs across builds.",
      "Managed resource allocation — labor, materials, and equipment — across multiple concurrent sites.",
      "Solved on-site technical and logistical problems in real time to keep projects on schedule.",
    ],
  },
  {
    role: "Project Engineer",
    org: "IBSF Co. — KAFD Conference Center, KSA",
    period: "2011 – 2013",
    bullets: [
      "Served as project engineer on the KAFD Conference Center — a large-scale conference, film, and lecture facility within King Abdullah Financial District, Riyadh.",
      "The project later earned LEED Gold Certification (2017) and an AIA Middle East Honor Award (2018).",
      "Contributed to large-scale infrastructure delivery across the KAFD masterplan.",
      "Coordinated resource and subcontractor scheduling amid the project's large-scale technical complexity.",
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
  {
    slug: "sat360",
    name: "SAT360",
    tagline: "SAT training app to level up student skills",
    description:
      "A dedicated SAT training platform built to help students strengthen their skills and prepare for the SAT — practice-driven and structured around steady, measurable improvement.",
    role: "Creator & builder",
    stack: ["Web application", "Vercel"],
    features: [
      "Structured SAT practice built to level up student skills over time",
      "Focused, practice-driven prep experience for students",
    ],
    link: "https://sat360.vercel.app/",
    status: "Live",
  },
  {
    slug: "smart-teacher-profile",
    name: "Smart Teacher Profile",
    tagline: "AI teaching assistant that documents, plans, and follows up",
    description:
      "An AI-powered teacher assistant that acts as a full teaching companion — documenting classroom work, generating lesson plans and reports, analyzing student grades, and following up on student progress as they move forward.",
    role: "Creator & builder",
    stack: ["Web application", "AI-generated content", "Vercel"],
    features: [
      "Generates lesson plans and reports automatically",
      "Documents teaching activity in one place",
      "Analyzes student grades and tracks progress over time",
      "Follows up on students as they progress, not just a one-time snapshot",
    ],
    link: "https://smart-teacher-profile.vercel.app/",
    status: "Live",
  },
  {
    slug: "ai-math-exam-generator",
    name: "AI Math Exam Question Generator",
    tagline: "AI-cloned final exam questions for Grade 10 Advanced Math",
    description:
      "A tool built to speed up exam writing — feed it an existing final exam question and it uses AI to generate cloned variants at matching difficulty and topic coverage, built specifically for Grade 10 Advanced mathematics finals.",
    role: "Creator & builder",
    stack: ["Google Apps Script", "AI question generation"],
    features: [
      "Clones an existing exam question into fresh AI-generated variants at the same difficulty",
      "Purpose-built for Grade 10 Advanced math final exams",
      "Cuts down exam-writing time while keeping question banks curriculum-aligned",
    ],
    link: "https://script.google.com/macros/s/AKfycbzL8vGjjkCf3WfEvDoYTWL8Ci1hT8u-KgUgVgD7l5RnsjTcHa_cKWM32uYEVqnPP8ZfBw/exec",
    status: "Live",
  },
  {
    slug: "grade-analysis-follow-up",
    name: "Smart Grade Analysis & Follow-Up Planner",
    tagline: "Automated grade analysis with AI-generated follow-up plans",
    description:
      "A tool that analyzes student grades and automatically generates a smart follow-up plan per student or class — flagging who needs support and tracking whether that follow-up actually happens over time.",
    role: "Creator & builder",
    stack: ["Google Apps Script", "Data analysis"],
    features: [
      "Analyzes student grade data to surface trends and at-risk students",
      "Generates a smart, actionable follow-up plan automatically",
      "Tracks follow-up completion over time",
    ],
    link: "https://script.google.com/macros/s/AKfycby6I_X5W2uuS_rCoyykn6Ozk0v-U6hRnBGqg5guQx74g9HVY_y0Im0DchyvOyx6O4jb/exec",
    status: "Live",
  },
  {
    slug: "math-exam-prep-platform",
    name: "Math Exam Prep Platform",
    tagline: "Structured practice for final math exam preparation",
    description:
      "A platform built to get students exam-ready for their final math exams — structured practice students can work through directly ahead of exam day.",
    role: "Creator & builder",
    stack: ["Google Apps Script"],
    features: [
      "Structured practice materials aligned to final math exam content",
      "Built for direct student self-study ahead of finals",
    ],
    link: "https://script.google.com/macros/s/AKfycbyBk-ZdKzIMilz3pWrXP4FN0IzKloL2IhmrLlBnFcqGy2LEycCI0jQWlcmHQtBdljxV/exec",
    status: "Live",
  },
];

export const education = [
  { degree: "BA Civil Engineering", org: "An-Najah National University", period: "2007 – 2011" },
  { degree: "Teaching Licence", org: "Ministry of Education", period: "2021 –" },
  { degree: "School Leadership Licence", org: "Ministry of Education", period: "2025 –" },
];

export type PersonalAward = {
  title: string;
  titleAr?: string;
  org: string;
  year: string;
};

export const personalAwards: PersonalAward[] = [
  {
    title: "Best Playwright — Abu Dhabi School Theatre Festival",
    titleAr: "أفضل كاتب مسرحي في مهرجان أبوظبي للمسرح المدرسي",
    org: "Abu Dhabi School Theatre Festival",
    year: "2023",
  },
];

export type ProjectRecognition = {
  title: string;
  project: string;
  org: string;
  year: string;
  myRole: string;
};

export const projectRecognitions: ProjectRecognition[] = [
  {
    title: "AIA Middle East Honor Award",
    project: "KAFD Conference Center, Riyadh, KSA",
    org: "American Institute of Architects",
    year: "2018",
    myRole: "Part of the project construction team — Project Engineer",
  },
  {
    title: "LEED Gold Certification",
    project: "KAFD Conference Center, Riyadh, KSA",
    org: "Sustainable design & energy performance",
    year: "2017",
    myRole: "Part of the project construction team — Project Engineer",
  },
];

export const activities = ["EXPO 2020 — Volunteer", "Toastmasters International — Member"];

export const interests = ["Writing", "Rap Music", "Football", "Hiking", "Travelling"];
