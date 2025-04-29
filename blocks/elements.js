export function loadElementBlocks(editor){
///HEADING

// HEADING 1
editor.BlockManager.add('heading-1', {
  label: 'Heading 1',
  category: 'Elements',
  content: `<h1 style="font-size: 2.5em; text-align: center;">Heading 1 Title</h1>`
});

// HEADING 2
editor.BlockManager.add('heading-2', {
  label: 'Heading 2',
  category: 'Elements',
  content: `<h2 style="font-size: 2em; text-align: center;">Heading 2 Title</h2>`
});

// HEADING 3
editor.BlockManager.add('heading-3', {
  label: 'Heading 3',
  category: 'Elements',
  content: `<h3 style="font-size: 1.75em; text-align: center;">Heading 3 Title</h3>`
});

// HEADING 4
editor.BlockManager.add('heading-4', {
  label: 'Heading 4',
  category: 'Elements',
  content: `<h4 style="font-size: 1.5em; text-align: center;">Heading 4 Title</h4>`
});

// HEADING 5
editor.BlockManager.add('heading-5', {
  label: 'Heading 5',
  category: 'Elements',
  content: `<h5 style="font-size: 1.25em; text-align: center;">Heading 5 Title</h5>`
});

// HEADING 6
editor.BlockManager.add('heading-6', {
  label: 'Heading 6',
  category: 'Elements',
  content: `<h6 style="font-size: 1em; text-align: center;">Heading 6 Title</h6>`
});

/// TEXT
editor.BlockManager.add('text-element', {
    label: 'Text',
    category: 'Elements',
    content: `<p style="font-size: 1.1em; text-align: center;">Insert your text here</p>`
  });
  
  // LINK TEXT
editor.BlockManager.add('link-text-element', {
  label: 'Link Text',
  category: 'Elements',
  content: `<a href="#" style="font-size: 1.1em;">Insert your link text here</a>`
});

  // Question TEXT
  editor.BlockManager.add('faq-text-element', {
    label: 'FAQ Text',
    category: 'Elements',
    content: ` <details>
        <summary style="font-weight: bold; margin-bottom: 0.5rem; cursor: pointer;" data-gjs-editable="true">
        Your question goes here
      </summary>
  <p style="font-size: 0.95rem; color: #666; margin-left: 1rem;" data-gjs-editable="true">
        Your answer goes here
      </p>  </details>`
  });
  
  // IMAGE
  editor.BlockManager.add('image-element', {
    label: 'Image',
    category: 'Elements',
    content: `
     <div style="display: flex; justify-content:center; align-items:center; ">
     <img src="https://via.placeholder.com/600x400" style="width:25%; border-radius: 6px; " />
     </div>`
  });
  
  // SIDEBAR
  editor.BlockManager.add('sidebar-element', {
    label: 'Sidebar',
    category: 'Elements',
    content: `
      <div class="sidebar" style="width: 300px; padding: 20px; background: #f8f9fa; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <!-- Search Widget -->
        <div class="sidebar-widget" style="margin-bottom: 25px; padding-bottom: 20px; border-bottom: 1px solid #e9ecef;">
          <h3 style="font-size: 1.2em; margin-bottom: 15px; color: #333;">
            <i class="fas fa-search" style="margin-right: 8px; color: #4f46e5;"></i>Search
          </h3>
          <form style="display: flex; gap: 5px; position: relative;">
            <input type="search" placeholder="Search..." style="flex: 1; padding: 8px 12px; padding-right: 40px; border: 1px solid #dee2e6; border-radius: 4px; font-size: 0.9em;">
            <button type="submit" style="position: absolute; right: 8px; top: 50%; transform: translateY(-50%); background: none; border: none; cursor: pointer; padding: 4px; color: #6c757d;">
              <i class="fas fa-search"></i>
            </button>
          </form>
        </div>

        <!-- Categories Widget -->
        <div class="sidebar-widget" style="margin-bottom: 25px; padding-bottom: 20px; border-bottom: 1px solid #e9ecef;">
          <h3 style="font-size: 1.2em; margin-bottom: 15px; color: #333;">
            <i class="fas fa-folder" style="margin-right: 8px; color: #4f46e5;"></i>Categories
          </h3>
          <ul style="list-style: none; padding: 0; margin: 0; background-color:transparent !important;">
            <li style="margin-bottom: 8px; background-color:transparent !important;">
              <a href="#" style="color:rgb(0, 0, 0); text-decoration: none; display: flex; justify-content: space-between; align-items: center; background-color:transparent !important;">
                <span><i class="fas fa-folder-open" style="margin-right: 8px; color: #4f46e5;"></i>Category Name</span>
                <span style="color: #6c757d; font-size: 0.9em;">(12)</span>
              </a>
            </li>
            <li style="margin-bottom: 8px; background-color:transparent !important;">
              <a href="#" style="color:rgb(0, 0, 0); text-decoration: none; display: flex; justify-content: space-between; align-items: center; background-color:transparent !important;">
                <span><i class="fas fa-folder-open" style="margin-right: 8px; color: #4f46e5;"></i>Category Name</span>
                <span style="color: #6c757d; font-size: 0.9em;">(8)</span>
              </a>
            </li>
            <li style="margin-bottom: 8px; background-color:transparent !important;">
              <a href="#" style="color:rgb(0, 0, 0); text-decoration: none; display: flex; justify-content: space-between; align-items: center; background-color:transparent !important;">
                <span><i class="fas fa-folder-open" style="margin-right: 8px; color: #4f46e5;"></i>Category Name</span>
                <span style="color: #6c757d; font-size: 0.9em;">(5)</span>
              </a>
            </li>
          </ul>
        </div>

        <!-- Recent Posts Widget -->
        <div class="sidebar-widget" style="margin-bottom: 25px; padding-bottom: 20px; border-bottom: 1px solid #e9ecef;">
          <h3 style="font-size: 1.2em; margin-bottom: 15px; color: #333;">
            <i class="fas fa-clock" style="margin-right: 8px; color: #4f46e5;"></i>Recent Posts
          </h3>
          <div class="recent-posts">
            <div style="margin-bottom: 15px; display: flex; gap: 12px;">
              <img src="https://via.placeholder.com/80x80" style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px;">
              <div>
                <a href="#" style="color: #333; text-decoration: none; font-weight: 500; display: block; margin-bottom: 4px;">
                  <i class="fas fa-file-alt" style="margin-right: 8px; color: #4f46e5;"></i>Post Title Goes Here
                </a>
                <span style="color: #6c757d; font-size: 0.85em;">March 15, 2024</span>
              </div>
            </div>
            <div style="margin-bottom: 15px; display: flex; gap: 12px;">
              <img src="https://via.placeholder.com/80x80" style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px;">
              <div>
                <a href="#" style="color: #333; text-decoration: none; font-weight: 500; display: block; margin-bottom: 4px;">
                  <i class="fas fa-file-alt" style="margin-right: 8px; color: #4f46e5;"></i>Post Title Goes Here
                </a>
                <span style="color: #6c757d; font-size: 0.85em;">March 14, 2024</span>
              </div>
            </div>
            <div style="margin-bottom: 15px; display: flex; gap: 12px;">
              <img src="https://via.placeholder.com/80x80" style="width: 80px; height: 80px; object-fit: cover; border-radius: 4px;">
              <div>
                <a href="#" style="color: #333; text-decoration: none; font-weight: 500; display: block; margin-bottom: 4px;">
                  <i class="fas fa-file-alt" style="margin-right: 8px; color: #4f46e5;"></i>Post Title Goes Here
                </a>
                <span style="color: #6c757d; font-size: 0.85em;">March 13, 2024</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Custom Widget -->
        <div class="sidebar-widget" style="margin-bottom: 25px; padding-bottom: 20px; border-bottom: 1px solid #e9ecef;">
          <h3 style="font-size: 1.2em; margin-bottom: 15px; color: #333;">
            <i class="fas fa-puzzle-piece" style="margin-right: 8px; color: #4f46e5;"></i>Custom Widget
          </h3>
          <div style="color: #666; line-height: 1.6;">
            <p style="margin-bottom: 10px; font-size: 0.95rem;">Add your custom content here. This widget can contain any HTML content including:</p>
            <ul style="list-style: none; padding: 0; margin: 0; background-color:transparent !important;">
              <li style="margin-bottom: 8px; background-color:transparent !important;">
                <i class="fas fa-font" style="margin-right: 8px; color: #4f46e5;"></i>Text content
              </li>
              <li style="margin-bottom: 8px; background-color:transparent !important;">
                <i class="fas fa-link" style="margin-right: 8px; color: #4f46e5;"></i>Links
              </li>
              <li style="margin-bottom: 8px; background-color:transparent !important;">
                <i class="fas fa-image" style="margin-right: 8px; color: #4f46e5;"></i>Images
              </li>
              <li style="margin-bottom: 8px; background-color:transparent !important;">
                <i class="fas fa-wpforms" style="margin-right: 8px; color: #4f46e5;"></i>Forms
              </li>
            </ul>
          </div>
        </div>

        <!-- Newsletter Widget -->
        <div class="sidebar-widget">
          <h3 style="font-size: 1.2em; margin-bottom: 15px; color: #333;">
            <i class="fas fa-envelope" style="margin-right: 8px; color: #4f46e5;"></i>Newsletter
          </h3>
          <form style="display: flex; flex-direction: column; gap: 10px;">
            <input type="email" placeholder="Enter your email" style="padding: 8px 12px; border: 1px solid #dee2e6; border-radius: 4px; font-size: 0.9em;">
            <button type="submit" style="padding: 8px 12px; background: #4f46e5; color: white; border: none; border-radius: 4px; cursor: pointer;">
              <i class="fas fa-paper-plane" style="margin-right: 8px;"></i>Subscribe
            </button>
          </form>
        </div>
      </div>`
  });

  // NAVIGATION MENU
  editor.BlockManager.add('nav-menu-element', {
    label: 'Navigation Menu',
    category: 'Elements',
    content: `
      <nav class="main-nav" style="background: #fff; padding: 15px 0; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
        <ul style="list-style: none; padding: 0; margin: 0; display: flex; justify-content: center; gap: 20px;">
          <li><a href="#" style="color: #333; text-decoration: none; font-weight: 500;">Home</a></li>
          <li><a href="#" style="color: #333; text-decoration: none; font-weight: 500;">About</a></li>
          <li><a href="#" style="color: #333; text-decoration: none; font-weight: 500;">Services</a></li>
          <li><a href="#" style="color: #333; text-decoration: none; font-weight: 500;">Contact</a></li>
        </ul>
      </nav>`
  });

  // SEARCH BAR
  editor.BlockManager.add('search-element', {
    label: 'Search Bar',
    category: 'Elements',
    content: `
      <div class="search-container" style="max-width: 400px; margin: 20px auto;">
        <form style="display: flex; gap: 10px;">
          <input type="search" placeholder="Search..." style="flex: 1; padding: 10px; border: 1px solid #ddd; border-radius: 4px; font-size: 1em;">
          <button type="submit" style="padding: 10px 20px; background: #4f46e5; color: white; border: none; border-radius: 4px; cursor: pointer;">Search</button>
        </form>
      </div>`
  });

  // SOCIAL MEDIA LINKS
  editor.BlockManager.add('social-links-element', {
    label: 'Social Media Links',
    category: 'Elements',
    content: `
      <div class="social-links" style="display: flex; justify-content: center; gap: 15px; margin: 20px 0;">
        <a href="#" style="color: #4f46e5; text-decoration: none; font-size: 1.2em;">Facebook</a>
        <a href="#" style="color: #4f46e5; text-decoration: none; font-size: 1.2em;">Twitter</a>
        <a href="#" style="color: #4f46e5; text-decoration: none; font-size: 1.2em;">Instagram</a>
        <a href="#" style="color: #4f46e5; text-decoration: none; font-size: 1.2em;">LinkedIn</a>
      </div>`
  });

  // BUTTON
  editor.BlockManager.add('button-element', {
    label: 'Button',
    category: 'Elements',
    content: `
    <div style="display: flex; justify-content:center; align-items:center; height:100px;">
    <a href="#" style="display:inline-block ;padding:10px 20px;background:#618ff3;color:white;text-decoration:none;border-radius:5px;">Click Me</a>
    </div>
    `
  });
  
  // TEXTAREA
  editor.BlockManager.add('textarea-element', {
    label: 'Textarea',
    category: 'Elements',
    content: `
    <div style="display: flex; justify-content:center; align-items:center; ">
    <textarea placeholder="Your message" style="width: 100%; height: 100px; padding: 10px; border: 1px solid #ccc; border-radius: 4px;"></textarea>
    </div>`
  });
 
  // LOGO
  editor.BlockManager.add('logo-uploader', {
    label: 'Logo Upload',
    category: 'Elements',
    content: { type: 'logo-uploader' }
  });
  
}