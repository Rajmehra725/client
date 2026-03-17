import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between">

          {/* School Info */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white">
              Sunflower Public School Payli Khurd(Chhapara,Seoni)
            </h2>
            <p className="mt-2 text-sm text-gray-400">
              Excellence in education for a brighter future.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="w-full md:w-1/3 text-center mb-6 md:mb-0">
            <ul className="flex justify-center space-x-8 text-sm">
              <li>
                <a href="/" className="hover:text-yellow-500 transition">Home</a>
              </li>
              <li>
                <a href="/about" className="hover:text-yellow-500 transition">About</a>
              </li>
              <li>
                <a href="/courses" className="hover:text-yellow-500 transition">Courses</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-500 transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons (SVG) */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-6">

              {/* Facebook */}
              <a href="#" className="hover:text-yellow-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.8v-2.9h2.8V9.5c0-2.8 1.6-4.3 4.1-4.3 1.2 0 2.4.2 2.4.2v2.6h-1.4c-1.4 0-1.9.9-1.9 1.8v2.2h3.2l-.5 2.9h-2.7v7A10 10 0 0 0 22 12z"/>
                </svg>
              </a>

              {/* Twitter */}
              <a href="#" className="hover:text-yellow-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 5.9c-.8.4-1.7.6-2.6.8.9-.6 1.6-1.5 2-2.5-.9.5-1.9.9-3 1.1A4.5 4.5 0 0 0 16 4c-2.5 0-4.5 2.1-4.5 4.6 0 .4 0 .7.1 1.1-3.7-.2-7-2-9.2-4.7-.4.7-.6 1.5-.6 2.3 0 1.6.8 3 2 3.9-.7 0-1.4-.2-2-.5v.1c0 2.2 1.5 4.1 3.6 4.5-.4.1-.8.2-1.2.2-.3 0-.6 0-.9-.1.6 2 2.4 3.5 4.5 3.5A9 9 0 0 1 2 19.5 12.8 12.8 0 0 0 8.9 22c8.3 0 12.9-7 12.9-13v-.6c.9-.7 1.6-1.5 2.2-2.5z"/>
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/sunflower_public_school_804/"
                className="hover:text-yellow-500 transition"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 
                  0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 
                  2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 
                  3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 
                  3-3h10zm-5 3a5 5 0 100 10 5 5 0 
                  000-10zm0 2a3 3 0 110 6 3 3 0 
                  010-6zm4.8-2.3a1.2 1.2 0 110 
                  2.4 1.2 1.2 0 010-2.4z"/>
                </svg>
              </a>

              {/* LinkedIn */}
              <a href="#" className="hover:text-yellow-500 transition">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5C4.98 4.9 3.9 6 2.49 6 1.1 6 
                  0 4.9 0 3.5S1.1 1 2.49 1c1.41 0 2.49 
                  1.1 2.49 2.5zM.5 8h4V24h-4V8zm7.5 
                  0h3.8v2.2h.1c.5-1 1.9-2.2 
                  3.9-2.2 4.2 0 5 2.8 5 
                  6.4V24h-4v-7.9c0-1.9 
                  0-4.3-2.6-4.3-2.6 
                  0-3 2-3 4.1V24h-4V8z"/>
                </svg>
              </a>

            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Sunflower Public School Payli Khurd(Chhapara,Seoni). All Rights Reserved.
          </p>

          <p className="mt-2 text-yellow-400 font-medium">
            Designed by
            <a
              href="https://www.instagram.com/itzzzme_raazzz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-yellow-500 transition ml-1"
            >
              Raj Mehra
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;