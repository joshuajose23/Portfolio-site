function LinkedInIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path d="M6.94 8.5H3.56V19.5h3.38zm.22-3.4c0-1.08-.81-1.85-1.92-1.85-1.1 0-1.91.77-1.91 1.85 0 1.06.79 1.85 1.88 1.85h.03c1.13 0 1.92-.79 1.92-1.85zM20.44 13.04c0-3.3-1.76-4.83-4.12-4.83-1.9 0-2.75 1.04-3.22 1.77V8.5H9.72c.04.99 0 11 0 11h3.38v-6.14c0-.33.02-.65.12-.88.26-.65.86-1.33 1.87-1.33 1.32 0 1.85 1 1.85 2.47v5.88h3.38z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
    >
      <path d="M12 2.25a9.75 9.75 0 0 0-3.08 19.01c.49.09.67-.21.67-.48v-1.86c-2.73.59-3.31-1.16-3.31-1.16-.44-1.14-1.09-1.44-1.09-1.44-.89-.61.07-.6.07-.6 1 .07 1.52 1.01 1.52 1.01.87 1.49 2.29 1.06 2.85.81.09-.63.35-1.06.63-1.3-2.18-.25-4.47-1.08-4.47-4.82 0-1.06.38-1.92 1-2.59-.1-.25-.43-1.25.1-2.6 0 0 .82-.26 2.69.99a9.24 9.24 0 0 1 4.89 0c1.86-1.25 2.68-.99 2.68-.99.54 1.35.2 2.35.1 2.6.63.67 1 1.53 1 2.59 0 3.75-2.29 4.57-4.48 4.81.36.31.67.91.67 1.84v2.73c0 .27.18.58.68.48A9.75 9.75 0 0 0 12 2.25z" />
    </svg>
  );
}

const iconByLabel = {
  LinkedIn: LinkedInIcon,
  GitHub: GitHubIcon
};

export default function SocialLink({ link }) {
  const Icon = iconByLabel[link.label];

  return (
    <a
      className="social-pill"
      href={link.href}
      rel="noreferrer"
      target="_blank"
    >
      {Icon ? (
        <span className="social-pill-icon">
          <Icon />
        </span>
      ) : null}
      <span className="social-pill-label">{link.label}</span>
    </a>
  );
}
