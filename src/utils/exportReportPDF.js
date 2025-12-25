import jsPDF from "jspdf";

const exportReportPDF = ({ today, monthly, weekly }) => {
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("Attendance Report", 10, 15);

  doc.setFontSize(12);
  doc.text(`Today Attendance: ${today}%`, 10, 30);
  doc.text(`Monthly Average: ${monthly}%`, 10, 40);

  doc.text("Weekly Attendance:", 10, 55);

  weekly.forEach((day, index) => {
    doc.text(
      `${day.day}: ${day.present}%`,
      10,
      65 + index * 8
    );
  });

  doc.save("attendance-report.pdf");
};

export default exportReportPDF;
