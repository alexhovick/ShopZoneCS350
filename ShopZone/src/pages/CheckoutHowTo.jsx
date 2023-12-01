import React from 'react';
import { Link } from 'react-router-dom';
import checkoutImage from '../assets/shopzoneCheckoutExample.png'; // Replace with your image path

const CheckoutHowTo = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center mt-5 rounded-3xl">
      <div className="bg-gray-800 rounded-lg p-8 w-full md:w-[80%] lg:w-[60%] xl:w-[50%] mt-5 mb-5">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Checkout Instructions</h2>

        {/* Checkout Process */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Checkout Process:</h3>
          <p className="text-lg text-white">
            Users can proceed to the checkout by clicking the "Checkout" button in the cart or at the end of their shopping experience.
          </p>
        </div>

        {/* Stripe Integration */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Stripe Integration:</h3>
          <p className="text-lg text-white">
            The checkout process is powered by Stripe, a secure and reliable payment processing platform.
          </p>
        </div>

        {/* Payment Information */}
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-white mb-2">Payment Information:</h3>
          <p className="text-lg text-white">
            Users will enter their payment details, including card information, to complete the purchase securely.
          </p>
        </div>

        {/* Order Confirmation */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Order Confirmation:</h3>
          <p className="text-lg text-white">
            After successful payment processing, users will receive an order confirmation and receipt via email.
          </p>
        </div>

        {/* Checkout Example Image */}
        <div className="mb-6 flex justify-center">
          <img src={checkoutImage} alt="Checkout Example" className="max-w-[80%] h-auto rounded-lg items-center" />
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

export default CheckoutHowTo;
