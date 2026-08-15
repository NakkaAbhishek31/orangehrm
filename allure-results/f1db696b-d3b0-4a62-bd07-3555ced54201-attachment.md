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
        - generic [ref=f2e241]: (4) Records Found
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
          - rowgroup [ref=f2e261]:
            - row [ref=f2e263]:
              - cell "" [ref=f2e264]:
                - generic [ref=f2e267] [cursor=pointer]:
                  - checkbox "" [ref=f2e268]
                  - generic [ref=f2e269]: 
              - cell "2026-11-12" [ref=f2e271]
              - cell "Rajaa P" [ref=f2e273]
              - cell "CAN - Vacation" [ref=f2e275]
              - cell "148.00" [ref=f2e277]
              - cell "1.00" [ref=f2e279]
              - cell "Pending Approval (1.00)" [ref=f2e281]
              - cell [ref=f2e283]
              - cell [ref=f2e284]:
                - generic [ref=f2e285]:
                  - button "Approve" [ref=f2e286] [cursor=pointer]
                  - button "Reject" [ref=f2e287] [cursor=pointer]
                  - listitem [ref=f2e288]:
                    - button "" [ref=f2e289] [cursor=pointer]
            - row [ref=f2e292]:
              - cell "" [ref=f2e293]:
                - generic [ref=f2e296] [cursor=pointer]:
                  - checkbox "" [ref=f2e297]
                  - generic [ref=f2e298]: 
              - cell "2026-09-10" [ref=f2e300]
              - cell "Rajaa P" [ref=f2e302]
              - cell "CAN - Personal" [ref=f2e304]
              - cell "148.00" [ref=f2e306]
              - cell "1.00" [ref=f2e308]
              - cell "Pending Approval (1.00)" [ref=f2e310]
              - cell [ref=f2e312]
              - cell [ref=f2e313]:
                - generic [ref=f2e314]:
                  - button "Approve" [ref=f2e315] [cursor=pointer]
                  - button "Reject" [ref=f2e316] [cursor=pointer]
                  - listitem [ref=f2e317]:
                    - button "" [ref=f2e318] [cursor=pointer]
            - row [ref=f2e321]:
              - cell "" [ref=f2e322]:
                - generic [ref=f2e325] [cursor=pointer]:
                  - checkbox "" [ref=f2e326]
                  - generic [ref=f2e327]: 
              - cell "2026-12-06" [ref=f2e329]
              - cell "Rajaa P" [ref=f2e331]
              - cell "CAN - Vacation" [ref=f2e333]
              - cell "148.00" [ref=f2e335]
              - cell "1.00" [ref=f2e337]
              - cell "Pending Approval (1.00)" [ref=f2e339]
              - cell [ref=f2e341]
              - cell [ref=f2e342]:
                - generic [ref=f2e343]:
                  - button "Approve" [ref=f2e344] [cursor=pointer]
                  - button "Reject" [ref=f2e345] [cursor=pointer]
                  - listitem [ref=f2e346]:
                    - button "" [ref=f2e347] [cursor=pointer]
            - row [ref=f2e350]:
              - cell "" [ref=f2e351]:
                - generic [ref=f2e354] [cursor=pointer]:
                  - checkbox "" [ref=f2e355]
                  - generic [ref=f2e356]: 
              - cell "2026-12-01" [ref=f2e358]
              - cell "Rajaa P" [ref=f2e360]
              - cell "CAN - Personal" [ref=f2e362]
              - cell "148.00" [ref=f2e364]
              - cell "1.00" [ref=f2e366]
              - cell "Pending Approval (1.00)" [ref=f2e368]
              - cell [ref=f2e370]
              - cell [ref=f2e371]:
                - generic [ref=f2e372]:
                  - button "Approve" [ref=f2e373] [cursor=pointer]
                  - button "Reject" [ref=f2e374] [cursor=pointer]
                  - listitem [ref=f2e375]:
                    - button "" [ref=f2e376] [cursor=pointer]
    - generic [ref=f2e379]:
      - paragraph [ref=f2e380]: OrangeHRM OS 5.9
      - paragraph [ref=f2e381]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e382] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  344 | //     this.leaveStatusDropdown.locator(
  345 | //       '.oxd-select-text-selected'
  346 | //     ).filter({
  347 | //       hasText: status,
  348 | //     });
  349 | 
  350 | //   await expect(
  351 | //     selectedStatus
  352 | //   ).toBeVisible();
  353 | 
  354 | //   await selectedStatus
  355 | //     .locator('.oxd-select-text--close')
  356 | //     .click();
  357 | 
  358 | //   await expect(
  359 | //     selectedStatus
  360 | //   ).toHaveCount(0);
  361 | // }
  362 | 
  363 | async getVisibleLeaveRecords():
  364 | Promise<string[]> {
  365 |   await expect(
  366 |     this.loadingSpinner
  367 |   ).toBeHidden();
  368 | 
  369 |   return this.leaveRows.allInnerTexts();
  370 | }
  371 | 
  372 | async waitForDefaultDateRange(): Promise<{
  373 |   fromDate: string;
  374 |   toDate: string;
  375 | }> {
  376 |   await expect(
  377 |     this.fromDateInput
  378 |   ).toBeVisible();
  379 | 
  380 |   await expect(
  381 |     this.toDateInput
  382 |   ).toBeVisible();
  383 | 
  384 |   await expect
  385 |     .poll(
  386 |       async () =>
  387 |         (
  388 |           await this.fromDateInput
  389 |             .inputValue()
  390 |         ).trim(),
  391 |       {
  392 |         timeout: 20_000,
  393 |         message:
  394 |           'Waiting for From Date to be populated',
  395 |       }
  396 |     )
  397 |     .not.toBe('');
  398 | 
  399 |   await expect
  400 |     .poll(
  401 |       async () =>
  402 |         (
  403 |           await this.toDateInput
  404 |             .inputValue()
  405 |         ).trim(),
  406 |       {
  407 |         timeout: 20_000,
  408 |         message:
  409 |           'Waiting for To Date to be populated',
  410 |       }
  411 |     )
  412 |     .not.toBe('');
  413 | 
  414 |   const fromDate = (
  415 |     await this.fromDateInput.inputValue()
  416 |   ).trim();
  417 | 
  418 |   const toDate = (
  419 |     await this.toDateInput.inputValue()
  420 |   ).trim();
  421 | 
  422 |   return {
  423 |     fromDate,
  424 |     toDate,
  425 |   };
  426 | }
  427 | 
  428 | async removeSelectedLeaveStatus(
  429 |   status: string
  430 | ): Promise<void> {
  431 |   const statusElement = this.leaveStatusField.getByText(status, {
  432 |     exact: true,
  433 |   });
  434 |   await expect(statusElement).toBeVisible();
  435 | 
  436 |   const removeButton = statusElement.locator(
  437 |     "xpath=following::i[contains(@class,'bi-x')][1]",
  438 |   );
  439 |   await expect(removeButton).toBeVisible();
  440 |   await removeButton.click();
  441 | 
  442 |   await expect(
  443 |     this.leaveStatusField.getByText(status, { exact: true }),
> 444 |   ).toHaveCount(0);
      |     ^ Error: expect(locator).toHaveCount(expected) failed
  445 | }
  446 | 
  447 | async searchLeaveList(): Promise<void> {
  448 |   const leaveResponse = this.page.waitForResponse(
  449 |     (response) =>
  450 |       response.url().includes("/api/v2/leave/employees/leave-requests") &&
  451 |       response.request().method() === "GET" &&
  452 |       response.ok(),
  453 |     { timeout: 20_000 },
  454 |   );
  455 | 
  456 |   await this.searchButton.click();
  457 |   await leaveResponse;
  458 |   await expect(this.loadingSpinner).toBeHidden({ timeout: 20_000 });
  459 | }
  460 | 
  461 | 
  462 | }
  463 | 
```