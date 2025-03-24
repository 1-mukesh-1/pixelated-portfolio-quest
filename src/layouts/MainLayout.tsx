
import React, { useEffect, ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useTheme } from '@/contexts/ThemeContext';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  useEffect(() => {
    // Apply entrance animation to sections when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated-enter');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    // Simple sound effects on specific scroll percentages are kept
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      const scrolled = (scrollY / height) * 100;
      
      // Trigger effects only on specific scroll percentages
      if (scrolled > 25 && scrolled < 26) {
        console.log("25% scrolled");
        // Optional: Play a subtle sound effect here
      } else if (scrolled > 50 && scrolled < 51) {
        console.log("50% scrolled");
      } else if (scrolled > 75 && scrolled < 76) {
        console.log("75% scrolled");
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen flex flex-col overflow-x-hidden relative ${
      theme === 'galactic' 
        ? 'bg-galactic-space-black text-galactic-stardust' 
        : 'bg-game-sky text-game-dark-blue'
    }`} data-theme={theme}>
      {/* Stars background for galactic theme */}
      {theme === 'galactic' && <div className="stars"></div>}
      
      {/* Theme-specific decorations */}
      {theme === 'galactic' ? (
        <>
          {/* Nebula decorations */}
          <div className="nebula w-64 h-64 top-40 left-10 opacity-30"></div>
          <div className="nebula w-80 h-80 top-80 right-10 opacity-20"></div>
          
          {/* Planet decorations */}
          <div className="planet w-16 h-16 top-60 right-20 bg-galactic-jupiter-orange rounded-full opacity-70"></div>
          <div className="planet w-10 h-10 top-40 left-30 bg-galactic-neptune-blue rounded-full opacity-60 animation-delay-1000"></div>
          
          {/* Stars decorations */}
          <div className="star w-2 h-2 top-32 left-[20%]"></div>
          <div className="star w-1 h-1 top-48 left-[30%]"></div>
          <div className="star w-1.5 h-1.5 top-56 left-[70%]"></div>
          <div className="star w-1 h-1 top-72 left-[80%]"></div>
          <div className="star w-2 h-2 top-96 left-[40%]"></div>
        </>
      ) : (
        <>
          {/* Mario cloud decorations */}
          <div className="fixed top-20 left-5 z-0 cloud-float">
            <div className="w-16 h-6 bg-white rounded-full relative">
              <div className="absolute w-8 h-8 bg-white rounded-full -top-4 -left-2"></div>
              <div className="absolute w-10 h-10 bg-white rounded-full -top-5 left-3"></div>
              <div className="absolute w-8 h-8 bg-white rounded-full -top-4 right-0"></div>
            </div>
          </div>
          
          <div className="fixed top-40 right-10 z-0 cloud-float animation-delay-1000">
            <div className="w-20 h-8 bg-white rounded-full relative">
              <div className="absolute w-10 h-10 bg-white rounded-full -top-5 -left-2"></div>
              <div className="absolute w-12 h-12 bg-white rounded-full -top-6 left-4"></div>
              <div className="absolute w-10 h-10 bg-white rounded-full -top-5 right-0"></div>
            </div>
          </div>
        </>
      )}
      
      <Header />
      <main className="flex-grow relative z-10 pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
