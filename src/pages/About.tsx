// src/pages/About.tsx
const About: React.FC = () => {
    return (
      <div className="font-sans bg-gray-50 text-gray-900">
        {/* Hero Section */}
        <section className="h-64 bg-cover bg-center relative" style={{ backgroundImage: 'url(/school-background.jpg)' }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="flex justify-center items-center h-full text-center text-white">
            <h1 className="text-4xl font-extrabold animate__animated animate__fadeIn">About Sunflower Public School</h1>
          </div>
        </section>
  
        {/* About the School Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">About Us</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Sunflower Public School is committed to providing a holistic learning experience for children, focusing not only on academics but also on developing creativity, leadership, and strong character. With dedicated teachers and a nurturing environment, we empower our students to excel in every aspect of life.
            </p>
          </div>
        </section>
  
        {/* History Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our History</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Established in 1995, Sunflower Public School has grown into one of the leading educational institutions in the region. With a history rooted in excellence, our school has consistently strived to provide quality education, developing the leaders of tomorrow.
            </p>
          </div>
        </section>
  
        {/* Our Vision Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Our vision is to create an inclusive learning environment that fosters intellectual growth, character development, and physical well-being. We strive to make our students not only academically proficient but also globally aware and socially responsible citizens.
            </p>
          </div>
        </section>
  
        {/* Our Team Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800">Meet Our Team</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Teacher 1 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <img src="/teacher1.jpg" alt="Teacher 1" className="rounded-full w-32 h-32 mx-auto"/>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Mr. John Doe</h3>
                <p className="mt-2 text-gray-600">Principal</p>
                <p className="mt-4 text-gray-600">With over 20 years of experience in education, Mr. Doe is passionate about fostering a learning environment that challenges students to think critically and creatively.</p>
              </div>
              {/* Teacher 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <img src="/teacher2.jpg" alt="Teacher 2" className="rounded-full w-32 h-32 mx-auto"/>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Ms. Jane Smith</h3>
                <p className="mt-2 text-gray-600">Math Teacher</p>
                <p className="mt-4 text-gray-600">Ms. Smith brings a passion for mathematics to the classroom, helping students develop problem-solving skills that will benefit them throughout their academic careers.</p>
              </div>
              {/* Teacher 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <img src="/teacher3.jpg" alt="Teacher 3" className="rounded-full w-32 h-32 mx-auto"/>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Mr. William Clark</h3>
                <p className="mt-2 text-gray-600">Science Teacher</p>
                <p className="mt-4 text-gray-600">Mr. Clark’s innovative teaching methods and hands-on science experiments inspire students to explore the world around them and become future scientists and innovators.</p>
              </div>
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
  
  export default About;
  