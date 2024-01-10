export default function updateStudentGradeByCity(
  getListStudents,
  city,
  newGrades
) {
  if (Array.isArray(getListStudents)) {
    const students = getListStudents.filter((item) => item.location === city);
    const studentsIds = students.map((item) => item.id);
    const newStudents = getListStudents.map((item) => {
      if (studentsIds.includes(item.id)) {
        const grade = newGrades.find((grade) => grade.studentId === item.id);
        if (grade) {
          return { ...item, grade: grade.grade };
        } else {
          return { ...item, grade: "N/A" };
        }
      }
      return item;
    });
    return newStudents;
  }
  return [];
}
