import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCartItemQuantity, removeCartItem, addToCart } from '../redux/actions/cartActions'; // Import addToCart action
import ProductCard from '../components/ProductCard';
import  MiniProductCard  from '../components/MiniProductCard';
import { Link } from 'react-router-dom';
import { BsTrash3 } from "react-icons/bs";
import PayButton from '../components/PayButton';

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

  const subtotal = cartData.reduce((total, item) => {
    const price = parseFloat(item.product.product_price.slice(1));
    return total + price * item.quantity;
  }, 0);
  return (
    <div className="bg-black p-8 rounded-lg h-auto w-auto shadow-md flex flex-col items-center justify-center mt-4">
      <h2 className="font-bold text-4xl mb-6 text-white">Shopping Cart</h2>
      {cartData.length === 0 ? (
        <p className='text-white'>Your cart is empty.</p>
      ) : (
        <div className="bg-black  text-white p-8 rounded-lg  flex flex-col items-end justify-end">
        
          {cartData.map((item) => (
                <div
                  key={item.product.asin}
                  className="flex items-center justify-center w-[1400px] gap-4 mb-10 h-auto w-auto bg-transparent/10 rounded-lg p-4"
                >
                  {/* <div className=" flex flex-row w-full"> */}
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className='w-1/4'>
                    <MiniProductCard item={item.product} showAddToCart={false} classname="" />
                    </div>
        
                    <div className="flex items-center justify-center text-white text-xl font-bold ml-4 w-3/4">
                        Quantity &nbsp; 
                        <button onClick={() => handleQuantityChange(item, item.quantity - 1)} className="px-2 py-1 border border-gray-400 border-r-0 rounded-l" role="-">
                          -
                        </button>
                        <span className="px-2 py-1 border border-gray-400 border-l-0 border-r-0" role="quantity">{item.quantity}</span>
                        <button onClick={() => handleQuantityChange(item, item.quantity + 1)} className="px-2 py-1 border border-gray-400 border-l-0 rounded-r">
                          +
                        </button>
                        <button
                          onClick={() => handleRemoveItem(item)}
                          className="text-white text-2xl rounded-md px-2 py-2 hover:bg-blue-400 ml-20"
                        >
                        <BsTrash3/>
                        </button>
                        <span className="text-white text-xl font-bold px-2 py-1 ml-40"> Total: ${(parseFloat(item.product.product_price.slice(1)) * item.quantity).toFixed(2)}</span>
                    </div>
                  </div>
                  
                  {console.log('Item to change quantity:', item)}
                  
                  
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
      <div className="bg-black text-white p-8 rounded-lg shadow-xl outflex flex-col items-center justify-center">
        
            {/* <Link to="/Checkout">
              <p className="bg-blue-600 text-gray-50 font-bold shadow-md rounded-md px-2 py-2 hover:bg-blue-700 m-2">
                Go to checkout
              </p>
            </Link> */}
            <p className="bg-blue-600 text-gray-50 font-bold shadow-md rounded-md px-2 py-2 hover:bg-blue-700 m-2">
                <PayButton
                  cartItems = {cartData}
                >
                  Go to checkout
                </PayButton>
            </p>

          </div>
      <div>
      <span className="text-white">Subtotal: ${subtotal.toFixed(2)}</span>
      </div>
    </div>
    
  );
}

export default Cart;