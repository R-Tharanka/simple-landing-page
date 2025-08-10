import React from "react";

export const AboutUsSection = () => {
  return (
    <section className="inline-flex items-center gap-[108px] absolute top-[1351px] left-[188px]">
      <div className="flex flex-col w-[542px] items-start gap-5 relative">
        <header className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
          <h2 className="relative w-[507px] mt-[-1.00px] font-poppins-h3-poppins-27px-semibold font-[number:var(--poppins-h3-poppins-27px-semibold-font-weight)] text-indigo-600 text-[length:var(--poppins-h3-poppins-27px-semibold-font-size)] tracking-[var(--poppins-h3-poppins-27px-semibold-letter-spacing)] leading-[var(--poppins-h3-poppins-27px-semibold-line-height)] [font-style:var(--poppins-h3-poppins-27px-semibold-font-style)]">
            Digital Strategy Consulting
          </h2>
        </header>

        <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
          Your digital strategy should complement the overall marketing strategy
          of the company. In online marketing, each component will never work in
          isolation and every business needs a different mix. We provide a clear
          concept and strategic overview to find the most efficient model for
          your business.
        </p>

        <button
          className="all-[unset] box-border inline-flex items-start gap-2 px-5 py-3 relative flex-[0_0_auto] bg-[#f28d35] rounded hover:bg-[#e07d2a] focus:outline-none focus:ring-2 focus:ring-[#f28d35] focus:ring-offset-2 transition-colors duration-200"
          type="button"
          aria-label="Learn more about Digital Strategy Consulting"
        >
          <span className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-sm tracking-[-0.28px] leading-[14px] whitespace-nowrap">
            LEARN MORE
          </span>
        </button>
      </div>

      <img
        className="h-[416px] relative w-[414px] object-cover"
        alt="Digital strategy consulting illustration showing analytics and business growth"
        src="/images/image-1.png"
      />
    </section>
  );
};
