import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Route, Sparkles } from "lucide-react";

import aboutPortrait from "@/public/images/about-portrait.png";
import { CtaBand, PageHeader, PageShell, Section, SectionHeading } from "@/components/site/page-shell";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { processSteps, site, stats, traits } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description:
    "Get to know Sneha Wani — a Full-Stack Developer who turns ideas into functional, user-friendly products across the entire stack.",
};

export default function AboutPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="About me"
        title="Building products that"
        highlight="make an impact."
        description={site.tagline}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-12">
          {/* Portrait */}
          <div className="relative mx-auto w-full max-w-[240px] sm:max-w-xs lg:sticky lg:top-24 lg:mx-0 lg:max-w-none">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-[linear-gradient(140deg,color-mix(in_oklab,var(--brand-pink)_24%,transparent),color-mix(in_oklab,var(--brand-purple)_24%,transparent))] blur-2xl"
            />
            <div className="premium-card relative overflow-hidden rounded-2xl">
              <Image
                src={aboutPortrait}
                alt="Portrait of Sneha Wani, Full-Stack Developer, working on a laptop."
                placeholder="blur"
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 320px, 70vw"
                className="aspect-[4/5] w-full object-cover"
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(to_top,color-mix(in_oklab,var(--brand-navy)_78%,transparent),transparent)]"
              />
              <div className="absolute inset-x-3 bottom-3 flex items-center gap-3 rounded-xl bg-white/10 px-3 py-2.5 backdrop-blur-sm sm:inset-x-4 sm:bottom-4">
                <span className="icon-tile size-10 shrink-0">
                  <Sparkles className="size-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-white">Full-Stack Developer</p>
                  <p className="truncate text-sm text-white/80">Design, build &amp; ship</p>
                </div>
              </div>
            </div>
          </div>

          {/* Prose, CTAs, traits */}
          <div className="mt-2 lg:mt-0">
            <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                I enjoy transforming ideas into functional, user-friendly digital products. I work
                across the entire stack — designing interfaces that feel effortless, building backend
                systems that hold up under load, and deploying applications people can rely on.
              </p>
              <p>
                Most of my work starts with a conversation rather than a component. Understanding who
                the product is for, and what success actually looks like, tends to save far more time
                than any framework choice. From there I plan the architecture, build in small
                reviewable pieces, and keep performance and accessibility in the loop from day one
                instead of bolting them on at the end.
              </p>
              <p>
                Outside of client work I am usually reading through release notes, rebuilding
                something I have already built to see if I can do it better, or helping someone else
                get unstuck.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-6">
              <Button asChild variant="brand">
                <Link href="/projects">
                  See My Work <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">
                  Get in Touch <ArrowUpRight />
                </Link>
              </Button>
            </div>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {traits.map(({ icon: Icon, title, text }) => (
                <li key={title} className="premium-card flex gap-4 p-4 sm:p-5">
                  <span className="icon-tile size-11 shrink-0">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-base font-semibold text-foreground">{title}</p>
                    <p className="mt-1 text-base leading-relaxed text-muted-foreground">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="premium-card p-6 sm:p-8">
          <dl className="grid gap-6 sm:grid-cols-3 sm:gap-4">
            {stats.map(({ value, label }, index) => (
              <div
                key={label}
                className={
                  index < stats.length - 1
                    ? "sm:border-r sm:border-border/60 sm:pr-4"
                    : undefined
                }
              >
                <dt className="sr-only">{label}</dt>
                <dd>
                  <span className="block text-3xl font-extrabold tracking-tight">{value}</span>
                  <span className="mt-1 block text-base text-muted-foreground">{label}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="How I work"
          title="A process built around fewer surprises."
          description="Every project runs through the same five stages, scaled to fit its size. It keeps scope visible and makes progress easy to check at any point."
        />

        <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map(({ num, title, text, icon: Icon }) => (
            <li key={num}>
              <div className="premium-card h-full p-5">
                <div className="flex items-center gap-3">
                  <span className="icon-tile size-11 shrink-0">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="text-xs font-bold tracking-widest text-primary">{num}</span>
                </div>
                <h3 className="mt-4 text-base font-semibold">{title}</h3>
                <p className="mt-1.5 text-base leading-relaxed text-muted-foreground">{text}</p>
              </div>
            </li>
          ))}
        </ol>

        <Separator className="my-8" />

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-start gap-3 text-base text-muted-foreground sm:items-center">
            <Route className="mt-0.5 size-5 shrink-0 text-primary sm:mt-0" aria-hidden="true" />
            <span>Want the longer version, with roles, timelines and what shipped?</span>
          </p>
          <Button asChild variant="outline">
            <Link href="/experience">
              View Experience <ArrowRight />
            </Link>
          </Button>
        </div>
      </Section>

      <CtaBand />
    </PageShell>
  );
}
