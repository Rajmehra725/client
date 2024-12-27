// src/pages/Teachers.tsx
const Teachers: React.FC = () => {
    return (
      <div className="font-sans bg-gray-50 text-gray-900">
        {/* Hero Section */}
        <section className="h-64 bg-cover bg-center relative" style={{ backgroundImage: 'url(/teachers-background.jpg)' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex justify-center items-center h-full text-center text-white">
            <h1 className="text-4xl font-extrabold animate__animated animate__fadeIn">Our Dedicated Teachers</h1>
          </div>
        </section>
  
        {/* Teachers List Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">Meet Our Educators</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              At Sunflower Public School, our teachers are the backbone of our institution. They inspire, mentor, and guide students to achieve their highest potential. Here's a look at some of our exceptional faculty members.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-6">
            {/* Teacher 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img src="/teacher1.jpg" alt="Teacher 1" className="rounded-full w-40 h-40 mx-auto"/>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Mr. John Doe</h3>
              <p className="mt-2 text-gray-600">Principal</p>
              <p className="mt-4 text-gray-600">
                Mr. John Doe has been with Sunflower Public School for over 15 years. He has a passion for creating a positive learning environment and empowering students to succeed academically and socially.
              </p>
            </div>
            
            {/* Teacher 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img src="/teacher2.jpg" alt="Teacher 2" className="rounded-full w-40 h-40 mx-auto"/>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Ms. Jane Smith</h3>
              <p className="mt-2 text-gray-600">Math Teacher</p>
              <p className="mt-4 text-gray-600">
                With a deep love for mathematics, Ms. Smith uses innovative teaching methods to make learning math both fun and practical for all students. Her goal is to help every student feel confident in their abilities.
              </p>
            </div>
  
            {/* Teacher 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img src="/teacher3.jpg" alt="Teacher 3" className="rounded-full w-40 h-40 mx-auto"/>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Mr. William Clark</h3>
              <p className="mt-2 text-gray-600">Science Teacher</p>
              <p className="mt-4 text-gray-600">
                Mr. Clark’s dynamic and hands-on approach to teaching science fosters a love for exploration and experimentation in his students. He encourages them to ask questions and seek answers through critical thinking.
              </p>
            </div>
  
            {/* Teacher 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img src="/teacher4.jpg" alt="Teacher 4" className="rounded-full w-40 h-40 mx-auto"/>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Ms. Emily Davis</h3>
              <p className="mt-2 text-gray-600">English Teacher</p>
              <p className="mt-4 text-gray-600">
                Ms. Davis is an English teacher who believes in the power of storytelling to inspire and develop communication skills in her students. She fosters creativity and confidence in writing and speaking.
              </p>
            </div>
  
            {/* Teacher 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
              <img src="/teacher5.jpg" alt="Teacher 5" className="rounded-full w-40 h-40 mx-auto"/>
              <h3 className="mt-6 text-xl font-semibold text-gray-800">Mr. Michael Brown</h3>
              <p className="mt-2 text-gray-600">History Teacher</p>
              <p className="mt-4 text-gray-600">
                Mr. Brown’s passion for history is contagious. He engages students through interactive lessons that bring the past to life and help them understand how history shapes the world we live in today.
              </p>
            </div>
  
            {/* Teacher 6 */}
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
  
        {/* Footer Section */}
        <footer className="bg-yellow-400 py-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="text-white text-xl mb-4">Contact Us</div>
            <p className="text-white">Email: info@spspaylikhurd.com | Phone: (123) 456-7890</p>
            <div className="mt-4">
              <a href="#" className="text-white px-4">Facebook</a>
              <a href="#" className="text-white px-4">Instagram</a>
              <a href="#" className="text-white px-4">LinkedIn</a>
            </div>
          </div>
        </footer>
      </div>
    );
  };
  
  export default Teachers;
  