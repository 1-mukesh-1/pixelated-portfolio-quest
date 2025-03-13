
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
      
      // Add more surprise Mario elements
      if (scrolled > 15 && scrolled < 16) {
        spawnMarioElement('coin');
      } else if (scrolled > 30 && scrolled < 31) {
        spawnMarioElement('mushroom');
      } else if (scrolled > 45 && scrolled < 46) {
        spawnMarioElement('star');
      } else if (scrolled > 60 && scrolled < 61) {
        spawnMarioElement('goomba');
      } else if (scrolled > 75 && scrolled < 76) {
        spawnMarioElement('1up');
      } else if (scrolled > 90 && scrolled < 91) {
        spawnMarioElement('fire-flower');
      }
      
      // Random element spawn chance (5% chance per scroll event)
      if (Math.random() < 0.05) {
        const elements = ['coin', 'mushroom', 'star', 'goomba', '1up', 'fire-flower'];
        spawnMarioElement(elements[Math.floor(Math.random() * elements.length)]);
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
        element.innerHTML = `<svg width="30" height="30" viewBox="0 0 24 24" fill="gold" stroke="gold" class="animate-star-power">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>`;
        element.className += ' animate-float';
      } else if (type === 'goomba') {
        element.className += ' w-12 h-12 goombas animate-bob-vertical';
      } else if (type === '1up') {
        element.className += ' w-10 h-10 bg-game-luigi-green rounded-full';
        const inner = document.createElement('div');
        inner.className = 'absolute top-1 left-1 right-1 bottom-1 bg-white rounded-full flex items-center justify-center font-pixel text-game-luigi-green text-xs';
        inner.textContent = '1UP';
        element.appendChild(inner);
        
        const stem = document.createElement('div');
        stem.className = 'absolute -bottom-4 left-1 right-1 h-4 bg-white';
        element.appendChild(stem);
      } else if (type === 'fire-flower') {
        element.className += ' w-12 h-12 rounded-full fire-flower';
        const petals = 8;
        for(let i = 0; i < petals; i++) {
          const petal = document.createElement('div');
          petal.className = 'absolute w-4 h-4 bg-white rounded-full';
          const angle = (i / petals) * 2 * Math.PI;
          const radius = 5;
          petal.style.left = `${radius * Math.cos(angle) + 6}px`;
          petal.style.top = `${radius * Math.sin(angle) + 6}px`;
          element.appendChild(petal);
        }
        const center = document.createElement('div');
        center.className = 'absolute w-6 h-6 bg-yellow-500 rounded-full left-3 top-3';
        element.appendChild(center);
      }
      
      // Position randomly on either side
      const topPos = Math.random() * (window.innerHeight - 100);
      const side = Math.random() > 0.5 ? 'left' : 'right';
      element.style.top = `${topPos}px`;
      element.style[side] = '0px';
      
      // Add to body and animate
      document.body.appendChild(element);
      
      // Animate across the screen
      setTimeout(() => {
        if (side === 'left') {
          element.style.left = `${window.innerWidth + 50}px`;
        } else {
          element.style.right = `${window.innerWidth + 50}px`;
        }
      }, 100);
      
      // Remove after animation
      setTimeout(() => {
        if (document.body.contains(element)) {
          document.body.removeChild(element);
        }
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
      
      {/* Piranha Plant */}
      <div className="fixed bottom-20 left-40 z-0 piranha-plant">
        <div className="w-14 h-10 bg-game-pipe-green rounded-t-lg relative">
          <div className="absolute -top-16 left-0 right-0 h-16">
            <div className="w-full h-8 bg-game-red rounded-full relative">
              <div className="absolute w-full h-8 -bottom-4 bg-white rounded-full">
                <div className="absolute left-2 right-2 -top-1 h-4 bg-game-red flex items-end justify-center overflow-hidden">
                  {Array.from({length: 6}).map((_, i) => (
                    <div key={i} className="w-2 h-4 bg-white mx-[1px]"></div>
                  ))}
                </div>
              </div>
              <div className="absolute w-3 h-3 bg-white rounded-full top-1 left-2"></div>
              <div className="absolute w-3 h-3 bg-white rounded-full top-1 right-2"></div>
              <div className="absolute w-1 h-1 bg-black rounded-full top-2 left-3"></div>
              <div className="absolute w-1 h-1 bg-black rounded-full top-2 right-3"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Koopa Troopa */}
      <div className="fixed bottom-10 right-20 z-0 koopa-walk">
        <div className="w-12 h-16 relative">
          <div className="absolute w-full h-8 bg-game-koopa-green rounded-full top-0"></div>
          <div className="absolute w-8 h-8 bg-yellow-200 rounded-full top-4 left-2"></div>
          <div className="absolute w-2 h-2 bg-black rounded-full top-6 left-3"></div>
          <div className="absolute w-2 h-2 bg-black rounded-full top-6 right-3"></div>
          <div className="absolute w-8 h-8 bg-game-koopa-green rounded-full bottom-0 left-2"></div>
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
