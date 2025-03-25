export function loadSectionBlocks(editor){

  editor.BlockManager.add('hero-section', {
    label: 'Hero Section',
    category: 'Sections',
    content: `
      <section 
        data-gjs-type="section"
        style="padding: 100px; background: rgb(89, 167, 240); color: white; text-align: center;">
        <h1 style="font-size: 3em;">Cinematic Hero</h1>
        <p>Build beautiful websites easily.</p>
      </section>
    `
  });
  
    
  
  // Block: Feature Section
  editor.BlockManager.add('feature-section', {
    label: 'Feature Section',
    category: 'Sections',
    content: `
      <section style="padding: 60px 20px; text-align: center;">
        <h2>Our Features</h2>
        <div style="display: flex; justify-content: center; gap: 40px; margin-top: 40px;">
          <div>
            <h3>Speed</h3>
            <p>Build fast, deploy faster.</p>
          </div>
          <div>
            <h3>Design</h3>
            <p>Pixel-perfect components.</p>
          </div>
          <div>
            <h3>Security</h3>
            <p>Built-in best practices.</p>
          </div>
        </div>
      </section>
    `
  });
  
  // Block: Testimonial
  editor.BlockManager.add('testimonial-block', {
    label: 'Testimonial',
    category: 'Sections',
    content: `
      <section style="padding: 60px 20px; background: #f5f5f5; text-align: center;">
        <img src="https://via.placeholder.com/100" style="border-radius: 50%; margin-bottom: 20px;" />
        <p style="font-style: italic;">"This builder helped me create my dream site in hours!"</p>
        <p><strong>- John Smith, Developer</strong></p>
      </section>
    `
  });
  
  editor.BlockManager.add('about-section', {
    label: 'About Section',
    category: 'Sections',
    content: `
      <section style="display: flex; gap: 40px; padding: 60px 20px; align-items: center;">
        <div style="flex: 1;">
          <img src="https://via.placeholder.com/500x400" style="width: 100%; border-radius: 12px;" />
        </div>
        <div style="flex: 1;">
          <h2 style="font-size: 2.2em; margin-bottom: 10px;">Our Story</h2>
          <p style="font-size: 1.1em; line-height: 1.7;">We started with a mission to make web creation fast, visual, and accessible. Our tools empower designers and developers alike to build beautifully.</p>
          <ul style="margin-top: 20px;">
            <li>✔ 100% Drag and Drop</li>
            <li>✔ Responsive by Default</li>
            <li>✔ Easy to Export</li>
          </ul>
        </div>
      </section>
    `
  });
  
  editor.BlockManager.add('portfolio-section', {
    label: 'Portfolio Section',
    category: 'Sections',
    content: `
      <section style="padding: 60px 20px; text-align: center;">
        <h2>Our Work</h2>
        <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 30px; justify-content: center;">
          <img src="https://via.placeholder.com/300x200" style="width: 300px; border-radius: 10px;" />
          <img src="https://via.placeholder.com/300x200" style="width: 300px; border-radius: 10px;" />
          <img src="https://via.placeholder.com/300x200" style="width: 300px; border-radius: 10px;" />
          <img src="https://via.placeholder.com/300x200" style="width: 300px; border-radius: 10px;" />
        </div>
      </section>
    `
  });
  
  editor.BlockManager.add('cta-banner', {
    label: 'CTA Banner',
    category: 'Sections',
    content: `
      <section style="padding: 100px 20px; text-align: center; background: linear-gradient(135deg, #1e3c72, #2a5298); color: white;">
        <h2 style="font-size: 2.5em;">Ready to Launch?</h2>
        <p style="font-size: 1.1em; margin: 20px 0;">Join thousands who are building faster with our platform.</p>
        <a href="#" style="padding: 15px 30px; background: white; color: #2a2a72; border-radius: 6px; text-decoration: none;">Get Started Now</a>
      </section>
    `
  });
  
  editor.BlockManager.add('grid-section', {
    label: 'Grid Section',
    category: 'Sections',
    content: `
      <section style="padding: 60px 20px;">
        <h2 style="text-align: center; margin-bottom: 40px;">Our Features</h2>
        <div style="
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          justify-content: center;
        ">
        </div>
      </section>
    `
  });
  
}