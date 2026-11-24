
export type Project = {
  slug: string;
  name: string;
  category: string;
  description: string;
  url?: string;
  logo?: string;
  status: "live" | "building";
  tech?: string[];
  features?: string[];
};

export const projects: Project[] = [
  {
    slug: "team-peixoto",
    name: "Team Peixoto",
    category: "Website / Landing Page",
    description:
      "Website desenvolvido para a Team Peixoto, com foco em apresentação profissional, identidade visual e experiência do usuário.",
    url: "https://www.teampeixoto.com.br",
    logo: "/images/team-peixoto-logo.png",
    status: "live",
  },
  {
    slug: "adega-do-japa",
    name: "Adega do Japa",
    category: "Landing Page / Website",
    description:
      "Website desenvolvido para a Adega do Japa, com cardápio digital, apresentação de produtos, vídeos, divulgação de eventos e integração com WhatsApp.",
    url: "https://www.adegadojapa.net.br",
    logo: "/images/adega-do-japa-logo.png",
    status: "live",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    features: [
      "Cardápio digital com produtos e preços",
      "Apresentação de produtos",
      "Seção de vídeos",
      "Divulgação de eventos",
      "Integração com WhatsApp",
      "SEO",
      "Google Analytics",
      "Layout responsivo",
    ],
  },
];

export const proServ: Project = {
  slug: "proserv",
  name: "ProServ",
  category: "Plataforma / SaaS",
  description:
    "Estou iniciando o desenvolvimento do ProServ, uma plataforma criada para conectar clientes a profissionais de serviços.",
  status: "building",
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "NestJS",
    "PostgreSQL",
    "Prisma",
    "Docker",
  ],
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
