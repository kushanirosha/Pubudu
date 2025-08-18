import Portfolio from '../components/Portfolio';
import Ps from '../public/images/ps.png';
import Ai from '../public/images/ai.png';
import Ae from '../public/images/Ae.png';
import Id from '../public/images/Id.png';
import Pr from '../public/images/Pr.png';
import Lr from '../public/images/Lr.png';


const AboutSection = () => {
  return (
    <div className="flex items-center justify-between min-h-screen max-w-7xl mx-auto px-6 lg:px-12">
      {/* Decorative Image Section */}
      <div className="w-1/2 flex items-center justify-center relative">
        
        
          <Portfolio />
        
      </div>

      {/* Text and Stats */}
      <div className="w-1/2 pl-12 text-right">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#3c405b] mb-4">
          Professional Graphic Designer
        </h2>
        <p className="text-gray-600 mb-8 max-w-lg ml-auto">
          with 5+ years of experience, freelancing since 2019. I create impactful designs 
          for diverse clients, from startups to high-end companies, while adhering 
          to brand guidelines.
        </p>
 
        {/* Stats card */}
        <div className="bg-gradient-to-r from-gray-200 via-white to-gray-200 p-6 rounded-xl shadow-sm w-full max-w-lg ml-auto text-left">
          <div className="grid grid-cols-3 gap-6 border-y-white border-b-2">
            <div className='border-x-white border-r-2'>
              <p className="text-3xl font-bold text-[#3c405b]">6 Years</p>
              <p className="text-sm text-gray-600 mb-2">Experience</p>
            </div>
            <div className='border-x-white border-r-2'>
              <p className="text-3xl font-bold text-[#3c405b]">600+</p>
              <p className="text-sm text-gray-600 mb-2">Project Completed</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#3c405b]">88%</p>
              <p className="text-sm text-gray-600 mb-2">Approval on First Presentation</p>
            </div>
          </div>

          {/* Skills */}
          <div className="mt-6 text-left">
            <p className="text-gray-700 font-semibold mb-3">Technical Skills</p>
            <div className="flex justify-start space-x-3">
              <img src={Ps} alt="Photoshop" className="w-10 h-10" />
              <img src={Ai} alt="Illustrator" className="w-10 h-10" />
              <img src={Ae} alt="After Effects" className="w-10 h-10" />
              <img src={Id} alt="InDesign" className="w-10 h-10" />
              <img src={Pr} alt="Premiere" className="w-10 h-10" />
              <img src={Lr} alt="Lightroom" className="w-10 h-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
