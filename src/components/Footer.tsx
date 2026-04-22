
import React from 'react';
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-300/80 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <a href="#" className="text-3xl font-bold mb-6">
            <span className="text-highlight-purple">Port</span>Folio
          </a>
          
          <div className="flex gap-6 mb-8">
            <a 
              href="https://github.com/Devvratbytelogic?tab=repositories" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors duration-200"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/devvrat-sarkar-32598a237/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors duration-200"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="https://www.instagram.com/devvrat_sarkar123/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors duration-200"
            >
            <Instagram size={24} />
            </a>
            <a 
              href="mailto:devsarkar025@gmail.com" 
              aria-label="Email"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors duration-200"
            >
              <Mail size={20} />
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href="#home" className="text-white/70 hover:text-white transition-colors duration-200">Home</a>
            <a href="#skills" className="text-white/70 hover:text-white transition-colors duration-200">Skills</a>
            <a href="#projects" className="text-white/70 hover:text-white transition-colors duration-200">Projects</a>
            <a href="#about" className="text-white/70 hover:text-white transition-colors duration-200">About</a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors duration-200">Contact</a>
          </div>
          
          <div className="text-center text-white/50 text-sm">
            <p>© {currentYear} Devvrat Sarkar. All rights reserved.</p>
            <p className="mt-2">
              Designed and built with <span className="text-highlight-pink">❤</span> by Devvrat Sarkar
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
