import ClassRoom from "./0-classroom";

/**
 * Initializes the classrooms.
 * @returns {Array} An array of ClassRoom objects.
 */
export default function initializeRooms() {
  return [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
}
