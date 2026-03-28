import { useRef } from "react";

function updateTilt(node, event) {
  const rect = node.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  const midX = rect.width / 2;
  const midY = rect.height / 2;
  const rotateY = ((x - midX) / midX) * 5;
  const rotateX = ((midY - y) / midY) * 5;

  node.style.setProperty("--tilt-rotate-x", `${rotateX.toFixed(2)}deg`);
  node.style.setProperty("--tilt-rotate-y", `${rotateY.toFixed(2)}deg`);
}

function resetTilt(node) {
  node.style.setProperty("--tilt-rotate-x", "0deg");
  node.style.setProperty("--tilt-rotate-y", "0deg");
}

export default function ExperienceTimelineCard({ role }) {
  const cardRef = useRef(null);

  const handlePointerMove = (event) => {
    const node = cardRef.current;

    if (!node || !window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    updateTilt(node, event);
  };

  const handlePointerLeave = () => {
    if (cardRef.current) {
      resetTilt(cardRef.current);
    }
  };

  return (
    <article
      className="experience-card experience-card-tilt"
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      ref={cardRef}
    >
      <div className="experience-head">
        <div className="experience-brand">
          <div className="logo-pill">
            <img
              alt={`${role.company} logo`}
              src={role.logo}
            />
          </div>

          <div>
            <p className="experience-role">{role.role}</p>
            <p className="experience-company">{role.company}</p>
          </div>
        </div>

        <span className="experience-tag">{role.type}</span>
      </div>

      <p className="experience-period">{role.period}</p>
      <p className="experience-summary">{role.summary}</p>

      {role.roles?.length ? (
        <div className="experience-role-list">
          {role.roles.map((item) => (
            <div
              className="experience-role-item"
              key={`${role.company}-${item.title}-${item.period}`}
            >
              <div className="experience-role-item-head">
                <strong>{item.title}</strong>
                <span>{item.period}</span>
              </div>
              <p>{item.detail}</p>
            </div>
          ))}
        </div>
      ) : null}

      {role.highlights?.length ? (
        <ul className="experience-highlight-list">
          {role.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}
