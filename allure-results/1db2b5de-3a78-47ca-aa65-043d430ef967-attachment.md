# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_123 - Admin should preserve Leave List filters after searching @positive @persistence @regression
- Location: tests\Leave\leave.spec.ts:565:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-table-body .oxd-table-card').first().or(locator('.orangehrm-container span.oxd-text--span').filter({ hasText: /^No Records Found$/ }).filter({ visible: true }).first())
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').first().or(locator('.orangehrm-container span.oxd-text--span').filter({ hasText: /^No Records Found$/ }).filter({ visible: true }).first())

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
- textbox "yyyy-dd-mm": 2026-29-05
- text:  To Date
- textbox "yyyy-dd-mm": 2026-27-08
- text:  Show Leave with Status* -- Select --  Rejected  Leave Type -- Select --  Employee Name
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
  499 |   test("TC_LEAVE_121 - Admin should filter Leave List using employee name and leave status @positive @filter @autocomplete @regression", async ({
  500 |     navigationPage,
  501 |     leavepage,
  502 |   }) => {
  503 |     const data = leaveData.TC_LEAVE_121;
  504 | 
  505 |     await navigationPage.gotoLeave();
  506 | 
  507 |     const employeeName = await leavepage.selectFirstAvailableEmployee(
  508 |       data.partialEmployeeName,
  509 |     );
  510 | 
  511 |     await leavepage.selectLeaveStatus(data.leaveStatus);
  512 | 
  513 |     await leavepage.searchLeaveList();
  514 | 
  515 |     await expect(leavepage.loadingSpinner).toBeHidden();
  516 | 
  517 |     await expect(leavepage.employeeNameInput).toHaveValue(
  518 |       new RegExp(employeeName.trim().split(/\s+/).join("\\s+")),
  519 |     );
  520 | 
  521 |     await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);
  522 | 
  523 |     await expect(
  524 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  525 |     ).toBeVisible({
  526 |       timeout: 15_000,
  527 |     });
  528 | 
  529 |     const rowCount = await leavepage.leaveRows.count();
  530 | 
  531 |     if (rowCount > 0) {
  532 |       for (let index = 0; index < rowCount; index++) {
  533 |         const cells = leavepage.leaveRows.nth(index).locator(".oxd-table-cell");
  534 | 
  535 |         await expect(cells.nth(1)).toContainText(employeeName);
  536 | 
  537 |         await expect(cells.nth(6)).toContainText(data.leaveStatus);
  538 |       }
  539 |     }
  540 | 
  541 |     await leavepage.resetButton.click();
  542 | 
  543 |     await expect(leavepage.employeeNameInput).toHaveValue("");
  544 |   });
  545 | 
  546 |   test("TC_LEAVE_122 - Admin should remove an individually selected leave status @positive @filter @regression", async ({
  547 |     navigationPage,
  548 |     leavepage,
  549 |   }) => {
  550 |     const data = leaveData.TC_LEAVE_122;
  551 | 
  552 |     await navigationPage.gotoLeave();
  553 | 
  554 |     await leavepage.selectLeaveStatus(data.leaveStatus);
  555 | 
  556 |     await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);
  557 | 
  558 |     await leavepage.removeSelectedLeaveStatus(data.leaveStatus);
  559 | 
  560 |     await expect(leavepage.selectedLeaveStatuses).not.toContainText(
  561 |       data.leaveStatus,
  562 |     );
  563 |   });
  564 | 
  565 |   test("TC_LEAVE_123 - Admin should preserve Leave List filters after searching @positive @persistence @regression", async ({
  566 |     navigationPage,
  567 |     leavepage,
  568 |   }) => {
  569 |     const data = leaveData.TC_LEAVE_123;
  570 | 
  571 |     const fromDate = dateFromOffset(data.fromDaysOffset);
  572 | 
  573 |     const toDate = dateFromOffset(data.toDaysOffset);
  574 | 
  575 |     await navigationPage.gotoLeave();
  576 | 
  577 |     await leavepage.fromDateInput.fill(fromDate);
  578 | 
  579 |     await leavepage.toDateInput.fill(toDate);
  580 | 
  581 |     await leavepage.selectLeaveStatus(data.leaveStatus);
  582 | 
  583 |     const leaveType = await leavepage.selectFirstAvailableLeaveType();
  584 | 
  585 |     await leavepage.searchLeaveList();
  586 | 
  587 |     await expect(leavepage.loadingSpinner).toBeHidden();
  588 | 
  589 |     await expect(leavepage.fromDateInput).toHaveValue(fromDate);
  590 | 
  591 |     await expect(leavepage.toDateInput).toHaveValue(toDate);
  592 | 
  593 |     await expect(leavepage.selectedLeaveStatuses).toContainText(data.leaveStatus);
  594 | 
  595 |     await expect(leavepage.leaveTypeDropdown).toContainText(leaveType);
  596 | 
  597 |     await expect(
  598 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
> 599 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  600 |       timeout: 15_000,
  601 |     });
  602 | 
  603 |     await leavepage.resetButton.click();
  604 |   });
  605 | 
  606 |   test("TC_LEAVE_124 - Admin should navigate through Leave List pages @pagination @regression", async ({
  607 |     navigationPage,
  608 |     leavepage,
  609 |   }) => {
  610 |     const data = leaveData.TC_LEAVE_124;
  611 | 
  612 |     const fromDate = dateFromOffset(data.fromDaysOffset);
  613 | 
  614 |     const toDate = dateFromOffset(data.toDaysOffset);
  615 | 
  616 |     await navigationPage.gotoLeave();
  617 | 
  618 |     await leavepage.fromDateInput.fill(fromDate);
  619 | 
  620 |     await leavepage.toDateInput.fill(toDate);
  621 | 
  622 |     await leavepage.searchLeaveList();
  623 | 
  624 |     await expect(leavepage.loadingSpinner).toBeHidden();
  625 | 
  626 |     const pageOneRecords = await leavepage.getVisibleLeaveRecords();
  627 | 
  628 |     test.skip(
  629 |       pageOneRecords.length === 0,
  630 |       "No leave records are currently available",
  631 |     );
  632 | 
  633 |     const nextButtonCount = await leavepage.nextPageButton.count();
  634 | 
  635 |     test.skip(
  636 |       nextButtonCount === 0,
  637 |       "Leave List currently contains only one page",
  638 |     );
  639 | 
  640 |     await leavepage.nextPageButton.click();
  641 | 
  642 |     await expect
  643 |       .poll(async () => leavepage.getVisibleLeaveRecords(), {
  644 |         timeout: 15_000,
  645 |       })
  646 |       .not.toEqual(pageOneRecords);
  647 | 
  648 |     const pageTwoRecords = await leavepage.getVisibleLeaveRecords();
  649 | 
  650 |     expect(pageTwoRecords.length).toBeGreaterThan(0);
  651 | 
  652 |     await leavepage.previousPageButton.click();
  653 | 
  654 |     await expect
  655 |       .poll(async () => leavepage.getVisibleLeaveRecords(), {
  656 |         timeout: 15_000,
  657 |       })
  658 |       .toEqual(pageOneRecords);
  659 |   });
  660 | 
  661 |   test("TC_LEAVE_125 - Admin should filter Leave List by Scheduled status @positive @filter @regression", async ({
  662 |     navigationPage,
  663 |     leavepage,
  664 |   }) => {
  665 |     const data = leaveData.TC_LEAVE_125;
  666 | 
  667 |     await navigationPage.gotoLeave();
  668 | 
  669 |     // Store the complete default status state.
  670 |     const defaultStatusText = (
  671 |       await leavepage.leaveStatusField.innerText()
  672 |     ).trim();
  673 | 
  674 |     const scheduledStatus = leavepage.leaveStatusField.getByText(
  675 |       data.leaveStatus,
  676 |       { exact: true },
  677 |     );
  678 | 
  679 |     const alreadySelected = (await scheduledStatus.count()) > 0;
  680 | 
  681 |     // Select Scheduled only when it is not
  682 |     // already selected by default.
  683 |     if (!alreadySelected) {
  684 |       await leavepage.selectLeaveStatus(data.leaveStatus);
  685 |     }
  686 | 
  687 |     await expect(scheduledStatus).toBeVisible();
  688 | 
  689 |     // Search using Scheduled status.
  690 |     await leavepage.searchLeaveList();
  691 | 
  692 |     await expect(leavepage.loadingSpinner).toBeHidden();
  693 | 
  694 |     // Verify Scheduled remains selected.
  695 |     await expect(scheduledStatus).toBeVisible();
  696 | 
  697 |     // The shared demo can return records or
  698 |     // display No Records Found.
  699 |     await expect(
```