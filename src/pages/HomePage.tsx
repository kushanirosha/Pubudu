import React, { useEffect } from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import FullScreenBlobs from "../components/gradientBlob";
import SubscribeSection from "../components/subscribe";
import ServicesSection from "../components/Service";
import IntroductionSection from "../components/Introduction";

const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative bg-gray-100 rounded-b-[50px]">
      {/* Background blobs (always visible) */}
      <FullScreenBlobs />

      {/* Main content on top */}
      <div className="relative z-50">
        {/* <section>
          <Hero />
        </section> */}
        <section>
          <IntroductionSection />
        </section>
        <section>
          <ServicesSection />
        </section>
        {/* <section>
          <About />
        </section> */}
        <section>
          <Projects />
        </section>
        <section>
          <Contact />
        </section>
        <section>
          <SubscribeSection />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
