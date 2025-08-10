import React from "react";
import img1 from "../../assets/images/image-1.png";

export const AboutUsSection = () => {
  return (
    <section id="about" className="container mx-auto py-16 px-4 lg:px-8">
      <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-8 md:gap-12 lg:gap-16">
        {/* Image Container */}
        <div className="w-full md:w-1/2 max-w-[500px] mx-auto md:mx-0">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            alt="Digital strategy consulting illustration showing analytics and business growth"
            src={img1}
          />
        </div>

        {/* Content Container */}
        <div className="flex flex-col w-full md:w-1/2 max-w-[600px] gap-6">
          <header className="flex flex-col gap-4">
            <h2 className="font-semibold text-2xl md:text-3xl lg:text-4xl text-indigo-600">
              Digital Strategy Consulting
            </h2>
            <div className="w-20 h-1 bg-[#f28d35]"></div>
          </header>

          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Your digital strategy should complement the overall marketing strategy
            of the company. In online marketing, each component will never work in
            isolation and every business needs a different mix. We provide a clear
            concept and strategic overview to find the most efficient model for
            your business.
          </p>

          <div className="mt-2">
            <button
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f28d35] rounded-md hover:bg-[#e07d2a] focus:outline-none focus:ring-2 focus:ring-[#f28d35] focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
              type="button"
              aria-label="Learn more about Digital Strategy Consulting"
            >
              <span className="font-bold text-white text-sm tracking-wide whitespace-nowrap">
                LEARN MORE
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
