import Reveal from "./Reveal.jsx";
import SocialLink from "./SocialLink.jsx";

export default function HeroSection({ highlights, lead, socialLinks }) {
  return (
    <section
      className="hero section-shell"
      data-section
      id="hero"
    >
      <div className="hero-grid">
        <div className="hero-copy">
          <Reveal delay={120}>
            <h1 className="hero-title">
              Dependable code.
              <br />
              <span>Distinct interfaces.</span>
              <br />
              Products people enjoy using.
            </h1>
          </Reveal>

          <Reveal delay={190}>
            <p className="hero-lead">{lead}</p>
          </Reveal>

          <Reveal
            as="ul"
            className="hero-highlights"
            delay={260}
          >
            {highlights.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </Reveal>

          <Reveal
            className="hero-actions"
            delay={330}
          >
            <a
              className="button button-primary"
              href="#projects"
            >
              View projects
            </a>
            <a
              className="button button-secondary"
              href="/resume/JoshuaK_resume.pdf"
              rel="noreferrer"
              target="_blank"
            >
              Open resume
            </a>
          </Reveal>

          <Reveal
            className="hero-links"
            delay={400}
          >
            {socialLinks.map((link) => (
              <SocialLink
                key={link.label}
                link={link}
              />
            ))}
          </Reveal>
        </div>

        <div className="hero-aside">
          <Reveal
            className="hero-portrait"
            delay={180}
          >
            <img
              alt="Joshua Kadakampallil portrait"
              className="hero-portrait-image"
              src="/images/profilepic.jpeg"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
