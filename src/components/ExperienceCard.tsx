import { Experience } from '../types';

interface ExperienceCardProps {
  item: Experience;
}

export function ExperienceCard({ item }: ExperienceCardProps) {
  return (
    <div className="card fade-up">
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: 8, alignItems: 'baseline' }}>
        <h3>{item.role}</h3>
        <span style={{ color: 'var(--muted)', fontSize: 12 }}>{item.period}</span>
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
  );
}
