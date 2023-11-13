## Method Patterns

### Component Lifecycle and State Management

* **Container and Presentation Components:**
  - **Description:** Separate container components responsible for data fetching and state management from presentation components responsible for rendering UI. This promotes a cleaner and more maintainable codebase.

  - **Example:**
    ```jsx
    // Container Component
    import React, { useEffect, useState } from 'react';
    import ProductList from './ProductList';

    const ProductContainer = () => {
      const [products, setProducts] = useState([]);

      useEffect(() => {
        // Fetch products from API
        // ...

        setProducts(/* Fetched products */);
      }, []);

      return <ProductList products={products} />;
    };

    // Presentation Component
    import React from 'react';

    const ProductList = ({ products }) => (
      <div>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
    ```

* **Component Naming:**
  - **Description:** Choose meaningful and descriptive names for React components. Follow the PascalCase convention for component names. Component names should accurately represent their purpose and functionality.

  - **Example:**
    ```jsx
    // ProductListing Component
    const ProductListing = ({ category }) => {
      // Component logic
      // ...
    };
    ```

* **Functional Components:**
  - **Description:** Whenever possible, use functional components over class components. Functional components are simpler and promote the use of hooks for state management.

  - **Example:**
    ```jsx
    // ProductCard Component
    const ProductCard = ({ product }) => (
      <div className="product-card">
        {/* Component content */}
      </div>
    );
    ```

* **Props Usage:**
  - **Description:** Clearly define and document the props that a component expects. This includes specifying their types using PropTypes or TypeScript. This helps in understanding the component's interface and usage.

  - **Example:**
    ```jsx
    // ProductCard Component
    ProductCard.propTypes = {
      product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        imageUrl: PropTypes.string.isRequired,
        // Additional prop types
      }).isRequired,
    };
    ```

* **Lifecycle Methods (for class components):**
  - **Description:** If using class components, organize and use lifecycle methods appropriately. Be mindful of the component's lifecycle and use componentDidMount, componentDidUpdate, and componentWillUnmount as needed.

  - **Example:**
    ```jsx
    // Example Class Component
    class ExampleComponent extends React.Component {
      componentDidMount() {
        // Logic to execute after component is mounted
      }

      componentDidUpdate(prevProps, prevState) {
        // Logic to execute after component updates
      }

      componentWillUnmount() {
        // Cleanup logic before component is unmounted
      }

      render() {
        // JSX rendering logic
        return <div>Example Component</div>;
      }
    }
    ```

* **JSX Structure:**
  - **Description:** Keep the JSX structure concise and easy to read. Use proper indentation and formatting. This includes breaking down complex components into smaller, more manageable parts.

  - **Example:**
    ```jsx
    // ProductListing Component
    const ProductListing = ({ category }) => {
      // Logic to fetch and filter products
      // ...

      return (
        <div>
          <h2>{category} Products</h2>
          <ProductGrid products={filteredProducts} />
        </div>
      );
    };

    // ProductGrid Component (Child Component)
    const ProductGrid = ({ products }) => (
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
    ```

* **State Management:**
  - **Description:** Use state sparingly and manage it efficiently. Consider using state management libraries like Redux for larger applications. Avoid unnecessary state and prefer lifting state up when needed.

  - **Example:**
    ```jsx
    // ProductListing Component
    const ProductListing = ({ category }) => {
      // State variable to store the fetched products
      const [products, setProducts] = useState([]);

      // Effect to fetch products when the component mounts or when the category changes
      useEffect(() => {
        fetchProducts();
      }, [category]);

      // Function to fetch products from the API
      const fetchProducts = () => {
        // Logic to fetch products based on the selected category from an API
        // ...

        // Update the state with the fetched products
        setProducts(/* Fetched products array */);
      };

      return (
        <div>
          <h2>{category} Products</h2>
          <ProductGrid products={products} />
        </div>
      );
    };
    ```

## Variable Patterns

* **State Variables:**
  - **Description:** Use the useState hook for managing component state. Ensure that state variables have meaningful names. Follow the convention of using setVariableName for state-setting functions.

  - **Example:**
    ```jsx
    // ProductListing Component
    const ProductListing = ({ category }) => {
      // State variable to store the fetched products
      const [products, setProducts] = useState([]);
    ```

* **Props:**
  - **Description:** Destructure props directly in the function parameters for functional components. This enhances code readability and makes it clear which props the component is using.

  - **Example:**
    ```jsx
    // ProductCard Component
    const ProductCard = ({ product }) => (
      <div className="product-card">
        {/* Component content */}
      </div>
    );
    ```

* **Import Statements:**
  - **Description:** Keep import statements organized and group them logically.

  - **Example:**
    ```jsx
    // ProductListing Component
    import React, { useState, useEffect } from 'react';
    import PropTypes from 'prop-types';
    import ProductGrid from './ProductGrid';
    ```

## Comments Patterns

* **Component Explanation:**
  - **Description:** Include a comment at the beginning of a component to explain its overall purpose and usage. This provides a quick overview for developers reading the code.

  - **Example:**
    ```jsx
    // ProductListing Component
    // Displays a list of products in a grid layout.
    // Props:
    // - category: String representing the product category to display.
    const ProductListing = ({ category }) => {
      // Component logic
      // ...
    };
    ```

* **JSX Comments:**
  - **Description:** Add comments within JSX only when necessary, explaining complex logic or unusual patterns.

  - **Example:**
    ```jsx
    const ProductCard = ({ product }) => (
      <div className="product-card">
        <img src={product.imageUrl} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{`Price: $${product.price}`}</p>
        {/* Additional product details or action buttons */}
      </div>
    );
    ```

* **Amazon Example with Comments:**
  - **Component Explanation:**
    ```jsx
    // ProductListing Component
    // Displays a list of products in a grid layout.
    // Props:
    // - category: String representing the product category to display.
    const ProductListing = ({ category }) => {
      // State variable to store the fetched products
      const [products, setProducts] = useState([]);

      // Effect to fetch products when the component mounts or when the category changes
      useEffect(() => {
        fetchProducts();
      }, [category]);

      // Function to fetch products from the API
      const fetchProducts = () => {
        // Logic to fetch products based on the selected category from an API
        // ...

        // Update the state with the fetched products
        setProducts(/* Fetched products array */);
      };

      return (
        <div>
          <h2>{category} Products</h2>
          <div className="product-grid">
            {products.map((product) => (
              // Render a ProductCard for each product in the array
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      );
    };
    ```