import { ProductCard } from "../components";
import { genres } from "../assets/constants";
import {Loader, Error} from '../components';
import searchResults from '../assets/searchResults.json'

import { useDispatch, useSelector } from "react-redux";
import { selectGenreListId } from "../redux/features/searchSlice";

//import { useGetProductOffersQuery } from "../redux/services/AmazonAPI";
import { useGetProductSearchQuery, useGetProductsByGenreQuery } from "../redux/services/AmazonAPI";


const Home = () =>{
  const searchTerm = "iPhone";
   const dispatch = useDispatch();
   const {genreListId} = useSelector((state) => state.search);
   //const genreListId = 'aps';
   console.log("genrelistid: ", genreListId);
   //const {data, isFetching, error} = useGetProductsByGenreQuery(searchTerm, genreListId);
   //if(isFetching) return <Loader title="Loading Products"/>;

   //if (error) return <Error/>
  const data = searchResults;
  console.log("data: "+data);
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-column mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-center">Discover Products: {searchTerm}</h2>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          value={genreListId || 'aps'}
          className="bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5"
        >
          {genres.map((genre) => <option key= {genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>
      {/* <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.data?.products?.map((item, i) => (
          <ProductCard
            key={item.asin} // Use 'asin' as the unique key
            item={item}
            i={i}
          />
        ))}
      </div> */}
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
      {data?.data?.products?.map((item, i) => (
    <div key={item.asin} className="flex justify-center">
      <ProductCard item={item} i={i} />
          </div>
        ))}
      </div>
    </div>
  );
};









// const Home = () => (
  
//   <div >
//     <h1 className="font-bold text-3xl text-white text-center mb-6 underline">Featured Products</h1>
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//       {products.map((product) => (
//         <ProductCard key={product.id} product={product}/>
//       ))}
//     </div>
//     Home Page
//   </div>

// );
 

export default Home;