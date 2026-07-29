"use client";

import { Download, Mail, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { content, ui } = useLanguage();
  const { profile } = content;

  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow={ui.contact.eyebrow} title={ui.contact.title} />

      <div className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8">
        <p className="mb-8 max-w-xl leading-relaxed text-[var(--color-muted)]">{ui.contact.paragraph}</p>

        <div className="grid gap-4 sm:grid-cols-3">
          <a
            href={`mailto:${profile.email}`}
            className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <Mail size={18} /> {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s/g, "")}`}
            className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            <Phone size={18} /> {profile.phone}
          </a>
          <span className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] px-4 py-3 text-sm text-[var(--color-muted)]">
            <MapPin size={18} /> {profile.location}
          </span>
        </div>

        <a
          href={profile.cvFile}
          download
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-bg)] transition hover:brightness-110"
        >
          <Download size={16} /> {ui.contact.downloadCv}
        </a>
      </div>
    </section>
  );
}
