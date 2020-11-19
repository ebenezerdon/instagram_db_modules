const Auth = () => {
  return `
    <section class="auth">
      <p class="auth-info">
        <button class="show-auth-button">Sign in</button> to save your images in the cloud
      </p>
      <form class="auth-form">
        <input type="text" id="username" placeholder="username" required />
        <input type="text" id="password" placeholder="password" required />
        <button type="submit" class="signup-button">Sign up</button> or
        <button type="submit" class="signin-button">Sign in</button>
        <button type="button" class="cancel-auth-button">Cancel</button>
      </form>
    </section>
  `
}

export default Auth
