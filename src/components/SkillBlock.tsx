interface SkillBlockProps {
  label: string;
  items: string[];
}

export function SkillBlock({ label, items }: SkillBlockProps) {
  return (
    <div className="skill-block fade-up">
      <h4>{label}</h4>
      <div className="chip-row">
        {items.map((item) => (
          <span className="chip" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
