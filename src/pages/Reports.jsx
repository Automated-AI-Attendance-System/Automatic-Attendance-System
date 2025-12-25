import DashboardLayout from "../layouts/DashboardLayout";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import exportReportPDF from "../utils/exportReportPDF.JS";

const data = [
  { day: "Mon", present: 80 },
  { day: "Tue", present: 75 },
  { day: "Wed", present: 90 },
  { day: "Thu", present: 85 },
  { day: "Fri", present: 70 },
];

const Reports = () => {
  const todayAttendance = 81;
  const monthlyAverage = 78;

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-semibold mb-6 bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
        Attendance Reports
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
        <div className="bg-white/90 backdrop-blur p-5 rounded-2xl shadow-xl">
          <p className="text-gray-500 text-sm">Today Attendance</p>
          <h2 className="text-3xl font-semibold text-green-600">
            {todayAttendance}%
          </h2>
        </div>

        <div className="bg-white/90 backdrop-blur p-5 rounded-2xl shadow-xl">
          <p className="text-gray-500 text-sm">Monthly Average</p>
          <h2 className="text-3xl font-semibold text-indigo-600">
            {monthlyAverage}%
          </h2>
        </div>
      </div>

      <div className="bg-white/90 backdrop-blur p-6 rounded-2xl shadow-xl mb-6">
        <h3 className="text-lg font-medium mb-4 text-gray-800">
          Weekly Attendance Overview
        </h3>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="present" fill="#4f46e5" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <button
        onClick={() =>
          exportReportPDF({
            today: todayAttendance,
            monthly: monthlyAverage,
            weekly: data,
          })
        }
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full shadow transition"
      >
        Export Report
      </button>
    </DashboardLayout>
  );
};

export default Reports;
