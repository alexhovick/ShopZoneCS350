import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../assets/products';
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import { addToCart } from '../redux/actions/cartActions';
import { Link } from 'react-router-dom';

function ProductPage() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch(); // Get the dispatch function from react-redux

  const handleAddToCart = () => {
    // Dispatch the addToCart action with the product and quantity
    dispatch(addToCart({ ...product, quantity }));
    // Optionally, you can display a confirmation message here.
  };

  if (!product) {
    return <div className="bg-gray-200 p-8 rounded-lg shadow-md flex items-center justify-center text-6xl text-red-600">Product not found</div>;
  }

  return (
    <div className="bg-gray-200 p-8 rounded-lg shadow-md flex items-center justify-center">
      <div className="mr-10 w-auto h-auto bg-gray-300">
        <img src={product.image} alt={product.name} className="" />
      </div>
      <div>
        <h2 className="text-6xl font-semibold mb-2 ">{product.name}</h2>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <p className="text-xl font-semibold text-blue-600 mb-2">${product.price.toFixed(2)}</p>
        <label className="block mb-2">
          Quantity:
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
            min="1"
            className="border border-gray-400 rounded-md p-1 w-16 text-center"
          />
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