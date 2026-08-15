# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_121 - Admin should filter Leave List using employee name and leave status @positive @filter @autocomplete @regression
- Location: tests\Leave\leave.spec.ts:495:7

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('.oxd-input-group').filter({ has: locator('label').getByText('Employee Name', { exact: true }) }).locator('input')
Expected: "Ranga Akunuri"
Received: "Ranga  Akunuri"
Timeout:  20000ms

Call log:
  - Expect "toHaveValue" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('Employee Name', { exact: true }) }).locator('input')
    43 × locator resolved to <input data-v-75e744cd="" placeholder="Type for hints..."/>
       - unexpected value "Ranga  Akunuri"

```

```yaml
- textbox "Type for hints...": Ranga Akunuri
```

# Test source

```ts
  197 |   .locator(
  198 |     'button.oxd-pagination-page-item--previous-next'
  199 |   )
  200 |   .filter({
  201 |     has: page.locator(
  202 |       'i.bi-chevron-left'
  203 |     ),
  204 |   });
  205 | 
  206 |   }
  207 | 
  208 |   async verifyLeaveListPage(): Promise<void> {
  209 |     await expect(this.leaveListHeading).toBeVisible();
  210 | 
  211 |     await expect(this.fromDateInput).toBeVisible();
  212 | 
  213 |     await expect(this.toDateInput).toBeVisible();
  214 | 
  215 |     await expect(this.leaveStatusDropdown).toBeVisible();
  216 | 
  217 |     await expect(this.employeeNameInput).toBeVisible();
  218 | 
  219 |     await expect(this.leaveTypeDropdown).toBeVisible();
  220 | 
  221 |     await expect(this.includePastEmployeesCheckbox).toBeVisible();
  222 | 
  223 |     await expect(this.searchButton).toBeVisible();
  224 | 
  225 |     await expect(this.resetButton).toBeVisible();
  226 | 
  227 |     await expect(this.leaveTable).toBeVisible();
  228 |   }
  229 | 
  230 | async selectLeaveStatus(
  231 |   status: string
  232 | ): Promise<void> {
  233 |   await this.leaveStatusDropdown.click();
  234 | 
  235 |   const dropdown =
  236 |     this.page.locator(
  237 |       '.oxd-select-dropdown:visible'
  238 |     );
  239 | 
  240 |   await expect(dropdown).toBeVisible();
  241 | 
  242 |   const option = dropdown
  243 |     .locator('.oxd-select-option')
  244 |     .filter({
  245 |       hasText: new RegExp(
  246 |         `^\\s*${status}\\s*$`,
  247 |         'i'
  248 |       ),
  249 |     })
  250 |     .first();
  251 | 
  252 |   await expect(option).toBeVisible();
  253 | 
  254 |   await option.click();
  255 |   await this.page.keyboard.press("Escape");
  256 | 
  257 |   await expect(
  258 |     this.leaveStatusField.getByText(
  259 |       status,
  260 |       { exact: true }
  261 |     )
  262 |   ).toBeVisible({
  263 |     timeout: 10_000,
  264 |   });
  265 | }
  266 |   async setIncludePastEmployees(shouldInclude: boolean): Promise<void> {
  267 |     const isChecked = await this.includePastEmployeesCheckbox.isChecked();
  268 | 
  269 |     if (isChecked !== shouldInclude) {
  270 |       await this.includePastEmployeesLabel.click();
  271 |     }
  272 | 
  273 |     if (shouldInclude) {
  274 |       await expect(this.includePastEmployeesCheckbox).toBeChecked();
  275 |     } else {
  276 |       await expect(this.includePastEmployeesCheckbox).not.toBeChecked();
  277 |     }
  278 |   }
  279 | 
  280 |   async selectFirstAvailableEmployee(partialName: string): Promise<string> {
  281 |     await this.employeeNameInput.fill(partialName);
  282 | 
  283 |     const validOptions = this.autocompleteOptions.filter({
  284 |       hasNotText: /Searching|No Records Found/i,
  285 |     });
  286 | 
  287 |     await expect(validOptions.first()).toBeVisible({
  288 |       timeout: 15_000,
  289 |     });
  290 | 
  291 |     const firstEmployeeOption = validOptions.first();
  292 | 
  293 |     const employeeName = (await firstEmployeeOption.innerText()).trim();
  294 | 
  295 |     await firstEmployeeOption.click();
  296 | 
> 297 |     await expect(this.employeeNameInput).toHaveValue(employeeName);
      |                                          ^ Error: expect(locator).toHaveValue(expected) failed
  298 | 
  299 |     return employeeName;
  300 |   }
  301 | 
  302 |   async selectFirstAvailableLeaveType(): Promise<string> {
  303 |     await this.leaveTypeDropdown.click();
  304 | 
  305 |     await expect(this.dropdownOptions.first()).toBeVisible();
  306 | 
  307 |     const leaveTypeOptions = this.dropdownOptions.filter({
  308 |       hasNotText: /^(-- Select --|No Records Found)$/,
  309 |     });
  310 | 
  311 |     if ((await leaveTypeOptions.count()) === 0) {
  312 |       await this.page.keyboard.press("Escape");
  313 |       return "-- Select --";
  314 |     }
  315 | 
  316 |     const firstLeaveTypeOption = leaveTypeOptions.first();
  317 | 
  318 |     const leaveType = (await firstLeaveTypeOption.innerText()).trim();
  319 | 
  320 |     await firstLeaveTypeOption.click();
  321 | 
  322 |     await expect(this.leaveTypeDropdown).toContainText(leaveType);
  323 | 
  324 |     return leaveType;
  325 |   }
  326 | 
  327 | //   async removeSelectedLeaveStatus(
  328 | //   status: string
  329 | // ): Promise<void> {
  330 | //   const selectedStatus =
  331 | //     this.leaveStatusDropdown.locator(
  332 | //       '.oxd-select-text-selected'
  333 | //     ).filter({
  334 | //       hasText: status,
  335 | //     });
  336 | 
  337 | //   await expect(
  338 | //     selectedStatus
  339 | //   ).toBeVisible();
  340 | 
  341 | //   await selectedStatus
  342 | //     .locator('.oxd-select-text--close')
  343 | //     .click();
  344 | 
  345 | //   await expect(
  346 | //     selectedStatus
  347 | //   ).toHaveCount(0);
  348 | // }
  349 | 
  350 | async getVisibleLeaveRecords():
  351 | Promise<string[]> {
  352 |   await expect(
  353 |     this.loadingSpinner
  354 |   ).toBeHidden();
  355 | 
  356 |   return this.leaveRows.allInnerTexts();
  357 | }
  358 | 
  359 | async waitForDefaultDateRange(): Promise<{
  360 |   fromDate: string;
  361 |   toDate: string;
  362 | }> {
  363 |   await expect(
  364 |     this.fromDateInput
  365 |   ).toBeVisible();
  366 | 
  367 |   await expect(
  368 |     this.toDateInput
  369 |   ).toBeVisible();
  370 | 
  371 |   await expect
  372 |     .poll(
  373 |       async () =>
  374 |         (
  375 |           await this.fromDateInput
  376 |             .inputValue()
  377 |         ).trim(),
  378 |       {
  379 |         timeout: 20_000,
  380 |         message:
  381 |           'Waiting for From Date to be populated',
  382 |       }
  383 |     )
  384 |     .not.toBe('');
  385 | 
  386 |   await expect
  387 |     .poll(
  388 |       async () =>
  389 |         (
  390 |           await this.toDateInput
  391 |             .inputValue()
  392 |         ).trim(),
  393 |       {
  394 |         timeout: 20_000,
  395 |         message:
  396 |           'Waiting for To Date to be populated',
  397 |       }
```