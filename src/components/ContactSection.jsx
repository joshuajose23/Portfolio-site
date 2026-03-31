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
    successCount,
    status
  } = useContactForm();

  const getFieldClassName = (value, error, extraClass = "") =>
    [
      "form-field",
      extraClass,
      value ? "has-value" : "",
      error ? "has-error" : ""
    ]
      .filter(Boolean)
      .join(" ");

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
          className={`contact-form-card ${status.kind === "success" ? "is-success" : ""}`}
          delay={140}
        >
          {successCount > 0 ? (
            <div
              aria-hidden="true"
              className="form-success-scene"
              key={successCount}
            >
              <span className="form-success-glow" />
              <span className="form-success-trail" />
              <div className="form-success-envelope">
                <span className="form-success-envelope-back" />
                <span className="form-success-envelope-letter" />
                <span className="form-success-envelope-front" />
                <span className="form-success-envelope-flap" />
              </div>
            </div>
          ) : null}

          <form
            noValidate
            onSubmit={handleSubmit}
          >
            <div className="form-grid">
              <div className={getFieldClassName(formData.name, errors.name)}>
                <div className="form-control-shell">
                  <input
                    autoComplete="name"
                    id="name"
                    name="name"
                    onChange={handleChange}
                    placeholder=" "
                    type="text"
                    value={formData.name}
                  />
                  <label
                    className="form-label"
                    htmlFor="name"
                  >
                    Name
                  </label>
                </div>
                {errors.name ? <span className="field-error">{errors.name}</span> : null}
              </div>

              <div className={getFieldClassName(formData.email, errors.email)}>
                <div className="form-control-shell">
                  <input
                    autoComplete="email"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    placeholder=" "
                    type="email"
                    value={formData.email}
                  />
                  <label
                    className="form-label"
                    htmlFor="email"
                  >
                    Email
                  </label>
                </div>
                {errors.email ? <span className="field-error">{errors.email}</span> : null}
              </div>

              <div className={getFieldClassName(formData.subject, errors.subject, "form-field-full")}>
                <div className="form-control-shell">
                  <input
                    id="subject"
                    name="subject"
                    onChange={handleChange}
                    placeholder=" "
                    type="text"
                    value={formData.subject}
                  />
                  <label
                    className="form-label"
                    htmlFor="subject"
                  >
                    Subject
                  </label>
                </div>
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

              <div className={getFieldClassName(formData.message, errors.message, "form-field-full")}>
                <div className="form-control-shell is-textarea">
                  <textarea
                    id="message"
                    name="message"
                    onChange={handleChange}
                    placeholder=" "
                    value={formData.message}
                  />
                  <label
                    className="form-label"
                    htmlFor="message"
                  >
                    Message
                  </label>
                </div>
                {errors.message ? <span className="field-error">{errors.message}</span> : null}
              </div>
            </div>

            <div className="form-actions">
              <button
                className={`button button-primary ${status.kind === "success" ? "is-success" : ""}`}
                disabled={isSubmitting}
                type="submit"
              >
                <span className="button-label">
                  {isSubmitting
                    ? "Sending..."
                    : status.kind === "success"
                      ? "Message sent"
                      : "Send message"}
                </span>
                {status.kind === "success" ? (
                  <span
                    aria-hidden="true"
                    className="button-check"
                  >
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5.5 12.5 9.5 16.5 18.5 7.5"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.4"
                      />
                    </svg>
                  </span>
                ) : null}
              </button>

              {status.message ? (
                <div
                  aria-live="polite"
                  className={`status-message ${status.kind ? `is-${status.kind}` : ""}`}
                >
                  {status.message}
                </div>
              ) : null}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
