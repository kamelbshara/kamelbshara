import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import CircuitBackground from "@/components/CircuitBackground";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://kamelbshara.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kamel Bshara — Math Teacher & AI / EdTech Builder",
  description:
    "Kamel Bshara: mathematics teacher and school leader in the UAE turned AI & EdTech builder. Explore my experience, skills, and the AI-powered platforms I've built for education.",
  icons: { icon: "/brand.jpg" },
  keywords: [
    "Kamel Bshara",
    "AI teacher",
    "EdTech",
    "Math teacher UAE",
    "AI developer",
    "Education technology",
    "Prompt engineering",
  ],
  openGraph: {
    title: "Kamel Bshara — Math Teacher & AI / EdTech Builder",
    description:
      "Mathematics teacher and school leader turned AI & EdTech builder. See the AI-powered platforms I've built for education.",
    url: siteUrl,
    siteName: "Kamel Bshara",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kamel Bshara — Math Teacher & AI / EdTech Builder",
    description:
      "Mathematics teacher and school leader turned AI & EdTech builder. See the AI-powered platforms I've built for education.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[var(--color-bg)] font-sans antialiased">
        <LanguageProvider>
          <CircuitBackground />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
