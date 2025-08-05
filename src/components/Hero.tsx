import React from 'react';
import lightImage from '../public/images/profile.jpg'

const HeroSection: React.FC = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-sky-200 via-indigo-100 to-lightblue-300"></div>
      <div className="relative z-10 flex items-center justify-between max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-left text-indigo-900">
          <p className="text-xl mb-4 font-light">I'am Pubudu Wijerathne</p>
          <h1 className="md:text-[200px] text-7xl font-extrabold leading-none mb-4">
            Port<br />Folio
          </h1>
          <p className="text-lg font-medium">Powered By Brand Beacon</p>
        </div>

        <div className=''>
          <img src={lightImage} alt="Pubudu Wijerathne" className="h-screen" />
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V20M12 20L7 15M12 20L17 15" stroke="#1E3A8A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;