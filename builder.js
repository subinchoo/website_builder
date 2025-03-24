const editor = grapesjs.init({
  container: '#gjs',
  height: '100%',
  width: '100%',
  fromElement: false,
  storageManager: false,
  canvas: {
    styles: [
      'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap',
      '* { font-family: "Open Sans", sans-serif; }',
      'body { font-family: "Open Sans", sans-serif; }'
    ]
  },

  panels: {
    defaults: [
      {
        id: 'topbar',
        el: '#top-panel',
        buttons: [
          {
            id: 'undo',
            className: 'fa fa-undo',
            command: 'core:undo',
            attributes: { title: 'Undo' }
          },
          {
            id: 'redo',
            className: 'fa fa-redo',
            command: 'core:redo',
            attributes: { title: 'Redo' }
          },
          {
            id: 'preview',
            className: 'fa fa-eye',
            command: 'preview',
            attributes: { title: 'Preview' }
          },
          {
            id: 'save',
            className: 'fa fa-save',
            command: 'save-data',
            attributes: { title: 'Save Project' }
          },
          {
            id: 'device-desktop',
            label: '<i class="fa fa-desktop"></i>',
            command: e => e.setDevice('Desktop'),
            attributes: { title: 'Desktop View' }
          },
          {
            id: 'device-tablet',
            label: '<i class="fa fa-tablet-alt"></i>',
            command: e => e.setDevice('Tablet'),
            attributes: { title: 'Tablet View' }
          },
          {
            id: 'device-mobile',
            label: '<i class="fa fa-mobile-alt"></i>',
            command: e => e.setDevice('Mobile'),
            attributes: { title: 'Mobile View' }
          }
        ]
      },
      {
        id: 'left-panel',
        el: '#left-panel'
      }
    ]
  },

  blockManager: {
    appendTo: '#blocks-tab'
  },

  layerManager: {
    appendTo: '#layers-tab'
  },

  deviceManager: {
    devices: [
      { name: 'Desktop', width: '' },
      { name: 'Tablet', width: '768px' },
      { name: 'Mobile', width: '375px' },
    ]
  }
});

// TEXT
editor.BlockManager.add('text-element', {
  label: 'Text',
  category: 'Elements',
  content: `<p style="font-size: 1.1em;">Insert your text here</p>`
});

// HEADING
editor.BlockManager.add('heading-element', {
  label: 'Heading',
  category: 'Elements',
  content: `<h2 style="font-size: 2em;">Heading Title</h2>`
});

// IMAGE
editor.BlockManager.add('image-element', {
  label: 'Image',
  category: 'Elements',
  content: `<img src="https://via.placeholder.com/600x400" style="width:100%; border-radius: 6px;" />`
});

// BUTTON
editor.BlockManager.add('button-element', {
  label: 'Button',
  category: 'Elements',
  content: `<a href="#" style="display:inline-block;padding:10px 20px;background:#618ff3;color:white;text-decoration:none;border-radius:5px;">Click Me</a>`
});

// INPUT
editor.BlockManager.add('input-element', {
  label: 'Text Input',
  category: 'Elements',
  content: `<input type="text" font-style = "Open Sans"placeholder="Your text" style="padding: 10px; width: 100%; border: 1px solid #ccc; border-radius: 4px;" />`
});

// TEXTAREA
editor.BlockManager.add('textarea-element', {
  label: 'Textarea',
  category: 'Elements',
  content: `<textarea placeholder="Your message" style="width: 100%; height: 100px; padding: 10px; border: 1px solid #ccc; border-radius: 4px;"></textarea>`
});

// GRID (2-COLUMN)
editor.BlockManager.add('grid-2-column', {
  label: '2 Column Grid',
  category: 'Elements',
  content: `
    <div style="display: flex; gap: 20px;">
      <div style="flex: 1; background: #f5f5f5; padding: 20px;">Column 1</div>
      <div style="flex: 1; background: #f5f5f5; padding: 20px;">Column 2</div>
    </div>
  `
});


// Block: Hero Section
editor.BlockManager.add('hero-section', {
  label: 'Hero Section',
  category: 'Sections',
  content: `
    <section style="padding: 100px; text-align: center; background: #2a2a72; color: white;">
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

editor.BlockManager.add('contact-form', {
  label: 'Contact form',
  category: 'Form',
  content: `
    <section style="padding: 60px 20px;">
      <h1 style="text-align: center; margin-bottom: 40px;">Contact us</h1>
      <div style="
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
      ">
      <div style="margin-bottom: 20px;">
  <label style="text-align: left;">Name</label><br />
  <input type="text" id="contact-form-name" placeholder="Name" />
</div>

<div style="margin-bottom: 20px;">
  <label style="text-align: left;">Email</label><br />
  <input type="text" id="contact-form-email" placeholder="Email" />
</div>

<br></br>

<div style = "margin-bottom : 20px;">
  <label style = "text-align: left;">Contact us</label><br />

  <input type="text" id="contact-form" placeholder="We are here to help you" /><br />

</div>




      </div>
    </section>
  `
});

// Save command (temporary alert for now)
editor.Commands.add('save-data', {
  run(editor, sender) {
    sender && sender.set('active', false);
    const html = editor.getHtml();
    const css = editor.getCss();
    alert('Saved!\n\nHTML length: ' + html.length + '\nCSS length: ' + css.length);
  }
});

// Sidebar tab switching
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    
    btn.classList.add('active');
    const target = btn.getAttribute('data-tab');
    document.getElementById(`${target}-tab`).classList.add('active');
  });
});
