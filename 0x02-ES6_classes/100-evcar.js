import Car from './10-car';
/* eslint-disable class-methods-use-this */
/**
 * Represents an Electric Vehicle Car.
 * @extends Car
 */
export default class EVCar extends Car {
    /**
     * Creates a new instance of EVCar.
     * @param {string} brand - The brand of the car.
     * @param {string} motor - The type of motor used in the car.
     * @param {string} color - The color of the car.
     * @param {number} range - The range of the car in miles.
     */
    constructor(brand, motor, color, range) {
        super(brand, motor, color);
        this._range = range;
    }

    /**
     * Clones the EVCar.
     * @returns {Car} - A new instance of Car.
     */
    cloneCar() {
        return new Car();
    }
}