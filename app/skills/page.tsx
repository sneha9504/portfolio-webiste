import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaBand, PageShell, Section } from "@/components/site/page-shell";
import { SkillsSection } from "@/components/site/skills-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "The stack Sneha Wani works with day to day — frontend, backend, databases, and the tooling that gets it deployed.",
};

export default function SkillsPage() {
  return (
    <PageShell>
      {/* Full Skills section matching Figma Design 1 */}
      <SkillsSection />

      {/* CTA to browse projects */}
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
