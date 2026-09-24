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
    <>
      <Header locale={locale} />

      <main className="portfolio-shell">
        <aside className="profile-pane">
          <div className="profile-top">
            <p className="profile-kicker">AI AGENT ENGINEER</p>
            <h1>{locale === "ko" ? "김유현" : "Youhyun Kim"}</h1>
            <h2>{locale === "ko" ? "AI Agent Engineer" : "AI Agent Engineer"}</h2>
            <p className="profile-summary">{t.hero.description}</p>
          </div>

          <nav className="profile-nav" aria-label="Section navigation">
            {[
              ["about", locale === "ko" ? "소개" : "About"],
              ["experience", locale === "ko" ? "경력" : "Experience"],
              ["projects", locale === "ko" ? "프로젝트" : "Projects"],
              ["interests", locale === "ko" ? "관심사 / 프로젝트" : "Interests / Projects"],
              ["skills", locale === "ko" ? "기술" : "Skills"],
              ["contact", "Contact"],
            ].map(([id, label]) => (
              <Link href={`#${id}`} key={id}>
                <span className="profile-nav-line" />
                <span>{label}</span>
              </Link>
            ))}
          </nav>

          <div className="profile-bottom">
            <div className="profile-controls">
              <Link className="desktop-lang-switch" href={`/${locale === "ko" ? "en" : "ko"}`}>
                {locale === "ko" ? "KO / EN" : "EN / KO"}
              </Link>
            </div>
            <div className="profile-tags">
              {t.hero.tags.map((tag) => <span key={tag}>{tag}</span>)}
            </div>
            <a href="mailto:youhyunk01@gmail.com" className="profile-email">
              youhyunk01@gmail.com ↗
            </a>
          </div>
        </aside>

        <div className="content-pane">
          <section id="about" className="content-section about-section">
            <p className="section-label">{t.about.label}</p>
            <div className="about-copy">
              {t.about.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>

            <div className="proof-grid">
              {t.hero.stats.map(([value, label, note]) => (
                <article className="proof-item" key={label}>
                  <strong>{value}</strong>
                  <span>{label}</span>
                  <small>{note}</small>
                </article>
              ))}
            </div>

            <aside className="education-card">
              <span className="card-kicker">{t.about.educationLabel}</span>
              {t.about.education.map((line, index) =>
                index === 0 ? <strong key={line}>{line}</strong> : <span key={line}>{line}</span>
              )}
            </aside>
          </section>

          <section id="experience" className="content-section">
            <p className="section-label">{t.workExperience.label}</p>

            <article className="experience-overview">
              <div className="experience-overview-head">
                <div>
                  <h2>{t.workExperience.role} · {t.workExperience.company}</h2>
                  <p>{t.workExperience.summary}</p>
                </div>
                <time>{t.workExperience.period}</time>
              </div>

              <div className="experience-list">
                {t.workExperience.items.map((item) => (
                  <div className="experience-row" key={item.index}>
                    <span className="experience-index">{item.index}</span>
                    <div className="experience-row-body">
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                      <div className="inline-metrics">
                        {item.metrics.map(([label, value]) => (
                          <span key={label}><small>{label}</small>{value}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <section id="projects" className="content-section">
            <div className="content-section-head">
              <p className="section-label">{t.projectsLabel}</p>
              <span>03</span>
            </div>

            <div className="projects-grid">
              {slugs.map((slug) => (
                <ProjectCard
                  key={slug}
                  locale={locale}
                  slug={slug}
                  card={t.projectCards[slug]}
                  cta={t.viewCaseStudy}
                />
              ))}
            </div>
          </section>

          <section id="interests" className="content-section">
            <p className="section-label">{t.interestsProjects.label}</p>
            <div className="interest-project-list">
              {t.interestsProjects.items.map((item) => (
                <article className="interest-project-row" key={item.title}>
                  <span className="interest-project-type">{item.type}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="content-section">
            <p className="section-label">{t.skills.label}</p>
            <div className="skills-list">
              {t.skills.groups.map(([group, skills]) => (
                <article className="skill-row" key={group}>
                  <h3>{group}</h3>
                  <div>
                    {skills.map((skill) => <span key={skill}>{skill}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="content-section focus-section">
            <p className="section-label">{t.whatIBuild.label}</p>
            <div className="focus-list">
              {t.whatIBuild.items.map(([index, title, description]) => (
                <article key={index}>
                  <span>{index}</span>
                  <div><h3>{title}</h3><p>{description}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section id="contact" className="content-section contact-section">
            <p className="section-label">{t.contact.label}</p>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.body}</p>
            <a className="contact-link" href="mailto:youhyunk01@gmail.com">
              youhyunk01@gmail.com <span>↗</span>
            </a>
          </section>

          <footer className="portfolio-footer">
            <span>© 2026 YOUHYUN KIM</span>
            <span>{locale === "ko" ? "Next.js · Vercel" : "Next.js · Vercel"}</span>
          </footer>
        </div>
      </main>
    </>
  );
}
