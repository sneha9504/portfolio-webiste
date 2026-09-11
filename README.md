# SNEHA.DEV — Portfolio

Multi-page portfolio built with Next.js 15 (App Router), Tailwind CSS v4 and shadcn/ui.

## Getting started

```bash
npm install
npm run dev
```

## Routes

Every navbar entry is its own route:

| Route | Page |
| --- | --- |
| `/` | Home — hero, tech strip, teasers for each section |
| `/about` | Story, traits, stats |
| `/skills` | Skill groups with proficiency meters, tech grid |
| `/projects` | Filterable project gallery |
| `/services` | Services and deliverables |
| `/experience` | Timeline and the 01–05 process |
| `/contact` | Contact details and form |

## Structure

```
app/                 routes (one folder per navbar item)
  layout.tsx         header + footer shell, fonts, metadata template
  globals.css        Tailwind v4 entry + shadcn design tokens
components/ui/       shadcn primitives (button, card, badge, tabs, sheet, …)
components/site/     site-specific composites (header, footer, page shell, …)
lib/site-data.ts     single source of truth for all page content
lib/utils.ts         `cn()` class merge helper
```

## Theming

Design tokens live in `app/globals.css` as CSS variables (`--primary`, `--background`, …)
and are exposed to Tailwind through `@theme inline`. Light values sit on `:root`,
dark values on `.dark`. Brand colors are `--brand-pink`, `--brand-purple`, `--brand-navy`.

To add more shadcn components:

```bash
npx shadcn@latest add <component>
```

`components.json` is already configured (new-york style, `@/` alias, CSS variables).

## Content

All copy, projects, services, skills and timeline entries come from `lib/site-data.ts`.
Edit that file to update the site — the pages render from it.
