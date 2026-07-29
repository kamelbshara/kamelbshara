export type UiStrings = {
  nav: {
    about: string;
    experience: string;
    awards: string;
    recognitions: string;
    skills: string;
    projects: string;
    education: string;
    contact: string;
    toggleMenu: string;
  };
  hero: {
    greeting: string;
    tags: string[];
    downloadCv: string;
    getInTouch: string;
    scrollToAbout: string;
    imageAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    paragraph2: string;
    paragraph3: string;
    card1: string;
    card2: string;
    card3: string;
    aimingFor: string;
  };
  experience: { eyebrow: string; title: string };
  awards: { eyebrow: string; title: string };
  recognitions: { eyebrow: string; title: string; disclaimer: string };
  skills: { eyebrow: string; title: string };
  projects: {
    eyebrow: string;
    title: string;
    visit: string;
    overview: string;
    features: string;
    stack: string;
    aiPowered: string;
    moreComing: string;
    statusLabels: Record<string, string>;
  };
  education: { eyebrow: string; title: string; education: string; activities: string; interests: string };
  contact: { eyebrow: string; title: string; paragraph: string; downloadCv: string };
  footer: { builtWith: string };
};

export type Locale = "en" | "ar";

export const ui: Record<Locale, UiStrings> = {
  en: {
    nav: {
      about: "About",
      experience: "Experience",
      awards: "Awards",
      recognitions: "Recognitions",
      skills: "Skills",
      projects: "Projects",
      education: "Education",
      contact: "Contact",
      toggleMenu: "Toggle menu",
    },
    hero: {
      greeting: "Hi, I'm",
      tags: ["AI", "Education", "Engineering", "Design"],
      downloadCv: "Download CV",
      getInTouch: "Get in touch",
      scrollToAbout: "Scroll to about section",
      imageAlt: "Kamel Bshara — AI, Education, Engineering, Design",
    },
    about: {
      eyebrow: "01 — About",
      title: "From the classroom to the codebase",
      paragraph2:
        "My career started in civil engineering, managing construction and infrastructure projects across Saudi Arabia and the UAE from 2011 to 2019 — coordinating teams, controlling budgets and schedules, and solving on-site problems under real constraints. In 2019 I shifted into education, teaching mathematics in a UAE public school, and I've held mid-leadership responsibility for school operations since 2021.",
      paragraph3:
        "Today I'm pointing that same problem-solving instinct at AI — teaching myself to design and ship AI-powered tools, from a full school intelligence platform to smaller apps that generate exam questions, analyze grades, and plan student follow-up. Every move across fields has meant picking up a new skill set fast and turning it into something that actually gets used.",
      card1: "AI-driven analytics & prompt engineering",
      card2: "Learns fast, applies it immediately",
      card3: "Ships real products, not just prototypes",
      aimingFor: "What I'm aiming for",
    },
    experience: {
      eyebrow: "02 — Experience",
      title: "Where I've built and led",
    },
    awards: {
      eyebrow: "03 — Awards",
      title: "Personal recognition",
    },
    recognitions: {
      eyebrow: "04 — Project Recognitions",
      title: "Awarded projects I've been part of",
      disclaimer:
        "These recognitions were awarded to the project itself, not to me personally — I was part of its construction team, not the recipient of a personal award.",
    },
    skills: {
      eyebrow: "05 — Skills",
      title: "Tools I bring to the table",
    },
    projects: {
      eyebrow: "06 — Projects",
      title: "What I've built",
      visit: "Visit",
      overview: "Overview",
      features: "Features",
      stack: "Stack",
      aiPowered: "AI-Powered",
      moreComing: "More projects on the way — this list grows as I ship.",
      statusLabels: { Live: "Live", "In Progress": "In Progress", Concept: "Concept" },
    },
    education: {
      eyebrow: "07 — Education",
      title: "Education & beyond",
      education: "Education",
      activities: "Activities",
      interests: "Interests",
    },
    contact: {
      eyebrow: "08 — Contact",
      title: "Let's build something together",
      paragraph:
        "I'm looking for opportunities in AI and EdTech — whether that's applying AI to real classroom problems, building AI-powered products, or teaching the next generation of learners. If that sounds like your team, let's talk.",
      downloadCv: "Download full CV (PDF)",
    },
    footer: {
      builtWith: "Built with Next.js.",
    },
  },
  ar: {
    nav: {
      about: "نبذة عني",
      experience: "الخبرات",
      awards: "الجوائز",
      recognitions: "التكريمات",
      skills: "المهارات",
      projects: "المشاريع",
      education: "التعليم",
      contact: "تواصل",
      toggleMenu: "تبديل القائمة",
    },
    hero: {
      greeting: "مرحبًا، أنا",
      tags: ["الذكاء الاصطناعي", "التعليم", "الهندسة", "التصميم"],
      downloadCv: "تحميل السيرة الذاتية",
      getInTouch: "تواصل معي",
      scrollToAbout: "الانتقال إلى قسم نبذة عني",
      imageAlt: "كامل بشارة — الذكاء الاصطناعي، التعليم، الهندسة، التصميم",
    },
    about: {
      eyebrow: "٠١ — نبذة عني",
      title: "من الصف الدراسي إلى الشيفرة البرمجية",
      paragraph2:
        "بدأت مسيرتي المهنية في الهندسة المدنية، حيث أدرت مشاريع إنشاءات وبنية تحتية في السعودية والإمارات من 2011 إلى 2019 — بتنسيق الفرق، وضبط الميزانيات والجداول الزمنية، وحل المشكلات الميدانية ضمن قيود حقيقية. في 2019 انتقلت إلى التعليم، وأدرّس الرياضيات في مدرسة حكومية إماراتية، وأتحمل مسؤولية القيادة الوسطى لعمليات المدرسة منذ 2021.",
      paragraph3:
        "اليوم أوجّه نفس غريزة حل المشكلات نحو الذكاء الاصطناعي — بتعليم نفسي تصميم وبناء أدوات مدعومة بالذكاء الاصطناعي، من منصة ذكاء مدرسي متكاملة إلى تطبيقات أصغر تولّد أسئلة الامتحانات، وتحلل الدرجات، وتخطط لمتابعة الطلاب. كل انتقال بين المجالات كان يعني اكتساب مهارة جديدة بسرعة وتحويلها إلى شيء يُستخدم فعليًا.",
      card1: "تحليلات مدعومة بالذكاء الاصطناعي وهندسة الأوامر",
      card2: "يتعلم بسرعة ويطبّق فورًا",
      card3: "يبني منتجات حقيقية، لا نماذج أولية فقط",
      aimingFor: "ما أسعى إليه",
    },
    experience: {
      eyebrow: "٠٢ — الخبرات",
      title: "أين بنيت وقُدت",
    },
    awards: {
      eyebrow: "٠٣ — الجوائز",
      title: "تكريم شخصي",
    },
    recognitions: {
      eyebrow: "٠٤ — تكريمات المشاريع",
      title: "مشاريع حائزة على جوائز كنت جزءًا منها",
      disclaimer:
        "مُنحت هذه التكريمات للمشروع نفسه، وليس لي شخصيًا — فقد كنت جزءًا من فريق تنفيذه، ولست الحائز على جائزة شخصية.",
    },
    skills: {
      eyebrow: "٠٥ — المهارات",
      title: "الأدوات التي أقدمها",
    },
    projects: {
      eyebrow: "٠٦ — المشاريع",
      title: "ما قمت ببنائه",
      visit: "زيارة",
      overview: "نظرة عامة",
      features: "الميزات",
      stack: "التقنيات",
      aiPowered: "مدعوم بالذكاء الاصطناعي",
      moreComing: "مشاريع أخرى في الطريق — هذه القائمة تنمو مع كل إطلاق جديد.",
      statusLabels: { Live: "مباشر", "In Progress": "قيد التنفيذ", Concept: "فكرة أولية" },
    },
    education: {
      eyebrow: "٠٧ — التعليم",
      title: "التعليم وما بعده",
      education: "التعليم",
      activities: "الأنشطة",
      interests: "الاهتمامات",
    },
    contact: {
      eyebrow: "٠٨ — تواصل",
      title: "لنبنِ شيئًا معًا",
      paragraph:
        "أبحث عن فرص في مجال الذكاء الاصطناعي والتقنية التعليمية — سواء بتطبيق الذكاء الاصطناعي على مشكلات صفية حقيقية، أو بناء منتجات مدعومة بالذكاء الاصطناعي، أو تعليم الجيل القادم من المتعلمين. إذا كان هذا يناسب فريقكم، لنتحدث.",
      downloadCv: "تحميل السيرة الذاتية الكاملة (PDF)",
    },
    footer: {
      builtWith: "بُني باستخدام Next.js.",
    },
  },
};
