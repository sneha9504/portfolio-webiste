import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";

import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://sneha.dev"),
  title: {
    default: "SNEHA.DEV — Full-Stack Developer",
    template: "%s — SNEHA.DEV",
  },
  description:
    "Portfolio of Sneha Wani, a Full-Stack Developer building modern, scalable web applications.",
  alternates: {
    canonical: "./",
    types: {
      "application/rss+xml": "/feed.xml",
    },
  },
  openGraph: {
    type: "website",
    siteName: "SNEHA.DEV",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  // Do not cap zoom — pinch-to-zoom is an accessibility requirement.
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#070d24" },
  ],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "SNEHA.DEV",
      url: "https://sneha.dev",
      description:
        "Portfolio of Sneha Wani, a Full-Stack Developer building modern, scalable web applications.",
    },
    {
      "@type": "Person",
      name: "Sneha Wani",
      url: "https://sneha.dev",
      jobTitle: "Full-Stack Developer",
      email: "hello@sneha.dev",
      sameAs: ["https://github.com/", "https://linkedin.com/"],
      knowsAbout: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript",
        "Node.js",
        "Express.js",
        "MongoDB",
        "MySQL",
        "Tailwind CSS",
      ],
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="flex min-h-dvh w-full flex-col overflow-x-clip font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-card focus:px-4 focus:py-2 focus:ring-2 focus:ring-ring"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="w-full flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
