import styles from "./ProjectCard.module.css";

function ProjectCard({ id, title, description, techList, githubUrl, liveUrl }) {
  return (
    <div className={styles.card} id={id}>
      <div className={styles.cardContent}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>

        {techList && techList.length > 0 && (
          <div className={styles.cardTech}>
            {techList.map((tech, index) => (
              <span key={index} className={styles.techBadge}>
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className={styles.cardActions}>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardButton}
            >
              Ver Demo →
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardButton}
            >
              GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
