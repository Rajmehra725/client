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
          <div className="relative bg-gradient-to-b from-orange-100 to-orange-300 min-h-screen flex flex-col">
            {/* Hero Section */}
            <div className="relative flex-grow flex flex-col justify-center items-center text-center mt-10 p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center w-full max-w-6xl">
                {/* Saraswati Mata Photo */}
                <div className="flex justify-center">
                  <img
                    src="https://th.bing.com/th/id/OIP.hko6ZCeNvpkynvDGoto8xwHaGJ?rs=1&pid=ImgDetMain"
                    alt="Saraswati Mata"
                    className="w-60 h-60 md:w-80 md:h-80 rounded-lg shadow-xl border-4 border-orange-400"
                  />
                </div>

                {/* School Info and Shloka */}
                <div className="col-span-2 flex flex-col items-center md:items-start space-y-6">
                  <h1 className="text-5xl font-bold text-orange-700">
                    Welcome to <span className="text-orange-600">Sunflower Public School Payli Khurd (Chhapara , Seoni)</span>
                  </h1>
                  <p className="text-lg text-orange-800 italic">
                    "या कुन्देन्दु तुषार हार धवला या शुभ्र वस्त्रावृता।<br />
                    या वीणा वरदण्ड मण्डित करा या श्वेत पद्मासना॥"
                  </p>
                  <p className="text-base text-orange-900">
                    Empowering students with knowledge, creativity, and leadership. Join us in shaping a brighter future.
                  </p>
                  <button className="bg-orange-500 text-white font-bold px-6 py-3 rounded-md shadow-lg hover:bg-orange-600 transition duration-300">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>

            {/* Highlights Section */}
            <div className="bg-orange-50 py-16">
              <div className="container mx-auto max-w-6xl px-6 text-center space-y-10">
                <h2 className="text-4xl font-bold text-orange-700">Why Choose Us</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="p-6 shadow-md rounded-lg bg-orange-100">
                    <h3 className="text-xl font-semibold text-orange-600">Modern Infrastructure</h3>
                    <p className="text-orange-700 mt-3">
                      Fully equipped smart classrooms, science labs, and a state-of-the-art computer lab.
                    </p>
                  </div>
                  <div className="p-6 shadow-md rounded-lg bg-orange-100">
                    <h3 className="text-xl font-semibold text-orange-600">Holistic Learning</h3>
                    <p className="text-orange-700 mt-3">
                      Balanced focus on academics, extracurriculars, and moral values.
                    </p>
                  </div>
                  <div className="p-6 shadow-md rounded-lg bg-orange-100">
                    <h3 className="text-xl font-semibold text-orange-600">Experienced Faculty</h3>
                    <p className="text-orange-700 mt-3">
                      Dedicated teachers fostering curiosity and excellence in every student.
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
