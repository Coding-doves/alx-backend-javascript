export default function getStudentsByLocation(arrayOfStudentsObject, city) {
  return arrayOfStudentsObject.filter(({ location }) => location === city);
}
