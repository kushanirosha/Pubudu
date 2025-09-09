import { FaHotel, FaCar, FaHamburger, FaPlane, FaToilet, FaTooth, FaLaptop, FaPaw, FaLeaf } from "react-icons/fa";

export interface Project {
  name: string;
  icon: JSX.Element;
  desc: string;
  images: string[];
}

export const projectData: Record<string, Project> = {
  hospitality: {
    name: "Hospitality",
    icon: <FaHotel />,
    desc: "Luxury hotel solutions",
    images: ["Artboard 1.jpg", "hotel2.jpg"],
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
    images: ["dental1.jpg", "dental2.jpg"],
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
