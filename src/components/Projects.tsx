import React from "react";
import { FaHotel, FaCar, FaHamburger, FaPlane, FaToilet, FaTooth, FaLaptop, FaPaw, FaLeaf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Project {
  name: string;
  icon: JSX.Element;
}

const projects: Project[] = [
  { name: "Hospitality", icon: <FaHotel /> },
  { name: "Transport", icon: <FaCar /> },
  { name: "Food", icon: <FaHamburger /> },
  { name: "Immigration", icon: <FaPlane /> },
  { name: "Sanitation", icon: <FaToilet /> },
  { name: "Dental", icon: <FaTooth /> },
  { name: "Laptop", icon: <FaLaptop /> },
  { name: "Pet Items", icon: <FaPaw /> },
  { name: "Ayurvedic", icon: <FaLeaf /> },
];

const PortfolioSection: React.FC = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-[#3c405b] mb-2 text-center">
          Explore My Projects
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-center">
          You’ll see examples of how I help clients bring their online vision to life.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-10">
          {projects.map((project, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/projects/${project.name.toLowerCase().replace(/ /g, '-')}`)}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 p-8 flex flex-col items-center justify-center cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              <div className="bg-[#3c405b] p-4 rounded-xl">
                <div className="text-4xl text-white group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-600 mt-3">
                {project.name}
              </h3>
              <div className="absolute inset-0 rounded-xl bg-[#2E3453] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium">View Details</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;