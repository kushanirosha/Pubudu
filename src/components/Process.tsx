import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import logo from '../public/images/logo.png';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Services', href: '/services', isRoute: true },
    { name: 'Portfolio', href: '/portfolio', isRoute: true },
    { name: 'About', href: '/about', isRoute: true },
    { name: 'Blog', href: '/blog', isRoute: true },
    { name: 'Contact', href: '#contact', isRoute: false },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 transition-all duration-300 ease-out"
          // style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed w-full z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-2xl border-b border-gray-200/20 dark:border-gray-700/20'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div
              className={`flex items-center space-x-3 transition-all duration-500 ${
                isScrolled ? 'scale-95' : 'scale-100'
              }`}
            >
              <div className="flex items-center space-x-2">
                <img src={logo} alt="Site Logo" className="h-10 w-auto object-contain" />
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) =>
                item.isRoute ? (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium group ${
                        isScrolled ? 'py-2' : 'py-3'
                      } ${isActive ? 'text-blue-600 dark:text-blue-400' : ''}`
                    }
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                  </NavLink>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`relative text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 font-medium group ${
                      isScrolled ? 'py-2' : 'py-3'
                    }`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                  </button>
                )
              )}
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={toggleTheme}
                className="p-3 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 backdrop-blur-lg hover:scale-110"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Sun className="h-5 w-5 text-gray-700 dark:text-gray-300" />
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-3 rounded-xl bg-gray-100/80 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 backdrop-blur-lg"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-500 ${
              isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-4 mt-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-200/20 dark:border-gray-700/20">
              {navItems.map((item, index) =>
                item.isRoute ? (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      `block w-full text-left px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 transform hover:translate-x-2 ${
                        isActive ? 'text-blue-600 dark:text-blue-400' : ''
                      }`
                    }
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none',
                    }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                ) : (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="block w-full text-left px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-all duration-300 transform hover:translate-x-2"
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: isMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none',
                    }}
                  >
                    {item.name}
                  </button>
                )
              )}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;





