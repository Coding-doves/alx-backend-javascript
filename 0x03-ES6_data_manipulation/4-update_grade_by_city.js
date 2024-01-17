export default updateStudentGradeByCity = (students, city, newGrades) => {
  return students
    .filter(({ location }) => location === city)
    .map((studentObj) => {
      const gradeInfo = newGrades.find((grade) => grade.studentId === studentObj.id);
      const grade = gradeInfo ? gradeInfo.grade : 'N/A';
      return { ...studentObj, grade };
    });
};
