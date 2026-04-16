export type SkillGroup = {
  title: string;
  caption: string;
  items: { name: string; icon: string }[];
};

const icon = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-original.svg`;

const iconPlain = (slug: string) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-plain.svg`;

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    caption: "Typed-first. I reach for TypeScript by default.",
    items: [
      { name: "TypeScript", icon: icon("typescript") },
      { name: "JavaScript", icon: icon("javascript") },
      { name: "Python", icon: icon("python") },
      { name: "HTML5", icon: icon("html5") },
      { name: "CSS3", icon: icon("css3") },
    ],
  },
  {
    title: "Frontend",
    caption: "The surface people touch — where I spend most of my time.",
    items: [
      { name: "React", icon: icon("react") },
      { name: "Next.js", icon: iconPlain("nextjs") },
      { name: "Redux", icon: icon("redux") },
      { name: "Chakra UI", icon: icon("react") },
      { name: "Tailwind CSS", icon: iconPlain("tailwindcss") },
      { name: "Material UI", icon: icon("materialui") },
      { name: "Framer Motion", icon: icon("react") },
    ],
  },
  {
    title: "Backend & Data",
    caption: "Enough depth to ship end-to-end when the moment calls for it.",
    items: [
      { name: "Node.js", icon: icon("nodejs") },
      { name: "Express", icon: icon("express") },
      { name: "FastAPI", icon: icon("fastapi") },
      { name: "MongoDB", icon: icon("mongodb") },
      { name: "REST", icon: icon("nodejs") },
      { name: "WebSockets", icon: icon("nodejs") },
    ],
  },
  {
    title: "Tooling & Platform",
    caption: "Fast feedback loops, tight DX, confident shipping.",
    items: [
      { name: "Git", icon: icon("git") },
      { name: "GitHub", icon: icon("github") },
      { name: "Vite", icon: icon("react") },
      { name: "Heroku", icon: icon("heroku") },
      { name: "Vercel", icon: icon("nextjs") },
      { name: "Markdown", icon: icon("markdown") },
    ],
  },
];

export const principles = [
  {
    title: "Design-led engineering",
    body: "The best frontend engineers speak design. I ship UI that is pixel-accurate, motion-considered, and accessible by default.",
    icon: "sparkles",
  },
  {
    title: "Performance as a feature",
    body: "I measure before I optimize — Core Web Vitals, bundle budgets, and perceived responsiveness are treated as product requirements.",
    icon: "zap",
  },
  {
    title: "Types as documentation",
    body: "Rigorous TypeScript, discriminated unions, and narrow prop contracts — because future-me and the team deserve readable code.",
    icon: "braces",
  },
  {
    title: "Small, reversible steps",
    body: "Trunk-based development with short-lived branches, small PRs, feature flags, and behind-the-scenes refactors that never break users.",
    icon: "git",
  },
  {
    title: "Accessibility is table stakes",
    body: "Keyboard paths, ARIA where it's needed (and not where it isn't), sufficient contrast, and reduced-motion respect.",
    icon: "access",
  },
  {
    title: "Own the outcome",
    body: "From RFC to rollback plan. I own product decisions on my surface area, partner tightly with design and backend, and ship until it sticks.",
    icon: "target",
  },
];
