import { useParams } from "react-router-dom";
import {Error, Loader, ProductCard, } from '../components';

import { useGetProductSearchQuery } from "../redux/services/AmazonApi";

const Search = () => {
  const {searchTerm} = useParams();
  console.log (searchTerm);
  const {data, isFetching, error} = useGetProductSearchQuery(searchTerm);
  //const isFetching = true;
  if (isFetching) {
    return (
      <div className="fixed top-1/4 left-1/2 transform -translate-x-1/2">
        <Loader className="" title={`Searching ${searchTerm}...`} />
      </div>
    );
  }


  if (error) return <Error />;

  console.log(data);
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">Showing results for <span className="font-black">{searchTerm}</span></h2>

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

export default Search;