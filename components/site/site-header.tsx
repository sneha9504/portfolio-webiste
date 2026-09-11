"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navItems, site } from "@/lib/site-data";
import { cn } from "@/lib/utils";

function Wordmark({ onHero }: { onHero: boolean }) {
  return (
    <Link
      href="/"
      className={cn(
        "shrink-0 font-display text-lg font-extrabold tracking-tight transition-colors duration-300 sm:text-xl",
        onHero && "text-brand-navy"
      )}
    >
      {site.brand.first}
      <span className="text-primary">{site.brand.suffix}</span>
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Only the home page has a banner behind the header. Everywhere else the
  // header is solid from the first paint, so we skip the listener entirely.
  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }

    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  // Transparent while sitting over the hero artwork. Opening the mobile sheet
  // drops it back to solid so the panel never reads through to the photo.
  const onHero = isHome && !scrolled && !open;

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 border-b transition-colors duration-300",
        onHero
          ? "border-transparent bg-transparent"
          : "border-border/70 bg-background/80 backdrop-blur-md"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6 md:gap-2 lg:gap-6">
        <Wordmark onHero={onHero} />

        <nav aria-label="Main" className="hidden min-w-0 md:block">
          <ul className="flex items-center gap-0.5 lg:gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={cn(
                    "relative flex h-16 items-center whitespace-nowrap px-2 text-xs font-medium transition-colors duration-200 lg:px-3 lg:text-[13px]",
                    // Over the banner the artwork is pale, so navy reads well
                    // and keeps contrast without a dark scrim.
                    onHero
                      ? isActive(item.href)
                        ? "text-brand-navy"
                        : "text-brand-navy/80 hover:text-brand-navy"
                      : isActive(item.href)
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute inset-x-2 bottom-0 h-0.5 rounded-full bg-[linear-gradient(90deg,var(--brand-pink),var(--brand-purple))] lg:inset-x-3" />
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          {/* Always carries a label — an arrow alone does not say where it goes.
              Below md the CTA lives inside the mobile sheet instead. */}
          <Button asChild variant="brand" size="sm" className="hidden md:inline-flex">
            <Link href="/contact">
              <span className="lg:hidden">Let&apos;s Talk</span>
              <span className="hidden lg:inline">Let&apos;s Work Together</span>
              <ArrowRight />
            </Link>
          </Button>

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className={cn("md:hidden", onHero && "text-brand-navy hover:text-brand-navy")}
                aria-label="Open navigation menu"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" aria-label="Main navigation">
              <SheetHeader>
                <SheetTitle>Navigate</SheetTitle>
              </SheetHeader>
              <nav aria-label="Mobile">
                <ul className="flex flex-col gap-1">
                  {navItems.map((item) => (
                    <li key={item.href}>
                      <SheetClose asChild>
                        <Link
                          href={item.href}
                          aria-current={isActive(item.href) ? "page" : undefined}
                          className={cn(
                            "flex min-h-11 flex-col justify-center rounded-lg px-3 py-2 transition-colors duration-200",
                            isActive(item.href)
                              ? "bg-accent text-accent-foreground"
                              : "text-foreground hover:bg-muted"
                          )}
                        >
                          <span className="text-sm font-semibold">{item.label}</span>
                          <span className="text-sm text-muted-foreground">{item.description}</span>
                        </Link>
                      </SheetClose>
                    </li>
                  ))}
                </ul>
              </nav>
              <SheetClose asChild>
                <Button asChild variant="brand" className="mt-2 w-full">
                  <Link href="/contact">
                    Let&apos;s Work Together <ArrowRight />
                  </Link>
                </Button>
              </SheetClose>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
