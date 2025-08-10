import React from "react";
import image from "../assets/image.svg";
import line6 from "../assets/line-6.svg";
import line7 from "../assets/line-7.svg";

export const FooterSection = () => {
  const technologies = ["Reactjs", "Gatsby", "Nextjs", "Nodejs"];

  const services = [
    "Social Media Marketing",
    "Web & Mobile App Development",
    "Data & Analytics",
  ];

  const footerLinks = ["Privacy Policy", "Terms & Conditions"];

  return (
    <footer className="flex flex-col w-[1440px] items-center gap-10 pt-10 pb-5 px-20 absolute top-[2319px] left-0 bg-indigo-600">
      <div className="flex items-start justify-between relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[413px] items-start gap-5 relative">
          <img className="relative flex-[0_0_auto]" alt="Logo" src={image} />

          <p className="relative self-stretch [font-family:'Lato-Regular',Helvetica] font-normal text-white text-base tracking-[0] leading-[normal]">
            Your goal is our target. Not anything in between. We use online
            marketing platforms and tools to achieve single objective - your
            business results.
          </p>
        </div>

        <div className="inline-flex items-start gap-32 relative flex-[0_0_auto]">
          <div className="flex flex-col w-[197px] items-start gap-3 relative">
            <h3 className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[21px] tracking-[0] leading-[normal] whitespace-nowrap">
              Our Technologies
            </h3>

            <nav
              className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]"
              role="navigation"
              aria-label="Technologies"
            >
              {technologies.map((tech, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal] hover:opacity-80 transition-opacity"
                >
                  {tech}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col w-[197px] items-start gap-3 relative">
            <h3 className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[21px] tracking-[0] leading-[normal] whitespace-nowrap">
              Our Services
            </h3>

            <nav
              className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]"
              role="navigation"
              aria-label="Services"
            >
              {services.map((service, index) => (
                <a
                  key={index}
                  href="#"
                  className="relative self-stretch mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal] hover:opacity-80 transition-opacity"
                >
                  {service}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <div className="flex flex-col w-[630px] items-center gap-2 relative flex-[0_0_auto]">
        <img
          className="self-stretch w-full h-px mt-[-1.00px] relative object-cover"
          alt="Divider line"
          src={line6}
        />

        <nav
          className="inline-flex items-center justify-center gap-4 relative flex-[0_0_auto]"
          role="navigation"
          aria-label="Legal"
        >
          {footerLinks.map((link, index) => (
            <React.Fragment key={index}>
              <a
                href="#"
                className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-sm tracking-[0] leading-[normal] hover:opacity-80 transition-opacity"
              >
                {link}
              </a>
              {index < footerLinks.length - 1 && (
                <img
                  className="w-px h-4 relative object-cover"
                  alt="Separator"
                  src={line7}
                />
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </footer>
  );
};
