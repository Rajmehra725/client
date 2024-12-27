import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Contact: React.FC = () => {
  return (
    <section className="p-6 md:p-12 bg-gray-50 ">
      {/* Header Section */}
      <div className="text-center mb-10 mt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Contact Us</h1>
        <p className="mt-2 text-gray-600">
          We're here to answer your questions and help you get the information you need.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Left Section: Details and Map */}
        <div className="space-y-8">
          {/* Contact Details */}
          <div className="space-y-6">
            <div className="flex items-start">
              <FaMapMarkerAlt className="text-yellow-500 text-2xl mr-4" />
              <p className="text-lg text-gray-700">
                Sunflower Public School, Payli Khurd, Seoni, MP
              </p>
            </div>
            <div className="flex items-start">
              <FaPhoneAlt className="text-yellow-500 text-2xl mr-4" />
              <p className="text-lg text-gray-700">+91 7024673010</p>
            </div>
            <div className="flex items-start">
              <FaEnvelope className="text-yellow-500 text-2xl mr-4" />
              <p className="text-lg text-gray-700">sunflowerpublicschool804@gmail.com</p>
            </div>
          </div>

          {/* Operating Hours */}
          <div>
            <h2 className="text-xl font-bold text-gray-800">Operating Hours</h2>
            <ul className="mt-2 text-gray-700">
              <li>Monday - Friday: 10:00 AM - 4:00 PM</li>
              <li>Saturday: 10:00 AM - 3:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-3xl text-blue-600 hover:scale-105 transition-transform" />
            </a>
            <a href="https://www.instagram.com/sunflower_public_school_804/" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-3xl text-pink-500 hover:scale-105 transition-transform" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-3xl text-blue-400 hover:scale-105 transition-transform" />
            </a>
          </div>
        </div>

        {/* Right Section: Form and Map */}
        <div>
          {/* Contact Form */}
          <form className="bg-white shadow-lg p-6 rounded-lg space-y-6 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                placeholder="Write your message here"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Google Maps Embed */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.417647059915!2d79.5631016!3d21.6948041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4caa45bdbf58f%3A0xf5f67e1a7e58952!2sPayli%20Khurd%2C%20Madhya%20Pradesh%20480444!5e0!3m2!1sen!2sin!4v1694023195809!5m2!1sen!2sin"
              width="100%"
              height="250"
              className="rounded-lg border-0"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
