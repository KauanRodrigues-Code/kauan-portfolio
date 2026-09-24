export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  url?: string;
  status: "live" | "building";
  tech?: string[];
  features?: string[];
};

export const projects: Project[] = [
  {
    slug: "lc-burgers",
    name: "LC Burgers",
    category: "Landing Page / Website",
    description:
      "Website desenvolvido para a LC Burgers, com foco em presença digital, apresentação da marca e facilidade de contato com os clientes.",
    url: "https://lcburges.com.br",
    status: "live",
  },
  {
    slug: "team-peixoto",
    name: "Team Peixoto",
    category: "Website / Landing Page",
    description:
      "Website desenvolvido para a Team Peixoto, com foco em apresentação profissional, identidade visual e experiência do usuário.",
    url: "https://team-peixoto-site.vercel.app",
    status: "live",
  },
];

export const proServ: Project = {
  slug: "proserv",
  name: "ProServ",
  category: "Plataforma / SaaS",
  description:
    "Estou iniciando o desenvolvimento do ProServ, uma plataforma criada para conectar clientes a profissionais de serviços.",
  status: "building",
  tech: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Prisma", "Docker"],
  features: [
    "Cadastro de clientes",
    "Cadastro de profissionais",
    "Perfis profissionais",
    "Solicitação de serviços",
    "Busca de profissionais",
    "Gerenciamento de solicitações",
    "Status dos serviços",
    "Comunicação entre cliente e profissional",
    "Avaliações",
    "Sistema preparado para crescimento",
    "API",
    "Autenticação",
    "Banco de dados",
  ],
};
