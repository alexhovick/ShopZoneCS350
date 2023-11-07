import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateCartItemQuantity, removeCartItem, addToCart } from '../redux/actions/cartActions'; // Import addToCart action
import MiniProductCard from '../components/MiniProductCard';
import { Link } from 'react-router-dom';
import { BsTrash3 } from "react-icons/bs";
import PayButton from '../components/PayButton';
//import { useEffect,useState } from 'react';


function Cart() {
  const cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();


  // const [serverCartData, setServerCartData] = useState([]); // Added state to hold server cart data

  // useEffect(() => { 
  //   fetchServerCartData(); // Fetch server cart data when component mounts
  // }, []);

  // const fetchServerCartData = async () => {
  //   try {
  //     const response = await fetch('http://localhost:5500/create-checkout-session'); // Replace with your server's API endpoint
  //     if (response.ok) {
  //       const data = await response.json();
  //       setServerCartData(data);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching server cart data:', error);
  //   }
  // };


  const handleQuantityChange = (item, newQuantity) => {
    dispatch(updateCartItemQuantity({ asin: item.product.asin, quantity: newQuantity }));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeCartItem(item.product.asin));
  };

  const handleAddToCart = (product, quantity) => {
    dispatch(addToCart({ asin: product.asin, quantity }));
  };

  const subtotal = cartData.reduce((total, item) => {
    const price = parseFloat(item.product.product_price.slice(1));
    return total + price * item.quantity;
  }, 0);

  return (
    <div className="bg-black p-8 rounded-lg h-auto w-auto shadow-md flex flex-col  mt-4">
      <h2 className="font-bold text-4xl mb-6 text-white text-center">Shopping Cart</h2>
      {cartData.length === 0 ? (
        <p className='text-white text-center py-2 px-2 text-xl'>Your cart is empty.</p>
      ) : (
        <div className="bg-black text-white p-8 rounded-lg flex flex-col items-center justify-center">
          {cartData.map((item) => (
            <div
              key={item.product.asin}
              className="flex items-center justify-center w-[1400px] gap-4 mb-10 h-auto  bg-transparent/10 rounded-lg p-4"
            >
              <div className="flex flex-row items-center justify-between w-full">
                <div className='w-1/4'>
                  <MiniProductCard item={item.product} showAddToCart={false} classname="" />
                </div>
                <div className="flex items-center justify-center text-white text-xl font-bold ml-10 w-3/4">
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
                    className="text-white text-2xl rounded-md px-2 py-2 hover-bg-blue-400 ml-20"
                  >
                    <BsTrash3/>
                  </button>
                  <span className="text-white text-xl font-bold px-2 py-1 ml-40"> Total: ${(parseFloat(item.product.product_price.slice(1)) * item.quantity).toFixed(2)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex flex-row items-center justify-center ml-[675px]">
  <Link to="/">
    <button className="bg-blue-600 text-white font-bold text-xl rounded-full px-9 py-4 hover:bg-blue-700 mr-40">
      Back to Store
    </button>
  </Link>
  <span className="text-white text-2xl font-bold p-3 ml-80">Subtotal: ${subtotal.toFixed(2)}</span>
</div>

    <div className="bg-black text-white p- rounded-lg  flex flex-col items-end justify-end">
      <p className="bg-blue-600 text-white font-bold text-xl rounded-full px-12 py-4 hover:bg-blue-700 mr-[145px]">
        <PayButton cartItems={cartData}>Checkout</PayButton>
      </p>
    </div>


    </div>
    
  );
}

export default Cart;
