import { subscribeToEvent, UserCreatedEvent } from '../events/events';
import * as counterRepo from './counter-repo';

export const getCounters = (): Promise<Record<string, number>> => {
  return counterRepo.getCounters();
};

export const increaseCounter = async (username: string): Promise<Record<string, number>> => {
  await counterRepo.increaseCounter(username);
  return counterRepo.getCounters();
};

// Subscribe to the USER_CREATED event and init a counter for the user
subscribeToEvent<UserCreatedEvent>('USER_CREATED', async payload => {
  await counterRepo.initCounterForUser(payload.username);
});
