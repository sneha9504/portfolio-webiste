"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { projects, projectCategories } from "@/lib/site-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookStack3D } from "./book-stack-3d";

export function ProjectsSection({ className }: { className?: string }) {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const visible =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.type === activeFilter);

  return (
    <section id="projects-section" className={cn("relative overflow-hidden", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Header row */}
        <div className="flex flex-wrap items-start justify-between gap-6">
          <div className="flex items-start gap-8 lg:gap-12">
            {/* 3D Book stack — Build / Learn / Grow */}
            <div className="hidden lg:block">
              <BookStack3D variant="projects" className="scale-[0.8]" />
            </div>

            <div>
              <span className="eyebrow">FEATURED PROJECTS</span>
              <h2 className="display-1 mt-3 font-extrabold">
                Real Projects.{" "}
                <br className="hidden sm:block" />
                Real <span className="brand-gradient-text">Results.</span>
              </h2>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground">
                A masterclass of web applications I&apos;ve designed and developed, showcasing my expertise in
                solving real-world technologies.
              </p>
            </div>
          </div>

          <Button asChild variant="outline" size="sm" className="mt-2 shrink-0">
            <Link href="/projects">
              View SVP Projects <ArrowUpRight className="size-4" />
            </Link>
          </Button>
        </div>

        {/* Filter tabs */}
        <div className="mt-8 flex flex-wrap gap-2">
          {projectCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                activeFilter === category
                  ? "bg-gradient-to-r from-brand-pink to-brand-purple text-white shadow-lg shadow-brand-purple/25"
                  : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground border border-border"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project cards grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <article
              key={project.title}
              className="project-card-3d premium-card group relative flex flex-col overflow-hidden"
            >
              {/* Screenshot area */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                <img
                  src={project.image}
                  alt={`Preview of the ${project.title} project`}
                  loading="lazy"
                  className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                {/* Gradient overlay */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"
                />
                {/* Type badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                  <Badge className="border-white/25 bg-white/15 text-white backdrop-blur-md">
                    {project.type}
                  </Badge>
                  <span className="text-xs font-semibold text-white/80">{project.year}</span>
                </div>
              </div>

              {/* Content area */}
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-lg font-bold tracking-tight">{project.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{project.summary}</p>

                <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <li key={tag}>
                      <Badge variant="secondary" className="text-[11px]">{tag}</Badge>
                    </li>
                  ))}
                </ul>

                <Link
                  href={project.href}
                  className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent-foreground"
                >
                  View Project
                  <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
