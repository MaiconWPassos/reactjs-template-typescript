import { useState, useEffect } from 'react';

import api from '~/services/api';

import history from '~/services/history';
import {
  setUserToken,
  setExpirationToken,
  getUserToken,
  removeExpirationToken,
  removeUserToken,
  expiredToken,
  setUserData,
  removeUserData,
  getUserData,
} from '~/services/user';

export interface User {
  id: number;
  email: string;
  name?: string;
}

interface ResponseLogin {
  success: boolean;
  token?: string;
  data?: {
    id: number;
    email: string;
    name: string;
  };
  expiresIn?: number;
  message?: string;
}

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState<User>();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = getUserToken();
    const user = getUserData();

    if (user) {
      setUser(user);
    }
    if (token) {
      if (expiredToken()) {
        setLoading(false);
        return;
      }

      api.defaults.headers.Authorization = `Bearer ${token}`;
      setAuthenticated(true);
    }

    setLoading(false);
  }, []);

  const handleLogin = async (email: string, password: string): Promise<void | string> => {
    try {
      const { data } = await api.post<ResponseLogin>('/session', {
        email,
        password,
      });

      if (data.token && data.expiresIn && data.data) {
        // set the user's token
        setUserToken(data.token);

        //stores the expiration date of the token
        setExpirationToken(data.expiresIn);

        //stores user data
        setUserData(data.data);
        //stores user data
        setUser(data.data);

        api.defaults.headers.Authorization = `Bearer ${data.token}`;

        setAuthenticated(true);

        history.push('/dashboard');
      }
    } catch (error) {
      let message;
      if (!error.data)
        message = 'Erro de conexão, entre em contato com o suporte ou tente mais tarde.';
      else message = error.data.message;

      return message;
    }
  };

  const handleLogout = () => {
    setAuthenticated(false);

    removeUserToken();
    removeExpirationToken();
    removeUserData();

    api.defaults.headers.Authorization = undefined;

    history.push('/');
  };

  return { authenticated, loading, handleLogin, handleLogout, user };
}
