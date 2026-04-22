
import React from 'react';
import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects } from './projectData';

const Projects: React.FC = () => {
  return (
    <section id="projects" className='bg-dark-300/50'>
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">Featured Projects</h2>
          <p className="section-subtitle opacity-0 animate-fade-in-delay-1">Some of my recent work</p>
        </div>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-12 items-center opacity-0 animate-fade-in`}
            >
              <div className="w-full lg:w-1/2 overflow-hidden rounded-xl glass-card p-2 group">
                <div className="overflow-hidden rounded-lg h-64 md:h-80">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
              
              <div className="w-full lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-white/70 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-white/5 rounded-full text-sm text-white/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    Live Demo <ExternalLink size={16} className="ml-2" />
                  </a>
                  {/* <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn-outline"
                  >
                    GitHub <Github size={16} className="ml-2" />
                  </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-16">
          <Link 
            to="/my-projects" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center text-highlight-purple hover:text-highlight-blue transition-colors duration-200"
          >
            View More Projects <ArrowUpRight size={18} className="ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;
