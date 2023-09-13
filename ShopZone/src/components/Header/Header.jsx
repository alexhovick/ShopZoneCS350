// src/components/Header.jsx

import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo - Takes you to the home page */}
        <Link to="/" className="text-2xl font-bold">
          Amazon Clone
        </Link>

        {/* Search Bar */}
        <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-md"
          />
        </div>

        {/* Login Button - Takes you to the login page */}
        <Link to="/login" className="hover:underline">
          Login
        </Link>

        {/* Cart Button - Takes you to the cart page */}
        <Link to="/cart" className="ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4a2 2 0 012-2h12a2 2 0 012 2M4 4h16M8 12H6m0 0a2 2 0 100-4 2 2 0 000 4zm0 0a2 2 0 100-4 2 2 0 000 4zm6 0a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg>
        </Link>
      </div>
    </header>
  );
}

export default Header;
