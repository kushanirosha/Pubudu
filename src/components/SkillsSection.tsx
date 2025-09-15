import React, { useEffect, useRef, useState } from "react";
import PS from "../public/images/ps.png";
import AI from "../public/images/ai.png";
import ID from "../public/images/Id.png";
import AN from "../public/images/an.png";
import PR from "../public/images/Pr.png";
import AE from "../public/images/Ae.png";

interface Skill {
  name: string;
  level: number;
  image: string;
}

const skills: Skill[] = [
  { name: "Photoshop", level: 95, image: PS },
  { name: "Illustrator", level: 92, image: AI },
  { name: "Indesign", level: 90, image: ID },
  { name: "Animate", level: 88, image: AN },
  { name: "Premiere Pro", level: 85, image: PR },
  { name: "After Effect", level: 80, image: AE },
];

const CircleSkill: React.FC<{ skill: Skill; isVisible: boolean }> = ({
  skill,
  isVisible,
}) => {
  const radius = 60;
  const stroke = 10;
  const circumference = 2 * Math.PI * radius;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) return; // only start when visible

    let start = 0;
    const interval = setInterval(() => {
      start += 1;
      if (start <= skill.level) {
        setProgress(start);
      } else {
        clearInterval(interval);
      }
    }, 20);

    return () => clearInterval(interval);
  }, [isVisible, skill.level]);

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center w-72 hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-40 h-40">
        <svg className="transform -rotate-90" width="160" height="160">
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#e5e7eb"
            strokeWidth={stroke}
            fill="none"
          />
          <circle
            cx="80"
            cy="80"
            r={radius}
            stroke="#3c405b"
            strokeWidth={stroke}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (progress / 100) * circumference}
            strokeLinecap="round"
            className="transition-all duration-300"
          />
        </svg>

        {/* Tool image in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={skill.image}
            alt={skill.name}
            className="w-14 h-14 object-contain"
          />
        </div>
      </div>
      <p className="mt-4 text-lg font-semibold text-gray-900">
        {skill.name} - {progress}%
      </p>
    </div>
  );
};

const SkillsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // trigger only once
        }
      },
      { threshold: 0.3 } // trigger when 30% is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section ref={sectionRef} className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3c405b] mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600">
            Technologies and tools I work with to bring your ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {skills.map((skill, index) => (
            <CircleSkill key={index} skill={skill} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;


