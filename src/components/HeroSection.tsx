import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import school1 from "../Images/sps1.png";
import school2 from "../Images/sps2.png";


const images = [school1, school2];

const HeroSection = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);

  }, []);

  const nextSlide = () => {
    setIndex((index + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (

    <section className="relative w-full h-[70vh] overflow-hidden">

      {/* Background Image */}

      <img
        src={images[index]}
        className="w-full h-full object-cover"
        alt="School"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center text-white px-4">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Sunflower Public School
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 text-lg"
        >
          Nurturing Bright Futures from Class 1 to 8
        </motion.p>

        <div className="mt-6 flex gap-4">

          <button className="bg-yellow-400 text-black px-6 py-2 rounded font-semibold hover:bg-yellow-300">
            Apply Now
          </button>

          <button className="bg-indigo-600 px-6 py-2 rounded hover:bg-indigo-700">
            Check Result
          </button>

        </div>

      </div>

      {/* Left Arrow */}

      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
      >
        <FaArrowLeft />
      </button>

      {/* Right Arrow */}

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full"
      >
        <FaArrowRight />
      </button>

    </section>

  );
};

export default HeroSection;