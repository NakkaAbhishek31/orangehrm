# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Performance\performance.spec.ts >> Performance - Employee Reviews >> TC_PERFORMANCE_244 - Reset should clear Include Past Employees @positive @filter @reset @regression
- Location: tests\Performance\performance.spec.ts:942:7

# Error details

```
TimeoutError: locator.click: Timeout 70000ms exceeded.
Call log:
  - waiting for locator('form').locator('label').filter({ hasText: 'Include Past Employees' })

```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - generic:
    - complementary [ref=f3e4]:
      - navigation "Sidepanel" [ref=f3e5]:
        - generic [ref=f3e6]:
          - link [ref=f3e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f3e9]
          - text: 
        - generic [ref=f3e10]:
          - generic [ref=f3e11]:
            - generic [ref=f3e12]:
              - textbox "Search" [ref=f3e15]
              - button "" [ref=f3e16] [cursor=pointer]
            - separator [ref=f3e18]
          - list [ref=f3e19]:
            - listitem [ref=f3e20]:
              - link "Admin" [ref=f3e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f3e25]:
              - link "PIM" [ref=f3e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f3e41]:
              - link "Leave" [ref=f3e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f3e46]:
              - link "Time" [ref=f3e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f3e54]:
              - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f3e62]:
              - link "My Info" [ref=f3e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f3e70]:
              - link "Performance" [ref=f3e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f3e80]:
              - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f3e85]:
              - link "Directory" [ref=f3e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f3e90]:
              - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f3e96]:
              - link "Claim" [ref=f3e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f3e105]:
              - link "Buzz" [ref=f3e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f3e110]:
      - generic [ref=f3e111]:
        - generic [ref=f3e112]:
          - text: 
          - generic [ref=f3e113]:
            - heading "Performance" [level=6] [ref=f3e114]
            - heading "/ Manage Reviews" [level=6] [ref=f3e115]
        - link [ref=f3e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e118] [cursor=pointer]
        - list [ref=f3e124]:
          - listitem [ref=f3e125]:
            - generic [ref=f3e126] [cursor=pointer]:
              - img "profile picture" [ref=f3e127]
              - paragraph [ref=f3e128]: Laal Singh Chadda
              - generic [ref=f3e129]: 
      - navigation "Topbar Menu" [ref=f3e131]:
        - list [ref=f3e132]:
          - listitem [ref=f3e133] [cursor=pointer]:
            - generic [ref=f3e134]:
              - text: Configure
              - generic [ref=f3e135]: 
          - listitem [ref=f3e136] [cursor=pointer]:
            - generic [ref=f3e137]:
              - text: Manage Reviews
              - generic [ref=f3e138]: 
          - listitem [ref=f3e139] [cursor=pointer]:
            - link "My Trackers" [ref=f3e140]:
              - /url: "#"
          - listitem [ref=f3e141] [cursor=pointer]:
            - link "Employee Trackers" [ref=f3e142]:
              - /url: "#"
          - button "" [ref=f3e144] [cursor=pointer]
  - generic [ref=f3e146]:
    - generic [ref=f3e148]:
      - generic [ref=f3e149]:
        - generic [ref=f3e150]:
          - heading "Employee Reviews" [level=5] [ref=f3e152]
          - button "" [ref=f3e155] [cursor=pointer]
        - separator [ref=f3e157]
        - generic [ref=f3e159]:
          - generic [ref=f3e160]:
            - generic [ref=f3e162]:
              - generic [ref=f3e163]: Employee Name
              - textbox "Type for hints..." [ref=f3e168]
            - generic [ref=f3e170]:
              - generic [ref=f3e171]: Job Title
              - generic [ref=f3e175] [cursor=pointer]:
                - generic [ref=f3e176]: "-- Select --"
                - generic [ref=f3e177]: 
            - generic [ref=f3e180]:
              - generic [ref=f3e181]: Sub Unit
              - generic [ref=f3e185] [cursor=pointer]:
                - generic [ref=f3e186]: "-- Select --"
                - generic [ref=f3e187]: 
            - generic [ref=f3e190]:
              - generic [ref=f3e191]: Include
              - generic [ref=f3e195] [cursor=pointer]:
                - generic [ref=f3e196]: Current Employees Only
                - generic [ref=f3e197]: 
            - generic [ref=f3e200]:
              - generic [ref=f3e201]: Review Status
              - generic [ref=f3e205] [cursor=pointer]:
                - generic [ref=f3e206]: "-- Select --"
                - generic [ref=f3e207]: 
            - generic [ref=f3e210]:
              - generic [ref=f3e211]: From Date
              - generic [ref=f3e215]:
                - textbox "yyyy-dd-mm" [ref=f3e216]: 2026-01-01
                - generic [ref=f3e217] [cursor=pointer]: 
            - generic [ref=f3e219]:
              - generic [ref=f3e220]: To Date
              - generic [ref=f3e224]:
                - textbox "yyyy-dd-mm" [ref=f3e225]: 2026-31-12
                - generic [ref=f3e226] [cursor=pointer]: 
          - separator [ref=f3e227]
          - generic [ref=f3e228]:
            - button "Reset" [ref=f3e229] [cursor=pointer]
            - button "Search" [ref=f3e230] [cursor=pointer]
      - generic [ref=f3e231]:
        - generic [ref=f3e232]:
          - separator [ref=f3e233]
          - generic [ref=f3e234]: No Records Found
        - table [ref=f3e237]:
          - rowgroup [ref=f3e238]:
            - row [ref=f3e239]:
              - columnheader "Employee " [ref=f3e240]:
                - text: Employee
                - generic [ref=f3e241]:
                  - generic [ref=f3e242] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title" [ref=f3e243]
              - columnheader "Sub Unit" [ref=f3e244]
              - columnheader "Review Period " [ref=f3e245]:
                - text: Review Period
                - generic [ref=f3e246]:
                  - generic [ref=f3e247] [cursor=pointer]: 
                  - text:  
              - columnheader "Due Date " [ref=f3e248]:
                - text: Due Date
                - generic [ref=f3e249]:
                  - generic [ref=f3e250] [cursor=pointer]: 
                  - text:  
              - columnheader "Review Status " [ref=f3e251]:
                - text: Review Status
                - generic [ref=f3e252]:
                  - generic [ref=f3e253] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f3e254]
          - rowgroup
    - generic [ref=f3e256]:
      - paragraph [ref=f3e257]: OrangeHRM OS 5.9
      - paragraph [ref=f3e258]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e259] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  849  |     );
  850  |     await performancePage.selectFirstAvailableDropdownOption(
  851  |       performancePage.reviewStatusDropdown,
  852  |     );
  853  |     await performancePage.resetButton.click();
  854  |     await expect(performancePage.jobTitleDropdown).toContainText(
  855  |      data.defaultDropdownValue ,
  856  |     );
  857  |   });
  858  | 
  859  |   test("TC_PERFORMANCE_238 - Search after reset should work @positive @search @reset @regression", async ({
  860  |     navigationPage,
  861  |     performancePage,
  862  |   }) => {
  863  |     await navigationPage.gotoPerformance();
  864  |     await performancePage.gotoEmployeeReviews();
  865  |     await performancePage.resetButton.click();
  866  |     await performancePage.searchButton.click();
  867  |     await performancePage.waitForReviewResults();
  868  |   });
  869  | 
  870  |   test("TC_PERFORMANCE_239 - Available dropdown values should be selectable @positive @filter @regression", async ({
  871  |     navigationPage,
  872  |     performancePage,
  873  |   }) => {
  874  |     await navigationPage.gotoPerformance();
  875  |     await performancePage.gotoEmployeeReviews();
  876  |     await performancePage.selectFirstAvailableDropdownOption(
  877  |       performancePage.jobTitleDropdown,
  878  |     );
  879  |     await performancePage.selectFirstAvailableDropdownOption(
  880  |       performancePage.subUnitDropdown,
  881  |     );
  882  |     await performancePage.selectFirstAvailableDropdownOption(
  883  |       performancePage.reviewStatusDropdown,
  884  |     );
  885  |   });
  886  | 
  887  |   test("TC_PERFORMANCE_240 - Filter and reset workflow should complete @positive @filter @reset @regression", async ({
  888  |     navigationPage,
  889  |     performancePage,
  890  |   }) => {
  891  |     const data=performanceData.TC_PERFORMANCE_240
  892  |     await navigationPage.gotoPerformance();
  893  |     await performancePage.gotoEmployeeReviews();
  894  |     const value = await performancePage.selectFirstAvailableDropdownOption(
  895  |       performancePage.jobTitleDropdown,
  896  |     );
  897  |     await performancePage.searchButton.click();
  898  |     await performancePage.waitForReviewResults();
  899  |     await expect(performancePage.jobTitleDropdown).toContainText(value);
  900  |     await performancePage.resetButton.click();
  901  |     await expect(performancePage.jobTitleDropdown).toContainText(
  902  |       data.defaultDropdownValue,
  903  |     );
  904  |   });
  905  | 
  906  |   test("TC_PERFORMANCE_241 - Include Past Employees should be unchecked by default @smoke @filter @regression", async ({
  907  |     navigationPage,
  908  |     performancePage,
  909  |   }) => {
  910  |     await navigationPage.gotoPerformance();
  911  |     await performancePage.gotoEmployeeReviews();
  912  | 
  913  |     await expect(performancePage.includePastEmployeesCheckbox).not.toBeChecked();
  914  |   });
  915  | 
  916  |   test("TC_PERFORMANCE_242 - Admin should select Include Past Employees @positive @filter @regression", async ({
  917  |     navigationPage,
  918  |     performancePage,
  919  |   }) => {
  920  |     await navigationPage.gotoPerformance();
  921  |     await performancePage.gotoEmployeeReviews();
  922  | 
  923  |     await performancePage.includePastEmployeesLabel.click();
  924  | 
  925  |     await expect(performancePage.includePastEmployeesCheckbox).toBeChecked();
  926  |   });
  927  | 
  928  |   test("TC_PERFORMANCE_243 - Include Past Employees should remain selected after search @positive @filter @persistence @regression", async ({
  929  |     navigationPage,
  930  |     performancePage,
  931  |   }) => {
  932  |     await navigationPage.gotoPerformance();
  933  |     await performancePage.gotoEmployeeReviews();
  934  | 
  935  |     await performancePage.includePastEmployeesLabel.click();
  936  |     await performancePage.searchButton.click();
  937  |     await performancePage.waitForReviewResults();
  938  | 
  939  |     await expect(performancePage.includePastEmployeesCheckbox).toBeChecked();
  940  |   });
  941  | 
  942  |   test("TC_PERFORMANCE_244 - Reset should clear Include Past Employees @positive @filter @reset @regression", async ({
  943  |     navigationPage,
  944  |     performancePage,
  945  |   }) => {
  946  |     await navigationPage.gotoPerformance();
  947  |     await performancePage.gotoEmployeeReviews();
  948  | 
> 949  |     await performancePage.includePastEmployeesLabel.click();
       |                                                     ^ TimeoutError: locator.click: Timeout 70000ms exceeded.
  950  |     await expect(performancePage.includePastEmployeesCheckbox).toBeChecked();
  951  |     await performancePage.resetButton.click();
  952  | 
  953  |     await expect(performancePage.includePastEmployeesCheckbox).not.toBeChecked();
  954  |   });
  955  | 
  956  |   test("TC_PERFORMANCE_245 - From Date should remain after search @positive @date @persistence @regression", async ({
  957  |     navigationPage,
  958  |     performancePage,
  959  |   }) => {
  960  |     const data = performanceData.TC_PERFORMANCE_245;
  961  |     await navigationPage.gotoPerformance();
  962  |     await performancePage.gotoEmployeeReviews();
  963  | 
  964  |     await performancePage.fromDateInput.fill(data.fromDate);
  965  |     await performancePage.searchButton.click();
  966  |     await performancePage.waitForReviewResults();
  967  | 
  968  |     await expect(performancePage.fromDateInput).toHaveValue(data.fromDate);
  969  |   });
  970  | 
  971  |   test("TC_PERFORMANCE_246 - To Date should remain after search @positive @date @persistence @regression", async ({
  972  |     navigationPage,
  973  |     performancePage,
  974  |   }) => {
  975  |     const data = performanceData.TC_PERFORMANCE_246;
  976  |     await navigationPage.gotoPerformance();
  977  |     await performancePage.gotoEmployeeReviews();
  978  | 
  979  |     await performancePage.toDateInput.fill(data.toDate);
  980  |     await performancePage.searchButton.click();
  981  |     await performancePage.waitForReviewResults();
  982  | 
  983  |     await expect(performancePage.toDateInput).toHaveValue(data.toDate);
  984  |   });
  985  | 
  986  |   test("TC_PERFORMANCE_247 - Both review dates should remain after search @positive @date @persistence @regression", async ({
  987  |     navigationPage,
  988  |     performancePage,
  989  |   }) => {
  990  |     const data = performanceData.TC_PERFORMANCE_247;
  991  |     await navigationPage.gotoPerformance();
  992  |     await performancePage.gotoEmployeeReviews();
  993  | 
  994  |     await performancePage.fromDateInput.fill(data.fromDate);
  995  |     await performancePage.toDateInput.fill(data.toDate);
  996  |     await performancePage.searchButton.click();
  997  |     await performancePage.waitForReviewResults();
  998  | 
  999  |     await expect(performancePage.fromDateInput).toHaveValue(data.fromDate);
  1000 |     await expect(performancePage.toDateInput).toHaveValue(data.toDate);
  1001 |   });
  1002 | 
  1003 |   test("TC_PERFORMANCE_248 - Search and Reset buttons should be enabled @smoke @regression", async ({
  1004 |     navigationPage,
  1005 |     performancePage,
  1006 |   }) => {
  1007 |     await navigationPage.gotoPerformance();
  1008 |     await performancePage.gotoEmployeeReviews();
  1009 | 
  1010 |     await expect(performancePage.searchButton).toBeEnabled();
  1011 |     await expect(performancePage.resetButton).toBeEnabled();
  1012 |   });
  1013 | 
  1014 |   test("TC_PERFORMANCE_249 - Reset should clear employee validation error @negative @validation @reset @regression", async ({
  1015 |     page,
  1016 |     navigationPage,
  1017 |     performancePage,
  1018 |   }) => {
  1019 |     const data = performanceData.TC_PERFORMANCE_249;
  1020 |     await navigationPage.gotoPerformance();
  1021 |     await performancePage.gotoEmployeeReviews();
  1022 | 
  1023 |     await performancePage.employeeNameInput.fill(
  1024 |       `${data.employeeNamePrefix}${Date.now()}`,
  1025 |     );
  1026 |     await expect(performancePage.autocompleteDropdown).toBeVisible();
  1027 |     await page.keyboard.press("Escape");
  1028 |     await performancePage.searchButton.click();
  1029 |     await expect(performancePage.employeeNameValidation).toHaveText(
  1030 |       data.invalidMessage,
  1031 |     );
  1032 | 
  1033 |     await performancePage.resetButton.click();
  1034 | 
  1035 |     await expect(performancePage.employeeNameValidation).toBeHidden();
  1036 |     await expect(performancePage.employeeNameInput).toHaveValue("");
  1037 |   });
  1038 | 
  1039 |   test("TC_PERFORMANCE_250 - Employee Reviews page should remain usable after browser reload @positive @navigation @regression", async ({
  1040 |     page,
  1041 |     navigationPage,
  1042 |     performancePage,
  1043 |   }) => {
  1044 |     const data = performanceData.TC_PERFORMANCE_250;
  1045 |     await navigationPage.gotoPerformance();
  1046 |     await performancePage.gotoEmployeeReviews();
  1047 | 
  1048 |     await page.reload();
  1049 | 
```