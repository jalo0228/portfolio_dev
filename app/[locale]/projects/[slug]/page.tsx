import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { isLocale, isProjectSlug, projectDetails } from "@/lib/content";

export default async function ProjectDetailPage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale: rawLocale, slug: rawSlug } = await params;
  if (!isLocale(rawLocale) || !isProjectSlug(rawSlug)) notFound();
  const locale = rawLocale;
  const slug = rawSlug;
  const p = projectDetails[slug][locale];

  return (
    <main>
      <Header locale={locale} suffix={`/projects/${slug}`} />
      <section className="project-hero section-shell">
        <Link className="back-link" href={`/${locale}#projects`}>← {locale === "ko" ? "Projects" : "Projects"}</Link>
        <p className="eyebrow">CASE STUDY / {p.period}</p>
        <h1>{p.title}</h1>
        <p className="project-hero-subtitle">{p.subtitle}</p>
        <p className="project-hero-overview">{p.overview}</p>
        <div className="tag-row project-hero-tags">{p.stack.map((item) => <span className="tag" key={item}>{item}</span>)}</div>
      </section>

      <section className="detail-section section-shell">
        <p className="eyebrow">01 / {p.problemTitle.toUpperCase()}</p>
        <div className="problem-grid">
          {p.problems.map(([title, body]) => <article className="problem-card" key={title}><h3>{title}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="detail-section section-shell">
        <p className="eyebrow">02 / {p.architectureTitle.toUpperCase()}</p>
        <h2>{p.architectureTitle}</h2>
        <div className="architecture-flow">
          {p.architecture.map((step, index) => (
            <div className="architecture-step-wrap" key={step + index}>
              <div className="architecture-step"><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></div>
              {index < p.architecture.length - 1 && <div className="architecture-arrow">↓</div>}
            </div>
          ))}
        </div>
      </section>

      <section className="detail-section section-shell decision-grid">
        <div><p className="eyebrow">03 / TECHNICAL DECISION</p><h2>{p.decisionTitle}</h2></div>
        <p className="large-body">{p.decision}</p>
      </section>

      <section className="detail-section section-shell roles-grid">
        <div><p className="eyebrow">04 / ROLE</p><h2>{p.roleTitle}</h2></div>
        <div className="role-list">{p.roles.map((role) => <span key={role}>{role}</span>)}</div>
      </section>

      <section className="result-section section-shell">
        <p className="eyebrow">05 / {p.resultTitle.toUpperCase()}</p>
        <h2>{p.result}</h2>
      </section>

      <section className="next-project section-shell">
        <span>{locale === "ko" ? "다른 프로젝트도 보기" : "Explore another project"}</span>
        <Link href={`/${locale}#projects`}>{locale === "ko" ? "All Projects ↗" : "All Projects ↗"}</Link>
      </section>
    </main>
  );
}
