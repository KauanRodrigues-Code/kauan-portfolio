import { Github, Instagram, Linkedin, Mail, MessageCircle, Phone } from "lucide-react";
import Section from "@/components/ui/Section";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { contacts } from "@/data/contacts";

const channels = [
  {
    label: "Instagram",
    value: contacts.instagram.handle,
    href: contacts.instagram.url,
    icon: Instagram,
  },
  {
    label: "GitHub",
    value: contacts.github.handle,
    href: contacts.github.url,
    icon: Github,
  },
  {
    label: "LinkedIn",
    value: contacts.linkedin.handle,
    href: contacts.linkedin.url,
    icon: Linkedin,
  },
  {
    label: "E-mail",
    value: contacts.email,
    href: `mailto:${contacts.email}`,
    icon: Mail,
  },
  {
    label: "Telefone",
    value: contacts.phoneDisplay,
    href: `tel:+${contacts.whatsapp.number}`,
    icon: Phone,
  },
];

export default function Contact() {
  return (
    <Section id="contato" soft>
      <SectionHeading
        comment="contato"
        title="Vamos conversar?"
        description="Tem um projeto, oportunidade ou ideia? Entre em contato comigo."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          <div className="grid gap-3 sm:grid-cols-2">
            {channels.map((channel) => (
              <a
                key={channel.label}
                href={channel.href}
                target={channel.href.startsWith("http") ? "_blank" : undefined}
                rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3.5 rounded-xl border border-surface-line bg-surface p-4 transition-colors hover:border-accent-bright/50"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-surface-line bg-bg text-accent-bright">
                  <channel.icon size={17} />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-ink-faint">{channel.label}</span>
                  <span className="block truncate text-sm text-ink">{channel.value}</span>
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex h-full flex-col justify-center gap-4 rounded-xl border border-accent/30 bg-gradient-to-br from-accent/10 to-transparent p-8">
            <p className="font-mono text-xs text-accent-bright">resposta rápida</p>
            <p className="text-balance leading-relaxed text-ink-muted">
              A forma mais rápida de falar comigo é pelo WhatsApp ou e-mail. Costumo
              responder em pouco tempo.
            </p>
            <div className="mt-2 flex flex-col gap-3 sm:flex-row">
              <a
                href={contacts.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-bright"
              >
                <MessageCircle size={16} />
                Chamar no WhatsApp
              </a>
              <a
                href={`mailto:${contacts.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-surface-line px-5 py-3 text-sm font-medium text-ink transition-colors hover:border-accent-bright/60 hover:text-accent-bright"
              >
                <Mail size={16} />
                Enviar e-mail
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
