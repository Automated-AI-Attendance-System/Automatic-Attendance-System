const StudentModal = ({ student, onClose }) => {
  if (!student) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center">
      <div className="relative bg-white/90 backdrop-blur-xl rounded-3xl w-[90%] max-w-sm shadow-2xl animate-[scaleIn_0.25s_ease-out] overflow-hidden">
        <div className="bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 p-4 text-white">
          <h2 className="text-lg font-semibold">Student Profile</h2>
        </div>

        <div className="p-6 space-y-3 text-gray-800">
          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Roll No</span>
            <span className="font-medium">{student.roll}</span>
          </div>

          <div className="flex justify-between">
            <span className="text-sm text-gray-500">Name</span>
            <span className="font-medium">{student.name}</span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">Status</span>
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold ${
                student.status === "Present"
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {student.status}
            </span>
          </div>
        </div>

        <div className="px-6 pb-6">
          <button
            onClick={onClose}
            className="
              w-full
              bg-indigo-600 hover:bg-indigo-700
              text-white
              py-2
              rounded-full
              font-medium
              transition
              hover:shadow-lg
              hover:-translate-y-0.5
              active:scale-95
            "
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentModal;
