export function loadThankYouPage(editor) {
  editor.BlockManager.add('page-thankyou', {
    label: 'Thank You Page',
    category: 'Pages',
    content: `
    <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="marketing-style.css">

    <section class="thankyou-wrapper">
      
        <div class="logo" style="text-align: center; margin: 2rem 0;">
          <a href = "#">YOUR <strong>LOGO</strong></a>
        </div>
   

      <main class="thankyou-main">
        <div class="thankyou-content">
          <img src="https://cdn-icons-png.flaticon.com/512/561/561127.png" alt="Envelope Icon" class="thankyou-icon" />
          <h1 class="thankyou-title">Thank You!</h1>
          <p class="thankyou-message">Your message has been sent successfully. We’ll get back to you shortly!</p>
          <p class="thankyou-highlight">Follow us on social media for updates:</p>
          <div class="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook">
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733558.png" alt="Twitter">
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733609.png" alt="Instagram">
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn-icons-png.flaticon.com/512/145/145807.png" alt="LinkedIn">
            </a>
          </div>
        </div>

        <div class="return_home">
       <a href="#" class="btn-back-home">Go Back Home</a>
        </div>
      </main>

      <footer class="thankyou-footer">
        <div class="footer-columns">
          <div class="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Services</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Support</h4>
            <ul>
              <li><a href="#">FAQs</a></li>
              <li><a href="#">Help Center</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact Us</h4>
            <p>123 Main Street, City</p>
            <p>Phone: (555) 555-5555</p>
            <p>Email: support@company.com</p>
          </div>
        </div>
        <div class="thankyou-bottom">
          <p>&copy; 2025 Your Company. All rights reserved.</p>
        </div>
      </footer>
    </section>
    `,
  });
}
