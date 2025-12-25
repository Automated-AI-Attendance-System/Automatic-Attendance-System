import jsPDF from "jspdf";

const exportAttendancePDF = (students) => {
  const doc = new jsPDF();

  doc.setFontSize(14);
  doc.text("Attendance Report", 10, 10);

  students.forEach((s, i) => {
    doc.text(
      `${s.roll}. ${s.name} - ${s.status || "Present"}`,
      10,
      20 + i * 8
    );
  });

  doc.save("attendance-report.pdf");
};

export default exportAttendancePDF;
