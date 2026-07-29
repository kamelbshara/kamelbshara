import { Brain, GraduationCap, Target } from "lucide-react";
import { profile, stats } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="01 — About" title="From the classroom to the codebase" />

      <div className="grid gap-12 md:grid-cols-5">
        <div className="md:col-span-3">
          <p className="text-lg leading-relaxed text-[var(--color-muted)]">{profile.vision}</p>

          <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
            I started out as a civil engineer, spending 8 years managing construction and
            infrastructure projects across Saudi Arabia and the UAE — coordinating teams,
            controlling budgets and schedules, and solving on-site problems in real time. In
            2019 I moved into education, and for the past 7 years I&apos;ve taught mathematics
            in a UAE public school while also taking on 5 years of mid-leadership
            responsibility — running school operations, safety, and improvement planning
            alongside a full teaching load.
          </p>

          <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
            That combination — engineering discipline, classroom experience, and hands-on
            school administration — is what I now bring to AI and software. I&apos;m not
            experimenting from the outside: I&apos;ve built and shipped an AI-powered school
            platform end to end, along with several smaller AI and automation tools that solve
            real problems I&apos;ve faced myself as a teacher — generating exam questions,
            analyzing grades, and planning student follow-up.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4"
              >
                <p className="text-3xl font-bold text-gradient">{stat.value}+</p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <Brain className="mb-2 text-[var(--color-accent)]" size={20} />
              <p className="text-sm text-[var(--color-muted)]">
                AI-driven analytics &amp; prompt engineering
              </p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <GraduationCap className="mb-2 text-[var(--color-accent)]" size={20} />
              <p className="text-sm text-[var(--color-muted)]">
                Engineering discipline meets classroom experience
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
