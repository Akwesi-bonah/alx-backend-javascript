export default function getListStudentIds(getListStudents) {
  if (Array.isArray(getListStudents)) {
    return getListStudents.map((item) => item.id);
  }
  return [];
}
