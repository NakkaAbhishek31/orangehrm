# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_168 - Invalid validation should appear for a nonexistent employee name @negative @validation @autocomplete @regression
- Location: tests\Time\time.spec.ts:93:9

# Error details

```
Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'View', exact: true }) resolved to 4 elements:
    1) <button type="submit" data-v-10d463b7="" class="oxd-button oxd-button--medium oxd-button--secondary orangehrm-left-space">…</button> aka locator('form').getByRole('button', { name: 'View' })
    2) <button type="button" data-v-10d463b7="" data-v-c423d1fa="" class="oxd-button oxd-button--medium oxd-button--text oxd-table-cell-action-space">…</button> aka getByRole('row', { name: 'manda akhil user 2023-16-01' }).getByRole('button')
    3) <button type="button" data-v-10d463b7="" data-v-c423d1fa="" class="oxd-button oxd-button--medium oxd-button--text oxd-table-cell-action-space">…</button> aka getByRole('row', { name: 'manda akhil user 2022-15-08' }).getByRole('button')
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
              - paragraph [ref=f3e128]: manda user
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
            - textbox "Type for hints..." [active] [ref=f3e164]: UnknownEmployee1787198215838
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
              - cell "manda akhil user" [ref=f3e186]
              - cell "2023-16-01 - 2023-22-01" [ref=f3e188]
              - cell [ref=f3e190]:
                - button "View" [ref=f3e192] [cursor=pointer]
            - row [ref=f3e194]:
              - cell "manda akhil user" [ref=f3e195]
              - cell "2022-15-08 - 2022-21-08" [ref=f3e197]
              - cell [ref=f3e199]:
                - button "View" [ref=f3e201] [cursor=pointer]
            - row [ref=f3e203]:
              - cell "manda akhil user" [ref=f3e204]
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
  29  |         const data =
  30  |           timeData.TC_TIME_166;
  31  | 
  32  |         await navigationPage.gotoTime();
  33  | 
  34  |         await timePage.gotoEmployeeTimesheets();
  35  | 
  36  |         await expect(page).toHaveURL(
  37  |           new RegExp(
  38  |             `${data.expectedUrlPath}$`
  39  |           )
  40  |         );
  41  | 
  42  |         await expect(
  43  |           timePage.selectEmployeeHeading
  44  |         ).toHaveText(data.pageHeading);
  45  | 
  46  |         await expect(
  47  |           timePage.employeeNameInput
  48  |         ).toBeVisible();
  49  | 
  50  |         await expect(
  51  |           timePage.viewButton
  52  |         ).toBeVisible();
  53  |       }
  54  |     );
  55  | 
  56  |     test('TC_TIME_167 - Required validation should appear when viewing a timesheet without selecting an employee @negative @validation @regression',
  57  |       async ({
  58  |         page,
  59  |         navigationPage,
  60  |         timePage,
  61  |       }) => {
  62  |         const data =
  63  |           timeData.TC_TIME_167;
  64  | 
  65  |         await navigationPage.gotoTime();
  66  | 
  67  |         await timePage.gotoEmployeeTimesheets();
  68  | 
  69  |         await timePage.viewButton.click();
  70  | 
  71  |         await expect(
  72  |           timePage.employeeNameValidation
  73  |         ).toBeVisible();
  74  | 
  75  |         await expect(
  76  |           timePage.employeeNameValidation
  77  |         ).toHaveText(
  78  |           data.requiredMessage
  79  |         );
  80  | 
  81  |         await expect(
  82  |           timePage.employeeNameInput
  83  |         ).toHaveValue('');
  84  | 
  85  |         await expect(page).toHaveURL(
  86  |           new RegExp(
  87  |             `${data.expectedUrlPath}$`
  88  |           )
  89  |         );
  90  |       }
  91  |     );
  92  | 
  93  |     test('TC_TIME_168 - Invalid validation should appear for a nonexistent employee name @negative @validation @autocomplete @regression',
  94  |       async ({
  95  |         page,
  96  |         navigationPage,
  97  |         timePage,
  98  |       }) => {
  99  |         const data =
  100 |           timeData.TC_TIME_168;
  101 | 
  102 |         const invalidEmployeeName =
  103 |           `${data.employeeNamePrefix}${Date.now()}`;
  104 | 
  105 |         await navigationPage.gotoTime();
  106 | 
  107 |         await timePage.gotoEmployeeTimesheets();
  108 | 
  109 |         await timePage.employeeNameInput.fill(
  110 |           invalidEmployeeName
  111 |         );
  112 | 
  113 |         await expect(
  114 |           timePage.employeeAutocompleteDropdown
  115 |         ).toBeVisible({
  116 |           timeout: 15_000,
  117 |         });
  118 | 
  119 |         await expect(
  120 |           timePage.employeeAutocompleteNoRecords
  121 |         ).toHaveText(
  122 |           data.noRecordsMessage
  123 |         );
  124 | 
  125 |         await timePage.employeeNameInput.press(
  126 |           'Escape'
  127 |         );
  128 | 
> 129 |         await timePage.viewButton.click();
      |                                   ^ Error: locator.click: Error: strict mode violation: getByRole('button', { name: 'View', exact: true }) resolved to 4 elements:
  130 | 
  131 |         await expect(
  132 |           timePage.employeeNameValidation
  133 |         ).toHaveText(
  134 |           data.invalidMessage
  135 |         );
  136 | 
  137 |         await expect(
  138 |           timePage.employeeNameInput
  139 |         ).toHaveValue(
  140 |           invalidEmployeeName
  141 |         );
  142 | 
  143 |         await expect(page).toHaveURL(
  144 |           new RegExp(
  145 |             `${data.expectedUrlPath}$`
  146 |           )
  147 |         );
  148 |       }
  149 |     );
  150 | 
  151 |     test('TC_TIME_169 - Admin should view a valid employee timesheet @positive @timesheet @regression',
  152 |       async ({
  153 |         navigationPage,
  154 |         pimPage,
  155 |         timePage,
  156 |       }) => {
  157 |         test.setTimeout(120_000);
  158 | 
  159 |         const data =
  160 |           timeData.TC_TIME_169;
  161 | 
  162 |         const firstName =
  163 |           `${data.firstNamePrefix}${Date.now()}`;
  164 | 
  165 |         await navigationPage.gotoPIM();
  166 | 
  167 |         await pimPage.gotoAddEmployee();
  168 | 
  169 |         const employeeId =
  170 |           await pimPage.addEmployee({
  171 |             firstName,
  172 |             middleName: data.middleName,
  173 |             lastName: data.lastName,
  174 |           });
  175 | 
  176 |         await navigationPage.gotoTime();
  177 | 
  178 |         await timePage.gotoEmployeeTimesheets();
  179 | 
  180 |         const selectedEmployee =
  181 |           await timePage
  182 |             .selectEmployeeFromAutocomplete(
  183 |               firstName
  184 |             );
  185 | 
  186 |         await expect(
  187 |           timePage.employeeNameInput
  188 |         ).toHaveValue(selectedEmployee);
  189 | 
  190 |         await timePage.viewButton.click();
  191 | 
  192 |         await expect(
  193 |           timePage.loadingSpinner
  194 |         ).toBeHidden({
  195 |           timeout: 20_000,
  196 |         });
  197 | 
  198 |         await expect(
  199 |           timePage.employeeTimesheetHeading
  200 |             .or(timePage.noTimesheetsFound)
  201 |         ).toBeVisible({
  202 |           timeout: 20_000,
  203 |         });
  204 | 
  205 |         // Cleanup.
  206 |         await navigationPage.gotoPIM();
  207 | 
  208 |         await pimPage.gotoEmployeeList();
  209 | 
  210 |         await pimPage.filterEmployeeList({
  211 |           employeeId,
  212 |         });
  213 | 
  214 |         await pimPage.clickOnFilterSearch();
  215 | 
  216 |         await pimPage.deleteEmployeeById(
  217 |           employeeId
  218 |         );
  219 |       }
  220 |     );
  221 | 
  222 |     test( 'TC_TIME_170 - Admin should navigate to the My Timesheet page @smoke @navigation @regression',
  223 |       async ({
  224 |         page,
  225 |         navigationPage,
  226 |         timePage,
  227 |       }) => {
  228 |         const data =
  229 |           timeData.TC_TIME_170;
```