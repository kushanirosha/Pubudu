import React from "react";
import BlogCards from "./BlogCards";


const BeyondTheBrief: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-b from-indigo-200 via-purple-300 to-blue-400 overflow-hidden">
      {/* Waves */}
      <div className="absolute bottom-0 left-0 w-full z-0">
        <img src="/images/waves.svg" alt="waves" className="w-full" />
      </div>

      <div className="relative z-10 py-16 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Beyond the Brief
        </h2>
        <p className="text-lg md:text-xl text-white mt-2">
          How to Find Your Creative Spark When You're Stuck
        </p>

        {/* Cards */}
       <BlogCards/>

        {/* Question */}
        <div className="mt-16 text-white">
          <p className="text-lg font-medium">
            What Are Your Biggest Design Questions?
          </p>
          <p className="text-md">— Ask Us Below! —</p>
          <button className="mt-4 px-6 py-3 bg-white text-indigo-800 font-semibold rounded-lg shadow hover:bg-indigo-100 transition">
            Comment Here
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeyondTheBrief;
