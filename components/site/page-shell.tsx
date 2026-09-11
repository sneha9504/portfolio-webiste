import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import type * as React from "react";

import { Button } from "@/components/ui/button";
import { site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function PageShell({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16", className)} {...props} />
  );
}

export function Section({ className, ...props }: React.ComponentProps<"section">) {
  return <section className={cn("mt-14 first:mt-0", className)} {...props} />;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="display-2 mt-2 font-bold">{title}</h2>
      {description && (
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
      )}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  highlight,
  description,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  description: string;
}) {
  return (
    <header className="max-w-3xl">
      <p className="eyebrow">{eyebrow}</p>
      <h1 className="display-1 mt-3 text-balance font-extrabold">
        {title}
        {highlight && (
          <>
            {" "}
            <span className="brand-gradient-text">{highlight}</span>
          </>
        )}
      </h1>
      <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">{description}</p>
    </header>
  );
}

export function CtaBand({
  title = "Have a project in mind?",
  description = "Whether you are a startup, a business, or an individual with an idea, I would love to help you bring it to life.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="mt-16 overflow-hidden rounded-2xl border bg-[linear-gradient(100deg,color-mix(in_oklab,var(--brand-pink)_16%,var(--card)),color-mix(in_oklab,var(--brand-purple)_16%,var(--card)))] p-6 sm:p-10">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <p className="eyebrow">Let&apos;s build together</p>
          <h2 className="display-2 mt-2 font-bold">{title}</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
        </div>
        <div className="flex flex-col gap-3 min-[420px]:flex-row sm:flex-wrap">
          <Button asChild variant="brand" size="lg" className="w-full min-[420px]:w-auto">
            <Link href="/contact">
              Start a Project <ArrowRight />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="w-full min-[420px]:w-auto">
            <a href={`mailto:${site.email}?subject=Schedule%20a%20Call`}>
              Schedule a Call <CalendarDays />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
