import React, { useState } from 'react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  readTime: string;
}

const BlogPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'The Future of Web Development in 2024',
      excerpt: 'Exploring the latest trends and technologies shaping the future of web development.',
      image: 'https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 15, 2024',
      category: 'Web Development',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Building Responsive Layouts with CSS Grid',
      excerpt: 'A comprehensive guide to creating flexible and responsive layouts using CSS Grid.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 10, 2024',
      category: 'CSS',
      readTime: '8 min read'
    },
    {
      id: 3,
      title: 'React Best Practices for 2024',
      excerpt: 'Essential React patterns and practices every developer should know.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'March 5, 2024',
      category: 'React',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Optimizing Website Performance',
      excerpt: 'Tips and techniques to make your websites load faster and perform better.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      date: 'February 28, 2024',
      category: 'Performance',
      readTime: '7 min read'
    },
    {
      id: 5,
      title: 'Understanding Modern JavaScript',
      excerpt: 'A deep dive into ES6+ features and modern JavaScript development.',
      image: 'https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'February 20, 2024',
      category: 'JavaScript',
      readTime: '10 min read'
    },
    {
      id: 6,
      title: 'Design Systems for Developers',
      excerpt: 'How to create and maintain consistent design systems in your projects.',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: 'February 15, 2024',
      category: 'Design',
      readTime: '9 min read'
    }
  ];

  const categories: string[] = ['All', 'Web Development', 'CSS', 'React', 'JavaScript', 'Performance', 'Design'];

  const filteredPosts = activeFilter === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Insights, tutorials, and thoughts on web development and design
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 border-2 border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500 ${
                  activeFilter === category ? 'bg-blue-500 border-blue-500 text-white' : 'bg-transparent'
                }`}
                onClick={() => setActiveFilter(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPosts.map(post => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col hover:shadow-xl hover:-translate-y-1 transition-all duration-300 animate-fade-in-up"
              >
                <div className="relative w-full h-52 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-blue-500 text-white px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide">
                    {post.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center mb-4 text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 leading-tight">{post.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{post.excerpt}</p>
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 text-blue-500 font-medium hover:text-blue-700 transition-all duration-300 mt-auto"
                  >
                    Read More
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="transition-transform duration-300 group-hover:translate-x-1">
                      <path d="M8.293 1.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L12.586 9H2a1 1 0 0 1 0-2h10.586L8.293 2.707a1 1 0 0 1 0-1.414z"/>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <button className="px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
              Previous
            </button>
            <div className="flex gap-2">
              <button className="w-10 h-10 rounded border-2 border-blue-500 bg-blue-500 text-white font-medium transition-all duration-300">
                1
              </button>
              <button className="w-10 h-10 rounded border-2 border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
                2
              </button>
              <button className="w-10 h-10 rounded border-2 border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
                3
              </button>
            </div>
            <button className="px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-600 hover:border-blue-500 hover:text-blue-500 transition-all duration-300">
              Next
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BlogPage;