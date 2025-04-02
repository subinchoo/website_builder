export function loadContactPage(editor) {
    editor.BlockManager.add('page-contact', {
      label: 'Contact Us Page',
      category: 'Pages',
      content: `

          <section class="home-hero">
        <h1 class="home-title">Contact Us</h1>
        <p class="home-subtext">We are here to help you</p>
    </section>

        <section class="contact-section">
          <div class="contact-intro">
            <h2>Connect with Our Team</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
  
          <div class="contact-wrapper">
            <!-- Contact Form -->
            <form 
              action="https://formsubmit.co/replacewithyour@email.com" 
              method="POST" 
              class="contact-form"
            >
              <input type="text" name="name" placeholder="Your name" required />
              <input type="email" name="email" placeholder="Your email" required />
              <input type="text" name="subject" placeholder="Subject" />
              <textarea name="message" rows="4" placeholder="Submit your message request..." required></textarea>
              <button type="submit">Send message</button>
  
              <!-- Hidden fields for autoresponse -->
              <input type="hidden" name="_autoresponse" value="Thank you for contacting us! We'll get back to you shortly." />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_captcha" value="false" />
            </form>
  
            <!-- Contact Info -->
            <div class="contact-details">
              <p>Lorem ipsum dolor sit amet, consectetur turpis eu egestas.</p>
              <ul>
                <li><strong>Address:</strong> Company Address </li>
                <li><strong>Mobile:</strong> Company Number </li>
                <li><strong>Availability:</strong> Daily 09 am - 05 pm</li>
                <li><strong>Email:</strong> company@email.com</li>
              </ul>
              <div class="social-icons">
                <a href="#">FB</a> <a href="#">IG</a> <a href="#">X</a> <a href="#">LI</a>
              </div>
            </div>
          </div>
        </section>
  
        <section class="faq-section">
          <h2>Your Common Queries <span>Answered</span></h2>
     
  
          <div class="faq-content">
            <div class="faq-list" data-gjs-droppable="true">
              <details>
                <summary>How can I benefit from your startup?</summary>
                <p>We help your business grow by...</p>
              </details>
              <details>
                <summary>How can I get in touch with customer support?</summary>
                <p>Use the form above or call us directly.</p>
              </details>
              <details>
                <summary>How do you ensure data security and privacy?</summary>
                <p>We use encrypted data protocols...</p>
              </details>
            </div>
            <div class="faq-image">
              <img src="https://via.placeholder.com/400x300" alt="Customer support woman" />
            </div>
          </div>
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
  