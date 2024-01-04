/**
 * Represents a pricing object.
 */
export default class Pricing {
  /**
     * Creates a new Pricing object.
     * @param {number} amount - The amount of the pricing.
     * @param {object} currency - The currency of the pricing.
     */
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  /**
     * Gets the amount of the pricing.
     * @returns {number} The amount of the pricing.
     */
  get amount() {
    return this._amount;
  }

  /**
     * Gets the currency of the pricing.
     * @returns {object} The currency of the pricing.
     */
  get currency() {
    return this._currency;
  }

  /**
     * Sets the amount of the pricing.
     * @param {number} amount - The amount of the pricing.
     */
  set amount(amount) {
    this._amount = amount;
  }

  /**
     * Sets the currency of the pricing.
     * @param {object} currency - The currency of the pricing.
     */
  set currency(currency) {
    this._currency = currency;
  }

  /**
     * Displays the full price including the currency name and code.
     * @returns {string} The full price string.
     */
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  /**
     * Converts the price using the given conversion rate.
     * @param {number} amount - The amount to convert.
     * @param {number} conversionRate - The conversion rate.
     * @returns {number} The converted price.
     */
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
