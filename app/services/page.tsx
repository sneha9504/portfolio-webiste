import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaBand, PageShell, Section, SectionHeading } from "@/components/site/page-shell";
import { ServicesSection } from "@/components/site/services-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-stack web development services by Sneha Wani — custom websites, web applications, frontend builds, redesigns, API development, and performance optimization.",
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
      {/* Full Services section matching Figma Design 3 */}
      <ServicesSection />

      {/* Engagement models */}
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
