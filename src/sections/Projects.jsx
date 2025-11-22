import ProjectCard from "../components/ProjectCard";
import { projectList } from "../data/globalData";
import styles from "../App.module.css";
import cardStyles from "../components/ProjectCard.module.css";

function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.sectionTitle}>Proyectos</h2>
      <div className={cardStyles.projectList}>
        {projectList.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            techList={project.techList}
            githubUrl={project.githubUrl}
            liveUrl={project.liveUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;


