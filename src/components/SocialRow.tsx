import { Social } from '../types';

interface SocialRowProps {
  social: Social[];
}

export function SocialRow({ social }: SocialRowProps) {
  return (
    <div className="social-row">
      {social.map((item) => (
        <a key={item.url} className="social-link" href={item.url} target="_blank" rel="noreferrer">
          {item.label}
        </a>
      ))}
    </div>
  );
}
