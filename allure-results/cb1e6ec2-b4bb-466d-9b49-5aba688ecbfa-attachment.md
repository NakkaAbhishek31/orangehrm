# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_168 - Invalid validation should appear for a nonexistent employee name @negative @validation @autocomplete @regression
- Location: tests\Time\time.spec.ts:89:7

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'View', exact: true }) resolved to 4 elements:
    1) <button type="submit" data-v-10d463b7="" class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space">…</button> aka locator('form').getByRole('button', { name: 'View' })
    2) <button type="button" data-v-10d463b7="" data-v-c423d1fa="" class="oxd-button oxd-button--medium oxd-button--text oxd-table-cell-action-space">…</button> aka getByRole('row', { name: 'Demo Open Source 2023-16-01' }).getByRole('button')
    3) <button type="button" data-v-10d463b7="" data-v-c423d1fa="" class="oxd-button oxd-button--medium oxd-button--text oxd-table-cell-action-space">…</button> aka getByRole('row', { name: 'Demo Open Source 2022-15-08' }).getByRole('button')
    4) <button type="button" data-v-10d463b7="" data-v-c423d1fa="" class="oxd-button oxd-button--medium oxd-button--text oxd-table-cell-action-space">…</button> aka getByRole('button', { name: 'View' }).nth(3)

