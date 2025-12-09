import { Experience } from '../types';

interface ExperienceCardProps {
  item: Experience;
  isLast?: boolean;
}

export function ExperienceCard({ item, isLast }: ExperienceCardProps) {
  return (
    <div className={`timeline-item fade-up ${isLast ? 'timeline-item--last' : ''}`}>
      <div className="timeline-marker" aria-hidden />
      <div className="card timeline-card">
        <div className="timeline-row">
          <h3>{item.role}</h3>
          <span className="timeline-period">{item.period}</span>
        </div>
        <div className="meta">{item.company}</div>
        <div className="chip-row">
          {item.stack.map((tech) => (
            <span className="chip" key={tech}>
              {tech}
            </span>
          ))}
        </div>
        <ul className="bullets">
          {item.bullets.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
