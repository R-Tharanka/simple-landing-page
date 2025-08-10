import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { FooterSection } from "./sections/FooterSection";
import { FrequentlyAskedQuestionsSection } from "./sections/FrequentlyAskedQuestionsSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { ServicesSection } from "./sections/ServicesSection";

export const Element = () => {
  return (
    <div className="bg-white grid justify-items-center [align-items:start] w-screen">
      <div className="bg-white w-[1440px] h-[2585px] relative">
        <div className="absolute w-[1440px] h-[777px] top-0 left-0">
          <NavigationBarSection />
          <HeroBannerSection />
        </div>

        <div className="absolute w-[422px] h-[195px] top-[777px] left-[74px]">
          <ServicesSection />
        </div>

        <div className="absolute w-[422px] h-[195px] top-[1032px] left-[74px]">
          <AboutUsSection />
        </div>

        <div className="absolute w-[337px] h-[155px] top-[1287px] left-[117px]">
          <FrequentlyAskedQuestionsSection />
        </div>

        <div className="absolute w-[1440px] h-[918px] top-[1667px] left-0">
          <FooterSection />
        </div>
      </div>
    </div>
  );
};
