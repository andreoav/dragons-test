import React, { createContext, useReducer, useContext } from 'react';

export const AuthStateContext = createContext();
export const AuthDispatchContext = createContext();

export const ACTIONS = {
  LOGOUT: 'LOGOUT',
  AUTHENTICATE: 'AUTHENTICATE',
};

export function authReducer(state, action) {
  switch (action.type) {
    case ACTIONS.AUTHENTICATE:
      return { isAuthenticated: true };
    case ACTIONS.LOGOUT:
      return { isAuthenticated: false };
    default:
      throw new Error(`action type not implemented: ${action.type}`);
  }
}

export function AuthProvider({ children, ...props }) {
  const [state, dispatch] = useReducer(authReducer, { isAuthenticated: false });

  return (
    <AuthStateContext.Provider value={state} {...props}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
}

export function useAuthState() {
  const authState = useContext(AuthStateContext);

  if (!authState) {
    throw new Error('useAuthState must be wrapped by an AuthStateProvider');
  }

  return authState;
}

export function useAuthDispatch() {
  const authDispatch = useContext(AuthDispatchContext);

  if (!authDispatch) {
    throw new Error('useAuthDispatch must be wrapped by an AuthStateProvider');
  }

  return authDispatch;
}

export function useAuthContext() {
  return [useAuthState(), useAuthDispatch()];
}
