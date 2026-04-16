export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  url?: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Experience[] = [
  {
    company: "Ripik.AI",
    role: "Senior Frontend Engineer",
    period: "Present",
    location: "Navi Mumbai, India",
    url: "https://ripik.ai",
    summary:
      "Building the product surface for Ripik's enterprise AI platform — the interface operators, plant managers, and data teams use to run computer-vision and process-optimization workloads across heavy industry.",
    highlights: [
      "Lead frontend architecture for multiple product lines on a unified React + TypeScript monorepo, with shared design tokens, component primitives, and hooks.",
      "Shipped real-time dashboards streaming inference events from on-prem edge devices; owned websocket lifecycle, reconciliation, and zero-downtime fallbacks.",
      "Drove a measurable performance program — image-heavy dashboards moved from multi-second TTI to sub-second on the same hardware through code-splitting, virtualization, and image pipeline work.",
      "Mentored mid and junior engineers through design reviews, pairing sessions, and a living internal playbook on React, TypeScript, and testing patterns.",
      "Partnered closely with design and product to turn ambiguous enterprise requirements into shippable, accessible, keyboard-friendly UI.",
    ],
    stack: [
      "React",
      "TypeScript",
      "Next.js",
      "Redux Toolkit",
      "React Query",
      "Chakra UI",
      "Tailwind CSS",
      "Vite",
      "WebSockets",
      "Playwright",
    ],
  },
  {
    company: "Freelance & Open Source",
    role: "Frontend Engineer",
    period: "2022 — Present",
    location: "Remote",
    summary:
      "Selective freelance engagements with early-stage founders and open-source contributions — from zero-to-one marketing sites to internal dashboards and design-system scaffolding.",
    highlights: [
      "Built pixel-accurate marketing sites and product landing pages on Next.js + Tailwind with CMS-driven content and top-of-class Core Web Vitals.",
      "Shipped reusable TypeScript starters and UI primitives now used across personal projects and community repositories.",
      "Reviewed, refactored, and hardened frontends for small teams — eliminating state bugs, adding types, and standardizing tooling.",
    ],
    stack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "tRPC",
      "MongoDB",
      "Vercel",
    ],
  },
  {
    company: "Masai School",
    role: "Full-Stack Web Development Program",
    period: "2021 — 2022",
    location: "Bengaluru, India (Remote)",
    summary:
      "Intensive full-stack program with an outcome-driven curriculum: data structures, MERN, TypeScript, system design fundamentals, and weekly paired construct projects.",
    highlights: [
      "Graduated top of cohort after 1000+ hours of hands-on engineering, pair programming, and timed algorithmic assessments.",
      "Shipped team clones of production products (IndiaMART, Fraazo, My Hours) in fixed week-long sprints with real scope, design reviews, and retrospectives.",
      "Mentored juniors in DSA, JavaScript fundamentals, and React patterns after graduating.",
    ],
    stack: [
      "JavaScript",
      "TypeScript",
      "React",
      "Redux",
      "Node.js",
      "Express",
      "MongoDB",
      "Data Structures & Algorithms",
    ],
  },
];
