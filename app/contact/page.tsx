import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, Clock3, Github, Linkedin, Mail, MapPin } from "lucide-react";

import { ContactForm } from "@/components/site/contact-form";
import { PageHeader, PageShell, Section } from "@/components/site/page-shell";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a project, schedule a call, or just say hello — get in touch with Sneha Wani, full-stack developer.",
};

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    icon: Mail,
    hint: "Best for project briefs and detailed questions.",
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Connect with me",
    href: site.linkedin,
    icon: Linkedin,
    hint: "Good for roles, referrals and introductions.",
    external: true,
  },
  {
    label: "GitHub",
    value: "Browse my code",
    href: site.github,
    icon: Github,
    hint: "See how I actually write and structure projects.",
    external: true,
  },
];

export default function ContactPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Contact"
        title="Have a project"
        highlight="in mind?"
        description="Whether you are a startup, a business, or an individual with an idea, tell me what you are building and I will come back with a clear next step."
      />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-10">
          <div className="space-y-6">
            <Card className="premium-card border-0 bg-transparent p-6 shadow-none sm:p-8">
              <Badge variant="success" className="gap-2 py-1.5">
                <span className="size-2 rounded-full bg-success" aria-hidden="true" />
                Available for freelance opportunities
              </Badge>

              <h2 className="mt-5 text-xl font-bold">Reach me directly</h2>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                Pick whichever channel suits you — every message reaches me.
              </p>

              <ul className="mt-6 space-y-1">
                {channels.map(({ label, value, href, icon: Icon, hint, external }) => (
                  <li key={label}>
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                      className="group flex min-h-11 items-start gap-3 rounded-lg px-3 py-3 transition-colors duration-200 hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <span className="icon-tile size-9 shrink-0">
                        <Icon className="size-4" aria-hidden="true" />
                      </span>
                      <span className="min-w-0">
                        <span className="flex items-center gap-1 text-base font-semibold">
                          {value}
                          {external && (
                            <ArrowUpRight
                              className="size-3.5 text-muted-foreground transition-colors duration-200 group-hover:text-primary"
                              aria-hidden="true"
                            />
                          )}
                          <span className="sr-only">{external ? `(${label}, opens in a new tab)` : label}</span>
                        </span>
                        <span className="mt-0.5 block text-sm leading-relaxed text-muted-foreground">
                          {hint}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <Separator className="my-6" />

              <dl className="space-y-4 text-base">
                <div className="flex items-start gap-3">
                  <Clock3 className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold">Response time</dt>
                    <dd className="text-muted-foreground">Usually within 24 hours on weekdays.</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CalendarDays className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold">Prefer a call?</dt>
                    <dd className="text-muted-foreground">
                      <a
                        href={`mailto:${site.email}?subject=Schedule%20a%20Call`}
                        className="underline underline-offset-4 transition-colors duration-200 hover:text-foreground"
                      >
                        Email me a few times that work
                      </a>{" "}
                      and I will confirm one.
                    </dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <div>
                    <dt className="font-semibold">Working remotely</dt>
                    <dd className="text-muted-foreground">
                      Comfortable collaborating across time zones.
                    </dd>
                  </div>
                </div>
              </dl>
            </Card>

            <Card className="premium-card border-0 bg-transparent p-6 shadow-none">
              <h2 className="text-base font-bold">Not ready to reach out yet?</h2>
              <p className="mt-2 text-base leading-relaxed text-muted-foreground">
                Have a look at{" "}
                <Link
                  href="/projects"
                  className="font-medium text-primary underline underline-offset-4 transition-colors duration-200 hover:text-foreground"
                >
                  recent projects
                </Link>{" "}
                or the{" "}
                <Link
                  href="/services"
                  className="font-medium text-primary underline underline-offset-4 transition-colors duration-200 hover:text-foreground"
                >
                  services I offer
                </Link>{" "}
                first.
              </p>
            </Card>
          </div>

          <ContactForm />
        </div>
      </Section>
    </PageShell>
  );
}
