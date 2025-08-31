import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      type: "work",
      title: "Data Scientist",
      company: "Matrimony.com",
      period: "Present",
      description: "Working on data-driven features and ML solutions to enhance user experience and business outcomes.",
      icon: <Briefcase className="text-blue-600" size={20} />
    },
    {
      type: "work",
      title: "AI Engineer (Intern)",
      company: "The Term Time, UK",
      period: "2 years",
      description: "Built and deployed AI features, including NLP/computer vision pipelines and automation tools.",
      icon: <Briefcase className="text-blue-600" size={20} />
    },
    {
      type: "work",
      title: "ML Engineer (Intern)",
      company: "Vei Technology",
      period: "Internship",
      description: "Developed ML models and assisted with model training, evaluation, and integration into applications.",
      icon: <Briefcase className="text-blue-600" size={20} />
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-gray-400">
            Professional journey and educational background in AI and data science.
          </p>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className={`bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border-l-4 border-blue-500 hover:border-cyan-400 hover:scale-102 slide-in-up stagger-${index + 1}`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div className="flex items-center space-x-3 mb-2 md:mb-0">
                  {exp.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-medium">
                      {exp.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 text-gray-400">
                  <Calendar size={16} />
                  <span className="text-sm font-medium">
                    {exp.period}
                  </span>
                </div>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {exp.description}
              </p>
            </div>
          ))}
        </div>
        
        
      </div>
    </section>
  );
};

export default Experience;