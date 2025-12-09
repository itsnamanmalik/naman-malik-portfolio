import { Contact, Social } from '../types';
import { SocialRow } from './SocialRow';

interface ContactBlockProps {
  contact: Contact;
  social: Social[];
  location: string;
}

export function ContactBlock({ contact, social, location }: ContactBlockProps) {
  return (
    <div id="contact" className="panel fade-up">
      <div className="section-header" style={{ marginBottom: 6 }}>
        <div className="section-title">Let’s build together</div>
      </div>
      <p style={{ color: 'var(--muted)' }}>
        Open to senior backend/platform roles, cloud-native projects, and LLM-enabled automation.
      </p>
      <div className="chip-row" style={{ marginTop: 12 }}>
        <span className="chip">Location: {location}</span>
      </div>
      <SocialRow social={social} />
    </div>
  );
}
