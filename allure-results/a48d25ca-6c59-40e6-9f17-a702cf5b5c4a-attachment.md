# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_127 - Admin should filter Leave List by Cancelled status @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:798:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-table-body .oxd-table-card').first().locator('.oxd-table-cell').nth(6)
Expected substring: "Cancelled"
Received string:    "Pending Approval (1.00)"
Timeout: 20000ms

Call log:
  - Expect "toContainText" with timeout 20000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').first().locator('.oxd-table-cell').nth(6)
    43 × locator resolved to <div role="cell" class="oxd-table-cell oxd-padding-cell">…</div>
       - unexpected value "Pending Approval (1.00)"

```

```yaml
- cell "Pending Approval (1.00)"
```

# Test source

```ts
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
  782 |       await expect(leavepage.noRecordsFound).toBeVisible();
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
> 848 |         await expect(statusCell).toContainText(data.leaveStatus);
      |                                  ^ Error: expect(locator).toContainText(expected) failed
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
  883 |       await leavepage.selectLeaveStatus(data.firstStatus);
  884 |     }
  885 | 
  886 |     if ((await secondStatus.count()) === 0) {
  887 |       await leavepage.selectLeaveStatus(data.secondStatus);
  888 |     }
  889 | 
  890 |     await expect(firstStatus).toBeVisible();
  891 |     await expect(secondStatus).toBeVisible();
  892 | 
  893 |     await leavepage.searchButton.click();
  894 | 
  895 |     await expect(leavepage.loadingSpinner).toBeHidden();
  896 | 
  897 |     await expect(firstStatus).toBeVisible();
  898 |     await expect(secondStatus).toBeVisible();
  899 | 
  900 |     await expect(
  901 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  902 |     ).toBeVisible({
  903 |       timeout: 15_000,
  904 |     });
  905 | 
  906 |     const rowCount = await leavepage.leaveRows.count();
  907 | 
  908 |     if (rowCount > 0) {
  909 |       for (let index = 0; index < rowCount; index++) {
  910 |         const statusText = (
  911 |           await leavepage.leaveRows
  912 |             .nth(index)
  913 |             .locator(".oxd-table-cell")
  914 |             .nth(6)
  915 |             .innerText()
  916 |         ).trim();
  917 | 
  918 |         expect([data.firstStatus, data.secondStatus]).toContain(statusText);
  919 |       }
  920 |     } else {
  921 |       await expect(leavepage.noRecordsFound).toBeVisible();
  922 |     }
  923 | 
  924 |     await leavepage.resetButton.click();
  925 |   });
  926 | 
  927 |   test("TC_LEAVE_129 - Reset should restore default Leave Status selections @positive @reset @filter @regression", async ({
  928 |     navigationPage,
  929 |     leavepage,
  930 |   }) => {
  931 |     const data = leaveData.TC_LEAVE_129;
  932 | 
  933 |     await navigationPage.gotoLeave();
  934 | 
  935 |     const defaultDates = await leavepage.waitForDefaultDateRange();
  936 | 
  937 |     const defaultStatusText = (
  938 |       await leavepage.leaveStatusField.innerText()
  939 |     ).trim();
  940 | 
  941 |     const selectedStatus = leavepage.leaveStatusField.getByText(
  942 |       data.leaveStatus,
  943 |       { exact: true },
  944 |     );
  945 | 
  946 |     if ((await selectedStatus.count()) === 0) {
  947 |       await leavepage.selectLeaveStatus(data.leaveStatus);
  948 |     }
```