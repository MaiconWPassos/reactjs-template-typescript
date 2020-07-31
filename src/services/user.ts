import { fromUnixTime, isBefore } from 'date-fns';

const KEY_USER = 'YOUR_KEY_USER';
const KEY_USER_DATA = 'YOUR_KEY_USER_DATA';

const KEY_EXPIRATION = 'YOUR_KEY_EXPIRATION';

export const setUserToken = (token: string): void => localStorage.setItem(KEY_USER, token);

export const getUserToken = () => localStorage.getItem(KEY_USER);

export const removeUserToken = () => localStorage.removeItem(KEY_USER);

export const setUserData = (data: any): void =>
  localStorage.setItem(KEY_USER_DATA, JSON.stringify(data));

export const getUserData = () => JSON.parse(localStorage.getItem(KEY_USER_DATA) as string);

export const removeUserData = () => localStorage.removeItem(KEY_USER_DATA);

export const setExpirationToken = (exp: number) =>
  localStorage.setItem(KEY_EXPIRATION, String(exp));

export const removeExpirationToken = () => localStorage.removeItem(KEY_EXPIRATION);

export const expiredToken = () => {
  const exp = localStorage.getItem(KEY_EXPIRATION);

  if (exp) {
    const expiredDate = fromUnixTime(parseInt(exp, 10));

    return isBefore(expiredDate, new Date());
  }

  return false;
};
