import { ReactNode } from 'react';

interface SectionProps {
  id?: string;
  title: string;
  icon?: ReactNode;
  count?: number;
  cta?: ReactNode;
  children: ReactNode;
}

export function Section({ id, title, icon, count, cta, children }: SectionProps) {
  return (
    <section id={id} className="section fade-up">
      <div className="section-header">
        <div className="section-title">
          {icon && <span className="section-icon">{icon}</span>}
          {title}
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
          {cta}
          {count !== undefined && <span className="pill">{count} items</span>}
        </div>
      </div>
      {children}
    </section>
  );
}
