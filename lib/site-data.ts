import {
  BriefcaseBusiness,
  Code2,
  Database,
  Gauge,
  Globe2,
  Layers3,
  Lightbulb,
  Monitor,
  RefreshCw,
  Rocket,
  Search,
  Server,
  ShieldCheck,
  Sparkles,
  UserRound,
  type LucideIcon,
} from "lucide-react";

export const site = {
  name: "Sneha Wani",
  url: "https://sneha.dev",
  brand: { first: "SNEHA", suffix: ".DEV" },
  role: "Full-Stack Developer",
  email: "hello@sneha.dev",
  github: "https://github.com/",
  linkedin: "https://linkedin.com/",
  tagline:
    "I am Sneha Wani, a Full-Stack Developer building modern, scalable, and high-performance web applications.",
};

export type NavItem = { label: string; href: string; description: string };

export const navItems: NavItem[] = [
  { label: "Home", href: "/", description: "Start here — who I am and what I build." },
  { label: "About", href: "/about", description: "My story, values and the way I work." },
  { label: "Skills", href: "/skills", description: "The stack I use across frontend, backend and infra." },
  { label: "Projects", href: "/projects", description: "Selected work, filtered by discipline." },
  { label: "Services", href: "/services", description: "How I can help your team or product." },
  { label: "Experience", href: "/experience", description: "Timeline, process and milestones." },
  { label: "Contact", href: "/contact", description: "Start a project or schedule a call." },
];

export const stats = [
  { value: "10+", label: "Projects Completed" },
  { value: "5+", label: "Happy Clients" },
  { value: "2+", label: "Years of Experience" },
];

export type SkillGroup = {
  title: string;
  icon: LucideIcon;
  blurb: string;
  items: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    icon: Code2,
    blurb: "Interfaces that stay fast, accessible and pleasant to use.",
    items: [
      { name: "React", level: 92 },
      { name: "Next.js", level: 88 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 90 },
      { name: "Tailwind CSS", level: 90 },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    blurb: "APIs and services designed to scale without surprises.",
    items: [
      { name: "Node.js", level: 87 },
      { name: "Express.js", level: 85 },
      { name: "REST APIs", level: 88 },
      { name: "Authentication", level: 80 },
    ],
  },
  {
    title: "Databases",
    icon: Database,
    blurb: "Schemas and queries tuned for the access patterns that matter.",
    items: [
      { name: "MongoDB", level: 86 },
      { name: "MySQL", level: 80 },
      { name: "Mongoose", level: 84 },
      { name: "Data modelling", level: 78 },
    ],
  },
  {
    title: "Tooling & Deployment",
    icon: Globe2,
    blurb: "Ship it, measure it, keep it healthy.",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Vercel", level: 88 },
      { name: "CI basics", level: 75 },
      { name: "Testing", level: 74 },
    ],
  },
];

export const technologies = [
  { name: "React", mark: "⚛", accent: "text-chart-3" },
  { name: "Next.js", mark: "N", accent: "text-foreground" },
  { name: "JavaScript", mark: "JS", accent: "text-chart-4" },
  { name: "TypeScript", mark: "TS", accent: "text-chart-3" },
  { name: "Node.js", mark: "⬢", accent: "text-chart-5" },
  { name: "Express.js", mark: "ex", accent: "text-muted-foreground" },
  { name: "MongoDB", mark: "◆", accent: "text-chart-5" },
  { name: "MySQL", mark: "SQL", accent: "text-chart-3" },
  { name: "Tailwind CSS", mark: "≈", accent: "text-chart-3" },
  { name: "Git", mark: "⑂", accent: "text-chart-1" },
  { name: "GitHub", mark: "●", accent: "text-foreground" },
  { name: "Vercel", mark: "▲", accent: "text-foreground" },
];

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  text: string;
  deliverables: string[];
};

