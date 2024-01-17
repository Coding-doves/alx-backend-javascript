export default updateStudentGradeByCity = (students, city, newGrades) => {
  return students
    .filter((student) => student.city === city)
    .map((student) => {
      const gradeInfo = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeInfo ? gradeInfo.grade : 'N/A';
      return { ...student, grade };
    });
};
 
