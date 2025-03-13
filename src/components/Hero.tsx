
import { personalInfo, socialLinks } from '@/data/portfolioData';
import { ArrowDownCircle, Github, Linkedin, Gamepad, Star } from 'lucide-react';

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
      {/* Super Mario themed background elements */}
      <div className="absolute inset-0 -z-10 pixelated-grid"></div>
      
      {/* Cloud elements */}
      <div className="absolute top-20 left-10 bg-game-cloud p-4 rounded-full cloud-float opacity-80">
        <div className="w-16 h-8 rounded-full"></div>
      </div>
      <div className="absolute bottom-40 right-20 bg-game-cloud p-5 rounded-full cloud-float animation-delay-1500 opacity-80">
        <div className="w-20 h-10 rounded-full"></div>
      </div>
      
      {/* Question blocks and coins */}
      <div className="absolute top-1/4 right-1/4 mario-block hover:animate-question-block"></div>
      <div className="absolute bottom-1/3 left-1/4 w-8 h-8 bg-game-gold rounded-full mario-coin-spin"></div>
      <div className="absolute top-1/3 left-1/5 w-6 h-6 bg-game-gold rounded-full mario-coin-spin animation-delay-1000"></div>
      <div className="absolute bottom-1/4 right-1/3 w-7 h-7 bg-game-gold rounded-full mario-coin-spin animation-delay-500"></div>
      
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="order-2 md:order-1 text-center md:text-left">
          <div className="space-y-4 animate-slide-up">
            <p className="font-pixel text-game-mario-red text-sm md:text-base mb-2 animate-pulse">
              <Gamepad className="inline-block mr-2" size={16} />
              PLAYER ONE READY
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-pixel text-gray-800 leading-tight text-shadow">
              I'm <span className="text-game-blue text-glow">Mukesh Cheemakurthi</span> 
              <span className="animate-blink text-game-blue">_</span>
            </h1>
            <p className="text-xl md:text-2xl font-pixel text-game-green mt-2 text-shadow">AI & Data Engineer</p>
            <p className="text-lg text-gray-800 mt-6 font-pixelify mb-8 bg-white/80 p-2 rounded-md shadow-inner">{personalInfo.availability}</p>
          
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-8">
              <a 
                href="#contact" 
                className="pixel-button bg-game-red hover:bg-game-red/80 w-full sm:w-auto text-center"
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
                    className="text-gray-800 hover:text-game-green transition-colors transform hover:scale-125 duration-200"
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
            {/* Removed the border frame as requested */}
            <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center rounded overflow-hidden">
              <img 
                src="/lovable-uploads/profile.jpg" 
                alt="Mukesh Cheemakurthi" 
                className="object-cover w-full h-full"
              />
              <div className="absolute bottom-0 left-0 right-0 text-sm font-pixel text-white bg-game-blue/80 py-1 text-center">
                PLAYER-1 <Star className="inline-block ml-1" size={12} />
              </div>
            </div>
            
            {/* Mario themed decorations */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-game-mushroom-red rounded-full animate-bounce"></div>
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-game-green rounded-full animate-float animation-delay-500"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-game-yellow rounded-full animate-pulse animation-delay-1000"></div>
            <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-game-blue rounded-full animate-float animation-delay-1500"></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer">
        <button 
          onClick={scrollToAbout} 
          aria-label="Scroll down" 
          className="hover:scale-125 transition-transform bg-white p-2 rounded-full shadow-lg"
        >
          <ArrowDownCircle className="text-game-blue h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
