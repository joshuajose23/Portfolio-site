import ProjectCard from "./ProjectCard.jsx";
import Reveal from "./Reveal.jsx";
import SectionIntro from "./SectionIntro.jsx";

export default function ProjectsSection({ projects }) {
  return (
    <section
      className="section-shell"
      data-section
      id="projects"
    >
      <SectionIntro
        copy="A small set of projects across frontend apps, support tooling, computer vision, and data visualization."
        eyebrow="Projects"
        title="Selected projects."
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            delay={110 + index * 90}
            key={project.title}
            project={project}
          />
        ))}
      </div>

      <Reveal
        className="projects-footer"
        delay={180}
      >
        <p>
          More projects and experiments are available on GitHub.
        </p>
        <a
          className="inline-link"
          href="https://github.com/joshuajose23"
          rel="noreferrer"
          target="_blank"
        >
          Browse GitHub
        </a>
      </Reveal>
    </section>
  );
}
