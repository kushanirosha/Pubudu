import React from 'react';

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

const Process: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      title: 'Discovery Call',
      description: "We discuss your project goals, requirements, and timeline to ensure we're aligned from the start."
    },
    {
      number: '02',
      title: 'Strategy & Planning',
      description: 'I create a detailed project plan with wireframes, user flows, and technical specifications.'
    },
    {
      number: '03',
      title: 'Design & Development',
      description: 'Your project comes to life with modern design principles and clean, efficient code.'
    },
    {
      number: '04',
      title: 'Testing & Optimization',
      description: 'Thorough testing across devices and browsers to ensure perfect functionality and performance.'
    },
    {
      number: '05',
      title: 'Launch & Support',
      description: 'Your website goes live with ongoing support and maintenance to keep everything running smoothly.'
    }
  ];

  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Your Website</h2>
          <h3 className="text-xl text-blue-500 italic mt-[-1rem] mb-4">in 5 steps</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            My proven process ensures your project is delivered on time, on budget, and exceeds expectations
          </p>
        </div>
        
        <div className="relative flex flex-col gap-12 mt-12">
          <div className="absolute left-7.5 top-14 bottom-14 w-0.5 bg-gradient-to-b from-blue-500 to-blue-300 opacity-30 md:left-8" />
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-6 relative animate-fade-in-up">
              <div className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-blue-300 rounded-full flex items-center justify-center text-white text-lg md:text-xl font-bold shadow-md z-10">
                <span>{step.number}</span>
              </div>
              <div className="flex-1 pt-2">
                <h4 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">{step.title}</h4>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
