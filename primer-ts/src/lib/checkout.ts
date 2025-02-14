export async function createCheckoutSession() {
  try {
    const response = await fetch('/api/create-checkout', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const { url } = await response.json()

    // Redirect to Stripe Checkout
    window.location.href = url
  } catch (error) {
    console.error('Error:', error)
  }
} 