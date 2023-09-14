import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux'; // Import useSelector from react-redux
import {Home, Cart, Checkout, SearchResults, ProductDetails, Login } from './pages';

const App = () => {
  const cartItemCount = useSelector((state) => state.cart.length); // Access the cart state from Redux  
  
  return (
    <Router>
      <div className="app">
        <header>
          {/* Display the cart item count using data from Redux */}
          <div className="cart-count">Cart Items: {cartItemCount}</div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
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
