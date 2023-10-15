# BASIC APPLICATION

## MILESTONE 3 - DALE BARRIGA

- USER STORY/ FEATURE FOCUS:
  The user story i focused on for this milestone were:
  - As a shopper, I want to view product details, including images, descriptions, and prices.
  - As a shopper, I want to add products to my cart.
  - As a shopper, I want to remove items from my cart.
- DATA:
  I created the models outlined for ProductCard and Product details in
  <a href = "/alexhovick/ShopZoneCS350/Documents/Milestone-2/Design/Architecture.md"> the Software Architecture document </a>

- Views:

  - I created the views for the ProductCard: List, Detail
  - I created the views for the ProductDetails: List, Detail

- Tests:
  This test is designed to verify is the ProductCard displays the expected information correctly:

```jsx
import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "./ProductCard";

test("renders ProductCard component with item data", () => {
  const item = {
    asin: "B07ZPKN6YR",
    product_photo:
      "https://m.media-amazon.com/images/I/612kg3rGyYL._AC_SX444_SY639_QL65_.jpg",
    product_title: "Apple iPhone 11, 64GB, Black - Unlocked (Renewed)",
    product_price: "$299.99",
    product_star_rating: "4.3",
  };

  render(<ProductCard item={item} i={0} />);

  // Add assertions to test the rendered output
  expect(
    screen.getByText("Apple iPhone 11, 64GB, Black - Unlocked (Renewed)")
  ).toBeInTheDocument();
  expect(screen.getByText("$299.99")).toBeInTheDocument();
  // Add more assertions for other elements you want to test
});
```

- Deployment:
  Code has been committed and automatically deployed to our host website.
