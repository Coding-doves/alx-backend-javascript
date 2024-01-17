export default function getListStudentIds(arrayOfObject) {
  return Array.isArray(arrayOfObject) ? arrayOfObject.map(({ id }) => id) : [];
}
