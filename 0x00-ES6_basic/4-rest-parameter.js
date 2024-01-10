/**
 * Returns the number of arguments passed to the function.
 * @param {...*} args - The arguments passed to the function.
 * @returns {number} - The number of arguments passed.
 */
export default function returnHowManyArguments(...args) {
  return args.length;
}
