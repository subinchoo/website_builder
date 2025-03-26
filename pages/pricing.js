export function loadPricingPage(editor) {
    editor.BlockManager.add('page-pricing', {
      label: 'Pricing Page',
      category: 'Form',
      content: `
        <section class="pricing-section">
          <div class="pricing-header">
            <h1 class="pricing-title">Choose Your Plan</h1>
            <p class="pricing-subtext">Find the perfect plan for your needs</p>
          </div>
          <div class="pricing-cards">
            <div class="pricing-card">
              <h2>Basic</h2>
              <p class="price">$9/mo</p>
              <ul>
                <li>Basic Support</li>
              </ul>
              <a href="#" class="btn-pricing">Select</a>
            </div>
            <div class="pricing-card featured">
              <h2>Pro</h2>
              <p class="price">$29/mo</p>
              <ul>
                <li>Priority Support</li>
              </ul>
              <a href="#" class="btn-pricing">Select</a>
            </div>
            <div class="pricing-card">
              <h2>Enterprise</h2>
              <p class="price">$99/mo</p>
              <ul>
                <li>24/7 Support</li>
              </ul>
              <a href="#" class="btn-pricing">Select</a>
            </div>
          </div>
        </section>
      `
    });
  }
  