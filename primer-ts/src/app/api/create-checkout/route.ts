import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
})

const BASE_PRICE = 59 // Starting price in dollars
const PRICE_INCREMENT = 10 // Price increase per 10 purchases
const MAX_PRICE = 200 // Maximum price cap
const INCREMENT_INTERVAL = 10 // Number of purchases before price increases

// This would normally come from your database
let purchaseCount = 0

function calculatePrice(count: number): number {
  const increments = Math.floor(count / INCREMENT_INTERVAL)
  const calculatedPrice = BASE_PRICE + (increments * PRICE_INCREMENT)
  return Math.min(calculatedPrice, MAX_PRICE)
}

export async function GET() {
  try {
    const currentPrice = calculatePrice(purchaseCount)
    
    // Create a Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Vibe Coding Course Pre-order',
              description: 'Early access to the complete Vibe Coding video course',
            },
            unit_amount: currentPrice * 100, // Stripe uses cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
    })

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Error creating checkout session:', error)
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    )
  }
} 