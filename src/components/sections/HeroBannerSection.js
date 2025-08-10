import React from "react";

export const HeroBannerSection = () => {
  return (
    <section
      className="w-full h-[700px] bg-gradient-to-r from-indigo-500 to-blue-500 flex items-center"
      role="banner"
      aria-label="Hero banner section"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-[630px] flex flex-col items-start gap-5 pt-6 pb-8 px-10 bg-gradient-to-r from-[rgba(28,189,221,1)] to-[rgba(77,202,121,1)] ml-20">
          <h1 className="font-bold font-['Inter-Bold',Helvetica] text-white text-5xl tracking-tight leading-tight max-w-[556px]">
            We Crush Your Competitors, Goals, And Sales Records - Without The B.s.
          </h1>

          <button
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#f28d35] rounded hover:bg-[#e07d2a] focus:outline-none focus:ring-2 focus:ring-[#f28d35] focus:ring-offset-2 transition-colors duration-200"
            type="button"
            aria-label="Get free consultation"
          >
            <span className="font-bold font-['Inter-Bold',Helvetica] text-white text-sm tracking-tight whitespace-nowrap">
              GET FREE CONSULTATION
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};
