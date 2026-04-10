import { projects } from '../data/projects'

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.name}
        className="project__img"
      />
    )
  }

  return (
    <div className="project__placeholder">
      <span className="project__placeholder-name">{project.name}</span>
    </div>
  )
}

function ProjectCard({ project, reverse }) {
  return (
    <article className={`project ${reverse ? 'project--reverse' : ''}`}>
      <div className="project__visual">
        <ProjectVisual project={project} />
      </div>

      <div className="project__info">
        <div className="project__header">
          <h3 className="project__name">{project.name}</h3>
          {project.status && (
            <span className="project__status">{project.status}</span>
          )}
        </div>

        <ul className="project__tech">
          {project.tech.map((t) => (
            <li key={t} className="project__tech-tag">{t}</li>
          ))}
        </ul>

        <p className="project__description">{project.description}</p>

        <div className="project__links">
          <a
            href={project.github}
            className="btn btn--outline"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          {project.live && (
            <a
              href={project.live}
              className="btn btn--primary"
              target="_blank"
              rel="noreferrer"
            >
              Live demo
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Projects</h2>
          {/* Vertical indicator added here */}
          <div className="section-divider">
            <span className="line"></span>
            <span className="dot"></span>
          </div>
        </div>

        <div className="projects__list">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 === 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
