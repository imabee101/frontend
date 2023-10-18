// pages/index.tsx
import { useEffect, useState } from 'react';
import { isLoggedIn } from '../utils/auth';

const Dashboard = () => {
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
    <div>
      {/* Removed Navbar here to avoid double Navbar issue */}
      <div className="container mx-auto">
        <h1 className="text-2xl">Welcome to our website</h1>
        <p>{loggedIn ? "You are logged in." : "You are not logged in."}</p>
        <p>Promotional Material</p>
      </div>
    </div>
  );
}

export default Dashboard;
