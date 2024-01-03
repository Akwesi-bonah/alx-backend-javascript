/**
 * Appends a specified string to each value in an array.
 * @param {Array} array - The input array.
 * @param {string} appendString - The string to append to each value.
 * @returns {Array} - The new array with the appended values.
 */
export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (let idx of array) {
    let value = idx;
    newArray.push(appendString + value);
  }

  return newArray;
}
