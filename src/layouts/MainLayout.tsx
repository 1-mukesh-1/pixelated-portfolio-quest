
import React, { useEffect, ReactNode } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ScrollArea } from '@/components/ui/scroll-area';

interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
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

    // Removed the distracting side-to-side animations when scrolling
    // Simple mario sound effects on specific scroll percentages are kept
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
    <div className="min-h-screen flex flex-col bg-game-sky text-game-dark-blue overflow-x-hidden relative">
      {/* Fixed clouds decoration */}
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
      
      <Header />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
