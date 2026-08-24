# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Performance\performance.spec.ts >> Performance - Employee Reviews >> TC_PERFORMANCE_204 - Admin should search employee reviews using a valid employee name @positive @search @autocomplete @regression
- Location: tests\Performance\performance.spec.ts:189:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-table-body .oxd-table-card').first().or(locator('.orangehrm-container').getByText('No Records Found', { exact: true }))
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').first().or(locator('.orangehrm-container').getByText('No Records Found', { exact: true }))

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
  - heading "Performance" [level=6]
  - heading "/ Manage Reviews" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Arjun Rao
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configure 
      - listitem: Manage Reviews 
      - listitem:
        - link "My Trackers":
          - /url: "#"
      - listitem:
        - link "Employee Trackers":
          - /url: "#"
      - button ""
- heading "Employee Reviews" [level=5]
- button ""
- separator
- text: Employee Name
- textbox "Type for hints...": ReviewEmployee1787551037423 Test User
- text: Job Title -- Select --  Sub Unit -- Select --  Include Current Employees Only  Review Status -- Select --  From Date
- textbox "mm-dd-yyyy": 01-01-2026
- text:  To Date
- textbox "mm-dd-yyyy": 12-31-2026
- text: 
- separator
- button "Reset"
- button "Search"
- separator
- text: No Records Found
- table:
  - rowgroup:
    - row "Employee  Job Title Sub Unit Review Period  Due Date  Review Status  Actions":
      - columnheader "Employee "
      - columnheader "Job Title"
      - columnheader "Sub Unit"
      - columnheader "Review Period "
      - columnheader "Due Date "
      - columnheader "Review Status "
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
  142 |     performancePage,
  143 |   }) => {
  144 |     const data =
  145 |       performanceData.TC_PERFORMANCE_203;
  146 | 
  147 |     const invalidEmployeeName =
  148 |       `${data.employeeNamePrefix}${Date.now()}`;
  149 | 
  150 |     await navigationPage.gotoPerformance();
  151 | 
  152 |     await performancePage.gotoEmployeeReviews();
  153 | 
  154 |     await performancePage.employeeNameInput.fill(
  155 |       invalidEmployeeName
  156 |     );
  157 | 
  158 |     await expect(
  159 |       performancePage.autocompleteDropdown
  160 |     ).toBeVisible({
  161 |       timeout: 15_000,
  162 |     });
  163 | 
  164 |     await expect(
  165 |       performancePage.autocompleteNoRecords
  166 |     ).toHaveText(data.noRecordsMessage);
  167 | 
  168 |     // Close autocomplete without selecting.
  169 |     await page.keyboard.press('Escape');
  170 | 
  171 |     await performancePage.searchButton.click();
  172 | 
  173 |     await expect(
  174 |       performancePage.employeeNameValidation
  175 |     ).toHaveText(data.invalidMessage);
  176 | 
  177 |     await expect(
  178 |       performancePage.employeeNameInput
  179 |     ).toHaveValue(invalidEmployeeName);
  180 | 
  181 |     await expect(page).toHaveURL(
  182 |       new RegExp(`${data.expectedUrlPath}$`)
  183 |     );
  184 | 
  185 |     await performancePage.employeeNameInput.clear();
  186 |   }
  187 | );
  188 | 
  189 | test('TC_PERFORMANCE_204 - Admin should search employee reviews using a valid employee name @positive @search @autocomplete @regression',
  190 |   async ({
  191 |     page,
  192 |     navigationPage,
  193 |     pimPage,
  194 |     performancePage,
  195 |   }) => {
  196 |     test.setTimeout(180_000);
  197 | 
  198 |     const data =
  199 |       performanceData.TC_PERFORMANCE_204;
  200 | 
  201 |     const uniqueValue = Date.now();
  202 | 
  203 |     const employee = {
  204 |       firstName:
  205 |         `${data.firstNamePrefix}${uniqueValue}`,
  206 |       middleName: data.middleName,
  207 |       lastName: data.lastName,
  208 |     };
  209 | 
  210 |     await navigationPage.gotoPIM();
  211 |     await pimPage.gotoAddEmployee();
  212 | 
  213 |     const employeeId =
  214 |       await pimPage.addEmployee(employee);
  215 | 
  216 |     expect(employeeId).not.toBe('');
  217 | 
  218 |     await navigationPage.gotoPerformance();
  219 | 
  220 |     await performancePage.gotoEmployeeReviews();
  221 | 
  222 |     const selectedEmployee =
  223 |       await performancePage
  224 |         .selectEmployeeFromAutocomplete(
  225 |           employee.firstName
  226 |         );
  227 | 
  228 |     await expect(
  229 |       performancePage.employeeNameInput
  230 |     ).toHaveValue(selectedEmployee);
  231 | 
  232 |     await performancePage.searchButton.click();
  233 | 
  234 |     await expect(
  235 |       performancePage.loadingSpinner
  236 |     ).toBeHidden();
  237 | 
  238 |     await expect(
  239 |       performancePage.reviewRows
  240 |         .first()
  241 |         .or(performancePage.noRecordsFound)
> 242 |     ).toBeVisible({
      |       ^ Error: expect(locator).toBeVisible() failed
  243 |       timeout: 15_000,
  244 |     });
  245 | 
  246 |     const reviewCount =
  247 |       await performancePage.reviewRows.count();
  248 | 
  249 |     if (reviewCount > 0) {
  250 |       for (
  251 |         let index = 0;
  252 |         index < reviewCount;
  253 |         index++
  254 |       ) {
  255 |         const employeeCell =
  256 |           performancePage.reviewRows
  257 |             .nth(index)
  258 |             .locator('.oxd-table-cell')
  259 |             .nth(1);
  260 | 
  261 |         await expect(
  262 |           employeeCell
  263 |         ).toContainText(employee.firstName);
  264 | 
  265 |         await expect(
  266 |           employeeCell
  267 |         ).toContainText(employee.lastName);
  268 |       }
  269 |     } else {
  270 |       await expect(
  271 |         performancePage.noRecordsFound
  272 |       ).toBeVisible();
  273 |     }
  274 | 
  275 |     // Cleanup temporary employee.
  276 |     await navigationPage.gotoPIM();
  277 |     await pimPage.gotoEmployeeList();
  278 | 
  279 |     await pimPage.filterEmployeeList({
  280 |       employeeId,
  281 |     });
  282 | 
  283 |     await pimPage.clickOnFilterSearch();
  284 | 
  285 |     await pimPage.deleteEmployeeById(
  286 |       employeeId
  287 |     );
  288 |   }
  289 | );
  290 | 
  291 | test('TC_PERFORMANCE_205 - Admin should reset Employee Review search filters @positive @filter @regression',
  292 |   async ({
  293 |     page,
  294 |     navigationPage,
  295 |     performancePage,
  296 |   }) => {
  297 |     const data =
  298 |       performanceData.TC_PERFORMANCE_205;
  299 | 
  300 |     const invalidEmployeeName =
  301 |       `${data.employeeNamePrefix}${Date.now()}`;
  302 | 
  303 |     await navigationPage.gotoPerformance();
  304 | 
  305 |     await performancePage.gotoEmployeeReviews();
  306 | 
  307 |     const defaultFromDate =
  308 |       await performancePage.fromDateInput
  309 |         .inputValue();
  310 | 
  311 |     const defaultToDate =
  312 |       await performancePage.toDateInput
  313 |         .inputValue();
  314 | 
  315 |     await performancePage.employeeNameInput.fill(
  316 |       invalidEmployeeName
  317 |     );
  318 | 
  319 |     await page.keyboard.press('Escape');
  320 | 
  321 |     await performancePage
  322 |       .selectFirstAvailableDropdownOption(
  323 |         performancePage.jobTitleDropdown
  324 |       );
  325 | 
  326 |     await performancePage.selectDropdownOption(
  327 |       performancePage.reviewStatusDropdown,
  328 |       data.reviewStatus
  329 |     );
  330 | 
  331 |     await performancePage
  332 |       .includePastEmployeesLabel
  333 |       .click();
  334 | 
  335 |     await expect(
  336 |       performancePage.includePastEmployeesCheckbox
  337 |     ).toBeChecked();
  338 | 
  339 |     await performancePage.fromDateInput.fill(
  340 |       data.fromDate
  341 |     );
  342 | 
```