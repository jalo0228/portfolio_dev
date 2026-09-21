import Link from "next/link";
import type { Locale, ProjectSlug } from "@/lib/content";

type Card = {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  tags: readonly string[];
  metricLabel: string;
  metric: string;
};

export default function ProjectCard({ locale, slug, card, cta }: { locale: Locale; slug: ProjectSlug; card: Card; cta: string }) {
  return (
    <article className={`project-card ${slug === "manufacturing" ? "project-card-featured" : ""}`}>
      <div className="project-card-top">
        <span className="project-index">{card.index}</span>
        <span className="project-label">CASE STUDY</span>
      </div>
      <div className="project-card-main">
        <div>
          <h3>{card.title}</h3>
          <p className="project-subtitle">{card.subtitle}</p>
          <p className="project-description">{card.description}</p>
          <div className="tag-row">
            {card.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
          </div>
        </div>
        <div className="project-metric">
          <span>{card.metricLabel}</span>
          <strong>{card.metric}</strong>
        </div>
      </div>
      <Link className="text-link" href={`/${locale}/projects/${slug}`}>{cta} <span>↗</span></Link>
    </article>
  );
}
