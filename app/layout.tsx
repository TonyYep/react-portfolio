import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Sidebar } from "@/components/Sidebar";
import { profile } from "@/lib/content";

// Local fonts loaded via next/font/local — handles basePath, preload, and
// font-display automatically. CSS variables exposed below.
const coolvetica = localFont({
  src: "../public/fonts/Coolvetica.woff2",
  variable: "--font-coolvetica",
  display: "swap",
});

const laBelleAurore = localFont({
  src: "../public/fonts/LaBelleAurore.woff2",
  variable: "--font-la-belle-aurore",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tonyyep.dev"),
  title: {
    default: `${profile.name} — ${profile.title} @ ${profile.company}`,
    template: `%s — ${profile.name}`,
  },
  description: profile.tagline,
  authors: [{ name: profile.name }],
  openGraph: {
    title: `${profile.name} — ${profile.title} @ ${profile.company}`,
    description: profile.tagline,
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: `${profile.name} · Portfolio`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${coolvetica.variable} ${laBelleAurore.variable}`}
    >
      <body>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
