import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import ProjectCard from "@/components/ProjectCard";
import { content, isLocale, locales, type ProjectSlug } from "@/lib/content";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function PortfolioPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const t = content[locale];
  const slugs: ProjectSlug[] = ["manufacturing", "nittany", "development"];

  return (
    <main>
      <Header locale={locale} />

      <section className="hero section-shell">
        <div className="hero-gridline hero-gridline-a" />
        <div className="hero-gridline hero-gridline-b" />

        <div className="hero-main">
          <div className="hero-copy-block">
            <p className="eyebrow">{t.hero.eyebrow}</p>
            <h1>{t.hero.title[0]}<br />{t.hero.title[1]}</h1>
            <p className="hero-copy">{t.hero.description}</p>
            <div className="hero-actions">
              <Link className="button button-primary" href={`/${locale}#projects`}>{t.hero.primary}</Link>
              <Link className="button button-secondary" href={`/${locale}#contact`}>{t.hero.secondary}</Link>
            </div>
            <div className="hero-tags">{t.hero.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>

          <aside className="agent-console" aria-label="AI system architecture preview">
            <div className="agent-console-head">
              <span>AI SYSTEM / LIVE</span>
              <span className="agent-status"><i /> READY</span>
            </div>
            <div className="agent-flow">
              <div className="agent-node"><span>01</span><strong>DATA</strong><small>Pipeline · 70GB+</small></div>
              <div className="agent-line" />
              <div className="agent-node"><span>02</span><strong>RETRIEVAL</strong><small>RAG · GraphRAG</small></div>
              <div className="agent-line" />
              <div className="agent-node"><span>03</span><strong>AGENT</strong><small>Routing · Multi-Agent</small></div>
              <div className="agent-line" />
              <div className="agent-node"><span>04</span><strong>SERVICE</strong><small>FastAPI · Azure</small></div>
            </div>
          </aside>
        </div>

        <div className="hero-stats">
          {t.hero.stats.map(([value, label, note]) => (
            <div className="hero-stat" key={label}>
              <strong>{value}</strong>
              <span>{label}</span>
              <small>{note}</small>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="section section-shell experience-section">
        <div className="experience-heading">
          <div>
            <p className="eyebrow">{t.workExperience.label}</p>
            <h2>{t.workExperience.company}</h2>
          </div>
          <div className="experience-meta">
            <strong>{t.workExperience.role}</strong>
            <span>{t.workExperience.period}</span>
          </div>
        </div>

        <p className="experience-summary">{t.workExperience.summary}</p>

        <div className="experience-grid">
          {t.workExperience.items.map((item) => (
            <article className="experience-card" key={item.index}>
              <div className="experience-card-top">
                <span>{item.index}</span>
                <div className="experience-card-metrics">
                  {item.metrics.map(([label, value]) => (
                    <div key={label}>
                      <small>{label}</small>
                      <strong>{value}</strong>
                    </div>
                  ))}
                </div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section section-shell">
        <p className="eyebrow">{t.projectsLabel}</p>
        <div className="section-heading"><h2>{t.projectsTitle}</h2><span className="section-count">03</span></div>
        <div className="projects-grid">
          {slugs.map((slug) => <ProjectCard key={slug} locale={locale} slug={slug} card={t.projectCards[slug]} cta={t.viewCaseStudy} />)}
        </div>
      </section>

      <section id="about" className="section section-shell about-grid">
        <div>
          <p className="eyebrow">{t.about.label}</p>
          <h2>{t.about.title}</h2>
        </div>
        <div className="about-copy">
          {t.about.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <aside className="education-card">
          <span className="card-kicker">{t.about.educationLabel}</span>
          {t.about.education.map((line, index) => index === 0 ? <strong key={line}>{line}</strong> : <span key={line}>{line}</span>)}
        </aside>
      </section>

      <section className="section section-shell">
        <p className="eyebrow">{t.whatIBuild.label}</p>
        <h2>{t.whatIBuild.title}</h2>
        <div className="build-grid">
          {t.whatIBuild.items.map(([index, title, description]) => (
            <article className="build-item" key={index}>
              <span>{index}</span><h3>{title}</h3><p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="section section-shell skills-section">
        <p className="eyebrow">{t.skills.label}</p>
        <h2>{t.skills.title}</h2>
        <div className="skills-grid">
          {t.skills.groups.map(([group, skills]) => (
            <article className="skill-group" key={group}>
              <h3>{group}</h3>
              <div className="skill-list">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
            </article>
          ))}
        </div>
      </section>

      <section id="journey" className="section section-shell journey-section">
        <p className="eyebrow">{t.journey.label}</p>
        <h2>{t.journey.title}</h2>
        <div className="timeline">
          {t.journey.items.map(([date, title, project, detail]) => (
            <article className="timeline-item" key={date}>
              <time>{date}</time>
              <div className="timeline-dot" />
              <div><h3>{title}</h3><p>{project}</p><span>{detail}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="philosophy section-shell">
        <span>“</span><blockquote>{t.philosophy}</blockquote><span>”</span>
      </section>

      <section id="contact" className="contact section-shell">
        <p className="eyebrow">{t.contact.label}</p>
        <h2>{t.contact.title}</h2>
        <p>{t.contact.body}</p>
        <a className="contact-email" href="mailto:youhyunk01@gmail.com"><span>{t.contact.emailLabel}</span>youhyunk01@gmail.com ↗</a>
      </section>

      <footer className="footer section-shell"><span>© 2026 YOUHYUN KIM</span><span>AI AGENT DEVELOPER</span></footer>
    </main>
  );
}
