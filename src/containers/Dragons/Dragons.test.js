import React from 'react';
import { useSessionStorage } from 'react-use';
import { render, wait } from '@testing-library/react';
import * as Router from '@reach/router';

import DragonsContainer from './Dragons';
import { AuthProvider } from '../../providers/Auth';

jest.mock('react-use');

function renderWithRouter(ui, { route = '/', history = Router.createHistory(Router.createMemorySource(route)) } = {}) {
  return {
    ...render(<Router.LocationProvider history={history}>{ui}</Router.LocationProvider>),
    // adding `history` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    history,
  };
}

describe('Dragons main container', () => {
  test('redirects to login if not authenticated', async () => {
    jest.spyOn(Router, 'navigate');
    useSessionStorage.mockReturnValue([{ isAuthenticated: false }]);

    renderWithRouter(
      <React.Suspense fallback="">
        <AuthProvider>
          <DragonsContainer />
        </AuthProvider>
      </React.Suspense>,
      { route: '/dragons' }
    );

    expect(Router.navigate).toHaveBeenCalled();
    expect(global.location.pathname).toBe('/login');
  });
});
