/**
 * Iterates through an object and returns a string representation of its values.
 * @param {Object} reportWithIterator - The object to iterate through.
 * @returns {string} - The string representation of the object's values.
 */
/* eslint-disable radix */
export default function iterateThroughObject(reportWithIterator) {
  let output = "";

  for (const [index, item] of Object.entries(reportWithIterator)) {
    output += `${item}`;

    if (parseInt(index) !== reportWithIterator.length - 1) {
      output += " | ";
    }
  }

  return output;
}
