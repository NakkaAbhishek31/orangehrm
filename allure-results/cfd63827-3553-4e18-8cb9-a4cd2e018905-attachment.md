# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_112 - Admin should reset Leave List search filters @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:126:7

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('.oxd-input-group').filter({ has: locator('label').getByText('From Date', { exact: true }) }).locator('input')
Expected: ""
Received: "2026-01-01"
Timeout:  20000ms

Call log:
  - Expect "toHaveValue" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('From Date', { exact: true }) }).locator('input')
    42 × locator resolved to <input data-v-1f99f73c="" data-v-4a95a2e0="" placeholder="yyyy-dd-mm" class="oxd-input oxd-input--active"/>
       - unexpected value "2026-01-01"

```

```yaml
- textbox "yyyy-dd-mm": 2026-01-01
```

# Test source

```ts
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
  169 |     // Verify filters were changed.
  170 |     await expect(leavepage.fromDateInput).toHaveValue(changedFromDate);
  171 | 
  172 |     await expect(leavepage.toDateInput).toHaveValue(changedToDate);
  173 | 
  174 |     // Reset all filters.
  175 |     await leavepage.resetButton.click();
  176 | 
  177 |     await expect(leavepage.loadingSpinner).toBeHidden();
  178 | 
  179 |     // Verify dates return to defaults.
> 180 |     await expect(leavepage.fromDateInput).toHaveValue(defaultFromDate);
      |                                           ^ Error: expect(locator).toHaveValue(expected) failed
  181 | 
  182 |     await expect(leavepage.toDateInput).toHaveValue(defaultToDate);
  183 | 
  184 |     // Verify status returns to its default value.
  185 |     await expect
  186 |       .poll(async () =>
  187 |         (await leavepage.leaveStatusDropdown.innerText()).trim(),
  188 |       )
  189 |       .toBe(defaultStatusText);
  190 | 
  191 |     // Verify Leave Type returns to default.
  192 |     await expect
  193 |       .poll(async () => (await leavepage.leaveTypeDropdown.innerText()).trim())
  194 |       .toBe(defaultLeaveTypeText);
  195 | 
  196 |     // Verify Employee Name is cleared.
  197 |     await expect(leavepage.employeeNameInput).toHaveValue("");
  198 | 
  199 |   });
  200 | 
  201 |   test("TC_LEAVE_114 - Admin should filter the Leave List by leave type @positive @filter @regression", async ({
  202 |     navigationPage,
  203 |     leavepage,
  204 |   }) => {
  205 |     await navigationPage.gotoLeave();
  206 | 
  207 |     const leaveType = await leavepage.selectFirstAvailableLeaveType();
  208 | 
  209 |     await leavepage.searchButton.click();
  210 | 
  211 |     await expect(leavepage.loadingSpinner).toBeHidden();
  212 | 
  213 |     await expect(leavepage.leaveTypeDropdown).toContainText(leaveType);
  214 | 
  215 |     await expect(
  216 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  217 |     ).toBeVisible({
  218 |       timeout: 15_000,
  219 |     });
  220 | 
  221 |     const rowCount = await leavepage.leaveRows.count();
  222 | 
  223 |     if (rowCount > 0) {
  224 |       for (let index = 0; index < rowCount; index++) {
  225 |         const leaveTypeCell = leavepage.leaveRows
  226 |           .nth(index)
  227 |           .locator(".oxd-table-cell")
  228 |           .nth(2);
  229 | 
  230 |         await expect(leaveTypeCell).toContainText(leaveType);
  231 |       }
  232 |     } else {
  233 |       await expect(leavepage.noRecordsFound).toBeVisible();
  234 |     }
  235 | 
  236 |     await leavepage.resetButton.click();
  237 | 
  238 |     await expect(leavepage.leaveTypeDropdown).toContainText("Select");
  239 |   });
  240 | 
  241 |   test("TC_LEAVE_115 - Admin should filter the Leave List by employee name @positive @filter @autocomplete @regression", async ({
  242 |     navigationPage,
  243 |     leavepage,
  244 |   }) => {
  245 |     const testData = leaveData.TC_LEAVE_115;
  246 | 
  247 |     // Navigate to Leave → Leave List.
  248 |     await navigationPage.gotoLeave();
  249 |     // Enter a partial employee name.
  250 |     const employeeName = await leavepage.selectFirstAvailableEmployee(
  251 |       leaveData.TC_LEAVE_115.partialEmployeeName,
  252 |     );
  253 | 
  254 |     await leavepage.searchButton.click();
  255 | 
  256 |     await expect(leavepage.loadingSpinner).toBeHidden();
  257 | 
  258 |     await expect(leavepage.employeeNameInput).toHaveValue(employeeName);
  259 | 
  260 |     await expect(
  261 |       leavepage.leaveRows.first().or(leavepage.noRecordsFound),
  262 |     ).toBeVisible({
  263 |       timeout: 15_000,
  264 |     });
  265 | 
  266 |     const rowCount = await leavepage.leaveRows.count();
  267 | 
  268 |     if (rowCount > 0) {
  269 |       for (let index = 0; index < rowCount; index++) {
  270 |         const employeeNameCell = leavepage.leaveRows
  271 |           .nth(index)
  272 |           .locator(".oxd-table-cell")
  273 |           .nth(1);
  274 | 
  275 |         await expect(employeeNameCell).toContainText(employeeName);
  276 |       }
  277 |     } else {
  278 |       await expect(leavepage.noRecordsFound).toBeVisible();
  279 |     }
  280 | 
```