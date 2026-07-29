"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const { content, ui } = useLanguage();
  const { profile } = content;

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % profile.roles.length);
    }, 2400);
    return () => clearInterval(id);
  }, [profile.roles.length]);

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-6"
    >
      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-sm text-[var(--color-accent)]"
          >
            {profile.location}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-4xl font-bold tracking-tight text-[var(--color-ink)] sm:text-6xl"
          >
            {ui.hero.greeting} {profile.name}.
          </motion.h1>

          <div className="mt-3 h-10 sm:h-12">
            <motion.p
              key={roleIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-gradient text-2xl font-semibold sm:text-3xl"
            >
              {profile.roles[roleIndex]}
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-muted)]"
          >
            {profile.vision}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {ui.hero.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)]/60 px-3 py-1 font-mono text-xs tracking-wide text-[var(--color-accent)]"
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href={profile.cvFile}
              download
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-[var(--color-bg)] transition hover:brightness-110"
            >
              <Download size={16} /> {ui.hero.downloadCv}
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] transition hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
            >
              <Mail size={16} /> {ui.hero.getInTouch}
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative lg:col-span-2"
        >
          <div className="absolute inset-0 rounded-3xl bg-[var(--color-accent)]/20 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-[var(--color-border)] shadow-2xl">
            <Image
              src="/brand.jpg"
              alt={ui.hero.imageAlt}
              width={1195}
              height={896}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label={ui.hero.scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--color-muted)] transition hover:text-[var(--color-accent)]"
      >
        <ArrowDown className="animate-bounce" size={22} />
      </a>
    </section>
  );
}
