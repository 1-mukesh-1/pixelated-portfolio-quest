
import { useState } from 'react';
import { skills } from '@/data/portfolioData';
import { Code, Cloud, Database, Cpu } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

const SkillCategoryButton = ({ 
  category, 
  active, 
  onClick, 
  icon 
}: { 
  category: string; 
  active: boolean; 
  onClick: () => void; 
  icon: React.ReactNode;
}) => {
  const { theme } = useTheme();
  
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border-2 transition-all duration-100 ${theme === 'mario' ? 'font-pixel' : 'font-cosmic'} text-xs sm:text-sm flex items-center justify-center ${
        active 
          ? theme === 'mario'
            ? 'bg-game-brick text-white border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]'
            : 'bg-galactic-nebula-purple text-white border-galactic-stardust shadow-cosmic'
          : theme === 'mario'
            ? 'bg-white text-game-dark-blue border-game-dark-blue shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]'
            : 'bg-galactic-deep-space text-galactic-stardust border-galactic-nebula-purple shadow-cosmic'
      }`}
    >
      {icon}
      <span className="ml-2">{category}</span>
    </button>
  );
};

const getSkillColor = (level: number, theme: string) => {
  if (theme === 'mario') {
    if (level >= 85) return 'bg-game-green';
    if (level >= 70) return 'bg-game-blue';
    if (level >= 50) return 'bg-game-yellow';
    return 'bg-game-red';
  } else {
    if (level >= 85) return 'bg-galactic-planet-green';
    if (level >= 70) return 'bg-galactic-cosmic-blue';
    if (level >= 50) return 'bg-galactic-star-yellow';
    return 'bg-galactic-meteor-red';
  }
};

const Skills = () => {
  const { theme } = useTheme();
  const categories = [...new Set(skills.map(skill => skill.category))];
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  
  const filteredSkills = skills.filter(skill => skill.category === activeCategory);
  
  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'Programming':
        return <Code size={16} />;
      case 'Cloud & DevOps':
        return <Cloud size={16} />;
      case 'Backend':
        return <Database size={16} />;
      case 'AI/ML':
        return <Cpu size={16} />;
      default:
        return <Code size={16} />;
    }
  };

  return (
    <section id="skills" className="section-container relative overflow-hidden">
      <div className="relative z-10">
        <h2 className="section-title mb-12">Skills</h2>
      </div>
      
      {theme === 'mario' && (
        <>
          {/* Mario elements decoration - moved down to not cover heading */}
          <div className="absolute top-40 left-5 z-0">
            <div className="w-10 h-10 mario-brick animate-bob-vertical"></div>
          </div>
          
          <div className="absolute top-60 right-5 z-0">
            <div className="w-10 h-10 mario-brick animate-bob-vertical animation-delay-1000"></div>
          </div>
        </>
      )}
      
      <div className="flex flex-wrap gap-2 justify-center mt-8 mb-12 relative z-10">
        {categories.map((category, index) => (
          <SkillCategoryButton
            key={category}
            category={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            icon={getCategoryIcon(category)}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 relative z-10">
        {filteredSkills.map((skill, index) => (
          <div 
            key={index} 
            className="pixel-card hover:scale-105 transition-transform"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className={theme === 'mario' ? 'font-pixel text-sm' : 'font-cosmic text-sm'}>{skill.name}</h3>
              <span className={theme === 'mario' ? 'text-xs font-pixel' : 'text-xs font-cosmic'}>{skill.level}%</span>
            </div>
            
            <div className="pixel-progress-bar relative h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`absolute top-0 left-0 h-full ${getSkillColor(skill.level, theme)}`} 
                style={{ 
                  width: '0%', 
                  transition: 'width 1s ease-out',
                  animation: 'skill-fill 1s forwards',
                  animationDelay: `${index * 100 + 300}ms`
                }}
                onAnimationEnd={(e) => {
                  (e.target as HTMLElement).style.width = `${skill.level}%`;
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      
      {theme === 'mario' && (
        <>
          {/* Star decoration instead of coins */}
          <div className="absolute bottom-10 left-1/4 animate-coin-flip z-0">
            <div className="w-6 h-6 bg-game-gold rounded-full"></div>
          </div>
          
          <div className="absolute bottom-20 right-1/4 animate-coin-flip animation-delay-500 z-0">
            <div className="w-6 h-6 bg-game-gold rounded-full"></div>
          </div>
        </>
      )}
    </section>
  );
};

export default Skills;
