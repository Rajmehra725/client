import React, { useState } from 'react';
import Raj from "../Images/Rajm.png";
import Om from "../Images/Om.png";
import Ram from "../Images/Ram.jpg";
import Arvind from "../Images/Arvind.png";

interface Teacher {
  name: string;
  role: string;
  image: string;
  description: string;
  fatherName: string;
  address: string;
  qualification: string;
  dob: string;
}

const Teachers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null);

  const teachersData: Teacher[] = [
    {
      name: "Gangaram Chandrawanshi",
      role: "Principal",
      image: Ram,
      description: "Dedicated to creating a positive learning environment.",
      fatherName: "Ram Chandrawanshi",
      address: "Seoni, Madhya Pradesh",
      qualification: "M.A., B.Ed",
      dob: "15th March 1975",
    },
    {
      name: "Raj Mehra",
      role: "Math Teacher",
      image: Raj,
      description: "Passionate Math teacher using innovative methods.",
      fatherName: "Mohan Mehra",
      address: "Chhapara, Seoni",
      qualification: "M.Sc. Mathematics",
      dob: "20th July 1980",
    },
    {
      name: "Omnarayan Rajput",
      role: "Science Teacher",
      image: Om,
      description: "Dynamic teaching style to foster a love for science.",
      fatherName: "Hari Rajput",
      address: "Payli Khurd",
      qualification: "M.Sc. Physics, B.Ed",
      dob: "10th April 1982",
    },
    {
      name: "Arvind Kumre",
      role: "Social Science Teacher",
      image: Arvind,
      description: "Uses storytelling to inspire students.",
      fatherName: "Suraj Kumre",
      address: "Seoni, MP",
      qualification: "M.A. History",
      dob: "5th May 1978",
    },
    {
      name: "Radha Sahu",
      role: "Hindi Teacher",
      image: "./",
      description: "Dedicated to creating a positive learning environment.",
      fatherName: "xyz",
      address: "Seoni, Madhya Pradesh",
      qualification: "M.A., B.Ed",
      dob: "15th March 1975",
    },
    {
      name: "Neelam Chandrawanshi",
      role: "Primary Teacher",
      image: "./",
      description: "Passionate Math teacher using innovative methods.",
      fatherName: "xyz",
      address: "Chhapara, Seoni",
      qualification: "M.Sc. Mathematics",
      dob: "20th July 1980",
    },
    {
      name: "Rajkumari..",
      role: "Primary Teacher",
      image: "./",
      description: "Dynamic teaching style to foster a love for science.",
      fatherName: "Hari Rajput",
      address: "Payli Khurd",
      qualification: "M.Sc. Physics, B.Ed",
      dob: "10th April 1982",
    },
    {
      name: "Deepali Chandrawanshi",
      role: "Primary Teacher",
      image: "./",
      description: "Uses storytelling to inspire students.",
      fatherName: "xyz",
      address: "Seoni, MP",
      qualification: "M.A. History",
      dob: "5th May 1978",
    },
  ];

  const filteredTeachers = teachersData.filter((teacher) =>
    teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    teacher.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <section
        className="h-80 md:h-96 bg-cover bg-center relative flex items-center justify-center text-center text-white"
        style={{ backgroundImage: 'url(/teachers-background.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800 via-transparent to-gray-800 opacity-70"></div>
        <div className="relative z-10 space-y-4 px-6 mt-20">
          <h1 className="text-4xl md:text-6xl font-extrabold">
            Meet <span className="text-yellow-400">Our Dedicated Teachers</span>
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto font-light">
            Empowering young minds through passion, dedication, and expertise.
          </p>
        </div>
      </section>

      <section className="py-8 bg-gray-100">
        <div className="max-w-7xl mx-auto text-center px-6">
          <input
            type="text"
            placeholder="Search for teachers..."
            className="p-4 w-3/4 md:w-1/2 rounded-full border border-gray-300 focus:ring-2 focus:ring-yellow-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold text-gray-800">Meet Our Educators</h2>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Our teachers are the backbone of our institution. They inspire, mentor, and guide students to achieve their highest potential.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-6">
          {filteredTeachers.map((teacher, index) => (
            <div
              key={index}
              onClick={() => setSelectedTeacher(teacher)}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl cursor-pointer hover:scale-105 transition-all"
            >
              <img
                src={teacher.image}
                alt={teacher.name}
                className="rounded-full w-40 h-40 mx-auto"
              />
              <h3 className="mt-6 text-xl font-semibold text-gray-800">{teacher.name}</h3>
              <p className="mt-2 text-gray-600">{teacher.role}</p>
            </div>
          ))}
        </div>
      </section>

      {selectedTeacher && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg w-11/12 md:w-2/3 lg:w-1/2">
            <h2 className="text-3xl font-bold mb-4">{selectedTeacher.name}</h2>
            <img
              src={selectedTeacher.image}
              alt={selectedTeacher.name}
              className="w-52 h-52 rounded-full mx-auto mb-6"
            />
            <p><strong>Role:</strong> {selectedTeacher.role}</p>
            <p><strong>Father's Name:</strong> {selectedTeacher.fatherName}</p>
            <p><strong>Address:</strong> {selectedTeacher.address}</p>
            <p><strong>Qualification:</strong> {selectedTeacher.qualification}</p>
            <p><strong>Date of Birth:</strong> {selectedTeacher.dob}</p>
            <p className="mt-4">{selectedTeacher.description}</p>
            <button
              className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg"
              onClick={() => setSelectedTeacher(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teachers;
