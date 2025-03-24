
import { personalInfo, socialLinks } from '@/data/portfolioData';
import { Github, Linkedin } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();
  
  return (
    <footer className={`${
      theme === 'mario' 
        ? 'bg-game-brick border-t-4 border-game-mushroom-red' 
        : 'bg-galactic-space-black border-t border-galactic-nebula-purple'
    } py-6`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-4">
            {socialLinks.map(link => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  theme === 'mario' 
                    ? 'text-white hover:text-game-gold' 
                    : 'text-galactic-stardust hover:text-galactic-star-yellow'
                } transition-colors`}
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
            theme === 'mario' ? 'font-pixel text-white' : 'font-cosmic text-galactic-stardust'
          }`}>
            &copy; {currentYear} {personalInfo.name}
          </p>
          <p className={`text-xs ${
            theme === 'mario' ? 'text-white' : 'text-galactic-stardust/70'
          }`}>
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
