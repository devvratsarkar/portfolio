
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
// import Projects from '@/components/Projects';
import AllProjects from '@/components/AllProjects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-dark-200 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Skills />
      <About />
      {/* <Projects /> */}
      <AllProjects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
