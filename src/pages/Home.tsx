import React, { useState, useEffect } from 'react';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import NewsTickerPage from './NewsTicker';
import Sps from '../pages/sps.jpeg'
import Sars from '../Images/saraswati.jpg'
import sps1 from '../Images/sps1.png'
import sps2 from '../Images/sps2.png'
import { FaChalkboardTeacher, FaFlask, FaBook, FaFootballBall, FaPaintBrush } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';
interface Facility {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
}

const facilities: Facility[] = [
  {
    id: 1,
    title: 'Smart Classes',
    description: 'Interactive digital classrooms for enhanced learning.',
    icon: <FaChalkboardTeacher className="text-4xl text-blue-500" />,
  },
  {
    id: 2,
    title: 'Science Labs',
    description: 'Well-equipped labs for practical experiments and innovation.',
    icon: <FaFlask className="text-4xl text-green-500" />,
  },
  {
    id: 3,
    title: 'Library',
    description: 'A rich collection of books and digital resources.',
    icon: <FaBook className="text-4xl text-purple-500" />,
  },
  {
    id: 4,
    title: 'Sports Facilities',
    description: 'State-of-the-art courts and fields for all major sports.',
    icon: <FaFootballBall className="text-4xl text-red-500" />,
  },
  {
    id: 5,
    title: 'Arts & Music Room',
    description: 'Dedicated spaces to nurture creativity and talent.',
    icon: <FaPaintBrush className="text-4xl text-yellow-500" />,
  },
];

const images = [
  Sps,
  sps1,
  sps2,
];

const toppers = [
  { name: 'Rohan Sharma', imgSrc: '/path-to-image1.jpg' },
  { name: 'Anjali Verma', imgSrc: '/path-to-image2.jpg' },
  { name: 'Rohit Kumar', imgSrc: '/path-to-image3.jpg' },
  { name: 'Aarav Patel', imgSrc: '/path-to-image4.jpg' },
  { name: 'Meera Gupta', imgSrc: '/path-to-image5.jpg' },
  { name: 'Rajesh Yadav', imgSrc: '/path-to-image6.jpg' },
  { name: 'Simran Kaur', imgSrc: '/path-to-image7.jpg' },
  { name: 'Shivani Joshi', imgSrc: '/path-to-image8.jpg' },
  { name: 'Arjun Reddy', imgSrc: '/path-to-image9.jpg' },
  { name: 'Priya Dubey', imgSrc: '/path-to-image10.jpg' },
  { name: 'Neha Singh', imgSrc: '/path-to-image11.jpg' },
  { name: 'Kunal Sharma', imgSrc: '/path-to-image12.jpg' }
];

const HeroSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    if (isAnimating) return; // Prevent transitioning if animation is in progress
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTimeout(() => setIsAnimating(false), 1000); // Reset animation state after 1s (duration of transition)
  };

  const prevSlide = () => {
    if (isAnimating) return; // Prevent transitioning if animation is in progress
    setIsAnimating(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
    setTimeout(() => setIsAnimating(false), 1000); // Reset animation state after 1s
  };

  return (
    <div>
      {/* Hero Image Section */}
      <div className="relative w-full h-[60vh] overflow-hidden">
  {images.map((img, index) => (
    <div
      key={index}
      className={`absolute inset-0 transition-all duration-500 transform ${
        index === currentIndex
          ? 'opacity-100 translate-x-0'
          : 'opacity-0 translate-x-[100%]'
      }`}
    >
      <img
        src={img}
        alt="School Image"
        className="w-full h-full object-cover"
      />
    </div>
  ))}

  {/* Overlay and Content */}
  <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-60 px-3">
    <h1 className="text-2xl md:text-3xl text-white font-semibold text-center leading-snug animate__animated animate__fadeIn">
      Welcome to Sunflower Public School
    </h1>
    <p className="text-sm md:text-base text-white mt-1 animate__animated animate__fadeIn animate__delay-1s">
      Nurturing Bright Futures from KG to 8th Grade
    </p>
    <button className="mt-4 px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white text-sm rounded-md shadow animate__animated animate__bounceInUp animate__delay-2s">
      Apply Now
    </button>
  </div>

  {/* Navigation Arrows */}
  <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
    <button
      onClick={prevSlide}
      className="bg-white p-1.5 rounded-full shadow hover:bg-gray-200"
    >
      <FaArrowLeft className="text-base text-orange-500" />
    </button>
  </div>

  <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
    <button
      onClick={nextSlide}
      className="bg-white p-1.5 rounded-full shadow hover:bg-gray-200"
    >
      <FaArrowRight className="text-base text-orange-500" />
    </button>
  </div>

  {/* Indicators */}
  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
    {images.map((_, index) => (
      <span
        key={index}
        className={`h-2 w-2 rounded-full ${
          index === currentIndex ? 'bg-orange-500' : 'bg-white'
        }`}
      ></span>
    ))}
  </div>
</div>
<div className="max-h-lg p-2 mx-auto">
  <NewsTickerPage />
</div>

     
      {/* Toppers Section */}
      <section className="py-12 px-6 md:px-20 bg-gray-50 text-center">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-800 animate__animated animate__fadeIn">
    Top 12 Toppers of the Year
  </h2>

  <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
    {toppers.map((topper, index) => (
      <div
        key={index}
        className="bg-white shadow-lg p-4 rounded-lg w-36 animate__animated animate__fadeInUp animate__delay-1s"
        style={{
          animationDelay: `${index * 0.1}s`, // Staggered animation for toppers
        }}
      >
        <img
          src={topper.imgSrc}
          alt={`Topper ${topper.name}`}
          className="w-20 h-20 rounded-full mx-auto object-cover mb-4"
        />
        <h3 className="font-semibold text-sm text-blue-500">{topper.name}</h3>
      </div>
    ))}
  </div>
</section>

      <section className="py-16 px-6 bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-100">
  <div className="container mx-auto text-center">
    {/* Title */}
    <h2 className="text-3xl md:text-4xl font-semibold text-yellow-900 mb-8 animate__animated animate__fadeInDown">
      Saraswati Maa's Blessings
    </h2>

    {/* Combined Card Layout for Image and Shloka */}
    <div className="flex flex-col lg:flex-row justify-center items-center gap-6 md:gap-8 animate__animated animate__fadeInUp animate__delay-1s">
      <div className="flex justify-center items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-3xl transform hover:scale-105 transition duration-500">
        {/* Image and Shloka Content */}
        <div className="w-full flex flex-col items-center space-y-6">
          {/* Image of Saraswati Maa */}
          <img
            src={Sars} // Add your image path here
            alt="Saraswati Maa"
            className="w-48 h-48 rounded-full shadow-xl border-4 border-yellow-500"
          />

          {/* Saraswati Shloka */}
          <p className="text-sm sm:text-base md:text-lg text-gray-800 font-medium leading-relaxed mb-4 animate__animated animate__fadeInUp animate__delay-2s">
            {'या कुन्देन्दुतुषारहारधवला या शुभ्रवस्त्रावृता'}
            <br />
            {'या वीणावरदण्डमण्डितकरा या श्वेतपद्मासना'}
            <br />
            {'या ब्रह्माच्युतशंकरप्रभृतिभिर्देवै: सदा वन्दिता'}
            <br />
            {'सा मां पातु सरस्वती भगवती नि:शेषजाड्यापहा'}
          </p>

          {/* School Name */}
          <p className="text-lg sm:text-xl font-semibold text-yellow-600 mt-4 animate__animated animate__fadeIn animate__delay-3s">
            Sunflower Public School
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<motion.section
      className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 py-16 px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
    >
      <div className="max-w-screen-lg mx-auto text-center text-white">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          More About Sunflower Public School
        </motion.h2>
        <motion.p
          className="text-xl mb-4"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
        >
          Sunflower Public School, Payli Khurd, is a place where education meets
          excellence. Located in the heart of Payli Khurd, our school provides a
          nurturing environment for students to grow academically and personally.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Our Vision</h3>
            <p className="text-gray-700">
              Our vision is to foster a learning environment where students
              develop intellectually, socially, and emotionally. We aim to
              nurture the leaders of tomorrow with a holistic approach to education.
            </p>
          </motion.div>
          <motion.div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <h3 className="text-2xl font-semibold text-indigo-700 mb-4">Our Mission</h3>
            <p className="text-gray-700">
              We are committed to providing quality education that encourages
              creativity, critical thinking, and lifelong learning. Our mission is
              to empower students to excel in all areas of life and become responsible
              global citizens.
            </p>
          </motion.div>
        </div>
        <div className="mt-8">
          <Link
            to="/about" // Link to the "About" page
            className="inline-block px-8 py-3 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Learn More About Us
          </Link>
        </div>
      </div>
    </motion.section>
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <Fade cascade>
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Our Facilities
          </h2>
        </Fade>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility) => (
            <Fade direction="up" key={facility.id}>
              <div
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow transform hover:-translate-y-2 duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2 text-center">
                  {facility.title}
                </h3>
                <p className="text-gray-600 text-center">{facility.description}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </section>


    </div>
  );
};

export default HeroSection;
