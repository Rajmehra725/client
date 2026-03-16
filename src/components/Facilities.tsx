import { FaBook, FaFlask, FaFootballBall, FaChalkboardTeacher } from "react-icons/fa";

const facilities = [
  {
    title: "Smart Classes",
    icon: <FaChalkboardTeacher />,
  },
  {
    title: "Science Lab",
    icon: <FaFlask />,
  },
  {
    title: "Library",
    icon: <FaBook />,
  },
  {
    title: "Sports",
    icon: <FaFootballBall />,
  },
];

const Facilities = () => {
  return (
    <section className="py-16 bg-gray-100">

      <div className="max-w-6xl mx-auto text-center">

        <h2 className="text-3xl font-bold mb-10">
          Our Facilities
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {facilities.map((f, i) => (

            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
            >

              <div className="text-4xl text-blue-500 mb-4 flex justify-center">
                {f.icon}
              </div>

              <h3 className="font-semibold">{f.title}</h3>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Facilities;