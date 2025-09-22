import React, { useEffect } from 'react';
import Contact from '../components/Contact';
import SubscribeSection from '../components/subscribe';
import Profile from '../public/images/profileAbout.jpg';
import SkillsSection from '../components/SkillsSection';
import PortfolioPage from './PortfolioPage';
import HeroSection from '../components/Hero';

// interface Skill {
//   name: string;
//   level: number;
// }

// interface Experience {
//   period: string;
//   title: string;
//   company: string;
//   description: string;
// }

const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  // const skills: Skill[] = [
  //   { name: 'Photoshop', level: 95 },
  //   { name: 'Illustrator', level: 92 },
  //   { name: 'Indesign', level: 90 },
  //   { name: 'Animate', level: 88 },
  //   { name: 'Premiere Pro', level: 85 },
  //   { name: 'After Effect', level: 80 }
  // ];

  // const experience: Experience[] = [
  //   {
  //     period: '2022 - Present',
  //     title: 'Senior Web Developer',
  //     company: 'Tech Solutions Inc.',
  //     description: 'Leading development of complex web applications and mentoring junior developers.'
  //   },
  //   {
  //     period: '2020 - 2022',
  //     title: 'Full Stack Developer',
  //     company: 'Digital Agency Pro',
  //     description: 'Developed responsive websites and e-commerce solutions for various clients.'
  //   },
  //   {
  //     period: '2018 - 2020',
  //     title: 'Frontend Developer',
  //     company: 'StartupXYZ',
  //     description: 'Built user interfaces and implemented responsive designs for web applications.'
  //   }
  // ];

  return (
    <div className="bg-gray-100 rounded-b-[50px]">
       {/* Hero section */}
        <HeroSection/>

      {/* About Section */}
      <section className="bg-gray-100 pb-16 pt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Side - Image */}
            <div className="flex justify-center">
              <img
                src={Profile}
                alt="Profile"
                className="w-full max-w-sm h-[500px] object-cover rounded-2xl shadow-xl border-4 border-gray-100"
              />
            </div>

            {/* Right Side - Content */}
            <div className="text-left">
              <h1 className="text-4xl font-bold text-[#3c405b] mb-6">About Me</h1>

              <h2 className="text-2xl font-semibold text-gray-800">Pubudu Wijerathne</h2>
              <p className="text-gray-600 mb-4 font-medium">Senior Graphic Designer</p>

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

              {/* Download CV Button */}
              <a
                href="/src/public/Pubudu Wijerathne.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-[#3c405b] text-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      {/* <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3c405b] mb-4">Skills & Expertise</h2>
            <p className="text-lg text-gray-600">Technologies and tools I work with to bring your ideas to life</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm"
              >
                <div className="flex justify-between items-center mb-4">
                  <span className="font-semibold text-gray-900">{skill.name}</span>
                  <span className="font-semibold text-[#3c405b]">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#3c405b] rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <SkillsSection />

      {/* Experience */}
      {/* <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3c405b] mb-4">Experience</h2>
            <p className="text-lg text-gray-600">My professional journey in web development and design</p>
          </div>
          <div className="relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-[#3c405b] md:left-10" />
            {experience.map((item, index) => (
              <div key={index} className="relative pl-12 md:pl-16 mb-12">
                <div className="absolute left-2.5 top-2 w-4 h-4 bg-[#3c405b] rounded-full shadow-md md:left-7.5" />
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <span className="inline-block bg-[#3c405b] text-white px-3 py-1 rounded-md text-sm font-semibold mb-4">
                    {item.period}
                  </span>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <h4 className="text-lg font-medium text-[#3c405b] mb-4">{item.company}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Values */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#3c405b] mb-4">My Values</h2>
            <p className="text-lg text-gray-600">
              The principles that guide my work and client relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🎯",
                title: "Quality First",
                text: "I never compromise on quality. Every line of code is written with precision and every design element is carefully crafted.",
              },
              {
                icon: "🤝",
                title: "Collaboration",
                text: "I believe the best results come from working closely with clients, understanding their needs and involving them in the process.",
              },
              {
                icon: "🚀",
                title: "Innovation",
                text: "I stay current with the latest technologies and trends to deliver cutting-edge solutions that give you a competitive edge.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm text-center 
                     transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:border-[#3c405b]"
              >
                <div className="text-5xl mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <Contact />

      {/* Subscribe Section  */}
      <SubscribeSection />

    </div>
  );
};

export default AboutPage;
