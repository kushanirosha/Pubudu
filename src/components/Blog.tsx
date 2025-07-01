import React from 'react';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Blog: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Exploring the latest trends and technologies that are shaping the future of web development, from AI integration to advanced CSS features.',
      image: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-15',
      readTime: '8 min read',
      tags: ['Web Development', 'Technology', 'Future'],
      featured: true
    },
    {
      id: 2,
      title: 'Building Accessible React Components: A Complete Guide',
      excerpt: 'Learn how to create React components that are accessible to all users, including best practices for ARIA attributes and keyboard navigation.',
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-10',
      readTime: '12 min read',
      tags: ['React', 'Accessibility', 'Web Development']
    },
    {
      id: 3,
      title: 'Design Systems: Creating Consistency Across Products',
      excerpt: 'How to build and maintain design systems that scale across multiple products and teams, ensuring consistency and efficiency.',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2024-01-05',
      readTime: '10 min read',
      tags: ['Design Systems', 'UI/UX', 'Design']
    },
    {
      id: 4,
      title: 'Optimizing React Performance: Tips and Techniques',
      excerpt: 'Practical techniques for improving React application performance, including memoization, code splitting, and bundle optimization.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-28',
      readTime: '15 min read',
      tags: ['React', 'Performance', 'Optimization']
    },
    {
      id: 5,
      title: 'The Art of API Design: RESTful Best Practices',
      excerpt: 'Essential principles for designing clean, maintainable, and scalable RESTful APIs that developers love to work with.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-20',
      readTime: '11 min read',
      tags: ['API Design', 'Backend', 'Architecture']
    },
    {
      id: 6,
      title: 'Mobile-First Design: Why It Matters More Than Ever',
      excerpt: 'Understanding the importance of mobile-first design approach and how it impacts user experience and business success.',
      image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=800',
      date: '2023-12-15',
      readTime: '7 min read',
      tags: ['Mobile Design', 'UI/UX', 'Responsive Design']
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section id="blog" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-6">
        <div ref={ref} className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Latest Insights
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Thoughts, tutorials, and insights about web development, design, 
            and the latest industry trends.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className={`mb-16 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-3xl text-white">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Featured Article
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    {featuredPost.title}
                  </h3>
                  <p className="text-white/90 mb-6 text-lg leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-5 w-5" />
                      <span>{formatDate(featuredPost.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-5 w-5" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <button className="group bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
                    <span className="flex items-center space-x-2">
                      <span>Read Full Article</span>
                      <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                </div>
                <div className="relative">
                  <div className="rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img
                      src={featuredPost.image}
                      alt={featuredPost.title}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Regular Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularPosts.map((post, index) => (
            <article
              key={post.id}
              className={`group bg-gray-50 dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900 dark:text-white">
                    {post.tags[0]}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center space-x-4 mb-3 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{formatDate(post.date)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {post.tags.slice(1).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-md"
                      >
                        <Tag className="h-3 w-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button className="text-blue-600 dark:text-blue-400 font-semibold hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-300">
                    Read More →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;