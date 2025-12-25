import { useState, useMemo } from "react";
import StudentModal from "./StudentModal";

const StudentTable = ({ students }) => {
  const [attendance, setAttendance] = useState(
    students.map((s) => ({ ...s, status: "Present" }))
  );

  const [search, setSearch] = useState("");
  const [selectedStudent, setSelectedStudent] = useState(null);

  const toggleStatus = (index) => {
    const updated = [...attendance];
    updated[index].status =
      updated[index].status === "Present" ? "Absent" : "Present";
    setAttendance(updated);
  };

  const filteredStudents = useMemo(() => {
    return attendance.filter(
      (s) =>
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        String(s.roll).includes(search)
    );
  }, [attendance, search]);

  return (
    <>
      <div className="relative overflow-hidden">

        {/* Search Bar */}
        <div className="p-4 bg-white/50">
          <input
            type="text"
            placeholder="🔍 Search student by name or roll"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">

            <thead className="sticky top-0 z-10 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
              <tr>
                <th className="p-4 text-left">Roll No</th>
                <th className="p-4 text-left">Student Name</th>
                <th className="p-4 text-center">Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredStudents.map((student, index) => (
                <tr
                  key={index}
                  className="
                    group
                    border-b border-gray-200
                    transition
                    hover:bg-linear-to-r
                    hover:from-indigo-50
                    hover:via-purple-50
                    hover:to-pink-50
                  "
                >
                  <td className="p-4 font-medium text-gray-700">
                    {student.roll}
                  </td>

                  <td
                    className="p-4 font-semibold text-indigo-700 cursor-pointer group-hover:underline"
                    onClick={() => setSelectedStudent(student)}
                  >
                    {student.name}
                  </td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() => toggleStatus(index)}
                      className={`px-4 py-1 rounded-full text-white text-xs font-semibold transition transform hover:scale-105 ${
                        student.status === "Present"
                          ? "bg-linear-to-r from-green-500 to-emerald-600 shadow-green-300/50 shadow"
                          : "bg-linear-to-r from-red-500 to-rose-600 shadow-red-300/50 shadow"
                      }`}
                    >
                      {student.status}
                    </button>
                  </td>
                </tr>
              ))}

              {filteredStudents.length === 0 && (
                <tr>
                  <td
                    colSpan="3"
                    className="p-6 text-center text-gray-500"
                  >
                    No students found
                  </td>
                </tr>
              )}
            </tbody>

          </table>
        </div>
      </div>

      {/* Student Profile Modal */}
      <StudentModal
        student={selectedStudent}
        onClose={() => setSelectedStudent(null)}
      />
    </>
  );
};

export default StudentTable;
