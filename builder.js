// import grapesjs from 'https://unpkg.com/grapesjs?module';

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
const editor = grapesjs.init({
  container: '#gjs',
  height: '100%',
  width: '100%',
  fromElement: false,
  storageManager: false,
  blockManager: { appendTo: '#blocks-tab' },
  styleManager:{
    appendTo: '#style-panel'
  },
  traitManager: {
    appendTo: '#traits-container'
  },
  
  canvas: {
    styles: [
      'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap',
      'style.css' ,// ✅ Make sure this CSS is correctly linked in your project
      'form-style.css',
      'marketing-style.css'
    ],
    style: `
      * {
        font-family: 'Open Sans', sans-serif !important;
      }
      body {
        font-family: 'Open Sans', sans-serif !important;
        min-height: 100%;
        overflow-y: auto;
      }
      html {
        min-height: 100%;
      }
    `
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
      },
      {
        id:'style-manager',
        el : '#style-panel',
      }
    ]
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


editor.DomComponents.addType('custom-link', {
  isComponent: el => el.tagName === 'A' && el.classList.contains('custom-link'),
  model: {
    defaults: {
      traits: [
        {
          type: 'text',
          label: 'Link URL',
          name: 'href',
          placeholder: 'https://example.com'
        },
        {
          type: 'checkbox',
          label: 'Open in new tab',
          name: 'target',
          valueTrue: '_blank',
          valueFalse: ''
        }
      ]
    }
  }
});

// Make all <section> elements stylable by default
editor.DomComponents.addType('section', {
  extend: 'default',
  model: {
    defaults: {
      tagName: 'section',
      stylable: [
        'background-color',
        'color',
        'padding',
        'margin',
        'text-align',
        'border-radius'
      ],
    }
  }
});

// Load blocks
loadElementBlocks(editor);
loadSectionBlocks(editor);
loadFromBlocks(editor);
loadLayoutBlocks(editor);

// Register custom 'about-hero' component with background upload
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
          alignItems: 'center',
        },
        traits: [
          {
            type: 'file',
            label: 'Background Image',
            name: 'bgImage',
            changeProp: 1
          }
        ]
      },
      init() {
        this.on('change:bgImage', () => {
          const file = this.get('bgImage');
          if (file && file.length) {
            const reader = new FileReader();
            reader.onload = (e) => {
              const dataUrl = e.target.result;
              this.addStyle({ backgroundImage: `url(${dataUrl})` });
            };
            reader.readAsDataURL(file[0]);
          }
        });
      }
    }
  });
}

//load Pages 
loadHomePage(editor);
registerAboutHeroComponent(editor);
loadAboutPage(editor);
load404Page(editor);
loadPricingPage(editor);
loadContactPage(editor);
loadBlogHomePage(editor);
// marketing funnel
// advertisement - landing page - upsell - thank you

loadAdPage(editor);
loadLandingPage(editor);
loadUpsellPage(editor);


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
  profile: 'page-profile',
  blog: 'page-blog',
  portfolio: 'page-portfolio',
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

editor.on('load', () => {
  const canvasBody = editor.Canvas.getBody();
  const canvasDoc = editor.Canvas.getDocument();

  canvasBody.style.minHeight = '100%';
  canvasBody.style.overflowY = 'auto';
  canvasDoc.body.style.minHeight = '100%';
  canvasDoc.body.style.overflowY = 'auto';
});

document.querySelectorAll('.page-item').forEach(item => {
  item.addEventListener('click', () => {
    const pageKey = item.getAttribute('data-page');
    const blockId = pages[pageKey];
    const block = editor.BlockManager.get(blockId);

    if (block) {
      const contentData = typeof block.get('content') === 'function'
        ? block.get('content')()
        : { html: block.get('content'), css: '' };

      editor.setComponents(contentData.html);
      editor.setStyle(contentData.css || '');
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

  select.addEventListener("change", () => {
    if (select.value === "other") {
      wrapper.style.display = "block";
      customInput.required = true;
    } else {
      wrapper.style.display = "none";
      customInput.required = false;
      customInput.value = ""; // clear input when hiding
    }
  });
});


// In dev console
editor.getHtml(); // Copy HTML
editor.getCss();  // Copy CSS
editor.getProjectData(); // Copy JSON backup

