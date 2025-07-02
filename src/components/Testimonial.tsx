import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

const Testimonial: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Working with this developer was an absolute pleasure. They delivered a stunning website that perfectly captured our brand vision.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Michael Chen',
      role: 'Founder, E-Shop Pro',
      content: 'The e-commerce platform exceeded our expectations. Sales increased by 150% within the first month after launch.',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, Creative Co',
      content: 'Professional, responsive, and incredibly talented. The website design perfectly reflects our creative agency brand.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150'
    },
    {
      name: 'David Thompson',
      role: 'Restaurant Owner',
      content: 'Our new website has brought in so many customers. The online ordering system works flawlessly and looks amazing.',
      avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150'
    }
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">What my</h2>
          <h3 className="text-xl text-blue-500 italic mt-[-1rem] mb-4">clients say</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take my word for it - hear from satisfied clients about their experience
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col justify-between min-h-[200px] animate-fade-in-up"
            >
              <div className="mb-6">
                <p className="text-lg text-gray-600 italic leading-relaxed">"{testimonial.content}"</p>
              </div>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-blue-500"
                />
                <div>
                  <h4 className="text-base font-semibold text-gray-900 mb-1">{testimonial.name}</h4>
                  <span className="text-sm text-gray-500">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;