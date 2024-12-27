// src/components/Navbar.tsx
import React, { useState } from 'react';
import Logo from "../pages/sps.jpeg"
const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gradient-to-r from-yellow-500 to-yellow-700 shadow-lg fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button (Hamburger icon on right) */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-500 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? 'true' : 'false'}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon for mobile */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* School logo and name */}
          <div className="flex items-center justify-between flex-1">
            <a href="/" className="flex items-center space-x-3">
              {/* Logo */}
              <img
                src={Logo} // Path to your logo image (place logo.png in the public folder)
                alt="Sunflower Public School"
                className="h-12 w-auto"
              />
              {/* School name */}
              <span className="text-white font-extrabold text-3xl tracking-tight">SPS Payli Khurd</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:block sm:ml-6">
            <div className="flex space-x-6">
              <a
                href="/"
                className="text-white hover:text-gray-200 px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
              >
                Home
              </a>
              <a
                href="/about"
                className="text-white hover:text-gray-200 px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
              >
                About
              </a>
              <a
                href="/courses"
                className="text-white hover:text-gray-200 px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
              >
                Courses
              </a>
              <a
                href="/gallery"
                className="text-white hover:text-gray-200 px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
              >
                Gallery
              </a>
              <a
                href="/teachers"
                className="text-white hover:text-gray-200 px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
              >
                Teachers
              </a>
              <a
                href="/contact"
                className="text-white hover:text-gray-200 px-4 py-2 rounded-md text-lg font-semibold transition duration-300 ease-in-out"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Right-side Slide) */}
      <div
        className={`fixed top-0 right-0 w-2/3 bg-gradient-to-r from-yellow-500 to-yellow-700 h-full transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-6 pt-8">
          <a
            href="/"
            className="text-white block px-3 py-2 rounded-md text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="/about"
            className="text-white block px-3 py-2 rounded-md text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="/courses"
            className="text-white block px-3 py-2 rounded-md text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Courses
          </a>
          <a
            href="/teachers"
            className="text-white block px-3 py-2 rounded-md text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Teachers
          </a>
          <a
            href="/contact"
            className="text-white block px-3 py-2 rounded-md text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
