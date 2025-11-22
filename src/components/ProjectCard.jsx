function ProjectCard({ id, title, description, techList, githubUrl, liveUrl }) {
  return (
    <div className="card" id={id}>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>

        {techList && techList.length > 0 && (
          <div className="card__tech">
            {techList.map((tech, index) => (
              <span key={index} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="card__actions">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card__button"
            >
              Ver Demo →
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="card__button"
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

