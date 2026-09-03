# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Recruitment\recruitment.spec.ts >> Recruitment - Candidates >> TC_RECRUITMENT_156 - Admin should shortlist an existing candidate successfully @positive @workflow @regression
- Location: tests\Recruitment\recruitment.spec.ts:1629:7

# Error details

```
Test timeout of 120000ms exceeded while running "beforeEach" hook.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('li.oxd-userdropdown')
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('li.oxd-userdropdown')

```

# Page snapshot

```yaml
- generic [ref=f1e2]:
  - generic [ref=f1e3]:
    - generic:
      - complementary [ref=f1e4]:
        - navigation "Sidepanel" [ref=f1e5]:
          - generic [ref=f1e6]:
            - link [ref=f1e7] [cursor=pointer]:
              - /url: https://www.orangehrm.com/
              - img "client brand banner" [ref=f1e9]
            - text: 
          - generic [ref=f1e10]:
            - generic [ref=f1e11]:
              - generic [ref=f1e12]:
                - textbox "Search" [ref=f1e15]
                - button "" [ref=f1e16] [cursor=pointer]
              - separator [ref=f1e18]
            - list [ref=f1e19]:
              - listitem [ref=f1e20]:
                - link "Admin" [ref=f1e21] [cursor=pointer]:
                  - /url: /web/index.php/admin/viewAdminModule
              - listitem [ref=f1e25]:
                - link "PIM" [ref=f1e26] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewPimModule
              - listitem [ref=f1e41]:
                - link "Leave" [ref=f1e42] [cursor=pointer]:
                  - /url: /web/index.php/leave/viewLeaveModule
              - listitem [ref=f1e46]:
                - link "Time" [ref=f1e47] [cursor=pointer]:
                  - /url: /web/index.php/time/viewTimeModule
              - listitem [ref=f1e54]:
                - link "Recruitment" [ref=f1e55] [cursor=pointer]:
                  - /url: /web/index.php/recruitment/viewRecruitmentModule
              - listitem [ref=f1e62]:
                - link "My Info" [ref=f1e63] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewMyDetails
              - listitem [ref=f1e70]:
                - link "Performance" [ref=f1e71] [cursor=pointer]:
                  - /url: /web/index.php/performance/viewPerformanceModule
              - listitem [ref=f1e80]:
                - link "Dashboard" [ref=f1e81] [cursor=pointer]:
                  - /url: /web/index.php/dashboard/index
              - listitem [ref=f1e85]:
                - link "Directory" [ref=f1e86] [cursor=pointer]:
                  - /url: /web/index.php/directory/viewDirectory
              - listitem [ref=f1e90]:
                - link "Maintenance" [ref=f1e91] [cursor=pointer]:
                  - /url: /web/index.php/maintenance/viewMaintenanceModule
              - listitem [ref=f1e96]:
                - link "Claim" [ref=f1e97] [cursor=pointer]:
                  - /url: /web/index.php/claim/viewClaimModule
              - listitem [ref=f1e105]:
                - link "Buzz" [ref=f1e106] [cursor=pointer]:
                  - /url: /web/index.php/buzz/viewBuzz
      - banner [ref=f1e110]:
        - generic [ref=f1e111]:
          - generic [ref=f1e112]:
            - text: 
            - heading "Dashboard" [level=6] [ref=f1e114]
          - link [ref=f1e116]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "general.upgrade" [ref=f1e117] [cursor=pointer]
          - list [ref=f1e123]:
            - listitem [ref=f1e124]:
              - generic [ref=f1e125] [cursor=pointer]:
                - img "profile picture" [ref=f1e126]
                - paragraph [ref=f1e127]: Demo Source
                - generic [ref=f1e128]: 
        - navigation "Topbar Menu" [ref=f1e130]:
          - list [ref=f1e131]:
            - button "" [ref=f1e133] [cursor=pointer]
    - generic [ref=f1e135]:
      - generic [ref=f1e137]:
        - generic [ref=f1e139]:
          - generic [ref=f1e141]:
            - generic [ref=f1e142]: 
            - paragraph [ref=f1e143]: dashboard.time_at_work
          - separator [ref=f1e144]
          - generic [ref=f1e146]:
            - generic [ref=f1e147]:
              - img "profile picture" [ref=f1e149]
              - generic [ref=f1e150]:
                - paragraph [ref=f1e151]: attendance.not_punched_in
                - paragraph
            - generic [ref=f1e152]:
              - generic [ref=f1e153]: 0h 0m general.today
              - button "" [ref=f1e154] [cursor=pointer]
            - separator [ref=f1e156]
            - generic [ref=f1e157]:
              - generic [ref=f1e158]:
                - paragraph [ref=f1e159]: dashboard.this_week
                - paragraph
              - generic [ref=f1e160]:
                - generic [ref=f1e161]: 
                - paragraph [ref=f1e162]: 0h 0m
        - generic [ref=f1e166]:
          - generic [ref=f1e168]:
            - generic [ref=f1e169]: 
            - paragraph [ref=f1e170]: dashboard.my_actions
          - separator [ref=f1e171]
          - generic [ref=f1e173]:
            - img "No Content" [ref=f1e174]
            - paragraph [ref=f1e175]: dashboard.no_pending_actions
        - generic [ref=f1e177]:
          - generic [ref=f1e179]:
            - generic [ref=f1e180]: 
            - paragraph [ref=f1e181]: dashboard.quick_launch
          - separator [ref=f1e182]
        - generic [ref=f1e186]:
          - generic [ref=f1e188]:
            - generic [ref=f1e189]: 
            - paragraph [ref=f1e190]: dashboard.buzz_latest_posts
          - separator [ref=f1e191]
        - generic [ref=f1e195]:
          - generic [ref=f1e196]:
            - paragraph [ref=f1e201]: dashboard.employees_on_leave_today
            - generic [ref=f1e202] [cursor=pointer]: 
          - separator [ref=f1e203]
        - generic [ref=f1e207]:
          - generic [ref=f1e209]:
            - generic [ref=f1e210]: 
            - paragraph [ref=f1e211]: dashboard.employee_distribution_by_sub_unit
          - separator [ref=f1e212]
        - generic [ref=f1e216]:
          - generic [ref=f1e218]:
            - generic [ref=f1e219]: 
            - paragraph [ref=f1e220]: dashboard.employee_distribution_by_location
          - separator [ref=f1e221]
      - generic [ref=f1e224]:
        - paragraph [ref=f1e225]: OrangeHRM OS 5.9
        - paragraph [ref=f1e226]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f1e227] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=f1e228]:
    - generic [ref=f1e229] [cursor=pointer]:
      - generic [ref=f1e230]:
        - generic [ref=f1e231]: 
        - generic [ref=f1e234]:
          - paragraph [ref=f1e235]: general.error
          - paragraph [ref=f1e236]: general.unexpected_error
      - button "×" [ref=f1e238]
    - generic [ref=f1e239] [cursor=pointer]:
      - generic [ref=f1e240]:
        - generic [ref=f1e241]: 
        - generic [ref=f1e244]:
          - paragraph [ref=f1e245]: general.error
          - paragraph [ref=f1e246]: general.unexpected_error
      - button "×" [ref=f1e248]
```

