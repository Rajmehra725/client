import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between">
          {/* School Info */}
          <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
            <h2 className="text-3xl font-bold text-white">Sunflower Public School Payli Khurd(Chhapara,Seoni)</h2>
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
                <a href="courses" className="hover:text-yellow-500 transition">Courses</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-yellow-500 transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="w-full md:w-1/3 text-center md:text-right">
            <div className="flex justify-center md:justify-end space-x-6">
              <a href="#" className="hover:text-yellow-500 transition">
                <FaFacebookF size={24} />
              </a>
              <a href="#" className="hover:text-yellow-500 transition">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/sunflower_public_school_804/" className="hover:text-yellow-500 transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-yellow-500 transition">
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider & Copyright Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Sunflower Public School Payli Khurd(Chhapara,Seoni). All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
