const Courses: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">

      {/* Page Header */}
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Courses Offered
        </h1>

        <p className="mt-4 text-lg text-gray-600">
          Explore our diverse range of courses designed to nurture every aspect of your education.
        </p>
      </div>

      {/* Courses Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-7xl mx-auto">

        {/* Mathematics */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center">
          <svg className="w-12 h-12 mx-auto text-blue-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h18v2H3V3zm4 6h10v2H7V9zm-4 6h18v2H3v-2z"/>
          </svg>

          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            Mathematics
          </h3>

          <p className="mt-2 text-gray-600">
            Build a strong foundation in algebra, geometry, and calculus with interactive learning methods.
          </p>
        </div>

        {/* Science */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center">
          <svg className="w-12 h-12 mx-auto text-green-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 2v2l3 5v6l-3 5v2h6v-2l-3-5V9l3-5V2H9z"/>
          </svg>

          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            Science
          </h3>

          <p className="mt-2 text-gray-600">
            Dive into the wonders of physics, chemistry, and biology with hands-on experiments and projects.
          </p>
        </div>

        {/* English */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center">
          <svg className="w-12 h-12 mx-auto text-purple-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 4h16v16H4V4zm2 2v12h12V6H6z"/>
          </svg>

          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            English
          </h3>

          <p className="mt-2 text-gray-600">
            Enhance your communication skills through grammar, literature, and creative writing.
          </p>
        </div>

        {/* Art */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center">
          <svg className="w-12 h-12 mx-auto text-orange-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2a10 10 0 100 20 4 4 0 004-4h-3a1 1 0 010-2h4a6 6 0 10-5-10z"/>
          </svg>

          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            Art & Design
          </h3>

          <p className="mt-2 text-gray-600">
            Unleash your creativity through painting, sketching, and digital design.
          </p>
        </div>

        {/* Social Studies */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center">
          <svg className="w-12 h-12 mx-auto text-teal-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l9 4v6c0 5-3.8 9.7-9 10-5.2-.3-9-5-9-10V6l9-4z"/>
          </svg>

          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            Social Studies
          </h3>

          <p className="mt-2 text-gray-600">
            Understand the world better through geography, history, and civic studies.
          </p>
        </div>

        {/* Music */}
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-all text-center">
          <svg className="w-12 h-12 mx-auto text-pink-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 3v10.55A4 4 0 1014 17V7h4V3h-6z"/>
          </svg>

          <h3 className="text-2xl font-semibold text-gray-800 mt-4">
            Music
          </h3>

          <p className="mt-2 text-gray-600">
            Discover your musical talents through vocal training and instrument practice.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Courses;