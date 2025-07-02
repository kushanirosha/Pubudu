import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles } from 'lucide-react';
import { useScrollAnimation, useParallax } from '../hooks/useScrollAnimation';

const Hero: React.FC = () => {
  const { ref, isVisible } = useScrollAnimation();
  const parallaxOffset = useParallax();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToNext = () => {
    const nextSection = document.querySelector('#services');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `url('/src/public/images/my.png')`,
        backgroundSize: 'auto 100%',
        backgroundPosition: 'right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Orbs */}
        <div 
          className="absolute top-20 left-20 w-96 h-96 bg-blue-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ transform: `translateY(${parallaxOffset * 0.1}px)` }}
        ></div>
        <div 
          className="absolute top-40 right-20 w-96 h-96 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ 
            transform: `translateY(${parallaxOffset * 0.15}px)`,
            animationDelay: '2s'
          }}
        ></div>
        <div 
          className="absolute -bottom-32 left-1/2 w-96 h-96 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"
          style={{ 
            transform: `translateX(-50%) translateY(${parallaxOffset * 0.05}px)`,
            animationDelay: '4s'
          }}
        ></div>

        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div ref={ref} className="container mx-auto px-6 text-center relative z-10">
        <div className={`transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          {/* Profile Image with Advanced Animation */}
          <div className="mb-12 relative">
            <div className="relative w-40 h-40 mx-auto">
              {/* Rotating Ring */}
              {/* <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-spin-slow p-3">
                <div className="w-full h-full rounded-full bg-white dark:bg-gray-900"></div>
              </div> */}
              
              {/* Profile Circle */}
              {/* <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl">
                <span className="text-4xl font-bold text-white">AR</span>
              </div> */}

              {/* Floating Icons */}
              <div className="absolute -top-4 -right-4 p-3 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full shadow-lg animate-bounce">
                <Sparkles className="h-5 w-5 text-yellow-500" />
              </div>
            </div>
          </div>

          {/* Main Heading with Staggered Animation */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight">
              <span 
                className="inline-block animate-slide-up"
                style={{ animationDelay: '0.2s' }}
              >
                Pubudu
              </span>
              <span 
                className="inline-block ml-4 bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent animate-slide-up"
                style={{ animationDelay: '0.4s' }}
              >
                Wijeshingha
              </span>
            </h1>
          </div>

          {/* Animated Role Text */}
          <div className="text-2xl md:text-3xl text-white/90 mb-6 font-light">
            <div className="flex items-center justify-center space-x-4 flex-wrap">
              <span 
                className="animate-fade-in-up"
                style={{ animationDelay: '0.6s' }}
              >
                Full-Stack Developer
              </span>
              <span className="text-yellow-400 animate-pulse">•</span>
              <span 
                className="animate-doubleFade-in-up"
                style={{ animationDelay: '0.8s' }}
              >
                UI/UX Designer
              </span>
              <span className="text-pink-400 animate-pulse">•</span>
              <span 
                className="animate-fade-in-up"
                style={{ animationDelay: '1s' }}
              >
                Creative Innovator
              </span>
            </div>
          </div>

          {/* Description */}
          <p 
            className="text-xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ animationDelay: '1.2s' }}
          >
            Transforming ideas into extraordinary digital experiences through cutting-edge technology 
            and innovative design. Let's build the future together.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in-up"
            style={{ animationDelay: '1.4s' }}
          >
            <button 
              onClick={scrollToNext}
              className="group relative bg-white text-gray-900 px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-3">
                <span>Explore My Work</span>
                <ArrowDown className="h-6 w-6 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 bg-white group-hover:bg-transparent transition-colors duration-300"></div>
            </button>
            
            <button className="group bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-full font-bold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500">
              <span className="flex items-center space-x-3">
                <Download className="h-6 w-6" />
                <span>Download Resume</span>
              </span>
            </button>
          </div>

          {/* Social Links with Advanced Hover Effects */}
          <div 
            className="flex justify-center space-x-8 animate-fade-in-up"
            style={{ animationDelay: '1.6s' }}
          >
            {[
              { icon: Github, href: '#', label: 'GitHub', color: 'hover:bg-gray-800' },
              { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
              { icon: Mail, href: '#', label: 'Email', color: 'hover:bg-red-500' },
            ].map(({ icon: Icon, href, label, color }) => (
              <a
                key={label}
                href={href}
                className={`group relative p-4 bg-white/10 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transform hover:-translate-y-3 hover:rotate-3 transition-all duration-500 ${color}`}
                aria-label={label}
              >
                <Icon className="h-7 w-7 text-white group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {label}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="w-8 h-12 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-4 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-white/70 text-sm font-medium">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;