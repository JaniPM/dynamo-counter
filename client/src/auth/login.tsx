import React, { useState } from 'react';
import { createUser } from './auth-api';

type Props = {
  onLoginSuccess: (username: string) => void;
};

/**
 * Login form.
 */
const Login = ({ onLoginSuccess }: Props) => {
  const [errorMsg, setErrorMsg] = useState('');

  const login = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const username = formData.get('username')?.toString()?.trim() || '';

    if (!username.length) {
      return;
    }

    try {
      const createdUsername = await createUser(username);
      onLoginSuccess(createdUsername);

      console.log('login success', createdUsername);
    } catch (err) {
      console.error(err);
      setErrorMsg('Could not login, please try again later');
    }
  };

  return (
    <div>
      <h1>Welcome</h1>
      <form onSubmit={login}>
        <input type="text" name="username" placeholder="Username" />
        <input type="submit" value="Login" />
      </form>
      <div style={{ color: 'red' }}>{errorMsg}</div>
    </div>
  );
};

export default Login;
