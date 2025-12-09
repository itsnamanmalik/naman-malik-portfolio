export type Theme = 'dark' | 'light';

export interface Contact {
  linkedin: string;
  github: string;
  portfolio: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  stack: string[];
  bullets: string[];
}

export interface Project {
  title: string;
  org: string;
  description: string;
  stack: string[];
  url?: string;
}

export interface Education {
  degree: string;
  inst: string;
  meta: string;
}

export interface Achievement {
  title: string;
  time: string;
}

export interface Social {
  label: string;
  url: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  location: string;
  avatar: string;
  contact: Contact;
  experience: Experience[];
  projects: Project[];
  skills: Record<string, string[]>;
  achievements: Achievement[];
  education: Education[];
  social: Social[];
}
