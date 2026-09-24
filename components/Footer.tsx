import { Github, Instagram, Linkedin } from "lucide-react";
import { contacts } from "@/data/contacts";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-surface-line px-6 py-10 sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-content flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
        <div>
          <p className="font-display text-sm font-semibold text-ink">{contacts.name}</p>
          <p className="mt-1 text-xs text-ink-faint">
            Desenvolvido por {contacts.name} · {year}
          </p>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={contacts.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <Instagram size={17} />
          </a>
          <a
            href={contacts.github.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <Github size={17} />
          </a>
          <a
            href={contacts.linkedin.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-ink-faint transition-colors hover:text-ink"
          >
            <Linkedin size={17} />
          </a>
        </div>
      </div>
    </footer>
  );
}
