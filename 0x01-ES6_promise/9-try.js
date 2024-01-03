/**
 * Executes a math function and returns the result or an error message.
 * @param {Function} mathFunction - The math function to be executed.
 * @returns {Array} - An array containing the result or error message and a final message indicating that the guardrail was processed.
 */

export default function guardrail(mathFunction) {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (error) {
    queue.push('Error: cannot divide by 0');
  } finally {
    queue.push("Guardrail was processed");
  }
  return queue;
}
