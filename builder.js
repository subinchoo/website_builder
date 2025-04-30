// import grapesjs from 'https://unpkg.com/grapesjs?module';
// import { registerAutoNavbar } from './navbar.js';
import {loadElementBlocks} from './blocks/elements.js';
import { loadSectionBlocks } from './blocks/sections.js';
import { loadFromBlocks } from './blocks/form.js';
import { loadLayoutBlocks } from './blocks/layout.js';

import { loadHomePage } from './pages/home.js';
import { load404Page } from './pages/error404.js';
import { loadAboutPage } from './pages/aboutus.js';
import { loadPricingPage } from './pages/pricing.js';
import { loadContactPage } from './pages/contactus.js';
import { loadBlogHomePage } from './pages/blogs.js';

import { loadAdPage } from './marketing/advertisement.js';
import { loadLandingPage } from './marketing/landing.js';
import { loadUpsellPage } from './marketing/upsell.js';
import { loadThankYouPage } from './marketing/thankyou.js';
import { loadServicesPage } from './pages/services.js';

// Declare this globally before anything else
let userPages = {};
let currentPage = 'home';
let includedPages = [];
window.includedPages = includedPages;

let brandColors = {
  primary: '#ff0000',
  secondary: '#00ff00',
  accent: '#0000ff'
};

function updateBrandingSector() {
  const sector = editor.StyleManager.getSector('branding');
  if (!sector) return;

  const props = [
    {
      property: 'background-color',
      type: 'select',
      name: 'Brand Background',
      defaults: '',
      options: [
        { value: brandColors.primary, name: `Primary (${brandColors.primary})` },
        { value: brandColors.secondary, name: `Secondary (${brandColors.secondary})` },
        { value: brandColors.accent, name: `Accent (${brandColors.accent})` }
      ]
    },
    {
      property: 'color',
      type: 'select',
      name: 'Brand Text Color',
      defaults: '',
      options: [
        { value: brandColors.primary, name: `Primary (${brandColors.primary})` },
        { value: brandColors.secondary, name: `Secondary (${brandColors.secondary})` },
        { value: brandColors.accent, name: `Accent (${brandColors.accent})` }
      ]
    }
  ];

  sector.get('properties').reset(props);
}
function renderBrandColorInputs() {
  const container = document.getElementById('brand-color-list');
  container.innerHTML = '';

  Object.entries(brandColors).forEach(([name, value]) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'brand-color-picker';
    wrapper.style.display = 'flex';
    wrapper.style.gap = '10px';
    wrapper.style.marginBottom = '10px';

    const label = document.createElement('input');
    label.type = 'text';
    label.value = name;
    label.className = 'brand-label';

    const input = document.createElement('input');
    input.type = 'color';
    input.value = value;

    const removeBtn = document.createElement('button');
    removeBtn.textContent = '🗑️';
    removeBtn.title = 'Remove';
    removeBtn.onclick = () => {
      delete brandColors[name];
      renderBrandColorInputs();
      updateBrandingSector();
    };

    label.addEventListener('input', () => {
      const newName = label.value.trim();
      if (newName && newName !== name && !brandColors[newName]) {
        brandColors[newName] = brandColors[name];
        delete brandColors[name];
        renderBrandColorInputs();
        updateBrandingSector();
      }
    });

    input.addEventListener('input', () => {
      brandColors[label.value.trim()] = input.value;
      updateBrandingSector();
    });

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    wrapper.appendChild(removeBtn);
    container.appendChild(wrapper);
  });
}


