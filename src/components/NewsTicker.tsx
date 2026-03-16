import { useEffect, useState } from "react";

const news = [
  "📢 Admission Open for Session 2026-27",
  "📢 Class 6 & 7 Result Declared",
  "📢 Annual Sports Day Next Month",
  "📢 Parent Teacher Meeting on 15 July",
];

const NewsTicker = () => {

  const [index, setIndex] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % news.length);
    }, 4000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="bg-indigo-700 text-white py-3">

      <div className="max-w-7xl mx-auto flex items-center gap-4 px-4">

        <span className="font-bold bg-yellow-400 text-black px-3 py-1 rounded">
          Latest News
        </span>

        <p className="animate-pulse">
          {news[index]}
        </p>

      </div>

    </div>

  );
};

export default NewsTicker;