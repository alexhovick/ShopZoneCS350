import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {FiSearch} from 'react-icons/fi';

const SearchBar = () => {
  return (
    <form autoComplete="off" className="p-2 text-gray-400 focus-within: text-gray-600">
        <label htmlFor="search-field" className="sr-only"> Search Products</label>
        <div className="flex flex-row justify-start items-center">
            <FiSearch className="w-6 h-6 ml-4"/>
            <input
                name="search-field"
                autoComplete="off"
                id= "search-field"
                placeholder="Search Products"
                type="search"
                value=""
                onChange={()=>{}}
                className="flex bg-transparent rounded-full border-none outline-none placeholder-gray-500 text-base text-white p-4"
            />
        </div>
    </form>
  )
}

export default SearchBar;