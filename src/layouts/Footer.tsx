import React from "react";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer
      className="
        fixed bottom-0 left-0 right-0 z-50
        w-full h-80
        bg-[#3c405b] text-white
      "
    >
      <div className="h-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between">
        {/* Left: Heading + socials + powered by */}
        <div className="flex flex-col gap-6">
          <h2 className="text-4xl md:text-5xl font-bold leading-none">Let’s talk</h2>

          <div className="flex space-x-5">
            <a
              href="#"
              className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#3c405b] transition"
              aria-label="Facebook"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#3c405b] transition"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="w-12 h-12 rounded-full border border-white flex items-center justify-center hover:bg-white hover:text-[#3c405b] transition"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>

          <p className="text-gray-300">Powered by Brand Beacon</p>
        </div>

        {/* Right: Address + email + phone */}
        <div className="text-gray-200 text-right space-y-3 hidden md:block">
          <p>
            No.59/2,<br />
            Ruwanpura, Werellagama<br />
            Kandy, Sri Lanka
          </p>
          <p>
            <a href="mailto:sheyno.graphics01@gmail.com" className="hover:underline">
              sheyno.graphics01@gmail.com
            </a><br />
            <a href="mailto:infobrandbeacon@gmail.com" className="hover:underline">
              infobrandbeacon@gmail.com
            </a>
          </p>
          <p>
            +94 75 992 9718<br />
            +94 78 473 7746
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
