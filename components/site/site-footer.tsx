import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { navItems, site } from "@/lib/site-data";

const socials = [
  { href: site.linkedin, label: "LinkedIn", icon: Linkedin },
  { href: site.github, label: "GitHub", icon: Github },
  { href: `mailto:${site.email}`, label: "Email", icon: Mail },
];

const primaryLinks = navItems.slice(0, 4);
const secondaryLinks = navItems.slice(4);

export function SiteFooter() {
  return (
    <footer className="surface-dark relative mt-20 overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,var(--brand-pink),var(--brand-purple))]"
      />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1fr]">
          <div className="max-w-sm">
            <Link href="/" className="font-display text-xl font-extrabold tracking-tight text-foreground">
              {site.brand.first}
              <span className="text-primary">{site.brand.suffix}</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {site.role} — turning ideas into real-world products, one considered
              interface at a time.
            </p>

            <ul className="mt-6 flex items-center gap-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="inline-flex size-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                  >
                    <Icon className="size-4" aria-hidden />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow">Explore</p>
            <ul className="mt-4 flex flex-col gap-1">
              {primaryLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer secondary">
            <p className="eyebrow">More</p>
            <ul className="mt-4 flex flex-col gap-1">
              {secondaryLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-muted-foreground transition-colors duration-200 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Start a project</p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Have something in mind? I&apos;m currently open to new roles and
              freelance work.
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-4 inline-flex min-h-11 items-center gap-1.5 text-sm font-medium text-foreground underline decoration-border underline-offset-4 transition-colors duration-200 hover:decoration-foreground"
            >
              {site.email}
            </a>
            <div className="mt-5">
              <Button asChild variant="brand" size="sm">
                <Link href="/contact">
                  Let&apos;s Work Together <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-10 bg-border" />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js &amp; Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
