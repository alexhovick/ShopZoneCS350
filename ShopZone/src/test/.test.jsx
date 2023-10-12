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
import searchResults from '../assets/searchResults.json'

//beforeAll(() => console.log('beforeAll'));
//afterAll(() => console.log('afterAll'));

const data = searchResults;

test('Clicking "ShopZone" navigates to the home page', () => {
  // render the component on virtual dom
  render(
      <Router>
        <Provider store={store}>
          <Header />
        </Provider>
      </Router>
    );

  //select the elements you want to interact with
  const shopZoneLink = screen.getByRole('SZ_Logo');
  fireEvent.click(shopZoneLink);

  //assert the expected result
  expect(window.location.pathname).toBe("/");
});

/*test('Entering "Iphone into the search bar" returns the search result page of "Iphone"', () => {
  render(
      <Router>
        <Provider store={store}>
          <Header />
        </Provider>
      </Router>
    );
    const searchInput = screen.getByPlaceholderText('Search products...');
    const searchTerm = 'Iphone';
    fireEvent.change(searchInput, { target: { value: searchTerm } });
    fireEvent.keyDown(searchInput, { key: 'Enter', code: 13, charCode: 13 });
    expect(window.location.pathname).toBe('/search/Iphone');
});
*/
test('Clicking "Hello, sign in" link navigates to the login page', () => {
  render(
      <Router>
        <Provider store={store}>
          <Header />
        </Provider>
      </Router>
    );
  const shopZoneLink = screen.getByText('Hello, sign in');
  fireEvent.click(shopZoneLink);
  expect(window.location.pathname).toBe("/login");
});

test('Clicking "Cart" link navigates to the cart page', () => {
    render(
      <Router>
        <Provider store={store}>
          <Header />
        </Provider>
      </Router>
    );
  const shopZoneLink = screen.getByText('Cart');
  fireEvent.click(shopZoneLink);
  expect(window.location.pathname).toBe("/cart");
});

test('The cart should display the text "Your cart is empty"', () => {
    render(
      <Router>
        <Provider store={store}>
          <Cart />
        </Provider>
      </Router>
    );

    const text = screen.getByText('Your cart is empty.');
    expect(window.location.pathname).toBe("/cart");
    expect(text).toBeInTheDocument();
});

test('Clicking "Apple iPhone 11, 64GB, Black - Unlocked (Renewed)" link navigates to the corresponding product page', () => {
  // render the component on virtual dom
  render(
      <Router>
        <Provider store={store} data={searchResults}>
          <Home />
        </Provider>
      </Router>
    );

    const productLink = screen.getByText((content, element) => {
      // You can customize the matching logic here
      // For example, you can check if the text contains the desired text
      return content.includes('Apple iPhone 11, 64GB, Black - Unlocked (Renewed)');
    });
  fireEvent.click(productLink);
  expect(window.location.pathname).toBe("/Product/B07ZPKN6YR");
});

test('Checking that the name of the product displays on the page', () => {
  // render the component on virtual dom
  render(
      <Router>
        <Provider store={store} data={searchResults}>
          <App />
        </Provider>
      </Router>
    );
  const productName = screen.getByText('Apple iPhone 11, 64GB, Black - Unlocked (Renewed)');
  expect(productName).toBeInTheDocument();
});

test('Checking that the image of the product displays on the page', () => {
  // render the component on virtual dom
  render(
      <Router>
        <Provider store={store} data={searchResults}>
          <App />
        </Provider>
      </Router>
    );
  const productImage = screen.getByAltText('Apple iPhone 11, 64GB, Black - Unlocked (Renewed)');
  expect(productImage).toBeInTheDocument();
});

test('Checking that the price of the product displays on the page', () => {
  // render the component on virtual dom
  render(
      <Router>
        <Provider store={store} data={searchResults}>
          <App />
        </Provider>
      </Router>
    );
  const productPrice = screen.getByText('$299.99');
  expect(productPrice).toBeInTheDocument();
});

test('Checking that the rating of the product displays on the page', () => {
  // render the component on virtual dom
  render(
      <Router>
        <Provider store={store} data={searchResults}>
          <App />
        </Provider>
      </Router>
    );
  const productRating = screen.getByText((content, element) => {
    return content.includes('4.3');
  });
  expect(productRating).toBeInTheDocument();
});

test('Checking that the number of ratings of the product displays on the page', () => {
  // render the component on virtual dom
  render(
    <Router>
      <Provider store={store} data={searchResults}>
        <App />
      </Provider>
    </Router>
  );
  const productNumRating = screen.getByText((content, element) => {
    return content.includes('42672');
  });
  expect(productNumRating).toBeInTheDocument();
});