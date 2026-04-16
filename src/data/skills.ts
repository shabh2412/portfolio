export type SkillGroup = {
  title: string;
  caption: string;
  items: { name: string; icon: string }[];
};

const dev = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`;

const devPlain = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-plain.svg`;

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    caption: "The surface people touch — where I spend most of my time.",
    items: [
      { name: "React", icon: dev("react") },
      { name: "Next.js", icon: devPlain("nextjs") },
      { name: "TypeScript", icon: dev("typescript") },
      { name: "Redux", icon: dev("redux") },
      { name: "Tailwind CSS", icon: devPlain("tailwindcss") },
      { name: "shadcn/ui", icon: dev("react") },
      { name: "Chakra UI", icon: dev("react") },
      { name: "Material UI", icon: dev("materialui") },
      { name: "Framer Motion", icon: dev("react") },
      { name: "Config-Driven UI", icon: dev("javascript") },
    ],
  },
  {
    title: "Backend & Data",
    caption: "Enough depth to ship end-to-end when the moment calls for it.",
    items: [
      { name: "Node.js", icon: dev("nodejs") },
      { name: "Express", icon: dev("express") },
      { name: "FastAPI", icon: dev("fastapi") },
      { name: "MongoDB", icon: dev("mongodb") },
      { name: "PostgreSQL", icon: dev("postgresql") },
      { name: "pgvector", icon: dev("postgresql") },
      { name: "Supabase", icon: dev("supabase") },
      { name: "SQL", icon: dev("mysql") },
      { name: "REST / WebSockets", icon: dev("nodejs") },
    ],
  },
  {
    title: "AI & LLM tooling",
    caption: "AI-native workflows I use to ship faster and smarter.",
    items: [
      { name: "Vertex AI", icon: devPlain("googlecloud") },
      { name: "LangChain", icon: dev("python") },
      { name: "OpenAI Embeddings", icon: dev("python") },
      { name: "Vercel AI SDK", icon: devPlain("nextjs") },
      { name: "Claude", icon: dev("javascript") },
      { name: "Gemini", icon: devPlain("googlecloud") },
      { name: "Windsurf", icon: dev("javascript") },
      { name: "pgvector", icon: dev("postgresql") },
    ],
  },
  {
    title: "Platform & Tooling",
    caption: "Fast feedback loops, tight DX, confident shipping.",
    items: [
      { name: "AWS", icon: dev("amazonwebservices") },
      { name: "Azure", icon: dev("azure") },
      { name: "GCP", icon: devPlain("googlecloud") },
      { name: "Vercel", icon: devPlain("nextjs") },
      { name: "Git", icon: dev("git") },
      { name: "GitHub", icon: dev("github") },
      { name: "Vite", icon: dev("javascript") },
      { name: "OAuth / Clerk / Auth0 / Okta", icon: dev("javascript") },
      { name: "Metabase", icon: dev("javascript") },
    ],
  },
];

export const principles = [
  {
    title: "Config-driven systems",
    body: "Enterprise deployments shouldn't require engineers for every tweak. I design surfaces that are reconfigurable via JSON — scalable by construction, not bolted on later.",
    icon: "sparkles",
  },
  {
    title: "Performance as a feature",
    body: "Memoization, virtualization, SSR, image pipelines, bundle budgets. Measured wins: 47% faster page loads on the Faradworks flagship, 2× faster iteration velocity on shared UI.",
    icon: "zap",
  },
  {
    title: "Types as documentation",
    body: "Rigorous TypeScript, discriminated unions, and narrow component contracts so future-me and the team can read the code instead of archaeology it.",
    icon: "braces",
  },
  {
    title: "AI-augmented engineering",
    body: "I use Windsurf, Claude, Gemini, and Vercel AI SDK to compress the loop from idea to production — without outsourcing the thinking or the taste.",
    icon: "target",
  },
  {
    title: "Small, reversible steps",
    body: "Short-lived branches, small PRs, feature flags, and behind-the-scenes refactors. I ship in increments so users never feel the plumbing change.",
    icon: "git",
  },
  {
    title: "Ownership, end to end",
    body: "From RFC and architecture to rollback plan. I partner tightly with founders, design, backend, and data — and stay with a surface until it sticks.",
    icon: "access",
  },
];
