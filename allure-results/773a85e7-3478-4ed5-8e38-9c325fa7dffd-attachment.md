# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_131 - Admin should remove one status from multiple selected statuses @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:1033:7

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-input-group').filter({ has: locator('label').getByText('Show Leave with Status', { exact: true }) }).getByText('Rejected', { exact: true })
Expected: 0
Received: 1
Timeout:  20000ms

Call log:
  - Expect "toHaveCount" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('Show Leave with Status', { exact: true }) }).getByText('Rejected', { exact: true })
    43 × locator resolved to 1 element
       - unexpected value "1"

```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - generic:
    - complementary [ref=f2e4]:
      - navigation "Sidepanel" [ref=f2e5]:
        - generic [ref=f2e6]:
          - link [ref=f2e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f2e9]
          - text: 
        - generic [ref=f2e10]:
          - generic [ref=f2e11]:
            - generic [ref=f2e12]:
              - textbox "Search" [ref=f2e15]
              - button "" [ref=f2e16] [cursor=pointer]
            - separator [ref=f2e18]
          - list [ref=f2e19]:
            - listitem [ref=f2e20]:
              - link "Admin" [ref=f2e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f2e25]:
              - link "PIM" [ref=f2e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f2e41]:
              - link "Leave" [ref=f2e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f2e46]:
              - link "Time" [ref=f2e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f2e54]:
              - link "Recruitment" [ref=f2e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f2e62]:
              - link "My Info" [ref=f2e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f2e70]:
              - link "Performance" [ref=f2e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f2e80]:
              - link "Dashboard" [ref=f2e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f2e85]:
              - link "Directory" [ref=f2e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f2e90]:
              - link "Maintenance" [ref=f2e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f2e96]:
              - link "Claim" [ref=f2e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f2e105]:
              - link "Buzz" [ref=f2e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f2e110]:
      - generic [ref=f2e111]:
        - generic [ref=f2e112]:
          - text: 
          - heading "Leave" [level=6] [ref=f2e114]
        - link [ref=f2e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e117] [cursor=pointer]
        - list [ref=f2e123]:
          - listitem [ref=f2e124]:
            - generic [ref=f2e125] [cursor=pointer]:
              - img "profile picture" [ref=f2e126]
              - paragraph [ref=f2e127]: manda user
              - generic [ref=f2e128]: 
      - navigation "Topbar Menu" [ref=f2e130]:
        - list [ref=f2e131]:
          - listitem [ref=f2e132] [cursor=pointer]:
            - link "Apply" [ref=f2e133]:
              - /url: "#"
          - listitem [ref=f2e134] [cursor=pointer]:
            - link "My Leave" [ref=f2e135]:
              - /url: "#"
          - listitem [ref=f2e136] [cursor=pointer]:
            - generic [ref=f2e137]:
              - text: Entitlements
              - generic [ref=f2e138]: 
          - listitem [ref=f2e139] [cursor=pointer]:
            - generic [ref=f2e140]:
              - text: Reports
              - generic [ref=f2e141]: 
          - listitem [ref=f2e142] [cursor=pointer]:
            - generic [ref=f2e143]:
              - text: Configure
              - generic [ref=f2e144]: 
          - listitem [ref=f2e145] [cursor=pointer]:
            - link "Leave List" [ref=f2e146]:
              - /url: "#"
          - listitem [ref=f2e147] [cursor=pointer]:
            - link "Assign Leave" [ref=f2e148]:
              - /url: "#"
          - button "" [ref=f2e150] [cursor=pointer]
  - generic [ref=f2e152]:
    - generic [ref=f2e154]:
      - generic [ref=f2e155]:
        - generic [ref=f2e156]:
          - heading "Leave List" [level=5] [ref=f2e158]
          - button "" [ref=f2e161] [cursor=pointer]
        - separator [ref=f2e163]
        - generic [ref=f2e165]:
          - generic [ref=f2e167]:
            - generic [ref=f2e169]:
              - generic [ref=f2e170]: From Date
              - generic [ref=f2e174]:
                - textbox "yyyy-dd-mm" [ref=f2e175]: 2026-01-01
                - generic [ref=f2e176] [cursor=pointer]: 
            - generic [ref=f2e178]:
              - generic [ref=f2e179]: To Date
              - generic [ref=f2e183]:
                - textbox "yyyy-dd-mm" [ref=f2e184]: 2026-31-12
                - generic [ref=f2e185] [cursor=pointer]: 
            - generic [ref=f2e187]:
              - generic [ref=f2e188]: Show Leave with Status*
              - generic [ref=f2e191]:
                - generic [ref=f2e192] [cursor=pointer]:
                  - generic [ref=f2e193]: "-- Select --"
                  - generic [ref=f2e194]: 
                - generic [ref=f2e196]:
                  - generic [ref=f2e197]:
                    - text: Pending Approval
                    - generic [ref=f2e198] [cursor=pointer]: 
                  - generic [ref=f2e199]:
                    - text: Rejected
                    - generic [ref=f2e200] [cursor=pointer]: 
                  - generic [ref=f2e201]:
                    - text: Cancelled
                    - generic [ref=f2e202] [cursor=pointer]: 
            - generic [ref=f2e204]:
              - generic [ref=f2e205]: Leave Type
              - generic [ref=f2e209] [cursor=pointer]:
                - generic [ref=f2e210]: "-- Select --"
                - generic [ref=f2e211]: 
          - generic [ref=f2e214]:
            - generic [ref=f2e216]:
              - generic [ref=f2e217]: Employee Name
              - textbox "Type for hints..." [ref=f2e222]
            - generic [ref=f2e224]:
              - generic [ref=f2e225]: Sub Unit
              - generic [ref=f2e229] [cursor=pointer]:
                - generic [ref=f2e230]: "-- Select --"
                - generic [ref=f2e231]: 
            - generic [ref=f2e233]:
              - paragraph [ref=f2e234]: Include Past Employees
              - checkbox [ref=f2e237]
          - separator [ref=f2e239]
          - generic [ref=f2e240]:
            - paragraph [ref=f2e241]: "* Required"
            - button "Reset" [ref=f2e242] [cursor=pointer]
            - button "Search" [ref=f2e243] [cursor=pointer]
      - generic [ref=f2e244]:
        - generic [ref=f2e245]: (2) Records Found
        - table [ref=f2e248]:
          - rowgroup [ref=f2e249]:
            - row [ref=f2e250]:
              - columnheader "" [ref=f2e251]:
                - generic [ref=f2e253] [cursor=pointer]:
                  - checkbox "" [ref=f2e254]
                  - generic [ref=f2e255]: 
              - columnheader "Date" [ref=f2e257]
              - columnheader "Employee Name" [ref=f2e258]
              - columnheader "Leave Type" [ref=f2e259]
              - columnheader "Leave Balance (Days)" [ref=f2e260]
              - columnheader "Number of Days" [ref=f2e261]
              - columnheader "Status" [ref=f2e262]
              - columnheader "Comments" [ref=f2e263]
              - columnheader "Actions" [ref=f2e264]
          - rowgroup [ref=f2e265]:
            - row [ref=f2e267]:
              - cell "" [ref=f2e268]:
                - generic [ref=f2e271] [cursor=pointer]:
                  - checkbox "" [ref=f2e272]
                  - generic [ref=f2e273]: 
              - cell "2026-11-12" [ref=f2e275]
              - cell "Rajaa P" [ref=f2e277]
              - cell "CAN - Vacation" [ref=f2e279]
              - cell "149.00" [ref=f2e281]
              - cell "1.00" [ref=f2e283]
              - cell "Pending Approval (1.00)" [ref=f2e285]
              - cell [ref=f2e287]
              - cell [ref=f2e288]:
                - generic [ref=f2e289]:
                  - button "Approve" [ref=f2e290] [cursor=pointer]
                  - button "Reject" [ref=f2e291] [cursor=pointer]
                  - listitem [ref=f2e292]:
                    - button "" [ref=f2e293] [cursor=pointer]
            - row [ref=f2e296]:
              - cell "" [ref=f2e297]:
                - generic [ref=f2e300] [cursor=pointer]:
                  - checkbox "" [ref=f2e301]
                  - generic [ref=f2e302]: 
              - cell "2026-09-10" [ref=f2e304]
              - cell "Rajaa P" [ref=f2e306]
              - cell "CAN - Personal" [ref=f2e308]
              - cell "149.00" [ref=f2e310]
              - cell "1.00" [ref=f2e312]
              - cell "Pending Approval (1.00)" [ref=f2e314]
              - cell [ref=f2e316]
              - cell [ref=f2e317]:
                - generic [ref=f2e318]:
                  - button "Approve" [ref=f2e319] [cursor=pointer]
                  - button "Reject" [ref=f2e320] [cursor=pointer]
                  - listitem [ref=f2e321]:
                    - button "" [ref=f2e322] [cursor=pointer]
    - generic [ref=f2e325]:
      - paragraph [ref=f2e326]: OrangeHRM OS 5.9
      - paragraph [ref=f2e327]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e328] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  333 | //     ).filter({
  334 | //       hasText: status,
  335 | //     });
  336 | 
  337 | //   await expect(
  338 | //     selectedStatus
  339 | //   ).toBeVisible();
  340 | 
  341 | //   await selectedStatus
  342 | //     .locator('.oxd-select-text--close')
  343 | //     .click();
  344 | 
  345 | //   await expect(
  346 | //     selectedStatus
  347 | //   ).toHaveCount(0);
  348 | // }
  349 | 
  350 | async getVisibleLeaveRecords():
  351 | Promise<string[]> {
  352 |   await expect(
  353 |     this.loadingSpinner
  354 |   ).toBeHidden();
  355 | 
  356 |   return this.leaveRows.allInnerTexts();
  357 | }
  358 | 
  359 | async waitForDefaultDateRange(): Promise<{
  360 |   fromDate: string;
  361 |   toDate: string;
  362 | }> {
  363 |   await expect(
  364 |     this.fromDateInput
  365 |   ).toBeVisible();
  366 | 
  367 |   await expect(
  368 |     this.toDateInput
  369 |   ).toBeVisible();
  370 | 
  371 |   await expect
  372 |     .poll(
  373 |       async () =>
  374 |         (
  375 |           await this.fromDateInput
  376 |             .inputValue()
  377 |         ).trim(),
  378 |       {
  379 |         timeout: 20_000,
  380 |         message:
  381 |           'Waiting for From Date to be populated',
  382 |       }
  383 |     )
  384 |     .not.toBe('');
  385 | 
  386 |   await expect
  387 |     .poll(
  388 |       async () =>
  389 |         (
  390 |           await this.toDateInput
  391 |             .inputValue()
  392 |         ).trim(),
  393 |       {
  394 |         timeout: 20_000,
  395 |         message:
  396 |           'Waiting for To Date to be populated',
  397 |       }
  398 |     )
  399 |     .not.toBe('');
  400 | 
  401 |   const fromDate = (
  402 |     await this.fromDateInput.inputValue()
  403 |   ).trim();
  404 | 
  405 |   const toDate = (
  406 |     await this.toDateInput.inputValue()
  407 |   ).trim();
  408 | 
  409 |   return {
  410 |     fromDate,
  411 |     toDate,
  412 |   };
  413 | }
  414 | 
  415 | async removeSelectedLeaveStatus(
  416 |   status: string
  417 | ): Promise<void> {
  418 |   await this.leaveStatusDropdown.click();
  419 | 
  420 |   const dropdown = this.page.locator(".oxd-select-dropdown:visible");
  421 |   await expect(dropdown).toBeVisible();
  422 | 
  423 |   const option = dropdown.locator(".oxd-select-option").filter({
  424 |     hasText: new RegExp(`^\\s*${status}\\s*$`, "i"),
  425 |   }).first();
  426 | 
  427 |   await expect(option).toBeVisible();
  428 |   await option.click();
  429 |   await this.page.keyboard.press("Escape");
  430 | 
  431 |   await expect(
  432 |     this.leaveStatusField.getByText(status, { exact: true }),
> 433 |   ).toHaveCount(0);
      |     ^ Error: expect(locator).toHaveCount(expected) failed
  434 | }
  435 | 
  436 | 
  437 | }
  438 | 
```