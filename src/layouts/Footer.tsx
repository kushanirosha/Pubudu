import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3c405b] text-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12 text-center flex flex-col items-center">
        
        {/* Heading */}
       

        {/* Social Icons */}
        <div className="flex space-x-6 mb-6">
          <a
            href="#"
            className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-[#3c405b] transition transform hover:-translate-y-1"
            aria-label="Facebook"
          >
            <Facebook className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-[#3c405b] transition transform hover:-translate-y-1"
            aria-label="Instagram"
          >
            <Instagram className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center hover:bg-white hover:text-[#3c405b] transition transform hover:-translate-y-1"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Contact Info */}
        <div className="space-y-2 text-gray-300 mb-8">
          <p>No.59/2, Ruwanpura, Werellagama, Kandy, Sri Lanka</p>
          <p>
            <a href="mailto:sheyno.graphics01@gmail.com" className="hover:underline">
              sheyno.graphics01@gmail.com
            </a>{" "}
            |{" "}
            <a href="mailto:infobrandbeacon@gmail.com" className="hover:underline">
              infobrandbeacon@gmail.com
            </a>
          </p>
          <p>+94 75 992 9718 | +94 78 473 7746</p>
        </div>

        {/* Bottom Note */}
        <div className="border-t border-white pt-4 w-full text-sm text-gray-400">
          <p>
            © {new Date().getFullYear()} Brand Beacon. All Rights Reserved. Powered by <span className="text-white font-medium">Brand Beacon</span>
          </p>
          <p className="mt-1">
           
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
