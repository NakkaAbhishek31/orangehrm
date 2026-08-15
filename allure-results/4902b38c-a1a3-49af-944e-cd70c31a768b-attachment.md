# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_128 - Admin should filter Leave List using multiple statuses @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:863:7

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
- text:  Show Leave with Status* -- Select --  Pending Approval  Rejected  Cancelled  Leave Type -- Select --  Employee Name
- textbox "Type for hints..."
- text: Sub Unit -- Select -- 
- paragraph: Include Past Employees
- checkbox
- separator
- paragraph: "* Required"
- button "Reset"
- button "Search"
- text: (3) Records Found
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
    - row " 2026-11-03 Rajaa P CAN - Personal 99.00 1.00 Cancelled (1.00) ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-11-03"
      - cell "Rajaa P"
      - cell "CAN - Personal"
      - cell "99.00"
      - cell "1.00"
      - cell "Cancelled (1.00)"
      - cell
      - cell "":
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
  821  |     await expect(cancelledStatus).toBeVisible();
  822  | 
  823  |     await leavepage.searchButton.click();
  824  | 
  825  |     await expect(leavepage.loadingSpinner).toBeHidden();
  826  | 
  827  |     await expect(leavepage.fromDateInput).toHaveValue(defaultDates.fromDate);
  828  | 
  829  |     await expect(leavepage.toDateInput).toHaveValue(defaultDates.toDate);
  830  | 
  831  |     await expect(cancelledStatus).toBeVisible();
  832  | 
  833  |     await expect(
  834  |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  835  |     ).toBeVisible({
  836  |       timeout: 15_000,
  837  |     });
  838  | 
  839  |     const rowCount = await leavepage.leaveRows.count();
  840  | 
  841  |     if (rowCount > 0) {
  842  |       for (let index = 0; index < rowCount; index++) {
  843  |         const statusCell = leavepage.leaveRows
  844  |           .nth(index)
  845  |           .locator(".oxd-table-cell")
  846  |           .nth(6);
  847  | 
  848  |         await expect(statusCell).toContainText(data.leaveStatus);
  849  |       }
  850  |     } else {
  851  |       await expect(leavepage.noRecordsFound).toBeVisible();
  852  |     }
  853  | 
  854  |     await leavepage.resetButton.click();
  855  | 
  856  |     await leavepage.waitForDefaultDateRange();
  857  | 
  858  |     await expect
  859  |       .poll(async () => (await leavepage.leaveStatusField.innerText()).trim())
  860  |       .toContain("-- Select --");
  861  |   });
  862  | 
  863  |   test("TC_LEAVE_128 - Admin should filter Leave List using multiple statuses @positive @filter @regression", async ({
  864  |     navigationPage,
  865  |     leavepage,
  866  |   }) => {
  867  |     const data = leaveData.TC_LEAVE_128;
  868  | 
  869  |     await navigationPage.gotoLeave();
  870  | 
  871  |     await leavepage.waitForDefaultDateRange();
  872  | 
  873  |     const firstStatus = leavepage.leaveStatusField.getByText(data.firstStatus, {
  874  |       exact: true,
  875  |     });
  876  | 
  877  |     const secondStatus = leavepage.leaveStatusField.getByText(
  878  |       data.secondStatus,
  879  |       { exact: true },
  880  |     );
  881  | 
  882  |     if ((await firstStatus.count()) === 0) {
  883  |       await leavepage.selectLeaveStatus(data.firstStatus);
  884  |     }
  885  | 
  886  |     if ((await secondStatus.count()) === 0) {
  887  |       await leavepage.selectLeaveStatus(data.secondStatus);
  888  |     }
  889  | 
  890  |     await expect(firstStatus).toBeVisible();
  891  |     await expect(secondStatus).toBeVisible();
  892  | 
  893  |     await leavepage.searchButton.click();
  894  | 
  895  |     await expect(leavepage.loadingSpinner).toBeHidden();
  896  | 
  897  |     await expect(firstStatus).toBeVisible();
  898  |     await expect(secondStatus).toBeVisible();
  899  | 
  900  |     await expect(
  901  |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  902  |     ).toBeVisible({
  903  |       timeout: 15_000,
  904  |     });
  905  | 
  906  |     const rowCount = await leavepage.leaveRows.count();
  907  | 
  908  |     if (rowCount > 0) {
  909  |       for (let index = 0; index < rowCount; index++) {
  910  |         const statusText = (
  911  |           await leavepage.leaveRows
  912  |             .nth(index)
  913  |             .locator(".oxd-table-cell")
  914  |             .nth(6)
  915  |             .innerText()
  916  |         ).trim();
  917  | 
  918  |         expect([data.firstStatus, data.secondStatus]).toContain(statusText);
  919  |       }
  920  |     } else {
> 921  |       await expect(leavepage.noRecordsFound).toBeVisible();
       |                                              ^ Error: expect(locator).toBeVisible() failed
  922  |     }
  923  | 
  924  |     await leavepage.resetButton.click();
  925  |   });
  926  | 
  927  |   test("TC_LEAVE_129 - Reset should restore default Leave Status selections @positive @reset @filter @regression", async ({
  928  |     navigationPage,
  929  |     leavepage,
  930  |   }) => {
  931  |     const data = leaveData.TC_LEAVE_129;
  932  | 
  933  |     await navigationPage.gotoLeave();
  934  | 
  935  |     const defaultDates = await leavepage.waitForDefaultDateRange();
  936  | 
  937  |     const defaultStatusText = (
  938  |       await leavepage.leaveStatusField.innerText()
  939  |     ).trim();
  940  | 
  941  |     const selectedStatus = leavepage.leaveStatusField.getByText(
  942  |       data.leaveStatus,
  943  |       { exact: true },
  944  |     );
  945  | 
  946  |     if ((await selectedStatus.count()) === 0) {
  947  |       await leavepage.selectLeaveStatus(data.leaveStatus);
  948  |     }
  949  | 
  950  |     await expect(selectedStatus).toBeVisible();
  951  | 
  952  |     await leavepage.resetButton.click();
  953  | 
  954  |     await expect(leavepage.loadingSpinner).toBeHidden();
  955  | 
  956  |     await leavepage.waitForDefaultDateRange();
  957  | 
  958  |     await expect(leavepage.fromDateInput).toHaveValue(defaultDates.fromDate);
  959  | 
  960  |     await expect(leavepage.toDateInput).toHaveValue(defaultDates.toDate);
  961  | 
  962  |     await expect
  963  |       .poll(async () => (await leavepage.leaveStatusField.innerText()).trim(), {
  964  |         timeout: 15_000,
  965  |       })
  966  |       .toContain("-- Select --");
  967  |   });
  968  | 
  969  |   test("TC_LEAVE_130 - Admin should filter Leave List by Rejected and Cancelled statuses @positive @filter @regression", async ({
  970  |     navigationPage,
  971  |     leavepage,
  972  |   }) => {
  973  |     const data = leaveData.TC_LEAVE_130;
  974  | 
  975  |     await navigationPage.gotoLeave();
  976  | 
  977  |     await leavepage.waitForDefaultDateRange();
  978  | 
  979  |     for (const status of data.statuses) {
  980  |       const selectedStatus = leavepage.leaveStatusField.getByText(status, {
  981  |         exact: true,
  982  |       });
  983  | 
  984  |       if ((await selectedStatus.count()) === 0) {
  985  |         await leavepage.selectLeaveStatus(status);
  986  |       }
  987  | 
  988  |       await expect(selectedStatus).toBeVisible();
  989  |     }
  990  | 
  991  |     await leavepage.searchButton.click();
  992  | 
  993  |     await expect(leavepage.loadingSpinner).toBeHidden();
  994  | 
  995  |     for (const status of data.statuses) {
  996  |       await expect(
  997  |         leavepage.leaveStatusField.getByText(status, { exact: true }),
  998  |       ).toBeVisible();
  999  |     }
  1000 | 
  1001 |     await expect(
  1002 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  1003 |     ).toBeVisible({
  1004 |       timeout: 15_000,
  1005 |     });
  1006 | 
  1007 |     const rowCount = await leavepage.leaveRows.count();
  1008 | 
  1009 |     if (rowCount > 0) {
  1010 |       for (let index = 0; index < rowCount; index++) {
  1011 |         const statusText = (
  1012 |           await leavepage.leaveRows
  1013 |             .nth(index)
  1014 |             .locator(".oxd-table-cell")
  1015 |             .nth(6)
  1016 |             .innerText()
  1017 |         ).trim();
  1018 | 
  1019 |         const matchesSelectedStatus = data.statuses.some((status) =>
  1020 |           statusText.includes(status),
  1021 |         );
```