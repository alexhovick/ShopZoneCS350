require('dotenv').config()

// Import necessary modules
const express = require('express');
const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
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
  try {
    const session = await stripe.checkout.sessions.create({
      line_items:  req.body.items.map(item => {
        const storeItem = storeItems.get(item.id)
        return {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: storeItem.name
                },
                unit_amount: storeItem.priceInCents // Typo here, it should be unit_amount
            },
            quantity: item.quantity
        }
        
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