const editor = grapesjs.init({
  container: '#gjs',
  height: '100%',
  width: '100%',
  fromElement: true,
  storageManager: false,
  blockManager: { appendTo: '#blocks-tab' },
  styleManager: { appendTo: '#style-panel' },
  traitManager: { appendTo: '#style-panel' },
  canvas: {
    styles: [
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css',
      'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap',
      'style.css', 'form-style.css', 'marketing-style.css', 'global.css', 'home.css', 'footer.css', 'layout.css', 'services.css', 'thankyou.css'
    ],
    style: `
      * { font-family: 'Open Sans', sans-serif !important; }
      body { font-family: 'Open Sans', sans-serif !important; min-height: 100%; overflow-y: auto; }
      html { min-height: 100%; }
    `
  },
  panels: {
    defaults: [
      { id: 'topbar', el: '#top-panel', buttons: [
        { id: 'undo', label: `<i class="fa fa-undo"></i>`, command: 'core:undo', attributes: { title: 'Undo' } },
        { id: 'redo', label: `<i class="fa fa-redo"></i>`, command: 'core:redo', attributes: { title: 'Redo' } },
        { id: 'preview', className: 'fa fa-eye', command: 'preview', attributes: { title: 'Preview' } },
        { id: 'save', className: 'fa fa-save', command: 'save-data', attributes: { title: 'Save Project' } },
        { id: 'device-desktop', className: 'fa fa-desktop', command: e => e.setDevice('Desktop'), attributes: { title: 'Desktop View' } },
        { id: 'device-tablet', className: 'fa fa-tablet', command: e => e.setDevice('Tablet'), attributes: { title: 'Tablet View' } },
        { id: 'device-mobile', className: 'fa fa-mobile', command: e => e.setDevice('Mobile'), attributes: { title: 'Mobile View' } }
      ]},
      { id: 'left-panel', el: '#left-panel' },
      { id: 'style-manager', el: '#style-panel' },
    ]
  },
  layerManager: { appendTo: '#layers-tab' },
  deviceManager: {
    devices: [
      { name: 'Desktop', width: '' },
      { name: 'Tablet', width: '768px' },
      { name: 'Mobile', width: '375px' }
    ]
  }
});

editor.StyleManager.addSector('branding', {
  name: 'Branding',
  open: true,
  buildProps: ['background-color', 'color'],
  properties: []
});

document.addEventListener('DOMContentLoaded', () => {
  const inputs = {
    primary: document.getElementById('brand-primary'),
    secondary: document.getElementById('brand-secondary'),
    accent: document.getElementById('brand-accent')
  };

  Object.entries(inputs).forEach(([key, input]) => {
    input.addEventListener('input', () => {
      brandColors[key] = input.value;
      updateBrandingSector();
    });
  });
});



// Initial call
updateBrandingSector();

// registerAutoNavbar(editor, () => ['home', 'about', 'services', 'contact']);
editor.addComponents(`
  <header class="top-bar">
    <div class="top-content">
      <div class="left-buttons">
        <button class="top-button">Shop</button>
        <button class="top-button">Contact Us</button>
      </div>
      <div class="logo-upload">
        <label for="logo-upload-input">
          <img id="logo-image" src="https://via.placeholder.com/120x40?text=Logo" alt="Logo" />
        </label>
        <input type="file" id="logo-upload-input" accept="image/*" style="display:none;">
      </div>
      <div class="right-icons">
        <span>👤</span>
        <span>🛒</span>
      </div>
    </div>
  </header>
`);
editor.on('load', () => {
  const canvasBody = editor.Canvas.getBody();
  const canvasDoc = editor.Canvas.getDocument();

  canvasBody.style.minHeight = '100%';
  canvasBody.style.overflowY = 'auto';
  canvasBody.style.paddingTop = '0'; /* (Remove this padding-top) */

  canvasDoc.body.style.minHeight = '100%';
  canvasDoc.body.style.overflowY = 'auto';

  const logoInput = canvasDoc.getElementById('logo-upload-input');
  const logoImage = canvasDoc.getElementById('logo-image');

  if (logoInput && logoImage) {
    logoInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (event) => {
          logoImage.src = event.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }
});

// Add custom link component
editor.DomComponents.addType('custom-link', {
  isComponent: el => el.tagName === 'A' && el.classList.contains('custom-link'),
  model: {
    defaults: {
      traits: [
        { type: 'text', label: 'Link URL', name: 'href', placeholder: 'https://example.com' },
        { type: 'checkbox', label: 'Open in new tab', name: 'target', valueTrue: '_blank', valueFalse: '' }
      ]
    }
  }
});

// Stylable sections
editor.DomComponents.addType('section', {
  extend: 'default',
  model: {
    defaults: {
      tagName: 'section',
      stylable: ['background-color', 'color', 'padding', 'margin', 'text-align', 'border-radius']
    }
  }
});
// Load blocks
loadElementBlocks(editor);
loadSectionBlocks(editor);
loadFromBlocks(editor);
loadLayoutBlocks(editor);

// Custom hero block with image upload
export function registerAboutHeroComponent(editor) {
  editor.DomComponents.addType('about-hero', {
    model: {
      defaults: {
        tagName: 'section',
        classes: ['about-hero'],
        attributes: { class: 'about-hero' },
        style: {
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '400px',
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        },
        traits: [
          { type: 'file', label: 'Background Image', name: 'bgImage', changeProp: 1 }
        ]
      },
      init() {
        this.on('change:bgImage', () => {
          const file = this.get('bgImage');
          if (file && file.length) {
            const reader = new FileReader();
            reader.onload = e => this.addStyle({ backgroundImage: `url(${e.target.result})` });
            reader.readAsDataURL(file[0]);
          }
        });
      }
    }
  });
}


// Logo Upload Component
editor.DomComponents.addType('logo-uploader', {
  model: {
    defaults: {
      tagName: 'div',
      classes: ['logo-container'],
      droppable: false,
      components: [
        {
          type: 'image',
          attributes: {
            src: 'https://via.placeholder.com/150x80?text=Logo',
            alt: 'Your Logo',
            class: 'logo-img'
          }
        }
      ],
      traits: [
        {
          type: 'file',
          label: 'Upload Logo',
          name: 'logoFile',
          changeProp: 1
        }
      ],
      logoFile: '', // prop to hold the file temporarily
    },

    init() {
      this.on('change:logoFile', () => {
        const file = this.get('logoFile');
        if (file && file.length > 0) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const logoImg = this.findType('image')[0];
            logoImg.addAttributes({ src: e.target.result });
          };
          reader.readAsDataURL(file[0]);
        }
      });
    }
  }
});
function reorderIncludedPages() {
  const newOrder = [];
  document.querySelectorAll("#site-stack-list .site-stack-item").forEach(li => {
    const pageName = li.querySelector(".page-name").textContent.trim();
    newOrder.push(pageName);
  });
  includedPages = newOrder;
}

