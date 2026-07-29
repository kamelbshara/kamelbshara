"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import * as contentEn from "@/data/content";
import * as contentAr from "@/data/content.ar";
import { ui, type Locale } from "./ui";

const content = { en: contentEn, ar: contentAr };

type LanguageContextValue = {
  locale: Locale;
  dir: "ltr" | "rtl";
  toggleLocale: () => void;
  content: typeof contentEn;
  ui: (typeof ui)["en"];
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "kamelbshara-locale";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "ar" || stored === "en") {
      // Reading a persisted preference after mount (SSR has no localStorage) —
      // an intentional one-time sync from an external store, not a render loop.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocale(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.title = `${content[locale].profile.name} — ${content[locale].profile.tagline}`;
    window.localStorage.setItem(STORAGE_KEY, locale);
  }, [locale]);

  const toggleLocale = () => setLocale((l) => (l === "en" ? "ar" : "en"));

  const value: LanguageContextValue = {
    locale,
    dir: locale === "ar" ? "rtl" : "ltr",
    toggleLocale,
    content: content[locale],
    ui: ui[locale],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within a LanguageProvider");
  return ctx;
}
