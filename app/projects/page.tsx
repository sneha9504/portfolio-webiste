import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CtaBand, PageShell, Section, SectionHeading } from "@/components/site/page-shell";
import { ProjectsSection } from "@/components/site/projects-section";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected full-stack, frontend and backend projects by Sneha Wani — filterable by discipline, with the stack behind each build.",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      {/* Full Projects section matching Figma Design 2 */}
      <ProjectsSection />

      {/* Behind the work */}
      <Section>
        <SectionHeading
          eyebrow="Behind the work"
          title="Want the details?"
          description="Each build has decisions worth talking through — data modelling, trade-offs, and what I would do differently next time. I am happy to walk you through any of them."
        />
        <div className="mt-5 flex flex-wrap gap-3">
          <Button asChild variant="brand">
            <Link href="/contact">
              Ask about a project <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/skills">
              See the stack <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>

      <CtaBand
        title="Need something like these built?"
        description="Tell me what you are working on and I will map out how it can be designed, built and shipped."
      />
    </PageShell>
  );
}
