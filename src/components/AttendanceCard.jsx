const AttendanceCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow rounded-lg p-5 flex flex-col gap-2">
      <p className="text-gray-500 text-sm">{title}</p>
      <h2 className="text-2xl font-semibold text-blue-600">
        {value}
      </h2>
    </div>
  );
};

export default AttendanceCard;
