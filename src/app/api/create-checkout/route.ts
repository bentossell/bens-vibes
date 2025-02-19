import { NextResponse } from 'next/server'
import { Stripe } from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-01-27.acacia',
})

const BASE_PRICE = 5900 // Starting price in cents ($59.00)
const PRICE_INCREMENT = 1000 // Price increase in cents ($10.00)
const MAX_PRICE = 20000 // Maximum price in cents ($200.00)
const INCREMENT_INTERVAL = 10 // Number of purchases before price increases

async function calculatePrice(): Promise<number> {
  // Get successful payments count from Stripe
  const payments = await stripe.paymentIntents.list({
    limit: 100, // Adjust this if you expect more than 100 purchases
    status: 'succeeded'
  });

  const purchaseCount = payments.data.length;
  const increments = Math.floor(purchaseCount / INCREMENT_INTERVAL)
  const calculatedPrice = BASE_PRICE + (increments * PRICE_INCREMENT)
  return Math.min(calculatedPrice, MAX_PRICE)
}

export async function POST() {
  try {
    const currentPrice = await calculatePrice()
    
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Vibe Coding Course',
            },
            unit_amount: currentPrice,
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
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    )
  }
} 