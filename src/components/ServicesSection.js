import React from "react";
import image2 from "../assets/image-2.png";

export const ServicesSection = () => {
  return (
    <section className="inline-flex items-center gap-[108px] absolute top-[857px] left-[188px]">
      <img
        className="h-[414px] relative w-[414px] object-cover"
        alt="Web and Mobile App Development illustration"
        src={image2}
      />

      <div className="flex flex-col w-[542px] items-start gap-5 relative">
        <header className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
          <h2 className="relative w-[507px] mt-[-1.00px] font-poppins-h3-poppins-27px-semibold font-[number:var(--poppins-h3-poppins-27px-semibold-font-weight)] text-indigo-600 text-[length:var(--poppins-h3-poppins-27px-semibold-font-size)] tracking-[var(--poppins-h3-poppins-27px-semibold-letter-spacing)] leading-[var(--poppins-h3-poppins-27px-semibold-line-height)] [font-style:var(--poppins-h3-poppins-27px-semibold-font-style)]">
            Web &amp; Mobile App Development
          </h2>
        </header>

        <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-black text-base tracking-[0] leading-[normal]">
          Your web and mobile Apps are pieces of the puzzle to grow your
          business. We use frameworks which tailor content and engagement
          methods to respond to different intents shown by your potential
          customers who interact with your business online.
        </p>

        <button
          className="all-[unset] box-border inline-flex items-start gap-2 px-5 py-3 relative flex-[0_0_auto] bg-[#f28d35] rounded hover:bg-[#e07d2a] focus:outline-none focus:ring-2 focus:ring-[#f28d35] focus:ring-offset-2 transition-colors duration-200"
          type="button"
          aria-label="Learn more about Web and Mobile App Development services"
        >
          <span className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-white text-sm tracking-[-0.28px] leading-[14px] whitespace-nowrap">
            LEARN MORE
          </span>
        </button>
      </div>
    </section>
  );
};
