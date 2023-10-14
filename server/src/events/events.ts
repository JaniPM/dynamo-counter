/**
 * Event emitter module to publish events and subscribe to them.
 * Allows to decouple bounded contexts.
 */
import EventEmitter from 'events';

export type UserCreatedEvent = {
  type: 'USER_CREATED';
  payload: {
    username: string;
  };
};

export type CounterIncreasedEvent = {
  type: 'COUNTER_INCREASED';
  payload: {
    newValue: number;
  };
};

// All the supported events of the application
export type DomainEvent = UserCreatedEvent | CounterIncreasedEvent;

const events = new EventEmitter();

export const publishEvent = (event: DomainEvent): void => {
  events.emit(event.type, event.payload);
};

export const subscribeToEvent = <T extends DomainEvent>(
  eventType: T['type'],
  callback: (payload: T['payload']) => void,
): void => {
  events.on(eventType, callback);
};
