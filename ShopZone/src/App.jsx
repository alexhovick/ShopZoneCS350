import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {Home, Cart, Checkout, SearchResults, ProductDetails, Login } from './pages';
import {Header} from './components/Header';

const App = () => { 
  
  return (
      <div className="relative flex">
        <Header />
        <div className="flex-1 flex flex-col bg-gradient-to-br  from-black to-[#121286]">

          <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            <div className="flex-1 h-fit pb-40">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/search/:searchTerm" element={<SearchResults />} />
                <Route path="/product/:id" element={<ProductDetails />} />
                <Route path="/login" element={<Login />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
