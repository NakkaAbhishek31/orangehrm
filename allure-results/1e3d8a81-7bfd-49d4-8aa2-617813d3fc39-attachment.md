# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> PIM Employee >> TC_PIM_035 - Disabled employee account should not login @negative @security @account @regression
- Location: tests\PIM\pim-employee.spec.ts:273:7

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
- generic [ref=f7e3]:
  - generic:
    - complementary [ref=f7e4]:
      - navigation "Sidepanel" [ref=f7e5]:
        - generic [ref=f7e6]:
          - link [ref=f7e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f7e9]
          - text: 
        - generic [ref=f7e10]:
          - generic [ref=f7e11]:
            - generic [ref=f7e12]:
              - textbox "Search" [ref=f7e15]
              - button "" [ref=f7e16] [cursor=pointer]
            - separator [ref=f7e18]
          - list [ref=f7e19]:
            - listitem [ref=f7e20]:
              - link "Admin" [ref=f7e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f7e25]:
              - link "PIM" [ref=f7e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f7e41]:
              - link "Leave" [ref=f7e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f7e46]:
              - link "Time" [ref=f7e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f7e54]:
              - link "Recruitment" [ref=f7e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f7e62]:
              - link "My Info" [ref=f7e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f7e70]:
              - link "Performance" [ref=f7e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f7e80]:
              - link "Dashboard" [ref=f7e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f7e85]:
              - link "Directory" [ref=f7e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f7e90]:
              - link "Maintenance" [ref=f7e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f7e96]:
              - link "Claim" [ref=f7e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f7e105]:
              - link "Buzz" [ref=f7e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f7e110]:
      - generic [ref=f7e111]:
        - generic [ref=f7e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f7e114]
        - link [ref=f7e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f7e117] [cursor=pointer]
        - list [ref=f7e123]:
          - listitem [ref=f7e124]:
            - generic [ref=f7e125] [cursor=pointer]:
              - img "profile picture" [ref=f7e126]
              - paragraph [ref=f7e127]: manda user
              - generic [ref=f7e128]: 
      - navigation "Topbar Menu" [ref=f7e130]:
        - list [ref=f7e131]:
          - listitem [ref=f7e132] [cursor=pointer]:
            - generic [ref=f7e133]:
              - text: Configuration
              - generic [ref=f7e134]: 
          - listitem [ref=f7e135] [cursor=pointer]:
            - link "Employee List" [ref=f7e136]:
              - /url: "#"
          - listitem [ref=f7e137] [cursor=pointer]:
            - link "Add Employee" [ref=f7e138]:
              - /url: "#"
          - listitem [ref=f7e139] [cursor=pointer]:
            - link "Reports" [ref=f7e140]:
              - /url: "#"
          - button "" [ref=f7e142] [cursor=pointer]
  - generic [ref=f7e144]:
    - generic [ref=f7e148]:
      - generic [ref=f7e149]:
        - generic [ref=f7e150]:
          - generic:
            - heading [level=6]
          - img "profile picture" [ref=f7e153] [cursor=pointer]
        - tablist [ref=f7e154]:
          - tab [ref=f7e155]:
            - link "Personal Details" [ref=f7e156] [cursor=pointer]:
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/200
          - tab [ref=f7e157]:
            - link "Contact Details" [ref=f7e158] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/200
          - tab [ref=f7e159]:
            - link "Emergency Contacts" [ref=f7e160] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/200
          - tab [ref=f7e161]:
            - link "Dependents" [ref=f7e162] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/200
          - tab [ref=f7e163]:
            - link "Immigration" [ref=f7e164] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/200
          - tab [ref=f7e165]:
            - link "Job" [ref=f7e166] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/200
          - tab [ref=f7e167]:
            - link "Salary" [ref=f7e168] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/200
          - tab [ref=f7e169]:
            - link "Report-to" [ref=f7e170] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/200
          - tab [ref=f7e171]:
            - link "Qualifications" [ref=f7e172] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/200
          - tab [ref=f7e173]:
            - link "Memberships" [ref=f7e174] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/200
      - generic [ref=f7e175]:
        - generic [ref=f7e176]:
          - heading "Personal Details" [level=6] [ref=f7e177]
          - separator [ref=f7e178]
          - generic [ref=f7e179]:
            - generic [ref=f7e186]:
              - generic [ref=f7e187]: Employee Full Name*
              - generic [ref=f7e189]:
                - textbox "First Name" [ref=f7e192]
                - textbox "Middle Name" [ref=f7e195]
                - textbox "Last Name" [ref=f7e198]
            - separator [ref=f7e199]
            - generic [ref=f7e200]:
              - generic [ref=f7e201]:
                - generic [ref=f7e203]:
                  - generic [ref=f7e204]: Employee Id
                  - textbox [ref=f7e207]
                - generic [ref=f7e209]:
                  - generic [ref=f7e210]: Other Id
                  - textbox [ref=f7e213]
              - generic [ref=f7e214]:
                - generic [ref=f7e216]:
                  - generic [ref=f7e217]: Driver's License Number
                  - textbox [ref=f7e220]
                - generic [ref=f7e222]:
                  - generic [ref=f7e223]: License Expiry Date
                  - generic [ref=f7e227]:
                    - textbox "yyyy-dd-mm" [ref=f7e228]
                    - generic [ref=f7e229] [cursor=pointer]: 
            - separator [ref=f7e230]
            - generic [ref=f7e231]:
              - generic [ref=f7e232]:
                - generic [ref=f7e234]:
                  - generic [ref=f7e235]: Nationality
                  - generic [ref=f7e239] [cursor=pointer]:
                    - generic [ref=f7e240]: "-- Select --"
                    - generic [ref=f7e241]: 
                - generic [ref=f7e244]:
                  - generic [ref=f7e245]: Marital Status
                  - generic [ref=f7e249] [cursor=pointer]:
                    - generic [ref=f7e250]: "-- Select --"
                    - generic [ref=f7e251]: 
              - generic [ref=f7e253]:
                - generic [ref=f7e255]:
                  - generic [ref=f7e256]: Date of Birth
                  - generic [ref=f7e260]:
                    - textbox "yyyy-dd-mm" [ref=f7e261]
                    - generic [ref=f7e262] [cursor=pointer]: 
                - generic [ref=f7e264]:
                  - generic [ref=f7e265]: Gender
                  - generic [ref=f7e267]:
                    - generic [ref=f7e271] [cursor=pointer]:
                      - radio "Male" [ref=f7e272]
                      - text: Male
                    - generic [ref=f7e277] [cursor=pointer]:
                      - radio "Female" [ref=f7e278]
                      - text: Female
            - separator [ref=f7e280]
            - generic [ref=f7e281]:
              - paragraph [ref=f7e282]: "* Required"
              - button "Save" [ref=f7e283] [cursor=pointer]
        - generic [ref=f7e284]:
          - separator [ref=f7e285]
          - generic [ref=f7e287]:
            - heading "Attachments" [level=6] [ref=f7e288]
            - button " Add" [ref=f7e289] [cursor=pointer]:
              - generic [ref=f7e290]: 
              - text: Add
          - table [ref=f7e292]
    - generic [ref=f7e296]:
      - paragraph [ref=f7e297]: OrangeHRM OS 5.9
      - paragraph [ref=f7e298]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f7e299] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
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