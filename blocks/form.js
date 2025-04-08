export function loadFromBlocks(editor){
    editor.BlockManager.add('contact-form', {
        label: 'Contact Form',
        category: 'Form',
        content: `
          <div
            class="contact-form-wrapper"
            data-gjs-resizable='{
              "tl": 0,
              "tc": 0,
              "tr": 0,
              "cl": 1,
              "cr": 1,
              "bl": 0,
              "bc": 0,
              "br": 0
            }'
            data-gjs-draggable="true"
          >
            <h2>Contact Us</h2>
            <form>
              <div>
                <label>Name</label>
                <input type="text" placeholder="Your name" style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 8px; font-size: 1em;" />
              </div>
              <div>
                <label>Email</label>
                <input type="email" placeholder="Your email" />
              </div>
              <div>
                <label>Message</label>
                <textarea placeholder="Your message"></textarea>
              </div>
              <div style="text-align: center;">
                <button type="submit">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        `
      });
      
      editor.BlockManager.add('signup-form', {
        label: 'Signup Form',
        category: 'Form',
        content: `
      <section class="signup-section">
        <div class="signup-box">
          <h2>Create Your Account</h2>
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
        </div>
      </section>
    `
      });
  
      
      editor.BlockManager.add('signin-form', {
        label: 'Signin Form',
        category: 'Form',
        content: `
      <section class="signin-section">
  <div class="signin-box">
    <h2>Welcome Back</h2>
    <form class="signin-form">
      <input type="email" name="email" placeholder="Email Address" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Sign In</button>
    </form>

    <div class="divider"><span>or sign in with</span></div>

    <div class="social-login">
      <button class="social-btn google-btn">
        <i class="fab fa-google"></i> Sign in with Google
      </button>
      <button class="social-btn facebook-btn">
        <i class="fab fa-facebook-f"></i> Sign in with Facebook
      </button>
    </div>

    <p class="signup-login-text">
      Don't have an account? <a href="#">Sign Up</a>
    </p>
  </div>
</section>

    `
      });

      editor.BlockManager.add('pricing-form', {
      label: 'Pricing Form',
      category: 'Form',
      content: `
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
<a href="#" class="btn fancy-btn custom-link">Upgrade</a>
        </div>
      </div>
    </section>

      `
    });

    editor.BlockManager.add('blog-form', {
      label : 'Blog Form',
      category: 'Form',
      content:`
       <section class="blog-form-wrapper">
          <h2>Create New Blog Post</h2>
          <form class="blog-form">
            <input type="text" placeholder="Blog Title" name="title" required />
            <input type="text" placeholder="Subtitle" name="subtitle" />
            
           <label for="category">Category</label>
                <select name="category" id="category-select" required>
                <option value="">Select Category</option>
                <option value="ecommerce">E-commerce</option>
                <option value="marketing">Marketing</option>
                <option value="design">Design</option>
                <option value="tech">Tech</option>
                <option value="other">Other</option>
                </select>

                <input 
                type="text" 
                id="custom-category" 
                name="custom_category" 
                placeholder="Enter new category..." 
                style="display: none; margin-top: 10px;" 
                />

  
            <label>Upload Image</label>
            <input type="file" name="image" accept="image/*" />
  
            <textarea name="body" rows="10" placeholder="Write your blog content here..."></textarea>
  
            <input type="text" name="hashtags" placeholder="#hashtag1, #hashtag2" />
  
            <button type="submit">Publish Blog</button>
          </form>
        </section>
`
    });

  // FOOTER
  editor.BlockManager.add('footer-element', {
    label: 'Footer',
    category: 'Form',
    content: `
        <footer class="site-footer">
      <div class="footer-links">
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Terms</a>
        <a href="#">Privacy</a>
      </div>
      <p>&copy; 2025 Your Company. All rights reserved.</p>
    </footer>`
  });
}