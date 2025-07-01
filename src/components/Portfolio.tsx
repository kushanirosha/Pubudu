import React, { useState } from 'react';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Portfolio: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A full-featured e-commerce platform with cart functionality, payment integration, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React Native', 'Firebase', 'Redux', 'TypeScript'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      category: 'design',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete brand identity design including logo, color palette, and marketing materials.',
      technologies: ['Figma', 'Adobe Creative Suite', 'Branding'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      category: 'web',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Interactive analytics dashboard with real-time data visualization and reporting features.',
      technologies: ['Vue.js', 'D3.js', 'Python', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'mobile',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Mobile fitness tracking app with workout plans, progress tracking, and social features.',
      technologies: ['Flutter', 'Firebase', 'Health APIs'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Restaurant Website',
      category: 'design',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modern restaurant website with online reservations and menu management system.',
      technologies: ['WordPress', 'Custom Theme', 'JavaScript'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'Design' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Work
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
            A showcase of my recent projects, demonstrating expertise across 
            web development, mobile apps, and design.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                <Filter className="h-4 w-4 inline-block mr-2" />
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      <ExternalLink className="h-5 w-5 text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      <Github className="h-5 w-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;