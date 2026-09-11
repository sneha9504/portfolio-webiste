import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaBand, PageHeader, PageShell, Section, SectionHeading } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { skillGroups, technologies } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "The stack Sneha Wani works with day to day — frontend, backend, databases, and the tooling that gets it deployed.",
};

export default function SkillsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Skills"
        title="The stack I reach for,"
        highlight="end to end."
        description="Frontend, backend, data and deployment. The levels below reflect how much production work I have done with each, not how many tutorials I have watched."
      />

      <Section>
        <div className="grid gap-5 sm:grid-cols-2">
          {skillGroups.map(({ title, icon: Icon, blurb, items }) => (
            <div key={title} className="premium-card flex h-full flex-col p-6 sm:p-7">
              <div className="flex items-center gap-3.5">
                <span className="icon-tile size-11 sm:size-12">
                  <Icon className="size-5 sm:size-[22px]" aria-hidden="true" />
                </span>
                <h2 className="text-lg font-bold sm:text-xl">{title}</h2>
              </div>
              <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{blurb}</p>

              <ul className="mt-7 flex flex-col gap-5">
                {items.map(({ name, level }) => (
                  <li key={name}>
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-[15px] font-medium text-foreground">{name}</span>
                      <span className="text-xs font-bold tabular-nums text-muted-foreground">
                        {level}%
                      </span>
                    </div>
                    <div
                      role="meter"
                      aria-label={`${name} proficiency`}
                      aria-valuenow={level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuetext={`${level} percent`}
                      className="mt-2.5 h-2.5 w-full overflow-hidden rounded-full bg-muted shadow-[inset_0_1px_2px_color-mix(in_oklab,var(--brand-navy)_18%,transparent)]"
                    >
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,var(--brand-pink),var(--brand-purple))] shadow-[0_0_10px_-1px_color-mix(in_oklab,var(--brand-purple)_65%,transparent)] transition-[width] duration-500 ease-out"
                        style={{ width: `${level}%` }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Trusted technologies"
          title="Tools I use on real projects."
          description="A quick view of the libraries, languages and platforms that show up most often in my work."
        />

        <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {technologies.map(({ name, mark, accent }) => (
            <li key={name}>
              <div className="premium-card flex h-full min-h-[6.5rem] flex-col items-center justify-center gap-2.5 p-4 text-center">
                <span
                  aria-hidden="true"
                  className={`icon-tile size-10 text-lg font-bold ${accent}`}
                >
                  {mark}
                </span>
                <span className="text-sm font-medium text-muted-foreground">{name}</span>
              </div>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <div className="premium-card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div className="max-w-xl">
            <h2 className="text-lg font-bold sm:text-xl">Skills are easier to judge in context.</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
              Have a look at what these tools actually produced — the projects page breaks the work
              down by frontend, backend and full stack.
            </p>
          </div>
          <Button asChild variant="outline" size="lg" className="w-full shrink-0 cursor-pointer sm:w-auto">
            <Link href="/projects">
              Browse Projects <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>

      <CtaBand />
    </PageShell>
  );
}
