export default function getStudentIdsSum(getListStudents) {
  if (Array.isArray(getListStudents)) {
    return getListStudents.map((item) => item.id).reduce((acc, cu) => acc + cu);
  }
  return [];
}
