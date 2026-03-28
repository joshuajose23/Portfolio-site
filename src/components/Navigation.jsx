import { useEffect, useState } from "react";

export default function Navigation({ activeSection, links }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 840) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <a
          className="brand"
          href="#hero"
        >
          <span className="brand-mark">JK</span>
          <span className="brand-text">Joshua Kadakampallil</span>
        </a>

        <button
          aria-controls="site-navigation"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          className={`nav-toggle ${isOpen ? "is-open" : ""}`}
          type="button"
          onClick={() => setIsOpen((open) => !open)}
        >
          <span></span>
          <span></span>
        </button>

        <nav
          className={`nav-links ${isOpen ? "is-open" : ""}`}
          id="site-navigation"
        >
          {links.map((link) => {
            const targetSection = link.href.replace("#", "");
            const isActive = activeSection === targetSection;

            return (
              <a
                key={link.href}
                className={`nav-link ${isActive ? "is-active" : ""}`}
                href={link.href}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
