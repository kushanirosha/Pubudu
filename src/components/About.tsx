import React from 'react';
import { Award, Coffee, Users, Clock } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const stats = [
    { icon: Award, value: '50+', label: 'Projects Completed' },
    { icon: Users, value: '30+', label: 'Happy Clients' },
    { icon: Coffee, value: '1000+', label: 'Cups of Coffee' },
    { icon: Clock, value: '5+', label: 'Years Experience' }
  ];

  const skills = [
    { name: 'JavaScript/TypeScript', level: 95 },
    { name: 'React/Next.js', level: 92 },
    { name: 'Node.js/Express', level: 88 },
    { name: 'UI/UX Design', level: 85 },
    { name: 'Python/Django', level: 80 },
    { name: 'Mobile Development', level: 78 }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              About Me
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionate developer and designer with a mission to create 
              meaningful digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                  My Journey
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
                  <p>
                    Hi! I'm Alex Rivera, a passionate full-stack developer and UI/UX designer 
                    based in San Francisco. My journey into the world of technology began 
                    during my computer science studies, where I discovered my love for 
                    creating digital solutions that make a real impact.
                  </p>
                  <p>
                    Over the past 5 years, I've had the privilege of working with startups, 
                    established companies, and individual clients to bring their digital 
                    visions to life. I specialize in modern web technologies and have a 
                    keen eye for design that enhances user experience.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new design trends, 
                    contributing to open-source projects, or enjoying a good cup of coffee 
                    while sketching out ideas for my next project.
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Skills & Expertise
              </h3>
              
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className={`transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
                    }`}
                    style={{ transitionDelay: `${index * 100 + 400}ms` }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${index * 100 + 600}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Let's Work Together
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  I'm always excited to take on new challenges and collaborate 
                  on innovative projects. Let's discuss how we can bring your 
                  ideas to life.
                </p>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;