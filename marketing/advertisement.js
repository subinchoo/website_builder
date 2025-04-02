export function loadAdPage(editor) {
  editor.BlockManager.add('page-advertisement', {
    label: 'Advertisement Page',
    category: 'Pages',
    content: `
      <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="ad-style.css">

      <section class="ad-hero">
        <div class="ad-hero-content">
          <h1 class="ad-title">We Help Launch Your eCommerce Idea</h1>
          <p class="ad-subtitle">Full-service support to bring your vision to life — fast, scalable, and designed to convert.</p>
          <a href="#" class="ad-cta">Get Started</a>
        </div>
      </section>

      <section class="ad-features">
        <h2 class="ad-section-heading">Why Choose Us?</h2>
        <div class="ad-feature-grid">
          <div class="ad-feature-card">
            <h3>Start Today</h3>
            <p>Kick off your project without delay. Simple onboarding, clear goals.</p>
          </div>
          <div class="ad-feature-card">
            <h3>Unlimited Requests</h3>
            <p>Need more? We keep it coming — no caps, no waiting.</p>
          </div>
          <div class="ad-feature-card">
            <h3>Launch Fast</h3>
            <p>We help you go live in days, not months.</p>
          </div>
          <div class="ad-feature-card">
            <h3>Pause or Cancel Anytime</h3>
            <p>No contracts, no pressure — full control is yours.</p>
          </div>
        </div>
      </section>

      <section class="ad-media">
        <h2 class="ad-section-heading">Our Works</h2>
        <img src="https://via.placeholder.com/1000x500" alt="Project Preview" class="ad-preview-img" />
        <img src="https://via.placeholder.com/1000x500" alt="Project Preview" class="ad-preview-img" />
        
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
