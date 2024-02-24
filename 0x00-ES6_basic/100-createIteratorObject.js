export default function createIteratorObject(report) {
  const iterator = {
    [Symbol.iterator]: function* () {
      for ( const dept in report.allEmployees ) {
        const employeesInDepartment = report.allEmployees[dept];
        for ( const employee of employeesInDepartment ) {
          yield employee;
        }
      }
    },
  };
  return iterator;
}
