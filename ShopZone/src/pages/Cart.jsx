import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCartItemQuantity, removeCartItem, addToCart } from '../redux/actions/cartActions'; // Import addToCart action
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

function Cart() {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (item, newQuantity) => {
    dispatch(updateCartItemQuantity({ asin: item.product.asin, quantity: newQuantity }));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeCartItem(item.product.asin));
  };

  const handleAddToCart = (product, quantity) => {
    dispatch(addToCart({ asin: product.asin, quantity }));
  };
  console.log('Cart Data:', cartData);
  return (
    <div className="bg-black p-8 rounded-lg h-auto w-aut shadow-md flex flex-col items-center justify-center mt-4">
      <h2 className="font-bold text-4xl mb-6 text-white">Shopping Cart</h2>
      {cartData.length === 0 ? (
        <p className='text-white'>Your cart is empty.</p>
      ) : (
        <div className="bg-black text-white p-8 rounded-lg shadow-md flex flex-col items-end justify-end">
          <div className="bg-black text-white p-8 rounded-lg shadow-xl outflex flex-col items-center justify-center">
            <Link to="/Checkout">
              <p className="bg-blue-600 text-gray-50 font-bold shadow-md rounded-md px-2 py-2 hover:bg-blue-700 m-2">
                Go to checkout
              </p>
            </Link>
          </div>
          {cartData.map((item) => (
            <div
              key={item.product.asin}
              className="flex items-center justify-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 h-auto w-auto"
            >
              <div className="">
                <ProductCard item={item.product} showAddToCart={false} classname="" />
              </div>
              {console.log('Item to change quantity:', item)}
              <div className="flex items-center justify-center text-white">
                Quantity &nbsp; &nbsp;
                <button onClick={() => handleQuantityChange(item, item.quantity - 1)} className="px-2 py-1 border border-gray-400 border-r-0 rounded-l" role="-">
                  -
                </button>
                <span className="px-2 py-1 border border-gray-400 border-l-0 border-r-0" role="quantity">{item.quantity}</span>
                <button onClick={() => handleQuantityChange(item, item.quantity + 1)} className="px-2 py-1 border border-gray-400 border-l-0 rounded-r">
                  +
                </button>
                <button
                  onClick={() => handleRemoveItem(item)}
                  className="text-blue-600 rounded-md px-2 py-2 hover:bg-blue-100"
                >
                  Delete
                </button>
              </div>
              {console.log('Item ASIN:', item.product.asin)}
            </div>
          ))}
        </div>
      )}
      {/* Display a button to add a new product */}
      <Link to='/'>
      <button
        className="bg-blue-600 text-white font-bold shadow-md rounded-md p-3 hover:bg-blue-700 m-2"
      >
        Back to Store
      </button>
      </Link>
    </div>
  );
}

export default Cart;