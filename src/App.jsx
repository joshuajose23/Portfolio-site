import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "./components/Navigation.jsx";
import HeroSection from "./components/HeroSection.jsx";
import AboutSection from "./components/AboutSection.jsx";
import SkillsSection from "./components/SkillsSection.jsx";
import ProjectsSection from "./components/ProjectsSection.jsx";
import ContactSection from "./components/ContactSection.jsx";
import Footer from "./components/Footer.jsx";
import {
  contactNotes,
  experience,
  experienceStats,
  heroHighlights,
  heroLead,
  navigationLinks,
  projects,
  skillGroups,
  socialLinks
} from "./data/siteContent.js";

const sectionIds = ["hero", "about", "skills", "projects", "contact"];

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = sectionIds
      .map((sectionId) => document.getElementById(sectionId))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        threshold: [0.2, 0.45, 0.7],
        rootMargin: "-15% 0px -45% 0px"
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <Navigation
        activeSection={activeSection}
        links={navigationLinks}
      />

      <main className="page-shell">
        <HeroSection
          highlights={heroHighlights}
          lead={heroLead}
          socialLinks={socialLinks}
        />
        <AboutSection
          experience={experience}
          experienceStats={experienceStats}
        />
        <SkillsSection skillGroups={skillGroups} />
        <ProjectsSection projects={projects} />
        <ContactSection
          contactNotes={contactNotes}
          socialLinks={socialLinks}
        />
        <Footer />
      </main>
      <Analytics />
    </div>
  );
}
