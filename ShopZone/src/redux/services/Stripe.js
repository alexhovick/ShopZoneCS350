// import Stripe from 'stripe';
// import express from 'express';
const express = require("express");
const Stripe = require("stripe");
import { NEXT_PUBLIC_PUBLISHABLE_KEY, NEXT_PUBLIC_STRIPE_SECRET_KEY } from './stripe_keys.js';

const  stripe = Stripe(NEXT_PUBLIC_STRIPE_SECRET_KEY);

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
        success_url: `http://localhost:3000/Checkout-Success`,
        cancel_url: `http://localhost:3000/Cart`,
      });
    
      res.send({url: session.url});
    });

export default router;