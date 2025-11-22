import { technologies } from "../data/globalData";

function About() {
  return (
    <section className="section" id="about-me">
      <h2 className="section-title">Sobre Mí</h2>
      <div className="about-content">
        <p>
          Soy un apasionado del desarrollo web con un fuerte enfoque en la
          creación de soluciones tecnológicas eficientes y escalables. Me
          especializo en el diseño y desarrollo de aplicaciones modernas,
          utilizando tecnologías como JavaScript, Node.js, PHP y bases de datos
          como MySQL. Siempre estoy en constante aprendizaje, explorando nuevas
          herramientas y mejores prácticas para optimizar mis proyectos. Me
          encanta enfrentar nuevos desafíos, resolver problemas y colaborar en
          proyectos que impacten positivamente a los usuarios.
        </p>
        <p>
          Te invito a explorar mi portafolio, donde comparto mi trabajo,
          experiencia y pasión por la tecnología.
        </p>

        <h3 className="highlight" style={{ marginTop: "32px", marginBottom: "16px" }}>Tecnologías que Utilizo:</h3>
        <div className="container-technologies">
          <StackTechnologies />
        </div>
      </div>
    </section>
  );
}

function StackTechnologies() {
  return (
    <>
      {technologies.map((technologie, index) => (
        <a key={index} href={technologie.href} target="_blank" rel="noopener noreferrer">
          <img src={technologie.ico} alt={technologie.name || ""} className="img-technologie" />
        </a>
      ))}
    </>
  );
}

export default About;
