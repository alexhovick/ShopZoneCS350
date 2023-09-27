# User Profile

```jsx
class UserProfile {
  constructor(id, firstName, lastName, email) {
    this.id = id; // Unique user identifier
    this.firstName = firstName; // User's first name
    this.lastName = lastName; // User's last name
    this.email = email; // User's email address
  }
}

const userProfiles = [
  new UserProfile(1, "John", "Doe", "john.doe@example.com"),
  new UserProfile(2, "Jane", "Smith", "jane.smith@example.com"),
];

```

# Product

```jsx
class Product {
  constructor(id, name, description, price, imageUrl, stockQuantity) {
    this.id = id; // Unique product identifier
    this.name = name; // Product name
    this.description = description; // Product description
    this.price = price; // Product price
    this.imageUrl = imageUrl; // URL to the product image
    this.stockQuantity = stockQuantity; // Stock quantity available
  }
}

const products = [
  new Product(1, "Smartphone", "A powerful smartphone with the latest features.", 499.99, "https://example.com/smartphone.jpg", 100),
  new Product(2, "Laptop", "A high-performance laptop for work and entertainment.", 999.99, "https://example.com/laptop.jpg", 50),
  new Product(3, "Headphones", "Premium over-ear headphones for immersive audio.", 149.99, "https://example.com/headphones.jpg", 75),
];
```

# Seller Profile

```jsx
class SellerProfile {
  constructor(id, name, description, contactEmail) {
    this.id = id; // Unique seller identifier
    this.name = name; // Seller's name or business name
    this.description = description; // Description of the seller or store
    this.contactEmail = contactEmail; // Seller's contact email
  }
}

const sellerProfiles = [
  new SellerProfile(1, "ElectroMart", "Electronics and gadgets store", "info@electromart.com"),
  new SellerProfile(2, "FashionStyle", "Fashion and clothing shop", "contact@fashionstyle.com"),
];
```


# Transaction

```jsx
class Transaction {
  constructor(orderNumber, totalAmount, date) {
    this.orderNumber = orderNumber; // Unique order identifier
    this.totalAmount = totalAmount; // Total order amount
    this.date = date; // Date and time of the transaction
  }
}

const transactions = [
  new Transaction("ORD12345", 1499.98, new Date("2023-09-15T14:30:00Z")),
  new Transaction("ORD12346", 299.98, new Date("2023-09-16T10:15:00Z")),
];
```