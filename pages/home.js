export function loadHomePage(editor) {
  editor.BlockManager.add('page-home', {
    label: 'Home Page',
    category: 'Pages',
    content: `
      <section class="hero-section">
        <div class="hero-container">
          <h1 class="hero-title">Welcome to Our Awesome Site</h1>
          <p class="hero-subtext">Build stunning, responsive websites without writing a single line of code.</p>
          <a href="#" class="btn-primary">Get Started</a>
        </div>
      </section>

      <section class="features-section">
        <div class="features-container">
          <h2 class="features-heading">Why Choose Us?</h2>
          <div class="features-grid">
            <div class="feature-card">
              <h3>Easy to Use</h3>
              <p>No coding skills required. Just drag, drop, and go live in minutes.</p>
            </div>
            <div class="feature-card">
              <h3>Fully Responsive</h3>
              <p>Your website will look great on any device—desktop, tablet, or mobile.</p>
            </div>
            <div class="feature-card">
              <h3>Customizable</h3>
              <p>Endless design possibilities with powerful tools and templates.</p>
            </div>
          </div>
        </div>
      </section>
    `
  });
}
