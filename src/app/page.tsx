"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Search,
  Sparkles,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { CommandMenu } from "@/components/command-menu";

const metrics = [
  { label: "GPA • Dean's List", value: "4.00 / 4.33" },
  { label: "AI Learning Dashboard users", value: "230+ in 48h" },
  { label: "Support satisfaction", value: "95%+" },
];

const experience = [
  {
    company: "Royal Bank of Canada — CAO Analytics",
    role: "Analytics Engineer Intern (Incoming)",
    time: "Jan 2026 – Apr 2026 • Toronto, ON",
    summary:
      "Improving enterprise dashboards, data quality, and ETL efficiency with SQL, Python, and automation workflows.",
  },
  {
    company: "Acadia University",
    role: "Resident Assistant",
    time: "Aug 2024 – Present • Wolfville, NS",
    summary:
      "Mentor to 70+ residents; drive inclusive community, events, and conflict mediation across diverse groups.",
  },
  {
    company: "Acadia Technology Services",
    role: "Student Service Desk Assistant",
    time: "Aug 2024 – Present • Wolfville, NS",
    summary:
      "Resolved 300+ hardware/software/network issues with 95%+ satisfaction; 20% faster ticket resolution via team playbooks.",
  },
  {
    company: "Alucor LTD",
    role: "IT Intern (Junior Software Focus)",
    time: "Jun 2023 – Aug 2023 • Dubai, UAE",
    summary:
      "Built an encrypted password manager and deployed 24+ devices, boosting infrastructure efficiency and onboarding speed.",
  },
  {
    company: "Vision Concept Aviation",
    role: "Programmer & Social Media Manager",
    time: "Sep 2022 – Nov 2022 • Dubai, UAE",
    summary:
      "Automated location plotting (30% time saved) and lifted leads by 20% with investor-facing demos and campaigns.",
  },
];

const projects = [
  {
    title: "AI Learning Dashboard — ailearnly.com",
    role: "Founder & Full-Stack Developer",
    stack: "React 19, Vite, TailwindCSS, Firebase Auth, Firestore, Chart.js",
    summary:
      "Mobile-first SaaS for goal tracking and AI insights. 230+ users across 7 countries in 48 hours via targeted outreach.",
    highlights: [
      "Protected routes with Firebase Auth",
      "Firestore data model + analytics",
      "Custom chart components",
    ],
  },
  {
    title: "Study Link — studylink.dryft.ca",
    role: "Full-Stack Developer (Collaborative)",
    stack: "React 19, TypeScript, Express, PostgreSQL, Prisma, Docker",
    summary:
      "Academic collaboration platform for real-time discussions and file sharing with secure session-based auth.",
    highlights: [
      "Better-Auth sessions + role-based access",
      "REST APIs with relational schema",
      "UploadThing + Shadcn UI + Zod validation",
    ],
  },
  {
    title: "Secura Staff App",
    role: "Lead Developer",
    stack: "Python, tkinter, cryptography, CSV",
    summary:
      "Employee management tool with multi-layer encryption; 40% faster retrieval and 50% fewer unauthorized access incidents.",
    highlights: [
      "Encryption-first architecture",
      "Role-aware admin controls",
      "Secure CSV export workflows",
    ],
  },
];

const skills = [
  { title: "Languages", items: "Python, Java, JavaScript, TypeScript, SQL" },
  { title: "Front-end", items: "React, Next.js, TailwindCSS, Angular" },
  {
    title: "Back-end & Data",
    items: "Node.js, Express.js, Prisma, PostgreSQL, MongoDB, FastAPI, REST",
  },
  { title: "DevOps & Tools", items: "Docker, Git, Postman, Airflow" },
  {
    title: "IT & Security",
    items: "Asset management, cybersecurity practices, documentation",
  },
  {
    title: "Soft Skills",
    items: "Communication, team collaboration, problem-solving, leadership",
  },
];

const resumeUrl = "/Mehir Kumar Resume (v4.0).pdf";

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.7, ease: "easeOut" },
};

const Panel = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur",
      className
    )}
  >
    {children}
  </div>
);

