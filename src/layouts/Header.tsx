import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../public/images/logo.png';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/', isRoute: true },
    { name: 'Service', href: '/services', isRoute: true },
    { name: 'Project', href: '/projects', isRoute: true },
    { name: 'Feedback', href: '/feedback', isRoute: true },
    { name: 'About Me', href: '/about', isRoute: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 flex justify-center }`}
    >
      <nav className="bg-white rounded-b-2xl shadow-md px-6 py-4 flex items-center justify-between w-[90%] max-w-6xl">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) =>
            item.isRoute ? (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `text-gray-700 font-medium hover:text-gray-900 transition-colors ${
                    isActive ? 'text-black' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            ) : null
          )}
        </div>

        {/* Mobile Menu (if needed in future) */}
        <div className="md:hidden"></div>
      </nav>
    </header>
  );
};

export default Header;
