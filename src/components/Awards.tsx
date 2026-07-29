import { Award as AwardIcon, Building2, User } from "lucide-react";
import { awards } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function Awards() {
  return (
    <section id="awards" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="03 — Awards" title="Recognition along the way" />

      <div className="grid gap-4 sm:grid-cols-2">
        {awards.map((award, i) => {
          const isPersonal = award.kind === "Personal Award";
          const KindIcon = isPersonal ? User : Building2;
          return (
            <div
              key={i}
              className="flex items-start gap-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
            >
              <div className="rounded-full bg-[var(--color-surface-2)] p-2">
                <AwardIcon className="text-[var(--color-accent)]" size={20} />
              </div>
              <div>
                <div className="mb-1 flex flex-wrap items-center gap-3">
                  <h3 className="font-semibold text-[var(--color-ink)]">{award.title}</h3>
                  <span className="font-mono text-xs text-[var(--color-accent)]">{award.year}</span>
                </div>
                <span className="mb-2 inline-flex items-center gap-1 rounded-full bg-[var(--color-surface-2)] px-2.5 py-0.5 text-xs text-[var(--color-muted)]">
                  <KindIcon size={12} />
                  {award.kind}
                </span>
                <p className="mt-1 text-sm text-[var(--color-muted)]">{award.org}</p>
                {award.titleAr && (
                  <p dir="rtl" className="mt-1 text-sm text-[var(--color-muted)]">
                    {award.titleAr}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
