import Reveal from "./Reveal.jsx";
import SectionIntro from "./SectionIntro.jsx";
import ExperienceStat from "./ExperienceStat.jsx";
import ExperienceTimelineCard from "./ExperienceTimelineCard.jsx";

const principles = [
  {
    title: "Product empathy",
    copy: "Customer-facing work at Apple taught me how much clear communication and intuitive experiences matter."
  },
  {
    title: "Full-stack range",
    copy: "I enjoy pairing clean interfaces with reliable backend behavior, from APIs and databases to the final UI details."
  },
  {
    title: "Team-first delivery",
    copy: "Internships across Fidelity and Tyler gave me experience collaborating inside real engineering teams and shipping with context."
  }
];

const aboutCallout =
  "I do my best work when product clarity, reliable engineering, and thoughtful support all matter at the same time.";

export default function AboutSection({ experience, experienceStats }) {
  return (
    <section
      className="section-shell"
      data-section
      id="about"
    >
      <SectionIntro
        copy="I like thoughtful software: products that solve real problems, feel easy to trust, and hold up under everyday use."
        eyebrow="About"
        title="Curiosity, structure, and a strong bias toward useful work."
      />

      <div className="about-layout">
        <Reveal
          className="about-story"
          delay={80}
        >
          <p className="mini-label">Overview</p>

          <div className="story-body">
            <p>
              My background mixes engineering, customer empathy, and a lot of
              curiosity. I&apos;ve built with Java, Python, React, Node.js, MySQL,
              Spring Boot, Jenkins, Docker, Linux, and version control tools
              like Git, and I enjoy figuring out how those pieces should work
              together instead of treating them as isolated tools.
            </p>
            <p>
              The work that excites me most sits at the intersection of product
              quality and technical reliability: interfaces that feel clear,
              backend logic that holds up, and collaboration that makes the
              whole thing better before it ships.
            </p>
          </div>
          <div className="about-callout">
            <span
              aria-hidden="true"
              className="about-callout-line"
            />
            <p>{aboutCallout}</p>
          </div>
        </Reveal>

        <Reveal
          className="about-rail"
          delay={130}
        >
          <div className="about-rail-head">
            <p className="mini-label">How I Work</p>
            <h3>Practical thinking with a strong product lens.</h3>
            <p>
              I like teams that care about the details: clear interfaces,
              dependable systems, and communication that makes the product
              easier to trust.
            </p>
          </div>
          <div className="principles-grid">
            {principles.map((principle, index) => (
              <Reveal
                key={principle.title}
                className="principle-card"
                delay={170 + index * 80}
              >
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="experience-showcase">
        <div className="experience-overview">
          <Reveal
            className="experience-intro"
            delay={120}
          >
            <p className="mini-label">Experience + Education</p>
            <h3>Work, internships, and the degree that shaped how I build.</h3>
            <p>
              A cleaner timeline of the roles and academic work that shaped how
              I think about shipping, supporting, and improving software in
              real environments.
            </p>
          </Reveal>

          <div className="experience-stats">
            {experienceStats.map((stat, index) => (
              <Reveal
                delay={160 + index * 80}
                key={stat.label}
              >
                <ExperienceStat
                  delay={160 + index * 80}
                  stat={stat}
                />
              </Reveal>
            ))}
          </div>
        </div>

        <div className="experience-timeline">
          {experience.map((role, index) => (
            <Reveal
              className={`experience-timeline-item ${index % 2 === 0 ? "is-left" : "is-right"}`}
              delay={220 + index * 110}
              key={`${role.company}-${role.role}`}
            >
              <div
                aria-hidden="true"
                className="experience-timeline-spacer"
              />
              <span className="experience-timeline-marker">{role.timelineLabel}</span>
              <ExperienceTimelineCard role={role} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
