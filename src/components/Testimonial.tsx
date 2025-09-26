import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import bgImg from "../public/images/bg-wave.jpg";

const feedbacks = [
  { id: 1, name: "Samantha", designation: "CEO", company: "Tech Corp", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", initial: "S" },
  { id: 2, name: "William", designation: "Manager", company: "Business Inc", feedback: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.", initial: "W" },
  { id: 3, name: "Brian", designation: "Designer", company: "Creative Studio", feedback: "Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis.", initial: "B" },
  { id: 4, name: "Peter", designation: "Developer", company: "CodeLab", feedback: "Eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam.", initial: "P" },
];

export default function FeedbackSection() {
  const [cards, setCards] = useState(feedbacks);
  const [activeCard, setActiveCard] = useState(feedbacks[feedbacks.length - 1]);

  // Click handler → smoothly move card into active spot
  const handleCardClick = (index: number) => {
    const newOrder = [...cards];
    const [clicked] = newOrder.splice(index, 1);
    newOrder.push(clicked);
    setCards(newOrder);
    setActiveCard(clicked);
  };

  const handleNext = () => {
    const newOrder = [...cards];
    const first = newOrder.shift();
    if (first) newOrder.push(first);
    setCards(newOrder);
    setActiveCard(newOrder[newOrder.length - 1]);
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pb-16 bg-center"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
      }}
    >
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-[#3c405b] mb-2">
          Hear From Our Clients
        </h2>
        <p className="text-lg text-gray-600">
          Trusted worldwide — hear what our clients say
        </p>
      </div>

      <div className="relative flex items-center justify-center gap-12 z-10 pt-9">
        {/* Left side carousel */}
        <div className="flex gap-4 items-center">
          <AnimatePresence>
            {cards.map((person, index) => {
              const isActive = person.id === activeCard.id;
              return (
                <motion.div
                  key={person.id}
                  layout
                  onClick={() => handleCardClick(index)}
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  animate={{
                    opacity: 1,
                    scale: isActive ? 1.15 : 0.9,
                    rotate: isActive ? 0 : -8,
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  className={`flex flex-col items-center justify-center rounded-lg text-white cursor-pointer shadow-xl ${isActive ? "bg-[#2E3453] h-96 w-40" : "bg-gray-400 h-48 w-28"
                    }`}
                >
                  <div className="text-6xl font-bold">{person.initial}</div>
                  <div className="mt-4 flex flex-col items-center text-center">
                    <FaUser className="text-2xl mb-1" />
                    <p className="text-sm font-semibold">{person.name}</p>
                    <p className="text-xs opacity-80">{person.designation}</p>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Right side feedback */}
        <div className="ml-10 max-w-lg">
          <div className="flex items-center gap-2 mb-3">
            <FaUser className="text-xl text-[#2E3453]" />
            <div>
              <p className="font-bold text-lg text-[#2E3453]">
                {activeCard.name}
              </p>
              <p className="text-sm text-gray-500">
                {activeCard.designation} / {activeCard.company}
              </p>
            </div>
          </div>
          <p className="text-gray-600 italic">“{activeCard.feedback}”</p>
          <button
            onClick={handleNext}
            className="mt-20 w-10 h-10 flex items-center justify-center bg-[#2E3453] rounded-full text-white text-3xl animate-bounce"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
