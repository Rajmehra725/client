import React from 'react';
import TopperShowcase from '../pages/TopperShowcase';

const toppersData = [
  { name: 'Samiksha Parte', photo: '/images/aarav.jpg', title: 'Class 8Th Topper' },
  { name: 'Nandni Chandrawanshi', photo: '/images/ishita.jpg', title: 'Class 5th Topper' },
];

const NewsTickerPage: React.FC = () => {
  return (
    <div className="font-sans bg-gray-100 text-gray-900 min-h-screen">
      <header className="bg-yellow-500 py-8 text-center">
        <h1 className="text-4xl font-extrabold text-white mt-12">🎉 Half-Yearly Toppers 🎓</h1>
        <p className="text-lg mt-2 text-yellow-100">Congratulations to our outstanding students!</p>
      </header>

      <main className="py-16 ">  {/* Added margin-top here */}
        <TopperShowcase toppers={toppersData} />
      </main>
    </div>
  );
};

export default NewsTickerPage;