# Test source

```ts
  1  | import { Locator, Page, expect } from "@playwright/test";
  2  | 
  3  | export class LoginPage {
  4  |   readonly page: Page;
  5  |   readonly usernameInput: Locator;
  6  |   readonly passwordInput: Locator;
  7  |   readonly loginButton: Locator;
  8  |   readonly profileMenu: Locator;
  9  |   readonly errorMessage: Locator;
  10 |   readonly validationMessages: Locator;
  11 |   readonly forgotPasswordButton: Locator;
  12 | 
  13 |   constructor(page: Page) {
  14 |     this.page = page;
  15 |     this.usernameInput = page.getByRole("textbox", { name: "Username" });
  16 |     this.passwordInput = page.getByRole("textbox", { name: "Password" });
  17 |     this.loginButton = page.getByRole("button", { name: "Login" });
  18 |     this.profileMenu = page.locator("li.oxd-userdropdown");
  19 |     this.errorMessage = page.getByText(
  20 |       /^(Invalid credentials|Account disabled)$/,
  21 |     );
  22 |     this.validationMessages = page.locator(".oxd-input-field-error-message");
  23 |     this.forgotPasswordButton = page.getByText("Forgot your password?", {
  24 |       exact: true,
  25 |     });
  26 |   }
  27 | 
  28 |   async visitPage(): Promise<void> {
  29 |     for (let attempt = 1; attempt <= 2; attempt++) {
  30 |       try {
  31 |         await this.page.goto("/", {
  32 |           waitUntil: "domcontentloaded",
  33 |           timeout: 60_000,
  34 |         });
  35 |         return;
  36 |       } catch (error) {
  37 |         if (attempt === 2) {
  38 |           throw error;
  39 |         }
  40 |       }
  41 |     }
  42 |   }
  43 | 
  44 |   async login(Username: string, Password: string) {
  45 |     await this.usernameInput.fill(Username);
  46 |     await this.passwordInput.fill(Password);
  47 |     await this.loginButton.click();
  48 |   }
  49 | 
  50 |   async verifyLoginSuccessful(): Promise<void> {
  51 |     await expect(this.page).toHaveURL(
  52 |       /\/(dashboard\/index|pim\/viewPersonalDetails\/empNumber\/\d+)/,
  53 |       { timeout: 20_000 },
  54 |     );
> 55 |     await expect(this.profileMenu).toBeVisible({ timeout: 20_000 });
     |                                    ^ Error: expect(locator).toBeVisible() failed
  56 |   }
  57 | 
  58 |   async verifyLoginUnsuccessful(): Promise<void> {
  59 |     await expect(this.page).toHaveURL(/auth\/login/);
  60 |     await expect(this.profileMenu).not.toBeVisible();
  61 |     await expect(this.usernameInput).toBeVisible();
  62 |     await expect(this.passwordInput).toBeVisible();
  63 |     await expect(this.loginButton).toBeVisible();
  64 |   }
  65 |   async clickOnForgotPassword(): Promise<void> {
  66 |     await this.forgotPasswordButton.click();
  67 |   }
  68 | }
  69 | 
```