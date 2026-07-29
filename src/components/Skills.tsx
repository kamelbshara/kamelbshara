"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  const { content, ui } = useLanguage();
  const { skills } = content;

  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <SectionHeading eyebrow={ui.skills.eyebrow} title={ui.skills.title} />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <div
            key={group.title}
            className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6"
          >
            <div className="mb-3 flex items-center justify-between">
              <h3 className="font-semibold text-[var(--color-ink)]">{group.title}</h3>
              <span className="font-mono text-xs text-[var(--color-accent)]">{group.level}%</span>
            </div>

            <div className="mb-4 h-2 w-full overflow-hidden rounded-full bg-[var(--color-surface-2)]">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${group.level}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: i * 0.1, ease: "easeOut" }}
                className="h-full rounded-full bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-accent-2)]"
              />
            </div>

            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs text-[var(--color-muted)]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
