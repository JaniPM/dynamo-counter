import React, { useState } from 'react';
import { getCounters, increaseCounter } from './counter/counter-api';
import MyProfile from './auth/my-profile';
import Login from './auth/login';
import Counters from './counter/counters';

const App: React.FC = () => {
  const [loggedInAs, setLoggedInAs] = useState<string | undefined>(undefined);

  const handleLogin = (username: string) => {
    setLoggedInAs(username);
  };

  const handleLogout = (): void => {
    setLoggedInAs(undefined);
  };

  return (
    <main className="App">
      {loggedInAs === undefined ? (
        <Login onLoginSuccess={handleLogin} />
      ) : (
        <div>
          <h1>Counters</h1>
          <MyProfile username={loggedInAs} onLogout={handleLogout} />
          <Counters username={loggedInAs} />
        </div>
      )}
    </main>
  );
};

export default App;
