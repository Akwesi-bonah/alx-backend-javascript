const sinon = require('sinon');
import {expect} from "chai";

const sendPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe("sendPaymentRequestToApi", () => {
  it("Checking if the calculateNumber method has been used correctly", () => {
    const check = sinon.spy(Utils);
    sendPaymentRequestToApi(100, 20);
    expect(check.calculateNumber.calledWith("SUM", 100, 20)).to.be.true;
    expect(check.calculateNumber.callCount).to.be.equal(1);
    check.calculateNumber.restore();
  });
});

