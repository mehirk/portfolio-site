"use client";

import { CommandMenu } from "@/components/command-menu";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Search,
  Sparkles,
} from "lucide-react";

const resumeUrl = "/Mehir Kumar Resume (v4.0).pdf";

const highlights = [
  { title: "Incoming", desc: "RBC Analytics Engineer Intern — CAO Analytics" },
  { title: "230+ users", desc: "AI Learning Dashboard adoption in 48h" },
  { title: "95%+ sat", desc: "Support satisfaction across 300+ tickets" },
  { title: "4.00 / 4.33", desc: "GPA • Dean's List" },
];

const work = [
  {
    company: "Royal Bank of Canada — CAO Analytics",
    role: "Analytics Engineer Intern (Incoming)",
    time: "Jan–Apr 2026 • Toronto",
    detail: "Dashboards, data quality, and ETL automation for enterprise teams.",
  },
  {
    company: "Acadia Technology Services",
    role: "Student Service Desk Assistant",
    time: "Aug 2024 – Present • Wolfville",
    detail: "300+ issues resolved, 95%+ sat, 20% faster resolution via playbooks.",
  },
  {
    company: "Resident Assistant, Acadia",
    role: "Community Lead",
    time: "Aug 2024 – Present",
    detail: "Mentoring 70+ residents, conflict mediation, inclusive events.",
  },
  {
    company: "Alucor LTD",
    role: "IT Intern (Junior Software)",
    time: "Jun–Aug 2023 • Dubai",
    detail: "Encrypted password manager, 24+ device rollouts, faster onboarding.",
  },
];

const projects = [
  {
    title: "AI Learning Dashboard",
    desc: "SaaS for goals + AI insights with protected routes and custom charts.",
    tags: ["React 19", "Tailwind", "Firebase", "Chart.js"],
    link: "https://ailearnly.com",
  },
  {
    title: "Study Link",
    desc: "Collaboration app with role-based auth, file sharing, and sessions.",
    tags: ["React", "TS", "Express", "Postgres", "Prisma", "Docker"],
    link: "https://studylink.dryft.ca",
  },
  {
    title: "Secura Staff App",
    desc: "Employee management with encryption, admin controls, CSV export.",
    tags: ["Python", "tkinter", "cryptography"],
    link: "https://github.com/mehirk/Secura-Staff-App",
  },
];

const skills = [
  ["Python", "TypeScript", "Java", "SQL"],
  ["React", "Next.js", "Tailwind", "Angular"],
  ["Node.js", "Express", "Prisma", "PostgreSQL", "MongoDB"],
  ["Docker", "Airflow", "Git", "Postman"],
  ["Cybersecurity", "IT Asset Mgmt", "Knowledge bases"],
  ["Leadership", "Collaboration", "Problem solving"],
];

const fade = {
  initial: { opacity: 0, y: 14 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6, ease: "easeOut" },
};

