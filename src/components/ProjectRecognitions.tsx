import { Building2 } from "lucide-react";
import { projectRecognitions } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function ProjectRecognitions() {
  return (
    <section id="project-recognitions" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="04 — Project Recognitions" title="Awarded projects I've been part of" />

      <p className="mb-8 max-w-2xl text-sm text-[var(--color-muted)]">
        These recognitions were awarded to the project itself, not to me personally — I was part
        of its construction team, not the recipient of a personal award.
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {projectRecognitions.map((item, i) => (
          <div
            key={i}
            className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
          >
            <div className="rounded-full bg-[var(--color-surface-2)] p-2">
              <Building2 className="text-[var(--color-accent)]" size={20} />
            </div>
            <div>
              <div className="mb-1 flex flex-wrap items-center gap-3">
                <h3 className="font-semibold text-[var(--color-ink)]">{item.title}</h3>
                <span className="font-mono text-xs text-[var(--color-accent)]">{item.year}</span>
              </div>
              <p className="text-sm text-[var(--color-muted)]">{item.project}</p>
              <p className="text-xs text-[var(--color-muted)]">{item.org}</p>
              <p className="mt-2 font-mono text-xs text-[var(--color-accent)]">{item.myRole}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
