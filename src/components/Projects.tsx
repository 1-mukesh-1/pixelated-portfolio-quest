
import { projects } from '@/data/portfolioData';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <h2 className="section-title">Projects</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {projects.map((project, index) => (
          <div key={index} className="pixel-card">
            <div className="mb-4">
              <h3 className="font-pixel text-lg text-game-blue mb-2">{project.title}</h3>
              <p className="text-gray-300">{project.description}</p>
            </div>
            
            <div className="flex flex-wrap gap-2 my-3">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex} 
                  className="inline-block px-2 py-1 bg-accent border-2 border-white text-xs font-pixel"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mt-4">
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
                  className="flex items-center text-white hover:text-game-blue transition-colors"
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
                  className="flex items-center text-white hover:text-game-green transition-colors"
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
