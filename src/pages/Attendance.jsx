import DashboardLayout from "../layouts/DashboardLayout";
import StudentTable from "../components/StudentTable";
import CameraPreview from "../components/CameraPreview";

const Attendance = () => {
  const students = [
    { roll: 1, name: "Ravi Kumar" },
    { roll: 2, name: "Anita Devi" },
    { roll: 3, name: "Suresh Yadav" },
    { roll: 4, name: "Pooja Singh" },
    { roll: 5, name: "Amit Patel" },
    { roll: 6, name: "Neha Verma" },
    { roll: 7, name: "Rahul Das" },
    { roll: 8, name: "Sunita Kumari" },
    { roll: 9, name: "Vikas Sharma" },
    { roll: 10, name: "Kiran Rao" },
    { roll: 11, name: "Manoj Mishra" },
    { roll: 12, name: "Priya Nair" },
    { roll: 13, name: "Deepak Choudhary" },
    { roll: 14, name: "Anjali Gupta" },
    { roll: 15, name: "Rohit Meena" },
  ];

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Mark Attendance
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div
          className="
      relative
      rounded-2xl
      p-0.5
      bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600
      shadow-lg
      hover:shadow-2xl
      transition
      cursor-pointer
    "
        >
          <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-4 text-white text-center">
            <div className="text-2xl mb-1">📸</div>
            <p className="font-medium">Facial Recognition</p>
          </div>
        </div>

        <div
          className="
      relative
      rounded-2xl
      p-0.5
      bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600
      shadow-lg
      hover:shadow-2xl
      transition
      cursor-pointer
    "
        >
          <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-4 text-white text-center">
            <div className="text-2xl mb-1">🏷️</div>
            <p className="font-medium">RFID Scan</p>
          </div>
        </div>

        <div
          className="
      relative
      rounded-2xl
      p-0.5
      bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600
      shadow-lg
      hover:shadow-2xl
      transition
      cursor-pointer
    "
        >
          <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-4 text-white text-center">
            <div className="text-2xl mb-1">✍️</div>
            <p className="font-medium">Manual Attendance</p>
          </div>
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-4 mb-6">
        <CameraPreview />
      </div>

      <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-4 mb-6 flex gap-4 flex-wrap">
        <select className="p-2 border border-gray-300 rounded-lg text-gray-800">
          <option>Select Class</option>
          <option>Class 5</option>
          <option>Class 6</option>
        </select>

        <input
          type="date"
          className="p-2 border border-gray-300 rounded-lg text-gray-800"
        />

        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full transition">
          Capture & Mark Attendance
        </button>
      </div>

      <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-4">
        <StudentTable students={students} />
      </div>
    </DashboardLayout>
  );
};

export default Attendance;
