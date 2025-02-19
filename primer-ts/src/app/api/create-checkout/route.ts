import { NextResponse } from 'next/server'
import { Stripe } from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
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
    const currentPrice = calculatePrice(purchaseCount)
    
    // Create a Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product: 'prod_RlxGkHvCmgRN88', // Your existing product ID
            unit_amount: currentPrice,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}`,
      allow_promotion_codes: true,
      expires_at: Math.floor(Date.now() / 1000) + 3600, // Expires in 1 hour
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