const calculateNumber = require('./0-calcul.js');
const assert = require('assert');


describe("Test function calculateNumber",() => {
    it('calculate the sum of two even numbers', () => {
        assert.equal(calculateNumber(2, 4), 6);

    });

    it('calculate the sum of two float numbers', () => {
        assert.equal(calculateNumber(2.7, 4), 7);
    });

    it('calculate the sum of two negative numbers', () => {
        assert.equal(calculateNumber(-2, -4), -6);
    });

    it('calculate the sum of two negative float numbers', () => {
        assert.equal(calculateNumber(-2.7, -4), -7);
    });

})