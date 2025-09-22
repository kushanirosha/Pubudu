import React from "react";
import { motion } from "framer-motion";
import Bgvideo from '../public/intro1.mp4';
import logo from '../public/images/logo4.png'

const IntroductionSection: React.FC = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Background video (replace with your mp4/gif link) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={Bgvideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      {/* <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div> */}

      {/* Left Fence */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 grid grid-cols-3 grid-rows-3 gap-2 opacity-70">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="w-6 h-6 border border-white/40 rounded-sm"
          ></div>
        ))}
      </div>

      {/* Right Fence */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 grid grid-cols-3 grid-rows-3 gap-2 opacity-70">
        {Array.from({ length: 9 }).map((_, i) => (
          <div
            key={i}
            className="w-6 h-6 border border-white/40 rounded-sm"
          ></div>
        ))}
      </div>

      {/* Silver Bullet Animation (Left → Center) */}
      <motion.div
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-r from-gray-300 to-white rounded-full shadow-lg"
      />

      {/* Silver Bullet Animation (Right → Center) */}
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 bg-gradient-to-l from-gray-300 to-white rounded-full shadow-lg"
      />

      {/* Text Content */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.img
          src={logo}
          alt="Logo"
          className="mx-auto mb-6 w-16"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Design with purpose, <br /> not just pixels.
        </motion.h1>
        <motion.button
          className="px-6 py-3 bg-white text-gray-800 rounded-lg shadow-lg hover:bg-gray-200 transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Let’s dive into creativity
        </motion.button>
      </div>
    </section>
  );
};

export default IntroductionSection;
