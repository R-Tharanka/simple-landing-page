import React from "react";
import img2 from '../../assets/images/image-2.png';

export const ServicesSection = () => {
  return (
    <section id="services" className="container mx-auto py-12 md:py-16 px-5 md:px-8">
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-[108px]">
        <div className="w-full max-w-[350px] md:max-w-[414px]">
          <img
            className="w-full h-auto object-cover rounded-lg hover:shadow-lg transition-all duration-300"
            alt="Web and Mobile App Development illustration"
            src={img2}
          />
        </div>

        <div className="flex flex-col w-full max-w-[542px] gap-4 md:gap-5 mt-4 md:mt-0 px-2 md:px-0">
          <header className="flex flex-col gap-3">
            <h2 className="font-semibold text-xl md:text-2xl lg:text-3xl text-indigo-600">
              Web &amp; Mobile App Development
            </h2>
            <div className="w-16 h-1 bg-[#f28d35]"></div>
          </header>

          <p className="font-['Inter-Regular',Helvetica] text-black text-sm md:text-base leading-relaxed">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>

          <div className="mt-2 md:mt-4">
            <button
              className="inline-flex items-center gap-2 px-4 md:px-5 py-2.5 md:py-3 bg-[#f28d35] rounded hover:bg-[#e07d2a] focus:outline-none focus:ring-2 focus:ring-[#f28d35] focus:ring-offset-2 transition-all duration-200 transform hover:scale-105"
              type="button"
              aria-label="Learn more about Web and Mobile App Development services"
            >
              <span className="font-['Inter-Bold',Helvetica] font-bold text-white text-xs md:text-sm tracking-tight whitespace-nowrap">
                LEARN MORE
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
