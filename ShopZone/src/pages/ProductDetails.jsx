import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../assets/products';
import {AiFillStar} from 'react-icons/ai'
import searchResults from '../assets/searchResults.json'

import { useDispatch} from 'react-redux'; // Import useDispatch from react-redux
import { addToCart } from '../redux/actions/cartActions';
import { Link } from 'react-router-dom';

const ProductPage = ()=> {
  const { asinToFind } = useParams();
  const data = searchResults;
  console.log(asinToFind);
  //const asinToFind = 'B07ZPKN6YR';
  //const product = products.find((p) => p.id === parseInt(id));
  //const product = SearchResults.find((item) => item.data.products.asin === parseInt(asin));
  //const product = SearchResults.data.products.find((item) => item.asin === asinToFind);
  const product = data.data.products.find((p) => p.asin === asinToFind);


  console.log("product to pass: "+product.asin);

 //const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch(); // Get the dispatch function from react-redux

  const [quantity, setQuantity] = useState(1);

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
    <div className="bg-black p-8 rounded-lg shadow-md flex items-center items-left mt-4">
      <div className="mr-10 w-auto h-auto bg-black-300">
        <img src={product.product_photo} alt={product.product_title} className="" />
      </div>
      <div>
        <h2 className="text-4xl font-semibold mb-2 text-white text-bold flex">{product.product_title}</h2>
        <h2 className='text-white items-center flex'> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>  &nbsp; {product.product_num_ratings} </h2>   
        <p className="text-white mb-4">{product.product_url}</p>
        <p className="text-xl font-semibold text-blue-500 mb-2">{product.product_price}</p>
        <label className="block mb-2 text-white text-bold text-xl">
          Quantity:
          {/* <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            min="1"
            className="border border-gray-400 rounded-md p-1 w-16 text-center"
          /> */}
          <div className="w-32 bg-black text-white font-bold rounded-lg p-2">
      <div className="flex items-center justify-center">
        <button onClick={decrementQuantity} className="px-2 py-1 border border-gray-400 border-r-0 rounded-l">
          -
        </button>
        <span className="px-2 py-1 border border-gray-400 border-l-0 border-r-0">{quantity}</span>
        <button onClick={incrementQuantity} className="px-2 py-1 border border-gray-400 border-l-0 rounded-r">
          +
        </button>
      </div>
    </div>
        </label>
        <Link to={'/Cart'}>
          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white rounded-md px-4 py-2 hover:bg-blue-700"
          >
            Add to Cart
          </button>
        </Link >
      </div>
    </div>
  );
}

export default ProductPage;