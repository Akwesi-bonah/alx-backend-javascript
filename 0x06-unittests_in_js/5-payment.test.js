const sinon = require('sinon');
const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');
const { expect } = require('chai');

describe("sendPaymentRequestToApi", () => {
  let result;

  beforeEach(() =>{
    if (!result)
    {
        result = sinon.spy(console);
    }
  });

  it('sendPaymentRequestToApi(100, 20) logs "The total is: 120" to the console', () => {
    sendPaymentRequestToApi(100, 20);
    expect(result.log.calledWith('The total is: 120')).to.be.true;
    expect(result.log.calledOnce).to.be.true;
  });

  it('sendPaymentRequestToApi(10, 10) logs "The total is: 20" to the console', () => {
    sendPaymentRequestToApi(10, 10);
    expect(result.log.calledWith('The total is: 20')).to.be.true;
    expect(result.log.calledOnce).to.be.true;
  });

  afterEach(() => {
    result.log.resetHistory();
  });

});