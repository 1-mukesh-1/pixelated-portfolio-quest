
import { personalInfo, socialLinks } from '@/data/portfolioData';
import { ArrowDownCircle, Github, Linkedin, Gamepad, Star, Flag, Zap } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const Hero = () => {
  const { theme } = useTheme();
  
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
      {/* Theme-specific background elements */}
      {theme === 'galactic' ? (
        // Galactic theme background
        <div className="absolute inset-0 -z-10 bg-galaxy-gradient cosmic-grid"></div>
      ) : (
        // Mario theme background
        <div className="absolute inset-0 -z-10" style={{
          background: 'linear-gradient(to bottom, #7EC0EE 0%, #D6F3FF 100%)',
          backgroundSize: 'cover'
        }}></div>
      )}
      
      {/* Mario theme specific elements */}
      {theme === 'mario' && (
        <>
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
        </>
      )}
      
      <div className="max-w-6xl w-full mx-auto grid md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="order-2 md:order-1 text-center md:text-left">
          <div className="space-y-4 animate-slide-up">
            {theme === 'galactic' ? (
              // Galactic theme content
              <>
                <p className="font-cosmic text-galactic-nebula-purple text-sm md:text-base mb-2 animate-pulse">
                  <Star className="inline-block mr-2" size={16} />
                  PROFESSIONAL PORTFOLIO
                </p>
                
                <div className="bg-galactic-deep-space/90 p-6 border border-galactic-nebula-purple/50 rounded-lg shadow-cosmic">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-cosmic text-white leading-tight">
                    I'm <span className="text-galactic-nebula-purple">Mukesh Cheemakurthi</span> 
                    <span className="animate-blink text-galactic-nebula-purple">_</span>
                  </h1>
                  <p className="text-xl md:text-2xl font-cosmic text-galactic-cosmic-blue mt-2">AI & Data Engineer</p>
                  <p className="text-lg text-galactic-stardust mt-6 p-2 border border-galactic-cosmic-blue/50 bg-galactic-space-black/50 rounded">
                    {personalInfo.availability}
                  </p>
                </div>
              </>
            ) : (
              // Mario theme content
              <>
                <p className="font-pixel text-game-mario-red text-sm md:text-base mb-2 animate-pulse">
                  <Gamepad className="inline-block mr-2" size={16} />
                  PLAYER ONE READY
                </p>
                
                <div className="bg-white/85 p-6 border-4 border-game-brick shadow-lg">
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-pixel text-game-brown leading-tight">
                    I'm <span className="text-game-red">Mukesh Cheemakurthi</span> 
                    <span className="animate-blink text-game-red">_</span>
                  </h1>
                  <p className="text-xl md:text-2xl font-pixel text-game-green mt-2">AI & Data Engineer</p>
                  <p className="text-lg text-gray-800 mt-6 font-pixelify mb-2 p-2 border-2 border-game-blue">
                    {personalInfo.availability}
                  </p>
                </div>
              </>
            )}
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mt-8">
              <a 
                href="#contact" 
                className={`pixel-button w-full sm:w-auto text-center ${
                  theme === 'galactic' ? 'bg-galactic-nebula-purple hover:bg-galactic-nebula-purple/80' : 
                  'bg-game-red hover:bg-game-red/80'
                }`}
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
                    className={`transition-colors transform hover:scale-125 duration-200 ${
                      theme === 'galactic' ? 'text-white hover:text-galactic-nebula-purple' : 
                      'text-gray-800 hover:text-game-red'
                    }`}
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
            <div className={`w-64 h-64 md:w-80 md:h-80 flex items-center justify-center rounded-md overflow-hidden ${
              theme === 'galactic' ? 'border border-galactic-nebula-purple shadow-cosmic' : 
              'border-4 border-game-brick'
            }`}>
              <img 
                src="/lovable-uploads/profile.jpg" 
                alt="Mukesh Cheemakurthi" 
                className="object-cover w-full h-full"
              />
              <div className={`absolute bottom-0 left-0 right-0 text-sm py-1 text-center ${
                theme === 'galactic' ? 'font-cosmic text-white bg-galactic-deep-space/80' : 
                'font-pixel text-white bg-game-brick'
              }`}>
                {theme === 'galactic' ? 'PORTFOLIO' : 'PLAYER-1'} <Star className="inline-block ml-1" size={12} />
              </div>
            </div>
            
            {/* Theme-specific decorations */}
            {theme === 'galactic' ? (
              // Galactic theme decorations
              <>
                <div className="absolute -top-6 -left-6 w-12 h-12 flex items-center justify-center bg-galactic-nebula-purple rounded-full animate-star-twinkle">
                  <Star className="text-white" size={18} />
                </div>
                <div className="absolute -top-6 -right-6 w-12 h-12 flex items-center justify-center bg-galactic-cosmic-blue rounded-full animate-space-float animation-delay-500">
                  <Flag className="text-white" size={18} />
                </div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 flex items-center justify-center bg-galactic-aurora-green rounded-full animate-space-float">
                  <Zap className="text-white" size={18} />
                </div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 flex items-center justify-center bg-galactic-star-yellow rounded-full animate-star-twinkle animation-delay-1500">
                  <Star className="text-white" size={18} />
                </div>
              </>
            ) : (
              // Mario theme decorations
              <>
                <div className="absolute -top-6 -left-6 w-12 h-12 flex items-center justify-center bg-game-red rounded-full animate-bob-vertical">
                  <Zap className="text-white" size={18} />
                </div>
                <div className="absolute -top-6 -right-6 w-12 h-12 flex items-center justify-center bg-game-green rounded-full animate-float animation-delay-500">
                  <Flag className="text-white" size={18} />
                </div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 mario-block">?</div>
                <div className="absolute -bottom-6 -right-6 w-12 h-12 flex items-center justify-center bg-game-blue rounded-full animate-float animation-delay-1500">
                  <Star className="text-white" size={18} />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer z-20">
        <button 
          onClick={scrollToAbout} 
          aria-label="Scroll down" 
          className={`hover:scale-125 transition-transform p-2 rounded-full shadow-lg ${
            theme === 'galactic' ? 'bg-galactic-deep-space border border-galactic-nebula-purple/50' : 'bg-white'
          }`}
        >
          <ArrowDownCircle className={`h-8 w-8 ${
            theme === 'galactic' ? 'text-galactic-nebula-purple' : 'text-game-green'
          }`} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
