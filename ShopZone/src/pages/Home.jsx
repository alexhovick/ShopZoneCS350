import { ProductCard } from "../components";
import products from "../assets/products";
import { genres } from "../assets/constants";
import {Loader, Error} from '../components';
import searchResults from '../assets/searchResults.json'

//import { useGetProductOffersQuery } from "../redux/services/AmazonAPI";
//import { useGetProductSearchQuery } from "../redux/services/AmazonAPI";

const Home = () =>{
  // const {data, isFetching, error} = useGetProductSearchQuery();
   const searchTerm = "iPhone";

   //if(isFetching) return <Loader title="Loading Products"/>;

   //if (error) return <Error/>
  const data = searchResults;
  console.log(data);
  return (
    <div className="flex flex-col">
      <div className="w-full flex justify-between items-center sm:flex-row flex-column mt-4 mb-10">
        <h2 className="font-bold text-3xl text-white text-center">Discover Products: {searchTerm}</h2>
        <select
          onChange={() => {}}
          value=""
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