import React from 'react';
import { Code, Heart, ArrowUp } from 'lucide-react';

interface FooterLink {
  name: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: string[];
}

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks: FooterSection[] = [
    {
      title: 'Services',
      links: ['Web Development', 'UI/UX Design', 'Mobile Apps', 'Consulting'],
    },
    {
      title: 'Company',
      links: ['About', 'Portfolio', 'Blog', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Privacy Policy', 'Terms of Service', 'Sitemap', 'RSS Feed'],
    },
  ];

  return (
    <footer className="bg-gray-900 text-white relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-12 justify-between">
          {/* Brand Section */}
          <div className="flex-1 min-w-[200px]">
            <div className="flex items-center space-x-2 mb-6">
              <Code className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Pubudu Wijesinghe</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed max-w-md">
              Passionate full-stack developer and UI/UX designer dedicated to creating
              exceptional digital experiences that make a difference.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-400 animate-pulse" />
              <span>in Sri Lanka</span>
            </div>
          </div>

          {/* Links Sections */}
          {footerLinks.map((section) => (
            <div key={section.title} className="flex-1 min-w-[150px]">
              <h4 className="text-lg font-semibold mb-6">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col sm:flex-row items-center justify-between">
            <div className="text-gray-400 mb-4 sm:mb-0">
              <p>© {currentYear} Sheyno's. All rights reserved.</p>
            </div>
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition-colors duration-300">
                Privacy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Terms
              </a>
              <span>•</span>
              <a href="#" className="hover:text-white transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 z-50"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  );
};

export default Footer;