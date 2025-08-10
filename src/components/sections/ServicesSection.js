import React from "react";

export const ServicesSection = () => {
  return (
    <section id="services" className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[108px] px-4">
        <div className="w-full max-w-[414px]">
          <img
            className="w-full h-auto object-cover rounded-lg shadow-md"
            alt="Web and Mobile App Development illustration"
            src="/images/image-2.png"
          />
        </div>

        <div className="flex flex-col w-full max-w-[542px] gap-5">
          <header className="flex flex-col gap-3">
            <h2 className="font-semibold text-2xl md:text-3xl text-indigo-600">
              Web &amp; Mobile App Development
            </h2>
          </header>

          <p className="font-['Inter-Regular',Helvetica] text-black text-base leading-relaxed">
            Your web and mobile Apps are pieces of the puzzle to grow your
            business. We use frameworks which tailor content and engagement
            methods to respond to different intents shown by your potential
            customers who interact with your business online.
          </p>

          <div>
            <button
              className="inline-flex items-center gap-2 px-5 py-3 bg-[#f28d35] rounded hover:bg-[#e07d2a] focus:outline-none focus:ring-2 focus:ring-[#f28d35] focus:ring-offset-2 transition-colors duration-200"
              type="button"
              aria-label="Learn more about Web and Mobile App Development services"
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
