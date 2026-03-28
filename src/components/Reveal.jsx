import { useReveal } from "../hooks/useReveal.js";

export default function Reveal({
  as: Tag = "div",
  children,
  className = "",
  delay = 0,
  style,
  ...rest
}) {
  const { isVisible, ref } = useReveal();

  return (
    <Tag
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      ref={ref}
      style={{
        "--delay": `${delay}ms`,
        ...(style ?? {})
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
