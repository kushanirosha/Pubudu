import React from 'react';

interface Skill {
  name: string;
  level: number;
}

interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
}

const AboutPage: React.FC = () => {
  const skills: Skill[] = [
    { name: 'JavaScript', level: 95 },
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 85 },
    { name: 'CSS/SCSS', level: 92 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'MongoDB', level: 80 }
  ];

  const experience: Experience[] = [
    {
      period: '2022 - Present',
      title: 'Senior Web Developer',
      company: 'Tech Solutions Inc.',
      description: 'Leading development of complex web applications and mentoring junior developers.'
    },
    {
      period: '2020 - 2022',
      title: 'Full Stack Developer',
      company: 'Digital Agency Pro',
      description: 'Developed responsive websites and e-commerce solutions for various clients.'
    },
    {
      period: '2018 - 2020',
      title: 'Frontend Developer',
      company: 'StartupXYZ',
      description: 'Built user interfaces and implemented responsive designs for web applications.'
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-gray-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 text-center lg:text-left">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">About Me</h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I'm a passionate web developer and designer with over 5 years of experience 
                creating digital solutions that make a difference. I believe in the power of 
                clean code, thoughtful design, and user-centered experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                When I'm not coding, you'll find me exploring new technologies, contributing 
                to open-source projects, or sharing knowledge with the developer community. 
                I'm always excited to take on new challenges and help businesses succeed online.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-8 mt-8">
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl font-bold text-blue-500">50+</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wide mt-1">Projects Completed</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl font-bold text-blue-500">5+</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wide mt-1">Years Experience</span>
                </div>
                <div className="flex flex-col items-center lg:items-start">
                  <span className="text-3xl font-bold text-blue-500">25+</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wide mt-1">Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Developer at work"
                className="w-full max-w-md h-[500px] object-cover rounded-lg shadow-xl border-4 border-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-lg text-gray-600">Technologies and tools I work with to bring your ideas to life</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm animate-fade-in-up"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="font-semibold text-blue-500">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-300 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-lg text-gray-600">My professional journey in web development and design</p>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-blue-300 md:left-10" />
            {experience.map((item, index) => (
              <div key={index} className="relative pl-12 md:pl-16 mb-12 animate-fade-in-up">
                <div className="absolute left-2.5 top-2 w-4 h-4 bg-blue-500 rounded-full shadow-md md:left-7.5" />
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <span className="inline-block bg-blue-500 text-white px-3 py-1 rounded-md text-sm font-semibold mb-4">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <h4 className="text-lg font-medium text-blue-500 mb-4">{item.company}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">My Values</h2>
            <p className="text-lg text-gray-600">The principles that guide my work and client relationships</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm text-center animate-fade-in-up">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600 leading-relaxed">
                I never compromise on quality. Every line of code is written with precision and every design element is carefully crafted.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm text-center animate-fade-in-up">
              <div className="text-5xl mb-6">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Collaboration</h3>
              <p className="text-gray-600 leading-relaxed">
                I believe the best results come from working closely with clients, understanding their needs and involving them in the process.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm text-center animate-fade-in-up">
              <div className="text-5xl mb-6">🚀</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600 leading-relaxed">
                I stay current with the latest technologies and trends to deliver cutting-edge solutions that give you a competitive edge.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;