# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Time\time.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_TIME_173 - Required validation should appear when viewing attendance without selecting an employee @negative @validation @attendance @regression
- Location: tests\Time\time.spec.ts:339:10

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 120000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

# Test source

```ts
  158 |       "xpath=ancestor::form",
  159 |     );
  160 | 
  161 |     this.attendanceViewButton = attendanceForm.getByRole("button", {
  162 |       name: "View",
  163 |       exact: true,
  164 |     });
  165 | 
  166 |     this.attendanceEmployeeValidation = this.attendanceEmployeeInput
  167 |       .locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]')
  168 |       .locator(".oxd-input-field-error-message");
  169 | 
  170 |     this.attendanceRows = page.locator(
  171 |       ".orangehrm-container .oxd-table-body .oxd-table-card",
  172 |     );
  173 | 
  174 |     // Project Report
  175 |     this.projectReportHeading = page.getByRole("heading", {
  176 |       name: "Project Report",
  177 |       exact: true,
  178 |     });
  179 | 
  180 |     const projectNameGroup = page.locator(".oxd-input-group").filter({
  181 |       has: page.locator("label").getByText("Project Name", {
  182 |         exact: true,
  183 |       }),
  184 |     });
  185 | 
  186 |     this.projectNameInput = projectNameGroup.locator("input");
  187 | 
  188 |     const projectFromDateGroup = page.locator(".oxd-input-group").filter({
  189 |       has: page.locator("label").getByText("From Date", {
  190 |         exact: true,
  191 |       }),
  192 |     });
  193 | 
  194 |     this.projectFromDateInput = projectFromDateGroup.locator("input");
  195 | 
  196 |     const projectToDateGroup = page.locator(".oxd-input-group").filter({
  197 |       has: page.locator("label").getByText("To Date", {
  198 |         exact: true,
  199 |       }),
  200 |     });
  201 | 
  202 |     this.projectToDateInput = projectToDateGroup.locator("input");
  203 | 
  204 |     this.projectReportViewButton = page.getByRole("button", {
  205 |       name: "View",
  206 |       exact: true,
  207 |     });
  208 |   }
  209 | 
  210 |   async gotoEmployeeTimesheets(): Promise<void> {
  211 |     await this.timesheetsMenu.click();
  212 | 
  213 |     const employeeTimesheetsLink = this.page.getByRole("menuitem", {
  214 |       name: "Employee Timesheets",
  215 |       exact: true,
  216 |     });
  217 | 
  218 |     await expect(employeeTimesheetsLink).toBeVisible();
  219 | 
  220 |     await employeeTimesheetsLink.click();
  221 | 
  222 |     await this.page.waitForURL(/\/time\/viewEmployeeTimesheet$/, {
  223 |       timeout: 30_000,
  224 |     });
  225 | 
  226 |     await expect(this.selectEmployeeHeading).toBeVisible();
  227 |   }
  228 | 
  229 |   async gotoMyTimesheet(): Promise<void> {
  230 |     await this.timesheetsMenu.click();
  231 | 
  232 |     const myTimesheetLink = this.page.getByRole("menuitem", {
  233 |       name: "My Timesheets",
  234 |       exact: true,
  235 |     });
  236 | 
  237 |     await expect(myTimesheetLink).toBeVisible();
  238 | 
  239 |     await myTimesheetLink.click();
  240 | 
  241 |     await this.page.waitForURL(/\/time\/viewMyTimesheet$/, {
  242 |       timeout: 30_000,
  243 |     });
  244 |   }
  245 | 
  246 |   async gotoEmployeeAttendanceRecords(): Promise<void> {
  247 |     await this.attendanceMenu.click();
  248 | 
  249 |     const employeeRecordsLink = this.page.getByRole("menuitem", {
  250 |       name: "Employee Records",
  251 |       exact: true,
  252 |     });
  253 | 
  254 |     await expect(employeeRecordsLink).toBeVisible();
  255 | 
  256 |     await employeeRecordsLink.click();
  257 | 
> 258 |     await this.page.waitForURL(/\/attendance\/viewAttendanceRecord$/, {
      |                     ^ Error: page.waitForURL: Test timeout of 120000ms exceeded.
  259 |       timeout: 30_000,
  260 |     });
  261 | 
  262 |     await expect(this.attendanceHeading).toBeVisible();
  263 |   }
  264 | 
  265 |   async gotoProjectReports(): Promise<void> {
  266 |     await this.reportsMenu.click();
  267 | 
  268 |     const projectReportsLink = this.page.getByRole("menuitem", {
  269 |       name: "Project Reports",
  270 |       exact: true,
  271 |     });
  272 | 
  273 |     await expect(projectReportsLink).toBeVisible();
  274 | 
  275 |     await projectReportsLink.click();
  276 | 
  277 |     await this.page.waitForURL(/\/time\/displayProjectReportCriteria$/, {
  278 |       timeout: 30_000,
  279 |     });
  280 | 
  281 |     await expect(this.projectReportHeading).toBeVisible();
  282 |   }
  283 | 
  284 |   async selectEmployeeFromAutocomplete(searchText: string): Promise<string> {
  285 |     await this.employeeNameInput.fill(searchText);
  286 | 
  287 |     await expect(this.employeeAutocompleteDropdown).toBeVisible({
  288 |       timeout: 15_000,
  289 |     });
  290 | 
  291 |     const validOptions = this.employeeAutocompleteOptions.filter({
  292 |       hasNotText: /Searching|No Records Found/i,
  293 |     });
  294 | 
  295 |     const optionCount = await validOptions.count();
  296 | 
  297 |     if (optionCount === 0) {
  298 |       throw new Error(`No employee was found for: ${searchText}`);
  299 |     }
  300 | 
  301 |     const firstOption = validOptions.first();
  302 | 
  303 |     const employeeName = (await firstOption.innerText()).trim();
  304 | 
  305 |     await firstOption.click();
  306 | 
  307 |     await expect(this.employeeNameInput).toHaveValue(employeeName);
  308 | 
  309 |     return employeeName;
  310 |   }
  311 | 
  312 |   async waitForLoadingToFinish(): Promise<void> {
  313 |     await expect(this.loadingSpinner).toBeHidden({
  314 |       timeout: 30_000,
  315 |     });
  316 |   }
  317 | }
  318 | 
```