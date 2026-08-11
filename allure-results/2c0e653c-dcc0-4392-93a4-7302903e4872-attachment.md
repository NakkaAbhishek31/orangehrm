# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> TC_LOGIN_009 - User should submit a password reset request with a valid username @positive @regression
- Location: tests\login.spec.ts:104:5

# Error details

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Reset Password' })
    - locator resolved to <button type="submit" data-v-10d463b7="" data-v-76e562c4="" class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset">…</button>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - click action done
    - waiting for scheduled navigations to finish

```

# Test source

```ts
  1  | import {Locator, Page,expect} from "@playwright/test"
  2  | 
  3  | export class ForgotPage{
  4  |    
  5  |     readonly page:Page;
  6  |     readonly usernameInput:Locator    
  7  |     readonly resetPasswordButton:Locator;
  8  |     readonly resetPasswordPageHeading:Locator;
  9  |     readonly errorValidation:Locator;
  10 |     readonly resetSuccessHeading: Locator;
  11 |     
  12 | constructor(page:Page){
  13 |  this.page=page;
  14 |  this.usernameInput=page.getByRole('textbox', { name: 'Username' })
  15 |  this.resetPasswordButton=page.getByRole('button', { name: 'Reset Password' });
  16 |  this.resetPasswordPageHeading=page.getByRole('heading', { name: 'Reset Password' });
  17 |  this.errorValidation=page.locator('span.oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message')
  18 |  this.resetSuccessHeading = page.getByRole('heading', {name: /Reset Password link sent successfully/i,});
  19 | 
  20 | }
  21 | 
  22 | 
  23 | async verifyResetRequestSuccessful():Promise<void>
  24 | {
  25 |     await expect(this.page).toHaveURL(/auth\/requestPasswordResetCode/);
  26 |     await expect(this.resetPasswordPageHeading).toBeVisible();
  27 |    await expect(this.usernameInput).toBeVisible();
  28 |    await expect(this.resetPasswordButton).toBeVisible();
  29 | 
  30 | }
  31 | 
  32 | 
  33 | async submitResetRequest():Promise<void>
  34 | {
  35 | 
> 36 |     await this.resetPasswordButton.click();
     |                                    ^ TimeoutError: locator.click: Timeout 30000ms exceeded.
  37 | }
  38 | 
  39 | async enterUsername(username: string): Promise<void> {
  40 |   await this.usernameInput.fill(username);
  41 | }
  42 | 
  43 | 
  44 | }
```