export type StackCategory = {
  title: string;
  items: string[];
};

export const stackCategories: StackCategory[] = [
  {
    title: "Front-end",
    items: ["HTML", "CSS", "JavaScript", "React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Back-end",
    items: ["Node.js", "NestJS", "APIs REST"],
  },
  {
    title: "Banco de dados",
    items: ["PostgreSQL", "SQL", "Prisma"],
  },
  {
    title: "Autenticação & segurança",
    items: ["JWT", "Argon2", "Helmet", "Rate Limiting"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "VS Code", "Docker", "PNPM", "Turborepo"],
  },
  {
    title: "Cloud & deploy",
    items: ["Vercel", "Firebase"],
  },
  {
    title: "Outros",
    items: ["SEO", "Google Analytics", "Integração WhatsApp API", "IA"],
  },
];
