import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector, useDispatch } from 'react-redux/';

import SZ_Logo from '../assets/SZ_Logo.png';
import SearchBar from './SearchBar';
import Logout from './Logout';
import { logoutUser } from '../redux/slices/authSlice';

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();


  const formattedUserName = auth._id ? (auth.name.charAt(0).toUpperCase() + auth.name.slice(1).toLowerCase()) : '';


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
          {/* <Link
            to={auth._id ? "/logout" : "/register"} // Change the route based on authentication status
            className="text-xl hover:no-underline font-bold text-white"
          >
            {auth._id ? `Hello, ${auth.name} ` : "Hello, Sign In"}
            {auth._id ? "Logout?" : "Hello, Sign In"}
          </Link> */}
          {auth._id ? <p className='font-bold text-white text-xl mr-[-30px]'>Hello, {formattedUserName}  |</p> : ""}
          {auth._id ? (
            <Link className='font-bold text-white text-xl hover:text-cyan-500 hover:underline' to="/login" onClick={() => dispatch(logoutUser(null))}>
              Log out?
            </Link>
          ) : (
            <div className='flex flex-row'>
              <Link to="/login" className="text-xl hover:underline hover:text-cyan-500 font-bold text-white">Login</Link>
              <p className='font-bold text-white text-xl'>&nbsp; / &nbsp;</p>
              <Link to="/register" className="text-xl hover:underline hover:text-yellow-500  font-bold text-white">Register</Link>
            </div>
          )}


          <Link to="/orders" className="text-xl hover:no-underline font-bold">
            Orders 
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

