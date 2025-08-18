import React from 'react';
import lightImage from '../public/images/profile.jpg'

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0"></div>
      <div className="relative z-10 flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-left text-[#3c405b]">
          <p className="text-xl mb-4 font-light">I'am Pubudu Wijerathne</p>
          <h1 className="md:text-[230px] text-7xl font-extrabold leading-none mb-4">
            Port<br />Folio
          </h1>
          <p className="text-lg font-medium">Powered By Brand Beacon</p>
        </div>

        <div className=''>
          <img src={lightImage} alt="Pubudu Wijerathne" className="h-screen lg:ml-20 lg:mt-10" />
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V20M12 20L7 15M12 20L17 15" stroke="#3c405b" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;