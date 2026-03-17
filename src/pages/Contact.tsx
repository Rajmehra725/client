import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="p-6 md:p-12 bg-gray-50">
      
      {/* Header Section */}
      <div className="text-center mb-10 mt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Contact Us
        </h1>
        <p className="mt-2 text-gray-600">
          We're here to answer your questions and help you get the information you need.
        </p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-10">

        {/* Left Section */}
        <div className="space-y-8">

          {/* Contact Details */}
          <div className="space-y-6">

            <div className="flex items-start">
              {/* Location Icon */}
              <svg className="w-6 h-6 text-yellow-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z"/>
              </svg>

              <p className="text-lg text-gray-700">
                Sunflower Public School, Payli Khurd, Seoni, MP
              </p>
            </div>

            <div className="flex items-start">
              {/* Phone Icon */}
              <svg className="w-6 h-6 text-yellow-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.6 10.8c1.4 2.7 3.7 5 6.4 6.4l2.1-2.1c.3-.3.7-.4 1-.3 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V21c0 .6-.4 1-1 1C10.3 22 2 13.7 2 3c0-.6.4-1 1-1h4.6c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.3 0 .7-.3 1l-2.3 2.3z"/>
              </svg>

              <p className="text-lg text-gray-700">
                +91 7024673010
              </p>
            </div>

            <div className="flex items-start">
              {/* Email Icon */}
              <svg className="w-6 h-6 text-yellow-500 mr-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 
                0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 
                4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>

              <p className="text-lg text-gray-700">
                sunflowerpublicschool804@gmail.com
              </p>
            </div>

          </div>

          {/* Operating Hours */}
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Operating Hours
            </h2>

            <ul className="mt-2 text-gray-700">
              <li>Monday - Friday: 10:00 AM - 4:00 PM</li>
              <li>Saturday: 10:00 AM - 3:00 PM</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex space-x-4">

            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-8 h-8 text-blue-600 hover:scale-105 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.5 
                9.9v-7h-2.8v-2.9h2.8V9.5c0-2.8 
                1.6-4.3 4.1-4.3 1.2 0 2.4.2 
                2.4.2v2.6h-1.4c-1.4 0-1.9.9-1.9 
                1.8v2.2h3.2l-.5 2.9h-2.7v7A10 
                10 0 0 0 22 12z"/>
              </svg>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/sunflower_public_school_804/" target="_blank" rel="noopener noreferrer">
              <svg className="w-8 h-8 text-pink-500 hover:scale-105 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.2 2 2 4.2 2 
                7v10c0 2.8 2.2 5 5 
                5h10c2.8 0 5-2.2 
                5-5V7c0-2.8-2.2-5-5-5H7zm5 
                5a5 5 0 100 10 5 5 0 
                000-10zm4.8-2.3a1.2 1.2 
                0 110 2.4 1.2 1.2 
                0 010-2.4z"/>
              </svg>
            </a>

            {/* Twitter */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <svg className="w-8 h-8 text-blue-400 hover:scale-105 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 5.9c-.8.4-1.7.6-2.6.8.9-.6 
                1.6-1.5 2-2.5-.9.5-1.9.9-3 
                1.1A4.5 4.5 0 0 0 16 4c-2.5 
                0-4.5 2.1-4.5 4.6 0 
                .4 0 .7.1 1.1-3.7-.2-7-2-9.2-4.7"/>
              </svg>
            </a>

          </div>

        </div>

        {/* Right Section */}
        <div>

          {/* Contact Form */}
          <form className="bg-white shadow-lg p-6 rounded-lg space-y-6 mb-6">

            <div>
              <label className="block text-sm font-semibold text-gray-600">
                Name
              </label>

              <input
                type="text"
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600">
                Email
              </label>

              <input
                type="email"
                className="w-full mt-1 p-2 border rounded-lg focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-600">
                Message
              </label>

              <textarea
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

          {/* Google Map */}
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14602.417647059915!2d79.5631016!3d21.6948041"
              width="100%"
              height="250"
              className="rounded-lg border-0"
              loading="lazy"
            ></iframe>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;