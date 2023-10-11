## URL Reusable Design Pattern:

**Design Pattern Name:** URL Routing Pattern

**Intent:** The URL Routing Pattern is used to define and manage routes within a React application. It provides a structured way to associate URLs with specific components, making it easy to navigate between different parts of the application.

**Components:**

1. **App Component:**
   - The root component of the application.
   - Responsible for setting up the routing configuration.

```jsx
import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { Header } from './components';
import { Cart, Checkout, Home, Login, ProductDetails, SearchResults } from './pages';

const App = () => {
  return (
    <div className="relative flex">
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Header />
        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Cart" element={<Cart />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Product/:asinToFind" element={<ProductDetails />} />
              <Route path="/search/:searchTerm" element={<SearchResults />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
```

**Key Features:**

- **Routes Configuration:** In the `App` component, the `<Routes>` component from React Router is used to define the application's routes.
- **Route Definitions:** Each `<Route>` element maps a URL path to a specific component. For example, the `/Cart` path is mapped to the `Cart` component.
- **Dynamic Routing:** The `ProductDetails` component is associated with the `/Product/:asinToFind` path, which allows dynamic routing based on the ASIN parameter.

## Reusble Design Pattern for Views:

**Design Pattern Name:** Reusable View Components

**Intent:** The Reusable View Components pattern aims to create a consistent structure for view components in a React application, allowing for easy reusability, maintainability, and consistency in design.

**Components:**

1. **BaseView Component:**

   - A base view component that serves as the foundation for all other view components.
   - Includes any shared functionality, styles, or layout elements.

   ```jsx
   import React from 'react';

   const BaseView = ({ children }) => {
     return (
       <div className="base-view">
         {children}
       </div>
     );
   };

   export default BaseView;
   ```

2. **ListView Component:**

   - A view component for rendering lists of items.
   - Receives an array of items and a rendering function as props.

   ```jsx
   import React from 'react';

   const ListView = ({ items, renderItem }) => {
     return (
       <div className="list-view">
         {items.map((item, index) => (
           <div key={index} className="list-item">
             {renderItem(item)}
           </div>
         ))}
       </div>
     );
   };

   export default ListView;
   ```

3. **DetailView Component:**

   - A view component for displaying detailed information about an item.
   - Takes an item as a prop and renders its details.

   ```jsx
   import React from 'react';

   const DetailView = ({ item }) => {
     return (
       <div className="detail-view">
         {/* Render detailed information about the item */}
       </div>
     );
   };

   export default DetailView;
   ```

4. **CreateView Component:**

   - A view component for creating new items or entries.
   - May include forms and input fields.

   ```jsx
   import React from 'react';

   const CreateView = ({ onSubmit }) => {
     const handleSubmit = (event) => {
       event.preventDefault();
       // Handle form submission and call onSubmit
     };

     return (
       <div className="create-view">
         <form onSubmit={handleSubmit}>
           {/* Render input fields and form controls */}
           <button type="submit">Create</button>
         </form>
       </div>
     );
   };

   export default CreateView;
   ```

5. **UpdateView Component:**

   - A view component for updating existing items or entries.
   - Similar to CreateView but pre-filled with existing data.

   ```jsx
   import React from 'react';

   const UpdateView = ({ item, onSubmit }) => {
     const handleSubmit = (event) => {
       event.preventDefault();
       // Handle form submission and call onSubmit
     };

     return (
       <div className="update-view">
         <form onSubmit={handleSubmit}>
           {/* Render input fields with existing data */}
           <button type="submit">Update</button>
         </form>
       </div>
     );
   };

   export default UpdateView;
   ```

**Key Features:**

- **Reusability:** Each view component focuses on a specific aspect of the application (list, detail, create, update), making them reusable across different parts of your app.

- **Consistency:** By following a consistent structure for view components, you ensure a uniform look and feel throughout your application.

- **Customization:** These components can be customized and extended as needed to accommodate specific requirements for different views.

- **Separation of Concerns:** Separating view logic into individual components simplifies development and maintenance, promoting clean code practices.

## Reusable Template Design Pattern:

**Design Pattern Name:** Reusable Template Components

**Intent:** The Reusable Template Components pattern aims to create a set of consistent and reusable templates for the layout and styling of various views within a React application.

**Components:**

