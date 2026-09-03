# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_131 - Admin should remove one status from multiple selected statuses @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:1041:7

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
                - generic [ref=f2e197]:
                  - text: Rejected
                  - generic [ref=f2e198] [cursor=pointer]: 
            - generic [ref=f2e200]:
              - generic [ref=f2e201]: Leave Type
              - generic [ref=f2e205] [cursor=pointer]:
                - generic [ref=f2e206]: "-- Select --"
                - generic [ref=f2e207]: 
          - generic [ref=f2e210]:
            - generic [ref=f2e212]:
              - generic [ref=f2e213]: Employee Name
              - textbox "Type for hints..." [ref=f2e218]
            - generic [ref=f2e220]:
              - generic [ref=f2e221]: Sub Unit
              - generic [ref=f2e225] [cursor=pointer]:
                - generic [ref=f2e226]: "-- Select --"
                - generic [ref=f2e227]: 
            - generic [ref=f2e229]:
              - paragraph [ref=f2e230]: Include Past Employees
              - checkbox [ref=f2e233]
          - separator [ref=f2e235]
          - generic [ref=f2e236]:
            - paragraph [ref=f2e237]: "* Required"
            - button "Reset" [ref=f2e238] [cursor=pointer]
            - button "Search" [ref=f2e239] [cursor=pointer]
      - generic [ref=f2e240]:
        - generic [ref=f2e241]: No Records Found
        - table [ref=f2e244]:
          - rowgroup [ref=f2e245]:
            - row [ref=f2e246]:
              - columnheader "" [ref=f2e247]:
                - generic [ref=f2e249] [cursor=pointer]:
                  - checkbox "" [ref=f2e250]
                  - generic [ref=f2e251]: 
              - columnheader "Date" [ref=f2e253]
              - columnheader "Employee Name" [ref=f2e254]
              - columnheader "Leave Type" [ref=f2e255]
              - columnheader "Leave Balance (Days)" [ref=f2e256]
              - columnheader "Number of Days" [ref=f2e257]
              - columnheader "Status" [ref=f2e258]
              - columnheader "Comments" [ref=f2e259]
              - columnheader "Actions" [ref=f2e260]
          - rowgroup
    - generic [ref=f2e262]:
      - paragraph [ref=f2e263]: OrangeHRM OS 5.9
      - paragraph [ref=f2e264]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e265] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  348 | //     this.leaveStatusDropdown.locator(
  349 | //       '.oxd-select-text-selected'
  350 | //     ).filter({
  351 | //       hasText: status,
  352 | //     });
  353 | 
  354 | //   await expect(
  355 | //     selectedStatus
  356 | //   ).toBeVisible();
  357 | 
  358 | //   await selectedStatus
  359 | //     .locator('.oxd-select-text--close')
  360 | //     .click();
  361 | 
  362 | //   await expect(
  363 | //     selectedStatus
  364 | //   ).toHaveCount(0);
  365 | // }
  366 | 
  367 | async getVisibleLeaveRecords():
  368 | Promise<string[]> {
  369 |   await expect(
  370 |     this.loadingSpinner
  371 |   ).toBeHidden();
  372 | 
  373 |   return this.leaveRows.allInnerTexts();
  374 | }
  375 | 
  376 | async waitForDefaultDateRange(): Promise<{
  377 |   fromDate: string;
  378 |   toDate: string;
  379 | }> {
  380 |   await expect(
  381 |     this.fromDateInput
  382 |   ).toBeVisible();
  383 | 
  384 |   await expect(
  385 |     this.toDateInput
  386 |   ).toBeVisible();
  387 | 
  388 |   await expect
  389 |     .poll(
  390 |       async () =>
  391 |         (
  392 |           await this.fromDateInput
  393 |             .inputValue()
  394 |         ).trim(),
  395 |       {
  396 |         timeout: 20_000,
  397 |         message:
  398 |           'Waiting for From Date to be populated',
  399 |       }
  400 |     )
  401 |     .not.toBe('');
  402 | 
  403 |   await expect
  404 |     .poll(
  405 |       async () =>
  406 |         (
  407 |           await this.toDateInput
  408 |             .inputValue()
  409 |         ).trim(),
  410 |       {
  411 |         timeout: 20_000,
  412 |         message:
  413 |           'Waiting for To Date to be populated',
  414 |       }
  415 |     )
  416 |     .not.toBe('');
  417 | 
  418 |   const fromDate = (
  419 |     await this.fromDateInput.inputValue()
  420 |   ).trim();
  421 | 
  422 |   const toDate = (
  423 |     await this.toDateInput.inputValue()
  424 |   ).trim();
  425 | 
  426 |   return {
  427 |     fromDate,
  428 |     toDate,
  429 |   };
  430 | }
  431 | 
  432 | async removeSelectedLeaveStatus(
  433 |   status: string
  434 | ): Promise<void> {
  435 |   const statusElement = this.leaveStatusField.getByText(status, {
  436 |     exact: true,
  437 |   });
  438 |   await expect(statusElement).toBeVisible();
  439 | 
  440 |   const removeButton = statusElement.locator(
  441 |     "xpath=following::i[contains(@class,'bi-x')][1]",
  442 |   );
  443 |   await expect(removeButton).toBeVisible();
  444 |   await removeButton.click();
  445 | 
  446 |   await expect(
  447 |     this.leaveStatusField.getByText(status, { exact: true }),
> 448 |   ).toHaveCount(0);
      |     ^ Error: expect(locator).toHaveCount(expected) failed
  449 | }
  450 | 
  451 | async searchLeaveList(): Promise<void> {
  452 |   const leaveResponse = this.page.waitForResponse(
  453 |     (response) =>
  454 |       response.url().includes("/api/v2/leave/employees/leave-requests") &&
  455 |       response.request().method() === "GET" &&
  456 |       response.ok(),
  457 |     { timeout: 20_000 },
  458 |   );
  459 | 
  460 |   await this.searchButton.click();
  461 |   await leaveResponse;
  462 |   await expect(this.loadingSpinner).toBeHidden({ timeout: 20_000 });
  463 | }
  464 | 
  465 | 
  466 | }
  467 | 
```