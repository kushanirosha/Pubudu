import React, { useState, useEffect, useRef } from "react";
import { FaUser } from "react-icons/fa";
import bgImg from "../public/images/bg-wave.jpg";

const feedbacks = [
  { id: 1, name: "Samantha", designation: "CEO", company: "Tech Corp", feedback: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", initial: "S" },
  { id: 2, name: "William", designation: "Manager", company: "Business Inc", feedback: "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.", initial: "W" },
  { id: 3, name: "Brian", designation: "Designer", company: "Creative Studio", feedback: "Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis.", initial: "B" },
  { id: 4, name: "Peter", designation: "Developer", company: "CodeLab", feedback: "Eget mi proin sed libero enim sed faucibus turpis in eu mi bibendum neque egestas congue quisque egestas diam.", initial: "P" },
];

export default function FeedbackSection() {
  const [activeIndex, setActiveIndex] = useState(feedbacks.length - 1);
  const [bgZoom, setBgZoom] = useState(100);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % feedbacks.length);
  };

  // Detect when section is visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVisible(entry.isIntersecting));
      },
      { threshold: 0.2 } // trigger when at least 20% visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  // Apply zoom only while visible
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current || !isVisible) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Progress: how much of the section is scrolled (0 at top, 1 at bottom)
      const progress = Math.min(
        1,
        Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height))
      );

      // Map progress to zoom range (100% → 130%)
      const zoom = 100 + progress * 90;
      setBgZoom(zoom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center px-6 pb-16 bg-center transition-all duration-300 ease-in-out"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: `${bgZoom}%`,
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
          {feedbacks.map((person, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={person.id}
                onClick={() => setActiveIndex(index)}
                className={`flex flex-col items-center justify-center rounded-lg bg-[#2E3453] text-white cursor-pointer transition-all duration-300 ${isActive
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
            className="mt-20 w-10 h-10 flex items-center justify-center bg-[#2E3453] rounded-full text-white text-3xl animate-bounce"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
