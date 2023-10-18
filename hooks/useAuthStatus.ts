import { useEffect, useState } from 'react';
import { isLoggedIn } from '../utils/auth';

export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        const status = await isLoggedIn(token);
        setLoggedIn(status);
      }
    };
    checkLoginStatus();
  }, []);

  return loggedIn;
};
