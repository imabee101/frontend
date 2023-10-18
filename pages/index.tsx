import { useEffect, useState, Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { isLoggedIn } from '../utils/auth';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import CTA from '../components/CTA';

const navigation = [
  { name: 'Dashboard', href: '#', current: false },
  // Add more navigation items as needed
];
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const Home = () => {
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
    <div className="min-h-full">
      {/* Navigation Bar */}
      <Disclosure as="nav" className="bg-gray-800">
        {/* ... content from the example, make sure to include the navigation and userNavigation arrays */}
      </Disclosure>

      {/* Header */}
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Discover zero trust tunnels</h1>
        </div>
      </header>

      {/* Main Content */}
      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          <Hero />
          <Features />
          <Pricing />
          <CTA />
          <div className="container mx-auto mt-8">
            <h1 className="text-2xl">Welcome to our website</h1>
            <p>{loggedIn ? "You are logged in." : "You are not logged in."}</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
