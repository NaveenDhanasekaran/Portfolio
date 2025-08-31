import React from 'react';
import { User, Brain, Target } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slide-in-up">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 slide-in-left">
            <div className="bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl w-80 h-80 mx-auto lg:mx-0 flex items-center justify-center border border-gray-600 shadow-2xl">
              <User size={120} className="text-gray-500" />
            </div>
          </div>
          
          <div className="space-y-8 slide-in-right">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Data Scientist at Matrimony.com | AI/ML Engineer
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed">
                I build AI solutions that deliver real impact—spanning Machine Learning, Computer Vision, and NLP. 
                Currently working as a Data Scientist at <span className="text-blue-300">Matrimony.com</span>. Previously, I completed a <span className="text-blue-300">2-year internship at The Term Time (UK)</span> as an AI Engineer and another internship at <span className="text-blue-300">Vei Technology</span> as an ML Engineer. 
                I also do full-stack web development, crafting modern, responsive apps end-to-end.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-600 p-3 rounded-lg shadow-lg">
                  <Brain className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">AI Innovation</h4>
                  <p className="text-gray-400 text-sm">
                    Building cutting-edge AI solutions that push the boundaries of what's possible.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-3 rounded-lg shadow-lg">
                  <Target className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Real Impact</h4>
                  <p className="text-gray-400 text-sm">
                    Focused on creating solutions that solve real-world problems and deliver measurable value.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;