
import { personalInfo, socialLinks } from '@/data/portfolioData';
import { Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-game-brick border-t-4 border-game-mushroom-red py-6">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-4">
            {socialLinks.map(link => (
              <a 
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-game-gold transition-colors"
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
          
          <p className="text-sm font-pixel mb-1 text-white">
            &copy; {currentYear} {personalInfo.name}
          </p>
          <p className="text-xs text-white">
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
