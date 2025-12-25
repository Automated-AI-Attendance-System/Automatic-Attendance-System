import DashboardLayout from "../layouts/DashboardLayout";

const Settings = () => {
  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Settings
      </h1>

      <div className="space-y-6">
        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-6 rounded-full bg-linear-to-b from-indigo-600 via-purple-600 to-pink-600" />
            <h2 className="text-lg font-semibold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              🏫 School Information
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="School Name"
              className="p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="School Code / ID"
              className="p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="District"
              className="p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="text"
              placeholder="State"
              className="p-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-6 rounded-full bg-linear-to-b from-indigo-600 via-purple-600 to-pink-600" />
            <h2 className="text-lg font-semibold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              🌐 Language Preferences
            </h2>
          </div>

          <select className="p-3 border border-gray-300 rounded-lg w-full sm:w-1/2">
            <option>English</option>
            <option>Hindi</option>
            <option>Odia</option>
            <option>Tamil</option>
            <option>Telugu</option>
          </select>
        </div>

        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-6 rounded-full bg-linear-to-b from-indigo-600 via-purple-600 to-pink-600" />
            <h2 className="text-lg font-semibold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              ⏰ Attendance Rules
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="time"
              className="p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="time"
              className="p-3 border border-gray-300 rounded-lg"
            />
          </div>
        </div>

        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-1.5 h-6 rounded-full bg-linear-to-b from-indigo-600 via-purple-600 to-pink-600" />
            <h2 className="text-lg font-semibold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              🔐 System Preferences
            </h2>
          </div>

          <div className="space-y-3 text-gray-700">
            <label className="flex items-center gap-3">
              <input type="checkbox" disabled />
              Enable Facial Recognition
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" disabled />
              Enable RFID Attendance
            </label>

            <label className="flex items-center gap-3">
              <input type="checkbox" disabled />
              Auto-sync Attendance Reports
            </label>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            disabled
            className="bg-gray-400 text-white px-6 py-2 rounded-full cursor-not-allowed"
          >
            Save Changes
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Settings;
