import React from 'react';
import searchScreenshot from '../assets/shopzoneSearchExample.png'; // Replace with your image path
import { Link } from 'react-router-dom';

const SearchHowTo = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex justify-center items-center mt-5 rounded-3xl">
      <div className="bg-gray-800 rounded-lg p-8 w-full md:w-[80%] lg:w-[60%] xl:w-[50%] mt-5 mb-5">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">How to Use Search</h2>

        {/* Search Instructions */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Search Feature Instructions:</h3>
          <p className="text-lg text-white">
            To search for products, use the search bar located at the top of the page. Enter the keywords or product names you are looking for and press 'Enter' or click the 'Search' button.
          </p>
        </div>

        {/* Step-by-Step Instructions */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Step-by-Step Instructions:</h3>
          <ol className="text-lg text-white list-decimal list-inside">
            <li>Locate the search bar at the top of the page.</li>
            <li>Enter keywords or product names.</li>
            <li>Press 'Enter' or click the 'Search' button.</li>
          </ol>
        </div>

        {/* Search Screenshot */}
        <div className="mb-8 flex justify-center">
          <img src={searchScreenshot} alt="Search Screenshot" className="w-full rounded-lg" />
        </div>

        {/* Search Example */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">Example:</h3>
          <p className="text-lg text-white">
            For example, searching for "shoes" will display a list of available shoe products.
          </p>
        </div>

        {/* About Link */}
        <div className='flex justify-center items-center'>
          <Link to="/about" className='text-center bg-blue-500 hover:bg-blue-600 text-white text-xl font-bold py-4 px-10 rounded-full'>
            About
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchHowTo;
