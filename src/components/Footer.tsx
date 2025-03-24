
import { personalInfo, socialLinks } from '@/data/portfolioData';
import { Github, Linkedin } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  
  return (
    <footer className={`border-t py-6 transition-colors ${
      theme === 'galactic' 
        ? 'bg-galactic-deep-space border-galactic-nebula-purple/30' 
        : 'bg-game-brick border-game-mushroom-red'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-4">
            {socialLinks.map(link => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${
                  theme === 'galactic' 
                    ? 'text-galactic-stardust hover:text-galactic-nebula-purple' 
                    : 'text-white hover:text-game-gold'
                }`}
                aria-label={link.name}
              >
                {link.icon === 'github' ? (
                  <Github size={24} />
                ) : link.icon === 'linkedin' ? (
                  <Linkedin size={24} />
                ) : null}
              </a>
            ))}
          </div>
          
          <p className={`text-sm mb-1 ${
            theme === 'galactic' ? 'font-space text-galactic-stardust' : 'font-pixel text-white'
          }`}>
            &copy; {currentYear} {personalInfo.name}
          </p>
          <p className={`text-xs ${
            theme === 'galactic' ? 'text-galactic-moon-gray' : 'text-white'
          }`}>
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
