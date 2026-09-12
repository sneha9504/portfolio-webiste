import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Database,
  Globe2,
  Server,
} from "lucide-react";

import aboutPortrait from "@/public/images/about-portrait.png";
import heroBanner from "@/public/images/hero-image.png";
import heroWorkspace from "@/public/images/hero-workspace.png";
import { CtaBand, PageShell, Section, SectionHeading } from "@/components/site/page-shell";
import { SkillsSection } from "@/components/site/skills-section";
import { ProjectsSection } from "@/components/site/projects-section";
import { ServicesSection } from "@/components/site/services-section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { navItems, site, stats } from "@/lib/site-data";

const pillars = [
  { icon: Code2, label: "Frontend" },
  { icon: Server, label: "Backend" },
  { icon: Database, label: "Database" },
  { icon: Globe2, label: "Deployment" },
];

const aboutPoints = [
  "Full-stack ownership — interface, API, database and deployment.",
  "Performance and accessibility handled during the build, not after.",
  "Clear communication and small, reviewable releases.",
];

const explore = navItems.filter((item) => item.href !== "/");

export default function HomePage() {
  return (
    <>
      {/* Full-bleed hero banner.
          `-mt-16` cancels the 64px the sticky header occupies in normal flow,
          so the artwork runs up underneath the transparent navbar.

          Layout flips by breakpoint rather than duplicating the copy:
          - phones  → stacked (photo on top, copy beneath on the page surface)
          - md and up → the photo fills the section and the copy overlays its
            empty left zone, which is what the wide banner was composed for. */}
      <section className="relative -mt-16 flex flex-col md:block md:min-h-[44rem]">
        <div className="relative aspect-[4/3] w-full md:absolute md:inset-0 md:aspect-auto md:h-full">
          {/* Art direction: the wide banner has a deliberate empty left third,
              the workspace shot is squarer and suits a phone crop. The `sizes`
              hints stop the hidden variant pulling a full-size candidate. */}
          <Image
            src={heroWorkspace}
            alt="Sneha Wani at her desk, working on a full-stack web project across a monitor and a laptop."
            fill
            priority
            placeholder="blur"
            sizes="(min-width: 768px) 1px, 100vw"
            className="object-cover object-[58%_38%] md:hidden"
          />
          <Image
            src={heroBanner}
            alt="Sneha Wani at her desk, working on a full-stack web project across a monitor and a laptop."
            fill
            priority
            placeholder="blur"
            sizes="(min-width: 768px) 100vw, 1px"
            className="hidden object-cover object-[68%_50%] md:block"
          />

          {/* Both photographs are light and pale on the left, so the headline
              reads as dark navy. A heavy dark scrim would flatten the artwork —
              this only lifts contrast where the type actually sits. */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-32 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.88),rgba(255,255,255,0))] md:hidden"
          />
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-28 bg-[linear-gradient(to_top,var(--background),transparent)] md:hidden"
          />
          <span
            aria-hidden="true"
            className="absolute inset-0 hidden md:block md:bg-[linear-gradient(to_right,rgba(255,255,255,0.94)_0%,rgba(255,255,255,0.88)_28%,rgba(255,255,255,0.62)_46%,rgba(255,255,255,0.18)_66%,rgba(255,255,255,0)_82%)]"
          />
          {/* The right-hand nav links sit past where the side scrim fades out,
              so the header gets its own light band to stay legible. */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 top-0 hidden h-28 md:block md:bg-[linear-gradient(to_bottom,rgba(255,255,255,0.82)_0%,rgba(255,255,255,0.55)_45%,rgba(255,255,255,0)_100%)]"
          />
          {/* Dissolve the banner into the page instead of ending on a hard seam. */}
          <span
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 hidden h-32 md:block md:bg-[linear-gradient(to_top,var(--background),transparent)]"
          />
        </div>

        <div className="relative mx-auto w-full max-w-6xl px-4 pb-14 pt-8 sm:px-6 md:flex md:min-h-[44rem] md:items-center md:pb-20 md:pt-24">
          <div className="max-w-xl">
            <Badge className="gap-2 border-brand-purple/20 bg-card/80 py-1.5 text-foreground backdrop-blur-sm md:border-brand-navy/15 md:bg-white/75 md:text-brand-navy">
              <span className="size-2 rounded-full bg-success" aria-hidden="true" />
              Available for freelance opportunities
            </Badge>

            <h1 className="display-1 mt-5 text-balance font-extrabold text-foreground md:text-brand-navy">
              From Pixel to Database,{" "}
              <span className="brand-gradient-text">I Build It All.</span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg md:text-brand-navy/75">
              {site.tagline}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="brand" size="lg">
                <Link href="/projects">
                  View My Work <ArrowRight />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="backdrop-blur-sm md:border-brand-navy/25 md:bg-white/80 md:text-brand-navy md:hover:bg-white md:hover:text-brand-navy"
              >
                <a href="/resume.pdf" download>
                  Download Resume <ArrowDownToLine />
                </a>
              </Button>
            </div>

            <ul className="mt-7 flex flex-wrap gap-2">
              {pillars.map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3.5 py-1.5 text-sm font-medium text-foreground backdrop-blur-sm md:border-brand-navy/15 md:bg-white/75 md:text-brand-navy"
                >
                  <Icon className="size-4 text-primary md:text-brand-pink" aria-hidden="true" />
                  {label}
                </li>
              ))}
            </ul>

            <dl className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-4 sm:gap-x-8">
              {stats.map((stat, i) => (
                <Fragment key={stat.label}>
                  <div>
                    <dt className="sr-only">{stat.label}</dt>
                    <dd>
                      <span className="block font-display text-2xl font-bold text-foreground md:text-brand-navy">
                        {stat.value}
                      </span>
                      <span className="text-xs text-muted-foreground md:text-brand-navy/65">
                        {stat.label}
                      </span>
                    </dd>
                  </div>
                  {i < stats.length - 1 && (
                    <Separator
                      orientation="vertical"
                      aria-hidden="true"
                      className="hidden h-9 bg-border sm:block md:bg-brand-navy/20"
                    />
                  )}
                </Fragment>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <PageShell className="pt-2 sm:pt-4">

      {/* ─── Skills / Technologies Section (Figma Design 1) ─── */}
      <Section>
        <SkillsSection />
      </Section>

      {/* ─── About Me Section ─── */}
      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-[linear-gradient(140deg,color-mix(in_oklab,var(--brand-pink)_24%,transparent),color-mix(in_oklab,var(--brand-purple)_24%,transparent))] blur-2xl"
            />
            <div className="relative overflow-hidden rounded-2xl border border-border/70 shadow-xl shadow-brand-purple/10">
              <Image
                src={aboutPortrait}
                alt="Portrait of Sneha Wani, Full-Stack Developer, working on a laptop."
                placeholder="blur"
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 384px, 100vw"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>

          <div>
            <SectionHeading
              eyebrow="About me"
              title="Hi, I'm Sneha — I turn ideas into products people can use."
              description="I am a Full-Stack Developer who enjoys the whole journey: shaping the interface, building the API behind it, modelling the data underneath, and shipping it somewhere reliable."
            />

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Most of my work starts with a conversation rather than a component. Once I understand
              who the product is for and what success looks like, I plan the architecture and build
              in small, reviewable pieces — so you always see progress instead of waiting for a
              reveal at the end.
            </p>

            <ul className="mt-6 space-y-3">
              {aboutPoints.map((point) => (
                <li key={point} className="flex gap-3 text-base leading-relaxed">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-muted-foreground">{point}</span>
                </li>
              ))}
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild variant="brand">
                <Link href="/about">
                  More about me <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/contact">
                  Let&apos;s work together <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── Services Section (Figma Design 3) ─── */}
      <Section>
        <ServicesSection />
      </Section>

      {/* ─── Projects Section (Figma Design 2) ─── */}
      <Section>
        <ProjectsSection />
      </Section>

      {/* ─── Explore links ─── */}
      <Section>
        <SectionHeading
          eyebrow="Explore"
          title="Everything Else"
          description="Each part of the portfolio now lives on its own page."
        />
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {explore.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="premium-card group flex h-full min-h-24 flex-col justify-center p-5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="flex items-center gap-1.5 text-base font-semibold">
                  {item.label}
                  <ArrowUpRight className="size-4 text-muted-foreground transition-colors duration-200 group-hover:text-primary" />
                </span>
                <span className="mt-1.5 text-base text-muted-foreground">{item.description}</span>
              </Link>
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand />
      </PageShell>
    </>
  );
}
