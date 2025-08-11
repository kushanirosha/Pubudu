import React from "react";
import {
  FaHotel,
  FaCar,
  FaHamburger,
  FaPlane,
  FaToilet,
  FaTooth,
  FaLaptop,
  FaPaw,
  FaLeaf
} from "react-icons/fa";

const projects = [
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

export default function PortfolioSection() {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Explore My Projects
        </h2>
        <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
          You’ll see examples of how I help clients bring their online vision to life.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl border border-gray-100 p-8 flex flex-col items-center justify-center transition-all duration-300 hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="text-4xl text-[#2E3453] mb-4 group-hover:scale-110 transition-transform duration-300">
                {project.icon}
              </div>
              {/* Name */}
              <h3 className="text-lg font-semibold text-gray-800">
                {project.name}
              </h3>

              {/* Modern hover overlay */}
              <div className="absolute inset-0 rounded-xl bg-[#2E3453] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white font-medium">View Details</p>
              </div>
            </div>
          ))}

          {/* Empty placeholders for layout */}
          <div className="bg-white rounded-xl border border-gray-100" />
          <div className="bg-white rounded-xl border border-gray-100" />
          <div className="bg-white rounded-xl border border-gray-100" />
        </div>
      </div>
    </section>
  );
}
