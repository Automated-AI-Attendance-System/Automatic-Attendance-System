import DashboardLayout from "../layouts/DashboardLayout";
import StudentTable from "../components/StudentTable";

const Students = () => {
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
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
        <h1 className="text-2xl font-semibold bg-linear-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Students List
        </h1>

        <span className="mt-2 sm:mt-0 text-sm text-white/80">
          Total Students: {students.length}
        </span>
      </div>

      <div className="bg-white/90 backdrop-blur p-4 sm:p-6 rounded-2xl shadow-xl">
        <StudentTable students={students} />
      </div>
    </DashboardLayout>
  );
};

export default Students;
