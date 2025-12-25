const SuccessToast = ({ show }) => {
  if (!show) return null;

  return (
    <div className="fixed top-6 right-6 z-50 bg-green-600 text-white px-6 py-3 rounded-xl shadow-xl animate-bounce">
      ✔ Attendance Marked Successfully
    </div>
  );
};

export default SuccessToast;
