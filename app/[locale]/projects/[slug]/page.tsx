import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import { isLocale, isProjectSlug, locales, projectDetails } from "@/lib/content";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    Object.keys(projectDetails).map((slug) => ({ locale, slug }))
  );
}

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

        {slug === "manufacturing" ? (
          <div className="manufacturing-architecture">
            <div className="architecture-data-layer">
              <div className="architecture-layer-label">{locale === "ko" ? "MANUFACTURING DATA" : "MANUFACTURING DATA"}</div>
              <div className="architecture-data-cards">
                <div><span>01</span><strong>{locale === "ko" ? "설비 데이터" : "Equipment"}</strong></div>
                <div><span>02</span><strong>{locale === "ko" ? "공정 조건" : "Process Conditions"}</strong></div>
                <div><span>03</span><strong>{locale === "ko" ? "품질 데이터" : "Quality Data"}</strong></div>
              </div>
            </div>

            <div className="architecture-connector"><span>RELATIONSHIP MODELING</span><i /></div>

            <div className="architecture-core">
              <div className="architecture-core-badge">RELATIONSHIP GRAPH</div>
              <strong>GraphRAG</strong>
              <div className="graph-visual" aria-hidden="true">
                <span className="graph-node graph-node-a">Equipment</span>
                <span className="graph-node graph-node-b">Process</span>
                <span className="graph-node graph-node-c">Quality</span>
                <span className="graph-node graph-node-d">Result</span>
                <i className="graph-edge graph-edge-a" />
                <i className="graph-edge graph-edge-b" />
                <i className="graph-edge graph-edge-c" />
              </div>
              <p>{locale === "ko" ? "Entity · Relationship 기반 Graph Retrieval" : "Entity · Relationship-aware Graph Retrieval"}</p>
            </div>

            <div className="architecture-connector"><span>CONTEXT</span><i /></div>

            <div className="agent-lanes">
              <div className="architecture-layer-label">MULTI-AGENT WORKFLOW</div>
              <div className="agent-lane-grid">
                <div className="agent-lane"><span>01</span><strong>Analysis Agent</strong><small>{locale === "ko" ? "질문 의도 및 데이터 분석" : "Query & data analysis"}</small></div>
                <div className="agent-lane"><span>02</span><strong>Retrieval Agent</strong><small>{locale === "ko" ? "관계 기반 Context 검색" : "Relationship-aware context retrieval"}</small></div>
                <div className="agent-lane"><span>03</span><strong>Response Agent</strong><small>{locale === "ko" ? "근거 기반 응답 생성" : "Grounded response generation"}</small></div>
              </div>
            </div>

            <div className="architecture-connector"><span>DELIVERY</span><i /></div>

            <div className="architecture-output">
              <div>
                <span>INTERFACE</span>
                <strong>Microsoft Copilot</strong>
              </div>
              <div className="architecture-kpis">
                <div><strong>95%+</strong><span>{locale === "ko" ? "응답 정확도" : "Response accuracy"}</span></div>
                <div><strong>-30%</strong><span>{locale === "ko" ? "Token 사용량" : "Token usage"}</span></div>
              </div>
            </div>
          </div>
        ) : (
          <div className="architecture-flow">
            {p.architecture.map((step, index) => (
              <div className="architecture-step-wrap" key={step + index}>
                <div className="architecture-step"><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></div>
                {index < p.architecture.length - 1 && <div className="architecture-arrow">↓</div>}
              </div>
            ))}
          </div>
        )}
      </section>

      <section className="detail-section section-shell decision-grid">
        <div><p className="eyebrow">03 / TECHNICAL DECISION</p><h2>{p.decisionTitle}</h2></div>
        <p className="large-body">{p.decision}</p>
      </section>

      <section className="detail-section section-shell roles-grid">
        <div><p className="eyebrow">04 / ROLE</p><h2>{p.roleTitle}</h2></div>
        <div className="role-list">{p.roles.map((role) => <span key={role}>{role}</span>)}</div>
      </section>

      <section className={`result-section section-shell ${slug === "manufacturing" ? "manufacturing-result" : ""}`}>
        <p className="eyebrow">05 / {p.resultTitle.toUpperCase()}</p>
        {slug === "manufacturing" ? (
          <>
            <div className="result-metrics">
              <div><strong>95%+</strong><span>{locale === "ko" ? "응답 정확도" : "Response accuracy"}</span></div>
              <div><strong>30%</strong><span>{locale === "ko" ? "Token 사용량 절감" : "Token reduction"}</span></div>
            </div>
            <p className="result-copy">{p.result}</p>
          </>
        ) : <h2>{p.result}</h2>}
      </section>

      <section className="next-project section-shell">
        <span>{locale === "ko" ? "다른 프로젝트도 보기" : "Explore another project"}</span>
        <Link href={`/${locale}#projects`}>{locale === "ko" ? "All Projects ↗" : "All Projects ↗"}</Link>
      </section>
    </main>
  );
}
