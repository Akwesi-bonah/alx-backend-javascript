/**
 * Creates a budget object with the given income, gdp, and capita values.
 *
 * @param {number} income - The income value.
 * @param {number} gdp - The gdp value.
 * @param {number} capita - The capita value.
 * @returns {object} The budget object with the income, gdp, and capita values.
 */
export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}
