/**
 * Concatenates two arrays and a string using the spread operator.
 * @param {Array} array1 - The first array to be concatenated.
 * @param {Array} array2 - The second array to be concatenated.
 * @param {string} string - The string to be concatenated.
 * @returns {Array} - The concatenated array.
 */

export default function concatArrays(array1, array2, string) {
  const result = [...array1, ...array2, ...string];
  return result;
}
