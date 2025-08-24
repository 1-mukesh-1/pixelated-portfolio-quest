
import { useState } from 'react';
import { skills } from '@/data/portfolioData';
import { Code, Cloud, Database, Cpu } from 'lucide-react';

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
}) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 border-2 transition-all duration-100 font-pixel text-xs sm:text-sm flex items-center justify-center ${
      active 
        ? 'bg-game-blue text-white border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,0.8)]' 
        : 'bg-transparent text-white border-white/40 hover:border-white shadow-[4px_4px_0px_0px_rgba(0,0,0,0.8)]'
    }`}
  >
    {icon}
    <span className="ml-2">{category}</span>
  </button>
);

const getSkillColor = (level: number) => {
  if (level >= 85) return 'bg-game-green';
  if (level >= 70) return 'bg-game-blue';
  if (level >= 50) return 'bg-game-yellow';
  return 'bg-game-red';
};

const Skills = () => {
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
    <section id="skills" className="section-container">
      <h2 className="section-title">Skills</h2>
      
      <div className="flex flex-wrap gap-2 justify-center mt-8 mb-12">
        {categories.map(category => (
          <SkillCategoryButton
            key={category}
            category={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
            icon={getCategoryIcon(category)}
          />
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredSkills.map((skill, index) => (
          <div key={index} className="pixel-card">
            <div className="flex justify-between items-center mb-2">
              <h3 className="font-pixel text-sm">{skill.name}</h3>
              <span className="text-xs font-pixel">{skill.level}%</span>
            </div>
            
            <div className="pixel-progress-bar">
              <div 
                className={`pixel-progress-fill ${getSkillColor(skill.level)}`} 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
