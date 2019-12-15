import React, { useState } from 'react';
import classNames from 'classnames';
import { useFormik } from 'formik';
import { useSessionStorage } from 'react-use';
import { navigate } from '@reach/router';

import { schema } from './schema';
import { Card } from 'components/Card';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { authenticate } from 'api/auth';
import { useAuthDispatch, ACTIONS, useAuthState } from 'providers/Auth';

const handleAuthenticationSuccess = async (dispatch, setSession) => {
  setSession({ isAuthenticated: true });
  dispatch({ type: ACTIONS.AUTHENTICATE });
};

export default function LoginPage() {
  const authState = useAuthState();
  const authDispatch = useAuthDispatch();
  const [isAuthFailed, setAuthFailed] = useState(false);

  const [, setAuthSession] = useSessionStorage('dragons.auth', authState);

  const formik = useFormik({
    validationSchema: schema,
    initialValues: { username: '', password: '' },
    onSubmit: async (values, { setSubmitting }) => {
      try {
        await authenticate(values);
        await handleAuthenticationSuccess(authDispatch, setAuthSession);
        await navigate('/dragons');
      } catch (error) {
        setSubmitting(false);
        setAuthFailed(true);
      }
    },
  });

  return (
    <main className="flex justify-center max-w-lg m-auto">
      <Card className="flex-1">
        <Card.Content>
          {isAuthFailed ? (
            <span className="mb-4 py-2 px-4 w-full block font-bold text-red-500 bg-red-100 border border-red-200 rounded">
              Wrong username or password.
            </span>
          ) : null}
          <form onSubmit={formik.handleSubmit}>
            <div className="mb-4">
              <Input
                id="username"
                name="username"
                placeholder="Your username"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.username}
                className={classNames({ 'with-error': formik.touched.username && formik.errors.username })}
              />
            </div>
            <div className="mb-4">
              <Input
                type="password"
                id="password"
                name="password"
                placeholder="Your password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                className={classNames({ 'with-error': formik.touched.password && formik.errors.password })}
              />
            </div>
            <Button type="submit" className="w-full" disabled={formik.isSubmitting}>
              Sign in
            </Button>
          </form>
        </Card.Content>
      </Card>
    </main>
  );
}
