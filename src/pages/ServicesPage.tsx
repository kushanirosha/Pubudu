import React from 'react';

interface Service {
  title: string;
  description: string;
  features: string[];
  icon: string;
  price: string;
}

const Services: React.FC = () => {
  const services: Service[] = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies',
      features: ['Responsive Design', 'Performance Optimization', 'SEO Ready', 'Cross-browser Compatibility'],
      icon: '💻',
      price: 'From $2,500'
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design solutions that create engaging digital experiences',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      icon: '🎨',
      price: 'From $1,500'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete online store development with secure payment integration',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory Management', 'Order Tracking'],
      icon: '🛒',
      price: 'From $3,500'
    },
    {
      title: 'Website Maintenance',
      description: 'Ongoing support and maintenance to keep your website running smoothly',
      features: ['Security Updates', 'Content Updates', 'Performance Monitoring', '24/7 Support'],
      icon: '🔧',
      price: 'From $200/month'
    },
    {
      title: 'SEO Optimization',
      description: "Improve your website's visibility and ranking in search engines",
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Performance Analysis'],
      icon: '📈',
      price: 'From $800'
    },
    {
      title: 'Consulting',
      description: 'Strategic guidance for your digital projects and technology decisions',
      features: ['Technology Stack', 'Architecture Planning', 'Code Review', 'Best Practices'],
      icon: '💡',
      price: 'From $150/hour'
    }
  ];

  return (
    <div className="pt-20">
      <section className="bg-gradient-to-br from-gray-50 to-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">Services</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive web development services to help your business succeed online
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col animate-fade-in-up"
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full flex items-center justify-center text-2xl shadow-md">
                    <span>{service.icon}</span>
                  </div>
                  <div className="bg-gray-100 text-blue-600 px-3 py-1 rounded-md font-semibold text-sm border border-gray-200">
                    {service.price}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <ul className="mb-8 text-left">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3 mb-3 text-gray-600">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="text-blue-500 flex-shrink-0"
                      >
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors mt-auto">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
              Let's discuss how I can help bring your vision to life
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-md hover:bg-blue-600 transition-colors">
              Contact Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;