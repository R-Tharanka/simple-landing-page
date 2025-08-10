import React from "react";
import logo from '../../assets/images/logo.png';

export const FooterSection = () => {
  // Technology stack list
  const technologies = ["Reactjs", "Gatsby", "Nextjs", "Nodejs"];

  // Services offered
  const services = [
    "Social Media Marketing",
    "Web & Mobile App\nDevelopment",
    "Data & Analytics",
  ];

  // Footer legal links
  const footerLinks = ["Privacy Policy", "Terms & Conditions"];

  return (
    <footer id="contact" className="w-full bg-indigo-600 pb-10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main footer content with logo, description, and navigation links */}
        <div className="flex flex-col xs:flex-row justify-between items-start">

          <div>
            <div className="flex flex-col items-start gap-5 pt-10">
            <img className="h-10 w-auto" alt="Company Logo" src={logo} />

            <p className="font-['Lato-Regular',Helvetica] text-white text-base leading-relaxed max-w-[400px]">
              Your goal is our target. Not anything in between. We use online
              marketing platforms and tools to achieve single objective - your
              business results.
            </p>
          </div>
          </div>

          <div className="flex flex-col xs:grid xs:grid-cols-2 w-fit pt-10"> 
            <div className="w-[200px] mb-6 xs:mb-0">
              <h3 className="font-semibold text-white text-xl pb-2">
                Our Technologies
              </h3>

              <nav
                className="flex flex-col gap-2"
                role="navigation"
                aria-label="Technologies"
              >
                {technologies.map((tech, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-medium text-white text-sm hover:opacity-80 transition-opacity"
                    aria-label={`Learn more about ${tech}`}
                  >
                    {tech}
                  </a>
                ))}
              </nav>
            </div>

            <div className="w-[200px]">
              <h3 className="font-semibold text-white text-xl pb-2">
                Our Services
              </h3>

              <nav
                className="flex flex-col gap-2"
                role="navigation"
                aria-label="Services"
              >
                {services.map((service, index) => (
                  <a
                    key={index}
                    href="#"
                    className="font-medium text-white text-sm hover:opacity-80 transition-opacity whitespace-pre-line"
                    aria-label={`Learn more about our ${service.replace('\n', ' ')} service`}
                  >
                    {service}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Legal section with divider and policy links */}
        <div className="flex flex-col items-center gap-4 mt-10">
          <div className="w-full max-w-[630px] h-px bg-white opacity-50" aria-hidden="true"></div>

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
                  aria-label={link}
                >
                  {link}
                </a>
                {index < footerLinks.length - 1 && (
                  <div className="w-px h-4 bg-white opacity-50" aria-hidden="true"></div>
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};
