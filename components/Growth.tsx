import { ArrowRight } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { growthAreas } from "@/data/education";

export default function Growth() {
  return (
    <Section>
      <SectionHeading
        comment="evolução"
        title="Em constante evolução"
        description="Além da graduação, venho estudando e desenvolvendo projetos próprios para transformar conhecimento teórico em experiência prática."
      />

      <Reveal delay={100} className="mt-10 flex flex-wrap gap-2.5">
        {growthAreas.map((area) => (
          <span
            key={area}
            className="rounded-full border border-surface-line bg-surface px-4 py-2 text-sm text-ink-muted"
          >
            {area}
          </span>
        ))}
      </Reveal>

      <Reveal delay={160} className="mt-16">
        <div className="rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-8 sm:p-10">
          <p className="font-mono text-xs text-accent-bright">// objetivo</p>
          <h3 className="mt-3 font-display text-2xl font-semibold text-ink sm:text-3xl">
            Buscando minha primeira oportunidade
          </h3>
          <p className="mt-4 max-w-2xl text-balance leading-relaxed text-ink-muted">
            Estou em busca da minha primeira oportunidade profissional na área de
            tecnologia, onde possa aplicar meus conhecimentos, aprender com profissionais
            experientes e contribuir com projetos reais.
          </p>
          <a
            href="#contato"
            className="mt-7 inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-bright"
          >
            Vamos conversar
            <ArrowRight size={16} />
          </a>
        </div>
      </Reveal>
    </Section>
  );
}
