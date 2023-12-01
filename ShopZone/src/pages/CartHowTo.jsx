import React from 'react';
import { Link } from 'react-router-dom';
import cartExample from '../assets/shopzoneCartExample.png'; // Replace with your image path

const CartHowTo = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center mt-5 rounded-3xl">
      <div className="bg-gray-800 rounded-lg p-8 w-full md:w-[80%] lg:w-[60%] xl:w-[50%] mt-5 mb-5">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Cart Instructions</h2>

        {/* Adding Items to Cart */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Adding Items to Cart:</h3>
          <p className="text-lg text-white">
            Users can add items to their cart by clicking the "Add to Cart" button for each product.
          </p>
        </div>

        {/* Changing Quantity */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Changing Quantity:</h3>
          <p className="text-lg text-white">
            The quantity of each item in the cart can be adjusted using the '+' and '-' buttons.
          </p>
        </div>

        {/* Removing Specific Item */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Removing Specific Item:</h3>
          <p className="text-lg text-white">
            Users can remove a specific item from the cart by clicking the "Remove" button for that item.
          </p>
        </div>

        {/* Clear Cart */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Clear Cart:</h3>
          <p className="text-lg text-white">
            The "Clear Cart" button allows users to remove all items from the cart at once.
          </p>
        </div>

        {/* Cart Example */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Cart Example:</h3>
          <img src={cartExample} alt="Cart Example" className="max-w-full rounded-lg" />
        </div>

        {/* About and Back to Store Links */}
        <div className='flex justify-center items-center'>
          <Link to="/about" className='text-center mt-4 bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold py-4 px-10 rounded-full mr-4'>
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CartHowTo;

