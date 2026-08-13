# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_125 - Admin should filter Leave List by Scheduled status @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:1004:6

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-input-group').filter({ has: locator('label').getByText('Show Leave with Status', { exact: true }) }).locator('.oxd-select-text')
Expected substring: "Scheduled"
Received string:    "-- Select --"
Timeout: 20000ms

Call log:
  - Expect "toContainText" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('Show Leave with Status', { exact: true }) }).locator('.oxd-select-text')
    43 × locator resolved to <div data-v-67d2aedf="" data-v-53b4a482="" class="oxd-select-text oxd-select-text--active">…</div>
       - unexpected value "-- Select --"

```

```yaml
- text: "-- Select -- "
```

# Test source

```ts
  913  |   }
  914  | );
  915  | 
  916  | 
  917  | test('TC_LEAVE_124 - Admin should navigate through Leave List pages @pagination @regression',
  918  |   async ({
  919  |     navigationPage,
  920  |     leavepage,
  921  |   }) => {
  922  |     const data =
  923  |       leaveData.TC_LEAVE_124;
  924  | 
  925  |     const fromDate = dateFromOffset(
  926  |       data.fromDaysOffset
  927  |     );
  928  | 
  929  |     const toDate = dateFromOffset(
  930  |       data.toDaysOffset
  931  |     );
  932  | 
  933  |     await navigationPage.gotoLeave();
  934  | 
  935  |     await leavepage.fromDateInput.fill(
  936  |       fromDate
  937  |     );
  938  | 
  939  |     await leavepage.toDateInput.fill(
  940  |       toDate
  941  |     );
  942  | 
  943  |     await leavepage.searchButton.click();
  944  | 
  945  |     await expect(
  946  |       leavepage.loadingSpinner
  947  |     ).toBeHidden();
  948  | 
  949  |     const pageOneRecords =
  950  |       await leavepage
  951  |         .getVisibleLeaveRecords();
  952  | 
  953  |     test.skip(
  954  |       pageOneRecords.length === 0,
  955  |       'No leave records are currently available'
  956  |     );
  957  | 
  958  |     const nextButtonCount =
  959  |       await leavepage.nextPageButton.count();
  960  | 
  961  |     test.skip(
  962  |       nextButtonCount === 0,
  963  |       'Leave List currently contains only one page'
  964  |     );
  965  | 
  966  |     await leavepage.nextPageButton.click();
  967  | 
  968  |     await expect
  969  |       .poll(
  970  |         async () =>
  971  |           leavepage
  972  |             .getVisibleLeaveRecords(),
  973  |         {
  974  |           timeout: 15_000,
  975  |         }
  976  |       )
  977  |       .not.toEqual(pageOneRecords);
  978  | 
  979  |     const pageTwoRecords =
  980  |       await leavepage
  981  |         .getVisibleLeaveRecords();
  982  | 
  983  |     expect(
  984  |       pageTwoRecords.length
  985  |     ).toBeGreaterThan(0);
  986  | 
  987  |     await leavepage
  988  |       .previousPageButton
  989  |       .click();
  990  | 
  991  |     await expect
  992  |       .poll(
  993  |         async () =>
  994  |           leavepage
  995  |             .getVisibleLeaveRecords(),
  996  |         {
  997  |           timeout: 15_000,
  998  |         }
  999  |       )
  1000 |       .toEqual(pageOneRecords);
  1001 |   }
  1002 | );
  1003 | 
  1004 | test.only('TC_LEAVE_125 - Admin should filter Leave List by Scheduled status @positive @filter @regression',
  1005 |   async ({ navigationPage, leavepage }) => {
  1006 |   
  1007 |     // Read Scheduled status from JSON.
  1008 |      const data=leaveData.TC_LEAVE_125;
  1009 |     // Navigate to Leave → Leave List.
  1010 |      await navigationPage.gotoLeave();
  1011 |     // Select Scheduled from Leave Status.
  1012 |        await leavepage.selectLeaveStatus(data.leaveStatus);
> 1013 | +      await expect(leavepage.leaveStatusDropdown).toContainText(data.leaveStatus);
       |                                                    ^ Error: expect(locator).toContainText(expected) failed
  1014 |     // Click Search.
  1015 |       await leavepage.searchButton.click();
  1016 |     // Wait for the loading spinner to disappear.
  1017 |        await expect(leavepage.loadingSpinner).toBeHidden();
  1018 |     // Verify Scheduled remains selected.
  1019 |  await expect(
  1020 |       leavepage.leaveStatusDropdown
  1021 |     ).toContainText(data.leaveStatus);         
  1022 |     // If records appear, verify every displayed row
  1023 |        await expect(leavepage.leaveRows.first().or(leavepage.noRecordsFound)).toBeVisible({timeout:15_000});
  1024 |   const rowCount =
  1025 |       await leavepage.leaveRows.count();
  1026 | 
  1027 |     if (rowCount > 0) {
  1028 |       for (
  1029 |         let index = 0;
  1030 |         index < rowCount;
  1031 |         index++
  1032 |       ) {
  1033 |         const statusCell =
  1034 |           leavepage.leaveRows
  1035 |             .nth(index)
  1036 |             .locator('.oxd-table-cell')
  1037 |             .nth(5);
  1038 | 
  1039 |         await expect(
  1040 |           statusCell
  1041 |         ).toContainText(
  1042 |           data.leaveStatus
  1043 |         );
  1044 |       }
  1045 |     } else {
  1046 |       await expect(
  1047 |         leavepage.noRecordsFound
  1048 |       ).toBeVisible();
  1049 |     }
  1050 | 
  1051 |     // Reset the filters.
  1052 |         await leavepage.resetButton.click();
  1053 | 
  1054 |     // Verify Leave Status returns to its default value.
  1055 |         await expect(leavepage.leaveStatusDropdown).toContainText(data.defaultStatus);
  1056 |   }
  1057 | );
  1058 | 
  1059 | });
```