"use client";

import { useState } from "react";
import { BrainCircuit, ExternalLink, Sparkles } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import type { Project } from "@/data/content";
import type { UiStrings } from "@/i18n/ui";
import SectionHeading from "./SectionHeading";

function ProjectCard({ project, ui }: { project: Project; ui: UiStrings }) {
  const [tab, setTab] = useState<"overview" | "features" | "stack">("overview");

  const tabLabels = {
    overview: ui.projects.overview,
    features: ui.projects.features,
    stack: ui.projects.stack,
  } as const;

  return (
    <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[var(--color-border)] p-6">
        <div>
          <div className="mb-2 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
              <Sparkles size={12} /> {ui.projects.statusLabels[project.status]}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-[var(--color-surface-2)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
              <BrainCircuit size={12} /> {ui.projects.aiPowered}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-[var(--color-ink)]">{project.name}</h3>
          <p className="mt-1 text-sm text-[var(--color-muted)]">{project.tagline}</p>
        </div>

        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-4 py-2 text-sm font-medium text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            {ui.projects.visit} <ExternalLink size={14} />
          </a>
        )}
      </div>

      <div className="flex gap-2 border-b border-[var(--color-border)] px-6 pt-4 text-sm">
        {(["overview", "features", "stack"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-t-lg px-3 pb-3 transition ${
              tab === t
                ? "border-b-2 border-[var(--color-accent)] text-[var(--color-ink)]"
                : "text-[var(--color-muted)] hover:text-[var(--color-ink)]"
            }`}
          >
            {tabLabels[t]}
          </button>
        ))}
      </div>

      <div className="p-6">
        {tab === "overview" && (
          <div>
            <p className="mb-3 text-sm leading-relaxed text-[var(--color-muted)]">
              {project.description}
            </p>
            <p className="text-xs font-mono text-[var(--color-accent)]">{project.role}</p>
          </div>
        )}

        {tab === "features" && (
          <ul className="space-y-2">
            {project.features.map((feature, i) => (
              <li key={i} className="flex gap-2 text-sm text-[var(--color-muted)]">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {tab === "stack" && (
          <ul className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-muted)]"
              >
                {tech}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  const { content, ui } = useLanguage();
  const { projects } = content;

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow={ui.projects.eyebrow} title={ui.projects.title} />

      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} ui={ui} />
        ))}

        <div className="rounded-2xl border border-dashed border-[var(--color-border)] p-8 text-center text-sm text-[var(--color-muted)]">
          {ui.projects.moreComing}
        </div>
      </div>
    </section>
  );
}
