export function loadLayoutBlocks(editor) {
  const blockStyle = 'margin-bottom: 10px;'; // Apply spacing between stacked blocks

  // 2 Column Layout (Side by Side)
  editor.BlockManager.add('layout-2-column', {
    label: '2 Column Layout',
    category: 'Layout',
    content: `
      <div style="display: flex; flex-wrap: wrap; gap: 5px; ${blockStyle}">
        <div style="flex: 1; min-width: 80px; background: #e0e0e0; padding: 5px; border-radius: 5px; ">
          <p style="margin: 0; font-size: 12px;">Column 1</p>
        </div>
        <div style="flex: 1; min-width: 80px; background: #e0e0e0; padding: 5px; border-radius: 5px; ">
          <p style="margin: 0; font-size: 12px;">Column 2</p>
        </div>
      </div>
    `
  });

  // 4 Column Layout
  editor.BlockManager.add('layout-4-column', {
    label: '4 Column Layout',
    category: 'Layout',
    content: `
      <div style="display: flex; flex-wrap: wrap; gap: 8px; ${blockStyle}">
        <div style="flex: 1 1 calc(20% - 8px); background: #e0e0e0; padding: 6px; border-radius: 6px; min-width: 60px; "><p style="margin: 0; font-size: 11px;">Col 1</p></div>
        <div style="flex: 1 1 calc(20% - 8px); background: #e0e0e0; padding: 6px; border-radius: 6px; min-width: 60px; "><p style="margin: 0; font-size: 11px;">Col 2</p></div>
        <div style="flex: 1 1 calc(20% - 8px); background: #e0e0e0; padding: 6px; border-radius: 6px; min-width: 60px; "><p style="margin: 0;font-size: 11px;">Col 3</p></div>
        <div style="flex: 1 1 calc(20% - 8px); background: #e0e0e0; padding: 6px; border-radius: 6px; min-width: 60px; "><p style="margin: 0; font-size: 11px;">Col 4</p></div>
      </div>
    `
  });

  // 2 Horizontal Rows
  editor.BlockManager.add('layout-2-horizontal', {
    label: '2 Rows Layout',
    category: 'Layout',
    content: `
      <div style="display: flex; flex-direction: column; gap: 5px; ${blockStyle}">
        <div style="background: #e0e0e0; padding: 6px; border-radius: 5px; "><p style="margin: 0; font-size: 12px;">Row 1</p></div>
        <div style="background: #e0e0e0; padding: 6px; border-radius: 5px; "><p style="margin: 0; font-size: 12px;">Row 2</p></div>
      </div>
    `
  });

  // 3 Columns (Horizontal)
  editor.BlockManager.add('layout-3-column', {
    label: '3 Column Layout',
    category: 'Layout',
    content: `
      <div style="display: flex; gap: 8px; ${blockStyle}">
        <div style="flex: 1; background: #e0e0e0; padding: 6px; border-radius: 5px; "><p style="margin: 0; font-size: 12px;">Col 1</p></div>
        <div style="flex: 1; background: #e0e0e0; padding: 6px; border-radius: 5px; "><p style="margin: 0; font-size: 12px;">Col 2</p></div>
        <div style="flex: 1; background: #e0e0e0; padding: 6px; border-radius: 5px; "><p style="margin: 0; font-size: 12px;">Col 3</p></div>
      </div>
    `
  });

  // 3 Rows (Vertical)
  editor.BlockManager.add('layout-3-rows', {
    label: '3 Rows Layout',
    category: 'Layout',
    content: `
      <div style="display: flex; flex-direction: column; gap: 6px; ${blockStyle}">
        <div style="background: #e0e0e0; padding: 6px; border-radius: 5px; "><p style="margin: 0; font-size: 12px;">Row 1</p></div>
        <div style="background: #e0e0e0; padding: 6px; border-radius: 5px; "><p style="margin: 0; font-size: 12px;">Row 2</p></div>
        <div style="background: #e0e0e0; padding: 6px; border-radius: 5px; "><p style="margin: 0; font-size: 12px;">Row 3</p></div>
      </div>
    `
  });

  // Divider
  editor.BlockManager.add('layout-divider', {
    label: 'Divider',
    category: 'Layout',
    content: `
      <div style="${blockStyle}">
        <hr style="border: none; border-top: 1px solid #ccc; margin: 30px 0;" />
      </div>
    `
  });

   // Spacer (empty space)
   editor.BlockManager.add('layout-spacer', {
    label: 'Spacer',
    category: 'Layout',
    content: `
      <div style="${blockStyle}">
        <hr style="border: none; margin: 30px 0;" />
      </div>
    `
  });
}
