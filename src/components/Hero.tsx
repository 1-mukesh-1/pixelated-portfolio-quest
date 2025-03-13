
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
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden">
      {/* Pixelated background elements */}
      <div className="absolute inset-0 -z-10 pixelated-grid"></div>
      <div className="absolute top-20 left-10 w-12 h-12 bg-game-pink/80 animate-float rounded"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-game-green/80 animate-float animation-delay-1000 rounded"></div>
      <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-game-yellow/60 animate-float animation-delay-2000 rounded"></div>
      <div className="absolute bottom-1/3 left-1/4 w-10 h-10 bg-game-blue/60 animate-float animation-delay-1500 rounded"></div>
      
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="order-2 md:order-1 text-center md:text-left">
          <div className="space-y-4 animate-slide-up">
            <p className="font-pixel text-game-pink text-sm md:text-base mb-2 animate-pulse">HELLO WORLD</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-pixel text-white leading-tight text-shadow">
              I'm <span className="text-game-blue text-glow">Mukesh Cheemakurthi</span> 
              <span className="animate-blink text-game-pink">_</span>
            </h1>
            <p className="text-xl md:text-2xl font-pixel text-game-yellow mt-2 text-shadow">AI & Data Engineer</p>
            <p className="text-lg text-white mt-6 font-pixelify mb-8 bg-game-dark-blue/80 p-2 rounded-md shadow-inner">{personalInfo.availability}</p>
          
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-8">
              <a 
                href="#contact" 
                className="pixel-button bg-game-pink hover:bg-game-pink/80 w-full sm:w-auto text-center"
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
                    className="text-white hover:text-game-yellow transition-colors transform hover:scale-110 duration-200"
                    aria-label={link.name}
                  >
                    {link.icon === 'github' ? (
                      <Github size={24} className="hover-bounce" />
                    ) : link.icon === 'linkedin' ? (
                      <Linkedin size={24} className="hover-bounce" />
                    ) : null}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative animate-float">
            <div className="pixel-border bg-gradient-to-br from-game-blue via-game-purple to-game-pink p-4 md:p-6 w-64 h-64 md:w-80 md:h-80 flex items-center justify-center rounded">
              <div className="relative w-full h-full overflow-hidden">
                <img 
                  src="/lovable-uploads/profile.jpg" 
                  alt="Mukesh Cheemakurthi" 
                  className="object-cover w-full h-full"
                />
                <p className="absolute bottom-0 left-0 right-0 text-sm font-pixel text-white bg-game-purple/80 py-1 text-center">Player - 303</p>
              </div>
            </div>
            
            {/* Decorative pixels */}
            <div className="absolute -top-2 -left-2 w-4 h-4 bg-game-pink animate-pulse"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-game-green animate-pulse animation-delay-500"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-game-yellow animate-pulse animation-delay-1000"></div>
            <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-game-blue animate-pulse animation-delay-1500"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <button onClick={scrollToAbout} aria-label="Scroll down" className="hover:scale-110 transition-transform">
          <ArrowDownCircle className="text-game-pink h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
