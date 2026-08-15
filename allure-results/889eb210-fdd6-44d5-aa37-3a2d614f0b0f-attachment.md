# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_112 - Admin should reset Leave List search filters @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:126:7

# Error details

```
TimeoutError: locator.click: Timeout 70000ms exceeded.
Call log:
  - waiting for locator('.oxd-input-group').filter({ hasText: 'Include Past Employees' }).locator('.oxd-checkbox-wrapper label')

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
              - paragraph [ref=f2e127]: Johrj user
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
                - textbox "yyyy-dd-mm" [ref=f2e175]: 2026-16-06
                - generic [ref=f2e176] [cursor=pointer]: 
            - generic [ref=f2e178]:
              - generic [ref=f2e179]: To Date
              - generic [ref=f2e183]:
                - textbox "yyyy-dd-mm" [ref=f2e184]: 2026-31-07
                - generic [ref=f2e185] [cursor=pointer]: 
            - generic [ref=f2e187]:
              - generic [ref=f2e188]: Show Leave with Status*
              - generic [ref=f2e191]:
                - generic [ref=f2e192] [cursor=pointer]:
                  - generic [ref=f2e193]: "-- Select --"
                  - generic [ref=f2e194]: 
                - generic [ref=f2e196]:
                  - generic [ref=f2e197]:
                    - text: Pending Approval
                    - generic [ref=f2e198] [cursor=pointer]: 
                  - generic [ref=f2e199]:
                    - text: Rejected
                    - generic [ref=f2e200] [cursor=pointer]: 
            - generic [ref=f2e202]:
              - generic [ref=f2e203]: Leave Type
              - generic [ref=f2e207] [cursor=pointer]:
                - generic [ref=f2e208]: "-- Select --"
                - generic [ref=f2e209]: 
          - generic [ref=f2e212]:
            - generic [ref=f2e214]:
              - generic [ref=f2e215]: Employee Name
              - textbox "Type for hints..." [ref=f2e220]
            - generic [ref=f2e222]:
              - generic [ref=f2e223]: Sub Unit
              - generic [ref=f2e227] [cursor=pointer]:
                - generic [ref=f2e228]: "-- Select --"
                - generic [ref=f2e229]: 
            - generic [ref=f2e231]:
              - paragraph [ref=f2e232]: Include Past Employees
              - checkbox [ref=f2e235]
          - separator [ref=f2e237]
          - generic [ref=f2e238]:
            - paragraph [ref=f2e239]: "* Required"
            - button "Reset" [ref=f2e240] [cursor=pointer]
            - button "Search" [ref=f2e241] [cursor=pointer]
      - generic [ref=f2e242]:
        - generic [ref=f2e243]: (1) Record Found
        - table [ref=f2e246]:
          - rowgroup [ref=f2e247]:
            - row [ref=f2e248]:
              - columnheader "" [ref=f2e249]:
                - generic [ref=f2e251] [cursor=pointer]:
                  - checkbox "" [ref=f2e252]
                  - generic [ref=f2e253]: 
              - columnheader "Date" [ref=f2e255]
              - columnheader "Employee Name" [ref=f2e256]
              - columnheader "Leave Type" [ref=f2e257]
              - columnheader "Leave Balance (Days)" [ref=f2e258]
              - columnheader "Number of Days" [ref=f2e259]
              - columnheader "Status" [ref=f2e260]
              - columnheader "Comments" [ref=f2e261]
              - columnheader "Actions" [ref=f2e262]
          - rowgroup [ref=f2e263]:
            - row [ref=f2e265]:
              - cell "" [ref=f2e266]:
                - generic [ref=f2e269] [cursor=pointer]:
                  - checkbox "" [ref=f2e270]
                  - generic [ref=f2e271]: 
              - cell "2026-20-08 to 2026-21-08" [ref=f2e273]
              - cell "Johrj akhilhjkl user" [ref=f2e275]
              - cell "CAN - Personal" [ref=f2e277]
              - cell "3.00" [ref=f2e279]
              - cell "2.00" [ref=f2e281]
              - cell "Pending Approval (2.00)" [ref=f2e283]
              - cell "QA testing - leave application" [ref=f2e285]
              - cell [ref=f2e287]:
                - listitem [ref=f2e289]:
                  - button "" [ref=f2e290] [cursor=pointer]
    - generic [ref=f2e293]:
      - paragraph [ref=f2e294]: OrangeHRM OS 5.9
      - paragraph [ref=f2e295]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e296] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  77  | 
  78  |     await expect(
  79  |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  80  |     ).toBeVisible({
  81  |       timeout: 15_000,
  82  |     });
  83  | 
  84  |     await expect(leavepage.dateValidationMessages).toHaveCount(0);
  85  |   });
  86  | 
  87  |   test("TC_LEAVE_111 - Validation should appear when From Date is later than To Date @negative @validation @regression", async ({
  88  |     page,
  89  |     navigationPage,
  90  |     leavepage,
  91  |   }) => {
  92  |     // Generate From Date using invalidDateRange.fromDaysOffset.
  93  |     const fromDate = dateFromOffset(leaveData.invalidDateRange.fromDaysOffset);
  94  | 
  95  |     // Generate To Date using invalidDateRange.toDaysOffset.
  96  | 
  97  |     const toDate = dateFromOffset(leaveData.invalidDateRange.toDaysOffset);
  98  | 
  99  |     // Navigate to Leave → Leave List.
  100 |     await navigationPage.gotoLeave();
  101 |     // Enter the future From Date.
  102 |     await leavepage.fromDateInput.fill(fromDate);
  103 |     // Enter the earlier To Date.
  104 |     await leavepage.toDateInput.fill(toDate);
  105 |     // Click Search.
  106 |     await leavepage.searchButton.click();
  107 |     // Verify the date-range validation appears.
  108 |     await expect(leavepage.toDateValidation).toBeVisible();
  109 |     // Verify the validation message says:
  110 |     // “To date should be after from date”.
  111 |     await expect(leavepage.toDateValidation).toHaveText(
  112 |       "To date should be after from date",
  113 |     );
  114 | 
  115 |     // Search should be blocked.
  116 |     await expect(page).toHaveURL(/leave\/viewLeaveList/);
  117 | 
  118 |     // Verify no search results are loaded.
  119 | 
  120 |     await expect(leavepage.noRecordsFound).toBeVisible();
  121 |     // Verify the entered dates remain unchanged.
  122 |     await expect(leavepage.fromDateInput).toHaveValue(fromDate);
  123 |     await expect(leavepage.toDateInput).toHaveValue(toDate);
  124 |   });
  125 | 
  126 |   test("TC_LEAVE_112 - Admin should reset Leave List search filters @positive @filter @regression", async ({
  127 |     page,
  128 |     navigationPage,
  129 |     leavepage,
  130 |   }) => {
  131 |     await navigationPage.gotoLeave();
  132 | 
  133 |     // Store default filter values.
  134 |     const defaultFromDate = await leavepage.fromDateInput.inputValue();
  135 | 
  136 |     const defaultToDate = await leavepage.toDateInput.inputValue();
  137 | 
  138 |     const defaultStatusText = (
  139 |       await leavepage.leaveStatusDropdown.innerText()
  140 |     ).trim();
  141 | 
  142 |     const defaultLeaveTypeText = (
  143 |       await leavepage.leaveTypeDropdown.innerText()
  144 |     ).trim();
  145 | 
  146 |     // Generate different valid dates.
  147 |     const changedFromDate = dateFromOffset(-60);
  148 | 
  149 |     const changedToDate = dateFromOffset(-15);
  150 | 
  151 |     await leavepage.fromDateInput.fill(changedFromDate);
  152 | 
  153 |     await leavepage.toDateInput.fill(changedToDate);
  154 | 
  155 |     // Select Rejected status.
  156 |     await leavepage.leaveStatusDropdown.click();
  157 | 
  158 |     const statusOptions = page.locator(".oxd-select-dropdown:visible");
  159 | 
  160 |     await expect(statusOptions).toBeVisible();
  161 | 
  162 |     await statusOptions
  163 |       .locator(".oxd-select-option")
  164 |       .filter({
  165 |         hasText: /^Rejected$/,
  166 |       })
  167 |       .click();
  168 | 
  169 |     // Select Include Past Employees.
  170 |     const pastEmployeesLabel = page
  171 |       .locator(".oxd-input-group")
  172 |       .filter({
  173 |         hasText: "Include Past Employees",
  174 |       })
  175 |       .locator(".oxd-checkbox-wrapper label");
  176 | 
> 177 |     await pastEmployeesLabel.click();
      |                              ^ TimeoutError: locator.click: Timeout 70000ms exceeded.
  178 | 
  179 |     await expect(leavepage.includePastEmployeesCheckbox).toBeChecked();
  180 | 
  181 |     // Verify filters were changed.
  182 |     await expect(leavepage.fromDateInput).toHaveValue(changedFromDate);
  183 | 
  184 |     await expect(leavepage.toDateInput).toHaveValue(changedToDate);
  185 | 
  186 |     // Reset all filters.
  187 |     await leavepage.resetButton.click();
  188 | 
  189 |     await expect(leavepage.loadingSpinner).toBeHidden();
  190 | 
  191 |     // Verify dates return to defaults.
  192 |     await expect(leavepage.fromDateInput).toHaveValue(defaultFromDate);
  193 | 
  194 |     await expect(leavepage.toDateInput).toHaveValue(defaultToDate);
  195 | 
  196 |     // Verify status returns to its default value.
  197 |     await expect
  198 |       .poll(async () =>
  199 |         (await leavepage.leaveStatusDropdown.innerText()).trim(),
  200 |       )
  201 |       .toBe(defaultStatusText);
  202 | 
  203 |     // Verify Leave Type returns to default.
  204 |     await expect
  205 |       .poll(async () => (await leavepage.leaveTypeDropdown.innerText()).trim())
  206 |       .toBe(defaultLeaveTypeText);
  207 | 
  208 |     // Verify Employee Name is cleared.
  209 |     await expect(leavepage.employeeNameInput).toHaveValue("");
  210 | 
  211 |     // Verify checkbox is cleared.
  212 |     await expect(leavepage.includePastEmployeesCheckbox).not.toBeChecked();
  213 |   });
  214 | 
  215 |   test("TC_LEAVE_114 - Admin should filter the Leave List by leave type @positive @filter @regression", async ({
  216 |     navigationPage,
  217 |     leavepage,
  218 |   }) => {
  219 |     await navigationPage.gotoLeave();
  220 | 
  221 |     const leaveType = await leavepage.selectFirstAvailableLeaveType();
  222 | 
  223 |     await leavepage.searchButton.click();
  224 | 
  225 |     await expect(leavepage.loadingSpinner).toBeHidden();
  226 | 
  227 |     await expect(leavepage.leaveTypeDropdown).toContainText(leaveType);
  228 | 
  229 |     await expect(
  230 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  231 |     ).toBeVisible({
  232 |       timeout: 15_000,
  233 |     });
  234 | 
  235 |     const rowCount = await leavepage.leaveRows.count();
  236 | 
  237 |     if (rowCount > 0) {
  238 |       for (let index = 0; index < rowCount; index++) {
  239 |         const leaveTypeCell = leavepage.leaveRows
  240 |           .nth(index)
  241 |           .locator(".oxd-table-cell")
  242 |           .nth(2);
  243 | 
  244 |         await expect(leaveTypeCell).toContainText(leaveType);
  245 |       }
  246 |     } else {
  247 |       await expect(leavepage.noRecordsFound).toBeVisible();
  248 |     }
  249 | 
  250 |     await leavepage.resetButton.click();
  251 | 
  252 |     await expect(leavepage.leaveTypeDropdown).toContainText("Select");
  253 |   });
  254 | 
  255 |   test("TC_LEAVE_115 - Admin should filter the Leave List by employee name @positive @filter @autocomplete @regression", async ({
  256 |     navigationPage,
  257 |     leavepage,
  258 |   }) => {
  259 |     const testData = leaveData.TC_LEAVE_115;
  260 | 
  261 |     // Navigate to Leave → Leave List.
  262 |     await navigationPage.gotoLeave();
  263 |     // Enter a partial employee name.
  264 |     const employeeName = await leavepage.selectFirstAvailableEmployee(
  265 |       leaveData.TC_LEAVE_115.partialEmployeeName,
  266 |     );
  267 | 
  268 |     await leavepage.searchButton.click();
  269 | 
  270 |     await expect(leavepage.loadingSpinner).toBeHidden();
  271 | 
  272 |     await expect(leavepage.employeeNameInput).toHaveValue(employeeName);
  273 | 
  274 |     await expect(
  275 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  276 |     ).toBeVisible({
  277 |       timeout: 15_000,
```