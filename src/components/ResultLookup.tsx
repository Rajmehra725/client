
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import students from "./students.json";

type Student = {
  childId: string;
  name: string;
  class: string;
  roll: number;
  hindi: number;
  english: number;
  sanskrit: number;
  maths: number;
  science: number;
  socialScience: number;
};

const ResultLookup = () => {

  const [childId, setChildId] = useState("");
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [result, setResult] = useState<Student | null>(null);
  const [error, setError] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [locked, setLocked] = useState(false);

  useEffect(() => {
    generateCaptcha();
  }, []);

  const generateCaptcha = () => {
    setCaptcha({
      num1: Math.floor(Math.random() * 20),
      num2: Math.floor(Math.random() * 20),
    });
  };

  const handleSearch = () => {

    if (locked) {
      setError("Too many attempts. Please wait 10 seconds.");
      return;
    }

    if (Number(captchaAnswer) !== captcha.num1 + captcha.num2) {
      setError("Incorrect captcha");
      setAttempts(attempts + 1);
      generateCaptcha();
      setCaptchaAnswer("");
      return;
    }

    const student = students.students.find(
      (s: Student) => s.childId === childId
    );

    if (!student) {
      setError("Result not found");
      setResult(null);
      setAttempts(attempts + 1);
      generateCaptcha();
      setCaptchaAnswer("");

      if (attempts + 1 >= 3) {
        setLocked(true);
        setTimeout(() => {
          setLocked(false);
          setAttempts(0);
        }, 10000);
      }

    } else {
      setResult(student);
      setError("");
      setCaptchaAnswer("");
      generateCaptcha();
    }

  };

  const total =
    result &&
    result.hindi +
      result.english +
      result.sanskrit +
      result.maths +
      result.science +
      result.socialScience;

  const percentage = total ? (total / 600) * 100 : 0;

  const getGrade = (p: number) => {
    if (p >= 90) return "A+";
    if (p >= 80) return "A";
    if (p >= 70) return "B";
    if (p >= 60) return "C";
    if (p >= 50) return "D";
    return "F";
  };

  const isPass =
    result &&
    result.hindi >= 33 &&
    result.english >= 33 &&
    result.sanskrit >= 33 &&
    result.maths >= 33 &&
    result.science >= 33 &&
    result.socialScience >= 33;

  const getRank = () => {
    if (!result) return null;

    const classStudents = students.students.filter(
      (s: Student) => s.class === result.class
    );

    const sorted = classStudents.sort((a, b) => {
      const totalA =
        a.hindi +
        a.english +
        a.sanskrit +
        a.maths +
        a.science +
        a.socialScience;

      const totalB =
        b.hindi +
        b.english +
        b.sanskrit +
        b.maths +
        b.science +
        b.socialScience;

      return totalB - totalA;
    });

    const rank =
      sorted.findIndex((s) => s.childId === result.childId) + 1;

    return rank;
  };

  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">

      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold mb-6">
          Sunflower Public School Result Portal
        </h2>

        <div className="flex flex-col items-center gap-4 mb-10">

          <input
            type="text"
            placeholder="Enter Child ID"
            value={childId}
            onChange={(e) => setChildId(e.target.value)}
            className="px-4 py-2 rounded text-black w-64"
          />

          <div className="flex items-center gap-3">

            <span className="bg-white text-black px-3 py-2 rounded font-semibold">
              {captcha.num1} + {captcha.num2} = ?
            </span>

            <input
              type="number"
              placeholder="Answer"
              value={captchaAnswer}
              onChange={(e) => setCaptchaAnswer(e.target.value)}
              className="px-3 py-2 rounded text-black w-24"
            />

            <button
              onClick={generateCaptcha}
              className="bg-gray-200 text-black px-3 py-2 rounded"
            >
              ↻
            </button>

          </div>

          <button
            onClick={handleSearch}
            className="px-6 py-2 bg-yellow-400 text-black rounded font-semibold hover:bg-yellow-300"
          >
            View Result
          </button>

          {error && <p className="text-red-200">{error}</p>}

        </div>

        {result && (

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white text-black p-8 rounded-xl shadow-xl max-w-2xl mx-auto"
          >

            <h3 className="text-2xl font-bold text-center mb-4">
              Sunflower Public School Payli Khurd
            </h3>

            <div className="flex justify-between mb-4">
              <p>Name : {result.name}</p>
              <p>Roll No : {result.roll}</p>
            </div>

            <div className="flex justify-between mb-6">
              <p>Class : {result.class}</p>
              <p>Child ID : {result.childId}</p>
            </div>

            <p className="font-bold mb-3">
              Rank : {getRank()}
            </p>

            {getRank() === 1 && (
              <p className="text-yellow-500 font-bold mb-3">
                🏆 Class Topper
              </p>
            )}

            <table className="w-full border">

              <thead className="bg-gray-200">
                <tr>
                  <th className="border p-2">Subject</th>
                  <th className="border p-2">Marks</th>
                </tr>
              </thead>

              <tbody>

                <tr><td className="border p-2">Hindi</td><td className="border p-2">{result.hindi}</td></tr>
                <tr><td className="border p-2">English</td><td className="border p-2">{result.english}</td></tr>
                <tr><td className="border p-2">Sanskrit</td><td className="border p-2">{result.sanskrit}</td></tr>
                <tr><td className="border p-2">Maths</td><td className="border p-2">{result.maths}</td></tr>
                <tr><td className="border p-2">Science</td><td className="border p-2">{result.science}</td></tr>
                <tr><td className="border p-2">Social Science</td><td className="border p-2">{result.socialScience}</td></tr>

              </tbody>

            </table>

            <div className="mt-6 flex justify-between font-bold">
              <p>Total : {total} / 600</p>
              <p>Percentage : {percentage.toFixed(2)}%</p>
            </div>

            <div className="mt-2 font-bold text-green-600">
              Grade : {getGrade(percentage)}
            </div>

            <div className="mt-2 font-bold">
              Result : {isPass ? "PASS" : "FAIL"}
            </div>

           

          </motion.div>

        )}

      </div>

    </section>
  );
};

export default ResultLookup;

