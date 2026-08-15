# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_126 - Admin should filter Leave List by Taken status @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:728:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.orangehrm-paper-container').getByText('No Records Found', { exact: true })
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.orangehrm-paper-container').getByText('No Records Found', { exact: true })

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
- text:  Show Leave with Status* -- Select --  Pending Approval  Taken  Leave Type -- Select --  Employee Name
- textbox "Type for hints..."
- text: Sub Unit -- Select -- 
- paragraph: Include Past Employees
- checkbox
- separator
- paragraph: "* Required"
- button "Reset"
- button "Search"
- text: (2) Records Found
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
  - rowgroup:
    - row " 2026-11-12 Rajaa P CAN - Vacation 99.00 1.00 Pending Approval (1.00) Approve Reject ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-11-12"
      - cell "Rajaa P"
      - cell "CAN - Vacation"
      - cell "99.00"
      - cell "1.00"
      - cell "Pending Approval (1.00)"
      - cell
      - cell "Approve Reject ":
        - button "Approve"
        - button "Reject"
        - listitem:
          - button ""
    - row " 2026-09-10 Rajaa P CAN - Personal 99.00 1.00 Pending Approval (1.00) Approve Reject ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-09-10"
      - cell "Rajaa P"
      - cell "CAN - Personal"
      - cell "99.00"
      - cell "1.00"
      - cell "Pending Approval (1.00)"
      - cell
      - cell "Approve Reject ":
        - button "Approve"
        - button "Reject"
        - listitem:
          - button ""
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  682 | 
  683 |     // Search using Scheduled status.
  684 |     await leavepage.searchButton.click();
  685 | 
  686 |     await expect(leavepage.loadingSpinner).toBeHidden();
  687 | 
  688 |     // Verify Scheduled remains selected.
  689 |     await expect(scheduledStatus).toBeVisible();
  690 | 
  691 |     // The shared demo can return records or
  692 |     // display No Records Found.
  693 |     await expect(
  694 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  695 |     ).toBeVisible({
  696 |       timeout: 15_000,
  697 |     });
  698 | 
  699 |     const rowCount = await leavepage.leaveRows.count();
  700 | 
  701 |     if (rowCount > 0) {
  702 |       for (let index = 0; index < rowCount; index++) {
  703 |         const statusCell = leavepage.leaveRows
  704 |           .nth(index)
  705 |           .locator(".oxd-table-cell")
  706 |           .nth(6);
  707 | 
  708 |         await expect(statusCell).toContainText(data.leaveStatus);
  709 |       }
  710 |     } else {
  711 |       await expect(leavepage.noRecordsFound).toBeVisible();
  712 |     }
  713 | 
  714 |     // Reset filters.
  715 |     await leavepage.resetButton.click();
  716 | 
  717 |     await expect(leavepage.loadingSpinner).toBeHidden();
  718 | 
  719 |     // Reset should restore the original default
  720 |     // status selection, which may include Scheduled.
  721 |     await expect
  722 |       .poll(async () => (await leavepage.leaveStatusField.innerText()).trim(), {
  723 |         timeout: 15_000,
  724 |       })
  725 |       .toContain("-- Select --");
  726 |   });
  727 | 
  728 |   test("TC_LEAVE_126 - Admin should filter Leave List by Taken status @positive @filter @regression", async ({
  729 |     navigationPage,
  730 |     leavepage,
  731 |   }) => {
  732 |     const data = leaveData.TC_LEAVE_126;
  733 | 
  734 |     await navigationPage.gotoLeave();
  735 | 
  736 |     // Capture the original default status state.
  737 |     const defaultStatusText = (
  738 |       await leavepage.leaveStatusField.innerText()
  739 |     ).trim();
  740 | 
  741 |     const takenStatus = leavepage.leaveStatusField.getByText(data.leaveStatus, {
  742 |       exact: true,
  743 |     });
  744 | 
  745 |     const alreadySelected = (await takenStatus.count()) > 0;
  746 | 
  747 |     // Select Taken only when it is not
  748 |     // already selected by default.
  749 |     if (!alreadySelected) {
  750 |       await leavepage.selectLeaveStatus(data.leaveStatus);
  751 |     }
  752 | 
  753 |     await expect(takenStatus).toBeVisible();
  754 | 
  755 |     // Search using Taken status.
  756 |     await leavepage.searchButton.click();
  757 | 
  758 |     await expect(leavepage.loadingSpinner).toBeHidden();
  759 | 
  760 |     // Verify Taken remains selected.
  761 |     await expect(takenStatus).toBeVisible();
  762 | 
  763 |     // Verify records or No Records Found.
  764 |     await expect(
  765 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  766 |     ).toBeVisible({
  767 |       timeout: 15_000,
  768 |     });
  769 | 
  770 |     const rowCount = await leavepage.leaveRows.count();
  771 | 
  772 |     if (rowCount > 0) {
  773 |       for (let index = 0; index < rowCount; index++) {
  774 |         const statusCell = leavepage.leaveRows
  775 |           .nth(index)
  776 |           .locator(".oxd-table-cell")
  777 |           .nth(6);
  778 | 
  779 |         await expect(statusCell).toContainText(data.leaveStatus);
  780 |       }
  781 |     } else {
> 782 |       await expect(leavepage.noRecordsFound).toBeVisible();
      |                                              ^ Error: expect(locator).toBeVisible() failed
  783 |     }
  784 | 
  785 |     // Reset filters.
  786 |     await leavepage.resetButton.click();
  787 | 
  788 |     await expect(leavepage.loadingSpinner).toBeHidden();
  789 | 
  790 |     // Verify the default status state is restored.
  791 |     await expect
  792 |       .poll(async () => (await leavepage.leaveStatusField.innerText()).trim(), {
  793 |         timeout: 15_000,
  794 |       })
  795 |       .toContain("-- Select --");
  796 |   });
  797 | 
  798 |   test("TC_LEAVE_127 - Admin should filter Leave List by Cancelled status @positive @filter @regression", async ({
  799 |     navigationPage,
  800 |     leavepage,
  801 |   }) => {
  802 |     const data = leaveData.TC_LEAVE_127;
  803 | 
  804 |     await navigationPage.gotoLeave();
  805 | 
  806 |     const defaultDates = await leavepage.waitForDefaultDateRange();
  807 | 
  808 |     const defaultStatusText = (
  809 |       await leavepage.leaveStatusField.innerText()
  810 |     ).trim();
  811 | 
  812 |     const cancelledStatus = leavepage.leaveStatusField.getByText(
  813 |       data.leaveStatus,
  814 |       { exact: true },
  815 |     );
  816 | 
  817 |     if ((await cancelledStatus.count()) === 0) {
  818 |       await leavepage.selectLeaveStatus(data.leaveStatus);
  819 |     }
  820 | 
  821 |     await expect(cancelledStatus).toBeVisible();
  822 | 
  823 |     await leavepage.searchButton.click();
  824 | 
  825 |     await expect(leavepage.loadingSpinner).toBeHidden();
  826 | 
  827 |     await expect(leavepage.fromDateInput).toHaveValue(defaultDates.fromDate);
  828 | 
  829 |     await expect(leavepage.toDateInput).toHaveValue(defaultDates.toDate);
  830 | 
  831 |     await expect(cancelledStatus).toBeVisible();
  832 | 
  833 |     await expect(
  834 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  835 |     ).toBeVisible({
  836 |       timeout: 15_000,
  837 |     });
  838 | 
  839 |     const rowCount = await leavepage.leaveRows.count();
  840 | 
  841 |     if (rowCount > 0) {
  842 |       for (let index = 0; index < rowCount; index++) {
  843 |         const statusCell = leavepage.leaveRows
  844 |           .nth(index)
  845 |           .locator(".oxd-table-cell")
  846 |           .nth(6);
  847 | 
  848 |         await expect(statusCell).toContainText(data.leaveStatus);
  849 |       }
  850 |     } else {
  851 |       await expect(leavepage.noRecordsFound).toBeVisible();
  852 |     }
  853 | 
  854 |     await leavepage.resetButton.click();
  855 | 
  856 |     await leavepage.waitForDefaultDateRange();
  857 | 
  858 |     await expect
  859 |       .poll(async () => (await leavepage.leaveStatusField.innerText()).trim())
  860 |       .toContain("-- Select --");
  861 |   });
  862 | 
  863 |   test("TC_LEAVE_128 - Admin should filter Leave List using multiple statuses @positive @filter @regression", async ({
  864 |     navigationPage,
  865 |     leavepage,
  866 |   }) => {
  867 |     const data = leaveData.TC_LEAVE_128;
  868 | 
  869 |     await navigationPage.gotoLeave();
  870 | 
  871 |     await leavepage.waitForDefaultDateRange();
  872 | 
  873 |     const firstStatus = leavepage.leaveStatusField.getByText(data.firstStatus, {
  874 |       exact: true,
  875 |     });
  876 | 
  877 |     const secondStatus = leavepage.leaveStatusField.getByText(
  878 |       data.secondStatus,
  879 |       { exact: true },
  880 |     );
  881 | 
  882 |     if ((await firstStatus.count()) === 0) {
```