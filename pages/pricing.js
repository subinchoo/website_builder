export function loadPricingPage(editor) {
  editor.BlockManager.add('page-pricing', {
    label: 'Pricing Pages',
    category: 'Pages',
    content: `
     <section class="home-hero">
        <h1 class="home-title">Plans</h1>
        <p class="home-subtext">Find the perfect plan for you</p>
    </section>
    
    <section class="pricing-section">
      <h2>Pricing Plans</h2>
      <div class="pricing-cards">
        <div class="pricing-card">
          <h3>Free</h3>
          <p>$0 / mo</p>
          <ul>
            <li>Basic Templates</li>
            <li>Limited Storage</li>
            <li>Email Support</li>
          </ul>
          <a href="#" class="btn fancy-btn">Get Started</a>
        </div>
        <div class="pricing-card">
          <h3>Pro</h3>
          <p>$19.99 / mo</p>
          <ul>
            <li>All Templates</li>
            <li>Unlimited Storage</li>
            <li>Priority Support</li>
          </ul>
          <a href="#payment-section" class="btn fancy-btn">Upgrade</a>
        </div>
      </div>
    </section>

    <section id="payment-section" class="payment-section">
      <h2>Complete Your Payment</h2>
      <form class="payment-form">
        <div class="form-group">
          <label for="card-name">Cardholder Name</label>
          <input type="text" id="card-name" name="card-name" placeholder="Jane Doe" required />
        </div>
        <div class="form-group">
          <label for="card-number">Card Number</label>
          <input type="text" id="card-number" name="card-number" placeholder="1234 5678 9012 3456" required />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="expiry-date">Expiry Date</label>
            <input type="text" id="expiry-date" name="expiry-date" placeholder="MM/YY" required />
          </div>
          <div class="form-group">
            <label for="cvc">CVC</label>
            <input type="text" id="cvc" name="cvc" placeholder="123" required />
          </div>
        </div>
        <button type="submit" class="btn fancy-btn">Pay $19.99</button>
      </form>
    </section>

     <footer class="site-footer">
      <div class="footer-links">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
      </div>
      <p>&copy; 2025 Your Company. All rights reserved.</p>
    </footer>
    `
  });
}
