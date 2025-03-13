
import { projects } from '@/data/portfolioData';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="section-container relative overflow-hidden">
      <h2 className="section-title">Projects</h2>
      
      {/* Mario Pipe decoration */}
      <div className="absolute -left-10 top-40 z-0 animate-pipe-appear">
        <div className="w-24 h-40 mario-pipe"></div>
      </div>
      
      {/* Mario flagpole decoration */}
      <div className="absolute right-10 h-60 flex flex-col items-center z-0">
        <div className="h-full w-2 bg-gray-800"></div>
        <div className="absolute top-0 right-2 w-10 h-8 bg-game-red mario-flagpole"></div>
      </div>
      
      {/* Add Lakitu cloud with fishing rod */}
      <div className="absolute right-1/4 top-20 z-0 animate-lakitu-float">
        <div className="w-16 h-8 bg-white rounded-full relative">
          <div className="absolute w-8 h-8 bg-white rounded-full -top-4 -left-2"></div>
          <div className="absolute w-10 h-10 bg-white rounded-full -top-5 left-3"></div>
          <div className="absolute w-8 h-8 bg-white rounded-full -top-4 right-0"></div>
          <div className="absolute top-0 left-1/2 w-1 h-12 bg-gray-800 transform -translate-x-1/2 rotate-12"></div>
          <div className="absolute top-12 left-1/2 w-3 h-3 bg-game-red rounded-full transform -translate-x-1/2"></div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 relative z-10">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="pixel-card transition-all hover:-translate-y-2 duration-300 animate-block-hit"
            style={{ animationDelay: `${index * 200}ms` }}
          >
            <div className="mb-4 text-game-dark-blue">
              <h3 className="font-pixel text-lg text-game-blue mb-2">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="inline-block px-2 py-1 bg-game-yellow/30 border-2 border-game-dark-blue text-xs font-pixel text-game-dark-blue animate-bob-vertical"
                  style={{ animationDelay: `${techIndex * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mt-4 text-game-dark-blue">
              <h4 className="font-pixel text-sm text-game-yellow mb-2">HIGHLIGHTS:</h4>
              <ul className="list-disc list-inside text-sm">
                {project.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="mb-2">{highlight}</li>
                ))}
              </ul>
            </div>
            
            <div className="mt-4 flex gap-4">
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-game-dark-blue hover:text-game-blue transition-colors hover:scale-110 transform"
                >
                  <Github size={16} className="mr-1" />
                  <span className="text-sm">Code</span>
                </a>
              )}
              
              {project.link && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-game-dark-blue hover:text-game-green transition-colors hover:scale-110 transform"
                >
                  <ExternalLink size={16} className="mr-1" />
                  <span className="text-sm">Live Demo</span>
                </a>
              )}
            </div>
            
            {/* Add random Mario coin that appears on hover */}
            <div className="absolute -top-4 -right-4 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-6 h-6 mario-coin animate-coin-flip">$</div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Add Bullet Bill flying across */}
      <div className="absolute -left-20 top-1/2 w-16 h-8 bg-game-bullet-bill-black rounded-r-full animate-[slide-in-right_10s_linear_infinite] z-0">
        <div className="absolute top-1/2 right-2 w-4 h-1 bg-white transform -translate-y-1/2"></div>
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full"></div>
      </div>
    </section>
  );
};

export default Projects;
