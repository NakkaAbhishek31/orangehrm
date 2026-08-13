# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_125 - Admin should filter Leave List by Scheduled status @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:1004:6

# Error details

```
Error: locator.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
Call log:
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('Show Leave with Status', { exact: true }) }).locator('.oxd-select-text')
    - locator resolved to <div data-v-67d2aedf="" data-v-53b4a482="" class="oxd-select-text oxd-select-text--active">…</div>
    - fill("Scheduled")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

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
                - textbox "yyyy-dd-mm" [ref=f2e175]
                - generic [ref=f2e176] [cursor=pointer]: 
            - generic [ref=f2e178]:
              - generic [ref=f2e179]: To Date
              - generic [ref=f2e183]:
                - textbox "yyyy-dd-mm" [ref=f2e184]
                - generic [ref=f2e185] [cursor=pointer]: 
            - generic [ref=f2e187]:
              - generic [ref=f2e188]: Show Leave with Status*
              - generic [ref=f2e191]:
                - generic [ref=f2e192] [cursor=pointer]:
                  - generic [ref=f2e193]: "-- Select --"
                  - generic [ref=f2e194]: 
                - generic [ref=f2e197]:
                  - text: Pending Approval
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
        - table [ref=f2e244]
    - generic [ref=f2e249]:
      - paragraph [ref=f2e250]: OrangeHRM OS 5.9
      - paragraph [ref=f2e251]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e252] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  912  |     await leavepage.resetButton.click();
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
> 1012 |       await leavepage.leaveStatusDropdown.fill(data.leaveStatus);
       |                                           ^ Error: locator.fill: Error: Element is not an <input>, <textarea>, <select> or [contenteditable] and does not have a role allowing [aria-readonly]
  1013 |       await expect(leavepage.leaveStatusDropdown).toHaveValue(data.leaveStatus);
  1014 |     // Click Search.
  1015 |       await leavepage.searchButton.click();
  1016 |     // Wait for the loading spinner to disappear.
  1017 |        await expect(leavepage.loadingSpinner).toBeHidden();
  1018 |     // Verify Scheduled remains selected.
  1019 |       await expect(leavepage.leaveStatusDropdown).toHaveValue(data.leaveStatus);
  1020 | 
  1021 |     // If records appear, verify every displayed row
  1022 |         if(!leavepage.noRecordsFound)
  1023 |         {
  1024 |            await expect(leavepage.leaveRows).toBeVisible();
  1025 |         }
  1026 |     // contains Scheduled in the Status column.
  1027 |         
  1028 |     // Otherwise, verify No Records Found appears.
  1029 | 
  1030 |     // Reset the filters.
  1031 |         await leavepage.resetButton.click();
  1032 | 
  1033 |     // Verify Leave Status returns to its default value.
  1034 |         await expect(leavepage.leaveStatusDropdown).toHaveText(data.defaultStatus);
  1035 |   }
  1036 | );
  1037 | 
  1038 | });
```