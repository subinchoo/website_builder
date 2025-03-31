// /blocks/signup.js

export function loadSignupBlock(editor) {
    editor.BlockManager.add('form-signup', {
      label: 'Sign Up Form',
      category: 'Form',
      content: `
        <form class="signup-form" style="max-width: 400px; margin: auto; padding: 20px;">
          <h2 style="text-align:center;">Sign Up</h2>
          <input type="text" name="name" placeholder="Full Name" required style="width:100%;padding:10px;margin-bottom:10px;border-radius:8px;border:1px solid #ccc;">
          <input type="email" name="email" placeholder="Email" required style="width:100%;padding:10px;margin-bottom:10px;border-radius:8px;border:1px solid #ccc;">
          <input type="password" name="password" placeholder="Password" required style="width:100%;padding:10px;margin-bottom:20px;border-radius:8px;border:1px solid #ccc;">
          <button type="submit" style="width:100%;padding:12px;background-color:#4e54c8;color:white;border:none;border-radius:8px;">Create Account</button>
        </form>
      `
    });
  }
  