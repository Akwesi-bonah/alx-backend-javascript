export default function getStudentsByLocation(getListStudents, city) {
  if (Array.isArray(getListStudents)) {
    return getListStudents.filter((item) => item.location === city);
  }
  return [];
}
