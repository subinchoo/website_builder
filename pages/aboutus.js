

export function loadAboutPage(editor) {
  editor.BlockManager.add('page-about', {
    label: 'About Us Page',
    category: 'Pages',
    content: `
      <!-- Hero section with editable background -->
    <section data-gjs-type="about-hero" class="about-hero">
    <div class="about-hero-overlay">
      <h1>About Us</h1>
    </div>
 </section>
    <div class ="about-nav">
      <a href="#"> /Home </a>
      <a href="#"> /Blog </a>
    </div>
 

      <section class="about-intro">
        <div class="about-container">
          <h2>Introduction To Best Digital Agency!</h2>
          <p class="about-intro-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sed lorem eu velit accumsan euismod.
          </p>
          <div class="about-features">
            <div class="about-feature-box"  align="centre">
              <img src="" >
              <h3>Feature 1</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="about-feature-box"  align="centre">
              <img src="">
              <h3>Feature 2</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <div class="about-feature-box"  align="centre">
              <img src="" >
              <h3>Feature 3</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="about-team">
        <div class="about-container">
          <h2>Team Members</h2>
          <p class="about-team-subtitle">Meet our expert team members who are passionate and professional.</p>
          <div class="about-team-members">
            <div class="about-team-card">
              <img src="https://via.placeholder.com/120" alt="Team Member">
              <h4>Team member</h4>
              <p>Role</p>
            </div>
            <div class="about-team-card" align="centre">
              <img src="https://via.placeholder.com/120" alt="Team Member">
              <h4>Team member</h4>
              <p>Role</p>
            </div>
            <div class="about-team-card">
              <img src="https://via.placeholder.com/120" alt="Team Member">
              <h4>Team member</h4>
              <p>Role</p>
            </div>
            <div class="about-team-card">
              <img src="https://via.placeholder.com/120" alt="Team Member">
              <h4>Team member</h4>
              <p>Role</p>
            </div>
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
