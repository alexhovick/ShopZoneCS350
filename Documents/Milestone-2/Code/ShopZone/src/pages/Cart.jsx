// src/pages/Cart.jsx

import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCartItemQuantity, removeCartItem } from '../redux/actions/cartActions';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const [successMessage, setSuccessMessage] = useState(null);

  const handleQuantityChange = (item, newQuantity) => {
    dispatch(updateCartItemQuantity({ id: item.id, quantity: newQuantity }));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeCartItem(item.id));
    setSuccessMessage('Item removed successfully');
    setTimeout(() => {
      setSuccessMessage(null);
    }, 2000); // Clear the message after 2 seconds    
  };

  const cartTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="bg-gray-400 p-8 rounded-lg shadow-md flex flex-col items-center justify-center">
      <h2 className="font-bold text-4xl mb-6 underline" >Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="bg-gray-200 p-8 rounded-lg shadow-md flex flex-col items-end justify-end">
          <div className="bg-gray-100 p-8 rounded-lg shadow-xl outflex flex-col items-center justify-center">
            <p className = "font-bold text-lg underline">Cart Total: ${cartTotal.toFixed(2)}</p>
            <Link to='/Checkout'>
              <p className="bg-blue-600 text-gray-50 font-bold shadow-md rounded-md px-2 py-2 hover:bg-blue-700 m-2">Go to checkout</p>
            </Link>
          </div>
          {cart.map((item) => (
            <div key={item.id} className="felx items-center justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 h-auto w-auto">
              <div classname = "">
              <ProductCard product={item} showAddToCart={false} classname = ""/> {/* Pass product data to ProductCard */}
              </div>
              <div className="justify-between items-center">
                <label>
                  Quantity:
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => handleQuantityChange(item, parseInt(e.target.value))}
                    min="1"
                    className = "w-12"
                  />
                </label>
                <button
                  onClick={() => handleRemoveItem(item)}
                  className=" text-blue-600 rounded-md px-2 py-2 hover:bg-blue-100"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Cart;
