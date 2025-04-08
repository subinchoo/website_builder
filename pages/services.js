export function loadServicesPage(editor) {
    editor.BlockManager.add('page-services', {
      label: 'Services Page',
      category: 'Pages',
      content: `
        <section class="services-hero" style="text-align: center; padding: 80px 20px; background: #f0f4fa;">
          <h1 style="font-size: 3rem; margin-bottom: 1rem;">Accelerator Programs</h1>
          <p style="font-size: 1.2rem; max-width: 700px; margin: 0 auto 2rem;">Boost your business growth through our expert-led social media accelerator courses designed for e-commerce success.</p>
          <a href="#" class="cta-btn" style="padding: 14px 28px; background: #2a2a72; color: #fff; text-decoration: none; border-radius: 8px; font-weight: bold;">Get Started</a>
        </section>
  
        <section class="services-cards" style="padding: 60px 20px; background: #fff; display: flex; flex-wrap: wrap; justify-content: center; gap: 2rem;">
          <div class="service-card" style="background: #f9f9f9; padding: 30px; border-radius: 12px; width: 300px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
            <h3>Instagram Accelerator</h3>
            <p>Master reels, ads, and audience engagement with hands-on training.</p>
          </div>
          <div class="service-card" style="background: #f9f9f9; padding: 30px; border-radius: 12px; width: 300px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
            <h3>TikTok Growth Mastery</h3>
            <p>Learn viral content strategies and boost your e-commerce visibility.</p>
          </div>
          <div class="service-card" style="background: #f9f9f9; padding: 30px; border-radius: 12px; width: 300px; text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
            <h3>YouTube Funnels</h3>
            <p>Set up lead-generating video content and automated funnel systems.</p>
          </div>
        </section>
  
        <section class="benefits-section" style="padding: 60px 20px; background: #f0f4fa; text-align: center;">
          <h2 style="font-size: 2rem; margin-bottom: 2rem;">Why Choose Our Programs?</h2>
          <ul style="list-style: none; padding: 0; max-width: 800px; margin: auto; text-align: left;">
            <li style="margin-bottom: 1rem;">✔ Lifetime access to course materials</li>
            <li style="margin-bottom: 1rem;">✔ Weekly live mentoring calls</li>
            <li style="margin-bottom: 1rem;">✔ Templates and tools included</li>
            <li style="margin-bottom: 1rem;">✔ Private community access</li>
          </ul>
        </section>
  
        <section class="cta-final" style="padding: 60px 20px; background: #2a2a72; color: white; text-align: center;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Start Scaling Your Business Today</h2>
          <a href="#" style="padding: 14px 28px; background: #fff; color: #2a2a72; font-weight: bold; text-decoration: none; border-radius: 8px;">Join the Program</a>
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
      `,
    });
  } 
  