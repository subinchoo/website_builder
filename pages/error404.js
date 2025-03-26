export function load404Page(editor) {
    editor.BlockManager.add('page-error', {
      label: '404 Error Page',
      category: 'Pages',
      content:  `
            <section class="error-section">
              <div class="error-container">
                <h1 class="error-code">404</h1>
                <h2 class="error-title">Page Not Found</h2>
                <p class="error-description">
                  Oops! The page you're looking for doesn't exist or has been moved.
                </p>
                <a href="#" class="btn-back-home">Go Back Home</a>
              </div>
            </section>
          `,
    });
  }
  