# Kauan Rodrigues — Portfólio

Portfólio pessoal / cartão de visita digital, construído com Next.js 14 (App Router), React, TypeScript e Tailwind CSS.

## Estrutura de arquivos

```
app/
  layout.tsx        → fontes, metadata (SEO/Open Graph), viewport
  page.tsx           → composição das seções da home
  globals.css         → estilos globais, scrollbar, foco, reduced-motion
components/
  Header.tsx           → header fixo com blur ao rolar + menu mobile
  Hero.tsx              → seção inicial
  About.tsx              → seção "Sobre mim"
  Stacks.tsx              → seção de tecnologias
  ProjectCard.tsx          → card de projeto reutilizável
  Projects.tsx               → seção de projetos + card do ProServ
  Education.tsx                → formação + idiomas
  Growth.tsx                     → evolução constante + objetivo profissional
  Contact.tsx                     → seção de contato com botões funcionais
  Footer.tsx                       → rodapé
  ui/
    Section.tsx                    → wrapper de espaçamento das seções
    SectionHeading.tsx               → título padrão de seção
    Reveal.tsx                         → scroll reveal sutil (respeita reduced-motion)
data/
  contacts.ts       → todos os links e contatos (edite aqui para atualizar)
  projects.ts        → projetos (LC Burgers, Team Peixoto, ProServ)
  stacks.ts            → tecnologias por categoria
  education.ts           → formação, idiomas e áreas de evolução
  tech-icons.tsx           → mapa de nome de tecnologia → ícone
lib/
  utils.ts             → helper `cn` para classes condicionais
public/
  favicon.svg
  robots.txt
```

Para atualizar qualquer informação (novo projeto, novo link, nova tecnologia), edite apenas os arquivos em `data/` — o layout não precisa ser tocado.

## Tecnologias

- Next.js 14 (App Router)
- React 18 + TypeScript
- Tailwind CSS
- lucide-react (ícones de UI)
- react-icons (ícones de marca das tecnologias)

## Rodando localmente

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Build de produção

```bash
npm run build
npm run start
```

## Deploy na Vercel

1. Suba o projeto para um repositório no GitHub (crie um repo novo e faça `git push`).
2. Acesse [vercel.com](https://vercel.com) e clique em **Add New → Project**.
3. Importe o repositório do GitHub.
4. A Vercel detecta automaticamente que é um projeto Next.js — não é necessário configurar nada manualmente.
5. Clique em **Deploy**.

Alternativa via CLI:

```bash
npm i -g vercel
vercel
```

## Antes de publicar

- Troque `siteUrl` em `app/layout.tsx` pelo domínio final (usado no Open Graph e no metadata SEO).
- Se quiser trocar o favicon, substitua `public/favicon.svg`.
- Quando tiver screenshots reais dos projetos, adicione as imagens em `public/projects/` e troque o placeholder em `components/ProjectCard.tsx` por um `<Image />` do Next.js.
