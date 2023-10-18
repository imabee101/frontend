import { Disclosure } from '@headlessui/react';

type NavbarProps = {
  loggedIn: boolean;
};

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Login', href: '/login', current: false, requireLoggedOut: true },
  { name: 'Signup', href: '/signup', current: false, requireLoggedOut: true },
  { name: 'Logout', href: '/logout', current: false, requireLoggedIn: true }
];

const Navbar = ({ loggedIn }: NavbarProps) => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  (!item.requireLoggedOut || !loggedIn) && (!item.requireLoggedIn || loggedIn) && (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
  );
};

export default Navbar;
