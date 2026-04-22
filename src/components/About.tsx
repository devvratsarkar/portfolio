import React from 'react';
import { Award, Clock, FileText, Star, Code2 } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 animate-fade-in">
            <h2 className="section-title">About Me</h2>
            <p className="text-white/70 mb-6">
              Hi! I'm a dedicated Front-End developer specializing in building scalable and dynamic web applications using <strong>Next.js</strong>, <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Redux Toolkit</strong>.
            </p>
            <p className="text-white/70 mb-6">
              With over <strong>3 years</strong> of experience, I've worked on a wide variety of projects, ranging from responsive UIs and dashboards to content management systems and dynamic web experiences. I have strong expertise in both front-end technologies and handling integration with backend APIs.
            </p>
            <p className="text-white/70 mb-6">
            I’m passionate about writing clean, reusable code, ensuring accessibility and performance, and staying up to date with the latest advancements in front-end technologies.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="/devvrat-resume.pdf" target='_blank' rel="noopener noreferrer" className="btn-primary">
                <FileText size={18} className="mr-2" /> Download CV
              </a>

              <a href="#contact" className="btn-outline">
                Let's Talk
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 opacity-0 animate-fade-in-delay-1">
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-highlight-purple/20">
                  <Clock className="text-highlight-purple" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">3+ Years</h3>
                  <p className="text-white/70">Experience</p>
                </div>
              </div>
              <p className="text-white/70">
                Built and deployed production-ready applications using modern web stacks across different domains.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-highlight-blue/20">
                  <Star className="text-highlight-blue" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">30+</h3>
                  <p className="text-white/70">Projects</p>
                </div>
              </div>
              <p className="text-white/70">
                Delivered a wide range of solutions, from complex dashboards and user interfaces to content-rich platforms and web tools.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-highlight-cyan/20">
                  <Award className="text-highlight-cyan" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">5+</h3>
                  <p className="text-white/70">Certifications</p>
                </div>
              </div>
              <p className="text-white/70">
                Certified in frontend development, responsive design, and software development best practices.
              </p>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-highlight-pink/20">
                  <Code2 className="text-highlight-pink" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold">12+</h3>
                  <p className="text-white/70">Technologies</p>
                </div>
              </div>
              <p className="text-white/70">
                Skilled in React, Next.js, TypeScript, Tailwind CSS, Redux Toolkit, Node.js, and more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
