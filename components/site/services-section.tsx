import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { services } from "@/lib/site-data";
import { Button } from "@/components/ui/button";

export function ServicesSection({ className }: { className?: string }) {
  return (
    <section id="services-section" className={cn("relative overflow-hidden", className)}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="eyebrow">MY SERVICES</span>
            <h2 className="display-1 mt-3 font-extrabold">
              From Idea to{" "}
              <br className="hidden sm:block" />
              <span className="brand-gradient-text">Impact.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I help businesses, startups, and individuals build meaningful digital products — from designing beautiful
              interfaces to developing powerful web solutions.
            </p>

            <Button asChild variant="brand" size="lg" className="mt-6">
              <Link href="/contact">
                Let&apos;s Discuss Your Project <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>

        {/* Services 2x3 grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ slug, icon: Icon, title, text }, index) => (
            <div
              key={slug}
              className="service-card-3d premium-card group relative flex flex-col gap-4 p-6 sm:p-7"
            >
              {/* 3D Icon container */}
              <div className="service-icon-3d">
                <div className="service-icon-face service-icon-front">
                  <Icon className="size-6 text-brand-purple" aria-hidden="true" />
                </div>
                <div className="service-icon-face service-icon-top" />
                <div className="service-icon-face service-icon-right" />
              </div>

              <div>
                <h3 className="text-base font-bold leading-snug sm:text-lg">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
