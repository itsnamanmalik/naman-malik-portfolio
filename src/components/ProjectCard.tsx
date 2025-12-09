import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="card fade-up">
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'baseline' }}>
        <h3>{project.title}</h3>
        {project.url ? (
          <div className="project-url">
            <a href={project.url} target="_blank" rel="noreferrer">
              Live
            </a>
          </div>
        ) : null}
      </div>
      <div className="meta">{project.org}</div>
      <p style={{ color: 'var(--text)', fontSize: 14 }}>{project.description}</p>
      <div className="chip-row">
        {project.stack.map((tech) => (
          <span className="chip" key={tech}>
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
