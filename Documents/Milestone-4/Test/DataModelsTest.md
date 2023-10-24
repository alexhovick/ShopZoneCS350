# Tests for Data Models

**User Profile**

```javascript
// UserProfile.test.js
import React from 'react';
import { render } from '@testing-library/react';
import UserProfile from './UserProfile'; // Replace with the actual path to your UserProfile class and data

describe('UserProfile', () => {
  it('should create a UserProfile object with the correct properties', () => {
    const userProfile = new UserProfile(3, 'Alice', 'Johnson', 'alice.j@example.com');
    expect(userProfile.id).toBe(3);
    expect(userProfile.firstName).toBe('Alice');
    expect(userProfile.lastName).toBe('Johnson');
    expect(userProfile.email).toBe('alice.j@example.com');
  });

  it('should have a userProfiles array with predefined user profiles', () => {
    expect(userProfiles).toHaveLength(2);

    // Test userProfiles content
    expect(userProfiles[0].id).toBe(1);
    expect(userProfiles[0].firstName).toBe('John');
    expect(userProfiles[0].lastName).toBe('Doe');
    expect(userProfiles[0].email).toBe('john.doe@example.com');

    expect(userProfiles[1].id).toBe(2);
    expect(userProfiles[1].firstName).toBe('Jane');
    expect(userProfiles[1].lastName).toBe('Smith');
    expect(userProfiles[1].email).toBe('jane.smith@example.com');
  });
});
```

**Product**

```javascript
// Product.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Product from './Product'; // Replace with the actual path to your Product class and data

describe('Product', () => {
  it('should create a Product object with the correct properties', () => {
    const product = new Product(
      4,
      'Tablet',
      'A versatile tablet for work and entertainment.',
      299.99,
      'https://example.com/tablet.jpg',
      30
    );

    expect(product.id).toBe(4);
    expect(product.name).toBe('Tablet');
    expect(product.description).toBe('A versatile tablet for work and entertainment.');
    expect(product.price).toBe(299.99);
    expect(product.imageUrl).toBe('https://example.com/tablet.jpg');
    expect(product.stockQuantity).toBe(30);
  });

  it('should have a products array with predefined products', () => {
    expect(products).toHaveLength(3);

    // Test products content
    expect(products[0].id).toBe(1);
    expect(products[0].name).toBe('Smartphone');
    expect(products[0].description).toBe('A powerful smartphone with the latest features.');
    expect(products[0].price).toBe(499.99);
    expect(products[0].imageUrl).toBe('https://example.com/smartphone.jpg');
    expect(products[0].stockQuantity).toBe(100);

    expect(products[1].id).toBe(2);
    expect(products[1].name).toBe('Laptop');
    expect(products[1].description).toBe('A high-performance laptop for work and entertainment.');
    expect(products[1].price).toBe(999.99);
    expect(products[1].imageUrl).toBe('https://example.com/laptop.jpg');
    expect(products[1].stockQuantity).toBe(50);

    expect(products[2].id).toBe(3);
    expect(products[2].name).toBe('Headphones');
    expect(products[2].description).toBe('Premium over-ear headphones for immersive audio.');
    expect(products[2].price).toBe(149.99);
    expect(products[2].imageUrl).toBe('https://example.com/headphones.jpg');
    expect(products[2].stockQuantity).toBe(75);
  });
});
```

**Seller Profile**

```javascript
// SellerProfile.test.js
import React from 'react';
import { render } from '@testing-library/react';
import SellerProfile from './SellerProfile'; // Replace with the actual path to your SellerProfile class

describe('SellerProfile', () => {
  it('should create a SellerProfile object with the correct properties', () => {
    const sellerProfile = new SellerProfile(
      1,
      'Sample Seller',
      'A description of the seller or store.',
      'seller@example.com'
    );

    expect(sellerProfile.id).toBe(1);
    expect(sellerProfile.name).toBe('Sample Seller');
    expect(sellerProfile.description).toBe('A description of the seller or store.');
    expect(sellerProfile.contactEmail).toBe('seller@example.com');
  });
});
```

