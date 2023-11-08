import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {BsStarFill,BsStarHalf, BsStar, BsFillCartCheckFill}  from 'react-icons/bs';
//import searchResults from '../assets/searchResults.json'

import product_details from '../assets/product_details.json'

import { useDispatch} from 'react-redux'; // Import useDispatch from react-redux
import { addToCart } from '../redux/actions/cartActions';
import { Link } from 'react-router-dom';
import { Loader, Error } from '../components';
import { useGetProductDetailsQuery, useGetProductReviewsQuery, useGetProductSearchQuery } from '../redux/services/AmazonApi';
import "./scrollbar.css"

const ProductPage = ()=> {
  const { asinToFind } = useParams();
  //const data = searchResults;
  //console.log("asinToFind: ", asinToFind);
  //const data = product_details;
  //const {data} = 
  const {data: detailsData, isFetching, error}  = useGetProductDetailsQuery(asinToFind);
  const {data: searchData} = useGetProductSearchQuery(asinToFind);
  const {data: reviews} = useGetProductReviewsQuery(asinToFind);
  const dispatch = useDispatch(); // Get the dispatch function from react-redux
  const [quantity, setQuantity] = useState(1);
  const [showReviews, setShowReviews] = useState(false);

  const handleToggleReviews = () => {
    setShowReviews(!showReviews); // Toggle the visibility of reviews
  };

  const [showAddedToCart, setShowAddedToCart] = useState(false);

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
   const product_price = product?.product_price;
   const productDetails = detailsData?.data;




  console.log("product to pass: "+product?.asin);
  console.log("product price: "+product_price);


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
    setShowAddedToCart(true);
    // Hide the pop-up after 3 seconds
    setTimeout(() => {
      setShowAddedToCart(false);
    }, 1000); // 3000 milliseconds (3 seconds)
  };

  if (!product) {
    return <div className="bg-transparent/10 p-8 rounded-lg shadow-md flex items-center justify-center text-6xl text-red-600">Product not found</div>;
  }

  const renderStarRating = (rating) => {
    const maxStars = 5;
    const isHalfStar = rating % 1 !== 0;
  
    const fullStars = Math.floor(rating);
    const emptyStars = maxStars - fullStars;
  
    const stars = [];
  
    for (let i = 0; i < fullStars; i++) {
      stars.push(<BsStarFill key={`star-${i}`} />);
    }
  
    // Render half star or change opacity if it's not a whole number
    if (isHalfStar) {
      // stars.push(<AiFillStar key="half-star" style={{ width: '50%' }} />);
      stars.push(<BsStarHalf key = "half-star"/>)
    }
  
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<BsStar key={`empty-star-${i}`} />);
    }
  
    return (
      <div className="flex items-center">
        {stars.slice(0, maxStars).map((star, index) => (
          <span key={index}>{star}</span>
        ))}
      </div>
    );
  };

  const decodeHTMLEntities = (text) => {
    const parser = new DOMParser();
    const decodedString = parser.parseFromString(text, 'text/html').body.textContent;
    return decodedString;
  }
  const decodedTitle = decodeHTMLEntities(product.product_title);

  return (
    <div className="bg-transparent/20 p-8 rounded-lg shadow-md flex  mt-4 h-[800px] overflow-y-hidden">
      <div className="mr-10 w-1/3 bg-transparent-300 flex items-center justify-center mr-4">
          <img className="object-contain" src={product.product_photo} alt={product.product_title} />
      </div>
      {/* hide-scrollbar */}
      <div className='overflow-y-auto h-full  w-2/3 '>
        <h2 className="text-4xl font-semibold mb-2 text-white text-bold flex">{decodedTitle}</h2>
        <div className="my-2"></div>
        <h2 className='text-white items-center flex text-xl'> {renderStarRating(product?.product_star_rating)} &nbsp; {product.product_num_ratings} </h2>  
        <div className="my-2"></div> 
        <h2 className='text-white items-center flex'> <span className="italic text-yellow-500 text-4xl"> {product_price} </span> </h2>
        <p className="text-white mb-4">____________________________________________________________________________________</p>   
        <p className="text-white mb-4">{productDetails.product_description}</p>
        <p className="text-xl font-semibold text-blue-500 mb-2">{product.product_description}</p>
         <div className='flex justify-end items-center'>
          </div>
          <div className="text-white mr-4">
            <h2 className="text-xl font-bold mb-2 text-white" role="about product">About This Product:</h2>
            {productDetails?.about_product.map((item, index) => (
              <p key={index} className="italic">
                {item}
              </p>
            ))}
          </div>
          &nbsp;
          <div className="text-white flex mr-4">
  {productDetails?.product_information && Object.keys(productDetails.product_information).length > 0 ? (
    <>
      <div className="w-1/2 mr-1">
        {Object.entries(productDetails.product_information).slice(0, Math.ceil(Object.keys(productDetails.product_information).length / 2)).map(([key, value]) => (
          <div key={key} className="product-info-item">
            <span className="font-bold">{key}: </span>
            <span className="italic">{value}</span>
          </div>
        ))}
      </div>
      <div className="w-1/2 ml-1 mr-4">
        {Object.entries(productDetails.product_information).slice(Math.ceil(Object.keys(productDetails.product_information).length / 2)).map(([key, value]) => (
          <div key={key} className="product-info-item">
            <span className="font-bold">{key}: </span>
            <span className="italic">{value}</span>
          </div>
        ))}
      </div>
    </>
  ) : (
    <p className='text-2xl'><i>No Product Information Available </i></p>
  )}
</div>

          <div className='flex items-center justify-end mr-4'>
            <label className=" flex block mb-2 text-white text-bold text-xl">
                <div className="w-32  text-white font-bold rounded-lg p-2">
                  <div className="flex items-center justify-end ">
                  Quantity:&nbsp;
                    <button onClick={decrementQuantity} className="px-2 py-1 border border-gray-400 border-r-0 rounded-l" role="-">
                      -
                    </button>
                    <span className="px-2 py-1 border border-gray-400 border-l-0 border-r-0" role="quantity">{quantity}</span>
                    <button onClick={incrementQuantity} className="px-2 py-1 border border-gray-400 border-l-0 rounded-r">
                      +
                    </button>
                    &nbsp;
                    <Link to="">
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
          <div className='flex flex-row items-end justify-end mr-20 relative mt-4 mb-4 mr'>
            {showAddedToCart && (
              <div className="text-lg font-bold text-green-600 flex items-center absolute right-0 ">
                <BsFillCartCheckFill/> &nbsp; Added to Cart
              </div>
            )}
          </div>
          <div className='bg-transparent flex flex-col mr-4'>
  <button onClick={handleToggleReviews} className="bg-blue-600 text-white ml-4 px-4 py-2 rounded-lg hover:bg-blue-700">
    {showReviews ? 'Hide Reviews' : 'Show Reviews'}
  </button>
  {showReviews && (
    <div className="mt-4">
      <h2 className="text-2xl text-white font-bold">Product Reviews:</h2>
      {reviews?.data?.reviews.length > 0 ? (
        reviews?.data?.reviews.map((review, index) => (
          <div key={review.review_id} className="text-white my-2 flex flex-wrap rounded-xl p-2 bg-gradient-to-r from-[#005f73] to-[#0a9396]">
            <div className="w-1/2">
              <div className='flex flex-row items-center'>
                <p>
                  {review.review_author_avatar && (
                    <img className="rounded-full w-8" src={review.review_author_avatar} alt={`Avatar of ${review.review_author}`} />
                  )}
                </p>
                <p> &nbsp; {review.review_author}</p>
              </div>
              <p className='flex flex-row'> {renderStarRating(review.review_star_rating)} &nbsp; <strong>{review.review_title}</strong></p>
              <p>{review.review_date}</p>
            </div>
            <div className="w-1/2">
              <br/>
              <p><strong>Verified Purchase:</strong> {review.is_verified_purchase ? 'Yes' : 'No'}</p>
              <p><strong>Review Link:</strong> <a href={review.review_link} target="_blank" rel="noopener noreferrer" className="text-white hover:underline hover:text-blue-900">Read on Amazon</a></p>
              <br/>
            </div>
            <p> <i>{review.review_comment}</i></p>
          </div>
        ))
      ) : (
        <div className='no-reviews'>
            <br></br>
            <p className='text-xl text-white'>  &nbsp;  &nbsp; <i>No Product Reviews</i></p>
          </div>
      )}
    </div>
  )}
</div>


      </div>
    </div>
  );
}

export default ProductPage;