import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { stackCategories } from "@/data/stacks";
import { TechIcon } from "@/data/tech-icons";

export default function Stacks() {
  return (
    <Section id="stacks" soft>
      <SectionHeading
        comment="stacks"
        title="Tecnologias que utilizo"
        description="Tecnologias e ferramentas que venho aplicando em projetos reais, organizadas por área."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {stackCategories.map((category, i) => (
          <Reveal key={category.title} delay={i * 60}>
            <div className="h-full rounded-xl border border-surface-line bg-surface p-6">
              <h3 className="font-display text-sm font-semibold text-ink">
                {category.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-1.5 rounded-lg border border-surface-line bg-bg px-2.5 py-1.5 text-xs text-ink-muted"
                  >
                    <TechIcon name={item} size={14} />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
