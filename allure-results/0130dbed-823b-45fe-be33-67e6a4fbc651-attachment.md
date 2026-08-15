# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_131 - Admin should remove one status from multiple selected statuses @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:1248:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-input-group').filter({ has: locator('label').getByText('Show Leave with Status', { exact: true }) }).getByText('Rejected', { exact: true }).locator('..').locator('i.bi-x, i.oxd-icon')
Expected: visible
Error: strict mode violation: locator('.oxd-input-group').filter({ has: locator('label').getByText('Show Leave with Status', { exact: true }) }).getByText('Rejected', { exact: true }).locator('..').locator('i.bi-x, i.oxd-icon') resolved to 3 elements:
    1) <i data-v-bddebfba="" data-v-ded7e5b2="" class="oxd-icon bi-x --clear"></i> aka locator('.oxd-icon.bi-x.--clear').first()
    2) <i data-v-bddebfba="" data-v-ded7e5b2="" class="oxd-icon bi-x --clear"></i> aka locator('span:nth-child(2) > .oxd-icon').first()
    3) <i data-v-bddebfba="" data-v-ded7e5b2="" class="oxd-icon bi-x --clear"></i> aka locator('span:nth-child(3) > .oxd-icon')

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('Show Leave with Status', { exact: true }) }).getByText('Rejected', { exact: true }).locator('..').locator('i.bi-x, i.oxd-icon')

```

# Page snapshot

```yaml
- generic [ref=f2e2]:
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
                - paragraph [ref=f2e127]: Shakti Mishra
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
          - generic [ref=f2e245]: No Records Found
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
            - rowgroup
      - generic [ref=f2e266]:
        - paragraph [ref=f2e267]: OrangeHRM OS 5.9
        - paragraph [ref=f2e268]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f2e269] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=f2e271] [cursor=pointer]:
    - generic [ref=f2e272]:
      - generic [ref=f2e273]: 
      - generic [ref=f2e276]:
        - paragraph [ref=f2e277]: Info
        - paragraph [ref=f2e278]: No Records Found
    - button "×" [ref=f2e280]
```

# Test source

```ts
  340 | //     selectedStatus
  341 | //   ).toBeVisible();
  342 | 
  343 | //   await selectedStatus
  344 | //     .locator('.oxd-select-text--close')
  345 | //     .click();
  346 | 
  347 | //   await expect(
  348 | //     selectedStatus
  349 | //   ).toHaveCount(0);
  350 | // }
  351 | 
  352 | async getVisibleLeaveRecords():
  353 | Promise<string[]> {
  354 |   await expect(
  355 |     this.loadingSpinner
  356 |   ).toBeHidden();
  357 | 
  358 |   return this.leaveRows.allInnerTexts();
  359 | }
  360 | 
  361 | async waitForDefaultDateRange(): Promise<{
  362 |   fromDate: string;
  363 |   toDate: string;
  364 | }> {
  365 |   await expect(
  366 |     this.fromDateInput
  367 |   ).toBeVisible();
  368 | 
  369 |   await expect(
  370 |     this.toDateInput
  371 |   ).toBeVisible();
  372 | 
  373 |   await expect
  374 |     .poll(
  375 |       async () =>
  376 |         (
  377 |           await this.fromDateInput
  378 |             .inputValue()
  379 |         ).trim(),
  380 |       {
  381 |         timeout: 20_000,
  382 |         message:
  383 |           'Waiting for From Date to be populated',
  384 |       }
  385 |     )
  386 |     .not.toBe('');
  387 | 
  388 |   await expect
  389 |     .poll(
  390 |       async () =>
  391 |         (
  392 |           await this.toDateInput
  393 |             .inputValue()
  394 |         ).trim(),
  395 |       {
  396 |         timeout: 20_000,
  397 |         message:
  398 |           'Waiting for To Date to be populated',
  399 |       }
  400 |     )
  401 |     .not.toBe('');
  402 | 
  403 |   const fromDate = (
  404 |     await this.fromDateInput.inputValue()
  405 |   ).trim();
  406 | 
  407 |   const toDate = (
  408 |     await this.toDateInput.inputValue()
  409 |   ).trim();
  410 | 
  411 |   return {
  412 |     fromDate,
  413 |     toDate,
  414 |   };
  415 | }
  416 | 
  417 | async removeSelectedLeaveStatus(
  418 |   status: string
  419 | ): Promise<void> {
  420 |   const statusElement =
  421 |     this.leaveStatusField.getByText(
  422 |       status,
  423 |       { exact: true }
  424 |     );
  425 | 
  426 |   await expect(
  427 |     statusElement
  428 |   ).toBeVisible();
  429 | 
  430 |   const statusContainer =
  431 |     statusElement.locator('..');
  432 | 
  433 |   const removeButton =
  434 |     statusContainer.locator(
  435 |       'i.bi-x, i.oxd-icon'
  436 |     );
  437 | 
  438 |   await expect(
  439 |     removeButton
> 440 |   ).toBeVisible();
      |     ^ Error: expect(locator).toBeVisible() failed
  441 | 
  442 |   await removeButton.click();
  443 | 
  444 |   await expect(
  445 |     statusElement
  446 |   ).toHaveCount(0);
  447 | }
  448 | 
  449 | 
  450 | }
  451 | 
```