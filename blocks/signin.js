// /blocks/signin.js

export function loadSigninBlock(editor) {
    editor.BlockManager.add('form-signin', {
      label: 'Sign In Form',
      category: 'Form',
      content: `
        <form class="signin-form" style="max-width: 400px; margin: auto; padding: 20px;">
          <h2 style="text-align:center;">Sign In</h2>
          <input type="email" name="email" placeholder="Email" required style="width:100%;padding:10px;margin-bottom:10px;border-radius:8px;border:1px solid #ccc;">
          <input type="password" name="password" placeholder="Password" required style="width:100%;padding:10px;margin-bottom:20px;border-radius:8px;border:1px solid #ccc;">
          <button type="submit" style="width:100%;padding:12px;background-color:#4e54c8;color:white;border:none;border-radius:8px;">Log In</button>
        </form>
      `
    });
  }
  