/**
 * Represents a HolbertonClass.
 * @class
 */
export default class HolbertonClass {
    /**
     * Creates a new instance of HolbertonClass.
     * @constructor
     * @param {number} size - The size of the class.
     * @param {string} location - The location of the class.
     */
    constructor(size, location) {
        this._size = size;
        this._location = location;
    }

    /**
     * Returns the size of the class.
     * @returns {number} The size of the class.
     */
    valueOf() {
        return this._size;
    }

    /**
     * Returns the location of the class.
     * @returns {string} The location of the class.
     */
    toString() {
        return this._location;
    }
}
