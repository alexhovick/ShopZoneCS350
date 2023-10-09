// src/components/Header.jsx

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

import SZ_Logo from '../assets/SZ_Logo.png';

import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo - Takes you to the home page */}
        <Link to="/" className="text-2xl font-bold hover:border-none mx-4">
          <img className="h-20" alt="SZ_Logo" src={SZ_Logo} />
        </Link>

        {/* Search Bar */}
        <SearchBar/>
        {/* <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-md text-black"
          />
        </div> */}

        {/* Login Button - Takes you to the login page */}
        <Link to="/login" className="text-xl hover:border-none">
        <p className='font-bold'>Hello, sign in</p>
        </Link>

          <Link to="/cart" className="hover:animate-slidedown flex items-center">
            <AiOutlineShoppingCart className='h-12 w-12' />
            <p className='font-bold '>Cart</p>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

