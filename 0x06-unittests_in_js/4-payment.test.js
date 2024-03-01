const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');
const { expect } = require('chai');

describe("sendPaymentRequestToApi", () => {
  it("Checking if the calculateNumber method logs correctly", () => {
    const check = sinon.spy(console);
    const stub = sinon.stub(Utils, "calculateNumber");

    stub.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(stub.calledWith('SUM', 100, 20)).to.be.true;
    expect(stub.callCount).to.be.equal(1);
    expect(check.log.calledWith("The total is: 10")).to.be.true;
    expect(check.log.callCount).to.be.equal(1);
    stub.restore();
    check.log.restore();
  });
});