import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Project } from "@/lib/site-data";

export function ProjectCard({
  project,
  index,
  className,
}: {
  project: Project;
  index?: number;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "premium-card group relative flex flex-col overflow-hidden p-0",
        className
      )}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        <img
          src={project.image}
          alt={`Preview of the ${project.title} project interface`}
          loading="lazy"
          className="size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
        />

        <span
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--brand-navy)_85%,transparent),color-mix(in_oklab,var(--brand-navy)_35%,transparent)_38%,transparent_68%)]"
        />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
          <Badge className="border-white/25 bg-white/15 text-white backdrop-blur-md">
            {project.type}
          </Badge>
          <span className="font-display text-xs font-semibold tracking-widest text-white">
            {project.year}
          </span>
        </div>

        {typeof index === "number" && (
          <span
            aria-hidden="true"
            className="absolute right-3 top-3 inline-flex size-9 items-center justify-center rounded-full border border-white/20 bg-brand-navy/45 font-display text-xs font-bold text-white/85 backdrop-blur-md transition-colors duration-300 group-hover:bg-brand-navy/70 group-hover:text-white"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-3 p-5">
        <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>

        <p className="text-base leading-relaxed text-muted-foreground">{project.summary}</p>

        <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {project.tags.map((tag) => (
            <li key={tag}>
              <Badge variant="secondary">{tag}</Badge>
            </li>
          ))}
        </ul>

        <Link
          href={project.href}
          className="mt-1 inline-flex min-h-11 items-center gap-1.5 text-base font-semibold text-primary transition-colors duration-200 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Discuss this project
          <ArrowUpRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          <span className="sr-only"> — {project.title}</span>
        </Link>
      </div>
    </article>
  );
}
