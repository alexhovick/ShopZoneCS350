import { Link } from 'react-router-dom';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const MiniProductCard = ({ item, i }) => {
  const starval = parseFloat(item?.product_star_rating);

  const renderStarRating = (rating) => {
    const maxStars = 5;
    const fullStars = Math.floor(rating);
    const emptyStars = maxStars - fullStars;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<BsStarFill key={`star-${i}`} />);
    }

    if (rating % 1 >= 0.5) {
      stars.push(<BsStarFill key="half-star" />);
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

  const maxTitleLength = 50;

  const truncatedTitle =
    item?.product_title.length > maxTitleLength
      ? item?.product_title.substring(0, maxTitleLength) + '...'
      : item?.product_title;

    const decodeHTMLEntities = (text) => {
      const parser = new DOMParser();
      const decodedString = parser.parseFromString(text, 'text/html').body.textContent;
      return decodedString;
    }
    const decodedTitle = decodeHTMLEntities(truncatedTitle);
  return (
    <Link to={`/Product/${item?.asin}?`} className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl">
      <div className='flex flex-col w-[330px] h-[400px] p-4 bg-white/10 bg-opacity-80 backdrop-blur-sm animate-slideleft rounded-lg cursor-pointer items-center'>

        <div className='relative w-full h-60 group'>
          <div className={' flex absolute inset-0 justify-center bg-black bg-opacity-40 group-hover:flex hover:bg-opacity-60'}>
            {/* Add content here */}
            {/* <p className='text-white text-bold'>{item.product_title} {item.product_price}</p> */}
            
          </div>
          <img className='object-contain w-full h-full 'alt="product_img" src={item?.product_photo} />
          <div className='mt-4 flex flex-col '>
            <p className='text-white'> {decodedTitle} </p>
            <p className='text-white items-center flex'>{renderStarRating(item?.product_star_rating)} &nbsp; {item?.product_num_ratings}</p>
            <div className="my-2"></div>
            <p className='text-white items-center flex text-2xl'> <span className="italic text-yellow-600">{item?.product_price}</span></p>
          </div>
          
        </div>
      </div>
    </Link>
  );
};

export default MiniProductCard;
