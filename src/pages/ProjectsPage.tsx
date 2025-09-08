import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaHotel, FaCar, FaHamburger, FaPlane, FaToilet, FaTooth, FaLaptop, FaPaw, FaLeaf } from "react-icons/fa";

interface Project {
  name: string;
  icon: JSX.Element;
  desc: string;
  images: string[];
}

const projectData: Record<string, Project> = {
  hospitality: { name: "Hospitality", icon: <FaHotel />, desc: "Luxury hotel solutions", images: ["hotel1.jpg", "hotel2.jpg"] },
  transport: { name: "Transport", icon: <FaCar />, desc: "Efficient transport systems", images: ["car1.jpg", "car2.jpg"] },
  food: { name: "Food", icon: <FaHamburger />, desc: "Delicious food services", images: ["food1.jpg", "food2.jpg"] },
  immigration: { name: "Immigration", icon: <FaPlane />, desc: "Visa and migration help", images: ["plane1.jpg", "plane2.jpg"] },
  sanitation: { name: "Sanitation", icon: <FaToilet />, desc: "Hygiene solutions", images: ["san1.jpg", "san2.jpg"] },
  dental: { name: "Dental", icon: <FaTooth />, desc: "Dental care services", images: ["dental1.jpg", "dental2.jpg"] },
  laptop: { name: "Laptop", icon: <FaLaptop />, desc: "Tech support for laptops", images: ["laptop1.jpg", "laptop2.jpg"] },
  "pet-items": { name: "Pet Items", icon: <FaPaw />, desc: "Pet care products", images: ["pet1.jpg", "pet2.jpg"] },
  ayurvedic: { name: "Ayurvedic", icon: <FaLeaf />, desc: "Natural health remedies", images: ["ayur1.jpg", "ayur2.jpg"] },
};

const ProjectDetailsPage: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(projectData[projectId || ""] || null);

  const handleProjectSelect = (proj: Project) => {
    setSelectedProject(proj);
    navigate(`/projects/${proj.name.toLowerCase().replace(/ /g, '-')}`);
  };

  const handleAllProjects = () => {
    setSelectedProject(null); // Set to null to indicate "All" view
    navigate("/projects/all");
  };

  return (
    <div className="py-20 bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold text-[#3c405b] mb-6 text-center">
          {selectedProject ? selectedProject.name : "All Projects"}
        </h2>
        <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          {selectedProject ? selectedProject.desc : "Explore all project categories and their images."}
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={handleAllProjects}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              !selectedProject ? "bg-[#3c405b] text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            All
          </button>
          {Object.values(projectData).map((proj) => (
            <button
              key={proj.name}
              onClick={() => handleProjectSelect(proj)}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                selectedProject && selectedProject.name === proj.name
                  ? "bg-[#3c405b] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {proj.name}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedProject
            ? selectedProject.images.map((img, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <img src={img} alt={`${selectedProject.name} ${idx + 1}`} className="w-full h-48 object-cover" />
                  <div className="p-4 text-center">
                    <p className="text-gray-700">{selectedProject.name} {idx + 1}</p>
                  </div>
                </div>
              ))
            : Object.values(projectData).flatMap((proj) =>
                proj.images.map((img, idx) => (
                  <div key={`${proj.name}-${idx}`} className="bg-white rounded-xl shadow-sm overflow-hidden">
                    <img src={img} alt={`${proj.name} ${idx + 1}`} className="w-full h-48 object-cover" />
                    <div className="p-4 text-center">
                      <p className="text-gray-700">{proj.name} {idx + 1}</p>
                    </div>
                  </div>
                ))
              )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;