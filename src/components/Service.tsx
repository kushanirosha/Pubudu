import React from "react";
import logo from "../public/images/logo 22.png";

const ServicesSection: React.FC = () => {
    return (
        <section className="text-[#3c405b] py-16 max-w-7xl mx-auto px-6 lg:px-12">
            <div className="text-center">
                {/* Logo */}
                <img src={logo} alt="Brand Beecon Logo" className="mx-auto w-40 h-40" />

                {/* Title */}
                <h2 className="text-2xl font-bold">BRAND BEECON</h2>

                {/* Intro */}
                <p className="text-gray-600 max-w-3xl mx-auto mt-4 leading-relaxed">
                    At Brand Beecon, we believe great design is the foundation for a thriving
                    online presence. In a crowded digital world, we create scroll-stopping social
                    media content that doesn’t just look good
                    <br />
                    <span className="font-semibold text-[#3c405b]">
                        it drives engagement and builds communities.
                    </span>
                </p>
            </div>

            {/* Timeline */}
            <div className="grid grid-cols-2 relative mt-10">
                {/* Vertical Center Line */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#3c405b] -translate-x-1/2"></div>

                {/* Row 1 - Right */}
                <div></div>
                <div className="text-left relative border-t-4 border-[#3c405b] mt-10">
                    <div className="p-6 relative z-10 mt-5 ml-5">
                        <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
                        <p className="text-gray-600">
                            We expertly blend creative design with smart marketing to make
                            your brand shine.
                        </p>
                    </div>
                </div>

                {/* Row 2 - Left */}
                <div className="text-right relative border-t-4 border-[#3c405b]">
                    <div className="p-6 relative z-10 mt-5 mr-5">
                        <h3 className="text-xl font-semibold mb-2">Web Development</h3>
                        <p className="text-gray-600">
                            We build custom sites that blend stunning design with strategic
                            functionality to turn visitors into loyal customers.
                        </p>
                    </div>
                </div>
                <div></div>

                {/* Row 3 - Right */}
                <div></div>
                <div className="text-left relative border-t-4 border-[#3c405b]">
                    <div className="p-6 mt-5 relative z-10 ml-5">
                        <h3 className="text-xl font-semibold mb-2">Creative Design</h3>
                        <p className="text-gray-600">
                            We craft scroll-stopping designs that capture attention and drive
                            engagement in a crowded digital world.
                        </p>
                    </div>
                </div>

                {/* Row 4 - Left */}
                <div className="text-right relative border-t-4 border-[#3c405b] mb-32">
                    <div className="p-6 mt-5 relative z-10 mr-5">
                        <h3 className="text-xl font-semibold mb-2">SEO Services</h3>
                        <p className="text-gray-600">
                            Our SEO strategies optimize your presence, boost search rankings,
                            and convert visibility into business growth.
                        </p>
                    </div>
                </div>
                <div></div>
            </div>

            {/* Mission Box */}
            <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-xl p-8 text-center shadow-sm">
                <h3 className="text-lg font-bold mb-4">Our mission is simple</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                    to help brands of all sizes stand out and connect with their audience.
                    <br />
                    We do this by crafting purposeful and visually stunning designs that tell
                    your unique story.
                    <br />
                    We’re not just designers; we’re your creative partners, dedicated to turning
                    your vision into a vibrant reality.
                </p>
            </div>
        </section>
    );
};

export default ServicesSection;
