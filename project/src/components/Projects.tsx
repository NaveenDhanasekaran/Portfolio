import React from 'react';
import { ExternalLink, Code, Database, Bot } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Loctail",
      description: "Location-intelligent retail/product discovery app demo featuring maps, nearby search, and an elegant UX.",
      link: "https://tinyurl.com/loctaildemo",
      icon: <ExternalLink size={20} />,
      category: "Location Tech"
    },
    {
      title: "Agarwal Pipes Website",
      description: "Professional business website showcasing pipe manufacturing solutions with modern design and user-friendly interface.",
      link: "https://agarwal-pipes.netlify.app/",
      icon: <ExternalLink size={20} />,
      category: "Web Development"
    },
    {
      title: "Medicare-23 Website",
      description: "Healthcare platform providing comprehensive medical information and services with responsive design.",
      link: "https://medicare-23.netlify.app/",
      icon: <ExternalLink size={20} />,
      category: "Healthcare Tech"
    },
    {
      title: "We4 Website",
      description: "Modern web application with clean architecture and optimized user experience.",
      link: "https://we4.netlify.app/",
      icon: <ExternalLink size={20} />,
      category: "Web Application"
    },
    {
      title: "Janani Trader Website",
      description: "Trading platform website with professional design and comprehensive trading information.",
      link: "https://janani-trader.netlify.app/",
      icon: <ExternalLink size={20} />,
      category: "FinTech"
    },
    
    {
      title: "Chatbot Development",
      description: "Intelligent conversational AI systems built using NLP and machine learning for various business applications.",
      link: "#",
      icon: <Bot size={20} />,
      category: "AI/ML",
      comingSoon: true
    },
    {
      title: "Prediction Projects",
      description: "Data Science and Machine Learning models for forecasting, classification, and predictive analytics across different domains.",
      link: "#",
      icon: <Database size={20} />,
      category: "Data Science",
      comingSoon: true
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A showcase of my work spanning web development, AI engineering, and data science projects.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border border-gray-700 hover:border-blue-500/50 slide-in-up stagger-${(index % 6) + 1}`}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-medium text-blue-400 bg-blue-900/30 px-3 py-1 rounded-full border border-blue-500/30">
                    {project.category}
                  </span>
                  {project.comingSoon && (
                    <span className="text-xs font-medium text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full border border-gray-600">
                      Coming Soon
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                
                {!project.comingSoon ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 text-blue-400 hover:text-cyan-400 font-medium transition-all duration-200 hover:translate-x-1"
                  >
                    <span>View Project</span>
                    {project.icon}
                  </a>
                ) : (
                  <div className="inline-flex items-center space-x-2 text-gray-500 font-medium">
                    <span>In Development</span>
                    <Code size={20} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;