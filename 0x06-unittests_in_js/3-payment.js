const Utils = require("./utils");
const calculateNumber = Utils.calculateNumber;

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const res = calculateNumber("SUM", totalAmount, totalShipping);
  console.log(`The total is: ${res}`);
};

module.exports = sendPaymentRequestToApi;
