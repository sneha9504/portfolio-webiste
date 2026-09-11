import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

import { CtaBand, PageHeader, PageShell, Section, SectionHeading } from "@/components/site/page-shell";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { processSteps, stats, timeline } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "The roles, projects and delivery process behind Sneha Wani's work as a full-stack developer — from discovery to launch.",
};

export default function ExperiencePage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Experience"
        title="Years of shipping,"
        highlight="end to end."
        description="A look at where I have worked, the kind of problems I have solved, and the process I follow to take a product from a first conversation to a live release."
      />

      <Section>
        <SectionHeading
          eyebrow="Timeline"
          title="Where I have been"
          description="Each role pushed me further across the stack — from interfaces and components to APIs, data models and deployment."
        />

        <ol className="mt-8 space-y-6">
          {timeline.map((entry) => (
            <li key={`${entry.period}-${entry.role}`} className="relative pl-8 sm:pl-10">
              <span
                aria-hidden="true"
                className="absolute left-0 top-2 size-3 rounded-full bg-[linear-gradient(90deg,var(--brand-pink),var(--brand-purple))] ring-4 ring-background"
              />
              <span
                aria-hidden="true"
                className="absolute bottom-0 left-[5px] top-6 w-px bg-border"
              />

              <Card className="premium-card border-0 bg-transparent p-6 shadow-none">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  {entry.period}
                </p>
                <h3 className="mt-2 text-lg font-bold">{entry.role}</h3>
                <p className="mt-0.5 text-base font-medium text-primary">{entry.org}</p>
                <p className="mt-3 text-base leading-relaxed text-muted-foreground">{entry.text}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {entry.tags.map((tag) => (
                    <li key={tag}>
                      <Badge variant="secondary">{tag}</Badge>
                    </li>
                  ))}
                </ul>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="My process"
          title="From idea to launch"
          description="Five steps I follow on every engagement so there are no surprises about scope, timeline or what gets delivered."
        />

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map(({ num, title, text, icon: Icon }) => (
            <li key={num}>
              <Card className="premium-card h-full border-0 bg-transparent p-6 shadow-none">
                <div className="flex items-center justify-between gap-4">
                  <span className="icon-tile size-11">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-2xl font-extrabold text-muted-foreground/40">
                    {num}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-bold">{title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted-foreground">{text}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading eyebrow="By the numbers" title="Track record so far" />

        <dl className="mt-8 grid gap-4 sm:grid-cols-3">
          {stats.map(({ value, label }) => (
            <Card key={label} className="premium-card border-0 bg-transparent p-6 shadow-none">
              <dt className="text-sm text-muted-foreground">{label}</dt>
              <dd className="mt-1 font-display text-3xl font-extrabold brand-gradient-text">{value}</dd>
            </Card>
          ))}
        </dl>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="brand">
            <Link href="/projects">
              See the work <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/contact">
              Get in touch <Mail />
            </Link>
          </Button>
        </div>
      </Section>

      <CtaBand />
    </PageShell>
  );
}
