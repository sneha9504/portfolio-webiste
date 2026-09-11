import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { CtaBand, PageHeader, PageShell, Section, SectionHeading } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { services } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack web development services by Sneha Wani — custom websites, web applications, frontend builds, redesigns and API development.",
};

const engagement = [
  {
    title: "Scoped project",
    text: "A defined build with a clear outcome, timeline and hand-off. Best for launches, redesigns and MVPs.",
  },
  {
    title: "Ongoing partnership",
    text: "Continuous work on an existing product — new features, performance, and keeping the codebase healthy.",
  },
  {
    title: "Focused sprint",
    text: "A short engagement to unblock one thing: an API layer, an accessibility pass, or a stubborn integration.",
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Services"
        title="How I Can"
        highlight="Help You"
        description="I work across the whole stack, so you get one person who can take an idea from interface design through to the database and the deployment that serves it."
      />

      <Section>
        <SectionHeading
          eyebrow="What I offer"
          title="Services in detail"
          description="Each engagement is shaped around your product, but these are the shapes the work usually takes."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ slug, icon: Icon, title, text, deliverables }, index) => (
            <div key={slug} className="premium-card relative flex flex-col gap-4 p-6 sm:p-7">
              <span
                aria-hidden="true"
                className="absolute right-5 top-5 select-none text-[13px] font-bold tabular-nums text-muted-foreground/30"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="icon-tile size-11">
                <Icon className="size-5" aria-hidden="true" />
              </span>

              <div>
                <h3 className="pr-8 text-base font-bold leading-snug sm:text-lg">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{text}</p>
              </div>

              <div
                aria-hidden="true"
                className="h-px w-full bg-[linear-gradient(90deg,color-mix(in_oklab,var(--brand-pink)_35%,transparent),color-mix(in_oklab,var(--brand-purple)_35%,transparent),transparent)]"
              />

              <ul className="flex flex-col gap-2.5">
                {deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-[15px] text-muted-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Working together"
          title="How engagements work"
          description="Every project follows the same five-step process, whichever shape the engagement takes — so you always know what happens next."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {engagement.map((item) => (
            <div key={item.title} className="premium-card flex flex-col gap-2 p-5 sm:p-6">
              <h3 className="text-base font-bold">{item.title}</h3>
              <p className="text-[15px] leading-relaxed text-muted-foreground">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild variant="outline" size="lg">
            <Link href="/experience">
              See my process <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="brand" size="lg">
            <Link href="/contact">
              Start a conversation <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>

      <CtaBand
        title="Not sure which one you need?"
        description="Describe the problem in a sentence or two and I will tell you honestly what the work involves — and whether I am the right person for it."
      />
    </PageShell>
  );
}
