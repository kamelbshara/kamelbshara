"use client";

import { Brain, GraduationCap, Target } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { content, ui } = useLanguage();
  const { profile, stats } = content;

  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow={ui.about.eyebrow} title={ui.about.title} />

      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="text-lg leading-relaxed text-[var(--color-muted)]">{profile.vision}</p>

          <p className="mt-4 leading-relaxed text-[var(--color-muted)]">{ui.about.paragraph2}</p>

          <p className="mt-4 leading-relaxed text-[var(--color-muted)]">{ui.about.paragraph3}</p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              >
                <p className="text-xl font-bold text-gradient">{stat.value}</p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <Brain className="mb-2 text-[var(--color-accent)]" size={20} />
              <p className="text-sm text-[var(--color-muted)]">{ui.about.card1}</p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <GraduationCap className="mb-2 text-[var(--color-accent)]" size={20} />
              <p className="text-sm text-[var(--color-muted)]">{ui.about.card2}</p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <Target className="mb-2 text-[var(--color-accent)]" size={20} />
              <p className="text-sm text-[var(--color-muted)]">{ui.about.card3}</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <h3 className="mb-4 font-semibold text-[var(--color-ink)]">{ui.about.aimingFor}</h3>
            <ul className="space-y-4">
              {profile.objectives.map((objective, i) => (
                <li key={i} className="flex gap-3 text-sm text-[var(--color-muted)]">
                  <span className="font-mono text-[var(--color-accent)]">0{i + 1}</span>
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
