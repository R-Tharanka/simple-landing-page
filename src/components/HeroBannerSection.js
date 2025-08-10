import React from "react";
// Using a more React-friendly approach with public URL for images
// This works with files in the public folder

export const HeroBannerSection = () => {
  return (
    <section
      className="absolute w-[1440px] h-[700px] top-[77px] left-0"
      style={{ 
        backgroundImage: `url(${process.env.PUBLIC_URL || ''}/images/hero-image.png)`, 
        backgroundSize: '100% 100%' 
      }}
      role="banner"
      aria-label="Hero banner section"
    >
      <div className="flex flex-col w-[630px] items-start gap-5 pt-6 pb-8 px-10 relative top-[354px] left-20 bg-[linear-gradient(257deg,rgba(28,189,221,1)_28%,rgba(77,202,121,1)_100%),linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,1)_100%)]">
        <h1 className="relative w-[556px] mt-[-1.00px] mr-[-6.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-5xl tracking-[-0.96px] leading-[48px]">
          We Crush Your Competitors, Goals, And Sales Records - Without The B.s.
        </h1>

        <button
          className="all-[unset] box-border inline-flex items-start gap-2 px-5 py-3 relative flex-[0_0_auto] bg-[#f28d35] rounded hover:bg-[#e07d2a] focus:outline-none focus:ring-2 focus:ring-[#f28d35] focus:ring-offset-2 transition-colors duration-200"
          type="button"
          aria-label="Get free consultation"
        >
          <span className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-sm tracking-[-0.28px] leading-[14px] whitespace-nowrap">
            GET FREE CONSULTATION
          </span>
        </button>
      </div>
    </section>
  );
};
