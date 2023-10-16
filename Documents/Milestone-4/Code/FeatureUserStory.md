# User Story from Product Backlog

**Product Browsing:**

1. As a shopper, I want to browse products by category.
2. As a user, I want to search for products by keyword.
3. As a shopper, I want to view product details, including images, descriptions, and prices.
4. As a shopper, I want to add products to my cart.
5. As a shopper, I want to remove items from my cart.
6. As a shopper, I want to proceed to checkout from the cart.

**1. Data:**

```javascript

const products = [
  {
    id: 1,
    name: "Product 1",
    description: "Description for Product 1",
    price: 20.99,
    category: "Electronics",
  },
  {
    id: 2,
    name: "Product 2",
    description: "Description for Product 2",
    price: 15.49,
    category: "Clothing",
  },
];

export default products;
```

**2. Views:**

```jsx
import React from 'react';

const ProductList = ({ products, addToCart }) => (
  <div>
    {products.map((product) => (
      <div key={product.id}>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    ))}
  </div>
);

export default ProductList;

import React from 'react';

const ProductDetails = ({ product }) => (
  <div>
    <h2>{product.name}</h2>
    <p>{product.description}</p>
    <p>Price: ${product.price}</p>
  </div>
);

export default ProductDetails;

import React from 'react';

const ShoppingCart = ({ cart, removeFromCart }) => (
  <div>
    {cart.map((item) => (
      <div key={item.id}>
        <h3>{item.name}</h3>
        <p>Price: ${item.price}</p>
        <button onClick={() => removeFromCart(item)}>Remove from Cart</button>
      </div>
    ))}
  </div>
);

export default ShoppingCart;

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
```

**3. Tests:**

```jsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductList from './ProductList';

const mockProducts = [
  { id: 1, name: 'Product 1', description: 'Description', price: 19.99 },
];

test('renders product list', () => {
  render(<ProductList products={mockProducts} />);
  const productElements = screen.getAllByRole('listitem');
  expect(productElements.length).toBe(mockProducts.length);
});

```
