export async function createCheckoutSession() {
  try {
    const response = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}), // Send empty body for now, can add customer data later if needed
    })

    if (!response.ok) {
      throw new Error('Network response was not ok')
    }

    const { url, error } = await response.json()

    if (error) {
      throw new Error(error)
    }

    if (!url) {
      throw new Error('No checkout URL received')
    }

    // Redirect to Stripe Checkout
    window.location.href = url
  } catch (error) {
    console.error('Error:', error)
    alert('Failed to create checkout session. Please try again.')
  }
} 