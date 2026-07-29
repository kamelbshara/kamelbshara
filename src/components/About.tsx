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
            My career started in civil engineering, managing construction and infrastructure
            projects across Saudi Arabia and the UAE from 2011 to 2019 — coordinating teams,
            controlling budgets and schedules, and solving on-site problems under real
            constraints. In 2019 I shifted into education, teaching mathematics in a UAE public
            school, and I&apos;ve held mid-leadership responsibility for school operations since
            2021.
          </p>

          <p className="mt-4 leading-relaxed text-[var(--color-muted)]">
            Today I&apos;m pointing that same problem-solving instinct at AI — teaching myself to
            design and ship AI-powered tools, from a full school intelligence platform to
            smaller apps that generate exam questions, analyze grades, and plan student
            follow-up. Every move across fields has meant picking up a new skill set fast and
            turning it into something that actually gets used.
          </p>

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
              <p className="text-sm text-[var(--color-muted)]">
                AI-driven analytics &amp; prompt engineering
              </p>
            </div>
            <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
              <GraduationCap className="mb-2 text-[var(--color-accent)]" size={20} />
              <p className="text-sm text-[var(--color-muted)]">
                Learns fast, applies it immediately
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
