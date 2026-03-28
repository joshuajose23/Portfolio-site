import Reveal from "./Reveal.jsx";
import SectionIntro from "./SectionIntro.jsx";
import SkillIcon from "./SkillIcon.jsx";

export default function SkillsSection({ skillGroups }) {
  return (
    <section
      className="section-shell"
      data-section
      id="skills"
    >
      <SectionIntro
        copy="Grouped by the languages, tools, and databases I use most often."
        eyebrow="Skills"
        title="A practical stack for building, shipping, and troubleshooting software."
      />

      <div className="skills-layout">
        {skillGroups.map((group, index) => (
          <Reveal
            key={group.label}
            className={`skill-band skill-band-${group.tone}`}
            delay={100 + index * 70}
          >
            <div className="skill-band-copy">
              <p className="mini-label">{group.label}</p>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
            </div>

            <div className="skill-band-tools">
              {group.skills.map((skill) => (
                <div
                  className="skill-tool"
                  key={skill}
                >
                  <SkillIcon name={skill} />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
