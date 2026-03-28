import Reveal from "./Reveal.jsx";

export default function ProjectCard({ delay, project }) {
  const hasContainedImage = project.imageFit === "contain";
  const hasDarkImageBackground = project.imageBackground === "dark";
  const hasSoftImageBackground = project.imageBackground === "soft";

  return (
    <Reveal delay={delay}>
      <article className="project-card">
        <div
          className={`project-visual ${hasContainedImage ? "has-contained-image" : ""} ${hasDarkImageBackground ? "has-dark-image-bg" : ""} ${hasSoftImageBackground ? "has-soft-image-bg" : ""}`.trim()}
        >
          <img
            alt={project.imageAlt}
            className={`project-visual-image ${hasContainedImage ? "is-contained" : ""}`}
            loading="lazy"
            src={project.imageSrc}
          />
        </div>

        <div className="project-meta">
          <span className="project-type">{project.type}</span>
          <span className="project-year">{project.year}</span>
        </div>

        <h3 className="project-title">{project.title}</h3>
        <p className="project-copy">{project.description}</p>

        <ul className="project-points">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="project-tags">
          {project.stack.map((item) => (
            <span
              className="project-tag"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>

        <div className="project-actions">
          <a
            className="inline-link"
            href={project.projectHref}
            rel="noreferrer"
            target="_blank"
          >
            {project.projectLinkLabel}
          </a>
        </div>
      </article>
    </Reveal>
  );
}
