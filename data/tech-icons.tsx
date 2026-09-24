import type { IconType } from "react-icons";
import { Code2 } from "lucide-react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiJsonwebtokens,
  SiGit,
  SiGithub,
  SiVisualstudiocode,
  SiDocker,
  SiPnpm,
  SiTurborepo,
  SiVercel,
  SiFirebase,
  SiGoogleanalytics,
} from "react-icons/si";

const map: Record<string, IconType> = {
  HTML: SiHtml5,
  CSS: SiCss3,
  JavaScript: SiJavascript,
  React: SiReact,
  "Next.js": SiNextdotjs,
  TypeScript: SiTypescript,
  "Tailwind CSS": SiTailwindcss,
  "Node.js": SiNodedotjs,
  NestJS: SiNestjs,
  PostgreSQL: SiPostgresql,
  Prisma: SiPrisma,
  JWT: SiJsonwebtokens,
  Git: SiGit,
  GitHub: SiGithub,
  "VS Code": SiVisualstudiocode,
  Docker: SiDocker,
  PNPM: SiPnpm,
  Turborepo: SiTurborepo,
  Vercel: SiVercel,
  Firebase: SiFirebase,
  "Google Analytics": SiGoogleanalytics,
};

export function TechIcon({ name, size = 18 }: { name: string; size?: number }) {
  const Icon = map[name];
  if (!Icon) return <Code2 size={size} strokeWidth={1.75} />;
  return <Icon size={size} />;
}
