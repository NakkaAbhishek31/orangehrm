# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_126 - Admin should filter Leave List by Taken status @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:734:7

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
- textbox "yyyy-dd-mm": 2026-01-01
- text:  To Date
- textbox "yyyy-dd-mm": 2026-31-12
- text:  Show Leave with Status* -- Select --  Taken  Leave Type -- Select --  Employee Name
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
  700 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  701 |     ).toBeVisible({
  702 |       timeout: 15_000,
  703 |     });
  704 | 
  705 |     const rowCount = await leavepage.leaveRows.count();
  706 | 
  707 |     if (rowCount > 0) {
  708 |       for (let index = 0; index < rowCount; index++) {
  709 |         const statusCell = leavepage.leaveRows
  710 |           .nth(index)
  711 |           .locator(".oxd-table-cell")
  712 |           .nth(6);
  713 | 
  714 |         await expect(statusCell).toContainText(data.leaveStatus);
  715 |       }
  716 |     } else {
  717 |       await expect(leavepage.noRecordsFound).toBeVisible();
  718 |     }
  719 | 
  720 |     // Reset filters.
  721 |     await leavepage.resetButton.click();
  722 | 
  723 |     await expect(leavepage.loadingSpinner).toBeHidden();
  724 | 
  725 |     // Reset should restore the original default
  726 |     // status selection, which may include Scheduled.
  727 |     await expect
  728 |       .poll(async () => (await leavepage.leaveStatusField.innerText()).trim(), {
  729 |         timeout: 15_000,
  730 |       })
  731 |       .toContain("-- Select --");
  732 |   });
  733 | 
  734 |   test("TC_LEAVE_126 - Admin should filter Leave List by Taken status @positive @filter @regression", async ({
  735 |     navigationPage,
  736 |     leavepage,
  737 |   }) => {
  738 |     const data = leaveData.TC_LEAVE_126;
  739 | 
  740 |     await navigationPage.gotoLeave();
  741 | 
  742 |     // Capture the original default status state.
  743 |     const defaultStatusText = (
  744 |       await leavepage.leaveStatusField.innerText()
  745 |     ).trim();
  746 | 
  747 |     const takenStatus = leavepage.leaveStatusField.getByText(data.leaveStatus, {
  748 |       exact: true,
  749 |     });
  750 | 
  751 |     const alreadySelected = (await takenStatus.count()) > 0;
  752 | 
  753 |     // Select Taken only when it is not
  754 |     // already selected by default.
  755 |     if (!alreadySelected) {
  756 |       await leavepage.selectLeaveStatus(data.leaveStatus);
  757 |     }
  758 | 
  759 |     await expect(takenStatus).toBeVisible();
  760 | 
  761 |     // Search using Taken status.
  762 |     await leavepage.searchLeaveList();
  763 | 
  764 |     await expect(leavepage.loadingSpinner).toBeHidden();
  765 | 
  766 |     // Verify Taken remains selected.
  767 |     await expect(takenStatus).toBeVisible();
  768 | 
  769 |     // Verify records or No Records Found.
  770 |     await expect(
  771 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
> 772 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  773 |       timeout: 15_000,
  774 |     });
  775 | 
  776 |     const rowCount = await leavepage.leaveRows.count();
  777 | 
  778 |     if (rowCount > 0) {
  779 |       for (let index = 0; index < rowCount; index++) {
  780 |         const statusCell = leavepage.leaveRows
  781 |           .nth(index)
  782 |           .locator(".oxd-table-cell")
  783 |           .nth(6);
  784 | 
  785 |         await expect(statusCell).toContainText(data.leaveStatus);
  786 |       }
  787 |     } else {
  788 |       await expect(leavepage.noRecordsFound).toBeVisible();
  789 |     }
  790 | 
  791 |     // Reset filters.
  792 |     await leavepage.resetButton.click();
  793 | 
  794 |     await expect(leavepage.loadingSpinner).toBeHidden();
  795 | 
  796 |     // Verify the default status state is restored.
  797 |     await expect
  798 |       .poll(async () => (await leavepage.leaveStatusField.innerText()).trim(), {
  799 |         timeout: 15_000,
  800 |       })
  801 |       .toContain("-- Select --");
  802 |   });
  803 | 
  804 |   test("TC_LEAVE_127 - Admin should filter Leave List by Cancelled status @positive @filter @regression", async ({
  805 |     navigationPage,
  806 |     leavepage,
  807 |   }) => {
  808 |     const data = leaveData.TC_LEAVE_127;
  809 | 
  810 |     await navigationPage.gotoLeave();
  811 | 
  812 |     const defaultDates = await leavepage.waitForDefaultDateRange();
  813 | 
  814 |     const defaultStatusText = (
  815 |       await leavepage.leaveStatusField.innerText()
  816 |     ).trim();
  817 | 
  818 |     const cancelledStatus = leavepage.leaveStatusField.getByText(
  819 |       data.leaveStatus,
  820 |       { exact: true },
  821 |     );
  822 | 
  823 |     if ((await cancelledStatus.count()) === 0) {
  824 |       await leavepage.selectLeaveStatus(data.leaveStatus);
  825 |     }
  826 | 
  827 |     await expect(cancelledStatus).toBeVisible();
  828 | 
  829 |     await leavepage.searchLeaveList();
  830 | 
  831 |     await expect(leavepage.loadingSpinner).toBeHidden();
  832 | 
  833 |     await expect(leavepage.fromDateInput).toHaveValue(defaultDates.fromDate);
  834 | 
  835 |     await expect(leavepage.toDateInput).toHaveValue(defaultDates.toDate);
  836 | 
  837 |     await expect(cancelledStatus).toBeVisible();
  838 | 
  839 |     await expect(
  840 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  841 |     ).toBeVisible({
  842 |       timeout: 15_000,
  843 |     });
  844 | 
  845 |     const rowCount = await leavepage.leaveRows.count();
  846 | 
  847 |     if (rowCount > 0) {
  848 |       for (let index = 0; index < rowCount; index++) {
  849 |         const statusCell = leavepage.leaveRows
  850 |           .nth(index)
  851 |           .locator(".oxd-table-cell")
  852 |           .nth(6);
  853 | 
  854 |         await expect(statusCell).toContainText(data.leaveStatus);
  855 |       }
  856 |     } else {
  857 |       await expect(leavepage.noRecordsFound).toBeVisible();
  858 |     }
  859 | 
  860 |     await leavepage.resetButton.click();
  861 | 
  862 |     await leavepage.waitForDefaultDateRange();
  863 | 
  864 |     await expect
  865 |       .poll(async () => (await leavepage.leaveStatusField.innerText()).trim())
  866 |       .toContain("-- Select --");
  867 |   });
  868 | 
  869 |   test("TC_LEAVE_128 - Admin should filter Leave List using multiple statuses @positive @filter @regression", async ({
  870 |     navigationPage,
  871 |     leavepage,
  872 |   }) => {
```