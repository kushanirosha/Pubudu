import React from "react";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";
import Process from "../components/Process";
import Testimonial from "../components/Testimonial";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Process/>
      <Portfolio />
      
      <Blog />
      <Testimonial/>
      <Contact />
    </div>
  );
};

export default HomePage;