document.addEventListener('DOMContentLoaded', () => {
  const inputs = {
    primary: document.getElementById('brand-primary'),
    secondary: document.getElementById('brand-secondary'),
    accent: document.getElementById('brand-accent')
  };

  Object.entries(inputs).forEach(([key, input]) => {
    input.addEventListener('input', () => {
      brandColors[key] = input.value;
      console.log(`Updated ${key} to ${input.value}`);
    });
  });
});

// Load page blocks
loadHomePage(editor);
registerAboutHeroComponent(editor);
loadAboutPage(editor);
load404Page(editor);
loadPricingPage(editor);
loadContactPage(editor);
loadBlogHomePage(editor);
loadServicesPage(editor);
loadAdPage(editor);
loadLandingPage(editor);
loadUpsellPage(editor);
loadThankYouPage(editor);


// Save command
editor.Commands.add('save-data', {
  run(editor, sender) {
    sender && sender.set('active', false);

    const html = editor.getHtml();
    const css = editor.getCss();
    const json = editor.getProjectData();

    const data = {
      html,
      css,
      json
    };

    const fileName = `grapesjs-backup-${new Date().toISOString().slice(0, 19).replace(/[:T]/g, '-')}.json`;
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = fileName;
    a.click();
    URL.revokeObjectURL(url);

    alert('Project saved as a downloadable file!');
  }
});

