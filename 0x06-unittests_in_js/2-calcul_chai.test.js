const { expect } =  import("chai");
const calculateNumber = require("./2-calcul_chai");

describe("Test function calculateNumber", () => {
  describe("When type is SUM", () => {
    it("calculate the sum of two even numbers", () => {
      expect(calculateNumber("SUM", 2, 4)).to.equal(6);
    });
    it("calculate the sum of two float numbers", () => {
      expect(calculateNumber("SUM", 2.7, 4)).to.equal(7);
    });
    it("calculate the sum of two negative numbers", () => {
      expect(calculateNumber("SUM", -2, -4)).to.equal(-6);
    });
    it("calculate the sum of two negative float numbers", () => {
      expect(calculateNumber("SUM", -2.7, -4)).to.equal(-7);
    });
  });

  describe("When type is SUBTRACT", () => {
    it("calculate the subtract of two even numbers", () => {
      expect(calculateNumber("SUBTRACT", 2, 4)).to.equal(-2);
    });
    it("calculate the subtract of two float numbers", () => {
      expect(calculateNumber("SUBTRACT", 2.7, 4.0)).to.equal(-1);
    });
    it("calculate the subtract of two negative numbers", () => {
      expect(calculateNumber("SUBTRACT", -2, -4)).to.equal(2);
    });
    it("calculate the subtract of two negative float numbers", () => {
      expect(calculateNumber("SUBTRACT", -2.7, -4)).to.equal(1);
    });
  });

  describe("When type is DIVIDE", () => {
    it("calculate the divide of two even numbers", () => {
      expect(calculateNumber("DIVIDE", 2, 4)).to.equal(0.5);
    });
    it("calculate the divide of two float numbers", () => {
      expect(calculateNumber("DIVIDE", 2.7, 4)).to.equal(0.675);
    });
    it("calculate the divide of two negative numbers", () => {
      expect(calculateNumber("DIVIDE", -2, -4)).to.equal(0.5);
    });
    it("calculate the divide of two negative float numbers", () => {
      expect(calculateNumber("DIVIDE", -2.7, -4)).to.equal(0.675);
    });
    it("calculate the divide of a number by 0", () => {
      expect(calculateNumber("DIVIDE", 2, 0)).to.equal("Error"); 
    });
  });
});
