import React from 'react';
import { Code, Palette, Smartphone, Globe, Zap, Shield, ArrowRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Services: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();

  const services = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Building robust, scalable web applications with cutting-edge technologies and best practices.',
      features: ['React & Next.js', 'Node.js & Express', 'Database Design', 'Cloud Architecture'],
      color: 'from-blue-500 to-cyan-500',
      delay: '0ms'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive, beautiful interfaces that users love and businesses need.',
      features: ['User Research', 'Design Systems', 'Prototyping', 'Usability Testing'],
      color: 'from-purple-500 to-pink-500',
      delay: '100ms'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      features: ['React Native', 'iOS & Android', 'App Store Optimization', 'Performance Tuning'],
      color: 'from-green-500 to-emerald-500',
      delay: '200ms'
    },
    {
      icon: Globe,
      title: 'Web Performance',
      description: 'Optimizing websites for lightning-fast speeds and superior search rankings.',
      features: ['Core Web Vitals', 'SEO Optimization', 'Accessibility', 'Performance Audits'],
      color: 'from-orange-500 to-red-500',
      delay: '300ms'
    },
    {
      icon: Zap,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with secure payments and inventory management.',
      features: ['Shopify & WooCommerce', 'Payment Gateways', 'Inventory Systems', 'Analytics'],
      color: 'from-yellow-500 to-orange-500',
      delay: '400ms'
    },
    {
      icon: Shield,
      title: 'Security & DevOps',
      description: 'Ensuring your applications are secure, scalable, and always available.',
      features: ['Security Audits', 'CI/CD Pipelines', 'Cloud Infrastructure', 'Monitoring'],
      color: 'from-indigo-500 to-purple-500',
      delay: '500ms'
    }
  ];

  return (
    <section id="services" className="py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <div className="inline-block mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent text-lg font-semibold tracking-wider uppercase">
              What I Do
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
            Services That
            <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Drive Results
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            From concept to deployment, I provide comprehensive digital solutions 
            that transform your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-700 overflow-hidden ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
              style={{ transitionDelay: service.delay }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Floating Icon */}
              <div className="relative mb-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
                  <service.icon className="h-10 w-10 text-white" />
                </div>
                
                {/* Decorative Elements */}
                <div className={`absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br ${service.color} rounded-full opacity-20 group-hover:scale-150 transition-transform duration-500`}></div>
                <div className={`absolute -bottom-1 -left-1 w-4 h-4 bg-gradient-to-br ${service.color} rounded-full opacity-30 group-hover:scale-125 transition-transform duration-700`}></div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all duration-300">
                {service.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li 
                    key={feature} 
                    className={`flex items-center text-sm text-gray-500 dark:text-gray-400 transform transition-all duration-300 ${
                      isVisible ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                    }`}
                    style={{ transitionDelay: `${parseInt(service.delay) + (featureIndex * 50)}ms` }}
                  >
                    <div className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3 group-hover:scale-150 transition-transform duration-300`}></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="group/btn flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-semibold transition-all duration-300">
                <span>Learn More</span>
                <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </button>

              {/* Hover Effect Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl`}></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '600ms' }}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-xl mb-8 opacity-90">
                Let's discuss how I can help bring your vision to life.
              </p>
              <button className="bg-white text-gray-900 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;