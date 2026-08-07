import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { experience, projects, skillGroups } from "@/lib/portfolio";
import { formatPostDate, getAllPosts } from "@/lib/blog";

export default function Home() {
  const latestPost = getAllPosts()[0];

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero shell" aria-labelledby="hero-heading">
          <p className="eyebrow"><span className="status-dot" /> Based in Canada · Open to building useful things</p>
          <h1 id="hero-heading">I turn complicated systems into <em>clear, reliable products.</em></h1>
          <p className="hero__intro">
            I&apos;m Mehir, a computer science student and analytics engineer working across
            full-stack product development, secure infrastructure, and data. Most recently,
            I built identity automation systems at RBC that cut onboarding and offboarding time by about 85%.
          </p>
          <div className="hero__actions">
            <a className="button button--primary" href="mailto:mehirk28@gmail.com">
              <Mail aria-hidden="true" /> Get in touch
            </a>
          </div>
        </section>

        <section className="proof-strip" aria-label="Career highlights">
          <div className="shell proof-grid">
            <div><strong>85%</strong><span>faster onboarding and offboarding</span></div>
            <div><strong>230+</strong><span>users in 48 hours</span></div>
            <div><strong>4.00</strong><span>GPA on a 4.33 scale</span></div>
            <div><strong>95%+</strong><span>support satisfaction</span></div>
          </div>
        </section>

        <section className="section shell" id="work" aria-labelledby="work-heading">
          <div className="section-heading">
            <div><p className="eyebrow">Selected work</p><h2 id="work-heading">Things I&apos;ve shipped</h2></div>
            <p>Products built around a real need, with outcomes that can be measured.</p>
          </div>
          <div className="project-grid">
            {projects.map((project, index) => (
              <a className="project-card" href={project.href} target="_blank" rel="noreferrer" key={project.title}>
                <span className="project-card__number">0{index + 1}</span>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
                </div>
                <ArrowUpRight className="project-card__arrow" aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        <section className="section section--tinted" id="experience" aria-labelledby="experience-heading">
          <div className="shell">
            <div className="section-heading">
              <div><p className="eyebrow">Experience</p><h2 id="experience-heading">Where I&apos;ve made an impact</h2></div>
              <p>Engineering, infrastructure, technical support, and the connective tissue between them.</p>
            </div>
            <div className="timeline">
              {experience.map((item, index) => (
                <article className="timeline-item" key={item.company}>
                  <div className="timeline-item__marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                  <div className="timeline-item__date"><time>{item.period}</time><span>{item.location}</span></div>
                  <div className="timeline-item__body">
                    <p className="timeline-item__company">{item.company}</p>
                    <h3>{item.role}</h3>
                    <p>{item.summary}</p>
                    {item.highlights ? <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul> : null}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section shell" aria-labelledby="skills-heading">
          <div className="section-heading section-heading--compact">
            <div><p className="eyebrow">Toolkit</p><h2 id="skills-heading">Built across the stack</h2></div>
          </div>
          <div className="skills-grid">
            {skillGroups.map((group) => (
              <div className="skill-group" key={group.label}>
                <h3>{group.label}</h3>
                <p>{group.items.join(" · ")}</p>
              </div>
            ))}
          </div>
        </section>

        {latestPost ? (
          <section className="section shell" aria-labelledby="writing-heading">
            <div className="section-heading writing-heading">
              <div>
                <p className="eyebrow">Blog posts</p>
                <h2 id="writing-heading">Notes from the workbench</h2>
              </div>
              <p>
                Ideas and lessons from investigating software systems, reliability,
                and the tradeoffs behind the tools we use.
              </p>
            </div>
            <div className="writing-feature">
              <div className="writing-feature__label"><p className="eyebrow">Latest writing</p><span>Notes on engineering systems that last.</span></div>
              <div className="writing-feature__article">
                <div className="article-meta"><time dateTime={latestPost.publishedAt}>{formatPostDate(latestPost.publishedAt)}</time><span>·</span><span>{latestPost.readingMinutes} min read</span></div>
                <h3>{latestPost.title}</h3>
                <p>{latestPost.description}</p>
                <Link href={`/blog/${latestPost.slug}`} className="text-link">Read the article <ArrowRight aria-hidden="true" /></Link>
              </div>
            </div>
          </section>
        ) : null}

        <section className="cta shell" aria-labelledby="cta-heading">
          <p className="eyebrow">Have a problem worth solving?</p>
          <h2 id="cta-heading">Let&apos;s make it simpler.</h2>
          <p>I&apos;m always up for a thoughtful conversation about product engineering, analytics, or infrastructure.</p>
          <a className="button button--primary" href="mailto:mehirk28@gmail.com">Start a conversation <ArrowRight aria-hidden="true" /></a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
