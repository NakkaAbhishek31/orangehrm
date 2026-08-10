# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_PIM_077 - Employee should remain searchable after navigating away and returning @positive @navigation @regression
- Location: tests\Admin\admin-users.spec.ts:2776:5

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
    - banner [ref=f5e105]:
      - generic [ref=f5e106]:
        - generic [ref=f5e107]:
          - text: 
          - heading "PIM" [level=6] [ref=f5e109]
        - link [ref=f5e111]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f5e112] [cursor=pointer]
        - list [ref=f5e118]:
          - listitem [ref=f5e119]:
            - generic [ref=f5e120] [cursor=pointer]:
              - img "profile picture" [ref=f5e121]
              - paragraph [ref=f5e122]: George Russell
              - generic [ref=f5e123]: 
      - navigation "Topbar Menu" [ref=f5e125]:
        - list [ref=f5e126]:
          - listitem [ref=f5e127] [cursor=pointer]:
            - generic [ref=f5e128]:
              - text: Configuration
              - generic [ref=f5e129]: 
          - listitem [ref=f5e130] [cursor=pointer]:
            - link "Employee List" [ref=f5e131]:
              - /url: "#"
          - listitem [ref=f5e132] [cursor=pointer]:
            - link "Add Employee" [ref=f5e133]:
              - /url: "#"
          - listitem [ref=f5e134] [cursor=pointer]:
            - link "Reports" [ref=f5e135]:
              - /url: "#"
          - button "" [ref=f5e137] [cursor=pointer]
  - generic [ref=f5e139]:
    - generic [ref=f5e141]:
      - generic [ref=f5e142]:
        - generic [ref=f5e143]:
          - heading "Employee Information" [level=5] [ref=f5e145]
          - button "" [ref=f5e148] [cursor=pointer]
        - separator [ref=f5e150]
        - generic [ref=f5e152]:
          - generic [ref=f5e154]:
            - generic [ref=f5e156]:
              - generic [ref=f5e157]: Employee Name
              - textbox "Type for hints..." [ref=f5e162]
            - generic [ref=f5e164]:
              - generic [ref=f5e165]: Employee Id
              - textbox [ref=f5e168]: "700148248"
            - generic [ref=f5e170]:
              - generic [ref=f5e171]: Employment Status
              - generic [ref=f5e175] [cursor=pointer]:
                - generic [ref=f5e176]: "-- Select --"
                - generic [ref=f5e177]: 
            - generic [ref=f5e180]:
              - generic [ref=f5e181]: Include
              - generic [ref=f5e185] [cursor=pointer]:
                - generic [ref=f5e186]: Current Employees Only
                - generic [ref=f5e187]: 
            - generic [ref=f5e190]:
              - generic [ref=f5e191]: Supervisor Name
              - textbox "Type for hints..." [ref=f5e196]
            - generic [ref=f5e198]:
              - generic [ref=f5e199]: Job Title
              - generic [ref=f5e203] [cursor=pointer]:
                - generic [ref=f5e204]: "-- Select --"
                - generic [ref=f5e205]: 
            - generic [ref=f5e208]:
              - generic [ref=f5e209]: Sub Unit
              - generic [ref=f5e213] [cursor=pointer]:
                - generic [ref=f5e214]: "-- Select --"
                - generic [ref=f5e215]: 
          - separator [ref=f5e217]
          - generic [ref=f5e218]:
            - button "Reset" [ref=f5e219] [cursor=pointer]
            - button "Search" [active] [ref=f5e220] [cursor=pointer]
      - generic [ref=f5e221]:
        - button " Add" [ref=f5e223] [cursor=pointer]:
          - generic [ref=f5e224]: 
          - text: Add
        - generic [ref=f5e225]:
          - separator [ref=f5e226]
          - generic [ref=f5e227]: (1) Record Found
        - table [ref=f5e230]:
          - rowgroup [ref=f5e231]:
            - row [ref=f5e232]:
              - columnheader "" [ref=f5e233]:
                - generic [ref=f5e235] [cursor=pointer]:
                  - checkbox "" [ref=f5e236]
                  - generic [ref=f5e237]: 
              - columnheader "Id " [ref=f5e239]:
                - text: Id
                - generic [ref=f5e240]:
                  - generic [ref=f5e241] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f5e242]:
                - text: First (& Middle) Name
                - generic [ref=f5e243]:
                  - generic [ref=f5e244] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f5e245]:
                - text: Last Name
                - generic [ref=f5e246]:
                  - generic [ref=f5e247] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f5e248]:
                - text: Job Title
                - generic [ref=f5e249]:
                  - generic [ref=f5e250] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f5e251]:
                - text: Employment Status
                - generic [ref=f5e252]:
                  - generic [ref=f5e253] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f5e254]:
                - text: Sub Unit
                - generic [ref=f5e255]:
                  - generic [ref=f5e256] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f5e257]:
                - text: Supervisor
                - generic [ref=f5e258]:
                  - generic [ref=f5e259] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f5e260]
          - rowgroup [ref=f5e261]:
            - row [ref=f5e263] [cursor=pointer]:
              - cell "" [ref=f5e264]:
                - generic [ref=f5e267]:
                  - checkbox "" [ref=f5e268]
                  - generic [ref=f5e269]: 
              - cell "700148248" [ref=f5e271]
              - cell "Persist4b69a81a Test" [ref=f5e273]
              - cell "User" [ref=f5e275]
              - cell [ref=f5e277]
              - cell [ref=f5e278]
              - cell [ref=f5e279]
              - cell [ref=f5e280]
              - cell [ref=f5e281]:
                - generic [ref=f5e282]:
                  - button "" [ref=f5e283]
                  - button "" [ref=f5e285]
    - generic [ref=f5e288]:
      - paragraph [ref=f5e289]: OrangeHRM OS 5.9
      - paragraph [ref=f5e290]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f5e291] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  1  | import{Locator, Page,expect} from "@playwright/test"
  2  | 
  3  | export class NavigationPage{
  4  | 
  5  |     readonly page:Page;
  6  |     readonly PIMLink:Locator;
  7  |     readonly adminLink:Locator 
  8  | 
  9  | 
  10 |     constructor(page:Page)
  11 |     {
  12 |         this.page=page;
  13 |         this.PIMLink=page.getByText('PIM', { exact: true });
  14 |         this.adminLink=page.getByRole('link', { name: /Admin/i })
  15 |     }
  16 | 
  17 |     async gotoPIM():Promise<void>
  18 |     {
> 19 |         await this.PIMLink.click();
     |                            ^ Error: locator.click: Error: strict mode violation: getByText('PIM', { exact: true }) resolved to 2 elements:
  20 |     }
  21 | 
  22 |     async gotoAdmin():Promise<void>
  23 |     {
  24 |      await this.adminLink.click();
  25 |      await this.page.waitForURL(
  26 |     /admin\/viewSystemUsers/,
  27 |     {
  28 |       timeout: 20_000,
  29 |     }
  30 |      )
  31 |     }
  32 | 
  33 | 
  34 | 
  35 | }
```