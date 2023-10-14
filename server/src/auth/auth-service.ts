import { publishEvent } from '../events/events';
import * as userRepo from './user-repo';

const usersDB = new Set<string>();

/**
 * Creates a new user in the users DB and publishes a USER_CREATED event.
 */
export const createUser = async (username: string) => {
  await userRepo.createOrUpdateUser(username);
  publishEvent({ type: 'USER_CREATED', payload: { username } });
};

export const isAuthorized = async (username?: string): Promise<boolean> =>
  !!username && !!(await userRepo.findUserByUsername(username));
