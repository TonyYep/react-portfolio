import type { Metadata } from "next";
import { Linkedin, Github } from "lucide-react";
import { PageFrame } from "@/components/PageFrame";
import { AnimatedLetters } from "@/components/AnimatedLetters";
import { HtmlTag } from "@/components/HtmlTag";
import { BentoCard, BentoLabel } from "@/components/BentoCard";
import { profile, education, skills, hobbies } from "@/lib/content";
import { withBasePath } from "@/lib/asset";

export const metadata: Metadata = {
  title: "About",
  description: `About ${profile.name} — ${profile.title} at ${profile.company}.`,
};

export default function AboutPage() {
  return (
    <PageFrame>
      <section className="pt-6 sm:pt-10 pb-8 max-w-7xl">
        <HtmlTag tag="h1" />
        <h1 className="font-[var(--font-display)] text-4xl sm:text-6xl tracking-tight my-1">
          <AnimatedLetters text="About me." highlightLast />
        </h1>
        <HtmlTag tag="h1" closing />
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-3 gap-3 max-w-7xl">
        {/* Bio */}
        <BentoCard className="lg:col-span-2">
          <BentoLabel>Bio</BentoLabel>
          <div className="mt-4 space-y-4 text-[var(--color-mist)] leading-relaxed">
            <p>
              I&apos;m Tony — a data analyst at {profile.company} working on
              forecasting, pipelines, and clustering systems. I earned my B.A.
              in Data Science from UC Berkeley in May 2025, with previous
              coursework in Financial Mathematics and Statistics (Honors) at
              UC Santa Barbara.
            </p>
            <p>
              My day-to-day spans Python, Scala/Spark, SQL, and the AWS data
              stack — heavy use of MWAA (Airflow), Redshift, EMR, Batch, and S3.
              The work I care about most is making slow infrastructure fast and
              giving forecasting systems room to breathe.
            </p>
            <p>
              Outside work I play golf and pickleball, climb, lion dance with
              Mak Fai and Cal VSA Lion Dance, and read peer-reviewed papers
              when something catches my eye.
            </p>
          </div>
        </BentoCard>

        {/* Get in touch — contact + interested roles */}
        <BentoCard>
          <BentoLabel>Get in touch</BentoLabel>
          <dl className="mt-4 space-y-3 text-sm">
            <div className="flex justify-between gap-3">
              <dt className="text-[var(--color-haze)]">Based</dt>
              <dd className="text-white text-right">{profile.location}</dd>
            </div>
            <div className="flex justify-between gap-3 items-baseline">
              <dt className="text-[var(--color-haze)]">Email</dt>
              <dd className="text-right">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[var(--color-brand)] hover:opacity-80 text-xs break-all"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
          </dl>

          <div className="mt-5">
            <div className="font-[var(--font-mono)] text-[10px] tracking-widest uppercase text-[var(--color-haze)] mb-2">
              Open to
            </div>
            <div className="flex flex-wrap gap-1.5">
              {profile.interestedRoles.map((role) => (
                <span
                  key={role}
                  className="inline-block px-2 py-0.5 rounded-md bg-[var(--color-brand)]/10 border border-[var(--color-brand)]/20 text-[var(--color-brand)] text-[11px] font-[var(--font-mono)] tracking-wide"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center gap-2">
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-white/10 hover:border-[var(--color-brand)]/40 hover:text-[var(--color-brand)] text-xs text-[var(--color-mist)] transition-colors"
            >
              <Linkedin size={12} /> LinkedIn
            </a>
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-white/10 hover:border-[var(--color-brand)]/40 hover:text-[var(--color-brand)] text-xs text-[var(--color-mist)] transition-colors"
            >
              <Github size={12} /> GitHub
            </a>
          </div>
        </BentoCard>

        {/* Outside work — custom hobby images */}
        <BentoCard className="lg:col-span-3">
          <BentoLabel>Outside work</BentoLabel>
          <div className="mt-5 flex flex-wrap justify-center sm:justify-start gap-x-6 sm:gap-x-10 gap-y-5">
            {hobbies.map((hobby) => (
              <div
                key={hobby.name}
                className="flex flex-col items-center gap-3 group w-20 sm:w-24"
              >
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center rounded-xl bg-white/[0.02] border border-white/[0.06] group-hover:border-[var(--color-brand)]/30 transition-colors p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={withBasePath(hobby.src)}
                    alt={hobby.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="font-[var(--font-mono)] text-[10px] uppercase tracking-widest text-[var(--color-mist)] group-hover:text-[var(--color-brand)] transition-colors text-center">
                  {hobby.name}
                </span>
              </div>
            ))}
          </div>
        </BentoCard>

        {/* Education */}
        {education.map((ed) => (
          <BentoCard key={ed.school} className="lg:col-span-3">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <div>
                <div className="font-[var(--font-display)] text-xl sm:text-2xl text-white">
                  {ed.school}
                </div>
                <div className="text-sm text-[var(--color-brand)] mt-1">
                  {ed.degree}
                </div>
              </div>
              <div className="font-[var(--font-mono)] text-xs text-[var(--color-haze)] uppercase tracking-wider">
                {ed.dates}
              </div>
            </div>
            <p className="mt-3 text-sm text-[var(--color-mist)] leading-relaxed">
              {ed.emphasis}
            </p>
            {ed.activities.length > 0 && (
              <div className="mt-4">
                <BentoLabel>Activities</BentoLabel>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {ed.activities.map((a) => (
                    <span
                      key={a}
                      className="text-xs px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.06] text-[var(--color-mist)]"
                    >
                      {a}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {ed.coursework.length > 0 && (
              <div className="mt-4">
                <BentoLabel>Coursework</BentoLabel>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {ed.coursework.map((c) => (
                    <span
                      key={c}
                      className="text-xs px-2.5 py-1 rounded-md bg-[var(--color-brand)]/[0.06] border border-[var(--color-brand)]/20 text-[var(--color-brand)]/90"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </BentoCard>
        ))}

        {/* Skills grid */}
        <BentoCard className="lg:col-span-3">
          <BentoLabel>Stack & methods</BentoLabel>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <div className="font-[var(--font-mono)] text-[10px] uppercase tracking-[0.18em] text-[var(--color-brand-soft)] mb-2">
                  {category.replace(/([A-Z])/g, " $1")}
                </div>
                <ul className="space-y-1 text-sm text-[var(--color-mist)]">
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </BentoCard>
      </section>
    </PageFrame>
  );
}
