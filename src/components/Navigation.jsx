import { useState, useEffect } from "react";
import NavItem from "./NavItem";
import styles from "./Navigation.module.css";

function Navigation() {
  const [activeSection, setActiveSection] = useState("about-me");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Filter only intersecting entries
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => ({
            id: entry.target.id,
            top: entry.boundingClientRect.top,
          }));

        if (visibleSections.length > 0) {
          // Sort by proximity to top of viewport and pick the closest one
          visibleSections.sort((a, b) => Math.abs(a.top) - Math.abs(b.top));
          setActiveSection(visibleSections[0].id);
          console.log(visibleSections[0].id);
        }
      },
      {
        threshold: [0, 0.25, 0.5, 0.75, 1],
        rootMargin: "-10% 0px -70% 0px",
      }
    );

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <nav>
        <ul className={styles.navigationList} >
          <NavItem
            id="about-me"
            name="Sobre Mí"
            href="#about-me"
            isActive={activeSection === "about-me"}
          />
          <NavItem
            id="experience"
            name="Experiencia"
            href="#experience"
            isActive={activeSection === "experience"}
          />
          <NavItem
            id="projects"
            name="Proyectos"
            href="#projects"
            isActive={activeSection === "projects"}
          />
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
