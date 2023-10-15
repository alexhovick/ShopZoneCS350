import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductCard from './ProductCard';

test('renders ProductCard component with item data', () => {
  const item = {
    asin: 'B07ZPKN6YR',
    product_photo: 'https://m.media-amazon.com/images/I/612kg3rGyYL._AC_SX444_SY639_QL65_.jpg',
    product_title: 'Apple iPhone 11, 64GB, Black - Unlocked (Renewed)',
    product_price: '$299.99',
    product_star_rating: '4.3',
  };

  render(<ProductCard item={item} i={0} />);

  // Add assertions to test the rendered output
  expect(screen.getByText('Apple iPhone 11, 64GB, Black - Unlocked (Renewed)')).toBeInTheDocument();
  expect(screen.getByText('$299.99')).toBeInTheDocument();
  // Add more assertions for other elements you want to test
});
