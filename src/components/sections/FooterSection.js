import React from "react";

export const FooterSection = () => {
  const technologies = ["Reactjs", "Gatsby", "Nextjs", "Nodejs"];

  const services = [
    "Social Media Marketing",
    "Web & Mobile App Development",
    "Data & Analytics",
  ];

  const footerLinks = ["Privacy Policy", "Terms & Conditions"];

  return (
    <footer id="contact" className="w-full bg-indigo-600 py-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between gap-10">
          <div className="flex flex-col items-start gap-5 max-w-md">
            <img className="h-auto" alt="Logo" src="/images/logo.svg" />

            <p className="font-['Lato-Regular',Helvetica] text-white text-base leading-relaxed">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 md:gap-16 lg:gap-32">
            <div className="flex flex-col gap-3 min-w-[160px]">
              <h3 className="font-semibold text-white text-xl">
                Our Technologies
              </h3>

              <nav
                className="flex flex-col gap-3"
                role="navigation"
                aria-label="Technologies"
              >
                {technologies.map((tech, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-medium text-white text-sm hover:opacity-80 transition-opacity"
                  >
                    {tech}
                  </a>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-3 min-w-[160px]">
              <h3 className="font-semibold text-white text-xl">
                Our Services
              </h3>

              <nav
                className="flex flex-col gap-3"
                role="navigation"
                aria-label="Services"
              >
                {services.map((service, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-medium text-white text-sm hover:opacity-80 transition-opacity"
                  >
                    {service}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 mt-10">
          <div className="w-full max-w-[630px] h-px bg-white opacity-50"></div>

          <nav
            className="flex items-center justify-center gap-4"
            role="navigation"
            aria-label="Legal"
          >
            {footerLinks.map((link, index) => (
              <React.Fragment key={index}>
                <a
                  href="#"
                  className="font-medium text-white text-sm hover:opacity-80 transition-opacity"
                >
                  {link}
                </a>
                {index < footerLinks.length - 1 && (
                  <div className="w-px h-4 bg-white opacity-50"></div>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
