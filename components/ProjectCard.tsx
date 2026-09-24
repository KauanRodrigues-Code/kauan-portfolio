import { ArrowUpRight, Globe } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-surface-line bg-surface transition-colors hover:border-accent-bright/50">
      <div className="flex aspect-[16/10] items-center justify-center border-b border-surface-line bg-gradient-to-br from-surface-raised to-bg">
        <Globe size={34} className="text-ink-faint transition-colors group-hover:text-accent-bright" />
      </div>

      <div className="p-6">
        <p className="font-mono text-xs text-accent-bright">{project.category}</p>
        <h3 className="mt-2 font-display text-xl font-semibold text-ink">
          {project.name}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-muted">
          {project.description}
        </p>

        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-ink transition-colors hover:text-accent-bright"
          >
            Visitar projeto
            <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>
    </div>
  );
}
