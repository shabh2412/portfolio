export type SkillGroup = {
  title: string;
  caption: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    caption: "The surface people touch. Where I spend most of my time.",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Redux",
      "Tailwind CSS",
      "shadcn/ui",
      "Chakra UI",
      "Material UI",
      "Framer Motion",
      "Config-Driven UI",
    ],
  },
  {
    title: "Backend & Data",
    caption: "Enough depth to ship end-to-end when the moment calls for it.",
    items: [
      "Node.js",
      "Express",
      "FastAPI",
      "MongoDB",
      "PostgreSQL",
      "pgvector",
      "Supabase",
      "SQL",
      "REST / WebSockets",
    ],
  },
  {
    title: "AI & LLM tooling",
    caption: "AI-native workflows I use to ship faster and smarter.",
    items: [
      "Vertex AI",
      "LangChain",
      "OpenAI",
      "Vercel AI SDK",
      "Claude",
      "Gemini",
      "Windsurf",
      "pgvector",
    ],
  },
  {
    title: "Platform & Tooling",
    caption: "Fast feedback loops, tight DX, confident shipping.",
    items: [
      "AWS",
      "Azure",
      "GCP",
      "Vercel",
      "Git",
      "GitHub",
      "Vite",
      "Clerk",
      "Auth0",
      "Okta",
      "Metabase",
    ],
  },
];
