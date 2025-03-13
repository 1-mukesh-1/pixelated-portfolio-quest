
import { personalInfo, socialLinks } from '@/data/portfolioData';
import { ArrowDownCircle, Github, Linkedin, Gamepad, Star, Flag, Zap } from 'lucide-react';

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
      <div className="absolute inset-0 -z-10" style={{
        background: 'linear-gradient(to bottom, #7EC0EE 0%, #D6F3FF 100%)',
        backgroundSize: 'cover'
      }}></div>
      
      {/* Ground element */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-game-grass border-t-8 border-game-green"></div>
      
      {/* Brick and question blocks */}
      <div className="absolute top-40 left-10 flex space-x-2">
        <div className="w-12 h-12 mario-brick"></div>
        <div className="w-12 h-12 mario-brick"></div>
        <div className="w-12 h-12 mario-block animate-question-block"></div>
        <div className="w-12 h-12 mario-brick"></div>
      </div>
      
      <div className="absolute bottom-52 right-16 flex space-x-2">
        <div className="w-12 h-12 mario-block animate-question-block animation-delay-500"></div>
        <div className="w-12 h-12 mario-brick"></div>
      </div>
      
      {/* Pipes */}
      <div className="absolute bottom-20 left-20 w-20 h-28 mario-pipe animate-pipe-appear"></div>
      <div className="absolute bottom-20 right-32 w-16 h-20 mario-pipe animate-pipe-appear animation-delay-1000"></div>
      
      {/* Cloud elements */}
      <div className="absolute top-20 left-10 cloud-float">
        <div className="bg-white rounded-3xl w-24 h-12 relative">
          <div className="absolute -top-4 left-4 bg-white rounded-full w-8 h-8"></div>
          <div className="absolute -top-6 left-10 bg-white rounded-full w-10 h-10"></div>
          <div className="absolute -top-4 left-16 bg-white rounded-full w-8 h-8"></div>
        </div>
      </div>
      
      <div className="absolute top-40 right-20 cloud-float animation-delay-1500">
        <div className="bg-white rounded-3xl w-32 h-14 relative">
          <div className="absolute -top-5 left-5 bg-white rounded-full w-10 h-10"></div>
          <div className="absolute -top-8 left-12 bg-white rounded-full w-12 h-12"></div>
          <div className="absolute -top-5 left-20 bg-white rounded-full w-10 h-10"></div>
        </div>
      </div>
      
      {/* Coins */}
      <div className="absolute top-60 left-1/4 w-8 h-8 mario-coin mario-coin-spin">$</div>
      <div className="absolute top-40 right-1/3 w-8 h-8 mario-coin mario-coin-spin animation-delay-500">$</div>
      <div className="absolute bottom-60 left-1/3 w-8 h-8 mario-coin mario-coin-spin animation-delay-1000">$</div>
      <div className="absolute bottom-80 right-1/4 w-8 h-8 mario-coin mario-coin-spin animation-delay-1500">$</div>
      
      {/* Mushroom */}
      <div className="absolute bottom-[21.5rem] right-80 bob-float">
        <div className="w-12 h-12 relative">
          <div className="absolute top-0 left-0 right-0 h-6 bg-game-mushroom-red rounded-t-full"></div>
          <div className="absolute top-2 left-2 right-2 h-2 bg-white rounded-full"></div>
          <div className="absolute bottom-0 left-1 right-1 h-6 bg-white rounded-b-md"></div>
        </div>
      </div>
      
      {/* Super Star */}
      <div className="absolute top-32 right-56 animate-pulse">
        <div className="w-10 h-10 bg-game-super-star rotate-45 transform animate-bob-vertical"></div>
      </div>
      
      {/* Flag */}
      <div className="absolute bottom-20 right-80 h-40 w-2 bg-gray-700 flex justify-center items-start mario-flagpole">
        <div className="w-12 h-8 -ml-12 bg-game-green"></div>
      </div>
      
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="order-2 md:order-1 text-center md:text-left">
          <div className="space-y-4 animate-slide-up">
            <p className="font-pixel text-game-mario-red text-sm md:text-base mb-2 animate-pulse">
              <Gamepad className="inline-block mr-2" size={16} />
              PLAYER ONE READY
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-pixel text-game-brown leading-tight text-shadow">
              I'm <span className="text-game-red text-glow">Mukesh Cheemakurthi</span> 
              <span className="animate-blink text-game-red">_</span>
            </h1>
            <p className="text-xl md:text-2xl font-pixel text-game-green mt-2 text-shadow">AI & Data Engineer</p>
            <p className="text-lg text-gray-800 mt-6 font-pixelify mb-8 bg-white/80 p-4 rounded-md shadow-inner border-2 border-game-blue">
              {personalInfo.availability}
            </p>
          
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
                    className="text-gray-800 hover:text-game-red transition-colors transform hover:scale-125 duration-200"
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
            <div className="w-64 h-64 md:w-80 md:h-80 flex items-center justify-center rounded-md overflow-hidden">
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
            <div className="absolute -top-6 -left-6 w-12 h-12 flex items-center justify-center bg-game-red rounded-full animate-bob-vertical">
              <Zap className="text-white" size={18} />
            </div>
            <div className="absolute -top-6 -right-6 w-12 h-12 flex items-center justify-center bg-game-green rounded-full animate-float animation-delay-500">
              <Flag className="text-white" size={18} />
            </div>
            <div className="absolute -bottom-6 -left-6 w-12 h-12 mario-coin animate-coin-flip text-xl">$</div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 flex items-center justify-center bg-game-blue rounded-full animate-float animation-delay-1500">
              <Star className="text-white" size={18} />
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20">
        <button 
          onClick={scrollToAbout} 
          aria-label="Scroll down" 
          className="hover:scale-125 transition-transform bg-white p-2 rounded-full shadow-lg"
        >
          <ArrowDownCircle className="text-game-green h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
