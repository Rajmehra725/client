// src/pages/Teachers.tsx
import Raj from "../Images/Rajm.png";
import Om from "../Images/Om.png";
import Ram from "../Images/Ram.jpg";
import Arvind from "../Images/Arvind.png";

const Teachers: React.FC = () => {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Hero Section */}
      <section 
        className="h-80 md:h-96 bg-cover bg-center relative flex items-center justify-center text-center text-white" 
        style={{ backgroundImage: 'url(/teachers-background.jpg)' }}
      >
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-transparent to-gray-800 opacity-70"></div>

        {/* Content */}
        <div className="relative z-10 space-y-4 px-6 mt-20">
          <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg animate__animated animate__fadeInDown">
            Meet <span className="text-yellow-400">Our Dedicated Teachers</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light animate__animated animate__fadeInUp">
            Empowering young minds through passion, dedication, and expertise.
          </p>
          <button className="mt-4 bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 hover:shadow-xl transform transition duration-300 hover:scale-105">
            Explore Team
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute -top-10 left-1/4 w-20 h-20 bg-yellow-500 rounded-full opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-10 right-1/3 w-28 h-28 bg-yellow-400 rounded-full opacity-30 animate-bounce"></div>
      </section>

      {/* Teachers List Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-800">Meet Our Educators</h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            At Sunflower Public School, our teachers are the backbone of our institution. They inspire, mentor, and guide students to achieve their highest potential. Here's a look at some of our exceptional faculty members.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
          {/* Teacher 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <img src={Ram} alt="Teacher 1" className="rounded-full w-40 h-40 mx-auto"/>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Mr. Gangaram Chandrawanshi</h3>
            <p className="mt-2 text-gray-600">Principal</p>
            <p className="mt-4 text-gray-600">
              Mr. Gangaram Chandrawanshi has been with Sunflower Public School for over 15 years. He has a passion for creating a positive learning environment and empowering students to succeed academically and socially.
            </p>
          </div>
          
          {/* Teacher 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <img src={Raj} alt="Teacher 2" className="rounded-full w-40 h-40 mx-auto"/>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Mr. Raj Mehra</h3>
            <p className="mt-2 text-gray-600">Math Teacher</p>
            <p className="mt-4 text-gray-600">
              With a deep love for mathematics, Mr. Raj uses innovative teaching methods to make learning math both fun and practical for all students. Her goal is to help every student feel confident in their abilities.
            </p>
          </div>

          {/* Teacher 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <img src={Om} alt="Teacher 3" className="rounded-full w-40 h-40 mx-auto"/>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Mr. Omnarayan Rajput</h3>
            <p className="mt-2 text-gray-600">Science Teacher</p>
            <p className="mt-4 text-gray-600">
              Mr. Omnarayan's dynamic and hands-on approach to teaching science fosters a love for exploration and experimentation in his students. He encourages them to ask questions and seek answers through critical thinking.
            </p>
          </div>

          {/* Teacher 4 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <img src={Arvind} alt="Teacher 4" className="rounded-full w-40 h-40 mx-auto"/>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Mr. Arvind Kumre</h3>
            <p className="mt-2 text-gray-600">Social Science Teacher</p>
            <p className="mt-4 text-gray-600">
              Mr. Arvind is a Social Science Teacher who believes in the power of storytelling to inspire and develop communication skills in his students. He fosters creativity and confidence in writing and speaking.
            </p>
          </div>

          {/* Additional Teachers */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <img src="/teacher5.jpg" alt="Teacher 5" className="rounded-full w-40 h-40 mx-auto"/>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Mr. Michael Brown</h3>
            <p className="mt-2 text-gray-600">History Teacher</p>
            <p className="mt-4 text-gray-600">
              Mr. Brown’s passion for history is contagious. He engages students through interactive lessons that bring the past to life and help them understand how history shapes the world we live in today.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <img src="/teacher6.jpg" alt="Teacher 6" className="rounded-full w-40 h-40 mx-auto"/>
            <h3 className="mt-6 text-xl font-semibold text-gray-800">Ms. Olivia Martinez</h3>
            <p className="mt-2 text-gray-600">Art Teacher</p>
            <p className="mt-4 text-gray-600">
              Ms. Martinez nurtures students' creative talents through art and design. She believes that every student has the ability to express themselves artistically and encourages them to explore their unique styles.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Teachers;
