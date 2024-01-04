/**
 * Represents a Holberton Course.
 * @class
 */
export default class HolbertonCourse {
  /**
   * Create a Holberton Course.
   * @constructor
   * @param {string} name - The name of the course.
   * @param {number} length - The length of the course in weeks.
   * @param {string[]} students - The list of students enrolled in the course.
   */
  constructor(name, length, students) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be a string");
    }

    if (!Number.isInteger(length)) {
      throw new TypeError("Length must be a number");
    }

    if (!Array.isArray(students)) {
      throw new TypeError("Students must be an array");
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
   * Get the name of the course.
   * @returns {string} The name of the course.
   */
  get name() {
    return this._name;
  }

  /**
   * Get the length of the course.
   * @returns {number} The length of the course in weeks.
   */
  get length() {
    return this._length;
  }

  /**
   * Get the list of students enrolled in the course.
   * @returns {string[]} The list of students enrolled in the course.
   */
  get students() {
    return this._students;
  }

  /**
   * Set the name of the course.
   * @param {string} name - The name of the course.
   */
  set name(name) {
    if (typeof name !== "string") {
      throw new TypeError("Name must be a string");
    }
    this._name = name;
  }

  /**
   * Set the length of the course.
   * @param {number} length - The length of the course in weeks.
   */
  set length(length) {
    if (!Number.isInteger(length)) {
      throw new TypeError("Length must be a number");
    }
    this._length = length;
  }

  /**
   * Set the list of students enrolled in the course.
   * @param {string[]} students - The list of students enrolled in the course.
   */
  set students(students) {
    if (!Array.isArray(students)) {
      throw new TypeError("Students must be an array");
    }
    this._students = students;
  }
}
