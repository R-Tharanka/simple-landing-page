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
      className="flex w-[1440px] items-center justify-between px-20 py-[26px] absolute top-0 left-0 bg-indigo-600"
      role="navigation"
      aria-label="Main navigation"
    >
      <a
        href="/"
        className="relative flex-[0_0_auto]"
        aria-label="Go to homepage"
      >
        <img
          className="relative flex-[0_0_auto]"
          alt="AT Digital Logo"
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
        />
      </a>

      <ul
        className="inline-flex items-start gap-7 relative flex-[0_0_auto]"
        role="menubar"
      >
        {navigationItems.map((item, index) => (
          <li key={index} role="none">
            <a
              href={item.href}
              className="relative w-fit mt-[-1.00px] font-body-1 font-[number:var(--body-1-font-weight)] text-white text-[length:var(--body-1-font-size)] tracking-[var(--body-1-letter-spacing)] leading-[var(--body-1-line-height)] [font-style:var(--body-1-font-style)] hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 transition-opacity duration-200"
              role="menuitem"
              tabIndex={0}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
