// pages/logout.tsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { logout } from '../utils/auth';

const Logout = () => {
  const router = useRouter();

  useEffect(() => {
    logout();
    router.push('/');  // Redirect to homepage
  }, []);

  return null; // Render nothing, the page is simply used to execute the logout logic
};

export default Logout;
