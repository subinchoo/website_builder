export function loadBlogHomePage(editor) {
    const today = new Date();
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-US', options);
  
    editor.BlockManager.add('page-blog', {
      label: 'Blog Home',
      category: 'Pages',
      content: `
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
  
        <section class="blog-hero">
<img
  src="https://via.placeholder.com/1200x500"
  class="hero-bg"
  alt="Hero"
  data-gjs-type="image"
  data-gjs-custom-name="Hero Banner Image"
  ...
/>
          <div class="hero-overlay"></div>
          <div class="hero-text">
            <p class="featured">Featured</p>
            <h1 class="hero-title">Breaking Into Product Design: Advice from Untitled Founder, Frankie</h1>
            <p class="hero-sub">No fancy degree needed — learn how to break into the design world smartly.</p>
          </div>
        </section>
  
        <section class="blog-posts">
          <h2 class="blog-heading">Recent Blog Posts</h2>
          <div class="blog-grid">
            ${[1,2,3,4,5,6].map(i => `
              <a href="/blog/post-${i}" class="blog-card">
                <div class="blog-image-wrap">
                  <img src="https://via.placeholder.com/400x240?text=Post+${i}" alt="Post ${i}" />
                </div>
                <div class="blog-content">
                  <span class="blog-tag">E-commerce</span>
                  <h3 class="blog-title">Post Title ${i}</h3>
                  <p class="blog-meta">Author Name · ${formattedDate}</p>
                </div>
              </a>
            `).join('')}
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
  