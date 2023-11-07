# To do list:

1. As a shopper, I want to proceed to checkout from the cart.
   a. Review Stripe docs for creating a checkout session
   b. Create server to create a stripe checkout-session
   c. Create component to handle fetch request from server
   d. Redirect to stripe-checkout

2. As a shopper, I want to select my preferred payment method.
   a. Set Stripe checkout to only allow payment type 'payment'
   b. Only accept test card info (4242 4242 4242 4242)
   c. Do a failed card input
   d. Do a successful card input

3. As a shopper, I want to review my order before finalizing the purchase.
   a. Display cart data received and item count
   b. Calculate Subtotal
   c. Do failed display
   d. Do successful display

4. As a new user, I can complete purchase.
   a. Enter Shipping details and Payment Info
   b. I can review order
   c. Redirect to Checkout-success screen on successful payment
   d. Redirect to Cart on canceled payment

## Feature 1: Proceed to Checkout

| Iteration | Description                                          | Status | Time (HH:MM AM/PM) |
| --------- | ---------------------------------------------------- | ------ | ------------------ |
| 1a        | Review Stripe docs for creating a checkout session   | Pass   | 2:30 PM            |
| 1b        | Create server to create a stripe checkout-session    | Fail   | 2:45 PM            |
|           | 1b (Retry) - Iteration 2                             | Fail   | 3:30 PM            |
|           | 1b (Retry) - Iteration 3                             | Pass   | 3:35 PM            |
| 1c        | Create component to handle fetch request from server | Fail   | 3:50 PM            |
|           | 1c (Retry) - Iteration 2                             | Pass   | 4:30 PM            |
| 1d        | Redirect to stripe-checkout                          | Fail   | 4:40 PM            |
|           | 1d (Retry) - Iteration 2                             | Fail   | 4:52 PM            |
|           | 1d (Retry) - Iteration 3                             | Fail   | 5:22 PM            |
|           | 1d (Retry) - Iteration 4                             | Pass   | 6:07 PM            |

## Feature 2: Select Preferred Payment Method

| Iteration | Description                                              | Status | Time (HH:MM AM/PM) |
| --------- | -------------------------------------------------------- | ------ | ------------------ |
| 2a        | Set Stripe checkout to only allow payment type 'payment' | Pass   | 9:30 PM            |
| 2b        | Only accept test card info (4242 4242 4242 4242)         | Pass   | 9:35 PM            |
| 2c        | Do a failed card input                                   | Fail   | 9:38 PM            |
| 2d        | Do a successful card input                               | Pass   | 9:42 PM            |

## Feature 3: Review Order Before Finalizing Purchase

| Iteration | Description                               | Status | Time (HH:MM AM/PM) |
| --------- | ----------------------------------------- | ------ | ------------------ |
| 3a        | Display cart data received and item count | Fail   | 10:05 PM           |
|           | 3a (Retry) - Iteration 2                  | Fail   | 10:18 PM           |
|           | 3a (Retry) - Iteration 3                  | Pass   | 10:37 PM           |
| 3b        | Calculate Subtotal                        | Pass   | 10:40 PM           |
| 3c        | Do failed display                         | Fail   | 10:45 PM           |
| 3d        | Do successful display                     | Pass   | 10:47 PM           |

## Feature 4: Complete Purchase as a New User

| Iteration | Description                                               | Status | Time (HH:MM AM/PM) |
| --------- | --------------------------------------------------------- | ------ | ------------------ |
| 4a        | Enter Shipping details and Payment Info                   | Pass   | 11:20 PM           |
| 4b        | Review order                                              | Pass   | 11:21 PM           |
| 4c        | Redirect to Checkout-success screen on successful payment | Fail   | 11:22 PM           |
| 4d        | Redirect to Cart on canceled payment                      | PASS   | 11:25 PM           |
