//require('dotenv').config()

// Import necessary modules
const express = require('express');
const NEXT_PUBLIC_STRIPE_SECRET_KEY = 'sk_test_51O762bENwOGSefFN6U0kAmWWEXjcTExqjDCitlK5X2RhZ0yQ5Uf3zhDRruX7UtgJaBaDiBqlaHkfwo7xO4qDyHSl00o4CliUFN'
const stripe = require('stripe')(NEXT_PUBLIC_STRIPE_SECRET_KEY);
const cors = require('cors');
const he = require('he');

const serverless = require('serverless-http');

// Create an instance of the Express app
const app = express();
  
const router = express.Router()
// Add middleware to parse JSON data
app.use(express.json());
app.use(cors({
     //origin: "http://localhost:3000",
     origin: "https://shopzone-app5.netlify.app",
})
)

//const connection_string = process.env.CONNECTION_STRING

// Create a route for creating a checkout session
router.post('/create-checkout-session', async (req, res) => {
  if (!req.body.cartItems || req.body.cartItems.length === 0) {
    // Return a response or simply do nothing
    res.status(400).json({ error: 'Cart is empty' }); // You can customize the response as needed
    return; // Exit the route function
  }
  console.log("server cart data: ",req.body.cartItems);


  const decodeHTMLEntities = (text) => {
    return he.decode(text); // Use 'he' to decode HTML entities
  };
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
        const decodedTitle = decodeHTMLEntities(item.product.product_title);
        return {
            price_data: {
                currency: item.product.currency, // Use the currency from the product data
                product_data: {
                    name: decodedTitle, // Use the product title from the product data
                    images: [item.product.product_photo],
                },
                unit_amount: Math.round(parseFloat(item.product.product_price.replace('$', '')) * 100), // Convert price to cents
            },
            quantity: item.quantity,
        };
    })
    
      ,
      mode: 'payment',
      success_url: "https://shopzone-app.netlify.app", // Redirect URL on success
      cancel_url: "https://shopzone-app.netlify.app", 

    });

    // Respond with the session URL
    res.json({url: session.url})

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Unable to create checkout session' });
  }
});


// const port = process.env.PORT || 5500
// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);


// mongoose.connect(connection_string, {
// })
// .then(()=> console.log("MongoDB connection Established..."))
// .catch((error)=>console.error("Mongo DB connection Failed: ", error.message))


