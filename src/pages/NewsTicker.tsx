import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const announcements = [
  "🎉 Annual Day Celebration – Feb 15th!",
  "🏅 Award Ceremony Highlights",
  "🎭 Student Performances - Don’t Miss Out!",
  "📸 Photo Booths & Food Stalls Available!",
];

const NewsTickerPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === announcements.length - 1 ? 0 : prevIndex + 1
      );
    }, 4500);  // Change every 4.5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-sans bg-gradient-to-r from-yellow-400 to-red-600 text-white min-h-screen flex items-center justify-center px-4 sm:px-8">
      <div className="w-full max-w-4xl h-56 sm:h-64 relative overflow-hidden flex flex-col items-center justify-center">
        {announcements.map((announcement, index) => (
          <motion.div
            key={index}
            initial={{ y: 100, opacity: 0 }}
            animate={
              index === currentIndex
                ? { y: 0, opacity: 1 }
                : { y: -100, opacity: 0 }
            }
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className={`absolute w-full text-center ${
              index === currentIndex ? 'block' : 'hidden'
            }`}
          >
            <h1 className="text-3xl sm:text-5xl font-extrabold">{announcement}</h1>
            <p className="text-lg sm:text-xl mt-3 animate-pulse">
              Save the Date & Celebrate with Us! 🎊
            </p>
            <motion.button
              className="mt-6 px-6 sm:px-10 py-3 bg-white text-red-500 font-bold rounded-full shadow-lg hover:shadow-2xl"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
            >
              Learn More 📅
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NewsTickerPage;
