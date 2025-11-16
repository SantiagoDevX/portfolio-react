import { technologies } from "../data/globalData";
import SocialLinks from "../components/SocialLinks";

function About() {
  return (
    <section className="section about-me">
      <h2>¡Bienvenido a mi portafolio!</h2>
      <br />
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
      <br />
      <p>
        Te invito a explorar mi portafolio, donde comparto mi trabajo,
        experiencia y pasión por la tecnología.
      </p>
      <br />
      <h3>Tecnologias que Utilizo:</h3>
      <br />
      <div className="container-technologies">
        <StackTechnologies />
      </div>
    </section>
  );
}

function StackTechnologies() {
  return (
    <>
      {technologies.map((technologie, index) => (
        <a key={index} href={technologie.href} target="_blank">
          <img src={technologie.ico} alt="" className="img-technologie" />
        </a>
      ))}
    </>
  );
}

export default About;
