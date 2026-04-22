import React from 'react';
import {
  Code,
  FileCode,
  Globe,
  Layout,
  Layers,
  Palette,
  Server,
  Settings,
  Rocket,
  Type,
  ServerCog,
  PenTool,
} from 'lucide-react';

const Skills: React.FC = () => {
  const skills = [
    {
      name: 'Next.js',
      icon: <Rocket className="text-highlight-red" size={28} />,
      description: 'Building server-rendered React applications with optimized performance.',
    },
    {
      name: 'React',
      icon: <Globe className="text-highlight-cyan" size={28} />,
      description: 'Developing performant and maintainable component-based user interfaces.',
    },
    {
      name: 'TypeScript',
      icon: <Type className="text-highlight-blue" size={28} />,
      description: 'Enhancing JavaScript with static typing for scalable applications.',
    },
    {
      name: 'Redux',
      icon: <Layers className="text-highlight-purple" size={28} />,
      description: 'Managing application state with predictable state containers.',
    },
    {
      name: 'Strapi',
      icon: <PenTool className="text-highlight-green" size={28} />,
      description: 'Headless CMS for building scalable and customizable APIs quickly.',
    },
    {
      name: 'REST API',
      icon: <Server className="text-highlight-cyan" size={28} />,
      description: 'Integrating with backend services and handling asynchronous data flows.',
    },
    {
      name: 'JavaScript',
      icon: <Code className="text-highlight-purple" size={28} />,
      description: 'Building interactive experiences with vanilla JS and modern ES6+ features.',
    },
    {
      name: 'Tailwind CSS',
      icon: <Palette className="text-highlight-blue" size={28} />,
      description: 'Styling applications with utility-first approach for rapid UI development.',
    },
    {
      name: 'HTML5 & CSS3',
      icon: <FileCode className="text-highlight-blue" size={28} />,
      description: 'Crafting semantic markup and modern CSS with responsive principles.',
    },
    {
      name: 'Responsive Design',
      icon: <ServerCog className="text-highlight-green" size={28} />,
      description: 'Building layouts that adapt seamlessly across devices and screen sizes.',
    },
    {
      name: 'Web Performance Optimization',
      icon: <Rocket className="text-highlight-lime" size={28} />,
      description: 'Improving load times and runtime performance using Core Web Vitals, lazy loading, and code splitting.',
    },
    {
      name: 'Git & GitHub',
      icon: <Settings className="text-highlight-blue" size={28} />,
      description: 'Version control and collaboration through distributed version control systems.',
    },
  ];

  return (
    <section id="skills" className="bg-dark-300/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="section-title opacity-0 animate-fade-in">Tech Stack & Skills</h2>
          <p className="section-subtitle opacity-0 animate-fade-in-delay-1">
            Technologies I work with on a daily basis
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-card p-6 rounded-xl transition-all duration-300 hover:bg-white/10 hover:translate-y-[-5px] opacity-0"
              style={{ animation: `fade-in 0.5s ease-out ${index * 0.1}s forwards` }}
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-white/70">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;