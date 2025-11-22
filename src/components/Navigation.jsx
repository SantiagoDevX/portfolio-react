import NavItem from "./NavItem";
import styles from "./Navigation.module.css";

function Navigation() {
  return (
    <>
      <nav>
        <ul className={styles.navigationList}>
          <NavItem id="about-me" name="Sobre Mí" href="#about-me" />
          <NavItem id="experience" name="Experiencia" href="#experience" />
          <NavItem id="projects" name="Proyectos" href="#projects" />
        </ul>
      </nav>
    </>
  );
}

export default Navigation;

