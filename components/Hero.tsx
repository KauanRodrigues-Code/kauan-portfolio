import { ArrowRight, Github, Instagram, Linkedin } from "lucide-react";
import { contacts } from "@/data/contacts";

const badges = ["Engenharia de Software", "Web Development", "Full Stack", "Open to Opportunities"];

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-6 pt-28 sm:px-10 lg:px-16"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff08 1px, transparent 1px), linear-gradient(to bottom, #ffffff08 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 90%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-accent/25 blur-[140px]"
      />

      <div className="relative mx-auto grid w-full max-w-content items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="font-mono text-sm text-accent-bright">Olá, meu nome é</p>

          <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-ink sm:text-5xl lg:text-6xl">
            {contacts.name}
          </h1>

          <p className="mt-4 text-balance font-display text-xl text-ink-muted sm:text-2xl">
            Transformando ideias em experiências digitais.
          </p>

          <p className="mt-6 max-w-xl text-balance leading-relaxed text-ink-muted">
            Estudante de Engenharia de Software, desenvolvendo projetos reais e evoluindo
            constantemente em tecnologia, desenvolvimento web e software.
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-surface-line bg-surface px-3.5 py-1.5 text-xs text-ink-muted"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projetos"
              className="group inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-bright"
            >
              Ver meus projetos
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 rounded-lg border border-surface-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent-bright/60 hover:text-accent-bright"
            >
              Entrar em contato
            </a>
          </div>

          <div className="mt-10 flex items-center gap-5">
            <a
              href={contacts.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-ink-faint transition-colors hover:text-ink"
            >
              <Instagram size={19} />
            </a>
            <a
              href={contacts.github.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-ink-faint transition-colors hover:text-ink"
            >
              <Github size={19} />
            </a>
            <a
              href={contacts.linkedin.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-ink-faint transition-colors hover:text-ink"
            >
              <Linkedin size={19} />
            </a>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="rounded-xl border border-surface-line bg-surface/60 shadow-2xl shadow-black/40 backdrop-blur-sm">
            <div className="flex items-center gap-1.5 border-b border-surface-line px-4 py-3">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-3 font-mono text-xs text-ink-faint">sobre-mim.ts</span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed text-ink-muted">
              <code>
                <span className="text-accent-bright">const</span> dev = {"{"}
                {"\n"}  nome: <span className="text-emerald-300">&quot;Kauan Rodrigues&quot;</span>,
                {"\n"}  curso: <span className="text-emerald-300">&quot;Engenharia de Software&quot;</span>,
                {"\n"}  semestre: <span className="text-sky-300">2</span>,
                {"\n"}  foco: [<span className="text-emerald-300">&quot;web&quot;</span>, <span className="text-emerald-300">&quot;fullstack&quot;</span>, <span className="text-emerald-300">&quot;produto&quot;</span>],
                {"\n"}  status: <span className="text-emerald-300">&quot;buscando 1ª oportunidade&quot;</span>,
                {"\n"}  disponivel: <span className="text-accent-bright">true</span>,
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
