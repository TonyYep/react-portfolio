import type { Metadata } from "next";
import { ExternalLink, Award } from "lucide-react";
import { PageFrame } from "@/components/PageFrame";
import { AnimatedLetters } from "@/components/AnimatedLetters";
import { HtmlTag } from "@/components/HtmlTag";
import { BentoCard } from "@/components/BentoCard";
import { projects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected projects in data science and machine learning.",
};

export default function ProjectsPage() {
  return (
    <PageFrame>
      <section className="pt-6 sm:pt-10 pb-8 max-w-7xl">
        <HtmlTag tag="h1" />
        <h1 className="font-[var(--font-display)] text-4xl sm:text-6xl tracking-tight my-1">
          <AnimatedLetters text="Projects." highlightLast />
        </h1>
        <HtmlTag tag="h1" closing />
        <p className="mt-4 text-[var(--color-mist)] max-w-2xl">
          Selected work from research, hackathons, and competitions.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl pb-12">
        {projects.map((p) => (
          <BentoCard
            key={p.slug}
            id={p.slug}
            className="scroll-mt-20 flex flex-col"
          >
            {p.award && (
              <div className="inline-flex items-center gap-1.5 self-start px-2.5 py-1 mb-3 rounded-md bg-[var(--color-brand)]/[0.08] border border-[var(--color-brand)]/30 text-[10px] text-[var(--color-brand)] font-[var(--font-mono)] uppercase tracking-widest">
                <Award size={11} aria-hidden />
                Award
              </div>
            )}

            <h2 className="font-[var(--font-display)] text-2xl sm:text-3xl text-white tracking-tight leading-tight">
              {p.title}
            </h2>
            <p className="mt-1 text-xs text-[var(--color-brand-soft)] font-[var(--font-mono)] uppercase tracking-wider">
              {p.subtitle}
            </p>

            {p.award && (
              <p className="mt-2 text-xs text-[var(--color-brand)]/80 italic">
                {p.award}
              </p>
            )}

            <p className="mt-4 text-sm text-[var(--color-mist)] leading-relaxed flex-1">
              {p.summary}
            </p>

            <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-baseline gap-2">
              <span className="font-[var(--font-display)] text-3xl text-[var(--color-brand)] tracking-tight">
                {p.metric.value}
              </span>
              <span className="text-xs text-[var(--color-mist)]">
                {p.metric.label}
              </span>
            </div>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.map((s) => (
                <span
                  key={s}
                  className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[var(--color-mist)] font-[var(--font-mono)]"
                >
                  {s}
                </span>
              ))}
            </div>

            {p.links.length > 0 && (
              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
                {p.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-[var(--font-mono)] uppercase tracking-widest text-[var(--color-brand)] hover:opacity-80 transition-opacity group/link"
                    aria-label={link.label + " (opens in new tab)"}
                  >
                    {link.label}
                    <ExternalLink
                      size={12}
                      className="transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
                      aria-hidden
                    />
                  </a>
                ))}
              </div>
            )}
          </BentoCard>
        ))}
      </section>
    </PageFrame>
  );
}
