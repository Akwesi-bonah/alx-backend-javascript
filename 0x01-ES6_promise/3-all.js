import { uploadPhoto, createUser } from './utils';

/**
 * Handles the signup process for a user's profile.
 * @returns {Promise} A promise that resolves when both the photo upload
 * and user creation are completed.
 */
export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((result) => {
      console.log(
        `${result[0].body} ${result[1].firstName} ${result[1].lastName}`,
      );
    })

    .catch(() => {
      console.log('Signup system offline');
    });
}
