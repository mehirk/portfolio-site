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

const panel =
  "relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.35)] backdrop-blur";

export default function Home() {
  return (
    <div className="min-h-screen pb-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 pt-6 sm:px-6 lg:px-10">
        <header
          className={`${panel} sticky top-3 z-20 flex flex-wrap items-center justify-between gap-4 px-5 py-3`}
        >
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-gradient-to-r from-emerald-400 to-amber-300 px-3 py-1 text-sm font-black uppercase tracking-[0.18em] text-slate-900">
              MK
            </div>
            <span className="text-sm font-semibold text-emerald-200">
              Software Engineering • AI • Analytics
            </span>
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-200">
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#experience">
              Experience
            </a>
            <a className="hover:text-white" href="#projects">
              Projects
            </a>
            <a className="hover:text-white" href="#skills">
              Skills
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
          </nav>
          <a
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-amber-300 px-4 py-2 text-sm font-bold text-slate-900 shadow-lg transition hover:translate-y-[-2px] hover:shadow-xl"
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </header>

        <main className="flex flex-col gap-16">
          <section
            id="about"
            className={`${panel} grid gap-6 overflow-hidden p-6 lg:grid-cols-[1.7fr,1fr]`}
          >
            <div className="relative z-10 space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                Computer Science @ Acadia • Software Engineering & AI
              </p>
              <h1 className="font-[var(--font-display)] text-3xl leading-tight sm:text-4xl">
                Hi, I’m{" "}
                <span className="bg-gradient-to-r from-emerald-300 to-amber-200 bg-clip-text text-transparent">
                  Mehir Kumar
                </span>
                — I build analytics-driven products, ship full-stack features,
                and keep users delighted.
              </h1>
              <p className="text-lg text-slate-200/80">
                Incoming Analytics Engineer Intern at RBC (CAO Analytics). From
                SaaS dashboards to collaboration tools, I pair secure
                engineering with community leadership and 95%+ satisfaction
                support.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-400 to-amber-300 px-4 py-2 font-semibold text-slate-900 shadow-lg transition hover:translate-y-[-2px]"
                  href="#projects"
                >
                  See my builds
                </a>
                <a
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-4 py-2 font-semibold text-white transition hover:border-emerald-300/60 hover:text-emerald-100"
                  href="mailto:mehirk28@gmail.com"
                >
                  Email me
                </a>
              </div>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <span className="block text-xl font-bold text-white">
                      {metric.value}
                    </span>
                    <span className="text-sm font-semibold text-slate-300/80">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div
              className={`${panel} relative z-10 h-full space-y-3 p-5 text-sm text-slate-100`}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/30 bg-emerald-300/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-emerald-100">
                Incoming • RBC
              </div>
              <h2 className="font-[var(--font-display)] text-xl">
                Analytics Engineer Intern
              </h2>
              <p className="text-slate-200/80">
                Joining the Chief Administrative Office analytics team to
                elevate data quality, dashboards, and automation pipelines that
                power enterprise decisions.
              </p>
              <ul className="space-y-1 text-slate-100/80">
                <li>• Enterprise dashboards & data quality</li>
                <li>• ETL optimization & automation workflows</li>
                <li>• Python, SQL, analytics tooling</li>
              </ul>
              <div className="pointer-events-none absolute inset-x-0 bottom-[-20%] h-44 bg-[radial-gradient(circle_at_20%_20%,rgba(62,247,195,0.2),transparent_50%)] blur-3xl" />
            </div>
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(62,247,195,0.12),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(246,183,106,0.15),transparent_30%)]" />
          </section>

          <section id="experience" className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                Experience
              </p>
              <h2 className="font-[var(--font-display)] text-3xl">
                What I’ve delivered
              </h2>
              <p className="text-slate-200/80">
                Impact across analytics, IT support, and community leadership
                with a focus on reliability, clarity, and secure execution.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {experience.map((item) => (
                <article
                  key={`${item.company}-${item.role}`}
                  className={`${panel} p-5 transition duration-150 hover:-translate-y-1 hover:border-emerald-300/50`}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
                        {item.company}
                      </p>
                      <h3 className="font-[var(--font-display)] text-lg">
                        {item.role}
                      </h3>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-semibold text-slate-200/80">
                      {item.time}
                    </span>
                  </div>
                  <p className="mt-3 text-sm text-slate-200/85">
                    {item.summary}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section id="projects" className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                Projects
              </p>
              <h2 className="font-[var(--font-display)] text-3xl">
                Products I built
              </h2>
              <p className="text-slate-200/80">
                Full-stack experiences with secure auth, clean data models, and
                delightful UX.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {projects.map((project) => (
                <article
                  key={project.title}
                  className={`${panel} flex flex-col gap-3 p-5 transition duration-150 hover:-translate-y-1 hover:border-emerald-300/50`}
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-200">
                        {project.role}
                      </p>
                      <h3 className="font-[var(--font-display)] text-xl leading-tight">
                        {project.title}
                      </h3>
                    </div>
                    <span className="rounded-full border border-amber-200/30 bg-amber-200/15 px-3 py-1 text-[11px] font-semibold text-amber-100">
                      {project.stack}
                    </span>
                  </div>
                  <p className="text-sm text-slate-200/85">{project.summary}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-white/90"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section
            id="skills"
            className={`${panel} grid gap-6 p-6 lg:grid-cols-[1.1fr,1.2fr]`}
          >
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                Skills
              </p>
              <h2 className="font-[var(--font-display)] text-3xl">How I build</h2>
              <p className="text-slate-200/80">
                Full-stack foundations plus analytics, automation, and
                security-first thinking.
              </p>
              <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold text-slate-200/85">
                Tooling: Docker • Git • Postman • Airflow
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <div
                  key={skill.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <h3 className="font-[var(--font-display)] text-lg">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-slate-200/80">{skill.items}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className={`${panel} flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between`}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-200">
                Let&apos;s talk
              </p>
              <h2 className="font-[var(--font-display)] text-2xl">
                Want to collaborate or chat about a role?
              </h2>
              <p className="text-slate-200/80">
                Reach out for analytics engineering, full-stack work, or tech
                community building.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-emerald-400 to-amber-300 px-4 py-2 font-semibold text-slate-900 shadow-lg transition hover:translate-y-[-2px]"
                href="mailto:mehirk28@gmail.com"
              >
                Email me
              </a>
              <a
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-4 py-2 font-semibold text-white transition hover:border-emerald-300/60 hover:text-emerald-100"
                href="https://www.linkedin.com/in/mehirkumar"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </section>
        </main>

        <footer className="pb-6 text-center text-sm text-slate-300/75">
          Built by Mehir Kumar • Acadia University • Software Engineering & AI
        </footer>
      </div>
    </div>
  );
}
