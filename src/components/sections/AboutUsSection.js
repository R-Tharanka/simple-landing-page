import React from "react";

export const AboutUsSection = () => {
  return (
    <section id="about" className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-[108px] px-4">
        <div className="w-full max-w-[414px]">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            alt="Digital strategy consulting illustration showing analytics and business growth"
            src="/images/image-1.png"
          />
        </div>

        <div className="flex flex-col w-full max-w-[542px] gap-5">
          <header className="flex flex-col gap-3">
            <h2 className="font-semibold text-2xl md:text-3xl text-indigo-600">
              Digital Strategy Consulting
            </h2>
          </header>

          <p className="font-['Inter-Regular',Helvetica] text-black text-base leading-relaxed">
            Your digital strategy should complement the overall marketing strategy
            of the company. In online marketing, each component will never work in
            isolation and every business needs a different mix. We provide a clear
            concept and strategic overview to find the most efficient model for
            your business.
          </p>

          <div>
            <button
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#f28d35] rounded hover:bg-[#e07d2a] focus:outline-none focus:ring-2 focus:ring-[#f28d35] focus:ring-offset-2 transition-colors duration-200"
              type="button"
              aria-label="Learn more about Digital Strategy Consulting"
            >
              <span className="font-['Inter-Bold',Helvetica] font-bold text-white text-sm tracking-tight whitespace-nowrap">
                LEARN MORE
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
