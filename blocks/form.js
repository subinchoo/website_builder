export function loadFromBlocks(editor){
    editor.BlockManager.add('contact-form', {
        label: 'Contact Form',
        category: 'Form',
        content: `
          <div
            class="contact-form-wrapper"
            style="
              width: 100%;
              max-width: 700px;
              margin: 40px auto;
              padding: 40px;
              background: #fff;
              border-radius: 12px;
              box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            "
            data-gjs-resizable='{
              "tl": 0,
              "tc": 0,
              "tr": 0,
              "cl": 1,
              "cr": 1,
              "bl": 0,
              "bc": 0,
              "br": 0
            }'
            data-gjs-draggable="true"
          >
            <h2 style="text-align: center; margin-bottom: 30px; font-size: 2em; color: #2a2a72;">Contact Us</h2>
            <form style="display: flex; flex-direction: column; gap: 20px;">
              <div>
                <label style="display: block; margin-bottom: 6px; font-weight: 600; color: #333;">Name</label>
                <input type="text" placeholder="Your name" style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 8px; font-size: 1em;" />
              </div>
              <div>
                <label style="display: block; margin-bottom: 6px; font-weight: 600; color: #333;">Email</label>
                <input type="email" placeholder="Your email" style="width: 100%; padding: 12px; border: 1px solid #ccc; border-radius: 8px; font-size: 1em;" />
              </div>
              <div>
                <label style="display: block; margin-bottom: 6px; font-weight: 600; color: #333;">Message</label>
                <textarea placeholder="Your message" style="width: 100%; padding: 12px; height: 120px; border: 1px solid #ccc; border-radius: 8px; font-size: 1em; resize: vertical;"></textarea>
              </div>
              <div style="text-align: center;">
                <button type="submit" style="padding: 14px 30px; background-color: #2a2a72; color: white; border: none; border-radius: 8px; font-size: 1em; cursor: pointer; transition: background 0.3s;">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        `
      });
      
      editor.BlockManager.add('signup-form', {
        label: 'Signup Form',
        category: 'Form',
        content: `
         <div>
        `
      });
}