Call log:
  - waiting for getByRole('button', { name: 'View', exact: true })

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
            - heading "Time" [level=6] [ref=f3e114]
            - heading "/ Timesheets" [level=6] [ref=f3e115]
        - link [ref=f3e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e118] [cursor=pointer]
        - list [ref=f3e124]:
          - listitem [ref=f3e125]:
            - generic [ref=f3e126] [cursor=pointer]:
              - img "profile picture" [ref=f3e127]
              - paragraph [ref=f3e128]: Demo Source
              - generic [ref=f3e129]: 
      - navigation "Topbar Menu" [ref=f3e131]:
        - list [ref=f3e132]:
          - listitem [ref=f3e133] [cursor=pointer]:
            - generic [ref=f3e134]:
              - text: Timesheets
              - generic [ref=f3e135]: 
          - listitem [ref=f3e136] [cursor=pointer]:
            - generic [ref=f3e137]:
              - text: Attendance
              - generic [ref=f3e138]: 
          - listitem [ref=f3e139] [cursor=pointer]:
            - generic [ref=f3e140]:
              - text: Reports
              - generic [ref=f3e141]: 
          - listitem [ref=f3e142] [cursor=pointer]:
            - generic [ref=f3e143]:
              - text: Project Info
              - generic [ref=f3e144]: 
          - button "" [ref=f3e146] [cursor=pointer]
  - generic [ref=f3e148]:
    - generic [ref=f3e150]:
      - generic [ref=f3e151]:
        - heading "Select Employee" [level=6] [ref=f3e152]
        - separator [ref=f3e153]
        - generic [ref=f3e154]:
          - generic [ref=f3e158]:
            - generic [ref=f3e159]: Employee Name*
            - textbox "Type for hints..." [active] [ref=f3e164]: UnknownEmployee1787371741082
          - separator [ref=f3e165]
          - generic [ref=f3e166]:
            - paragraph [ref=f3e167]: "* Required"
            - button "View" [ref=f3e168] [cursor=pointer]
      - generic [ref=f3e169]:
        - heading "Timesheets Pending Action" [level=6] [ref=f3e171]
        - generic [ref=f3e172]:
          - separator [ref=f3e173]
          - generic [ref=f3e174]: (3) Records Found
        - table [ref=f3e177]:
          - rowgroup [ref=f3e178]:
            - row [ref=f3e179]:
              - columnheader "Employee Name" [ref=f3e180]
              - columnheader "Timesheet Period" [ref=f3e181]
              - columnheader "Actions" [ref=f3e182]
          - rowgroup [ref=f3e183]:
            - row [ref=f3e185]:
              - cell "Demo Open Source" [ref=f3e186]
              - cell "2023-16-01 - 2023-22-01" [ref=f3e188]
              - cell [ref=f3e190]:
                - button "View" [ref=f3e192] [cursor=pointer]
            - row [ref=f3e194]:
              - cell "Demo Open Source" [ref=f3e195]
              - cell "2022-15-08 - 2022-21-08" [ref=f3e197]
              - cell [ref=f3e199]:
                - button "View" [ref=f3e201] [cursor=pointer]
            - row [ref=f3e203]:
              - cell "Demo Open Source" [ref=f3e204]
              - cell "2020-14-09 - 2020-20-09" [ref=f3e206]
              - cell [ref=f3e208]:
                - button "View" [ref=f3e210] [cursor=pointer]
    - generic [ref=f3e212]:
      - paragraph [ref=f3e213]: OrangeHRM OS 5.9
      - paragraph [ref=f3e214]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e215] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  14  |   middleName: d.middleName,
  15  |   lastName: d.lastName,
  16  | });
  17  | 
  18  | const dateFromOffset = (daysOffset: number): string => {
  19  |   const date = new Date();
  20  | 
  21  |   date.setDate(date.getDate() + daysOffset);
  22  | 
  23  |   const year = date.getFullYear();
  24  | 
  25  |   const month = String(date.getMonth() + 1).padStart(2, "0");
  26  | 
  27  |   const day = String(date.getDate()).padStart(2, "0");
  28  | 
  29  |   // OrangeHRM Time fields use yyyy-dd-mm.
  30  |   return `${year}-${day}-${month}`;
  31  | };
  32  | 
  33  | test.describe("Time - Timesheets, Attendance and Reports", () => {
  34  |   test.beforeEach(async ({ loginPage }) => {
  35  |     await loginPage.visitPage();
  36  | 
  37  |     await loginPage.login(
  38  |       loginData.validAdmin.username,
  39  |       loginData.validAdmin.password,
  40  |     );
  41  | 
  42  |     await loginPage.verifyLoginSuccessful();
  43  |   });
  44  | 
  45  |   test("TC_TIME_166 - Admin should navigate to the Employee Timesheets page @smoke @navigation @regression", async ({
  46  |     page,
  47  |     navigationPage,
  48  |     timePage,
  49  |   }) => {
  50  |     const data = timeData.TC_TIME_166;
  51  | 
  52  |     await navigationPage.gotoTime();
  53  | 
  54  |     await timePage.gotoEmployeeTimesheets();
  55  | 
  56  |     await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
  57  | 
  58  |     await expect(timePage.selectEmployeeHeading).toHaveText(data.pageHeading);
  59  | 
  60  |     await expect(timePage.employeeNameInput).toBeVisible();
  61  | 
  62  |     await expect(timePage.viewButton).toBeVisible();
  63  |   });
  64  | 
  65  |   test("TC_TIME_167 - Required validation should appear when viewing a timesheet without selecting an employee @negative @validation @regression", async ({
  66  |     page,
  67  |     navigationPage,
  68  |     timePage,
  69  |   }) => {
  70  |     const data = timeData.TC_TIME_167;
  71  | 
  72  |     await navigationPage.gotoTime();
  73  | 
  74  |     await timePage.gotoEmployeeTimesheets();
  75  | 
  76  |     await timePage.viewButton.click();
  77  | 
  78  |     await expect(timePage.employeeNameValidation).toBeVisible();
  79  | 
  80  |     await expect(timePage.employeeNameValidation).toHaveText(
  81  |       data.requiredMessage,
  82  |     );
  83  | 
  84  |     await expect(timePage.employeeNameInput).toHaveValue("");
  85  | 
  86  |     await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
  87  |   });
  88  | 
  89  |   test("TC_TIME_168 - Invalid validation should appear for a nonexistent employee name @negative @validation @autocomplete @regression", async ({
  90  |     page,
  91  |     navigationPage,
  92  |     timePage,
  93  |   }) => {
  94  |     const data = timeData.TC_TIME_168;
  95  | 
  96  |     const invalidEmployeeName = `${data.employeeNamePrefix}${Date.now()}`;
  97  | 
  98  |     await navigationPage.gotoTime();
  99  | 
  100 |     await timePage.gotoEmployeeTimesheets();
  101 | 
  102 |     await timePage.employeeNameInput.fill(invalidEmployeeName);
  103 | 
  104 |     await expect(timePage.employeeAutocompleteDropdown).toBeVisible({
  105 |       timeout: 15_000,
  106 |     });
  107 | 
  108 |     await expect(timePage.employeeAutocompleteNoRecords).toHaveText(
  109 |       data.noRecordsMessage,
  110 |     );
  111 | 
  112 |     await timePage.employeeNameInput.press("Escape");
  113 | 
> 114 |     await timePage.viewButton.click();
      |                               ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'View', exact: true }) resolved to 4 elements:
  115 | 
  116 |     await expect(timePage.employeeNameValidation).toHaveText(
  117 |       data.invalidMessage,
  118 |     );
  119 | 
  120 |     await expect(timePage.employeeNameInput).toHaveValue(invalidEmployeeName);
  121 | 
  122 |     await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
  123 |   });
  124 | 
  125 |   test("TC_TIME_169 - Admin should view a valid employee timesheet @positive @timesheet @regression", async ({
  126 |     navigationPage,
  127 |     pimPage,
  128 |     timePage,
  129 |   }) => {
  130 |     test.setTimeout(120_000);
  131 | 
  132 |     const data = timeData.TC_TIME_169;
  133 | 
  134 |     const firstName = `${data.firstNamePrefix}${Date.now()}`;
  135 | 
  136 |     await navigationPage.gotoPIM();
  137 | 
  138 |     await pimPage.gotoAddEmployee();
  139 | 
  140 |     const employeeId = await pimPage.addEmployee({
  141 |       firstName,
  142 |       middleName: data.middleName,
  143 |       lastName: data.lastName,
  144 |     });
  145 | 
  146 |     await navigationPage.gotoTime();
  147 | 
  148 |     await timePage.gotoEmployeeTimesheets();
  149 | 
  150 |     const selectedEmployee =
  151 |       await timePage.selectEmployeeFromAutocomplete(firstName);
  152 | 
  153 |     await expect(timePage.employeeNameInput).toHaveValue(selectedEmployee);
  154 | 
  155 |     await timePage.viewButton.click();
  156 | 
  157 |     await expect(timePage.loadingSpinner).toBeHidden({
  158 |       timeout: 20_000,
  159 |     });
  160 | 
  161 |     await expect(
  162 |       timePage.employeeTimesheetHeading.or(timePage.noTimesheetsFound),
  163 |     ).toBeVisible({
  164 |       timeout: 20_000,
  165 |     });
  166 | 
  167 |     // Cleanup.
  168 |     await navigationPage.gotoPIM();
  169 | 
  170 |     await pimPage.gotoEmployeeList();
  171 | 
  172 |     await pimPage.filterEmployeeList({
  173 |       employeeId,
  174 |     });
  175 | 
  176 |     await pimPage.clickOnFilterSearch();
  177 | 
  178 |     await pimPage.deleteEmployeeById(employeeId);
  179 |   });
  180 | 
  181 |   test("TC_TIME_170 - Admin should navigate to the My Timesheet page @smoke @navigation @regression", async ({
  182 |     page,
  183 |     navigationPage,
  184 |     timePage,
  185 |   }) => {
  186 |     const data = timeData.TC_TIME_170;
  187 | 
  188 |     await navigationPage.gotoTime();
  189 | 
  190 |     await timePage.gotoMyTimesheet();
  191 | 
  192 |     await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
  193 | 
  194 |     await expect(timePage.myTimesheetHeading).toBeVisible();
  195 | 
  196 |     await expect(timePage.timesheetPeriod).toBeVisible();
  197 | 
  198 |     await expect(timePage.timesheetTable).toBeVisible();
  199 | 
  200 |     await expect(timePage.editTimesheetButton).toBeVisible();
  201 |   });
  202 | 
  203 |   test("TC_TIME_171 - Admin should navigate to Employee Attendance Records @smoke @navigation @attendance @regression", async ({
  204 |     page,
  205 |     navigationPage,
  206 |     timePage,
  207 |   }) => {
  208 |     const data = timeData.TC_TIME_171;
  209 | 
  210 |     await navigationPage.gotoTime();
  211 | 
  212 |     await timePage.gotoEmployeeAttendanceRecords();
  213 | 
  214 |     await expect(page).toHaveURL(new RegExp(`${data.expectedUrlPath}$`));
```