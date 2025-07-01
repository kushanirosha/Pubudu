import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage";
import Services from "../pages/ServicesPage";
import Portfolio from "../pages/PortfolioPage";
import About from "../pages/AboutPage";
import Blog from "../pages/BlogPage";

const RoutesComponent: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services/>} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
     
    </Routes>
  );
};

export default RoutesComponent;