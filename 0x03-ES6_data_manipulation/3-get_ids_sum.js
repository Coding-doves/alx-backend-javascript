 export default function getStudentIdsSum(listStudentsObject) {
  return listStudentsObject.reduce((sum, { id }) => sum + id, 0);
}
