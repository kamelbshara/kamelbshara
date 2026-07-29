"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { locale, toggleLocale, content, ui } = useLanguage();

  const links = [
    { href: "#about", label: ui.nav.about },
    { href: "#experience", label: ui.nav.experience },
    { href: "#awards", label: ui.nav.awards },
    { href: "#project-recognitions", label: ui.nav.recognitions },
    { href: "#skills", label: ui.nav.skills },
    { href: "#projects", label: ui.nav.projects },
    { href: "#education", label: ui.nav.education },
    { href: "#contact", label: ui.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--color-border)]/60 bg-[var(--color-bg)]/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-semibold tracking-tight text-[var(--color-ink)]">
          <Image
            src="/brand.jpg"
            alt={content.profile.name}
            width={32}
            height={32}
            className="h-8 w-8 rounded-full border border-[var(--color-border)] object-cover"
          />
          {content.profile.name}
        </a>

        <ul className="hidden gap-8 text-sm text-[var(--color-muted)] md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition hover:text-[var(--color-accent)]">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleLocale}
            className="flex overflow-hidden rounded-full border border-[var(--color-border)] text-xs font-semibold"
            aria-label="Toggle language"
          >
            <span
              className={`px-2.5 py-1 ${locale === "en" ? "bg-[var(--color-accent)] text-[var(--color-bg)]" : "text-[var(--color-muted)]"}`}
            >
              EN
            </span>
            <span
              className={`px-2.5 py-1 ${locale === "ar" ? "bg-[var(--color-accent)] text-[var(--color-bg)]" : "text-[var(--color-muted)]"}`}
            >
              AR
            </span>
          </button>

          <button
            className="text-[var(--color-ink)] md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={ui.nav.toggleMenu}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-[var(--color-border)]/60 px-6 pb-4 text-sm text-[var(--color-muted)] md:hidden">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-2 transition hover:text-[var(--color-accent)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
