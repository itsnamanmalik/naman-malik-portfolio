import { Theme } from '../types';
import { ThemeToggle } from './ThemeToggle';

interface NavBarProps {
  name: string;
  subtitle: string;
  theme: Theme;
  menuOpen: boolean;
  onToggleMenu: () => void;
  onCloseMenu: () => void;
  onToggleTheme: () => void;
}

export function NavBar({
  name,
  subtitle,
  theme,
  menuOpen,
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
        <a href="#home" onClick={onCloseMenu}>
          Home
        </a>
        <a href="#skills" onClick={onCloseMenu}>
          Skills
        </a>
        <a href="#experience" onClick={onCloseMenu}>
          Experience
        </a>
        <a href="#projects" onClick={onCloseMenu}>
          Projects
        </a>
        <a href="#achievements" onClick={onCloseMenu}>
          Achievements
        </a>
        <a href="#education" onClick={onCloseMenu}>
          Education
        </a>
        <a href="#contact" onClick={onCloseMenu}>
          Contact
        </a>
      </div>
      <ThemeToggle theme={theme} onToggle={onToggleTheme} />
    </div>
  );
}
