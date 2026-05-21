import Link from "next/link";
import { ArrowRight, Award, FileText } from "lucide-react";
import { PageFrame } from "@/components/PageFrame";
import { AnimatedLetters } from "@/components/AnimatedLetters";
import { HtmlTag } from "@/components/HtmlTag";
import { SkillCube } from "@/components/SkillCube";
import { BentoCard, BentoLabel } from "@/components/BentoCard";
import { profile, experience, projects, hobbies } from "@/lib/content";
import { withBasePath } from "@/lib/asset";

export default function HomePage() {
  const stackline = experience.find((e) => e.slug === "stackline")!;
  const grapeData = projects.find((p) => p.slug === "grape-data")!;

  return (
    <PageFrame>
      {/* Hero */}
      <section className="pt-6 sm:pt-10 pb-10 sm:pb-14 max-w-7xl">
        <HtmlTag tag="h1" />
        <h1
          className="font-[var(--font-display)] text-4xl sm:text-7xl md:text-8xl leading-[0.95] tracking-[-0.02em] my-2"
          aria-label={profile.name + ","}
        >
          <AnimatedLetters text="Tony Chan," highlightLast />
        </h1>
        <HtmlTag tag="h1" closing />

        <p className="mt-6 sm:mt-8 max-w-2xl text-base sm:text-lg text-[var(--color-mist)] leading-relaxed">
          <span className="text-[var(--color-brand)]">
            {profile.title.toLowerCase()}
          </span>{" "}
          at <span className="text-white">{profile.company}</span> · UC Berkeley
          Data Science &apos;25 · {profile.location}.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Link href="/projects" className="flat-button">
            View projects
          </Link>
          <Link
            href={`mailto:${profile.email}`}
            className="text-[var(--color-mist)] hover:text-white text-sm font-[var(--font-mono)] tracking-wide transition-colors inline-flex items-center gap-1.5"
          >
            Email me <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {/* Bento grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-7xl pb-12">
        {/* Featured impact card — spans 2 cols on lg */}
        <BentoCard className="sm:col-span-2 lg:col-span-2 flex flex-col justify-between min-h-[200px]">
          <BentoLabel>Weekly runtime saved · Stackline</BentoLabel>
          <div className="mt-3">
            <div className="flex items-baseline gap-2">
              <span className="font-[var(--font-display)] text-6xl sm:text-7xl font-medium text-[var(--color-brand)] leading-none tracking-[-0.03em]">
                700+
              </span>
              <span className="text-[var(--color-mist)] text-sm">hours</span>
            </div>
            <p className="mt-3 text-[var(--color-mist)] text-sm leading-relaxed max-w-md">
              {stackline.bullets[1]}
            </p>
          </div>
          <div className="mt-4 font-[var(--font-mono)] text-[10px] uppercase tracking-widest text-[var(--color-haze)]">
            airflow 1.10.x → mwaa 2.10.x
          </div>
        </BentoCard>

        {/* Interactive 3D cube — bigger size + taller card to fit rotation extent */}
        <BentoCard ornament className="lg:row-span-2 flex items-center justify-center min-h-[280px] sm:min-h-[360px]">
          <SkillCube size={190} />
        </BentoCard>

        {/* Award */}
        <BentoCard accent className="flex flex-col justify-between min-h-[140px]">
          <BentoLabel className="flex items-center gap-1.5">
            <Award size={11} aria-hidden /> Award · 2024
          </BentoLabel>
          <div>
            <div className="font-[var(--font-display)] text-2xl text-[var(--color-brand)] leading-tight">
              Cloud Computing
              <br />
              App Award
            </div>
            <p className="mt-2 text-xs text-[var(--color-mist)]">
              Data Science Discovery Symposium
            </p>
          </div>
        </BentoCard>

        {/* Featured project teaser */}
        <BentoCard className="flex flex-col justify-between min-h-[140px]">
          <BentoLabel className="flex items-center gap-1.5">
            <FileText size={11} aria-hidden /> Featured project
          </BentoLabel>
          <div>
            <div className="font-[var(--font-display)] text-2xl text-white leading-tight">
              {grapeData.title}
            </div>
            <p className="mt-2 text-xs text-[var(--color-mist)] line-clamp-2">
              {grapeData.summary}
            </p>
          </div>
          <Link
            href={`/projects#${grapeData.slug}`}
            className="mt-3 text-[10px] font-[var(--font-mono)] uppercase tracking-widest text-[var(--color-brand)] hover:opacity-80 transition-opacity inline-flex items-center gap-1"
          >
            View on projects <ArrowRight size={11} />
          </Link>
        </BentoCard>

        {/* CTA card */}
        <BentoCard
          accent
          className="sm:col-span-2 lg:col-span-2 flex items-center justify-between min-h-[100px]"
        >
          <div>
            <BentoLabel>Currently</BentoLabel>
            <div className="mt-2 font-[var(--font-display)] text-xl sm:text-2xl">
              Open to anything Data Science and Machine Learning.
            </div>
          </div>
          <Link
            href={`mailto:${profile.email}`}
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[var(--color-brand)]/40 text-[var(--color-brand)] hover:bg-[var(--color-brand)] hover:text-[var(--color-ink)] transition-colors text-sm font-[var(--font-mono)] uppercase tracking-wider"
          >
            Say hi <ArrowRight size={14} />
          </Link>
        </BentoCard>

        {/* Outside work — hobby icons */}
        <BentoCard className="sm:col-span-2 lg:col-span-3 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <BentoLabel>Outside work</BentoLabel>
            <Link
              href="/about"
              className="text-[10px] font-[var(--font-mono)] uppercase tracking-widest text-[var(--color-mist)] hover:text-[var(--color-brand)] transition-colors inline-flex items-center gap-1"
            >
              More on about <ArrowRight size={11} />
            </Link>
          </div>
          <div className="flex flex-wrap items-end justify-around sm:justify-around gap-x-4 gap-y-3">
            {hobbies.map((hobby) => (
              <div
                key={hobby.name}
                className="flex flex-col items-center gap-2 group"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center p-1.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={withBasePath(hobby.src)}
                    alt={hobby.name}
                    className="max-w-full max-h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                </div>
                <span className="font-[var(--font-mono)] text-[9px] uppercase tracking-widest text-[var(--color-mist)] group-hover:text-[var(--color-brand)] transition-colors">
                  {hobby.name}
                </span>
              </div>
            ))}
          </div>
        </BentoCard>
      </section>
    </PageFrame>
  );
}
