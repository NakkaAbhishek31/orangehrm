# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> PIM Employee >> TC_PIM_036 - Enabled employee account should login successfully @positive @security @account @regression
- Location: tests\PIM\pim-employee.spec.ts:195:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /dashboard/
Received string:  "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/342"
Timeout: 10000ms

Call log:
  - Expect "toHaveURL" with timeout 10000ms
    22 × locator resolved to <html>…</html>
       - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/342"

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "PIM" [level=6]
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Auto1786432054932786 User
      - text: 
  - navigation "Topbar Menu":
    - list:
      - button ""
- heading "Auto1786432054932786 User" [level=6]
- img "profile picture"
- tablist:
  - tab "Personal Details":
    - link "Personal Details":
      - /url: /web/index.php/pim/viewPersonalDetails/empNumber/342
  - tab "Contact Details":
    - link "Contact Details":
      - /url: /web/index.php/pim/contactDetails/empNumber/342
  - tab "Emergency Contacts":
    - link "Emergency Contacts":
      - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/342
  - tab "Dependents":
    - link "Dependents":
      - /url: /web/index.php/pim/viewDependents/empNumber/342
  - tab "Immigration":
    - link "Immigration":
      - /url: /web/index.php/pim/viewImmigration/empNumber/342
  - tab "Job":
    - link "Job":
      - /url: /web/index.php/pim/viewJobDetails/empNumber/342
  - tab "Salary":
    - link "Salary":
      - /url: /web/index.php/pim/viewSalaryList/empNumber/342
  - tab "Report-to":
    - link "Report-to":
      - /url: /web/index.php/pim/viewReportToDetails/empNumber/342
  - tab "Qualifications":
    - link "Qualifications":
      - /url: /web/index.php/pim/viewQualifications/empNumber/342
  - tab "Memberships":
    - link "Memberships":
      - /url: /web/index.php/pim/viewMemberships/empNumber/342
- heading "Personal Details" [level=6]
- separator
- text: Employee Full Name*
- textbox "First Name": Auto1786432054932786
- textbox "Middle Name": Test
- textbox "Last Name": User
- separator
- text: Employee Id
- textbox [disabled]: "0538"
- text: Other Id
- textbox
- text: Driver's License Number
- textbox [disabled]
- text: License Expiry Date
- textbox "dd-mm-yyyy"
- text: 
- separator
- text: Nationality -- Select --  Marital Status -- Select --  Date of Birth
- textbox "dd-mm-yyyy" [disabled]
- text:  Gender
- radio "Male"
- text: Male
- radio "Female"
- text: Female
- separator
- paragraph: "* Required"
- button "Save"
- separator
- heading "Custom Fields" [level=6]
- separator
- text: Blood Type -- Select --  Test_Field
- textbox
- separator
- button "Save"
- separator
- heading "Attachments" [level=6]
- button " Add"
- separator
- text: No Records Found
- table:
  - rowgroup:
    - row " File Name Description Size Type Date Added Added By Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "File Name"
      - columnheader "Description"
      - columnheader "Size"
      - columnheader "Type"
      - columnheader "Date Added"
      - columnheader "Added By"
      - columnheader "Actions"
  - rowgroup
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
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
  20 | this.errorMessage = page.getByText(
  21 |   /^(Invalid credentials|Account disabled)$/,
  22 | );
  23 |  this.validationMessages = page.locator( '.oxd-input-field-error-message');
  24 | this.forgotPasswordButton=page.getByText('Forgot your password?', { exact: true });
  25 | 
  26 | }
  27 | 
  28 | 
  29 | async visitPage():Promise<void>
  30 | {
  31 |   await this.page.goto('/',{
  32 |     waitUntil: 'domcontentloaded',
  33 |     timeout: 60_000,
  34 | 
  35 |   });
  36 | }
  37 | 
  38 | async login(Username:string,Password:string) {
  39 |     await this.usernameInput.fill(Username);  
  40 |     await this.passwordInput.fill(Password);
  41 |     await this.loginButton.click();  
  42 | }
  43 | 
  44 | async verifyLoginSuccessful():Promise<void>
  45 | {
> 46 |     await expect(this.page).toHaveURL(/dashboard/);
     |                             ^ Error: expect(page).toHaveURL(expected) failed
  47 | 
  48 | }
  49 | 
  50 | async verifyLoginUnsuccessful():Promise<void>
  51 | {
  52 |     await expect(this.page).toHaveURL(/auth\/login/);
  53 |     await expect(this.profileMenu).not.toBeVisible();
  54 |     await expect(this.usernameInput).toBeVisible();
  55 |     await expect(this.passwordInput).toBeVisible();
  56 |     await expect(this.loginButton).toBeVisible();
  57 | 
  58 | }
  59 | async clickOnForgotPassword():Promise<void>
  60 | {
  61 |     await this.forgotPasswordButton.click();
  62 | 
  63 | 
  64 | }
  65 | 
  66 | }
```