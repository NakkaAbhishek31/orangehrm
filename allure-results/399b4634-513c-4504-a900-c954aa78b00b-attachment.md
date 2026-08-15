# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_114 - Admin should filter the Leave List by leave type @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:200:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('No Records Found', { exact: true })
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for getByText('No Records Found', { exact: true })

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
- text:  Show Leave with Status* -- Select --  Pending Approval  Leave Type -- Select --  Employee Name
- textbox "Type for hints..."
- text: Sub Unit -- Select -- 
- paragraph: Include Past Employees
- checkbox
- separator
- paragraph: "* Required"
- button "Reset"
- button "Search"
- text: (4) Records Found
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
    - row " 2026-11-12 Rajaa P CAN - Vacation 148.00 1.00 Pending Approval (1.00) Approve Reject ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-11-12"
      - cell "Rajaa P"
      - cell "CAN - Vacation"
      - cell "148.00"
      - cell "1.00"
      - cell "Pending Approval (1.00)"
      - cell
      - cell "Approve Reject ":
        - button "Approve"
        - button "Reject"
        - listitem:
          - button ""
    - row " 2026-09-10 Rajaa P CAN - Personal 148.00 1.00 Pending Approval (1.00) Approve Reject ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-09-10"
      - cell "Rajaa P"
      - cell "CAN - Personal"
      - cell "148.00"
      - cell "1.00"
      - cell "Pending Approval (1.00)"
      - cell
      - cell "Approve Reject ":
        - button "Approve"
        - button "Reject"
        - listitem:
          - button ""
    - row " 2026-12-06 Rajaa P CAN - Vacation 148.00 1.00 Pending Approval (1.00) Approve Reject ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-12-06"
      - cell "Rajaa P"
      - cell "CAN - Vacation"
      - cell "148.00"
      - cell "1.00"
      - cell "Pending Approval (1.00)"
      - cell
      - cell "Approve Reject ":
        - button "Approve"
        - button "Reject"
        - listitem:
          - button ""
    - row " 2026-12-01 Rajaa P CAN - Personal 148.00 1.00 Pending Approval (1.00) Approve Reject ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "2026-12-01"
      - cell "Rajaa P"
      - cell "CAN - Personal"
      - cell "148.00"
      - cell "1.00"
      - cell "Pending Approval (1.00)"
      - cell
      - cell "Approve Reject ":
        - button "Approve"
        - button "Reject"
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
  132 | 
  133 |     // Store default filter values.
  134 |     const { fromDate: defaultFromDate, toDate: defaultToDate } =
  135 |       await leavepage.waitForDefaultDateRange();
  136 | 
  137 |     const defaultStatusText = (
  138 |       await leavepage.leaveStatusDropdown.innerText()
  139 |     ).trim();
  140 | 
  141 |     const defaultLeaveTypeText = (
  142 |       await leavepage.leaveTypeDropdown.innerText()
  143 |     ).trim();
  144 | 
  145 |     // Generate different valid dates.
  146 |     const changedFromDate = dateFromOffset(-60);
  147 | 
  148 |     const changedToDate = dateFromOffset(-15);
  149 | 
  150 |     await leavepage.fromDateInput.fill(changedFromDate);
  151 | 
  152 |     await leavepage.toDateInput.fill(changedToDate);
  153 | 
  154 |     // Select Rejected status.
  155 |     await leavepage.leaveStatusDropdown.click();
  156 | 
  157 |     const statusOptions = page.locator(".oxd-select-dropdown:visible");
  158 | 
  159 |     await expect(statusOptions).toBeVisible();
  160 | 
  161 |     await statusOptions
  162 |       .locator(".oxd-select-option")
  163 |       .filter({
  164 |         hasText: /^Rejected$/,
  165 |       })
  166 |       .click();
  167 | 
  168 |     // Verify filters were changed.
  169 |     await expect(leavepage.fromDateInput).toHaveValue(changedFromDate);
  170 | 
  171 |     await expect(leavepage.toDateInput).toHaveValue(changedToDate);
  172 | 
  173 |     // Reset all filters.
  174 |     await leavepage.resetButton.click();
  175 | 
  176 |     await expect(leavepage.loadingSpinner).toBeHidden();
  177 | 
  178 |     // Verify dates return to defaults.
  179 |     await expect(leavepage.fromDateInput).toHaveValue(defaultFromDate);
  180 | 
  181 |     await expect(leavepage.toDateInput).toHaveValue(defaultToDate);
  182 | 
  183 |     // Verify status returns to its default value.
  184 |     await expect
  185 |       .poll(async () =>
  186 |         (await leavepage.leaveStatusDropdown.innerText()).trim(),
  187 |       )
  188 |       .toContain("-- Select --");
  189 | 
  190 |     // Verify Leave Type returns to default.
  191 |     await expect
  192 |       .poll(async () => (await leavepage.leaveTypeDropdown.innerText()).trim())
  193 |       .toBe(defaultLeaveTypeText);
  194 | 
  195 |     // Verify Employee Name is cleared.
  196 |     await expect(leavepage.employeeNameInput).toHaveValue("");
  197 | 
  198 |   });
  199 | 
  200 |   test("TC_LEAVE_114 - Admin should filter the Leave List by leave type @positive @filter @regression", async ({
  201 |     navigationPage,
  202 |     leavepage,
  203 |   }) => {
  204 |     await navigationPage.gotoLeave();
  205 | 
  206 |     const leaveType = await leavepage.selectFirstAvailableLeaveType();
  207 | 
  208 |     await leavepage.searchButton.click();
  209 | 
  210 |     await expect(leavepage.loadingSpinner).toBeHidden();
  211 | 
  212 |     await expect(leavepage.leaveTypeDropdown).toContainText(leaveType);
  213 | 
  214 |     await expect(
  215 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  216 |     ).toBeVisible({
  217 |       timeout: 15_000,
  218 |     });
  219 | 
  220 |     const rowCount = await leavepage.leaveRows.count();
  221 | 
  222 |     if (rowCount > 0 && leaveType !== "-- Select --") {
  223 |       for (let index = 0; index < rowCount; index++) {
  224 |         const leaveTypeCell = leavepage.leaveRows
  225 |           .nth(index)
  226 |           .locator(".oxd-table-cell")
  227 |           .nth(2);
  228 | 
  229 |         await expect(leaveTypeCell).toContainText(leaveType);
  230 |       }
  231 |     } else {
> 232 |       await expect(leavepage.noRecordsFound).toBeVisible();
      |                                              ^ Error: expect(locator).toBeVisible() failed
  233 |     }
  234 | 
  235 |     await leavepage.resetButton.click();
  236 | 
  237 |     await expect(leavepage.leaveTypeDropdown).toContainText("Select");
  238 |   });
  239 | 
  240 |   test("TC_LEAVE_115 - Admin should filter the Leave List by employee name @positive @filter @autocomplete @regression", async ({
  241 |     navigationPage,
  242 |     leavepage,
  243 |   }) => {
  244 |     const testData = leaveData.TC_LEAVE_115;
  245 | 
  246 |     // Navigate to Leave → Leave List.
  247 |     await navigationPage.gotoLeave();
  248 |     // Enter a partial employee name.
  249 |     const employeeName = await leavepage.selectFirstAvailableEmployee(
  250 |       leaveData.TC_LEAVE_115.partialEmployeeName,
  251 |     );
  252 | 
  253 |     await leavepage.searchButton.click();
  254 | 
  255 |     await expect(leavepage.loadingSpinner).toBeHidden();
  256 | 
  257 |     await expect(leavepage.employeeNameInput).toHaveValue(
  258 |       new RegExp(employeeName.trim().split(/\s+/).join("\\s+")),
  259 |     );
  260 | 
  261 |     await expect(
  262 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  263 |     ).toBeVisible({
  264 |       timeout: 15_000,
  265 |     });
  266 | 
  267 |     const rowCount = await leavepage.leaveRows.count();
  268 | 
  269 |     if (rowCount > 0) {
  270 |       for (let index = 0; index < rowCount; index++) {
  271 |         const employeeNameCell = leavepage.leaveRows
  272 |           .nth(index)
  273 |           .locator(".oxd-table-cell")
  274 |           .nth(1);
  275 | 
  276 |         await expect(employeeNameCell).toContainText(employeeName);
  277 |       }
  278 |     } else {
  279 |       await expect(leavepage.noRecordsFound).toBeVisible();
  280 |     }
  281 | 
  282 |     await leavepage.resetButton.click();
  283 | 
  284 |     await expect(leavepage.employeeNameInput).toHaveValue("");
  285 |   });
  286 | 
  287 |   test("TC_LEAVE_116 - Invalid validation should appear for a nonexistent employee name @negative @validation @autocomplete @regression", async ({
  288 |     page,
  289 |     navigationPage,
  290 |     leavepage,
  291 |   }) => {
  292 |     const testData = leaveData.TC_LEAVE_116;
  293 | 
  294 |     await navigationPage.gotoLeave();
  295 | 
  296 |     await leavepage.employeeNameInput.fill(testData.employeeName);
  297 | 
  298 |     // Verify autocomplete has no matching employee.
  299 |     const noAutocompleteRecords = leavepage.autocompleteOptions.filter({
  300 |       hasText: "No Records Found",
  301 |     });
  302 | 
  303 |     await expect(noAutocompleteRecords).toBeVisible({
  304 |       timeout: 15_000,
  305 |     });
  306 | 
  307 |     // Close autocomplete without selecting an option.
  308 |     await leavepage.employeeNameInput.press("Escape");
  309 | 
  310 |     // Attempt to search.
  311 |     await leavepage.searchButton.click();
  312 | 
  313 |     // Verify invalid employee validation.
  314 |     await expect(leavepage.employeeNameValidation).toBeVisible();
  315 | 
  316 |     await expect(leavepage.employeeNameValidation).toHaveText("Invalid");
  317 | 
  318 |     await expect(leavepage.employeeNameInput).toHaveValue(
  319 |       testData.employeeName,
  320 |     );
  321 | 
  322 |     // Search should remain blocked.
  323 |     await expect(page).toHaveURL(/leave\/viewLeaveList/);
  324 | 
  325 |     // Reset filters.
  326 |     await leavepage.resetButton.click();
  327 | 
  328 |     await expect(leavepage.employeeNameInput).toHaveValue("");
  329 | 
  330 |     await expect(leavepage.employeeNameValidation).toBeHidden();
  331 |   });
  332 | 
```