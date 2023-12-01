import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center justify-center text-center  bg-transparent/30 text-white p-20 mt-10 rounded-full'>
      <h1 className='text-4xl font-bold mb-6'>Welcome to Shopzone</h1>
      <p className='text-lg mb-8'>
        Discover a seamless shopping experience with our platform. Browse, shop, and enjoy hassle-free transactions!
      </p>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>

        <div className='p-4 bg-cyan-600 rounded-full shadow-md text-black hover:bg-cyan-500'>
          <Link to="/about/searchHowTo">
            <h2 className='text-2xl font-bold mb-4'>Search Products</h2>
            <p className='font-semibold'>
              Easily find your desired products using our powerful search functionality. Explore a vast collection of items.
            </p>
          </Link>
        </div>

        <div className='p-4 bg-cyan-600 rounded-full shadow-md text-black hover:bg-cyan-500'>
        <Link to="/about/ProductDetailsHowTo">
          <h2 className='text-2xl font-bold mb-4'>View Product Details</h2>
          <p className='font-semibold'>
            Dive deeper into product information including descriptions, specifications, and customer reviews.
          </p>
          </Link>
        </div>

        <div className='p-4 bg-cyan-600 rounded-full shadow-md text-black hover:bg-cyan-500'>
          <Link to="/about/CartHowTo">
            <h2 className='text-2xl font-bold mb-4'>Add to Cart</h2>
            <p className='font-semibold'>
              Build your cart effortlessly by adding your preferred items for a convenient shopping experience.
            </p>
          </Link>
        </div>

        <div className='p-4 bg-cyan-600 rounded-full shadow-md text-black hover:bg-cyan-500'>
          <Link to="/about/CheckoutHowTo">
            <h2 className='text-xl font-bold mb-4'>Checkout</h2>
            <p className='font-semibold'>
              Securely complete your purchases with our streamlined checkout process. Enjoy quick and easy transactions.
            </p>
          </Link>
        </div>
        


      </div>
      <div className='p-4 bg-cyan-600 rounded-full shadow-md text-black hover:bg-cyan-500 mt-5 px-4 mb-10'>
          <Link to="/about/LoginRegisterHowTo">
              <h2 className='text-xl font-bold mb-4'>Login/Register</h2>
              <p className='font-semibold'>
              Log in or create an account to access personalized shopping experiences. 
              Seamlessly manage your orders, save items to your cart, and enjoy a hassle-free checkout process.
              </p>
          </Link>
        </div>
      <div className='mt-8'>
        <Link to='/' className='bg-blue-500 hover:bg-blue-600 text-xl text-white font-bold py-4 px-6 rounded-full'>
          Get Started
        </Link>
      </div>
      
    </div>
  );
};

export default About;
