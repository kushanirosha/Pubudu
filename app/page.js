import { Button } from '@heroui/button';

export default function Page() {
  return (
    <div>

      {/* Intro Section  */}
      <section className="min-h-screen flex items-center justify-center text-center bg-dark-bg py-16">
        <div>
          <h1 className="text-6xl md:text-8xl font-custom-serif text-beige-text mb-4">
            Web Designer & Developer
          </h1>
          <p className="text-lg md:text-xl font-custom-sans text-gray-accent mb-6 max-w-2xl mx-auto">
            Premium web design, development, and SEO services to help your business stand out.
          </p>
          <a
            href="#services"
            className="inline-block px-6 py-3 text-gray-accent border border-gray-accent rounded-full hover:bg-gray-accent hover:text-dark-bg transition-colors duration-300"
          >
            My Services
          </a>
          <div className="flex justify-center space-x-6 mt-12">
            <span className="text-beige-text">LOGO</span>
            <span className="text-beige-text">logoipsum</span>
            <span className="text-beige-text">Hai Logo</span>
            <span className="text-beige-text">OOOO</span>
            <span className="text-beige-text">LOGOIPSUM</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-dark-bg text-center">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Web Design Card */}
          <div className="bg-card-bg p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-custom-serif text-beige-text mb-2">01 Web Design</h2>
            <p className="text-sm md:text-base font-custom-sans text-gray-accent mb-4">
              Visually stunning web designs that captivate your audience by blending your brand voice and customer needs.
            </p>
            <a href="#web-design" className="inline-flex items-center text-beige-text hover:underline">
              <span className="mr-2">➔</span> About Web Design
            </a>
          </div>

          {/* Development Card */}
          <div className="bg-card-bg p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-custom-serif text-beige-text mb-2">02 Development</h2>
            <p className="text-sm md:text-base font-custom-sans text-gray-accent mb-4">
              Get custom web development solutions that are tailored to your specifications, designed to deliver a flawless user experience.
            </p>
            <a href="#development" className="inline-flex items-center text-beige-text hover:underline">
              <span className="mr-2">➔</span> About WebFlow
            </a>
          </div>

          {/* Content & SEO Card */}
          <div className="bg-card-bg p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl md:text-3xl font-custom-serif text-beige-text mb-2">03 Content & SEO</h2>
            <p className="text-sm md:text-base font-custom-sans text-gray-accent mb-4">
              Proven SEO strategies that enhance your online performance, bringing you to the forefront of organic search results.
            </p>
            <a href="#seo" className="inline-flex items-center text-beige-text hover:underline">
              <span className="mr-2">➔</span> About SEO
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}