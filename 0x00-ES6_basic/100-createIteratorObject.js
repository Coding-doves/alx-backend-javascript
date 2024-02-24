const iterator = {
  [Symbol.iterator]() {
    return {
      next() {
        for (const dept in report.allEmployees) {
          if (report.allEmployees.hasOwnProperty(dept)) {
            const employeesInDepartment = report.allEmployees[dept];
            for (const employee of employeesInDepartment) {
              return { value: employee, done: false };
            }
          }
        }
        return { done: true };
      }
    };
  }
};

return iterator;
}
