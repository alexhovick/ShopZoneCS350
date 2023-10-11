import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import SZ_Logo from '../assets/SZ_Logo.png';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo - Takes you to the home page */}
        <Link to="/" className="text-2xl font-bold hover:no-underline mx-4">
          <img className="h-20" alt="SZ_Logo" src={SZ_Logo} />
        </Link>

        {/* Search Bar */}
        <SearchBar/>

        {/* Login Button - Takes you to the login page */}
        <Link to="/login" className="text-xl hover:no-underline">
          <p className="font-bold">Hello, sign in</p>
        </Link>

        {/* Login Button - Takes you to the login page */}
        <Link to="/orders" className="text-xl hover:no-underline">
          <p className="font-bold">Returns & Orders</p>
        </Link>

        {/* Cart Link */}
        <Link to="/cart" className="hover:animate-slidedown flex items-center">
          <AiOutlineShoppingCart className='h-12 w-12' />
          <p className='font-bold'>Cart</p>
        </Link>
      </div>
    </header>
  );
}

export default Header;

