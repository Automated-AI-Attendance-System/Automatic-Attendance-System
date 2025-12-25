import AttendanceCard from "../components/AttendanceCard";
import DashboardLayout from "../layouts/DashboardLayout";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="bg-linear-to-r from-indigo-700 via-purple-700 to-pink-700 text-white rounded-2xl p-6 sm:p-8 mb-8 shadow-xl transition hover:shadow-2xl">
        <h1 className="text-2xl sm:text-3xl font-semibold mb-2">
          Welcome back <span className="wave-hand">👋</span>
        </h1>
        <p className="text-sm sm:text-base opacity-90">
          Here’s a quick overview of today’s attendance.
        </p>
      </div>

      <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="transform transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl rounded-2xl">
            <AttendanceCard title="Total Students" value="120" icon="👨‍🎓" />
          </div>

          <div className="transform transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl rounded-2xl">
            <AttendanceCard title="Present Today" value="98" icon="✅" />
          </div>

          <div className="transform transition duration-300 hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl rounded-2xl">
            <AttendanceCard title="Attendance %" value="81%" icon="📊" />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
