import { Theme } from '../types';
import { ThemeToggle } from './ThemeToggle';

interface NavBarProps {
  name: string;
  subtitle: string;
  theme: Theme;
  menuOpen: boolean;
  activeSection: string;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  onToggleTheme: () => void;
}

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export function NavBar({
  name,
  subtitle,
  theme,
  menuOpen,
  activeSection,
  onToggleMenu,
  onCloseMenu,
  onToggleTheme,
}: NavBarProps) {
  return (
    <div className="nav fade-up">
      <div className="nav-left">
        <span>{name}</span>
        <span className="nav-pill">{subtitle}</span>
      </div>
      <button className="menu-btn" onClick={onToggleMenu} aria-expanded={menuOpen} aria-label="Toggle navigation">
        ☰
      </button>
      <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={onCloseMenu}
            className={activeSection === link.id ? 'active' : ''}
            aria-current={activeSection === link.id ? 'page' : undefined}
          >
            {link.label}
          </a>
        ))}
      </div>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </div>
  );
}
