import { NextResponse } from 'next/server'
import { Stripe } from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not set');
}

if (!process.env.NEXT_PUBLIC_SITE_URL) {
  throw new Error('NEXT_PUBLIC_SITE_URL is not set');
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2023-10-16', // Use the latest stable API version
})

const BASE_PRICE = 6900 // Starting price in cents ($69.00)
const PRICE_INCREMENT = 1000 // Price increase in cents ($10.00)
const MAX_PRICE = 20000 // Maximum price in cents ($200.00)
const INCREMENT_INTERVAL = 10 // Number of purchases before price increases

// This would normally come from your database
let purchaseCount = 0

function calculatePrice(count: number): number {
  const increments = Math.floor(count / INCREMENT_INTERVAL)
  const calculatedPrice = BASE_PRICE + (increments * PRICE_INCREMENT)
  return Math.min(calculatedPrice, MAX_PRICE)
}

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Vibe Coding Course',
              description: 'Learn to build with code using AI only',
            },
            unit_amount: 6900, // $69.00
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      allow_promotion_codes: true,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Stripe error:', error)
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    )
  }
} 