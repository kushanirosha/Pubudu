import React from 'react';
import lightImage from '../public/images/light.png'

const HeroSection: React.FC = () => {
  return (
    <div className="relative items-center justify-center h-screen">
      <img src={lightImage} alt="Senior Graphic Designer" className="w-screen h-screen " />
    </div>
  );
};

export default HeroSection;