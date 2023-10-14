import React, { useState } from 'react';
import useCounters from './use-counters';

type Props = {
  username: string;
};

/**
 * Counters component that displays a list of counters and a button to increase.
 */
const Counters = ({ username }: Props) => {
  const { counters, increaseCounter } = useCounters(username);

  return (
    <>
      <div id="counters">
        <ul>
          {Object.keys(counters).map(username => (
            <li key={username}>
              {username}: {counters[username]}
            </li>
          ))}
        </ul>
      </div>
      <div id="increase-counter">
        <button onClick={increaseCounter}>Click here!</button>
      </div>
    </>
  );
};

export default Counters;
