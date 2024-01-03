/**
 * Divides two numbers.
 *
 * @param {number} numerator - The numerator of the division.
 * @param {number} denominator - The denominator of the division.
 * @returns {number|Error} - The result of the division or an Error if the denominator is 0.
 */
export default function divideFunction(numerator, denominator) {
    if (denominator === 0) {
      throw new Error("cannot divide by 0");
    }
    return numerator / denominator;
  }