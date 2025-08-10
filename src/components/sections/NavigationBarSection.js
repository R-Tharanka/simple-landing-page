import React, { useState } from "react";
import logo from '../../assets/images/logo.png';

export const NavigationBarSection = () => {
  // Mobile navigation items (including HOME)
  const mobileNavigationItems = [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "#services" },
    { label: "ABOUT US", href: "#about" },
    { label: "CONTACT US", href: "#contact" },
    { label: "CAREERS", href: "#careers" },
  ];
  
  // Desktop navigation items (excluding HOME)
  const desktopNavigationItems = [
    { label: "SERVICES", href: "#services" },
    { label: "ABOUT US", href: "#about" },
    { label: "CONTACT US", href: "#contact" },
    { label: "CAREERS", href: "#careers" },
  ];
  
  // For responsive menu functionality
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full bg-indigo-600 shadow-md fixed top-0 left-0 right-0 z-50">
      <nav
        className="container mx-auto py-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo with proper public path reference */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="block"
              aria-label="Go to homepage"
            >
              <img
                className="h-10 w-auto"
                alt="AT Digital Logo"
                src={logo}
              />
            </a>
          </div>
          
          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button 
              type="button"
              className="text-white p-2 focus:outline-none" 
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label="Toggle navigation menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden sm:block">
            <ul
              className="flex items-center space-x-6"
              role="menubar"
            >
              {desktopNavigationItems.map((item, index) => (
                <li key={index} role="none" className="inline-block">
                  <a
                    href={item.href}
                    className="text-white font-medium hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 transition-colors duration-200 text-sm lg:text-base px-2 py-1 rounded"
                    role="menuitem"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      
      {/* Full screen mobile navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 sm:hidden">
          <div className="flex justify-end p-6">
            <button
              type="button"
              className="text-black focus:outline-none"
              onClick={toggleMenu}
              aria-label="Close navigation menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col px-6 space-y-6 mt-4">
            {mobileNavigationItems.map((item, index) => (
              <li key={index} role="none">
                <a
                  href={item.href}
                  className="block text-black font-medium text-lg"
                  role="menuitem"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};
