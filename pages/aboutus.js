                  export function loadAboutPage(editor) {
                      editor.BlockManager.add('page-about', {
                        label: 'About Us Page',
                        category: 'Pages',
                        content: `
                      <section class="about-hero">
                          <div class="about-hero-overlay">
                            <h1 class="about-title">About Us</h1>
                            <p class="about-subtext">
                              We are a passionate team of developers, designers, and dreamers building intuitive web experiences that make life easier.
                            </p>
                            <div class="about-cards">
                                <div class="about-card">
                                  <h3>Our Mission</h3>
                                  <p>To empower creators with no-code tools to build stunning websites and experiences.</p>
                                </div>
                                <div class="about-card">
                                  <h3>Our Vision</h3>
                                  <p>Creating a world where anyone can build, share, and grow their ideas — effortlessly.</p>
                                </div>
                              </div>
                          </div>
                        </section>
                        
                    
                        `
                      });
                    }
                    