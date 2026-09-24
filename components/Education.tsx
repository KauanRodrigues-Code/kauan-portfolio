import { GraduationCap } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { education, languages } from "@/data/education";

export default function Education() {
  return (
    <Section id="formacao" soft>
      <SectionHeading comment="formação" title="Formação & idiomas" />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr]">
        <Reveal>
          <div className="flex h-full gap-5 rounded-xl border border-surface-line bg-surface p-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-surface-line bg-bg text-accent-bright">
              <GraduationCap size={20} />
            </div>
            <div>
              <p className="font-mono text-xs text-accent-bright">atualmente cursando</p>
              <h3 className="mt-1.5 font-display text-lg font-semibold text-ink">
                {education.course}
              </h3>
              <p className="mt-1 text-sm text-ink-muted">{education.institution}</p>
              <p className="mt-4 text-sm text-ink-muted">{education.status}</p>
              <p className="mt-1 text-sm text-ink-faint">{education.expected}</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="h-full rounded-xl border border-surface-line bg-surface p-6">
            <p className="font-mono text-xs text-ink-faint">idiomas</p>
            <div className="mt-4 space-y-5">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex items-baseline justify-between">
                    <span className="text-sm font-medium text-ink">{lang.name}</span>
                    <span className="text-xs text-ink-muted">{lang.level}</span>
                  </div>
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-bg">
                    <div
                      className="h-full rounded-full bg-accent-bright"
                      style={{ width: `${lang.progress}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
