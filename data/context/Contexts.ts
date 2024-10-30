// data/context/Contexts.ts
import { createContext } from 'react';

export type AuthContextType = {
  isInit: boolean;
  isLoggedIn: boolean;
  isAdmin: boolean;
  hasProfile: boolean;
};

export const AuthContext = createContext<AuthContextType>({
  isInit: false,
  isLoggedIn: false,
  isAdmin: false,
  hasProfile: false
});
