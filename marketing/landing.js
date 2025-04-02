export function loadLandingPage(editor) {
    editor.BlockManager.add('page-landing', {
      label: 'Landing Page',
      category: 'Pages',
      content: `
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="marketing-style.css">
  
        <section class="landing-hero">
          <div class="landing-hero-content">
            <h1 class="landing-title">Ready to Launch Your Product?</h1>
            <p class="landing-sub">Join thousands of entrepreneurs using our tools to go from idea to execution.</p>
            <a href="#" class="landing-cta">Get Started Free</a>
          </div>
        </section>
  
        <section class="landing-benefits">
          <h2 class="landing-section-heading">Everything You Need to Grow</h2>
          <div class="landing-benefit-grid">
            <div class="landing-benefit-card">
              <h3>No-Code Builder</h3>
              <p>Launch websites fast with our drag-and-drop interface.</p>
            </div>
            <div class="landing-benefit-card">
              <h3>Marketing Automation</h3>
              <p>Emails, funnels, and campaigns — all automated.</p>
            </div>
            <div class="landing-benefit-card">
              <h3>AI Support</h3>
              <p>Let AI handle your customer support and inquiries.</p>
            </div>
          </div>
        </section>

        
        <section class="landing-testimonial">
          <blockquote>
            “We launched in a weekend with zero code. Best tool ever.”
          </blockquote>
          <p class="testimonial-author">– Hannah, Startup Founder</p>
        </section>
  
        <section class="landing-form-section" id="signup-form">
          <div class="form-box">
            <h2>Join Us Today</h2>
          
          <form class="signup-form">
            <input type="text" name="name" placeholder="Full Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="password" name="password" placeholder="Password" required />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required />
            <button type="submit">Sign Up</button>
          </form>

          <div class="divider"><span>or sign up with</span></div>

          <div class="social-login">
            <button class="social-btn google-btn">
              <i class="fab fa-google"></i> Sign up with Google
            </button>
            <button class="social-btn facebook-btn">
              <i class="fab fa-facebook-f"></i> Sign up with Facebook
            </button>
          </div>

          <p class="signup-login-text">
            Already have an account? <a href="#">Log In</a>
          </p>
        
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
  