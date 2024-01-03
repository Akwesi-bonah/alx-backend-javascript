/**
 * Creates an employee object with the given department name and employees.
 * @param {string} departmentName - The name of the department.
 * @param {Array} employees - An array of employees.
 * @returns {Object} - The employee object with the department name as the key and the employees as the value.
 */
export default function createEmployeeObject(departmentName, employees) {
  return {
    [departmentName]: employees,
  };
}
