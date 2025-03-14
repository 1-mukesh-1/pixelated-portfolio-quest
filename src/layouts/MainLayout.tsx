
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

    // Add scroll animations - Mario elements appearing on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.body.offsetHeight - window.innerHeight;
      const scrolled = (scrollY / height) * 100;
      
      // Add Mario sounds on specific scroll percentages
      if (scrolled > 25 && scrolled < 26) {
        spawnMarioElement('coin');
      } else if (scrolled > 50 && scrolled < 51) {
        spawnMarioElement('mushroom');
      } else if (scrolled > 75 && scrolled < 76) {
        spawnMarioElement('star');
      }
    };

    const spawnMarioElement = (type: string) => {
      const element = document.createElement('div');
      element.className = `fixed z-50 transition-all duration-1000`;
      
      // Set different elements based on type
      if (type === 'coin') {
        element.className += ' w-8 h-8 mario-coin animate-coin-flip';
        element.textContent = '$';
      } else if (type === 'mushroom') {
        element.className += ' w-10 h-10 bg-game-mushroom-red rounded-full';
        const inner = document.createElement('div');
        inner.className = 'absolute top-1 left-1 right-1 bottom-1 bg-white rounded-full flex items-center justify-center';
        const dot = document.createElement('div');
        dot.className = 'w-4 h-4 bg-game-mushroom-red rounded-full';
        inner.appendChild(dot);
        element.appendChild(inner);
        
        const stem = document.createElement('div');
        stem.className = 'absolute -bottom-4 left-1 right-1 h-4 bg-game-dark-blue';
        element.appendChild(stem);
      } else if (type === 'star') {
        element.innerHTML = `<svg width="30" height="30" viewBox="0 0 24 24" fill="gold" stroke="gold">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>`;
        element.className += ' animate-float';
      }
      
      // Position randomly on the right side
      const topPos = Math.random() * (window.innerHeight - 100);
      element.style.top = `${topPos}px`;
      element.style.right = '0px';
      
      // Add to body and animate
      document.body.appendChild(element);
      
      // Animate to the left
      setTimeout(() => {
        element.style.right = `${window.innerWidth + 50}px`;
      }, 100);
      
      // Remove after animation
      setTimeout(() => {
        document.body.removeChild(element);
      }, 3000);
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