export const services: Service[] = [
  {
    slug: "custom-website",
    icon: Monitor,
    title: "Custom Website Development",
    text: "Modern, responsive websites tailored to your business.",
    deliverables: ["Responsive design build", "SEO-ready markup", "CMS or content hand-off"],
  },
  {
    slug: "full-stack",
    icon: Layers3,
    title: "Full-Stack Web Applications",
    text: "End-to-end development including frontend, backend, APIs, and databases.",
    deliverables: ["Product architecture", "API + database layer", "Auth and roles"],
  },
  {
    slug: "frontend",
    icon: Code2,
    title: "Frontend Development",
    text: "Interactive and responsive interfaces using modern technologies.",
    deliverables: ["Component library", "State management", "Accessibility pass"],
  },
  {
    slug: "redesign",
    icon: RefreshCw,
    title: "Website Redesign",
    text: "Transform outdated websites into modern, high-performing experiences.",
    deliverables: ["UX audit", "Visual refresh", "Performance tuning"],
  },
  {
    slug: "api-backend",
    icon: Server,
    title: "Backend & API Development",
    text: "Robust internal systems, clean database architecture, payment integrations and logistics.",
    deliverables: ["REST API design", "Database modelling", "Deployment setup"],
  },
  {
    slug: "seo-performance",
    icon: Gauge,
    title: "Performance & SEO Optimization",
    text: "Speed up your website, optimize for search engines, and improve the browsing experience.",
    deliverables: ["Core Web Vitals audit", "SEO markup & meta", "Image & bundle optimization"],
  },
];

export type ProjectCategory = "Full Stack" | "Frontend" | "Backend";

export type Project = {
  title: string;
  image: string;
  summary: string;
  tags: string[];
  type: ProjectCategory;
  year: string;
  href: string;
};

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Full Stack",
  "Frontend",
  "Backend",
];

export const projects: Project[] = [
  {
    title: "Jira Dashboard Clone",
    image: "/images/project-jira.jpg",
    summary: "A full-featured project management dashboard with kanban boards, sprint tracking, and real-time team collaboration.",
    tags: ["React", "Node.js", "MongoDB"],
    type: "Full Stack",
    year: "2026",
    href: "/contact",
  },
  {
    title: "Portfolio Website",
    image: "/images/project-portfolio.jpg",
    summary: "A stunning developer portfolio with glassmorphism design, smooth animations, and fully responsive layout.",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    type: "Frontend",
    year: "2025",
    href: "/contact",
  },
  {
    title: "Quiz Application",
    image: "/images/project-quiz.jpg",
    summary: "An interactive quiz platform with timed questions, score tracking, leaderboards and category filtering.",
    tags: ["React", "Express.js", "MongoDB"],
    type: "Full Stack",
    year: "2025",
    href: "/contact",
  },
];

export type ProcessStep = {
  num: string;
  title: string;
  text: string;
  icon: LucideIcon;
};

export const processSteps: ProcessStep[] = [
  { num: "01", title: "Discover", text: "Understand goals, users and requirements before writing code.", icon: Lightbulb },
  { num: "02", title: "Plan", text: "Create the architecture, data model and delivery strategy.", icon: BriefcaseBusiness },
  { num: "03", title: "Design & Build", text: "Develop the product with modern, maintainable technologies.", icon: Sparkles },
  { num: "04", title: "Test", text: "Ensure quality, performance and responsiveness across devices.", icon: ShieldCheck },
  { num: "05", title: "Launch", text: "Deploy, monitor and support your product after release.", icon: Rocket },
];

export type TimelineEntry = {
  period: string;
  role: string;
  org: string;
  text: string;
  tags: string[];
};

export const timeline: TimelineEntry[] = [
  {
    period: "2025 — Present",
    role: "Freelance Full-Stack Developer",
    org: "Self-employed",
    text: "Designing and shipping web applications for startups and small businesses, owning everything from data model to deployment.",
    tags: ["Next.js", "Node.js", "MongoDB", "Vercel"],
  },
  {
    period: "2024 — 2025",
    role: "Full-Stack Developer",
    org: "Client projects",
    text: "Built production dashboards and e-commerce experiences, introduced component libraries and improved page performance.",
    tags: ["React", "Express.js", "MySQL"],
  },
  {
    period: "2023 — 2024",
    role: "Frontend Developer",
    org: "Early projects",
    text: "Focused on responsive interfaces, accessibility and translating design files into reusable components.",
    tags: ["JavaScript", "React", "Tailwind CSS"],
  },
];

export const traits = [
  { icon: Sparkles, title: "Problem Solver", text: "I enjoy solving real-world problems through code." },
  { icon: Layers3, title: "Continuous Learner", text: "Always exploring new technologies and patterns." },
  { icon: UserRound, title: "User Focused", text: "I build with the end user in mind, not just the spec." },
  { icon: BriefcaseBusiness, title: "Open to Opportunities", text: "Available for full-time roles and freelance projects." },
];
