import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../public/images/logo with name.png";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Service", href: "/services" },
    { name: "Project", href: "/projects/all" },
    { name: "Blog", href: "/blog" },
    { name: "About Me", href: "/about" },
  ];

  return (
    <header className="fixed top-0 left-1/2 transform -translate-x-1/2 w-[85%] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-50 transition-all duration-300">
      <nav
        className={`flex items-center justify-between bg-transparent backdrop-blur-md rounded-b-2xl shadow-md px-6 py-4 md:px-10 transition-all duration-300 ${
          isScrolled ? "shadow-lg" : "shadow-md"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo" className="h-10 w-auto" />
        </div>

        {/* Desktop Nav - Centered */}
        <div className="hidden md:flex flex-1 justify-center items-center space-x-8">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              className={({ isActive }) =>
                `relative group font-medium transition-colors ${
                  isActive
                    ? "text-blue-800"
                    : "text-[#3c405b] hover:text-blue-800"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {item.name}
                  {/* Underline */}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-blue-800 transition-all duration-300 ${
                      window.location.pathname === item.href
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Hire Me Button (Right Side) */}
        <div className="hidden md:flex">
          <a
            href="/hire"
            className="bg-[#2E3453] text-white px-6 py-2 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-[#3c405b] hover:text-blue-800"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="mt-2 bg-white shadow-lg rounded-2xl p-5 flex flex-col items-center space-y-4 md:hidden">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `relative font-medium text-lg transition-colors ${
                  isActive
                    ? "text-blue-800"
                    : "text-[#3c405b] hover:text-blue-800"
                }`
              }
            >
              {item.name}
              <span
                className={`absolute left-0 -bottom-1 h-0.5 bg-blue-800 transition-all duration-300 ${
                  window.location.pathname === item.href
                    ? "w-full"
                    : "w-0 group-hover:w-full"
                }`}
              ></span>
            </NavLink>
          ))}

          {/* Hire Me button in mobile menu */}
          <a
            href="/hire"
            className="bg-[#2E3453] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
