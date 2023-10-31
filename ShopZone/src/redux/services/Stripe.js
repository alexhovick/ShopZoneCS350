import Stripe from 'stripe';
import express from 'express';
//import { NEXT_PUBLIC_PUBLISHABLE_KEY, NEXT_PUBLIC_STRIPE_SECRET_KEY } from './stripe_keys.js';
require('dotenv').config();

const  stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);
console.log(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY)

const router = express.Router()


router.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'T-shirt',
            },
            unit_amount: 2000,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${proces.env.CLIENT_URL}/checkout-success`,
      cancel_url: `${proces.env.CLIENT_URL}/cart`,
    });
  
    res.send({url: session.url});
  });

  module.exports = router;