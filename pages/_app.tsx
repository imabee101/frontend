// pages/_app.tsx
import type { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { isLoggedIn } from '../utils/auth';

function MyApp({ Component, pageProps }: AppProps) {
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

  return (
    <>
      <Navbar loggedIn={loggedIn} />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