export default function Home() {
  return (
    <div className="relative min-h-screen pb-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.45, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute left-[-10%] top-[-5%] h-[420px] w-[420px] rounded-full bg-[var(--accent)]/25 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.35, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          className="absolute right-[-15%] top-[20%] h-[360px] w-[360px] rounded-full bg-[var(--accent-2)]/25 blur-3xl"
        />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 pt-6 sm:px-6 lg:px-10">
        <motion.header
          className="panel sticky top-3 z-20 flex flex-wrap items-center justify-between gap-4 px-5 py-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-3">
            <div className="rounded-full bg-[var(--text)] px-3 py-1 text-sm font-black uppercase tracking-[0.18em] text-[#0f1726]">
              MK
            </div>
            <div className="flex flex-col leading-tight text-main">
              <span className="text-sm font-semibold">Mehir Kumar</span>
              <span className="text-xs text-muted">
                Full-stack • Analytics • Community
              </span>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <CommandMenu />
            <Button asChild className="gap-2">
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.header>

        <main className="flex flex-col gap-14">
          <motion.section
            className="grid gap-6 lg:grid-cols-[1.6fr,1fr]"
            {...fade}
          >
            <div className="panel relative overflow-hidden p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(242,223,176,0.2),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(135,214,198,0.2),transparent_45%)]" />
              <div className="relative z-10 space-y-6">
                <Badge variant="amber" className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  Analytics x Engineering x Leadership
                </Badge>
                <h1 className="font-[var(--font-display)] text-4xl leading-tight text-main sm:text-5xl">
                  I build reliable, data-informed products that people adopt fast.
                </h1>
                <p className="text-lg text-muted">
                  Incoming Analytics Engineer Intern @ RBC (CAO Analytics). I ship SaaS
                  dashboards, collaboration tools, and secure support systems with
                  tangible outcomes: 230+ users in 48h, 95%+ satisfaction, 20% faster
                  resolutions.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button asChild size="lg" className="gap-2">
                    <a href="#projects">
                      View projects <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="lg" className="gap-2">
                    <a href="mailto:mehirk28@gmail.com">
                      Email <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="lg" className="gap-2">
                    <a
                      href="https://www.linkedin.com/in/mehirkumar"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn <Linkedin className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <Card className="relative overflow-hidden p-5">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(246,198,107,0.12),rgba(135,214,198,0.12))]" />
              <div className="relative z-10 flex flex-col gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                  Highlights
                </p>
                {highlights.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start justify-between gap-3 rounded-2xl border border-[color:var(--border)]/60 bg-white/5 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-main">{item.title}</p>
                      <p className="text-sm text-muted">{item.desc}</p>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted" />
                  </div>
                ))}
              </div>
            </Card>
          </motion.section>

          <motion.section className="space-y-4" id="experience" {...fade}>
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                  Experience
                </p>
                <h2 className="font-[var(--font-display)] text-3xl text-main">
                  Impact in analytics, IT, and community
                </h2>
              </div>
              <Badge variant="accent">Hands-on</Badge>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {work.map((item, idx) => (
                <motion.div
                  key={item.company}
                  {...fade}
                  transition={{ ...fade.transition, delay: idx * 0.05 }}
                >
                  <Card className="h-full p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">
                          {item.company}
                        </p>
                        <CardTitle className="text-lg text-main">
                          {item.role}
                        </CardTitle>
                      </div>
                      <Badge className="text-[11px] text-main">{item.time}</Badge>
                    </div>
                    <CardDescription className="mt-2 text-sm text-muted">
                      {item.detail}
                    </CardDescription>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section className="space-y-4" id="projects" {...fade}>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                  Projects
                </p>
                <h2 className="font-[var(--font-display)] text-3xl text-main">
                  Builds with measurable outcomes
                </h2>
              </div>
              <Badge variant="amber">Selected</Badge>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {projects.map((project) => (
                <motion.div
                  key={project.title}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.2 }}
                >
                  <Card className="flex h-full flex-col gap-3 p-4">
                    <CardTitle className="text-xl text-main">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-muted">
                      {project.desc}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-[color:var(--border)]/70 bg-white/5 px-3 py-1 text-xs font-semibold text-main"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto flex flex-wrap gap-2">
                      <Button asChild variant="ghost" size="sm" className="gap-2">
                        <a href={project.link} target="_blank" rel="noopener noreferrer">
                          View <ArrowUpRight className="h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            className="grid gap-6 lg:grid-cols-[1.2fr,1fr]"
            id="skills"
            {...fade}
          >
            <Card className="p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                Skillset
              </p>
              <h2 className="font-[var(--font-display)] text-3xl text-main">
                How I work (no bars, just the stack)
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {skills.map((group, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-[color:var(--border)]/60 bg-white/5 p-3"
                  >
                    <div className="flex flex-wrap gap-2">
                      {group.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-[color:var(--border)]/70 bg-transparent px-3 py-1 text-sm font-semibold text-main"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="relative overflow-hidden p-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(135,214,198,0.15),transparent_45%),radial-gradient(circle_at_40%_70%,rgba(246,198,107,0.18),transparent_45%)]" />
              <div className="relative z-10 space-y-3 text-main">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                  Quick actions
                </p>
                <h3 className="font-[var(--font-display)] text-2xl">
                  Need something specific?
                </h3>
                <div className="flex flex-wrap gap-2">
                  <Button asChild variant="ghost" className="gap-2">
                    <a href="#projects">
                      Browse projects <Search className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" className="gap-2">
                    <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                      Resume <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" className="gap-2">
                    <a href="mailto:mehirk28@gmail.com">
                      Email <Mail className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </motion.section>

          <motion.section
            className="panel flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between"
            id="contact"
            {...fade}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                Let&apos;s talk
              </p>
              <h2 className="font-[var(--font-display)] text-2xl text-main">
                Collaborate, hire, or brainstorm?
              </h2>
              <p className="text-muted">
                Analytics engineering, full-stack builds, community leadership — I’m in.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="gap-2">
                <a href="mailto:mehirk28@gmail.com">
                  Email <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" className="gap-2">
                <a
                  href="https://www.linkedin.com/in/mehirkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" className="gap-2">
                <a
                  href="https://github.com/mehirk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub <Github className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.section>
        </main>

        <footer className="pb-6 text-center text-sm text-muted">
          Built by Mehir Kumar • New palette: warm gold + mint on navy/cream
        </footer>
      </div>
    </div>
  );
}
