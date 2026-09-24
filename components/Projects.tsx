import { Hammer } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { projects, proServ } from "@/data/projects";

export default function Projects() {
  return (
    <Section id="projetos">
      <SectionHeading
        comment="projetos"
        title="Projetos"
        description="Alguns dos projetos que venho desenvolvendo e utilizando para colocar meus conhecimentos em prática."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <div id="proserv" className="mt-16 scroll-mt-24">
        <Reveal>
          <div className="overflow-hidden rounded-xl border border-accent/30 bg-gradient-to-br from-surface to-bg">
            <div className="grid gap-8 p-8 lg:grid-cols-[1fr_1.1fr] lg:p-10">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-bright">
                  <Hammer size={12} />
                  Em desenvolvimento
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-ink">
                  {proServ.name}
                </h3>
                <p className="mt-1 font-mono text-xs text-ink-faint">{proServ.category}</p>

                <p className="mt-4 leading-relaxed text-ink-muted">{proServ.description}</p>
                <p className="mt-3 leading-relaxed text-ink-muted">
                  O objetivo do ProServ é facilitar a contratação de profissionais como
                  eletricistas, pintores, encanadores e outros prestadores de serviços,
                  permitindo que clientes encontrem profissionais, solicitem serviços e
                  acompanhem suas solicitações em uma experiência simples e organizada.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {proServ.tech?.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-surface-line bg-bg px-2.5 py-1.5 text-xs text-ink-muted"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="font-mono text-xs text-ink-faint">funcionalidades planejadas</p>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {proServ.features?.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-ink-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-bright" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
