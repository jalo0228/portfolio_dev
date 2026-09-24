import Link from "next/link";
import type { Locale, ProjectSlug } from "@/lib/content";

type Card = {
  index: string;
  title: string;
  subtitle: string;
  description: string;
  tags: readonly string[];
  metrics: readonly (readonly [string, string])[];
};

export default function ProjectCard({ locale, slug, card, cta }: { locale: Locale; slug: ProjectSlug; card: Card; cta: string }) {
  return (
    <article className="project-card">
      <Link className="project-card-link" href={`/${locale}/projects/${slug}`}>
        <div className="project-card-aside">
          <span className="project-index">{card.index}</span>
          <div className="project-metrics">
            {card.metrics.map(([label, value]) => (
              <div className="project-metric" key={label}>
                <small>{label}</small>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className="project-card-content">
          <div className="project-title-row">
            <h3>{card.title}</h3>
            <span className="project-arrow">↗</span>
          </div>
          <p className="project-subtitle">{card.subtitle}</p>
          <p className="project-description">{card.description}</p>

          <div className="tag-row">
            {card.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
          </div>

          <span className="project-cta">{cta}</span>
        </div>
      </Link>
    </article>
  );
}
