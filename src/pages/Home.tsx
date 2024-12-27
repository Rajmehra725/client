import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NewsTicker from './NewsTicker';

const Home: React.FC = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-900">
      {/* News Ticker Section */}
      <NewsTicker />

      {/* Hero Section with Latest News */}
      <section className="h-screen bg-cover bg-center relative" style={{ backgroundImage: 'url(/school-background.jpg)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Latest News Section */}
        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg w-3/4 md:w-1/2 lg:w-1/3">
          <h3 className="text-2xl font-bold text-yellow-500">Latest News</h3>
          <ul className="mt-4 text-gray-700 list-disc list-inside">
            <li><strong>Congratulations</strong> to our toppers of 2024!</li>
            <li>Admissions open for the 2024-25 academic year.</li>
            <li>Upcoming Science Fair - 15th March 2024</li>
            <li>Annual Sports Meet scheduled for April 2024</li>
          </ul>
        </div>

        <div className="flex justify-center items-center h-full text-center text-white">
          <div className="relative bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 min-h-screen flex justify-center items-center text-center text-white">
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content Section */}
            <div className="relative z-10 space-y-6 animate__animated animate__fadeIn">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold animate__animated animate__fadeInUp drop-shadow-lg">
                Welcome to <span className="text-yellow-200">Sunflower Public School</span>
              </h1>
              <p className="text-base sm:text-lg md:text-2xl animate__animated animate__fadeInUp text-yellow-100 max-w-3xl mx-auto">
                Empowering students with knowledge, creativity, and leadership. Join us in shaping a brighter future.
              </p>
              <button className="bg-white text-yellow-600 font-bold px-8 py-4 rounded-full shadow-lg hover:bg-yellow-500 hover:text-white transform transition duration-500 hover:scale-105">
                Enroll Now
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-300 rounded-full opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-yellow-500 rounded-full opacity-30 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            At Sunflower Public School, our mission is to provide high-quality education in a safe, nurturing environment where students are encouraged to develop their full potential as individuals and responsible citizens.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Achievements</h2>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-gray-800">National Science Fair Winners</h3>
              <p className="mt-4 text-gray-600">Our students have consistently secured top positions in national science fairs, showcasing their creativity and problem-solving skills.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Sports Excellence</h3>
              <p className="mt-4 text-gray-600">We have a rich history of excelling in sports at district and state levels, promoting both physical and mental health.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <h3 className="text-xl font-semibold text-gray-800">Cultural Fest Champions</h3>
              <p className="mt-4 text-gray-600">Our school hosts an annual cultural fest, and our students have won numerous accolades in various competitions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Admission CTA Section */}
      <section className="py-16 bg-yellow-500 text-center text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Join Us Today</h2>
          <p className="mt-4 text-lg">Become part of the Sunflower Public School family. We are accepting admissions for the upcoming academic year.</p>
          <button className="bg-white text-yellow-500 px-8 py-3 rounded-full mt-6 hover:bg-gray-100 transform transition duration-500 hover:scale-105">Apply Now</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
