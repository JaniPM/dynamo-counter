import { useEffect, useState } from 'react';
import * as CounterAPI from './counter-api';

/**
 * Hook to get the counters for all users and increase the counter for a given user.
 */
const useCounters = (username: string) => {
  const [counters, setCounters] = useState<Record<string, number>>({});

  useEffect(() => {
    CounterAPI.getCounters()
      .then(counters => setCounters(counters))
      .catch(console.error);
  }, []);

  const increaseCounter = () => {
    CounterAPI.increaseCounter(username)
      .then(counters => setCounters(counters))
      .catch(console.error);
  };

  return {
    counters,
    increaseCounter,
  };
};

export default useCounters;
