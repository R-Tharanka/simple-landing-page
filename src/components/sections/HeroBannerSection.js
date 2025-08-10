import React from "react";
import heroimg from '../../assets/images/hero-image.png';

export const HeroBannerSection = () => {
  return (
    <section
      className="w-full h-auto pt-16"
      role="banner"
      aria-label="Hero banner section"
    >
      {/* Hero Content Layout - Responsive */}
      <div className="flex flex-col relative">
        {/* Background Image - Full Width */}
        <img src={heroimg} alt="Hero Background" className="w-full h-full bg-cover bg-center bg-no-repeat z-0 object-contain" />

        {/* Content Container - Positioned at Bottom Left on md+ screens, Full width on smaller screens */}
        <div className="md:absolute md:bottom-8 lg:bottom-16 left-0 z-10 w-full md:px-8 lg:px-16 md:py-0">
          <div className="w-full md:max-w-[630px] flex flex-col items-start gap-4 sm:gap-5 pt-6 sm:pt-8 pb-8 sm:pb-10 px-8 sm:px-12 bg-gradient-to-r from-[rgba(77,202,121,0.9)] to-[rgba(28,189,221,0.9)] shadow-xl">
            <h1 className="font-bold font-['Inter-Bold',Helvetica] text-white text-3xl sm:text-4xl md:text-5xl tracking-tight leading-tight">
              We Crush Your Competitors, Goals, And Sales Records - Without The B.s.
            </h1>

            <button
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-[#f28d35] rounded hover:bg-[#e07d2a] focus:outline-none focus:ring-2 focus:ring-[#f28d35] focus:ring-offset-2 transition-colors duration-200"
              type="button"
              aria-label="Get free consultation"
            >
              <span className="font-bold font-['Inter-Bold',Helvetica] text-white text-sm tracking-tight whitespace-nowrap">
                GET FREE CONSULTATION
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
