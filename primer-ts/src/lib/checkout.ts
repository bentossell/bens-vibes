export async function createCheckoutSession() {
  try {
    // Show loading state
    const button = document.querySelector('button') as HTMLButtonElement;
    if (button) {
      button.disabled = true;
      button.textContent = 'Loading...';
    }

    const response = await fetch('/api/create-checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({}), // Send empty body for now, can add customer data later if needed
    })

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error(data.error);
    }

    if (!data.url) {
      throw new Error('No checkout URL received');
    }

    // Redirect to Stripe Checkout
    window.location.href = data.url;
  } catch (error) {
    console.error('Error:', error);
    alert('Failed to create checkout session. Please try again.');
    
    // Reset button state
    const button = document.querySelector('button') as HTMLButtonElement;
    if (button) {
      button.disabled = false;
      button.textContent = 'Pre-order now';
    }
  }
} 