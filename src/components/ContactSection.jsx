import Reveal from "./Reveal.jsx";
import SectionIntro from "./SectionIntro.jsx";
import SocialLink from "./SocialLink.jsx";
import { useContactForm } from "../hooks/useContactForm.js";

export default function ContactSection({ contactNotes, socialLinks }) {
  const {
    errors,
    formData,
    handleChange,
    handleSubmit,
    isSubmitting,
    status
  } = useContactForm();

  return (
    <section
      className="section-shell"
      data-section
      id="contact"
    >
      <div className="contact-grid">
        <Reveal
          className="contact-panel"
          delay={80}
        >
          <SectionIntro
            copy="If you&apos;re hiring, collaborating, or just want to talk through product ideas and engineering work, I&apos;d love to hear from you."
            eyebrow="Contact"
            title="Let&apos;s build something thoughtful."
          />

          <div className="contact-mini-grid">
            {contactNotes.map((note, index) => (
              <Reveal
                key={note.title}
                className="contact-mini"
                delay={160 + index * 80}
              >
                <h3>{note.title}</h3>
                <p>{note.copy}</p>
                {note.href ? (
                  <a
                    className="contact-mini-link"
                    href={note.href}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {note.linkLabel}
                  </a>
                ) : null}
              </Reveal>
            ))}
          </div>

          <div className="contact-links">
            {socialLinks.map((link) => (
              <SocialLink
                key={link.label}
                link={link}
              />
            ))}
          </div>
        </Reveal>

        <Reveal
          className="contact-form-card"
          delay={140}
        >
          <form
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="form-grid">
              <div className="form-field">
                <label
                  className="form-label"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  autoComplete="name"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  placeholder="Your name"
                  type="text"
                  value={formData.name}
                />
                {errors.name ? <span className="field-error">{errors.name}</span> : null}
              </div>

              <div className="form-field">
                <label
                  className="form-label"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  autoComplete="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  placeholder="you@example.com"
                  type="email"
                  value={formData.email}
                />
                {errors.email ? <span className="field-error">{errors.email}</span> : null}
              </div>

              <div className="form-field form-field-full">
                <label
                  className="form-label"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  onChange={handleChange}
                  placeholder="What would you like to talk about?"
                  type="text"
                  value={formData.subject}
                />
                {errors.subject ? <span className="field-error">{errors.subject}</span> : null}
              </div>

              <div className="form-field form-field-hidden">
                <label htmlFor="website">Website</label>
                <input
                  autoComplete="off"
                  id="website"
                  name="website"
                  onChange={handleChange}
                  tabIndex="-1"
                  type="text"
                  value={formData.website}
                />
              </div>

              <div className="form-field form-field-full">
                <label
                  className="form-label"
                  htmlFor="message"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  onChange={handleChange}
                  placeholder="Share a little about the role, project, or problem you&apos;re working on."
                  value={formData.message}
                />
                {errors.message ? <span className="field-error">{errors.message}</span> : null}
              </div>
            </div>

            <div className="form-actions">
              <button
                className="button button-primary"
                disabled={isSubmitting}
                type="submit"
              >
                {isSubmitting ? "Sending..." : "Send message"}
              </button>

              <div
                aria-live="polite"
                className={`status-message ${status.kind ? `is-${status.kind}` : ""}`}
              >
                {status.message}
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
