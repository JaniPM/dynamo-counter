import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';
import { createUser } from './auth/auth-api';
import { getCounters } from './counter/counter-api';

jest.mock('./counter/counter-api');
jest.mock('./auth/auth-api');
const mockCreateUser = createUser as jest.Mock;
const mockGetCounters = getCounters as jest.Mock;

beforeEach(() => {
  jest.resetAllMocks();
});

afterAll(() => {
  jest.restoreAllMocks();
});

it('should render login page', () => {
  render(<App />);
  expect(screen.getByText('Welcome')).toBeInTheDocument();
});

it('should login the user and render counters page', async () => {
  mockCreateUser.mockResolvedValueOnce('jani');
  mockGetCounters.mockResolvedValueOnce({ jani: 140 });

  render(<App />);
  const usernameInput = screen.getByPlaceholderText('Username');
  const loginButton = screen.getByText('Login');

  await userEvent.type(usernameInput, 'jani', { allAtOnce: true });
  userEvent.click(loginButton);

  expect(await screen.findByText('Counters')).toBeInTheDocument();
  expect(screen.getByText('jani: 140')).toBeInTheDocument();
  expect(mockCreateUser).toBeCalledWith('jani');
});
