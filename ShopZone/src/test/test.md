import React from 'react'; // Import React

import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from "../components/Header";
import { store } from '../redux/store';
import App from '../App';
import {Cart, Checkout, Home, Login, ProductDetails, SearchResults} from '../pages';
import Parcel_512px from '../assets/Parcel_512px.png'
import '@testing-library/jest-dom';

//beforeAll(() => console.log('beforeAll'));
//afterAll(() => console.log('afterAll'));
jest.spyOn(console, 'log').mockImplementation(() => {});

const dummyProducts = [
    {
        id: 1,
        name: 'Product 1',
        image: Parcel_512px,
        rating: 4,
        price: 49.99,
      },
      {
        id: 2,
        name: 'Product 2',
        image: Parcel_512px,
        rating: 4.5,
        price: 39.99,
      },
      {
        id: 3,
        name: 'Product 3',
        image: Parcel_512px,
        rating: 3.8,
        price: 59.99,
      },
      {
        id: 4,
        name: 'Product 4',
        image: Parcel_512px,
        rating: 5,
        price: 79.99,
      }
  ];

test('Clicking "ShopZone" link navigates to the home page', () => {
    // render the component on virtual dom
    render(
        <Router>
          <Provider store={store}>
            <Header />
          </Provider>
        </Router>
      );

    //select the elements you want to interact with
    const shopZoneLink = screen.getByText('ShopZone');
    fireEvent.click(shopZoneLink);

    //assert the expected result
    expect(window.location.pathname).toBe("/");
});

test('Clicking "Login" link navigates to the login page', () => {
    // render the component on virtual dom
    render(
        <Router>
          <Provider store={store}>
            <Header />
          </Provider>
        </Router>
    );

    const loginLink = screen.getByText('Login');
    fireEvent.click(loginLink);
    expect(window.location.pathname).toBe("/login");
});

test('Clicking the cart icon navigates to the cart page', () => {
    // render the component on virtual dom
    render(
        <Router>
          <Provider store={store}>
            <Header />
          </Provider>
        </Router>
    );

    const cartLink = screen.getByRole('img');
    fireEvent.click(cartLink);
    expect(window.location.pathname).toBe("/cart");
});

test('Clicking "Product 2" link navigates to the corresponding product page', () => {
    // render the component on virtual dom
    render(
        <Router>
          <Provider store={store} products={dummyProducts}>
            <Home />
          </Provider>
        </Router>
      );

    const productLink = screen.getByText('Product 2');
    fireEvent.click(productLink);
    expect(window.location.pathname).toBe("/Product/2");
});

test('Clicking "Add to Cart" link navigates to cart and adds the product to cart', () => {
  // render the component on virtual dom
  render(
      <Router>
        <Provider store={store} products={dummyProducts}>
          <App />
        </Provider>
      </Router>
    );

  const addToCart = screen.getByText('Add to Cart');
  fireEvent.click(addToCart);
  expect(window.location.pathname).toBe("/Cart");

});

test('Product 2 now appears in the Cart', () => {
  // render the component on virtual dom
  render(
      <Router>
        <Provider store={store} products={dummyProducts}>
          <App />
        </Provider>
      </Router>
    );

  const product = screen.getByText('Product 2');
  expect(window.location.pathname).toBe("/Cart");
  expect(product).toBeInTheDocument();
});