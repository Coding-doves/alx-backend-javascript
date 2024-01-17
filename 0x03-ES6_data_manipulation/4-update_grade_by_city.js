const updateStudentGradeByCity = (students, city, newGrades) => students
  .filter(({ location }) => location === city)
  .map((studentObj) => {
    const gradeInfo = newGrades.find(({ studentId }) => studentId === studentObj.id);
    const grade = gradeInfo ? gradeInfo.grade : 'N/A';
    return { ...studentObj, grade };
  });

export default updateStudentGradeByCity;
