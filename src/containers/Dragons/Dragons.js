import React, { useEffect } from 'react';
import { useSessionStorage } from 'react-use';
import { navigate, Router } from '@reach/router';

import { EditDragon } from './Edit';
import { DragonsList } from './List';
import { CreateDragon } from './Create';
import { DragonDetails } from './Details';
import { useAuthContext, ACTIONS } from 'providers/Auth';

export default function Dashboard() {
  const [authState, authDispatch] = useAuthContext();
  const [{ isAuthenticated }] = useSessionStorage('dragons.auth', authState);

  // prettier-ignore
  useEffect(() => {
    isAuthenticated
      ? authDispatch({ type: ACTIONS.AUTHENTICATE})
      : navigate('login');
  }, [isAuthenticated, authDispatch]);

  return (
    <Router primary={false}>
      <DragonsList path="/" />
      <CreateDragon path="/new" />
      <DragonDetails path="/:dragonId" />
      <EditDragon path="/:dragonId/edit" />
    </Router>
  );
}
