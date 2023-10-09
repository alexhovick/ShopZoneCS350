// src/components/Header.jsx

import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';


import SZ_Logo from '../assets/SZ_Logo.png';

import { AiOutlineShoppingCart } from 'react-icons/ai';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo - Takes you to the home page */}
        <Link to="/" className="text-2xl font-bold hover:border-none mx-4 ">
          <img  className="h-20 "alt="SZ_Logo" src={SZ_Logo}/>
        </Link>

        {/* Search Bar */}
{/*         <SearchBar/> */}
         <div className="flex-1 mx-4">
          <input
            type="text"
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-md text-black"
          />
        </div> 

        {/* Login Button - Takes you to the login page */}
        <Link to="/login" className="text-xl hover:border-none">
        <p className='font-bold'>Hello, sign in</p>
        </Link>

        {/* Cart Button - Takes you to the cart page */}
        <Link to="/cart" className="ml-4 hover:border-none flex items-center">
          <AiOutlineShoppingCart className='h-12 w-12 '/>
          <p className='font-bold'>&nbsp;Cart</p>
        </Link>
      </div>
    </header>
  );
}


export default Header;
