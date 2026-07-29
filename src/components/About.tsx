import { Brain, GraduationCap, Target } from "lucide-react";
import { profile } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="01 — About" title="From the classroom to the codebase" />

      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="text-lg leading-relaxed text-[var(--color-muted)]">{profile.vision}</p>

          <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
            Six years of teaching mathematics and leading school operations in the UAE taught me
            how to break down hard problems, read data, and design for real people under real
            constraints. I&apos;m now channeling that same thinking into AI and software — most
            recently by designing and building an AI-powered school platform from scratch,
            end to end.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <Brain className="mb-2 text-[var(--color-accent)]" size={20} />
              <p className="text-sm text-[var(--color-muted)]">
                AI-driven analytics &amp; prompt engineering
              </p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <GraduationCap className="mb-2 text-[var(--color-accent)]" size={20} />
              <p className="text-sm text-[var(--color-muted)]">
                8 years teaching &amp; school leadership
              </p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <Target className="mb-2 text-[var(--color-accent)]" size={20} />
              <p className="text-sm text-[var(--color-muted)]">
                Ships real products, not just prototypes
              </p>
            </div>
          </div>
        </div>

        <div className="md:col-span-2">
          <div className="h-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
            <h3 className="mb-4 font-semibold text-[var(--color-ink)]">What I&apos;m aiming for</h3>
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
