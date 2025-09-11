import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { projectData } from "../utils/dummydata";
import { FaEye } from "react-icons/fa";

interface Hotel {
  name: string;
  cover: string;
  gallery: string[];
}

interface Project {
  name: string;
  icon: JSX.Element;
  desc: string;
  hotels?: Hotel[];
  images?: string[];
}

const ProjectDetailsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();
  const [selectedProject, setSelectedProject] = useState<Project | null>(
    projectData[projectId || ""] || null
  );

  // ✅ Modal states
  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [title, setTitle] = useState<string>("");

  // ✅ Pagination state
  const [visibleCount, setVisibleCount] = useState(12);

  const handleProjectSelect = (proj: Project) => {
    setSelectedProject(proj);
    setVisibleCount(12); // reset pagination
    navigate(`/projects/${proj.name.toLowerCase().replace(/ /g, "-")}`);
  };

  const handleAllProjects = () => {
    setSelectedProject(null);
    setVisibleCount(12); // reset pagination
    navigate("/projects/all");
  };

  // ✅ Reusable Card
  const Card: React.FC<{
    image: string;
    title: string;
    gallery: string[];
    galleryIndex: number;
  }> = ({ image, title, gallery, galleryIndex }) => (
    <div
      onClick={() => {
        setActiveGallery(gallery);
        setSelectedImage(gallery[galleryIndex]);
        setCurrentIndex(galleryIndex);
        setTitle(title);
      }}
      className="relative cursor-pointer bg-white rounded-xl shadow-sm overflow-hidden group hover:shadow-md transition"
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
        <FaEye className="text-white text-2xl" />
      </div>
      <div className="p-4 text-center">
        <p className="text-gray-700 font-medium">{title}</p>
      </div>
    </div>
  );

  // ✅ Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!activeGallery) return;
      if (e.key === "ArrowRight") {
        setCurrentIndex((prev) => {
          const newIndex = (prev + 1) % activeGallery.length;
          setSelectedImage(activeGallery[newIndex]);
          return newIndex;
        });
      }
      if (e.key === "ArrowLeft") {
        setCurrentIndex((prev) => {
          const newIndex =
            (prev - 1 + activeGallery.length) % activeGallery.length;
          setSelectedImage(activeGallery[newIndex]);
          return newIndex;
        });
      }
      if (e.key === "Escape") {
        setActiveGallery(null);
        setSelectedImage(null);
        setTitle("");
      }
    },
    [activeGallery]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // ✅ Collect all images for "All" tab
  const getAllImages = (): { image: string; title: string }[] => {
    return Object.values(projectData).flatMap((proj) => {
      if (proj.hotels) {
        return proj.hotels.flatMap((hotel) =>
          hotel.gallery.map((img) => ({ image: img, title: hotel.name }))
        );
      }
      return proj.images?.map((img) => ({ image: img, title: proj.name })) || [];
    });
  };

  // ✅ Collect category images
  const getCategoryImages = (proj: Project): { image: string; title: string }[] => {
    if (proj.name === "Hospitality") return [];
    return proj.images?.map((img) => ({ image: img, title: proj.name })) || [];
  };

  // ✅ Get current list of cards
  const cards = selectedProject
    ? selectedProject.name === "Hospitality"
      ? [] // hospitality unchanged
      : getCategoryImages(selectedProject)
    : getAllImages();

  return (
    <div className="pb-20 pt-28 bg-gray-100 min-h-screen rounded-b-[50px]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Title Section */}
        <h2 className="text-4xl font-bold text-[#3c405b] mb-2 text-center">
          {selectedProject ? selectedProject.name : "All Projects"}
        </h2>
        <p className="text-gray-600 mb-8 text-center max-w-3xl mx-auto">
          {selectedProject
            ? selectedProject.desc
            : "Explore all project categories and their images."}
        </p>

        {/* Category Buttons */}
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={handleAllProjects}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              !selectedProject
                ? "bg-[#3c405b] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
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
        <div className="border-t-4 border-gray-300 py-4 w-full"></div>

        {/* Hospitality (unchanged) */}
        {selectedProject?.name === "Hospitality" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {selectedProject.hotels?.map((hotel, idx) => (
              <Card
                key={idx}
                image={hotel.cover}
                title={hotel.name}
                gallery={hotel.gallery}
                galleryIndex={0}
              />
            ))}
          </div>
        )}

        {/* Other categories & All tab with scroll + pagination */}
        {((selectedProject && selectedProject.name !== "Hospitality") ||
          !selectedProject) && (
          <div className="h-screen overflow-y-scroll no-scrollbar">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.slice(0, visibleCount).map((item, idx, arr) => (
                <Card
                  key={`${item.title}-${idx}`}
                  image={item.image}
                  title={item.title}
                  gallery={arr.map((i) => i.image)}
                  galleryIndex={idx}
                />
              ))}
            </div>

            {visibleCount < cards.length && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 12)}
                  className="px-6 py-2 bg-[#3c405b] text-white rounded-full hover:bg-[#2a2d44] transition"
                >
                  See More
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Modal Gallery */}
      {activeGallery && selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-80">
          <button
            className="absolute top-5 right-5 text-white text-2xl"
            onClick={() => {
              setActiveGallery(null);
              setSelectedImage(null);
              setTitle("");
            }}
          >
            ✕
          </button>
          <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
          <img
            src={selectedImage}
            alt="Selected"
            className="max-h-[70vh] max-w-[90vw] rounded-xl shadow-lg mb-4"
          />
          <div className="flex gap-2 overflow-x-auto max-w-[90vw]">
            {activeGallery.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`thumb-${idx}`}
                onClick={() => {
                  setSelectedImage(img);
                  setCurrentIndex(idx);
                }}
                className={`h-20 w-28 object-cover rounded cursor-pointer border-2 ${
                  currentIndex === idx ? "border-white" : "border-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetailsPage;
