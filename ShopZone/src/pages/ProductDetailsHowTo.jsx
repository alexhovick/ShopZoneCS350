import React from 'react';
import productImage from '../assets/shopzoneProductDetailsExample.png'; // Replace with your image path
import { Link } from 'react-router-dom';

const ProductDetailsHowTo = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center">
      <div className="bg-gray-800 rounded-lg p-8 w-full md:w-[80%] lg:w-[60%] xl:w-[50%]">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Product Details Feature Instructions</h2>

        {/* View Product Information */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">View Product Information:</h3>
          <img src={productImage} alt="Product" className="w-full rounded-lg mb-4" />
          <p className="text-lg text-white">
            Upon accessing the Product Details page, users can view specific information about the selected product, such as the product name and price.
            An image representing the product will be displayed, allowing users to visualize the item they're interested in purchasing.
          </p>
        </div>

        {/* Show/Hide Product Reviews */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Show/Hide Product Reviews:</h3>
          <p className="text-lg text-white">
            To access product reviews, users can click the "Show Reviews" button. This button toggles the visibility of the product's reviews.
            If reviews are currently hidden, clicking "Show Reviews" will display existing reviews for the product. Clicking the button again will hide the reviews.
          </p>
        </div>

        {/* Quantity Adjustment */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Quantity Adjustment:</h3>
          <p className="text-lg text-white">
            Users can adjust the quantity of the product they want to purchase using the quantity control buttons provided.
            Clicking the '-' button decreases the quantity by one, while clicking the '+' button increases it. The minimum quantity is one.
          </p>
        </div>

        {/* Add Item to Cart */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Add Item to Cart:</h3>
          <p className="text-lg text-white">
            To add the selected quantity of the product to their cart, users can click the "Add to Cart" button.
            Upon clicking the button, the specified quantity of the item will be added to the user's shopping cart.
          </p>
        </div>

        {/* About Link */}
        <div className='flex justify-center items-center'>
          <Link to="/about" className='text-center bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold py-4 px-7 rounded-3xl'>
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsHowTo;

