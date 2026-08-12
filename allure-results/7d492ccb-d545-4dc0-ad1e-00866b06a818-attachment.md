# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_PIM_089 - Deleted employee should not appear after reopening Employee List @positive @delete @regression
- Location: tests\Admin\admin-users.spec.ts:1228:8

# Error details

```
Error: locator.click: Error: strict mode violation: getByText('PIM', { exact: true }) resolved to 2 elements:
    1) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">PIM</span> aka getByRole('link', { name: 'PIM' })
    2) <h6 data-v-7b563373="" data-v-c286b6e5="" class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module">PIM</h6> aka getByRole('heading', { name: 'PIM' })

Call log:
  - waiting for getByText('PIM', { exact: true })

```

# Page snapshot

```yaml
- generic [ref=f5e2]:
  - generic [ref=f5e3]:
    - generic:
      - complementary [ref=f5e4]:
        - navigation "Sidepanel" [ref=f5e5]:
          - generic [ref=f5e6]:
            - link [ref=f5e7] [cursor=pointer]:
              - /url: https://www.orangehrm.com/
              - img "client brand banner" [ref=f5e9]
            - text: 
          - generic [ref=f5e10]:
            - generic [ref=f5e11]:
              - generic [ref=f5e12]:
                - textbox "Search" [ref=f5e15]
                - button "" [ref=f5e16] [cursor=pointer]
              - separator [ref=f5e18]
            - list [ref=f5e19]:
              - listitem [ref=f5e20]:
                - link "Admin" [ref=f5e21] [cursor=pointer]:
                  - /url: /web/index.php/admin/viewAdminModule
              - listitem [ref=f5e25]:
                - link "PIM" [ref=f5e26] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewPimModule
              - listitem [ref=f5e41]:
                - link "Leave" [ref=f5e42] [cursor=pointer]:
                  - /url: /web/index.php/leave/viewLeaveModule
              - listitem [ref=f5e46]:
                - link "Time" [ref=f5e47] [cursor=pointer]:
                  - /url: /web/index.php/time/viewTimeModule
              - listitem [ref=f5e54]:
                - link "Recruitment" [ref=f5e55] [cursor=pointer]:
                  - /url: /web/index.php/recruitment/viewRecruitmentModule
              - listitem [ref=f5e62]:
                - link "My Info" [ref=f5e63] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewMyDetails
              - listitem [ref=f5e70]:
                - link "Performance" [ref=f5e71] [cursor=pointer]:
                  - /url: /web/index.php/performance/viewPerformanceModule
              - listitem [ref=f5e80]:
                - link "Dashboard" [ref=f5e81] [cursor=pointer]:
                  - /url: /web/index.php/dashboard/index
              - listitem [ref=f5e85]:
                - link "Directory" [ref=f5e86] [cursor=pointer]:
                  - /url: /web/index.php/directory/viewDirectory
              - listitem [ref=f5e90]:
                - link "Maintenance" [ref=f5e91] [cursor=pointer]:
                  - /url: /web/index.php/maintenance/viewMaintenanceModule
              - listitem [ref=f5e96]:
                - link "Claim" [ref=f5e97] [cursor=pointer]:
                  - /url: /web/index.php/claim/viewClaimModule
              - listitem [ref=f5e105]:
                - link "Buzz" [ref=f5e106] [cursor=pointer]:
                  - /url: /web/index.php/buzz/viewBuzz
      - banner [ref=f5e110]:
        - generic [ref=f5e111]:
          - generic [ref=f5e112]:
            - text: 
            - heading "PIM" [level=6] [ref=f5e114]
          - link [ref=f5e116]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "Upgrade" [ref=f5e117] [cursor=pointer]
          - list [ref=f5e123]:
            - listitem [ref=f5e124]:
              - generic [ref=f5e125] [cursor=pointer]:
                - img "profile picture" [ref=f5e126]
                - paragraph [ref=f5e127]: george Smith
                - generic [ref=f5e128]: 
        - navigation "Topbar Menu" [ref=f5e130]:
          - list [ref=f5e131]:
            - listitem [ref=f5e132] [cursor=pointer]:
              - generic [ref=f5e133]:
                - text: Configuration
                - generic [ref=f5e134]: 
            - listitem [ref=f5e135] [cursor=pointer]:
              - link "Employee List" [ref=f5e136]:
                - /url: "#"
            - listitem [ref=f5e137] [cursor=pointer]:
              - link "Add Employee" [ref=f5e138]:
                - /url: "#"
            - listitem [ref=f5e139] [cursor=pointer]:
              - link "Reports" [ref=f5e140]:
                - /url: "#"
            - button "" [ref=f5e142] [cursor=pointer]
    - generic [ref=f5e144]:
      - generic [ref=f5e146]:
        - generic [ref=f5e147]:
          - generic [ref=f5e148]:
            - heading "Employee Information" [level=5] [ref=f5e150]
            - button "" [ref=f5e153] [cursor=pointer]
          - separator [ref=f5e155]
          - generic [ref=f5e157]:
            - generic [ref=f5e159]:
              - generic [ref=f5e161]:
                - generic [ref=f5e162]: Employee Name
                - textbox "Type for hints..." [ref=f5e167]
              - generic [ref=f5e169]:
                - generic [ref=f5e170]: Employee Id
                - textbox [ref=f5e173]: "230141077"
              - generic [ref=f5e175]:
                - generic [ref=f5e176]: Employment Status
                - generic [ref=f5e180] [cursor=pointer]:
                  - generic [ref=f5e181]: "-- Select --"
                  - generic [ref=f5e182]: 
              - generic [ref=f5e185]:
                - generic [ref=f5e186]: Include
                - generic [ref=f5e190] [cursor=pointer]:
                  - generic [ref=f5e191]: Current Employees Only
                  - generic [ref=f5e192]: 
              - generic [ref=f5e195]:
                - generic [ref=f5e196]: Supervisor Name
                - textbox "Type for hints..." [ref=f5e201]
              - generic [ref=f5e203]:
                - generic [ref=f5e204]: Job Title
                - generic [ref=f5e208] [cursor=pointer]:
                  - generic [ref=f5e209]: "-- Select --"
                  - generic [ref=f5e210]: 
              - generic [ref=f5e213]:
                - generic [ref=f5e214]: Sub Unit
                - generic [ref=f5e218] [cursor=pointer]:
                  - generic [ref=f5e219]: "-- Select --"
                  - generic [ref=f5e220]: 
            - separator [ref=f5e222]
            - generic [ref=f5e223]:
              - button "Reset" [ref=f5e224] [cursor=pointer]
              - button "Search" [ref=f5e225] [cursor=pointer]
        - generic [ref=f5e226]:
          - button " Add" [ref=f5e228] [cursor=pointer]:
            - generic [ref=f5e229]: 
            - text: Add
          - table [ref=f5e231]
      - generic [ref=f5e236]:
        - paragraph [ref=f5e237]: OrangeHRM OS 5.9
        - paragraph [ref=f5e238]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f5e239] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=f5e241] [cursor=pointer]:
    - generic [ref=f5e242]:
      - generic [ref=f5e243]: 
      - generic [ref=f5e246]:
        - paragraph [ref=f5e247]: Success
        - paragraph [ref=f5e248]: Successfully Deleted
    - button "×" [ref=f5e250]
```

