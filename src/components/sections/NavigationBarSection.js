import React from "react";

export const NavigationBarSection = () => {
  const navigationItems = [
    { label: "SERVICES", href: "#services" },
    { label: "ABOUT US", href: "#about" },
    { label: "CONTACT US", href: "#contact" },
    { label: "CAREERS", href: "#careers" },
  ];

  return (
    <nav
      className="w-full bg-indigo-600 py-6"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-8 lg:px-20">
        <a
          href="/"
          className="flex-shrink-0"
          aria-label="Go to homepage"
        >
          <img
            className="h-auto"
            alt="AT Digital Logo"
            src="/images/logo.png"
          />
        </a>

        <ul
          className="flex items-center gap-4 md:gap-7"
          role="menubar"
        >
          {navigationItems.map((item, index) => (
            <li key={index} role="none">
              <a
                href={item.href}
                className="text-white font-medium hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 transition-opacity duration-200 text-sm md:text-base"
                role="menuitem"
                tabIndex={0}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
