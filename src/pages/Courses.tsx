import { FaCalculator, FaFlask, FaBook, FaPaintBrush, FaGlobe, FaMusic } from "react-icons/fa";

const Courses: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      {/* Page Header */}
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-gray-800 animate__animated animate__fadeIn">
          Courses Offered
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore our diverse range of courses designed to nurture every aspect of your education.
        </p>
      </div>

      {/* Courses Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">
        {/* Course 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <FaCalculator className="text-5xl text-blue-500 mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-800 mt-4 text-center">Mathematics</h3>
          <p className="mt-2 text-gray-600 text-center">
            Build a strong foundation in algebra, geometry, and calculus with interactive learning methods.
          </p>
        </div>

        {/* Course 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <FaFlask className="text-5xl text-green-500 mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-800 mt-4 text-center">Science</h3>
          <p className="mt-2 text-gray-600 text-center">
            Dive into the wonders of physics, chemistry, and biology with hands-on experiments and projects.
          </p>
        </div>

        {/* Course 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <FaBook className="text-5xl text-purple-500 mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-800 mt-4 text-center">English</h3>
          <p className="mt-2 text-gray-600 text-center">
            Enhance your communication skills through grammar, literature, and creative writing.
          </p>
        </div>

        {/* Course 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <FaPaintBrush className="text-5xl text-orange-500 mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-800 mt-4 text-center">Art & Design</h3>
          <p className="mt-2 text-gray-600 text-center">
            Unleash your creativity through painting, sketching, and digital design.
          </p>
        </div>

        {/* Course 5 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <FaGlobe className="text-5xl text-teal-500 mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-800 mt-4 text-center">Social Studies</h3>
          <p className="mt-2 text-gray-600 text-center">
            Understand the world better through geography, history, and civic studies.
          </p>
        </div>

        {/* Course 6 */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <FaMusic className="text-5xl text-pink-500 mx-auto" />
          <h3 className="text-2xl font-semibold text-gray-800 mt-4 text-center">Music</h3>
          <p className="mt-2 text-gray-600 text-center">
            Discover your musical talents through vocal training and instrument practice.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
