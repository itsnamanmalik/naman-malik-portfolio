import { useCallback, useEffect, useState } from 'react';
import { AchievementCard } from './components/AchievementCard';
import { ContactBlock } from './components/ContactBlock';
import { ExperienceCard } from './components/ExperienceCard';
import { Hero } from './components/Hero';
import { NavBar } from './components/NavBar';
import { ProjectCard } from './components/ProjectCard';
import { Section } from './components/Section';
import { SkillBlock } from './components/SkillBlock';
import { portfolioData } from './data/portfolio';
import { Theme } from './types';
import './styles.css';

const THEME_KEY = 'nm-theme';

export function App() {
  const [theme, setTheme] = useState<Theme>('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const applyTheme = useCallback((value: Theme) => {
    setTheme(value);
    document.body.classList.remove('dark', 'light');
    document.body.classList.add(value);
    window.localStorage.setItem(THEME_KEY, value);
  }, []);

  useEffect(() => {
    const saved = window.localStorage.getItem(THEME_KEY) as Theme | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initial = saved === 'light' || saved === 'dark' ? saved : prefersDark ? 'dark' : 'light';
    applyTheme(initial);
  }, [applyTheme]);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 240);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => applyTheme(theme === 'dark' ? 'light' : 'dark');
  const closeMenu = () => setMenuOpen(false);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="page" id="home">
      <NavBar
        name={portfolioData.name}
        subtitle="Backend · DevOps · LLM"
        theme={theme}
        menuOpen={menuOpen}
        onToggleMenu={() => setMenuOpen((open) => !open)}
        onCloseMenu={closeMenu}
        onToggleTheme={toggleTheme}
      />

      <Hero data={portfolioData} />

      <Section id="skills" title="Skills" icon="🛠️">
        <div className="skills-grid">
          {Object.entries(portfolioData.skills).map(([label, items]) => (
            <SkillBlock key={label} label={label} items={items} />
          ))}
        </div>
      </Section>

      <Section id="experience" title="Experience" icon="💻" count={portfolioData.experience.length}>
        <div className="timeline">
          {portfolioData.experience.map((item, index) => (
            <ExperienceCard
              key={`${item.role}-${item.company}`}
              item={item}
              isLast={index === portfolioData.experience.length - 1}
            />
          ))}
        </div>
      </Section>

      <Section id="projects" title="Projects" icon="🚀" count={portfolioData.projects.length}>
        <div className="cards">
          {portfolioData.projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </Section>

      <Section id="achievements" title="Achievements" icon="🏅">
        <div className="cards">
          {portfolioData.achievements.map((achievement) => (
            <AchievementCard key={achievement.title} achievement={achievement} />
          ))}
        </div>
      </Section>

      <Section id="education" title="Education" icon="🎓">
        <div className="cards">
          {portfolioData.education.map((education) => (
            <div className="card fade-up" key={education.degree}>
              <h3>{education.degree}</h3>
              <div className="meta">{education.inst}</div>
              <div style={{ color: 'var(--muted)', fontSize: 13 }}>{education.meta}</div>
            </div>
          ))}
        </div>
      </Section>

      <ContactBlock contact={portfolioData.contact} social={portfolioData.social} location={portfolioData.location} />

      {showScrollTop && (
        <button className="scroll-top fade-up" onClick={scrollToTop} aria-label="Scroll to top">
          ↑
        </button>
      )}

      <div className="footer fade-up">
         <span style={{ fontFamily: 'monospace', fontWeight: 700, marginRight: 4 }}>&lt;/&gt;</span> Developed by <strong>{portfolioData.name}</strong>
      </div>
    </div>
  );
}