// Publish command
editor.Commands.add('publish-site', {
  run(editor) {

    const zip = new JSZip();

    for (const [pageName, data] of Object.entries(userPages)) {
      const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>${pageName}</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  ${data.html}
</body>
</html>`;
      zip.file(`${pageName}.html`, html);
    }

    zip.file("style.css", editor.getCss());

    zip.generateAsync({ type: "blob" }).then(content => {
      saveAs(content, "my-website.zip");
      alert("🎉 Website exported! You can now upload it to any static host.");
    });
  }
});



// Add publish button to topbar
editor.Panels.addButton('topbar', {
  id: 'publish',
  className: 'fa fa-cloud-upload',
  command: 'publish-site',
  attributes: { title: 'Publish Website' }
});

// Tabs switching
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));

    btn.classList.add('active');
    const target = btn.getAttribute('data-tab');
    document.getElementById(`${target}-tab`).classList.add('active');
  });
});

const pages = {
  home: 'page-home',
  about: 'page-about',
  blog: 'page-blog',
  services: 'page-services',
  pricing: 'page-pricing',
  contact: 'page-contact',
  advertisement: 'page-advertisement',
  landing: 'page-landing',
  upsell: 'page-upsell',
  thankyou: 'page-thankyou',
  error: 'page-error'
};

const wrapper = editor.DomComponents.getWrapper();
wrapper.set({
  draggable: true,
  droppable: true,
  copyable: true,
  stylable: true,
  highlightable: true,
  selectable: true,
  style: {
    'min-height': '2000px',
    'overflow': 'visible'
  }
});
editor.on('block:drag:stop', (model) => {
  if (model && model.get('type') === 'auto-navbar') {
    const wrapper = editor.DomComponents.getWrapper();
    const components = wrapper.components();

    components.add(model.clone(), { at: 0 });
    model.remove();
  }
});

editor.on('load', () => {
  const canvasBody = editor.Canvas.getBody();
  const canvasDoc = editor.Canvas.getDocument();

  canvasBody.style.minHeight = '100%';
  canvasBody.style.overflowY = 'auto';
  canvasDoc.body.style.minHeight = '100%';
  canvasDoc.body.style.overflowY = 'auto';
  canvasBody = editor.Canvas.getBody();

});

document.querySelectorAll('.page-item').forEach(item => {
  item.addEventListener('click', () => {
    // Save the current page before switching


    const pageKey = item.getAttribute('data-page');
    currentPage = pageKey; 


    const blockId = pages[pageKey];
    const block = editor.BlockManager.get(blockId);

    if (userPages[pageKey]) {
      editor.setComponents(userPages[pageKey].html);
      editor.setStyle(userPages[pageKey].css);
    } else if (block) {
      const content = typeof block.get('content') === 'function'
        ? block.get('content')()
        : { html: block.get('content'), css: '' };

      editor.setComponents(content.html);
      editor.setStyle(content.css || '');
      userPages[pageKey] = content;
    } else {
      editor.setComponents(`<h1>${pageKey} page not found</h1>`);
    }

    document.querySelectorAll('.page-item').forEach(el => el.classList.remove('active'));
    item.classList.add('active');
  });
});



//blog category 
document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("category-select");
  const customInput = document.getElementById("custom-category");
  const wrapper = document.getElementById("custom-category-wrapper");

  if (select && customInput && wrapper) {
    select.addEventListener("change", () => {
      if (select.value === "other") {
        wrapper.style.display = "block";
        customInput.required = true;
      } else {
        wrapper.style.display = "none";
        customInput.required = false;
        customInput.value = "";
      }
    });
  }
});

// delete event
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("add-current-page");
  const list = document.getElementById("site-stack-list");

  if (addBtn && list) {
    addBtn.addEventListener("click", () => {
      if (!includedPages.includes(currentPage)) {
        includedPages.push(currentPage);

        const li = document.createElement("li");
        li.classList.add('site-stack-item');
        li.innerHTML = `
          <span class="page-name">${currentPage}</span>
          <div class="stack-actions">
            <button class="move-up-btn" data-page="${currentPage}" title="Move Up"><i class="fa fa-arrow-up"></i></button>
            <button class="move-down-btn" data-page="${currentPage}" title="Move Down"><i class="fa fa-arrow-down"></i></button>
            <button class="remove-page-btn" data-page="${currentPage}" title="Remove"><i class="fa fa-trash"></i></button>
          </div>
        `;
        list.appendChild(li);
        localStorage.setItem('includedPages', JSON.stringify(includedPages));
      }
    });

    // ✅ Attach button event listeners AFTER element exists
    list.addEventListener("click", (e) => {
      const target = e.target.closest("button");
      if (!target) return;

      const li = target.closest("li");
      const page = target.getAttribute("data-page");

      if (target.classList.contains("remove-page-btn")) {
        includedPages = includedPages.filter(p => p !== page);
        li.remove();
        reorderIncludedPages();
      }

      if (target.classList.contains("move-up-btn")) {
        const prev = li.previousElementSibling;
        if (prev) {
          li.parentNode.insertBefore(li, prev);
          reorderIncludedPages();
        }
      }

      if (target.classList.contains("move-down-btn")) {
        const next = li.nextElementSibling;
        if (next) {
          li.parentNode.insertBefore(next, li);
          reorderIncludedPages();
        }
      }
    });
  }
});
 


// In dev console
editor.getHtml(); // Copy HTML
editor.getCss();  // Copy CSS
editor.getProjectData(); // Copy JSON backup

