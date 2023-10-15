import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {AiFillStar} from 'react-icons/ai'
//import searchResults from '../assets/searchResults.json'

import product_details from '../assets/product_details.json'

import { useDispatch} from 'react-redux'; // Import useDispatch from react-redux
import { addToCart } from '../redux/actions/cartActions';
import { Link } from 'react-router-dom';
import { Loader, Error } from '../components';
import { useGetProductDetailsQuery, useGetProductSearchQuery } from '../redux/services/AmazonApi';

const ProductPage = ()=> {
  const { asinToFind } = useParams();
  //const data = searchResults;
  //console.log("asinToFind: ", asinToFind);
  //const data = product_details;
  //const {data} = 
  const {data: detailsData, isFetching, error}  = useGetProductDetailsQuery(asinToFind);
  const {data: searchData} = useGetProductSearchQuery(asinToFind);
  const dispatch = useDispatch(); // Get the dispatch function from react-redux
  const [quantity, setQuantity] = useState(1);
  if (isFetching) {
    console.log("fetching")
    return <Loader/>; // Display a loading indicator
  }

  // Check if there is an error
  if (error) {
    console.log("error");
    return <Error/>; // Display an error message
  }

  // Check if 'data' is truthy (not null or undefined) before displaying and logging it
  if (detailsData && searchData) {
    console.log("details data: ", detailsData);
    console.log("search data: ", searchData);
  }


  console.log("fetched data:", detailsData?.data?.asin);
  //const asinToFind = 'B07ZPKN6YR';
  //const product = products.find((p) => p.id === parseInt(id));
  //const product = SearchResults.find((item) => item.data.products.asin === parseInt(asin));
   const product = searchData?.data?.products.find((item) => item.asin === asinToFind);
   //const product = searchData?.data?.products;
   const productDetails = detailsData?.data;


  console.log("product to pass: "+product.asin);


  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleQuantityChange = (e) => {
    const newQuantity = parseInt(e.target.value);
    if (!isNaN(newQuantity) && newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };



  const handleAddToCart = () => {
    // Dispatch the addToCart action with the product and quantity
    dispatch(addToCart({ product, quantity }));
    // Optionally, you can display a confirmation message here.\
    console.log(`Added to Cart: ${quantity} x ${product.asin}`);
  };

  if (!product) {
    return <div className="bg-black p-8 rounded-lg shadow-md flex items-center justify-center text-6xl text-red-600">Product not found</div>;
  }

  return (
    <div className="bg-black p-8 rounded-lg shadow-md flex items-center mt-4">
        <div className="mr-10 w-2/3 bg-transparent-300 flex items-center justify-center">
          <img className="object-contain" src={product.product_photo} alt={product.product_title} />
      </div>
      <div>
        <h2 className="text-4xl font-semibold mb-2 text-white text-bold flex">{product.product_title}</h2>
        <h2 className='text-white items-center flex'> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>  &nbsp; {product.product_num_ratings} </h2>   
        <p className="text-white mb-4">{productDetails.product_description}</p>
        <p className="text-xl font-semibold text-blue-500 mb-2">{product.product_description}</p>
         <div className='flex justify-end items-center'>
          </div>
          <div className="text-white">
            <h2 className="text-xl font-bold mb-2 text-white">About This Product:</h2>
            {productDetails?.about_product.map((item, index) => (
              <p key={index} className="italic">
                {item}
              </p>
            ))}
          </div>
          &nbsp;
          <div className="text-white flex">   {/* divide product information into two columns:*/}
            <div className="w-1/2 mr-1"> {/* LEFT */}
              {Object.entries(productDetails?.product_information).slice(0, Math.ceil(Object.keys(productDetails?.product_information).length / 2)).map(([key, value]) => (
                <div key={key} className="product-info-item">
                  <span className="font-bold">{key}: </span>
                  <span className="italic">{value}</span>
                </div>
              ))}
            </div>
            <div className="w-1/2 ml-1">  {/* RIGHT */}
                {Object.entries(productDetails?.product_information).slice(Math.ceil(Object.keys(productDetails?.product_information).length / 2)).map(([key, value]) => (
                  <div key={key} className="product-info-item">
                    <span className="font-bold">{key}: </span>
                    <span className="italic">{value}</span>
                  </div>
                ))}
            </div>
          </div>
          <div className='flex items-center justify-end '>
            <label className="block mb-2 text-white text-bold text-xl">
                <div className="w-32 bg-black text-white font-bold rounded-lg p-2">
                  <div className="flex items-center justify-end ">
                  Quantity:&nbsp;
                    <button onClick={decrementQuantity} className="px-2 py-1 border border-gray-400 border-r-0 rounded-l">
                      -
                    </button>
                    <span className="px-2 py-1 border border-gray-400 border-l-0 border-r-0">{quantity}</span>
                    <button onClick={incrementQuantity} className="px-2 py-1 border border-gray-400 border-l-0 rounded-r">
                      +
                    </button>
                    &nbsp;
                    <Link to={'/Cart'}>
                      <button
                        onClick={handleAddToCart}
                        className="bg-blue-600 text-white w-56 rounded-full px-4 py-2 hover:bg-blue-700"
                      >
                        Add to Cart
                      </button>
                    </Link >
            
                  </div>
                </div>
             </label>
          </div>
      </div>
    </div>
  );
}

export default ProductPage;