import { education, activities, interests } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="07 — Education" title="Education & beyond" />

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            Education
          </h3>
          <div className="space-y-4">
            {education.map((item) => (
              <div
                key={item.degree}
                className="flex items-center justify-between rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-4"
              >
                <div>
                  <p className="font-medium text-[var(--color-ink)]">{item.degree}</p>
                  <p className="text-sm text-[var(--color-muted)]">{item.org}</p>
                </div>
                <span className="font-mono text-xs text-[var(--color-accent)]">{item.period}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            Activities
          </h3>
          <ul className="mb-6 space-y-2">
            {activities.map((activity) => (
              <li key={activity} className="text-sm text-[var(--color-muted)]">
                {activity}
              </li>
            ))}
          </ul>

          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[var(--color-muted)]">
            Interests
          </h3>
          <div className="flex flex-wrap gap-2">
            {interests.map((interest) => (
              <span
                key={interest}
                className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-muted)]"
              >
                {interest}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
