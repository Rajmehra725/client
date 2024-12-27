import React, { useState } from 'react';
import Logo from "../pages/sps.jpeg";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-yellow-500">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Mobile menu button (Hamburger icon on right) */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-200 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-yellow-500 focus:ring-white"
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
                  d="M4 6h16M4 10h16M4 14h16" // Lines are closer
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
              <span className="text-white font-semibold text-2xl tracking-tight">SPS Payli Khurd</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex sm:ml-6 sm:space-x-6">
            <a
              href="/"
              className="text-white hover:text-gray-200 px-4 py-2 rounded-md text-lg font-medium"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white hover:text-gray-200 px-4 py-2 rounded-md text-lg font-medium"
            >
              About
            </a>
            <a
              href="/courses"
              className="text-white hover:text-gray-200 px-4 py-2 rounded-md text-lg font-medium"
            >
              Courses
            </a>
            <a
              href="/gallery"
              className="text-white hover:text-gray-200 px-4 py-2 rounded-md text-lg font-medium"
            >
              Gallery
            </a>
            <a
              href="/teachers"
              className="text-white hover:text-gray-200 px-4 py-2 rounded-md text-lg font-medium"
            >
              Teachers
            </a>
            <a
              href="/contact"
              className="text-white hover:text-gray-200 px-4 py-2 rounded-md text-lg font-medium"
            >
              Contact
            </a>
            <a
              href="/features"
              className="text-white hover:text-gray-200 px-4 py-2 rounded-md text-lg font-medium"
            >
              Features
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Menu (visible when isOpen is true) */}
      <div
        className={`sm:hidden fixed inset-0 bg-black bg-opacity-50 z-50 transform transition-all duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        id="mobile-menu"
      >
        <div className="flex justify-end p-4">
          <button
            type="button"
            className="text-white text-3xl"
            onClick={toggleMenu}
          >
            &times; {/* Close icon */}
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 pt-10 text-white">
          <a href="/" className="text-2xl font-medium" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="/about" className="text-2xl font-medium" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="/courses" className="text-2xl font-medium" onClick={() => setIsOpen(false)}>
            Courses
          </a>
          <a href="/gallery" className="text-2xl font-medium" onClick={() => setIsOpen(false)}>
            Gallery
          </a>
          <a href="/teachers" className="text-2xl font-medium" onClick={() => setIsOpen(false)}>
            Teachers
          </a>
          <a href="/contact" className="text-2xl font-medium" onClick={() => setIsOpen(false)}>
            Contact
          </a>
          <a href="/features" className="text-2xl font-medium" onClick={() => setIsOpen(false)}>
            Features
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
