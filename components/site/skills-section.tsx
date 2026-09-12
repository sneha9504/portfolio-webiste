"use client";

import { useState } from "react";
import { Code2, Database, Globe2, Server } from "lucide-react";
import { cn } from "@/lib/utils";
import { skillGroups, technologies, stats } from "@/lib/site-data";
import { BookStack3D } from "./book-stack-3d";

const categoryTabs = [
  { key: "Frontend", icon: Code2, color: "text-[#61dafb]" },
  { key: "Backend", icon: Server, color: "text-[#68a063]" },
  { key: "Database", icon: Database, color: "text-[#4db33d]" },
  { key: "Tools & Deployment", icon: Globe2, color: "text-[#f48041]" },
] as const;

/* Map technology name → SVG symbol character for the icon tile */
const techIcons: Record<string, { mark: string; bg: string }> = {
  React: { mark: "⚛", bg: "bg-[#61dafb]/10 text-[#61dafb]" },
  "Next.js": { mark: "N", bg: "bg-foreground/8 text-foreground" },
  JavaScript: { mark: "JS", bg: "bg-[#f7df1e]/12 text-[#b8a200]" },
  TypeScript: { mark: "TS", bg: "bg-[#3178c6]/10 text-[#3178c6]" },
  "Node.js": { mark: "⬢", bg: "bg-[#68a063]/10 text-[#68a063]" },
  "Express.js": { mark: "ex", bg: "bg-foreground/6 text-muted-foreground" },
  MongoDB: { mark: "◆", bg: "bg-[#4db33d]/10 text-[#4db33d]" },
  MySQL: { mark: "SQL", bg: "bg-[#00758f]/10 text-[#00758f]" },
  "Tailwind CSS": { mark: "≈", bg: "bg-[#38bdf8]/10 text-[#38bdf8]" },
  Git: { mark: "⑂", bg: "bg-[#f05033]/10 text-[#f05033]" },
  GitHub: { mark: "●", bg: "bg-foreground/8 text-foreground" },
  Vercel: { mark: "▲", bg: "bg-foreground/8 text-foreground" },
};

/* Map tab key → list of tech names to display */
const categoryTechMap: Record<string, string[]> = {
  Frontend: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js"],
  Database: ["MongoDB", "MySQL"],
  "Tools & Deployment": ["Git", "GitHub", "Vercel"],
};

export function SkillsSection({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState<string>("Frontend");

  const activeTechs = categoryTechMap[activeTab] ?? [];

  return (
    <section id="skills-section" className={cn("relative overflow-hidden", className)}>
      {/* Section heading area */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        {/* Eyebrow + badge row */}
        <div className="flex items-center gap-3">
          <span className="eyebrow">MY SKILLS</span>
        </div>

        {/* Main heading area with book stack */}
        <div className="mt-6 grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="display-1 font-extrabold">
              Technologies{" "}
              <br className="hidden sm:block" />
              <span className="brand-gradient-text">I Work With</span>
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              A modern and constantly evolving tech stack to build fast, scalable and user-friendly web applications.
            </p>

            {/* Stats counters */}
            <div className="mt-6 flex flex-wrap items-center gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-pink/10 to-brand-purple/10 font-display text-lg font-bold text-brand-purple">
                    {stat.value}
                  </span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3D Book Stack decorative */}
          <div className="relative hidden lg:flex lg:items-center lg:justify-center">
            <BookStack3D variant="skills" className="scale-90" />
          </div>
        </div>

        {/* Category tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {categoryTabs.map(({ key, icon: Icon }) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={cn(
                "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300",
                activeTab === key
                  ? "bg-gradient-to-r from-brand-pink to-brand-purple text-white shadow-lg shadow-brand-purple/25"
                  : "bg-card text-muted-foreground hover:bg-secondary hover:text-foreground border border-border"
              )}
            >
              <Icon className="size-4" aria-hidden="true" />
              {key}
            </button>
          ))}
        </div>

        {/* Tech icon grid */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {activeTechs.map((techName) => {
            const info = techIcons[techName];
            if (!info) return null;
            return (
              <div
                key={techName}
                className="tech-card-3d premium-card flex flex-col items-center justify-center gap-3 p-5 text-center"
              >
                <span
                  className={cn(
                    "flex size-12 items-center justify-center rounded-2xl text-xl font-bold",
                    info.bg
                  )}
                >
                  {info.mark}
                </span>
                <span className="text-sm font-medium text-foreground">{techName}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
