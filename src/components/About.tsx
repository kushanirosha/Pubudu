import Portfolio from '../components/Portfolio';

const AboutSection = () => {
  return (
    <div className="flex items-center justify-between p-8 h-screen max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Decorative Image */}
      <div className="w-1/2 relative">
       <Portfolio/>
      </div>

      {/* Text and Stats */}
      <div className="w-1/2 pl-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Professional Graphic Designer</h2>
        <p className="text-gray-600 mb-6">
          with 5+ years of experience, freelancing since 2019. I create impactful designs for diverse clients, from
          startups to high-end companies, while adhering to brand guidelines.
        </p>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl font-bold text-gray-800">6 Years</p>
              <p className="text-sm text-gray-500">Experience</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">600+</p>
              <p className="text-sm text-gray-500">Project completed</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-gray-800">88%</p>
              <p className="text-sm text-gray-500">Project Approval on First Presentation</p>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-gray-700 font-semibold mb-2">Technical Skills</p>
            <div className="flex space-x-2">
              <img
                src="https://via.placeholder.com/40?text=Ps" // Replace with Photoshop icon
                alt="Photoshop"
                className="w-10 h-10"
              />
              <img
                src="https://via.placeholder.com/40?text=Ai" // Replace with Illustrator icon
                alt="Illustrator"
                className="w-10 h-10"
              />
              <img
                src="https://via.placeholder.com/40?text=Ae" // Replace with After Effects icon
                alt="After Effects"
                className="w-10 h-10"
              />
              <img
                src="https://via.placeholder.com/40?text=Id" // Replace with InDesign icon
                alt="InDesign"
                className="w-10 h-10"
              />
              <img
                src="https://via.placeholder.com/40?text=Pr" // Replace with Premiere icon
                alt="Premiere"
                className="w-10 h-10"
              />
              <img
                src="https://via.placeholder.com/40?text=Lr" // Replace with Lightroom icon
                alt="Lightroom"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;