import React from 'react';

interface Topper {
  name: string;
  photo: string;
  title: string;
}

interface TopperShowcaseProps {
  toppers: Topper[];
}

const TopperShowcase: React.FC<TopperShowcaseProps> = ({ toppers }) => {
  return (
    <section className="py-16 bg-white text-center ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800">🎉 Congratulations to Our Half-Yearly Toppers! 🎓</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {toppers.map((topper, index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img 
                src={topper.photo} 
                alt={topper.name} 
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold">{topper.name}</h3>
              <p className="text-gray-600">{topper.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopperShowcase;
