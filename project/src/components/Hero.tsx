import React from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black pt-16 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-600/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6 relative z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight slide-in-up">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Naveen</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 font-light slide-in-up stagger-1">
            AI Engineer <span className="text-gray-500">|</span> Data Scientist
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed slide-in-up stagger-2">
            Passionate about building AI solutions that combine innovation, efficiency, and real-world impact.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 slide-in-up stagger-3">
            <button 
              onClick={() => scrollToSection('projects')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25"
            >
              View Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 border-2 border-gray-600 text-gray-300 font-medium rounded-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-105 hover:bg-gray-800/50"
            >
              Contact Me
            </button>
          </div>
          
          <div className="flex justify-center space-x-6 pt-8 slide-in-up stagger-4">
            <a href="https://github.com/NaveenDhanasekaran" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-200 transform hover:scale-110">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/naveen16043" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-all duration-200 transform hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="mailto:naveen16043@gmail.com" className="text-gray-400 hover:text-blue-400 transition-all duration-200 transform hover:scale-110">
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-gray-500 hover:text-blue-400 transition-colors duration-200"
          >
            <ArrowDown size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;