import { PortfolioData } from '../types';
import { SocialRow } from './SocialRow';

interface HeroProps {
  data: PortfolioData;
}

export function Hero({ data }: HeroProps) {
  return (
    <div className="hero fade-up">
      <div className="hero-card hero-card--center">
        <div className="hero-avatar">
          <img className="profile-img profile-photo" src={data.avatar} alt={data.name} />
        </div>
        <div className="hero-title">{data.name}</div>
        <div className="hero-sub">
          {data.title} · {data.tagline}
        </div>
        <p className="hero-summary">{data.summary}</p>
        <div className="badge-row">
          <span className="badge">Location: {data.location}</span>
          <span className="badge">6 years experience</span>
          <span className="badge">CKAD Certified</span>
        </div>
        <SocialRow social={data.social} />
      </div>
    </div>
  );
}
