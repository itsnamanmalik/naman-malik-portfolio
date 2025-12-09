import { Theme } from '../types';

interface ThemeToggleProps {
  theme: Theme;
  onToggle: () => void;
}

export function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label="Toggle theme">
      {theme === 'dark' ? '🌙' : '☀️'}
    </button>
  );
}
