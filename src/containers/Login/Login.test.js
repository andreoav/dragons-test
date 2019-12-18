import React from 'react';
import { navigate } from '@reach/router';
import { render, wait, fireEvent } from '@testing-library/react';

import LoginPage from './Login';
import { authenticate } from '../../api/auth';
import { AuthProvider } from '../../providers/Auth';

jest.mock('@reach/router');
jest.mock('../../api/auth');

describe('Login container', () => {
  test('validation is triggered on login', async () => {
    const { getByText, getByPlaceholderText } = render(
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    );

    fireEvent.click(getByText(/sign in/i));

    await wait(() => {
      expect(getByPlaceholderText(/your username/i)).toHaveClass('with-error');
      expect(getByPlaceholderText(/your password/i)).toHaveClass('with-error');
    });
  });

  test('does not authenticated with the wrong password', async () => {
    authenticate.mockRejectedValueOnce({ data: null, status: 401 });

    const { getByText, getByPlaceholderText } = render(
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    );

    fireEvent.change(getByPlaceholderText(/your username/i), { target: { value: 'username' } });
    fireEvent.change(getByPlaceholderText(/your password/i), { target: { value: 'password' } });
    fireEvent.click(getByText(/sign in/i));

    await wait(() => {
      expect(navigate).not.toHaveBeenCalled();
      expect(authenticate).toHaveBeenCalledTimes(1);
      expect(authenticate).toHaveBeenCalledWith({ password: 'password', username: 'username' });
      expect(getByText('Wrong username or password.')).toBeVisible();
    });
  });

  test('redirects to the next page if the authenticate is successful', async () => {
    authenticate.mockResolvedValueOnce({ data: true, status: 200 });

    const { getByText, queryByText, getByPlaceholderText } = render(
      <AuthProvider>
        <LoginPage />
      </AuthProvider>
    );

    fireEvent.change(getByPlaceholderText(/your username/i), { target: { value: 'username' } });
    fireEvent.change(getByPlaceholderText(/your password/i), { target: { value: 'password' } });
    fireEvent.click(getByText(/sign in/i));

    await wait(() => {
      expect(navigate).toHaveBeenCalledWith('/dragons');
      expect(authenticate).toHaveBeenCalledTimes(1);
      expect(authenticate).toHaveBeenCalledWith({ password: 'password', username: 'username' });
      expect(queryByText('Wrong username or password.')).toBe(null);
    });
  });
});
