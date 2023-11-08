import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import SZ_Logo from '../assets/SZ_Logo.png';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="bg-transparent/10 text-white py-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo - Takes you to the home page */}
        <Link to="/" className="text-2xl font-bold hover:no-underline mx-4">
          <img className="h-20" alt="SZ_Logo" src={SZ_Logo} />
        </Link>

        {/* Search Bar */}
        <SearchBar/>

        <div className="flex items-center space-x-10"> {/* Grouping login, orders, and cart closer */}
          {/* Login Button - Takes you to the login page */}
          <Link to="/login" className="text-xl hover:no-underline font-bold">
            Hello, sign in  
          </Link>

          {/* Login Button - Takes you to the login page */}
          <Link to="/orders" className="text-xl hover:no-underline font-bold">
            Returns & Orders 
          </Link>

          {/* Cart Link */}
          <Link to="/cart" className="hover:animate-slidedown flex items-center font-bold">
            <AiOutlineShoppingCart className='h-12 w-12' />
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;

