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
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Employee Attendance Records', exact: true })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for getByRole('heading', { name: 'Employee Attendance Records', exact: true })
  - Test timeout of 120000ms exceeded.

```

# Test source

```ts
  157 |       name: "View",
  158 |       exact: true,
  159 |     });
  160 | 
  161 |     this.attendanceEmployeeValidation = this.attendanceEmployeeInput
  162 |       .locator('xpath=ancestor::div[contains(@class,"oxd-input-group")]')
  163 |       .locator(".oxd-input-field-error-message");
  164 | 
  165 |     this.attendanceRows = page.locator(
  166 |       ".orangehrm-container .oxd-table-body .oxd-table-card",
  167 |     );
  168 | 
  169 |     // Project Report
  170 |     this.projectReportHeading = page.getByRole("heading", {
  171 |       name: "Project Report",
  172 |       exact: true,
  173 |     });
  174 | 
  175 |     const projectNameGroup = page.locator(".oxd-input-group").filter({
  176 |       has: page.locator("label").getByText("Project Name", {
  177 |         exact: true,
  178 |       }),
  179 |     });
  180 | 
  181 |     this.projectNameInput = projectNameGroup.locator("input");
  182 | 
  183 |     const projectFromDateGroup = page.locator(".oxd-input-group").filter({
  184 |       has: page.locator("label").getByText("From Date", {
  185 |         exact: true,
  186 |       }),
  187 |     });
  188 | 
  189 |     this.projectFromDateInput = projectFromDateGroup.locator("input");
  190 | 
  191 |     const projectToDateGroup = page.locator(".oxd-input-group").filter({
  192 |       has: page.locator("label").getByText("To Date", {
  193 |         exact: true,
  194 |       }),
  195 |     });
  196 | 
  197 |     this.projectToDateInput = projectToDateGroup.locator("input");
  198 | 
  199 |     this.projectReportViewButton = page.getByRole("button", {
  200 |       name: "View",
  201 |       exact: true,
  202 |     });
  203 |   }
  204 | 
  205 |   async gotoEmployeeTimesheets(): Promise<void> {
  206 |     await this.timesheetsMenu.click();
  207 | 
  208 |     const employeeTimesheetsLink = this.page.getByRole("menuitem", {
  209 |       name: "Employee Timesheets",
  210 |       exact: true,
  211 |     });
  212 | 
  213 |     await expect(employeeTimesheetsLink).toBeVisible();
  214 | 
  215 |     await employeeTimesheetsLink.click();
  216 | 
  217 |     await this.page.waitForURL(/\/time\/viewEmployeeTimesheet$/, {
  218 |       timeout: 30_000,
  219 |     });
  220 | 
  221 |     await expect(this.selectEmployeeHeading).toBeVisible();
  222 |   }
  223 | 
  224 |   async gotoMyTimesheet(): Promise<void> {
  225 |     await this.timesheetsMenu.click();
  226 | 
  227 |     const myTimesheetLink = this.page.getByRole("menuitem", {
  228 |       name: "My Timesheets",
  229 |       exact: true,
  230 |     });
  231 | 
  232 |     await expect(myTimesheetLink).toBeVisible();
  233 | 
  234 |     await myTimesheetLink.click();
  235 | 
  236 |     await this.page.waitForURL(/\/time\/viewMyTimesheet$/, {
  237 |       timeout: 30_000,
  238 |     });
  239 |   }
  240 | 
  241 |   async gotoEmployeeAttendanceRecords(): Promise<void> {
  242 |     await this.attendanceMenu.click();
  243 | 
  244 |     const employeeRecordsLink = this.page.getByRole("menuitem", {
  245 |       name: "Employee Records",
  246 |       exact: true,
  247 |     });
  248 | 
  249 |     await expect(employeeRecordsLink).toBeVisible();
  250 | 
  251 |     await employeeRecordsLink.click();
  252 | 
  253 |     await this.page.waitForURL(/\/attendance\/viewAttendanceRecord$/, {
  254 |       timeout: 30_000,
  255 |     });
  256 | 
> 257 |     await expect(this.attendanceHeading).toBeVisible();
      |                                          ^ Error: expect(locator).toBeVisible() failed
  258 |   }
  259 | 
  260 |   async gotoProjectReports(): Promise<void> {
  261 |     await this.reportsMenu.click();
  262 | 
  263 |     const projectReportsLink = this.page.getByRole("menuitem", {
  264 |       name: "Project Reports",
  265 |       exact: true,
  266 |     });
  267 | 
  268 |     await expect(projectReportsLink).toBeVisible();
  269 | 
  270 |     await projectReportsLink.click();
  271 | 
  272 |     await this.page.waitForURL(/\/time\/displayProjectReportCriteria$/, {
  273 |       timeout: 30_000,
  274 |     });
  275 | 
  276 |     await expect(this.projectReportHeading).toBeVisible();
  277 |   }
  278 | 
  279 |   async selectEmployeeFromAutocomplete(searchText: string): Promise<string> {
  280 |     await this.employeeNameInput.fill(searchText);
  281 | 
  282 |     await expect(this.employeeAutocompleteDropdown).toBeVisible({
  283 |       timeout: 15_000,
  284 |     });
  285 | 
  286 |     const validOptions = this.employeeAutocompleteOptions.filter({
  287 |       hasNotText: /Searching|No Records Found/i,
  288 |     });
  289 | 
  290 |     const optionCount = await validOptions.count();
  291 | 
  292 |     if (optionCount === 0) {
  293 |       throw new Error(`No employee was found for: ${searchText}`);
  294 |     }
  295 | 
  296 |     const firstOption = validOptions.first();
  297 | 
  298 |     const employeeName = (await firstOption.innerText()).trim();
  299 | 
  300 |     await firstOption.click();
  301 | 
  302 |     await expect(this.employeeNameInput).toHaveValue(employeeName);
  303 | 
  304 |     return employeeName;
  305 |   }
  306 | 
  307 |   async waitForLoadingToFinish(): Promise<void> {
  308 |     await expect(this.loadingSpinner).toBeHidden({
  309 |       timeout: 30_000,
  310 |     });
  311 |   }
  312 | }
  313 | 
```