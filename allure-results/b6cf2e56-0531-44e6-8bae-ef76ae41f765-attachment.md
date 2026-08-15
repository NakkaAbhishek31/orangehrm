# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_127 - Admin should filter Leave List by Cancelled status @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:814:7

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-table-body .oxd-table-card').first().locator('.oxd-table-cell').nth(5)
Expected substring: "Cancelled"
Received string:    "2.00"
Timeout: 20000ms

Call log:
  - Expect "toContainText" with timeout 20000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').first().locator('.oxd-table-cell').nth(5)
    42 × locator resolved to <div role="cell" class="oxd-table-cell oxd-padding-cell">…</div>
       - unexpected value "2.00"

```

```yaml
- cell "2.00"
```

# Test source

```ts
  764 |     // already selected by default.
  765 |     if (!alreadySelected) {
  766 |       await leavepage.selectLeaveStatus(data.leaveStatus);
  767 |     }
  768 | 
  769 |     await expect(takenStatus).toBeVisible();
  770 | 
  771 |     // Search using Taken status.
  772 |     await leavepage.searchButton.click();
  773 | 
  774 |     await expect(leavepage.loadingSpinner).toBeHidden();
  775 | 
  776 |     // Verify Taken remains selected.
  777 |     await expect(takenStatus).toBeVisible();
  778 | 
  779 |     // Verify records or No Records Found.
  780 |     await expect(
  781 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  782 |     ).toBeVisible({
  783 |       timeout: 15_000,
  784 |     });
  785 | 
  786 |     const rowCount = await leavepage.leaveRows.count();
  787 | 
  788 |     if (rowCount > 0) {
  789 |       for (let index = 0; index < rowCount; index++) {
  790 |         const statusCell = leavepage.leaveRows
  791 |           .nth(index)
  792 |           .locator(".oxd-table-cell")
  793 |           .nth(5);
  794 | 
  795 |         await expect(statusCell).toContainText(data.leaveStatus);
  796 |       }
  797 |     } else {
  798 |       await expect(leavepage.noRecordsFound).toBeVisible();
  799 |     }
  800 | 
  801 |     // Reset filters.
  802 |     await leavepage.resetButton.click();
  803 | 
  804 |     await expect(leavepage.loadingSpinner).toBeHidden();
  805 | 
  806 |     // Verify the default status state is restored.
  807 |     await expect
  808 |       .poll(async () => (await leavepage.leaveStatusField.innerText()).trim(), {
  809 |         timeout: 15_000,
  810 |       })
  811 |       .toBe(defaultStatusText);
  812 |   });
  813 | 
  814 |   test("TC_LEAVE_127 - Admin should filter Leave List by Cancelled status @positive @filter @regression", async ({
  815 |     navigationPage,
  816 |     leavepage,
  817 |   }) => {
  818 |     const data = leaveData.TC_LEAVE_127;
  819 | 
  820 |     await navigationPage.gotoLeave();
  821 | 
  822 |     const defaultDates = await leavepage.waitForDefaultDateRange();
  823 | 
  824 |     const defaultStatusText = (
  825 |       await leavepage.leaveStatusField.innerText()
  826 |     ).trim();
  827 | 
  828 |     const cancelledStatus = leavepage.leaveStatusField.getByText(
  829 |       data.leaveStatus,
  830 |       { exact: true },
  831 |     );
  832 | 
  833 |     if ((await cancelledStatus.count()) === 0) {
  834 |       await leavepage.selectLeaveStatus(data.leaveStatus);
  835 |     }
  836 | 
  837 |     await expect(cancelledStatus).toBeVisible();
  838 | 
  839 |     await leavepage.searchButton.click();
  840 | 
  841 |     await expect(leavepage.loadingSpinner).toBeHidden();
  842 | 
  843 |     await expect(leavepage.fromDateInput).toHaveValue(defaultDates.fromDate);
  844 | 
  845 |     await expect(leavepage.toDateInput).toHaveValue(defaultDates.toDate);
  846 | 
  847 |     await expect(cancelledStatus).toBeVisible();
  848 | 
  849 |     await expect(
  850 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  851 |     ).toBeVisible({
  852 |       timeout: 15_000,
  853 |     });
  854 | 
  855 |     const rowCount = await leavepage.leaveRows.count();
  856 | 
  857 |     if (rowCount > 0) {
  858 |       for (let index = 0; index < rowCount; index++) {
  859 |         const statusCell = leavepage.leaveRows
  860 |           .nth(index)
  861 |           .locator(".oxd-table-cell")
  862 |           .nth(5);
  863 | 
> 864 |         await expect(statusCell).toContainText(data.leaveStatus);
      |                                  ^ Error: expect(locator).toContainText(expected) failed
  865 |       }
  866 |     } else {
  867 |       await expect(leavepage.noRecordsFound).toBeVisible();
  868 |     }
  869 | 
  870 |     await leavepage.resetButton.click();
  871 | 
  872 |     await leavepage.waitForDefaultDateRange();
  873 | 
  874 |     await expect
  875 |       .poll(async () => (await leavepage.leaveStatusField.innerText()).trim())
  876 |       .toBe(defaultStatusText);
  877 |   });
  878 | 
  879 |   test("TC_LEAVE_128 - Admin should filter Leave List using multiple statuses @positive @filter @regression", async ({
  880 |     navigationPage,
  881 |     leavepage,
  882 |   }) => {
  883 |     const data = leaveData.TC_LEAVE_128;
  884 | 
  885 |     await navigationPage.gotoLeave();
  886 | 
  887 |     await leavepage.waitForDefaultDateRange();
  888 | 
  889 |     const firstStatus = leavepage.leaveStatusField.getByText(data.firstStatus, {
  890 |       exact: true,
  891 |     });
  892 | 
  893 |     const secondStatus = leavepage.leaveStatusField.getByText(
  894 |       data.secondStatus,
  895 |       { exact: true },
  896 |     );
  897 | 
  898 |     if ((await firstStatus.count()) === 0) {
  899 |       await leavepage.selectLeaveStatus(data.firstStatus);
  900 |     }
  901 | 
  902 |     if ((await secondStatus.count()) === 0) {
  903 |       await leavepage.selectLeaveStatus(data.secondStatus);
  904 |     }
  905 | 
  906 |     await expect(firstStatus).toBeVisible();
  907 |     await expect(secondStatus).toBeVisible();
  908 | 
  909 |     await leavepage.searchButton.click();
  910 | 
  911 |     await expect(leavepage.loadingSpinner).toBeHidden();
  912 | 
  913 |     await expect(firstStatus).toBeVisible();
  914 |     await expect(secondStatus).toBeVisible();
  915 | 
  916 |     await expect(
  917 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  918 |     ).toBeVisible({
  919 |       timeout: 15_000,
  920 |     });
  921 | 
  922 |     const rowCount = await leavepage.leaveRows.count();
  923 | 
  924 |     if (rowCount > 0) {
  925 |       for (let index = 0; index < rowCount; index++) {
  926 |         const statusText = (
  927 |           await leavepage.leaveRows
  928 |             .nth(index)
  929 |             .locator(".oxd-table-cell")
  930 |             .nth(5)
  931 |             .innerText()
  932 |         ).trim();
  933 | 
  934 |         expect([data.firstStatus, data.secondStatus]).toContain(statusText);
  935 |       }
  936 |     } else {
  937 |       await expect(leavepage.noRecordsFound).toBeVisible();
  938 |     }
  939 | 
  940 |     await leavepage.resetButton.click();
  941 |   });
  942 | 
  943 |   test("TC_LEAVE_129 - Reset should restore default Leave Status selections @positive @reset @filter @regression", async ({
  944 |     navigationPage,
  945 |     leavepage,
  946 |   }) => {
  947 |     const data = leaveData.TC_LEAVE_129;
  948 | 
  949 |     await navigationPage.gotoLeave();
  950 | 
  951 |     const defaultDates = await leavepage.waitForDefaultDateRange();
  952 | 
  953 |     const defaultStatusText = (
  954 |       await leavepage.leaveStatusField.innerText()
  955 |     ).trim();
  956 | 
  957 |     const selectedStatus = leavepage.leaveStatusField.getByText(
  958 |       data.leaveStatus,
  959 |       { exact: true },
  960 |     );
  961 | 
  962 |     if ((await selectedStatus.count()) === 0) {
  963 |       await leavepage.selectLeaveStatus(data.leaveStatus);
  964 |     }
```