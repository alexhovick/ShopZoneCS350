import Stripe from 'stripe';
import { NEXT_PUBLIC_PUBLISHABLE_KEY, NEXT_PUBLIC_STRIPE_SECRET_KEY } from './config.js';


const stripe = new Stripe(NEXT_PUBLIC_STRIPE_SECRET_KEY);
