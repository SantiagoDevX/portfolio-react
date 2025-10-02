import ProjectCard from "../components/ProjectCard";
import { projectList } from "../data/globalData";

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Proyectos</h2>
      <div className="project-list">
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            techList={project.techList}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;
