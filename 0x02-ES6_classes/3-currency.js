/**
 * Represents a currency.
 */
export default class Currency {
  /**
   * Creates a new Currency instance.
   * @param {string} code - The currency code.
   * @param {string} name - The currency name.
   */
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  /**
   * Gets the currency code.
   * @returns {string} The currency code.
   */
  get code() {
    return this._code;
  }

  /**
   * Sets the currency code.
   * @param {string} code - The currency code.
   */
  set code(code) {
    this._code = code;
  }

  /**
   * Gets the currency name.
   * @returns {string} The currency name.
   */
  get name() {
    return this._name;
  }

  /**
   * Sets the currency name.
   * @param {string} name - The currency name.
   */
  set name(name) {
    this._name = name;
  }

  /**
   * Returns the full currency representation.
   * @returns {string} The full currency representation.
   */
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
