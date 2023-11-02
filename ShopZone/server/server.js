require('dotenv').config()

// Import necessary modules
const express = require('express');
const NEXT_PUBLIC_STRIPE_SECRET_KEY = 'sk_test_51O762bENwOGSefFN6U0kAmWWEXjcTExqjDCitlK5X2RhZ0yQ5Uf3zhDRruX7UtgJaBaDiBqlaHkfwo7xO4qDyHSl00o4CliUFN'
const stripe = require('stripe')(NEXT_PUBLIC_STRIPE_SECRET_KEY);
const cors = require('cors');

// Create an instance of the Express app
const app = express();

// Add middleware to parse JSON data
app.use(express.json());
app.use(cors({
    origin: "http://localhost:3000",
})
)

// Create a route for creating a checkout session


const storeItems = new Map([
    [1, {priceInCents: 10000, name: 'LEARN REACT TODAY'}],
    [2, {priceInCents: 20000, name: 'LEARN CSS TODAY'}]
])

app.post('/create-checkout-session', async (req, res) => {
  // Replace this with your own logic to set up the checkout session
  console.log("server cart data: ",req.body.cartItems);
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.cartItems.map(item => {
        return {
            price_data: {
                currency: item.product.currency, // Use the currency from the product data
                product_data: {
                    name: item.product.product_title, // Use the product title from the product data
                },
                unit_amount: parseFloat(item.product.product_price.replace('$', '')) * 100, // Convert price to cents
            },
            quantity: item.quantity,
        };
    })
    
      ,
      mode: 'payment',
      success_url: 'http://localhost:3000/Checkout-Success', // Redirect URL on success
      cancel_url: 'http://localhost:3000/Cart', // Redirect URL on cancellation
    });

    // Respond with the session URL
    //res.json({ url: session.url });
    res.json({url: session.url})

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to create checkout session' });
  }
});

// Start the server
app.listen(5500, () => {
  console.log('Server is running on port 5500');
});
