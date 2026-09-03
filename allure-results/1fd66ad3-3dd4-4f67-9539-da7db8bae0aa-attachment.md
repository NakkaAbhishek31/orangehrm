# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_122 - Admin should remove an individually selected leave status @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:546:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-input-group').filter({ has: locator('label').getByText('Show Leave with Status', { exact: true }) }).getByText('Rejected', { exact: true }).locator('xpath=following::i[contains(@class,\'bi-x\')][1]')
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('Show Leave with Status', { exact: true }) }).getByText('Rejected', { exact: true }).locator('xpath=following::i[contains(@class,\'bi-x\')][1]')

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
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
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
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Leave" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: manda user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem:
        - link "Apply":
          - /url: "#"
      - listitem:
        - link "My Leave":
          - /url: "#"
      - listitem: Entitlements 
      - listitem: Reports 
      - listitem: Configure 
      - listitem:
        - link "Leave List":
          - /url: "#"
      - listitem:
        - link "Assign Leave":
          - /url: "#"
      - button ""
- heading "Leave List" [level=5]
- button ""
- separator
- text: From Date
- textbox "yyyy-dd-mm": 2026-01-01
- text:  To Date
- textbox "yyyy-dd-mm": 2026-31-12
- text:  Show Leave with Status* -- Select --  Pending Approval  Rejected  Leave Type -- Select --  Employee Name
- textbox "Type for hints..."
- text: Sub Unit -- Select -- 
- paragraph: Include Past Employees
- checkbox
- separator
- paragraph: "* Required"
- button "Reset"
- button "Search"
- text: No Records Found
- table:
  - rowgroup:
    - row " Date Employee Name Leave Type Leave Balance (Days) Number of Days Status Comments Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Date"
      - columnheader "Employee Name"
      - columnheader "Leave Type"
      - columnheader "Leave Balance (Days)"
      - columnheader "Number of Days"
      - columnheader "Status"
      - columnheader "Comments"
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
  343 | 
  344 | //   async removeSelectedLeaveStatus(
  345 | //   status: string
  346 | // ): Promise<void> {
  347 | //   const selectedStatus =
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
> 443 |   await expect(removeButton).toBeVisible();
      |                              ^ Error: expect(locator).toBeVisible() failed
  444 |   await removeButton.click();
  445 | 
  446 |   await expect(
  447 |     this.leaveStatusField.getByText(status, { exact: true }),
  448 |   ).toHaveCount(0);
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