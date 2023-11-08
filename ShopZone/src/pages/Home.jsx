import { ProductCard } from "../components";
import { genres } from "../assets/constants";
import {Loader, Error} from '../components';
import searchResults from '../assets/searchResults.json'
import phone_search from '../assets/phone_search.json'

import { useDispatch, useSelector } from "react-redux";
import { selectGenreListId } from "../redux/features/searchSlice";

//import { useGetProductOffersQuery } from "../redux/services/AmazonAPI";
import { useGetProductSearchQuery, useGetProductsByGenreQuery } from "../redux/services/AmazonApi";


const Home = () =>{
   const dispatch = useDispatch();
   const {genreListId, searchTerm} = useSelector((state) => state.search);
   //const genreListId = 'aps';
  //  let searchTerm = '';
  //  if (genreListId === 'aps'){
  //   searchTerm = 'halloween'
  //  }
   console.log("genrelistid: ", genreListId);
   //const {data, isFetching, error} = useGetProductsByGenreQuery(searchTerm, genreListId);
   const { data, isFetching, error } = useGetProductsByGenreQuery({ searchTerm, genreListId });

   if(isFetching) return <Loader title="Loading Products..."/>;

   if (error) return <Error/>
  //const data = phone_search;
  //console.log("data: "+data.data.products);
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-column mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-center">Discover Products</h2>
        <select
          onChange={(e) => dispatch(selectGenreListId(e.target.value))}
          //value={genreListId || 'aps'}
          value={genreListId}
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
      <div className="flex flex-wrap  justify-center gap-8">
      {/* <div className="flex flex-wrap sm:justify-start justify-center gap-8"> */}
      {data?.data?.products?.map((item, i) => (
      <div key={item.asin} className="flex justify-center">
        <ProductCard item={item} i={i} />
      </div>
      ))}
      </div>
    </div>
  );
};


export default Home;