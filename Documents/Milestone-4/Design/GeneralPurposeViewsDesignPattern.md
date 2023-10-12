## Product Card Design Pattern:

**Design Pattern Name:** Product Card View Pattern

**Intent:** This design pattern is used to create a reusable component for rendering product cards in various views, such as product lists and detail pages.

**Components:**

1. **ProductCard Component:**
   - This component is responsible for rendering a product card.
   - It accepts a `product` object as a prop to populate the card with product-specific information.
   - The card contains elements for displaying the product image, title, price, and star rating.

   ```jsx
   import { Link } from 'react-router-dom';
   import {AiFillStar} from 'react-icons/ai'

   const ProductCard = ({ item }) => {
     return (
       <Link to={`/Product/${item?.asin}?`} className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl">
         <div className='flex flex-col w-[350px] h-[450px] p-4 bg-white/10 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>
           <div className='relative w-full h-60 group'>
             <div className={' flex absolute inset-0 justify-center bg-black bg-opacity-40 group-hover:flex hover:bg-opacity-60'}>
               {/* Add content here */}
             </div>
             <img className='object-contain w-full h-full 'alt="product_img" src={item?.product_photo} />
             <div className='mt-4 flex flex-col '>
               <p className='text-white'>{item?.product_title} -  <span className="italic text-red-500">{item?.product_price}</span></p>
               <p className='text-white items-center flex'> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>  &nbsp; {item?.product_star_rating} </p>
             </div>
           </div>
         </div>
       </Link>
     );
   };
   ```

**Usage:**
- To use this pattern, simply import and use the `ProductCard` component in your application where you need to display product cards.
- Provide the `item` prop with the product data you want to display.
- You can use this component in both product list views and product detail views.

**Benefits:**
- Reusability: You can use this component to render product cards in multiple parts of your application.
- Consistency: Ensures a consistent look and feel for product cards.
- Modularization: Separates the rendering logic from the rest of your application, making it easier to maintain and update.

## Cart Design Pattern

**Design Pattern Name:** Shopping Cart View Pattern

**Intent:** This design pattern is used to create a reusable component for rendering a shopping cart view. It includes functionalities for listing items in the cart, updating item quantities, and removing items from the cart.

**Components:**

1. **Cart Component:**
   - This component represents the shopping cart view.
   - It uses Redux for managing the cart state and dispatching actions.
   - The component displays a list of items in the cart, allows updating item quantities, and provides a button to remove items from the cart.

   ```jsx
   import React from 'react';
   import { useSelector, useDispatch } from 'react-redux';
   import { updateCartItemQuantity, removeCartItem, addToCart } from '../redux/actions/cartActions';
   import ProductCard from '../components/ProductCard';
   import { Link } from 'react-router-dom';

   function Cart() {
     // Get cart data from Redux store
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
                 <div className="flex items-center justify-center text-white">
                   Quantity &nbsp; &nbsp;
                   <button onClick={() => handleQuantityChange(item, item.quantity - 1)} className="px-2 py-1 border border-gray-400 border-r-0 rounded-l">
                     -
                   </button>
                   <span className="px-2 py-1 border border-gray-400 border-l-0 border-r-0">{item.quantity}</span>
                   <button onClick={() => handleQuantityChange(item, item.quantity + 1)} className="px-2 py-1 border border-gray-400 border-l-0 rounded-r">
                     +
                   </button>
                   <button
                     onClick={() => handleRemoveItem(item)}
                     className="text-blue-600 rounded-md px-2 py-2 hover-bg-blue-100"
                   >
                     Delete
                   </button>
                 </div>
               </div>
             ))}
           </div>
         )}
         <Link to='/'>
           <button className="bg-blue-600 text-white font-bold shadow-md rounded-md p-3 hover:bg-blue-700 m-2">
             Back to Store
           </button>
         </Link>
       </div>
     );
   }

   export default Cart;
   ```

**Usage:**
- To use this pattern, simply import and use the `Cart` component in your application where you want to display the shopping cart view.
- Ensure that Redux is correctly configured and that the required actions and reducers are in place.
- This component handles the display of items in the cart, allows updating quantities, and provides navigation links.

**Benefits:**
- Reusability: You can use this component to create a shopping cart view in your application.
- Integration with Redux: Easily manage and update cart-related state using Redux actions.
- Modularization: Separates shopping cart functionality from other parts of your application, making it more maintainable and flexible.

## Product Details Design Pattern:
Certainly, here's a simple design pattern for a General Purpose View component in a React application that encompasses the List, Detail, Create, Update, and Delete functionalities. This pattern is designed for a product page that allows users to view product details, add items to a cart, and interact with the product.

**Design Pattern Name:** Product Page View Pattern

**Intent:** This design pattern is used to create a reusable component for a product page view. It includes functionalities for displaying product details, adding items to a cart, and updating quantities.

**Components:**

1. **ProductPage Component:**
   - This component represents the product page view.
   - It uses React Router to extract the ASIN (Amazon Standard Identification Number) from the URL.
   - It fetches product details and handles loading and error states.
   - The component allows users to view product details, change the quantity, add items to a cart, and navigate to the cart page.

   ```jsx
   import React, { useState } from 'react';
   import { useParams } from 'react-router-dom';
   import { AiFillStar } from 'react-icons/ai';
   import { useDispatch } from 'react-redux';
   import { addToCart } from '../redux/actions/cartActions';
   import { Link } from 'react-router-dom';
   import { Loader, Error } from '../components';
   import { useGetProductDetailsQuery, useGetProductSearchQuery } from '../redux/services/AmazonApi';

   function ProductPage() {
     const { asinToFind } = useParams();
     const { data: detailsData, isFetching, error } = useGetProductDetailsQuery(asinToFind);
     const { data: searchData } = useGetProductSearchQuery(asinToFind);
     const dispatch = useDispatch();
     const [quantity, setQuantity] = useState(1);

     if (isFetching) {
       return <Loader />;
     }

     if (error) {
       return <Error />;
     }

     if (detailsData && searchData) {
       console.log("details data: ", detailsData);
       console.log("search data: ", searchData);
     }

     const product = searchData.data.products.find((item) => item.asin === asinToFind);
     const productDetails = detailsData?.data;

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
       dispatch(addToCart({ product, quantity }));
       console.log(`Added to Cart: ${quantity} x ${product.asin}`);
     };

     if (!product) {
       return <div className="bg-black p-8 rounded-lg shadow-md flex items-center justify-center text-6xl text-red-600">Product not found</div>;
     }

     return (
       <div className="bg-black p-8 rounded-lg shadow-md flex items-center mt-4">
         <div className="mr-10 w-2/3 bg-yellow-300 flex items-center justify-center">
           <img className="object-contain" src={product.product_photo} alt={product.product_title} />
         </div>
         <div>
           <h2 className="text-4xl font-semibold mb-2 text-white text-bold flex">{product.product_title}</h2>
           <h2 className='text-white items-center flex'> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/> <AiFillStar/>  &nbsp; {product.product_num_ratings} </h2>
           <p className="text-white mb-4">{productDetails.product_description}</p>
           <p className="text-xl font-semibold text-blue-500 mb-2">{product.product_description}</p>
           <div className='flex justify-end items-center'>
             <div className="w-32 bg-black text-white font-bold rounded-lg p-2">
               <div className="flex items-center justify-end">
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
                 </Link>
               </div>
             </div>
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
           <div className="text-white flex">
             <div className="w-1/2 mr-1">
               {Object.entries(productDetails?.product_information).slice(0, Math.ceil(Object.keys(productDetails?.product_information).length / 2)).map(([key, value]) => (
                 <div key={key}