import React from 'react';

interface NavbarProps {
  links: { href: string; label: string }[];
}

const Navbar: React.FC<NavbarProps> = ({ links }) => {
  return (
    <nav className="bg-black text-white px-4 py-2 flex items-center justify-between sm:px-6 lg:px-8">
      <a href="/" className="flex items-center">
        <img src="/images/logo.png" alt="Logo" className="w-8 h-8 mr-3" />
        <span className="font-semibold text-xl">Your Brand</span>
      </a>
      <ul className="hidden md:flex space-x-6">
        {links.map((link) => (
          <li key={link.href} className="hover:text-gray-300">
            <a href={link.href}>{link.label}</a>
          </li>
        ))}
      </ul>
      <button
        className="md:hidden rounded-md p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Navbar;
