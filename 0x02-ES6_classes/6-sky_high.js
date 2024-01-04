import Building from "./5-building";

/**
 * Represents a SkyHighBuilding.
 * @extends Building
 */
export default class SkyHighBuilding extends Building {
    /**
     * Create a SkyHighBuilding.
     * @param {number} sqft - The square footage of the building.
     * @param {number} floors - The number of floors in the building.
     */
    constructor(sqft, floors) {
        super(sqft);
        this._floors = floors;
    }

    /**
     * Get the number of floors in the building.
     * @returns {number} The number of floors.
     */
    get floors() {
        return this._floors;
    }

    /**
     * Set the number of floors in the building.
     * @param {number} floors - The number of floors.
     */
    set floors(floors) {
        this._floors = floors;
    }

    /**
     * Get the evacuation warning message.
     * @returns {string} The evacuation warning message.
     */
    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`;
    }
}
