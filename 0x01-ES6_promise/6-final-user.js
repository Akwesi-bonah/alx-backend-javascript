/**
 * Handles the signup process and profile creation for a user.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} fileName - The name of the file to upload as the user's photo.
 * @returns {Promise<Array<{status: string, value: any}>>} - A promise that resolves to an array of objects containing the status and value of each operation.
 */
import signUpUser from "./4-user-promise";
import uploadPhoto from "./5-photo-reject";

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((values) => {
    const arr = [];
    for (const item of values) {
      arr.push({ status: item.status, value: item.value || item.reason });
    }
    return arr;
  });
}
