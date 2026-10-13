/** Selector details used by ForgotPage. */
export const forgotPasswordLocators = {
  usernameInput: { role: "textbox", name: "Username" },
  resetPasswordButton: { role: "button", name: "Reset Password" },
  resetPasswordPageHeading: { role: "heading", name: "Reset Password" },
  errorValidation: {
    css: "span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message",
  },
  resetSuccessHeading: {
    role: "heading",
    name: /Reset Password link sent successfully/i,
  },
} as const;
