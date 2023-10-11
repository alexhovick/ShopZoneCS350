import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import {AiFillStar} from 'react-icons/ai'
const ProductCard = ({ item, i }) => {
  return (
    <Link to={`/Product/${item?.asin}?`} className="group block rounded-lg overflow-hidden shadow-md hover:shadow-xl">
      <div className='flex flex-col w-[350px] h-[450px] p-4 bg-white/10 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer'>

        <div className='relative w-full h-60 group'>
          <div className={' flex absolute inset-0 justify-center bg-black bg-opacity-40 group-hover:flex hover:bg-opacity-60'}>
            {/* Add content here */}
            {/* <p className='text-white text-bold'>{item.product_title} {item.product_price}</p> */}
            
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


export default ProductCard;

