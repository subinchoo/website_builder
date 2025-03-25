export function loadLayoutBlocks(editor){
    editor.BlockManager.add('layout-2-column', {
        label: '2 Column Layout',
        category: 'Layout',
        content: `
          <div style="display: flex; flex-wrap: wrap; gap: 20px;">
            <div style="flex: 1; min-width: 200px; background: #f0f0f0; padding: 20px; border-radius: 8px;">
              <p>Column 1</p>
            </div>
            <div style="flex: 1; min-width: 200px; background: #f0f0f0; padding: 20px; border-radius: 8px;">
              <p>Column 2</p>
            </div>
          </div>
        `
      });
      
      editor.BlockManager.add('layout-4-column', {
        label: '4 Column Layout',
        category: 'Layout',
        content: `
          <div style="display: flex; flex-wrap: wrap; gap: 20px;">
            <div style="flex: 1 1 calc(25% - 20px); background: #f0f0f0; padding: 20px; border-radius: 8px; min-width: 150px;">
              <p>Col 1</p>
            </div>
            <div style="flex: 1 1 calc(25% - 20px); background: #f0f0f0; padding: 20px; border-radius: 8px; min-width: 150px;">
              <p>Col 2</p>
            </div>
            <div style="flex: 1 1 calc(25% - 20px); background: #f0f0f0; padding: 20px; border-radius: 8px; min-width: 150px;">
              <p>Col 3</p>
            </div>
            <div style="flex: 1 1 calc(25% - 20px); background: #f0f0f0; padding: 20px; border-radius: 8px; min-width: 150px;">
              <p>Col 4</p>
            </div>
          </div>
        `
      });
      
}