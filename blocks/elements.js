export function loadElementBlocks(editor){
// TEXT
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
  

  // HEADING
  editor.BlockManager.add('heading-element', {
    label: 'Heading',
    category: 'Elements',
    content: `<h2 style="font-size: 2em; text-align: center;" >Heading Title</h2>`
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
  
}