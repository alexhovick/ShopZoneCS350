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



app.post('/create-checkout-session', async (req, res) => {
  // Replace this with your own logic to set up the checkout session
  console.log("server cart data: ",req.body.cartItems);
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      shipping_address_collection: {
        allowed_countries: ["US", "CA"],
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 0,
              currency: "usd",
            },
            display_name: "Free shipping",
            // Delivers between 5-7 business days
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 5,
              },
              maximum: {
                unit: "business_day",
                value: 7,
              },
            },
          },
        },
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 1500,
              currency: "usd",
            },
            display_name: "Next day air",
            // Delivers in exactly 1 business day
            delivery_estimate: {
              minimum: {
                unit: "business_day",
                value: 1,
              },
              maximum: {
                unit: "business_day",
                value: 1,
              },
            },
          },
        },
      ],
      phone_number_collection: {
        enabled: true,
      },
      line_items: req.body.cartItems.map(item => {
        return {
            price_data: {
                currency: item.product.currency, // Use the currency from the product data
                product_data: {
                    name: item.product.product_title, // Use the product title from the product data
                    images: [item.product.product_photo],
                },
                unit_amount: Math.round(parseFloat(item.product.product_price.replace('$', '')) * 100), // Convert price to cents
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