export default function Home() {
  return (
    <div className="relative min-h-screen pb-12">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.6, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute left-[-10%] top-[-5%] h-[320px] w-[320px] rounded-full bg-emerald-400/20 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="absolute right-[-10%] top-[-5%] h-[280px] w-[280px] rounded-full bg-amber-300/25 blur-3xl"
        />
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 pt-6 sm:px-6 lg:px-10">
        <motion.header
          className="panel sticky top-3 z-20 flex flex-wrap items-center justify-between gap-4 px-5 py-3"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-gradient-to-r from-emerald-400 to-amber-300 px-3 py-1 text-sm font-black uppercase tracking-[0.18em] text-slate-900">
              MK
            </div>
            <span className="text-sm font-semibold text-emerald-200 text-main">
              Software Engineering • AI • Analytics
            </span>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold text-main">
            <a className="hover:text-[var(--text)]" href="#about">
              About
            </a>
            <a className="hover:text-[var(--text)]" href="#experience">
              Experience
            </a>
            <a className="hover:text-[var(--text)]" href="#projects">
              Projects
            </a>
            <a className="hover:text-[var(--text)]" href="#skills">
              Skills
            </a>
            <a className="hover:text-[var(--text)]" href="#contact">
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <CommandMenu />
            <ThemeToggle />
            <Button
              asChild
              variant="default"
              size="md"
              className="gap-2"
              aria-label="View resume"
            >
              <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
                Resume <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </motion.header>

        <main className="flex flex-col gap-16">
          <motion.section
            id="about"
            className="panel grid gap-6 overflow-hidden p-6 lg:grid-cols-[1.7fr,1fr]"
            {...fade}
          >
            <div className="relative z-10 space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                Computer Science @ Acadia • Software Engineering & AI
              </p>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                <Sparkles className="h-4 w-4" />
                Incoming RBC Analytics Engineer Intern
              </div>
              <h1 className="font-[var(--font-display)] text-3xl leading-tight sm:text-4xl">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-amber-200 bg-clip-text text-transparent">
                  Mehir Kumar
                </span>{" "}
                — I build analytics-driven products, ship full-stack features,
                and keep users delighted.
              </h1>
              <p className="text-lg text-muted">
                From SaaS dashboards to collaboration tools, I pair secure
                engineering with community leadership and 95%+ satisfaction
                support. I thrive where data, UX, and reliability meet.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg" className="gap-2">
                  <a href="#projects">
                    See my builds <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="lg" className="gap-2">
                  <a href="mailto:mehirk28@gmail.com">
                    Email me <Mail className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="lg" className="gap-2">
                  <a href="#contact">
                    Quick search <Search className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <Card
                    key={metric.label}
                    className="border-white/5 bg-white/5 p-4 shadow-none"
                  >
                    <span className="block text-xl font-bold text-main">
                      {metric.value}
                    </span>
                    <span className="text-sm font-semibold text-muted">
                      {metric.label}
                    </span>
                  </Card>
                ))}
              </div>
            </div>
            <Panel className="relative z-10 h-full space-y-3 p-5 text-sm text-main">
              <Badge variant="accent" className="gap-1">
                <Sparkles className="h-4 w-4" />
                Focus
              </Badge>
              <CardTitle className="text-2xl">Analytics Engineer Intern</CardTitle>
              <CardDescription className="text-base">
                Joining the Chief Administrative Office analytics team to elevate
                data quality, dashboards, and automation pipelines that power
                enterprise decisions.
              </CardDescription>
              <ul className="space-y-1 text-main/80">
                <li>• Enterprise dashboards & data quality</li>
                <li>• ETL optimization & automation workflows</li>
                <li>• Python, SQL, analytics tooling</li>
              </ul>
              <div className="pointer-events-none absolute inset-x-0 bottom-[-20%] h-44 bg-[radial-gradient(circle_at_20%_20%,rgba(62,247,195,0.2),transparent_50%)] blur-3xl" />
            </Panel>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(62,247,195,0.12),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(246,183,106,0.15),transparent_30%)]" />
          </motion.section>

          <motion.section
            id="experience"
            className="space-y-6"
            {...fade}
            transition={{ ...fade.transition, delay: 0.05 }}
          >
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                Experience
              </p>
              <h2 className="font-[var(--font-display)] text-3xl">
                What I’ve delivered
              </h2>
              <p className="text-muted">
                Impact across analytics, IT support, and community leadership
                with a focus on reliability, clarity, and secure execution.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {experience.map((item, index) => (
                <motion.div
                  key={`${item.company}-${item.role}`}
                  {...fade}
                  transition={{
                    ...fade.transition,
                    delay: 0.05 + index * 0.05,
                  }}
                >
                  <Card className="p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
                          {item.company}
                        </p>
                        <CardTitle className="text-lg">{item.role}</CardTitle>
                      </div>
                      <Badge className="text-[11px]">{item.time}</Badge>
                    </div>
                    <CardDescription className="mt-3 text-sm text-muted">
                      {item.summary}
                    </CardDescription>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="projects"
            className="space-y-6"
            {...fade}
            transition={{ ...fade.transition, delay: 0.1 }}
          >
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                Projects
              </p>
              <h2 className="font-[var(--font-display)] text-3xl">
                Products I built
              </h2>
              <p className="text-muted">
                Full-stack experiences with secure auth, clean data models, and
                delightful UX.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  {...fade}
                  transition={{
                    ...fade.transition,
                    delay: 0.1 + index * 0.05,
                  }}
                >
                  <Card className="flex h-full flex-col gap-3 p-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
                          {project.role}
                        </p>
                        <CardTitle className="text-xl leading-tight">
                          {project.title}
                        </CardTitle>
                      </div>
                      <Badge variant="amber" className="text-[11px]">
                        {project.stack}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm text-muted">
                      {project.summary}
                    </CardDescription>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-main"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="skills"
            className="panel grid gap-6 p-6 lg:grid-cols-[1.1fr,1.2fr]"
            {...fade}
            transition={{ ...fade.transition, delay: 0.12 }}
          >
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                Skills
              </p>
              <h2 className="font-[var(--font-display)] text-3xl">How I build</h2>
              <p className="text-muted">
                Full-stack foundations plus analytics, automation, and
                security-first thinking.
              </p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-muted">
                Tooling: Docker • Git • Postman • Airflow
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <Card key={skill.title} className="border-white/10 bg-white/5 p-4">
                  <CardTitle className="text-lg">{skill.title}</CardTitle>
                  <CardDescription className="text-sm text-muted">
                    {skill.items}
                  </CardDescription>
                </Card>
              ))}
            </div>
          </motion.section>

          <motion.section
            id="contact"
            className="panel flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between"
            {...fade}
            transition={{ ...fade.transition, delay: 0.16 }}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                Let&apos;s talk
              </p>
              <h2 className="font-[var(--font-display)] text-2xl">
                Want to collaborate or chat about a role?
              </h2>
              <p className="text-muted">
                Reach out for analytics engineering, full-stack work, or tech
                community building.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="md" className="gap-2">
                <a href="mailto:mehirk28@gmail.com">
                  Email me <Mail className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="md" className="gap-2">
                <a
                  href="https://www.linkedin.com/in/mehirkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="md" className="gap-2">
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
          Built by Mehir Kumar • Acadia University • Software Engineering & AI
        </footer>
      </div>
    </div>
  );
}
