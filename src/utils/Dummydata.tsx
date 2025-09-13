import { FaHotel, FaCar, FaHamburger, FaPlane, FaToilet, FaTooth, FaLaptop, FaPaw, FaLeaf } from "react-icons/fa";
import Dental1 from "../public/images/projects/Dental/Artboard 1 (1).jpg";
import Dental2 from "../public/images/projects/Dental/Artboard 1 copy (1).jpg";
import Dental3 from "../public/images/projects/Dental/Artboard 1 copy.jpg";
import Dental4 from "../public/images/projects/Dental/Artboard 1.jpg";
import Dental5 from "../public/images/projects/Dental/dental post.png";
import Dental6 from "../public/images/projects/Dental/03.jpg";
import Dental7 from "../public/images/projects/Dental/4.jpg";
import Dental8 from "../public/images/projects/Dental/5 (1).jpg";
import Dental9 from "../public/images/projects/Dental/5.jpg";

import Edge1 from "../public/images/projects/Edge/1 (1).png";
import Edge2 from "../public/images/projects/Edge/1.png";
import Edge3 from "../public/images/projects/Edge/2.png";

export interface Hotel {
  name: string;
  cover: string;      // Thumbnail or main image
  gallery: string[];  // All gallery images
}

export interface Project {
  name: string;
  icon: JSX.Element;
  desc: string;
  hotels?: Hotel[];   // Only hospitality will have hotels
  images?: string[];  // Other projects will still use images[]
}

export const projectData: Record<string, Project> = {
  hospitality: {
    name: "Hospitality",
    icon: <FaHotel />,
    desc: "Luxury hotel solutions",
    hotels: [
      {
        name: "EDGE Hotel",
        cover: Edge1,
        gallery: [Edge1, Edge2, Edge3],
      },
      {
        name: "Grand Palace",
        cover: Edge2,
        gallery: [Edge2, Edge1, Edge3],
      },
      {
        name: "Seaside Resort",
        cover: Edge3,
        gallery: [Edge3, Edge1, Edge2],
      },
    ],
  },
  transport: {
    name: "Transport",
    icon: <FaCar />,
    desc: "Efficient transport systems",
    images: ["car1.jpg", "car2.jpg"],
  },
  food: {
    name: "Food",
    icon: <FaHamburger />,
    desc: "Delicious food services",
    images: ["food1.jpg", "food2.jpg"],
  },
  immigration: {
    name: "Immigration",
    icon: <FaPlane />,
    desc: "Visa and migration help",
    images: ["plane1.jpg", "plane2.jpg"],
  },
  sanitation: {
    name: "Sanitation",
    icon: <FaToilet />,
    desc: "Hygiene solutions",
    images: ["san1.jpg", "san2.jpg"],
  },
  dental: {
    name: "Dental",
    icon: <FaTooth />,
    desc: "Dental care services",
    images: [Dental1, Dental2, Dental3, Dental4, Dental5, Dental6, Dental7, Dental8, Dental9],
  },
  laptop: {
    name: "Laptop",
    icon: <FaLaptop />,
    desc: "Tech support for laptops",
    images: ["laptop1.jpg", "laptop2.jpg"],
  },
  "pet-items": {
    name: "Pet Items",
    icon: <FaPaw />,
    desc: "Pet care products",
    images: ["pet1.jpg", "pet2.jpg"],
  },
  ayurvedic: {
    name: "Ayurvedic",
    icon: <FaLeaf />,
    desc: "Natural health remedies",
    images: ["ayur1.jpg", "ayur2.jpg"],
  },
};
