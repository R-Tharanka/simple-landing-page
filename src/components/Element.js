import React from "react";
import { AboutUsSection } from "./sections/AboutUsSection";
import { FooterSection } from "./sections/FooterSection";
import { FrequentlyAskedQuestionsSection } from "./sections/FrequentlyAskedQuestionsSection";
import { HeroBannerSection } from "./sections/HeroBannerSection";
import { NavigationBarSection } from "./sections/NavigationBarSection";
import { ServicesSection } from "./sections/ServicesSection";

export const Element = () => {
  return (
    <div className="flex flex-col items-center bg-white w-full min-h-screen">
      <NavigationBarSection />

      <main className="flex flex-col w-full">

        <HeroBannerSection />
        <section className="w-full py-16">
          <ServicesSection />
        </section>

        <section className="w-full py-16">
          <AboutUsSection />
        </section>

        <section className="w-full py-16">
          <FrequentlyAskedQuestionsSection />
        </section>
      </main>

      <footer className="w-full">
        <FooterSection />
      </footer>
    </div>
  );
};
