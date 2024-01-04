import { uploadPhoto, createUser } from './utils';

/**
 * Asynchronously uploads a photo and creates a user.
 * @returns {Promise<{photo: any, user: any}>} A promise that resolves to an object containing the uploaded photo and created user.
 * If an error occurs, the promise resolves to an object with null values for photo and user.
 */
const asyncUploadUser = async () => {
  try {
    const photo = await uploadPhoto();
    const user = await createUser();

    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
};

export default asyncUploadUser;
