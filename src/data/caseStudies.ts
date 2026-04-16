export type CaseStudy = {
  title: string;
  company: string;
  tagline: string;
  description: string;
  role: string;
  period: string;
  impact: string[];
  tech: string[];
  accentFrom: string;
  accentTo: string;
  link?: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "PinScope.AI",
    company: "Faradworks · Founding Engineer",
    tagline: "Schematic validation that ships hardware right the first time.",
    description:
      "A SaaS platform for hardware teams that parses electrical schematics and lets engineers ask questions over them in natural language. I built the core PinScope.AI agent (Vertex AI Agent Engine, LangChain, OpenAI embeddings, and a pgvector-backed Postgres knowledge base) and the full Next.js + shadcn/ui product surface around it.",
    role: "Founding Engineer · Full-stack owner",
    period: "Jul 2025 – Jan 2026",
    impact: [
      "Accelerated release cycles by 83% by owning frontend, backend, infra, and CI/CD end-to-end",
      "Cut page-load times 47% with memoization, virtualization, caching, and SSR",
      "Shipped 4 product pilots (Faradworks, Schema, FaradHub, PinScope.AI) as Founding Engineer",
      "2× faster iteration velocity after introducing a predictable shadcn/ui component system",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "Vertex AI",
      "LangChain",
      "OpenAI Embeddings",
      "pgvector",
      "PostgreSQL",
      "MongoDB",
      "AWS",
    ],
    accentFrom: "#5eead4",
    accentTo: "#8b5cf6",
    link: "https://faradworks.com",
  },
  {
    title: "Ripik Optimus",
    company: "Ripik.AI · Frontend Engineer",
    tagline: "AI-driven production planning for heavy industry.",
    description:
      "Led the frontend for Ripik Optimus, the operator-facing interface that drives computer-vision and process-optimisation workloads across steel, cement, and other heavy industry. Built the Production Planner from 0 to 1, the QC Scheduler, the Yield Optimiser, and Intellibuy for Tata Steels. Shipped a dynamic, config-driven UI system so each new client deployment could be tailored in JSON instead of code, and maintained the in-house component library that powered all of it.",
    role: "Frontend Engineer · Owner of Optimus frontend",
    period: "Nov 2022 – Oct 2024 (2 yrs)",
    impact: [
      "Built Ripik Optimus Production Planner from 0 to 1",
      "Shipped config-driven UI framework that collapsed per-client customisation from weeks to hours",
      "Built and maintained Ripik's in-house component library used across all product surfaces",
      "Delivered Intellibuy for Tata Steels, a bespoke surface on top of the shared foundation",
      "Partnered daily with data scientists, PMs, backend, and QA to make ML outputs trustworthy on the shop floor",
    ],
    tech: [
      "React",
      "TypeScript",
      "Redux",
      "Config-Driven UI",
      "Component Library",
      "AWS",
      "REST APIs",
    ],
    accentFrom: "#8b5cf6",
    accentTo: "#f472b6",
  },
  {
    title: "Miraei AI Product Suite",
    company: "Miraei AI · Frontend Engineer",
    tagline: "End-to-end product development with AI-native workflows.",
    description:
      "Currently leading end-to-end frontend development at Miraei AI: architecting systems, executing rapid MVPs, and owning the frontend, backend, infra, and CI/CD for the flagship product. Pairing AI-augmented tooling (Windsurf, Claude, Gemini, Vercel AI SDK) with disciplined engineering to compress the loop from idea to preview to production.",
    role: "Frontend Engineer · End-to-end ownership",
    period: "Jan 2026 – Present",
    impact: [
      "Collaborate directly with founders to translate product hypotheses into working systems",
      "Own the full shipping pipeline (frontend, backend glue, infra, CI/CD)",
      "Use AI-native workflows (Windsurf, Claude, Gemini, Vercel AI SDK) without outsourcing taste or judgement",
    ],
    tech: ["Next.js", "TypeScript", "shadcn/ui", "Vercel AI SDK", "Node.js", "Tailwind CSS"],
    accentFrom: "#f472b6",
    accentTo: "#5eead4",
  },
];
