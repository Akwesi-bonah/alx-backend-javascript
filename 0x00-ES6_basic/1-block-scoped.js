/**
 * A function that returns an array containing the values of two variables.
 * The values of the variables depend on the value of the parameter `trueOrFalse`.
 *
 * @param {boolean} trueOrFalse - A boolean value that determines the values of the variables.
 * @returns {Array} An array containing the values of the variables.
 */
export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }

  return [task, task2];
}
