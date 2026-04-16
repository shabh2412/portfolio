import { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
  SiTailwindcss,
  SiShadcnui,
  SiChakraui,
  SiMui,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiMysql,
  SiLangchain,
  SiOpenai,
  SiVercel,
  SiClaude,
  SiGooglegemini,
  SiWindsurf,
  SiGooglecloud,
  SiGit,
  SiGithub,
  SiVite,
  SiClerk,
  SiAuth0,
  SiOkta,
  SiMetabase,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";
import { VscAzure } from "react-icons/vsc";
import { HiAdjustmentsHorizontal, HiBolt, HiCircleStack, HiSignal } from "react-icons/hi2";

type IconDef = { icon: IconType; color: string };

export const skillIcons: Record<string, IconDef> = {
  // Frontend
  React: { icon: SiReact, color: "#61dafb" },
  "Next.js": { icon: SiNextdotjs, color: "#ffffff" },
  TypeScript: { icon: SiTypescript, color: "#3178c6" },
  Redux: { icon: SiRedux, color: "#764abc" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "#38bdf8" },
  "shadcn/ui": { icon: SiShadcnui, color: "#ffffff" },
  "Chakra UI": { icon: SiChakraui, color: "#38b2ac" },
  "Material UI": { icon: SiMui, color: "#007fff" },
  "Framer Motion": { icon: SiFramer, color: "#ff3e88" },
  "Config-Driven UI": { icon: HiAdjustmentsHorizontal, color: "#5eead4" },

  // Backend & Data
  "Node.js": { icon: SiNodedotjs, color: "#539e43" },
  Express: { icon: SiExpress, color: "#e7e9f2" },
  FastAPI: { icon: SiFastapi, color: "#009485" },
  MongoDB: { icon: SiMongodb, color: "#47a248" },
  PostgreSQL: { icon: SiPostgresql, color: "#4169e1" },
  pgvector: { icon: SiPostgresql, color: "#8b5cf6" },
  Supabase: { icon: SiSupabase, color: "#3ecf8e" },
  SQL: { icon: SiMysql, color: "#4479a1" },
  "REST / WebSockets": { icon: HiSignal, color: "#5eead4" },

  // AI & LLM tooling
  "Vertex AI": { icon: SiGooglecloud, color: "#4285f4" },
  LangChain: { icon: SiLangchain, color: "#1c3d2e" },
  OpenAI: { icon: SiOpenai, color: "#ffffff" },
  "Vercel AI SDK": { icon: SiVercel, color: "#ffffff" },
  Claude: { icon: SiClaude, color: "#d97757" },
  Gemini: { icon: SiGooglegemini, color: "#4796e3" },
  Windsurf: { icon: SiWindsurf, color: "#19b3b3" },

  // Platform & Tooling
  AWS: { icon: FaAws, color: "#ff9900" },
  Azure: { icon: VscAzure, color: "#0078d4" },
  GCP: { icon: SiGooglecloud, color: "#4285f4" },
  Vercel: { icon: SiVercel, color: "#ffffff" },
  Git: { icon: SiGit, color: "#f05032" },
  GitHub: { icon: SiGithub, color: "#ffffff" },
  Vite: { icon: SiVite, color: "#bd34fe" },
  Clerk: { icon: SiClerk, color: "#6c47ff" },
  Auth0: { icon: SiAuth0, color: "#eb5424" },
  Okta: { icon: SiOkta, color: "#007dc1" },
  Metabase: { icon: SiMetabase, color: "#509ee3" },
};

// Fallback for anything we missed
export const fallbackIcon: IconDef = { icon: HiBolt, color: "#5eead4" };
export const fallbackStack: IconDef = { icon: HiCircleStack, color: "#5eead4" };
