"use client";

import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
  const { content, ui } = useLanguage();
  const { profile } = content;

  return (
    <footer className="border-t border-[var(--color-border)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 text-sm text-[var(--color-muted)] sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. {ui.footer.builtWith}
        </p>
        <p>{profile.languages}</p>
      </div>
    </footer>
  );
}
