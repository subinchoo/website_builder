export function loadUpsellPage(editor) {
    editor.BlockManager.add('page-upsell', {
      label: 'Upsell Page',
      category: 'Pages',
      content: `
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" rel="stylesheet">
  
        <section class="upsell-hero">
          <div class="upsell-hero-content">
            <h1 class="upsell-title">Wait! One More Thing...</h1>
            <p class="upsell-sub">Upgrade now and unlock exclusive features to boost your performance.</p>
          </div>
        </section>
  
        <section class="upsell-offer">
          <div class="offer-box">
            <h2 class="offer-heading">Upgrade to Pro</h2>
            <ul class="offer-features">
              <li>Unlimited Projects</li>
              <li>Advanced Analytics</li>
              <li>Priority Support</li>
              <li>AI-Powered Automation</li>
            </ul>
            <div class="offer-price">
              <span class="price-amount"><del>$19.99</del> <strong>$11.99</strong></span>
              <span class="price-note">/month, limited time offer!</span>
            </div>
            <div class="offer-actions">
              <a href="/checkout" class="btn-upgrade">Yes, Upgrade Me</a>
              <a href="/thank-you" class="btn-skip">No Thanks</a>
               <span class="price-note">First month offer, from the next month, will be original price</span>
            </div>
           
          </div>
        </section>
  
        <section class="upsell-guarantee">
          <p>30-Day Money-Back Guarantee – No questions asked.</p>
        </section>
  
        <div class="limited-popup">
          <div class="popup-box">
            <p><strong>🔥 Limited Time Offer!</strong><br> Only available for the next 10 minutes.</p>
            <button class="popup-close">Got it</button>
          </div>
        </div>
        
        <script>
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
      const popup = document.querySelector('.limited-popup');
      const closeBtn = popup?.querySelector('.popup-close');

      if (popup) {
        popup.style.display = 'flex'; // This must match your CSS layout!
      }

      if (closeBtn) {
        closeBtn.addEventListener('click', () => {
          popup.style.display = 'none';
        });
      }
    }, 2000);
  });
</script>




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
  