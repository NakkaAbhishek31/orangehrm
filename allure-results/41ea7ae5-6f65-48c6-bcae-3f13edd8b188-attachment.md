# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_004 - Admin should search for an employee by name @positive @regression
- Location: tests\PIM\pim-employee.spec.ts:93:5

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Login' })
    - locator resolved to <button type="submit" data-v-10d463b7="" data-v-0af708be="" class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button">…</button>
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
  3  | export class LoginPage{
  4  |     readonly page:Page;
  5  |     readonly usernameInput:Locator;
  6  |     readonly passwordInput:Locator;
  7  |     readonly loginButton:Locator;
  8  |     readonly profileMenu:Locator;
  9  |     readonly errorMessage:Locator;
  10 |     readonly validationMessages:Locator;
  11 |     readonly forgotPasswordButton:Locator;
  12 | 
  13 |    
  14 | constructor(page:Page){
  15 |  this.page=page;
  16 |  this.usernameInput=page.getByRole('textbox', { name: 'Username' })
  17 |  this.passwordInput=page.getByRole('textbox', { name: 'Password' })
  18 |  this.loginButton= page.getByRole('button', { name: 'Login' })
  19 |  this.profileMenu=page.locator('li.oxd-userdropdown');
  20 |  this.errorMessage=page.getByText('Invalid credentials', { exact: true });
  21 |  this.validationMessages = page.locator( '.oxd-input-field-error-message');
  22 | this.forgotPasswordButton=page.getByText('Forgot your password?', { exact: true });
  23 | 
  24 | }
  25 | 
  26 | 
  27 | async visitPage():Promise<void>
  28 | {
  29 |   await this.page.goto('/',{
  30 |     waitUntil: 'domcontentloaded',
  31 |     timeout: 60_000,
  32 | 
  33 |   });
  34 | }
  35 | 
  36 | async login(Username:string,Password:string) {
  37 |     await this.usernameInput.fill(Username);  
  38 |     await this.passwordInput.fill(Password);
> 39 |     await this.loginButton.click();  
     |                            ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  40 | }
  41 | 
  42 | async verifyLoginSuccessful():Promise<void>
  43 | {
  44 |     await expect(this.page).toHaveURL(/dashboard/);
  45 | 
  46 | }
  47 | 
  48 | async verifyLoginUnsuccessful():Promise<void>
  49 | {
  50 |     await expect(this.page).toHaveURL(/auth\/login/);
  51 |     await expect(this.profileMenu).not.toBeVisible();
  52 |     await expect(this.usernameInput).toBeVisible();
  53 |     await expect(this.passwordInput).toBeVisible();
  54 |     await expect(this.loginButton).toBeVisible();
  55 | 
  56 | }
  57 | async clickOnForgotPassword():Promise<void>
  58 | {
  59 |     await this.forgotPasswordButton.click();
  60 | 
  61 | 
  62 | }
  63 | 
  64 | }
```