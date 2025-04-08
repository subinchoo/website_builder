export function registerAutoNavbar(editor, getPagesFn) {
    editor.BlockManager.add('auto-navbar', {
      label: 'Auto Navbar',
      category: 'Layout',
      content: { type: 'auto-navbar' },
    });
  
    editor.DomComponents.addType('auto-navbar', {
      model: {
        defaults: {
          tagName: 'nav',
          classes: ['auto-navbar'],
          attributes: { class: 'auto-navbar' },
          stylable: ['background-color', 'padding', 'text-align'],
          droppable: false,
          editable: false,
          components: [
            {
              tagName: 'ul',
              attributes: { class: 'navbar-list' },
              components: [],
            },
          ],
          styles: {
            position: 'fixed',
            top: '0',
            left: '0',
            right: '0',
            zIndex: '9999',
            backgroundColor: '#ffffff',
            padding: '12px 24px',
            borderBottom: '1px solid #ccc',
            display: 'flex',
            justifyContent: 'center',
          },
          script() {
            // 여긴 실행 시점에 필요한 경우만 작성
          }
        },
  
        init() {
          // 링크 갱신 트리거 설정
          this.listenTo(this.collection, 'add', this.updateLinks);
          this.updateLinks();
        },
  
        updateLinks() {
          const included = (window.getIncludedPages || (() => []))();
          let ul = this.findType('ul')[0];
          if (!ul) return;
  
          ul.components().reset(); // 초기화
  
          included.forEach(page => {
            ul.append({
              tagName: 'li',
              style: { listStyle: 'none', marginRight: '16px' },
              components: [{
                tagName: 'a',
                attributes: { href: `#${page}`, style: 'color: black; text-decoration: none; font-weight: bold;' },
                content: page.charAt(0).toUpperCase() + page.slice(1)
              }]
            });
          });
        }
      }
    });
  
    // 외부에서 현재 페이지 리스트를 받아오도록 설정
    window.getIncludedPages = getPagesFn;
  }
  