import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {Frontpage, Cart, Checkout, SearchResults, ProductDetails } from './pages';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Frontpage />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/search/:searchTerm" element={<SearchResults />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
