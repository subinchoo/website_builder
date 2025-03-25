import grapesjs from 'https://unpkg.com/grapesjs?module';

import {loadElementBlocks} from './blocks/elements.js';
import { loadSectionBlocks } from './blocks/sections.js';
import { loadFromBlocks } from './blocks/form.js';
import { loadLayoutBlocks } from './blocks/layout.js';


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

  canvas: {
    styles: [
      'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600&display=swap'
    ],
    style: `
      * {
        font-family: 'Open Sans', sans-serif !important;
      }
      body {
        font-family: 'Open Sans', sans-serif !important;
      }
      h1, h2, h3, h4, h5, h6, p, a, input, textarea, button {
        font-family: 'Open Sans', sans-serif !important;
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

//call the blocks

loadElementBlocks(editor);

loadSectionBlocks(editor);

loadFromBlocks(editor);

loadLayoutBlocks(editor);

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