# Test source

```ts
  1  | import { Locator, Page, expect } from "@playwright/test";
  2  | 
  3  | export class NavigationPage {
  4  |   readonly page: Page;
  5  |   readonly PIMLink: Locator;
  6  |   readonly adminLink: Locator;
  7  | 
  8  |   constructor(page: Page) {
  9  |     this.page = page;
  10 |     this.PIMLink = page.getByText("PIM", { exact: true });
  11 |     this.adminLink = page.getByRole("link", { name: /Admin/i });
  12 |   }
  13 | 
  14 |   async gotoPIM(): Promise<void> {
> 15 |     await this.PIMLink.click();
     |                        ^ Error: locator.click: Error: strict mode violation: getByText('PIM', { exact: true }) resolved to 2 elements:
  16 |   }
  17 | 
  18 |   async gotoAdmin(): Promise<void> {
  19 |     await this.adminLink.click();
  20 |     await this.page.waitForURL(/admin\/viewSystemUsers/, {
  21 |       timeout: 20_000,
  22 |     });
  23 |   }
  24 | 
  25 |   async gotoLeave(): Promise<void> {
  26 |   await this.page.getByRole('link', {
  27 |     name: 'Leave',
  28 |     exact: true,
  29 |   }).click();
  30 | 
  31 |   await expect(this.page).toHaveURL(
  32 |     /leave\/viewLeaveList/
  33 |   );
  34 | }
  35 | }
  36 | 
```