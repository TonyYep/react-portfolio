import type { Metadata } from "next";
import { PageFrame } from "@/components/PageFrame";
import { AnimatedLetters } from "@/components/AnimatedLetters";
import { HtmlTag } from "@/components/HtmlTag";
import { BentoCard, BentoLabel } from "@/components/BentoCard";
import { experience } from "@/lib/content";

export const metadata: Metadata = {
  title: "Work",
  description: "Professional experience and roles.",
};

export default function WorkPage() {
  return (
    <PageFrame>
      <section className="pt-6 sm:pt-10 pb-8 max-w-7xl">
        <HtmlTag tag="h1" />
        <h1 className="font-[var(--font-display)] text-4xl sm:text-6xl tracking-tight my-1">
          <AnimatedLetters text="Work." highlightLast />
        </h1>
        <HtmlTag tag="h1" closing />
        <p className="mt-4 text-[var(--color-mist)] max-w-2xl">
          Three roles, all centered on building things that turn messy data into
          something useful.
        </p>
      </section>

      <section className="flex flex-col gap-3 max-w-7xl pb-12">
        {experience.map((role) => (
          <BentoCard key={role.slug}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <div className="font-[var(--font-display)] text-2xl sm:text-3xl text-white tracking-tight">
                  {role.company}
                </div>
                <div className="text-sm text-[var(--color-brand)] mt-1">
                  {role.role}
                </div>
              </div>
              <div className="font-[var(--font-mono)] text-xs text-[var(--color-haze)] uppercase tracking-widest">
                {role.dates}
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/[0.06]">
              <BentoLabel>Headline</BentoLabel>
              <div className="mt-1.5 text-[var(--color-brand)] text-sm">
                {role.headline}
              </div>
            </div>

            <ul className="mt-4 space-y-2.5">
              {role.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex gap-3 text-sm text-[var(--color-mist)] leading-relaxed"
                >
                  <span
                    className="mt-2 inline-block w-1 h-1 rounded-full bg-[var(--color-brand)] shrink-0"
                    aria-hidden
                  />
                  <span>{b}</span>
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {role.stack.map((s) => (
                <span
                  key={s}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-[var(--color-mist)] font-[var(--font-mono)]"
                >
                  {s}
                </span>
              ))}
            </div>
          </BentoCard>
        ))}
      </section>
    </PageFrame>
  );
}
