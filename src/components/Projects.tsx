
import { projects } from '@/data/portfolioData';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="section-container relative overflow-hidden">
      <h2 className="section-title">Projects</h2>
      
      {/* Mario Pipe decoration */}
      <div className="absolute -left-10 top-40 z-0">
        <div className="w-24 h-40 mario-pipe"></div>
      </div>
      
      {/* Mario flagpole decoration */}
      <div className="absolute right-10 h-60 flex flex-col items-center z-0">
        <div className="h-full w-2 bg-gray-800"></div>
        <div className="absolute top-0 right-2 w-10 h-8 bg-game-red mario-flagpole"></div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10 relative z-10">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="pixel-card transition-all hover:-translate-y-2 duration-300"
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
                  className="inline-block px-2 py-1 bg-game-yellow/30 border-2 border-game-dark-blue text-xs font-pixel text-game-dark-blue"
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
                  className="flex items-center text-game-dark-blue hover:text-game-blue transition-colors"
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
                  className="flex items-center text-game-dark-blue hover:text-game-green transition-colors"
                >
                  <ExternalLink size={16} className="mr-1" />
                  <span className="text-sm">Live Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
