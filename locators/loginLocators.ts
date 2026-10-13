/** Selector details used by LoginPage. Playwright locator calls stay in the page object. */
export const loginLocators = {
  usernameInput: { role: "textbox", name: "Username" },
  passwordInput: { role: "textbox", name: "Password" },
  loginButton: { role: "button", name: "Login" },
  profileMenu: { css: "li.oxd-userdropdown" },
  errorMessage: /^(Invalid credentials|Account disabled)$/,
  validationMessages: { css: ".oxd-input-field-error-message" },
  forgotPasswordButton: { text: "Forgot your password?", exact: true },
} as const;
