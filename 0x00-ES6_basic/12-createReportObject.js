/**
 * Creates a report object based on the given employees list.
 * @param {Object} employeesList - The list of employees.
 * @returns {Object} - The report object.
 */
export default function createReportObject(employeesList) {
  return {
    allEmployees: { ...employeesList },
    getNumberOfDepartments: (employeesList) =>
      Object.keys(employeesList).length,
  };
}
