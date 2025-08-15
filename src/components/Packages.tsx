import React, { useState } from "react";

const packagesData = [
  {
    id: "single",
    title: "Single User",
    description:
      "The perfect graphic design package for a single user, boosting creativity and efficiency.",
    planLabel: "Single Plan",
    buttonLabel: "Book Now",
  },
  {
    id: "business",
    title: "Business User",
    description:
      "The perfect graphic design package for companies, boosting creativity and streamlining team collaboration.",
    planLabel: "Corporate Plan",
    buttonLabel: "Book Now",
  },
  {
    id: "coming",
    title: "Coming Soon",
    description:
      "An innovative new package is coming soon, packed with features to fuel your design work.",
    planLabel: "Corporate Plan",
    buttonLabel: "Book Now",
  },
];

const Packages: React.FC = () => {
  const [active, setActive] = useState("business");

  return (
    <section className="py-16 relative">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8 lg:mt-14">
        Book Your Quotation
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {packagesData.map((pkg) => (
          <button
            key={pkg.id}
            onClick={() => setActive(pkg.id)}
            className={`px-4 py-2 rounded-lg border transition ${
              active === pkg.id
                ? "bg-indigo-100 border-indigo-500 text-indigo-700"
                : "bg-white border-gray-300 text-gray-600"
            }`}
          >
            {pkg.title}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="flex justify-center items-center gap-6">
        {packagesData.map((pkg) => (
          <div
            key={pkg.id}
            className={`bg-gradient-to-b from-indigo-900 to-indigo-800 text-white rounded-2xl shadow-lg p-6 w-80 transition-transform duration-300 ${
              active === pkg.id
                ? "scale-110 border-4 border-indigo-300 z-10"
                : "scale-95 opacity-80"
            }`}
          >
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center mb-4">
                  <div className="bg-white/20 p-2 rounded-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 3v1h1v17H3v1h1v1h16v-1h1v-1h-1V4h1V3h-1V2H4v1H3z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold ml-3">{pkg.title}</h3>
                </div>
                <p className="text-sm text-gray-200">{pkg.description}</p>
              </div>

              <div className="flex justify-between items-center mt-6">
                <span className="bg-white text-indigo-900 text-sm font-medium px-3 py-1 rounded-lg">
                  {pkg.planLabel}
                </span>
                <button className="bg-white text-indigo-900 px-4 py-2 rounded-lg font-semibold hover:bg-indigo-100 transition">
                  {pkg.buttonLabel}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer text */}
      <div className="max-w-3xl mx-auto mt-10 text-center text-gray-600 text-sm">
        You can choose the package you want, and through it, the{" "}
        <strong>Single User Package</strong> has been introduced for designs
        that need to be purchased <strong>only once</strong>, and the{" "}
        <strong>Business User Package</strong> for monthly{" "}
        <strong>recurring Design needs</strong>.
      </div>
    </section>
  );
};

export default Packages;
