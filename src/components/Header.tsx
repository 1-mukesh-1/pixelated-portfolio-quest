
import { useState, useEffect } from 'react';
import { personalInfo } from '@/data/portfolioData';

const Header = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [menuOpen, setMenuOpen] = useState(false);

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
    <header className="fixed w-full top-0 z-50 backdrop-blur-sm bg-game-brick/90 border-b-4 border-game-mushroom-red py-4 px-6">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-lg sm:text-xl font-pixel text-white">
            <span className="animate-blink">_</span>
            Portfolio
          </h1>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white"
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
                  className={`navigation-item text-white ${activeSection === section ? 'active' : ''}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Navigation Overlay */}
        {menuOpen && (
          <div className="fixed inset-0 top-16 bg-game-brick/95 z-40 md:hidden">
            <nav className="h-full flex items-center justify-center">
              <ul className="flex flex-col space-y-8 items-center">
                {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
                  <li key={section} className="w-full text-center">
                    <button
                      onClick={() => scrollToSection(section)}
                      className="navigation-item text-xl w-full text-white"
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
