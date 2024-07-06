import {createContext} from 'react';

export const AuthContext = createContext({
    isLoggedIn: false,
    isAdmin: false,
    setAuthContext: (_: any) => {},
  },
);
