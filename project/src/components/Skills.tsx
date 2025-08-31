import React from 'react';
import { 
  Code, 
  Brain, 
  Database, 
  Cloud, 
  Bot, 
  Eye, 
  BarChart3, 
  Cpu 
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="text-blue-600" size={24} />,
      skills: ["Python", "SQL", "JavaScript", "R"]
    },
    {
      title: "Machine Learning",
      icon: <Brain className="text-blue-600" size={24} />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"]
    },
    {
      title: "AI Specializations",
      icon: <Cpu className="text-blue-600" size={24} />,
      skills: ["Computer Vision", "NLP", "Deep Learning", "Neural Networks"]
    },
    {
      title: "Data Science",
      icon: <BarChart3 className="text-blue-600" size={24} />,
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"]
    },
    {
      title: "Databases",
      icon: <Database className="text-blue-600" size={24} />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
    },
    {
      title: "Cloud & Tools",
      icon: <Cloud className="text-blue-600" size={24} />,
      skills: ["AWS", "Docker", "Git", "Jupyter"]
    }
  ];

  const highlights = [
    {
      icon: <Bot className="text-white" size={32} />,
      title: "Chatbot Development",
      description: "Building intelligent conversational AI systems",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Eye className="text-white" size={32} />,
      title: "Computer Vision",
      description: "Image recognition and visual AI applications",
      gradient: "from-purple-600 to-pink-600"
    },
    {
      icon: <BarChart3 className="text-white" size={32} />,
      title: "Predictive Analytics",
      description: "Data-driven insights and forecasting models",
      gradient: "from-green-600 to-teal-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building intelligent solutions and driving data-driven decisions.
          </p>
        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className={`text-center p-8 bg-gradient-to-br ${highlight.gradient} rounded-xl hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl slide-in-up stagger-${index + 1}`}
            >
              <div className="flex justify-center mb-4">
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                {highlight.title}
              </h3>
              <p className="text-gray-100">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl p-6 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300 border border-gray-600 hover:border-blue-500/50 hover:scale-105 slide-in-up stagger-${(index % 6) + 1}`}
            >
              <div className="flex items-center space-x-3 mb-4">
                {category.icon}
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-gray-900 text-gray-300 text-sm font-medium rounded-lg border border-gray-600 hover:border-blue-400 hover:text-blue-400 hover:bg-gray-800 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;