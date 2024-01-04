/**
 * Represents a building.
 * @class
 */
export default class Building {
    /**
     * Creates a new instance of the Building class.
     * @constructor
     * @param {number} sqft - The square footage of the building.
     */
    constructor(sqft) {
        this._sqft = sqft;
        if (this.constructor !== Building && !this.evacuationWarningMessage) {
            throw Error(
                "Class extending Building must override evacuationWarningMessage"
            );
        }
    }

    /**
     * Gets the square footage of the building.
     * @returns {number} The square footage of the building.
     */
    get sqft() {
        return this._sqft;
    }

    /**
     * Sets the square footage of the building.
     * @param {number} sqft - The square footage of the building.
     */
    set sqft(sqft) {
        this._sqft = sqft;
    }
}
