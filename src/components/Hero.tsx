
import React, { useState, useEffect } from 'react';
import { ArrowRight, Github, Instagram, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const titles = ['Front-End Developer', 'ReactJs Developer', 'NextJs Developer',];

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];

    if (isTyping) {
      if (displayText.length < currentTitle.length) {
        const timeout = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 100);

        return () => clearTimeout(timeout);
      } else {
        // Wait before starting to erase
        const timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1500);

        return () => clearTimeout(timeout);
      }
    } else {
      if (displayText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, displayText.length - 1));
        }, 50);

        return () => clearTimeout(timeout);
      } else {
        // Switch to the next title and start typing again
        const timeout = setTimeout(() => {
          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
          setIsTyping(true);
        }, 500);

        return () => clearTimeout(timeout);
      }
    }
  }, [displayText, isTyping, currentTitleIndex, titles]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute top-0 right-0 z-10 w-1/2 h-1/2 bg-highlight-purple/20 blur-[120px] rounded-full animate-pulse-glow" />
      <div className="absolute bottom-0 left-0 z-10 w-1/2 h-1/2 bg-highlight-blue/20 blur-[120px] rounded-full animate-pulse-glow" />

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-y-5 lg:gap-5 items-center">
          <div className="order-2 lg:order-1 col-span-3">
            <p className="text-highlight-purple font-medium mb-4 opacity-0 animate-fade-in">👋 HELLO THERE, I'M</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl  font-bold leading-tight mb-6 opacity-0 animate-fade-in-delay-1">
              <span className="block">Devvrat Sarkar</span>
              <span className="block gradient-text mt-3">
                {displayText}
                <span className="animate-pulse gradient-text">|</span>
              </span>
            </h1>
            <p className="text-xl text-white/70 mb-8 max-w-lg opacity-0 animate-fade-in-delay-2">
              I build exceptional and accessible digital experiences for the web.
            </p>
            <div className="flex flex-wrap gap-4 mb-8 z-20 relative opacity-0 animate-fade-in-delay-3">
              <a href="#projects" className="btn-primary">
                View My Work <ArrowRight size={18} className="ml-2" />
              </a>
              <a href="#contact" className="btn-outline">
                Contact Me
              </a>
            </div>
            <div className="flex items-center gap-4 opacity-0  z-20 relative animate-fade-in-delay-3">
              <a href="https://github.com/Devvratbytelogic?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-200">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/devvrat-sarkar-32598a237/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-200">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/devvrat_sarkar123/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors duration-200">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 col-span-2 flex justify-center lg:justify-end opacity-0 animate-fade-in-delay-2 mt-8">
            <div className="relative animate-float transition-transform duration-500 hover:scale-105">
              <div className="w-80 h-80 md:w-[450px] md:h-[450px] rounded-full bg-gradient-to-br from-indigo-600 to-purple-500 p-1 shadow-glow">
                <div className="w-full h-full rounded-full overflow-hidden bg-dark-200">
                  <img
                    src="/images/devvrat.jpg"
                    alt="Devvrat Sarkar"
                    title="Devvrat Sarkar"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute bottom-0 lg:bottom-4 right-1/2 lg:-right-4 max-lg:translate-x-1/2 bg-dark-100 px-6 py-3 rounded-lg glass-card whitespace-nowrap shadow-lg">
                <p className="text-sm font-medium text-yellow-400">
                  <span className="text-highlight-cyan">3+ Years</span> Experience
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
