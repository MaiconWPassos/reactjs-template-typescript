import React, { createContext } from 'react';

import useAuth, { User } from '~/hooks/useAuth';

interface ContextProps {
  authenticated: boolean;
  handleLogin(email: string, password: string, admin?: boolean): Promise<void | string>;
  handleLogout(): void;
  loading: boolean;
  user: User | undefined;
}
const Context = createContext<ContextProps>({} as ContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const { authenticated, handleLogin, handleLogout, loading, user } = useAuth();

  return (
    <Context.Provider value={{ authenticated, handleLogin, handleLogout, loading, user }}>
      {children}
    </Context.Provider>
  );
};

export { Context, AuthProvider };
