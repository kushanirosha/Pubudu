import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import bgImg from "../public/images/bg-wave.jpg";

const feedbacks = [
  {
    id: 1,
    name: "Samantha",
    designation: "CEO",
    company: "Tech Corp",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "", // Put image URL here
    initial: "S",
  },
  {
    id: 2,
    name: "William",
    designation: "Manager",
    company: "Business Inc",
    feedback:
      "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    image: "",
    initial: "W",
  },
  {
    id: 3,
    name: "Brian",
    designation: "Designer",
    company: "Creative Studio",
    feedback:
      "Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis.",
    image: "",
    initial: "B",
  },
  {
    id: 4,
    name: "Peter",
    designation: "Developer",
    company: "CodeLab",
    feedback:
      "Eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam.",
    image: "",
    initial: "P",
  },
];

export default function FeedbackSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % feedbacks.length);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-6 bg-cover bg-center" style={{ backgroundImage: `url(${bgImg})` }}>
      {/* Left side carousel */}
      <div className="flex gap-4 items-center">
        {feedbacks.map((person, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={person.id}
              onClick={() => setActiveIndex(index)}
              className={`flex flex-col items-center justify-center rounded-lg bg-[#2E3453] text-white cursor-pointer transition-all duration-300 ${
                isActive
                  ? "h-96 w-40"
                  : "h-48 w-28 opacity-60 hover:opacity-80"
              }`}
            >
              <div className="text-6xl font-bold">{person.initial}</div>
              <div className="mt-4 flex flex-col items-center text-center">
                <FaUser className="text-2xl mb-1" />
                <p className="text-sm font-semibold">{person.name}</p>
                <p className="text-xs opacity-80">{person.designation}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Right side feedback */}
      <div className="ml-10 max-w-lg">
        <div className="flex items-center gap-2 mb-3">
          <FaUser className="text-xl text-[#2E3453]" />
          <div>
            <p className="font-bold text-lg text-[#2E3453]">
              {feedbacks[activeIndex].name}
            </p>
            <p className="text-sm text-gray-500">
              {feedbacks[activeIndex].designation} /{" "}
              {feedbacks[activeIndex].company}
            </p>
          </div>
        </div>
        <p className="text-gray-600 italic">
          “{feedbacks[activeIndex].feedback}”
        </p>
        <button
          onClick={handleNext}
          className="mt-6 w-10 h-10 flex items-center justify-center bg-[#2E3453] rounded-full text-white"
        >
          →
        </button>
      </div>
    </div>
  );
}
