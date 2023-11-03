# AI Learning

Things I learned from ChatGPT

## Demonstrate TDD

    Create a list of all remaining features
    Identify 3-5 iteration steps to implement each feature
    Use this outline to do TDD
    Create a TDD log (feature, iteration, pass/fail, time) - 30 steps

Certainly! Test-Driven Development (TDD) is a software development approach where you write tests before writing the actual code. It can be a valuable practice to ensure the quality and functionality of your code. Below is an example of how you can create a TDD plan for a simple feature: a shopping cart for an e-commerce website. We'll create a list of features and then outline the TDD process for adding a "Remove from Cart" feature.

List of Features:
Add to Cart: Users can add items to their shopping cart.
Remove from Cart: Users can remove items from their shopping cart.
Calculate Total: The cart calculates and displays the total price of items.
Update Quantity: Users can change the quantity of items in their cart.
Empty Cart: Users can empty their entire cart.
Feature: Remove from Cart

TDD Iteration Steps:

1. Write a failing test: Create a test to check if an item can be removed from the cart. Assume the cart has some items, and you expect it to have one less item after removing.

```javascript
it("should remove an item from the cart", () => {
  // Arrange: Prepare the cart with items
  const cart = new ShoppingCart();
  cart.add(item1);
  cart.add(item2);

  // Act: Remove an item
  cart.remove(item1);

  // Assert: Check if the item is removed
  expect(cart.getItems()).not.toContain(item1);
});
```

2. Run the test: Run the test, and it should fail since you haven't implemented the remove method yet.

Write the minimal code to pass the test: Implement the remove method in the ShoppingCart class.

```javascript
class ShoppingCart {
  // Other methods...

  remove(item) {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }
}
```

3. Run the test again: Rerun the test, and it should pass now.

4. Refactor (if necessary): You can refactor your code to improve readability or performance if needed.

```jaVascript
TDD Log (Feature: Remove from Cart):
Feature Iteration Pass/Fail Time (minutes)
Remove from Cart 1 Fail 5
Remove from Cart 2 Pass 10
Remove from Cart 3 - -
Remove from Cart 4 - -
Remove from Cart 5 - -
```

Repeat these steps for the remaining features, adjusting the test scenarios and code as needed. Remember to run the tests frequently to ensure that the code remains functional throughout the development process. The log helps track your progress and time spent on each feature, making it easier to manage and prioritize your development tasks.
