/**
 * API for the counter endpoint.
 */
import axios from 'axios';

const BASE_URL = 'http://localhost:4000/counters';

/**
 * Get the counters for all users.
 */
export const getCounters = async (): Promise<Record<string, number>> => {
  const { data } = await axios.get(BASE_URL, {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  });

  return data.counters;
};

/**
 * Increate the counter for the given username and return the updated counters.
 */
export const increaseCounter = async (username: string): Promise<Record<string, number>> => {
  const { data } = await axios.put(`${BASE_URL}/${username}`);
  return data.counters;
};
