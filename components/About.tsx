import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const points = [
  "Interfaces e experiência de usuário",
  "APIs e autenticação",
  "Bancos de dados",
  "Integração de serviços e deploy",
];

export default function About() {
  return (
    <Section id="sobre">
      <SectionHeading comment="sobre" title="Sobre mim" />

      <div className="mt-12 grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        <Reveal delay={80} className="space-y-5 text-balance leading-relaxed text-ink-muted">
          <p>
            Sou estudante do 2º semestre de Engenharia de Software, com foco em
            desenvolvimento web e construção de aplicações completas.
          </p>
          <p>
            Venho desenvolvendo projetos pessoais e acadêmicos utilizando tecnologias
            modernas de front-end e back-end, buscando transformar ideias em aplicações
            funcionais, organizadas e com boa experiência de usuário.
          </p>
          <p>
            Tenho experiência prática com desenvolvimento de interfaces, APIs,
            autenticação, bancos de dados, integração de serviços e deploy.
          </p>
          <p>
            Atualmente estou buscando minha primeira oportunidade profissional na área
            de tecnologia, enquanto continuo evoluindo minhas habilidades e construindo
            projetos que representem minha evolução como desenvolvedor.
          </p>
        </Reveal>

        <Reveal delay={160}>
          <div className="rounded-xl border border-surface-line bg-surface p-6">
            <p className="font-mono text-xs text-ink-faint">experiência prática com</p>
            <ul className="mt-4 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm text-ink-muted">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-bright" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
