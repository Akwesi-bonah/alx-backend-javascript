const assert = require("assert");
const calculateNumber = require("./1-calcul.js");

describe("Test function calculateNumber", () => {
  describe("When type is SUM", () => {
    it("calculate the sum of two even numbers", () => {
      assert.strictEqual(calculateNumber("SUM", 2, 4), 6);
    });
    it("calculate the sum of two float numbers", () => {
      assert.strictEqual(calculateNumber("SUM", 2.7, 4), 7);
    });
    it("calculate the sum of two negative numbers", () => {
      assert.strictEqual(calculateNumber("SUM", -2, -4), -6);
    });
    it("calculate the sum of two negative float numbers", () => {
      assert.strictEqual(calculateNumber("SUM", -2.7, -4), -7);
    });
  });
  describe("When type is SUBTRACT", () => {
    it("calculate the subtract of two even numbers", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 2, 4), -2);
    });
    it("calculate the subtract of two float numbers", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", 2.7, 4.0), -1);
    });
    it("calculate the subtract of two negative numbers", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", -2, -4), 2);
    });
    it("calculate the subtract of two negative float numbers", () => {
      assert.strictEqual(calculateNumber("SUBTRACT", -2.7, -4), 1);
    });
  });

  describe("When type is DIVIDE", () => {
    it("calculate the divide of two even numbers", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 2, 4), 0.5);
    });
    it("calculate the divide of two float numbers", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 2.7, 4), 0.75);
    });
    it("calculate the divide of two negative numbers", () => {
      assert.strictEqual(calculateNumber("DIVIDE", -2, -4), 0.5);
    });
    it("calculate the divide of two negative float numbers", () => {
      assert.strictEqual(calculateNumber("DIVIDE", -2.7, -4), 0.75);
    });
    it("calculate the divide of a number by 0", () => {
      assert.strictEqual(calculateNumber("DIVIDE", 2, 0), "Error");
    });
  });
});
