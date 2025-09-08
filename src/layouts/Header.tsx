import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react"; // ✅ import icons
import logo from "../public/images/logo.png";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ added state

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/", isRoute: true },
    { name: "Service", href: "/services", isRoute: true },
    { name: "Project", href: "/projects/all", isRoute: true },
    { name: "Blog", href: "/blog", isRoute: true },
    { name: "About Me", href: "/about", isRoute: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 flex justify-center ${
        isScrolled ? "bg-white/90 shadow-md backdrop-blur" : "bg-transparent"
      }`}
    >
      <nav className="rounded-b-2xl px-6 py-4 flex items-center justify-between w-[90%] max-w-7xl">
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
                  `text-[#3c405b] font-medium hover:text-blue-500 transition-colors ${
                    isActive ? "text-blue-500" : ""
                  }`
                }
              >
                {item.name}
              </NavLink>
            ) : null
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#3c405b] hover:text-blue-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md rounded-b-2xl md:hidden flex flex-col items-center py-4 space-y-4">
            {navItems.map((item) =>
              item.isRoute ? (
                <NavLink
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-[#3c405b] font-medium text-lg ${
                      isActive ? "text-blue-600" : "hover:text-blue-500"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ) : null
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
