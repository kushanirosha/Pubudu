import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import FullScreenBlobs from "../components/gradientBlob";

const HomePage: React.FC = () => {
  return (
    <div className="relative bg-gray-100">
      {/* Background blobs (always visible) */}
      <FullScreenBlobs />

      {/* Main content on top */}
      <div className="relative z-10">
        <section>
          <Hero />
        </section>
        <section>
          <About />
        </section>
        <section>
          <Projects />
        </section>
        <section>
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
