import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

interface Holiday {
  date: Date;
  event: string;
}

interface Teacher {
  name: string;
  fatherName: string;
  motherName: string;
  dateOfBirth: string;
  address: string;
  qualification: string;
  subject: string;
}

const ExploreSPS: React.FC = () => {
  const [value, setValue] = useState<Date>(new Date());
  const [selectedTeacher, setSelectedTeacher] = useState<string | null>(null);

  const holidays: Holiday[] = [
    { date: new Date(2024, 0, 10), event: "Annual Day Celebration" },
    { date: new Date(2024, 1, 15), event: "Examination Week Begins" },
    { date: new Date(2024, 2, 25), event: "Graduation Day" },
  ];

  const teachers: Teacher[] = [
    {
      name: "Mr. Gangaram Chandrawanshi",
      fatherName: "Shri Ramesh Chandrawanshi",
      motherName: "Smt. Seema Chandrawanshi",
      dateOfBirth: "01-Jan-1975",
      address: "Sunflower Lane, Seoni, MP",
      qualification: "M.A. in Sanskrit",
      subject: "Sanskrit"
    },
    {
      name: "Mrs. Radha Sahu",
      fatherName: "Shri Suraj Sahu",
      motherName: "Smt. Rukmini Sahu",
      dateOfBirth: "05-Mar-1980",
      address: "Seoni, MP",
      qualification: "M.A. in English",
      subject: "English and Social Studies"
    },
    {
      name: "Mr. Raj Mehra",
      fatherName: "Shri Satish Mehra",
      motherName: "Smt. Pooja Mehra",
      dateOfBirth: "12-Dec-1995",
      address: "Bhopal, MP",
      qualification: "B.Tech in Computer Science",
      subject: "Mathematics and Science"
    },
    {
      name: "Mr. Omnarayan Rajput",
      fatherName: "Shri Bhagwan Rajput",
      motherName: "Smt. Meena Rajput",
      dateOfBirth: "22-Oct-1985",
      address: "Seoni, MP",
      qualification: "M.Sc. in Physics",
      subject: "Mathematics and Science"
    },
    {
      name: "Ms. Neelam Chandrawanshi",
      fatherName: "Shri Ramesh Chandrawanshi",
      motherName: "Smt. Seema Chandrawanshi",
      dateOfBirth: "15-Jul-1987",
      address: "Seoni, MP",
      qualification: "B.A. in Hindi",
      subject: "Hindi and Environmental Studies"
    },
    {
      name: "Mr. Arvind Kumre",
      fatherName: "Shri Ramkishore Kumre",
      motherName: "Smt. Kanta Kumre",
      dateOfBirth: "09-Jun-1982",
      address: "Seoni, MP",
      qualification: "B.P.Ed.",
      subject: "Physical Education"
    },
    {
      name: "Mrs. Rajkumari Sharma",
      fatherName: "Shri Ramesh Sharma",
      motherName: "Smt. Aarti Sharma",
      dateOfBirth: "18-Jan-1990",
      address: "Jabalpur, MP",
      qualification: "M.A. in Computer Science",
      subject: "Computer Science and Art"
    },
    {
      name: "Mrs. Deepali Chandrawanshi",
      fatherName: "Shri Mohan Chandrawanshi",
      motherName: "Smt. Sumitra Chandrawanshi",
      dateOfBirth: "25-May-1992",
      address: "Seoni, MP",
      qualification: "M.Sc. in Computer Science",
      subject: "Computer Science and Art"
    },

  ];
  
  const findEvent = (date: Date) =>
    holidays.find((holiday) => holiday.date.toDateString() === date.toDateString())?.event;

  const handleTeacherClick = (name: string) => {
    setSelectedTeacher(selectedTeacher === name ? null : name); // Toggle teacher details
  };

  return (
    <div className="p-6 space-y-10">
      {/* Welcome Section */}
      <section className="bg-blue-600 text-white p-8 rounded-lg shadow-lg mt-12">
        <h2 className="text-4xl font-extrabold mb-4">Welcome to Sunflower Public School</h2>
        <p className="text-lg">We are dedicated to providing quality education from KG1 to 8th grade, offering a balanced curriculum with extra-curricular activities to support the holistic development of our students.</p>
      </section>

      {/* Calendar Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Event Calendar</h2>
        <Calendar
          value={value}
          onClickDay={(date) => setValue(date)}
          tileContent={({ date }) =>
            findEvent(date) ? (
              <span className="text-xs text-red-600 block mt-1">
                {findEvent(date)}
              </span>
            ) : null
          }
          className="shadow-md rounded-lg"
        />
        <div className="mt-4 text-gray-600">
          <p className="font-semibold">Selected Date: {value.toDateString()}</p>
          <p>{findEvent(value) || "No event scheduled"}</p>
        </div>
      </section>

      {/* Teacher Timetable Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">School Timetable</h2>
        <p className="text-gray-600 mb-4">Here is the timetable for various classes, from KG1 to 8th grade:</p>
        <table className="table-auto w-full text-gray-600">
          <thead>
            <tr className="border-b">
              <th className="p-2 text-left">Time</th>
              <th className="p-2 text-left">Class</th>
              <th className="p-2 text-left">Subject</th>
            </tr>
          </thead>
          <tbody>
            {/* 10:00 AM to 11:00 AM */}
            <tr className="border-b">
              <td className="p-2">10:00 AM - 11:00 AM</td>
              <td className="p-2">KG1</td>
              <td className="p-2">Creative Arts</td>
            </tr>
            {/* 11:00 AM to 12:00 PM */}
            <tr className="border-b">
              <td className="p-2">11:00 AM - 12:00 PM</td>
              <td className="p-2">Class 1</td>
              <td className="p-2">English</td>
            </tr>
            {/* Add more rows here */}
          </tbody>
        </table>
      </section>

      {/* Teachers Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Teachers</h2>
        <div className="grid grid-cols-2 gap-8">
          {teachers.map((teacher) => (
            <div
              key={teacher.name}
              className="p-4 bg-gray-100 rounded-lg cursor-pointer"
              onClick={() => handleTeacherClick(teacher.name)}
            >
              <h3 className="text-2xl font-bold text-gray-800">{teacher.name}</h3>
              <p className="text-gray-600">Subject: {teacher.subject}</p>

              {selectedTeacher === teacher.name && (
                <div className="mt-4 text-gray-600">
                  <p><strong>Father's Name:</strong> {teacher.fatherName}</p>
                  <p><strong>Mother's Name:</strong> {teacher.motherName}</p>
                  <p><strong>Date of Birth:</strong> {teacher.dateOfBirth}</p>
                  <p><strong>Address:</strong> {teacher.address}</p>
                  <p><strong>Qualification:</strong> {teacher.qualification}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Extra-Curricular Activities Section */}
      <section className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Extra-Curricular Activities</h2>
        <p className="text-gray-600 mb-4">Apart from academics, we focus on building a range of skills through various activities:</p>
        <ul className="space-y-3 text-gray-600 mt-4">
          <li>🎨 **Art and Craft**</li>
          <li>🎤 **Music & Dance</li>
          <li>⚽ **Sports & Games</li>
          <li>🎭 **Drama & Theater</li>
          <li>💡 **Science and Technology Club</li>
          <li>📚 **Literary and Debating Club</li>
        </ul>
      </section>

      {/* Admission Section */}
      <section className="bg-blue-500 text-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Admissions Open</h2>
        <p>Join our vibrant community. Apply now for the upcoming academic year.</p>
        <button className="bg-white text-blue-600 px-4 py-2 rounded mt-4 hover:bg-gray-100">
          Apply Now
        </button>
      </section>
    </div>
  );
};

export default ExploreSPS;
