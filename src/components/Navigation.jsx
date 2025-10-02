import NavItem from "./NavItem";

function Navigation() {
  return (
    <>
      <nav>
        <ul className="navigationList">
          <NavItem id="about-me" name="Sobre Mí" href="#about-me" />
          <NavItem id="experience" name="Experiencia" href="#experience" />
          <NavItem id="projects" name="Proyectos" href="#projects" />
        </ul>
      </nav>
    </>
  );
}

export default Navigation;
