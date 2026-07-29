"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { experience } from "@/data/content";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow="02 — Experience" title="Where I've built and led" />

      <div className="space-y-4">
        {experience.map((job, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] transition"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <div>
                  <h3 className="font-semibold text-[var(--color-ink)]">{job.role}</h3>
                  <p className="text-sm text-[var(--color-muted)]">{job.org}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hidden font-mono text-xs text-[var(--color-accent)] sm:block">
                    {job.period}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-[var(--color-muted)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </div>
              </button>

              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden px-6 pb-6"
                >
                  <p className="mb-3 font-mono text-xs text-[var(--color-accent)] sm:hidden">
                    {job.period}
                  </p>
                  <ul className="space-y-2">
                    {job.bullets.map((bullet, j) => (
                      <li key={j} className="flex gap-2 text-sm text-[var(--color-muted)]">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
