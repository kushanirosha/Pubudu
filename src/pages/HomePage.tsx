import React from "react";
import About from "../components/About";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Blog />
      <Contact />
    </div>
  );
};

export default HomePage;