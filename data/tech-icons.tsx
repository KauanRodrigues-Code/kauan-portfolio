import type { IconType } from "react-icons";
import { Code2 } from "lucide-react";

import {
  SiHtml5,
  SiCss,
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
  SiDocker,
  SiPnpm,
  SiTurborepo,
  SiVercel,
  SiFirebase,
  SiGoogleanalytics,
} from "react-icons/si";

import { VscVscode } from "react-icons/vsc";

const map: Record<string, IconType> = {
  HTML: SiHtml5,
  CSS: SiCss,
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
  "VS Code": VscVscode,
  Docker: SiDocker,
  PNPM: SiPnpm,
  Turborepo: SiTurborepo,
  Vercel: SiVercel,
  Firebase: SiFirebase,
  "Google Analytics": SiGoogleanalytics,
};

export function TechIcon({
  name,
  size = 18,
}: {
  name: string;
  size?: number;
}) {
  const Icon = map[name];

  if (!Icon) {
    return <Code2 size={size} strokeWidth={1.75} />;
  }

  return <Icon size={size} />;
}