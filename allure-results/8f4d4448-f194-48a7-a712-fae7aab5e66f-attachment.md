# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.ts >> TC_LOGIN_002 - User should see an error for invalid username @negative @regression
- Location: tests\login.spec.ts:17:5

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByText('Invalid credentials', { exact: true })
Expected: "Invalid credentials"
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 10000ms
  - waiting for getByText('Invalid credentials', { exact: true })
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

```

# Test source

```ts
  1  | import { expect } from '@playwright/test';
  2  | import{test} from '../fixtures/baseTest';
  3  | 
  4  | 
  5  | 
  6  | test('TC_LOGIN_001 - Admin should login with valid credentials @smoke @regression',async({loginPage})=>{
  7  | await loginPage.visitPage();
  8  | 
  9  | await  loginPage.login('Admin', 'admin123');
  10 | 
  11 | await loginPage.verifyLoginSuccessful();
  12 | 
  13 | await expect(loginPage.profileMenu).toBeVisible();
  14 | 
  15 | });
  16 | 
  17 | test('TC_LOGIN_002 - User should see an error for invalid username @negative @regression',async({loginPage})=>{
  18 | await loginPage.visitPage();
  19 | 
  20 | await  loginPage.login('InvalidAdmin', 'admin123');
> 21 | await expect(loginPage.errorMessage).toHaveText('Invalid credentials');
     |                                      ^ Error: expect(locator).toHaveText(expected) failed
  22 | await loginPage.verifyLoginUnsuccessful();
  23 | });
  24 | 
  25 | 
  26 | test('TC_LOGIN_003 - User should see an error for invalid password @negative @regression',async({loginPage})=>{
  27 | await loginPage.visitPage();
  28 | 
  29 | await  loginPage.login('Admin', 'WrongPassword123');
  30 | await expect(loginPage.errorMessage).toHaveText('Invalid credentials');
  31 | await loginPage.verifyLoginUnsuccessful();
  32 | });
  33 | 
  34 | 
  35 | test('TC_LOGIN_004 - Required validation should appear for empty credentials @negative @regression',async({loginPage})=>{
  36 | await loginPage.visitPage();
  37 | 
  38 | await  loginPage.login('', '');
  39 | await expect(loginPage.validationMessages).toHaveCount(2);
  40 | await expect(loginPage.validationMessages).toHaveText(['Required','Required',]);
  41 | await loginPage.verifyLoginUnsuccessful();
  42 | });
  43 | 
  44 | 
  45 | test('TC_LOGIN_005 - Required validation should appear when username is empty @negative @validation @regression',async({loginPage})=>{
  46 | await loginPage.visitPage();
  47 | await  loginPage.login('', 'admin123');
  48 | await expect(loginPage.validationMessages).toHaveCount(1);
  49 | await expect(loginPage.validationMessages).toHaveText('Required');
  50 | await loginPage.verifyLoginUnsuccessful();
  51 | });
  52 | 
  53 | 
  54 | test('TC_LOGIN_006 - Required validation should appear when password is empty @negative @validation @regression',async({loginPage})=>{
  55 | await loginPage.visitPage();
  56 | await  loginPage.login('Admin', '');
  57 | await expect(loginPage.validationMessages).toHaveCount(1);
  58 | await expect(loginPage.validationMessages).toHaveText('Required');
  59 | await loginPage.verifyLoginUnsuccessful();
  60 | });
  61 | 
  62 | 
  63 | test('TC_LOGIN_007 - User should navigate to reset password page @smoke @regression',async({loginPage,forgotPage})=>{
  64 | await loginPage.visitPage();
  65 | await loginPage.clickOnForgotPassword();
  66 | await forgotPage.verifyResetRequestSuccessful();
  67 | 
  68 | });
  69 | 
  70 | 
  71 | 
  72 | test('TC_LOGIN_008 - Required validation should appear when reset username is empty @negative @validation @regression',async({loginPage,forgotPage})=>{
  73 | await loginPage.visitPage();
  74 | await loginPage.clickOnForgotPassword();
  75 | await forgotPage.verifyResetRequestSuccessful();
  76 | await forgotPage.usernameInput.fill('');
  77 | await forgotPage.submitResetRequest();
  78 | await expect(forgotPage.errorValidation).toHaveText('Required')
  79 | 
  80 | });
  81 | 
  82 | 
  83 | test('TC_LOGIN_009 - User should submit a password reset request with a valid username @positive @regression',async({loginPage,forgotPage})=>{
  84 | await loginPage.visitPage();
  85 | await loginPage.clickOnForgotPassword();
  86 | await forgotPage.verifyResetRequestSuccessful();
  87 | await forgotPage.enterUsername('Admin');
  88 | await forgotPage.submitResetRequest();
  89 | });
  90 | 
  91 | 
  92 | test('TC_LOGOUT_001 - Admin should logout successfully @smoke @regression',async({loginPage,dashboardPage})=>{
  93 | await loginPage.visitPage();
  94 | await loginPage.login('Admin', 'admin123');
  95 | await loginPage.verifyLoginSuccessful();
  96 | await  dashboardPage.clickOnLogout();
  97 | await loginPage.verifyLoginUnsuccessful();
  98 | });
```