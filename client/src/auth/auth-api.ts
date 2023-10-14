/**
 * API for the authentication/login endpoint.
 */
import axios from 'axios';

const BASE_URL = 'http://localhost:4000/login';

/**
 * Creates a new user and returns the username.
 */
export const createUser = async (username: string): Promise<string> => {
  const { data } = await axios.post(BASE_URL, {
    username,
  });

  return data.username;
};
