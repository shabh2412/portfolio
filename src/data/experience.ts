export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  employment?: string;
  url?: string;
  summary: string;
  highlights: string[];
  stack: string[];
  current?: boolean;
};

export const experience: Experience[] = [
  {
    company: "Miraei AI",
    role: "Frontend Engineer",
    period: "Jan 2026 – Present",
    location: "United States · Remote",
    employment: "Full-time",
    summary:
      "Leading end-to-end frontend development for Miraei's flagship product. My work spans frontend, backend, infrastructure, CI/CD, and architectural decision-making.",
    highlights: [
      "Collaborate directly with founders to translate early product hypotheses into working systems: architecting surfaces, executing rapid MVPs, and shipping production builds on tight cycles.",
      "Own the full build pipeline end-to-end (frontend, backend glue, infra, CI/CD) so the loop from idea to preview to production is measured in hours, not weeks.",
      "Pair AI-augmented workflows (Windsurf, Claude, Gemini, Vercel AI SDK) with a disciplined engineering process to compress timelines without compromising code quality.",
    ],
    stack: ["Next.js", "TypeScript", "React", "Node.js", "Tailwind CSS", "shadcn/ui", "Vercel AI SDK"],
    current: true,
  },
  {
    company: "Faradworks",
    role: "Founding Engineer",
    period: "Jul 2025 – Jan 2026",
    location: "New York, United States · Remote",
    employment: "Full-time",
    summary:
      "Founding Engineer leading development of PinScope.ai, a schematic validation SaaS platform that helps hardware companies ship products that work the first time. Worked across the full stack and shaped the product and company from inception.",
    highlights: [
      "Owned end-to-end development across frontend, backend, infrastructure, and CI/CD, accelerating release cycles by 83%.",
      "Built the core PinScope.AI agent enabling question-answering over electrical schematics, using Vertex AI Agent Engine, LangChain, OpenAI embeddings, and a pgvector-backed PostgreSQL knowledge base.",
      "Led performance tuning and agent packaging, implementing custom tooling, caching layers, and automated deployments to deliver low-latency, high-reliability responses across complex schematics.",
      "Partnered closely with founders on product strategy and experimentation, contributing to 4 successful product pilots across Faradworks, Schema, FaradHub, and PinScope.AI.",
      "Architected Next.js + TypeScript + shadcn/ui frontends: predictable, reusable components and data flows that improved UI consistency and doubled dev speed.",
      "Applied advanced frontend optimisation (memoization, caching, virtualization, SSR) to cut page-load times by 47% and lift perceived responsiveness across devices.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Node.js",
      "MongoDB",
      "PostgreSQL",
      "pgvector",
      "Vertex AI",
      "LangChain",
      "shadcn/ui",
      "AWS",
    ],
  },
  {
    company: "SYMX.AI",
    role: "Software Development Engineer",
    period: "Oct 2024 – Jul 2025",
    location: "Gurugram, Haryana, India · On-site",
    employment: "Full-time",
    summary:
      "Built AI-driven enterprise tooling for SYMX.AI. Hands-on across TypeScript frontends and Node.js services, with focus on reliability and developer experience.",
    highlights: [
      "Shipped production features across typed React/Next.js surfaces and Node.js services used by enterprise customers.",
      "Helped establish internal patterns and abstractions that reduced boilerplate and tightened the feedback loop for the engineering team.",
    ],
    stack: ["TypeScript", "Node.js", "React", "Next.js", "REST APIs"],
  },
  {
    company: "Ripik.AI",
    role: "Frontend Engineer",
    period: "Nov 2022 – Oct 2024 · 2 yrs",
    location: "Noida, Uttar Pradesh, India · Remote",
    employment: "Full-time",
    summary:
      "Led major frontend initiatives for Ripik's industrial AI platform: the interface heavy-industry operators, plant managers, and data teams use to run CV and process-optimisation workloads.",
    highlights: [
      "Built Ripik Optimus Production Planner from 0 to 1 and led the broader frontend for Ripik Optimus, one of the company's flagship products.",
      "Architected a dynamic, config-driven UI system so every new client deployment could be tailored via JSON rather than engineering changes.",
      "Developed and maintained Ripik's in-house component library, the shared foundation used across Optimus, QC Scheduler, Yield Optimiser, and Intellibuy (for Tata Steels).",
      "Partnered daily with data scientists, PMs, backend engineers, and QA to turn ML outputs into UI that operators could trust on the factory floor.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Redux",
      "Config-Driven UI",
      "AWS",
      "Git",
      "REST APIs",
      "Component Libraries",
    ],
  },
  {
    company: "Masai School",
    role: "Full-Stack Web Development Program",
    period: "Mar 2022 – Oct 2022 · 8 mos",
    location: "Bengaluru, Karnataka, India",
    employment: "Career break · Professional development",
    summary:
      "Intensive full-stack program: data structures, MERN, TypeScript, and paired construct projects shipped on weekly sprints.",
    highlights: [
      "1000+ hours of hands-on engineering, pair programming, and timed algorithmic assessments.",
      "Shipped team clones of production products (IndiaMART, Fraazo, My Hours) in fixed week-long sprints with real design reviews and retrospectives.",
    ],
    stack: ["JavaScript", "TypeScript", "React", "Redux", "Node.js", "Express", "MongoDB", "DSA"],
  },
  {
    company: "BrightChamps",
    role: "Coding Instructor",
    period: "Jul 2021 – Dec 2021 · 6 mos",
    employment: "Full-time",
    summary:
      "Taught programming to young learners. Ran daily demo sessions and paid 1:1 courses, teaching on Scratch, Code.org, Thunkable, and Google Colab.",
    highlights: [
      "Distilled complex programming concepts into digestible lessons for students as young as 8. Same clarity I carry into engineering communication today.",
    ],
    stack: ["Scratch", "Code.org", "Thunkable", "Google Colab", "Teaching", "HTML"],
  },
  {
    company: "Indian Science and Technology Foundation (ISTF)",
    role: "Machine Learning Intern",
    period: "Mar 2021 – Sep 2021 · 7 mos",
    location: "New Delhi, India",
    employment: "Internship",
    summary:
      "Worked on chemical-compound data to build toxicity-predictor models. Picked up K-Fold, ROC-AUC analysis, GridSearchCV, and ensemble methods along the way.",
    highlights: [
      "Shipped ML pipelines end-to-end: feature prep, model selection, tuning, and evaluation.",
    ],
    stack: ["Python", "Machine Learning", "scikit-learn", "Git"],
  },
];
