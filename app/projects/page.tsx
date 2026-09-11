import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { ProjectGallery } from "@/components/site/project-gallery";
import { CtaBand, PageHeader, PageShell, Section, SectionHeading } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { projects } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected full-stack, frontend and backend projects by Sneha Wani — filterable by discipline, with the stack behind each build.",
};

const highlights = [
  { value: `${projects.length}`, label: "Featured case studies" },
  { value: "3", label: "Disciplines covered" },
  { value: "100%", label: "Shipped end to end" },
];

export default function ProjectsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Featured projects"
        title="Selected"
        highlight="Work"
        description="A closer look at what I have designed, built and deployed — from collaborative products to storefronts and API-driven services. Filter by discipline to see the side of the stack you care about."
      />

      <Section>
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((item) => (
            <Card key={item.label} className="premium-card border-0 bg-transparent shadow-none">
              <CardContent className="p-5 pt-5">
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Browse"
          title="Filter by discipline"
          description="Every project below was built and deployed by me. Pick a category to narrow the list."
        />
        <div className="mt-6">
          <ProjectGallery />
        </div>
      </Section>

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
