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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Side - Image */}
            <div className="flex justify-center">
              <img
                src="https://via.placeholder.com/400x500"
                alt="Profile"
                className="w-full max-w-sm h-[500px] object-cover rounded-2xl shadow-xl"
              />
            </div>

            {/* Right Side - Content */}
            <div className="text-left">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>

              <h2 className="text-2xl font-semibold text-gray-800">
                Pubudu Wijerathne
              </h2>
              <p className="text-gray-500 mb-4">Senior Graphic Designer</p>

              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Hello! I'm a passionate Senior Graphic Designer with a deep love for solving
                design challenges. For the past six years, I've had the pleasure of helping
                companies build their brand and connect with customers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                My experience includes six years in the design field, with two of those years
                spent as part of the creative team at Falcon Media. I am committed to delivering
                high-quality, thoughtful design solutions that are not only aesthetically pleasing
                but also effective in achieving business objectives.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                I'm excited to hear about your project and discuss how we can bring your ideas to life.
              </p>

              {/* Personal Details */}
              <div className="space-y-2 text-gray-700 mb-6">
                <p><span className="font-semibold">Name :</span> Pubudu Wijerathne</p>
                <p><span className="font-semibold">Age :</span> 25</p>
                <p><span className="font-semibold">Address :</span> No.59/2, Ruwanpura, Werellagama, Kandy, Sri Lanka</p>
                <p><span className="font-semibold">Postal Code :</span> 20048</p>
              </div>

              {/* Download CV Button */}
              <a
                href="#"
                className="inline-block px-6 py-3 bg-[#3c405b] text-white rounded-lg shadow-md hover:bg-[#2E3453] transition-colors"
              >
                Download CV
              </a>
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