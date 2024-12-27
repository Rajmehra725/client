import Footer from "../components/Footer";
import Raj from "../Images/Rajm.png"
import Om from "../Images/Om.png"
import Ram from "../Images/Ram.jpg"
const About: React.FC = () => {
    return (
      <div className="font-sans bg-gray-50 text-gray-900">
        {/* Hero Section */}
        <section 
  className="h-80 md:h-96 bg-cover bg-center relative flex items-center justify-center text-center text-white" 
  style={{ backgroundImage: 'url(/school-background.jpg)' }}
>
  {/* Background Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-70"></div>

  {/* Content */}
  <div className="relative z-10 space-y-4 px-6">
    <h1 className="text-5xl md:text-6xl font-extrabold drop-shadow-lg animate__animated animate__fadeInDown">
      About <span className="text-yellow-400">Sunflower Public School</span>
    </h1>
    <p className="text-lg md:text-xl max-w-3xl mx-auto font-light animate__animated animate__fadeInUp">
      We are committed to nurturing young minds, fostering creativity, and preparing students to excel in a dynamic world.
    </p>
    <button className="mt-4 bg-yellow-500 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-yellow-600 hover:shadow-xl transform transition duration-300 hover:scale-105">
      Learn More
    </button>
  </div>

  {/* Decorative Elements */}
  <div className="absolute -top-10 left-1/4 w-20 h-20 bg-yellow-500 rounded-full opacity-30 animate-pulse"></div>
  <div className="absolute -bottom-10 right-1/3 w-28 h-28 bg-yellow-400 rounded-full opacity-30 animate-bounce"></div>
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
                <img src={Ram} alt="Teacher 1" className="rounded-full w-32 h-32 mx-auto"/>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Mr. Gangaram Chandrawanshi</h3>
                <p className="mt-2 text-gray-600">Principal</p>
                <p className="mt-4 text-gray-600">With over 20 years of experience in education, Mr. Gangaram Chandrawanshi is passionate about fostering a learning environment that challenges students to think critically and creatively.</p>
              </div>
              {/* Teacher 2 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <img src={Raj} alt="Teacher 2" className="rounded-full w-32 h-32 mx-auto"/>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Mr. Raj Mehra</h3>
                <p className="mt-2 text-gray-600">Math Teacher</p>
                <p className="mt-4 text-gray-600">Ms. Raj brings a passion for mathematics to the classroom, helping students develop problem-solving skills that will benefit them throughout their academic careers.</p>
              </div>
              {/* Teacher 3 */}
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <img src={Om} alt="Teacher 3" className="rounded-full w-32 h-32 mx-auto"/>
                <h3 className="mt-4 text-xl font-semibold text-gray-800">Mr. Omnarayan Rajput</h3>
                <p className="mt-2 text-gray-600">Science Teacher</p>
                <p className="mt-4 text-gray-600">Mr. Omnarayan Rajput innovative teaching methods and hands-on science experiments inspire students to explore the world around them and become future scientists and innovators.</p>
              </div>
            </div>
          </div>
        </section>

      </div>
    );
  };
  
  export default About;
  