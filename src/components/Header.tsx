
import { useState, useEffect } from 'react';
import { personalInfo } from '@/data/portfolioData';
import { useTheme } from '@/contexts/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'hero';

      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setMenuOpen(false);
  };

  return (
    <header className={`fixed w-full top-0 z-50 backdrop-blur-sm py-4 px-6 ${
      theme === 'mario' 
        ? 'bg-game-brick/90 border-b-4 border-game-mushroom-red' 
        : 'bg-galactic-space-black/80 border-b border-galactic-nebula-purple'
    }`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className={`text-lg sm:text-xl ${
            theme === 'mario' ? 'font-pixel text-white' : 'font-cosmic text-galactic-stardust'
          }`}>
            <span className={`${theme === 'mario' ? 'animate-blink' : 'text-galactic-nebula-purple'}`}>_</span>
            Portfolio
          </h1>
        </div>

        {/* Theme Switcher */}
        <div className="mx-4">
          <ThemeSwitcher />
        </div>

        {/* Mobile menu button */}
        <button 
          className={`md:hidden ${theme === 'mario' ? 'text-white' : 'text-galactic-stardust'}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
            {menuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-1">
            {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <li key={section}>
                <button
                  onClick={() => scrollToSection(section)}
                  className={`navigation-item ${activeSection === section ? 'active' : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Overlay */}
        {menuOpen && (
          <div className={`fixed inset-0 top-16 z-40 md:hidden ${
            theme === 'mario' ? 'bg-game-brick/95' : 'bg-galactic-space-black/95'
          }`}>
            <nav className="h-full flex items-center justify-center">
              <ul className="flex flex-col space-y-8 items-center">
                {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
                  <li key={section} className="w-full text-center">
                    <button
                      onClick={() => scrollToSection(section)}
                      className={`navigation-item text-xl w-full ${
                        theme === 'mario' ? 'text-white' : 'text-galactic-stardust'
                      }`}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
