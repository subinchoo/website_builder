export function loadHomePage(editor) {
  editor.BlockManager.add('page-home', {
    label: 'Home Page',
    category: 'Pages',
    content: `
    <section class="home-hero">
        <h1 class="home-title">Build Websites Effortlessly</h1>
        <p class="home-subtext">Empowering creators with intuitive, no-code tools to bring ideas to life.</p>
    </section>

    <section class="auth-buttons">
      <div class="auth-button-group">
        <a href="#" class="btn fancy-btn">Sign Up</a>
        <a href="#" class="btn fancy-btn-outline">Sign In</a>
      </div>
    </section>

    <section class="features-section">
      <h2>Features</h2>
      <div class="features-grid">
        <div class="feature-card">
        <img src= "" alt="Drag & Drop" class = "feature-icon" />
          <h3>Drag & Drop Builder</h3>
          <p>No-code visual editor to craft pages with ease.</p>
        </div>
        <div class="feature-card">
          <img src= "" alt="Drag & Drop" class = "feature-icon" />

          <h3>Responsive Design</h3>
          <p>Your website looks great on any device.</p>
        </div>
        <div class="feature-card">
         <img src= "" alt="Drag & Drop" class = "feature-icon" />

          <h3>Custom Components</h3>
          <p>Pre-built blocks to speed up your workflow.</p>
        </div>
      </div>
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
          <a href="#" class="btn fancy-btn">Upgrade</a>
        </div>
      </div>
    </section>

    <section class="about-brief">
      <h2>Who We Are</h2>
      <p>We're a passionate team of developers, designers, and dreamers building intuitive web tools that make life easier.</p>
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
