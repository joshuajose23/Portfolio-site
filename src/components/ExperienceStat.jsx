import { useCountUp } from "../hooks/useCountUp.js";

export default function ExperienceStat({ delay = 0, stat }) {
  const { count, ref } = useCountUp(stat.value, { duration: 1100, delay });

  return (
    <div
      className="experience-stat-card"
      ref={ref}
    >
      <strong>
        {count}
        {stat.suffix ?? ""}
      </strong>
      <span>{stat.label}</span>
    </div>
  );
}
