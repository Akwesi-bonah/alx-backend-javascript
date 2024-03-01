const calculateNumber = require('./0-calcul.js');
const assert = require('assert');


describe("Test function calculateNumber",() => {
    it('calculate the sum of two even numbers', () => {
        assert.equal(calculateNumber(1, 3), 4);

    });

    it('calculate the sum of two float numbers', () => {
        assert.equal(calculateNumber(1, 3.7), 5);
    });

    it('calculate the sum of two negative numbers', () => {
        assert.equal(calculateNumber(1.2, 3.7), 5);
    });

    it('calculate the sum of two negative float numbers', () => {
        assert.equal(calculateNumber(1.5, 3.7), 6);
    });

     it('calculate the sum of two negative numbers', () => {
        assert.equal(calculateNumber(-1.2, -3.7), -5);
    });

    it('calculate the sum of two negative float numbers', () => {
        assert.equal(calculateNumber(-1.5, -3.7), -5);
    });

    it('calculate the sum of two large numbers', () => {
        assert.equal(calculateNumber(999999, 1), 1000000); // Added large numbers
    });

    it('calculate the sum of zero and a negative number', () => {
        assert.equal(calculateNumber(0, -5), -5);
    });

    it('calculate the sum of two decimal numbers', () => {
        assert.equal(calculateNumber(1.25, 2.75), 4);
    });

})