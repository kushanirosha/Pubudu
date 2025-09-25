import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3c405b] text-gray-200">
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-7 text-center flex flex-col items-center">
        
        {/* Social Icons */}
        <div className="flex space-x-6 mb-6">
          {[
            { href: "https://facebook.com", Icon: Facebook, label: "Facebook" },
            { href: "https://instagram.com", Icon: Instagram, label: "Instagram" },
            { href: "https://linkedin.com", Icon: Linkedin, label: "LinkedIn" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center text-gray-200 
                         hover:bg-white hover:text-blue-500 hover:scale-110 transition-transform duration-300"
            >
              <Icon className="w-6 h-6" />
            </a>
          ))}
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-gray-300 mb-8">
          <p>No.59/2, Ruwanpura, Werellagama, Kandy, Sri Lanka</p>
          <p>
            <a
              href="mailto:sheyno.graphics01@gmail.com"
              className="hover:text-blue-500 transition-colors"
            >
              sheyno.graphics01@gmail.com
            </a>{" "}
            |{" "}
            <a
              href="mailto:infobrandbeacon@gmail.com"
              className="hover:text-blue-500 transition-colors"
            >
              infobrandbeacon@gmail.com
            </a>
          </p>
          <p>
            <a
              href="tel:+94759929718"
              className="hover:text-blue-500 transition-colors"
            >
              +94 75 992 9718
            </a>{" "}
            |{" "}
            <a
              href="tel:+94784737746"
              className="hover:text-blue-500 transition-colors"
            >
              +94 78 473 7746
            </a>
          </p>
        </div>

        {/* Bottom Note */}
        <div className="border-t border-white pt-4 w-full text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} All Rights Reserved. Powered by{" "}
            <span className="text-white font-medium hover:text-blue-500 transition-colors">
              Brand Beacon
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
