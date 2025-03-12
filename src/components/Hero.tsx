
import { personalInfo, socialLinks } from '@/data/portfolioData';
import { ArrowDownCircle, Github, Linkedin } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 text-center md:text-left">
          <div className="space-y-4">
            <p className="font-pixel text-game-green text-sm md:text-base mb-2">HELLO WORLD</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-pixel text-white leading-tight">
              I'm <span className="text-game-blue">Mukesh Cheemakurthi</span> 
              <span className="animate-blink text-game-blue">_</span>
            </h1>
            <p className="text-xl md:text-2xl font-pixel text-game-yellow mt-2">AI & Data Engineer</p>
            <p className="text-lg text-gray-300 mt-6 font-pixelify mb-8">{personalInfo.availability}</p>
          
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-8">
              <a 
                href="#contact" 
                className="pixel-button bg-game-green hover:bg-game-green/80 w-full sm:w-auto text-center"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Contact Me
              </a>
              
              <div className="flex items-center gap-4 mt-4 sm:mt-0">
                {socialLinks.map(link => (
                  <a 
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-game-blue transition-colors"
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
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="pixel-border bg-accent p-4 md:p-6 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center rounded">
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src="/lovable-uploads/profile.jpg" 
                  alt="Mukesh Cheemakurthi" 
                  className="object-cover w-full h-full"
                />
                <p className="absolute bottom-0 left-0 right-0 text-sm font-pixel text-game-yellow bg-game-dark-blue/70 py-1 text-center">Player - 303</p>
              </div>
            </div>
            
            {/* Decorative pixels */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-game-red"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-game-green"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-game-yellow"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-game-blue"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <button onClick={scrollToAbout} aria-label="Scroll down">
          <ArrowDownCircle className="text-game-blue h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