1. **DefaultTemplate:**

   - The default template that sets up a basic page layout, including headers, navigation, and content.

   ```jsx
   import React from 'react';
   import Header from './Header';
   import Navigation from './Navigation';

   const DefaultTemplate = ({ children }) => {
     return (
       <div className="default-template">
         <Header />
         <Navigation />
         <main>{children}</main>
       </div>
     );
   };

   export default DefaultTemplate;
   ```

2. **FullWidthTemplate:**

   - A template with a full-width content area, suitable for landing pages or views with no sidebar.

   ```jsx
   import React from 'react';

   const FullWidthTemplate = ({ children }) => {
     return (
       <div className="full-width-template">
         <main>{children}</main>
       </div>
     );
   };

   export default FullWidthTemplate;
   ```

3. **SidebarTemplate:**

   - A template with a sidebar for additional navigation or widgets.

   ```jsx
   import React from 'react';
   import Sidebar from './Sidebar';

   const SidebarTemplate = ({ children }) => {
     return (
       <div className="sidebar-template">
         <Sidebar />
         <main>{children}</main>
       </div>
     );
   };

   export default SidebarTemplate;
   ```

4. **GridTemplate:**

   - A template with a grid-based layout, suitable for displaying multiple content items.

   ```jsx
   import React from 'react';

   const GridTemplate = ({ children }) => {
     return (
       <div className="grid-template">
         <main>
           <div className="grid-container">{children}</div>
         </main>
       </div>
     );
   };

   export default GridTemplate;
   ```

**Key Features:**

- **Reusability:** Each template component provides a consistent layout structure that can be reused for various views in your application.

- **Customization:** Templates can be extended or customized to accommodate specific styling and layout requirements.

- **Consistency:** Following a template pattern ensures a consistent look and feel across different views.

- **Separation of Concerns:** Separating template logic from view components promotes clean code practices and simplifies development and maintenance.

**Usage Example:**

In your views or pages, you can wrap your content with the appropriate template component to achieve the desired layout. For example:

```jsx
import React from 'react';
import DefaultTemplate from './DefaultTemplate';

const HomePage = () => {
  return (
    <DefaultTemplate>
      {/* Your home page content */}
    </DefaultTemplate>
  );
};

export default HomePage;
```

## Reusable Deisgn Pattern for Data Models:

**Design Pattern Name:** Reusable Data Models

**Intent:** The Reusable Data Models pattern aims to define and structure data models in a consistent and reusable way, promoting maintainability, readability, and a clear data schema.

**Components:**

1. **BaseModel:**

   - The base data model that other data models extend. It contains common fields and methods that are shared across different data models.

   ```javascript
   class BaseModel {
     constructor(data) {
       if (data) {
         this.load(data);
       }
     }

     load(data) {
       for (const key in data) {
         if (data.hasOwnProperty(key)) {
           this[key] = data[key];
         }
       }
     }
   }

   export default BaseModel;
   ```

2. **UserModel:**

   - An example of a specific data model that extends the `BaseModel`. It defines the structure and behavior for user-related data.

   ```javascript
   import BaseModel from './BaseModel';

   class UserModel extends BaseModel {
     constructor(data) {
       super(data);
     }

     // Custom methods or properties specific to the UserModel
   }

   export default UserModel;
   ```

3. **ProductModel:**

   - Another specific data model that extends the `BaseModel`. It defines the structure and behavior for product-related data.

   ```javascript
   import BaseModel from './BaseModel';

   class ProductModel extends BaseModel {
     constructor(data) {
       super(data);
     }

     // Custom methods or properties specific to the ProductModel
   }

   export default ProductModel;
   ```

**Key Features:**

- **Reusability:** The base model contains shared logic, reducing code duplication in specific data models.

- **Consistency:** By adhering to a common structure and methods defined in the base model, you ensure consistency in data model implementation.

- **Extendability:** Data models can be extended with custom methods, properties, and validation specific to each data type.

- **Ease of Maintenance:** Modifying shared logic is simplified since it resides in the base model, and changes cascade to all extending models.

**Usage Example:**

To use this design pattern, you can create instances of your specific data models and populate them with data:

```javascript
import UserModel from './UserModel';
import ProductModel from './ProductModel';

const userData = {
  id: 1,
  username: 'john_doe',
  email: 'john@example.com',
};

const productData = {
  id: 101,
  name: 'Sample Product',
  price: 29.99,
};

const user = new UserModel(userData);
const product = new ProductModel(productData);
```