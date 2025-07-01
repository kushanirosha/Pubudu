import React, { useState } from 'react';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  link: string;
}

interface Filter {
  id: string;
  label: string;
}

const PortfolioPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const projects: Project[] = [
    {
      id: 1,
      title: 'TechStart Landing Page',
      category: 'web-development',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern landing page for a tech startup with animated elements and responsive design.',
      technologies: ['React', 'CSS3', 'JavaScript'],
      link: '#'
    },
    {
      id: 2,
      title: 'E-commerce Dashboard',
      category: 'ui-design',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Clean and intuitive dashboard design for e-commerce platform management.',
      technologies: ['Figma', 'Adobe XD', 'Prototyping'],
      link: '#'
    },
    {
      id: 3,
      title: 'Restaurant Booking System',
      category: 'web-development',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      description: 'Full-stack web application for restaurant reservations and menu management.',
      technologies: ['Node.js', 'React', 'MongoDB'],
      link: '#'
    },
    {
      id: 4,
      title: 'Mobile App Interface',
      category: 'ui-design',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'User-friendly mobile application interface for fitness tracking.',
      technologies: ['Sketch', 'InVision', 'User Testing'],
      link: '#'
    },
    {
      id: 5,
      title: 'Corporate Website',
      category: 'web-development',
      image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Professional corporate website with CMS integration and SEO optimization.',
      technologies: ['WordPress', 'PHP', 'CSS3'],
      link: '#'
    },
    {
      id: 6,
      title: 'SaaS Platform Design',
      category: 'ui-design',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Comprehensive design system for SaaS platform with complex user flows.',
      technologies: ['Figma', 'Design System', 'Prototyping'],
      link: '#'
    }
  ];

  const filters: Filter[] = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'ui-design', label: 'UI/UX Design' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">My Work</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A collection of projects showcasing my skills in web development and design
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {filters.map(filter => (
              <button
                key={filter.id}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 border-2 border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500 ${
                  activeFilter === filter.id
                    ? 'bg-blue-500 border-blue-500 text-white'
                    : 'bg-transparent'
                }`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              >
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/90 to-gray-800/70 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      className="bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{project.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-100 text-blue-500 px-3 py-1 rounded-md text-sm font-medium border border-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default PortfolioPage;