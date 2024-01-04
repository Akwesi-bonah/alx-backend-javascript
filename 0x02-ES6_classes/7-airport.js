/**
 * Represents an airport.
 */
export default class Airport {
  /**
     * Creates an instance of Airport.
     * @param {string} name - The name of the airport.
     * @param {string} code - The code of the airport.
     */
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  /**
     * Returns a string representation of the airport.
     * @returns {string} The string representation of the airport.
     */
  toString() {
    return `[object ${this._code}]`;
  }
}
