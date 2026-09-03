# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_125 - Admin should filter Leave List by Scheduled status @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:661:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-select-dropdown:visible').locator('.oxd-select-option').filter({ hasText: /^\s*Pending Approval (1.00)\s*$/i }).first()
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.oxd-select-dropdown:visible').locator('.oxd-select-option').filter({ hasText: /^\s*Pending Approval (1.00)\s*$/i }).first()

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
- text:  Show Leave with Status* -- Select -- 
- listbox:
  - option "Rejected"
  - option "Cancelled"
  - option "Pending Approval"
  - option "Scheduled"
  - option "Taken"
- text: Required Leave Type -- Select --  Employee Name
- textbox "Type for hints..."
- text: Sub Unit -- Select -- 
- paragraph: Include Past Employees
- checkbox
- separator
- paragraph: "* Required"
- button "Reset"
- button "Search"
- text: No Records Found
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
  167 |   })
  168 |   .locator(
  169 |     '.oxd-input-field-error-message'
  170 |   );
  171 | 
  172 |  this.nextPageButton = page
  173 |   .locator(
  174 |     'button.oxd-pagination-page-item--previous-next'
  175 |   )
  176 |   .filter({
  177 |     has: page.locator(
  178 |       'i.bi-chevron-right'
  179 |     ),
  180 |   });
  181 | 
  182 | 
  183 |   this.leaveStatusField = page
  184 |   .locator('.oxd-input-group')
  185 |   .filter({
  186 |     has: page
  187 |       .locator('label')
  188 |       .getByText(
  189 |         'Show Leave with Status',
  190 |         { exact: true }
  191 |       ),
  192 |   });
  193 | 
  194 | this.leaveStatusDropdown =
  195 |   this.leaveStatusField.locator(
  196 |     '.oxd-select-text'
  197 |   );
  198 | 
  199 | this.previousPageButton = page
  200 |   .locator(
  201 |     'button.oxd-pagination-page-item--previous-next'
  202 |   )
  203 |   .filter({
  204 |     has: page.locator(
  205 |       'i.bi-chevron-left'
  206 |     ),
  207 |   });
  208 | 
  209 |   }
  210 | 
  211 |   async verifyLeaveListPage(): Promise<void> {
  212 |     await expect(this.leaveListHeading).toBeVisible();
  213 | 
  214 |     await expect(this.fromDateInput).toBeVisible();
  215 | 
  216 |     await expect(this.toDateInput).toBeVisible();
  217 | 
  218 |     await expect(this.leaveStatusDropdown).toBeVisible();
  219 | 
  220 |     await expect(this.employeeNameInput).toBeVisible();
  221 | 
  222 |     await expect(this.leaveTypeDropdown).toBeVisible();
  223 | 
  224 |     await expect(this.includePastEmployeesCheckbox).toBeVisible();
  225 | 
  226 |     await expect(this.searchButton).toBeVisible();
  227 | 
  228 |     await expect(this.resetButton).toBeVisible();
  229 | 
  230 |     await expect(this.leaveTable).toBeVisible();
  231 |   }
  232 | 
  233 | async selectLeaveStatus(
  234 |   status: string
  235 | ): Promise<void> {
  236 |   if (!this.leaveStatusSelectionInitialized) {
  237 |     const selectedStatusRemoveButtons = this.leaveStatusField.locator(
  238 |       "i.bi-x.--clear",
  239 |     );
  240 | 
  241 |     while ((await selectedStatusRemoveButtons.count()) > 0) {
  242 |       await selectedStatusRemoveButtons.first().click();
  243 |     }
  244 | 
  245 |     this.leaveStatusSelectionInitialized = true;
  246 |   }
  247 | 
  248 |   await this.leaveStatusDropdown.click();
  249 | 
  250 |   const dropdown =
  251 |     this.page.locator(
  252 |       '.oxd-select-dropdown:visible'
  253 |     );
  254 | 
  255 |   await expect(dropdown).toBeVisible();
  256 | 
  257 |   const option = dropdown
  258 |     .locator('.oxd-select-option')
  259 |     .filter({
  260 |       hasText: new RegExp(
  261 |         `^\\s*${status}\\s*$`,
  262 |         'i'
  263 |       ),
  264 |     })
  265 |     .first();
  266 | 
> 267 |   await expect(option).toBeVisible();
      |                        ^ Error: expect(locator).toBeVisible() failed
  268 | 
  269 |   await option.click();
  270 |   await this.page.keyboard.press("Escape");
  271 | 
  272 |   await expect(
  273 |     this.leaveStatusField.getByText(
  274 |       status,
  275 |       { exact: true }
  276 |     )
  277 |   ).toBeVisible({
  278 |     timeout: 10_000,
  279 |   });
  280 | }
  281 |   async setIncludePastEmployees(shouldInclude: boolean): Promise<void> {
  282 |     const isChecked = await this.includePastEmployeesCheckbox.isChecked();
  283 | 
  284 |     if (isChecked !== shouldInclude) {
  285 |       await this.includePastEmployeesLabel.click();
  286 |     }
  287 | 
  288 |     if (shouldInclude) {
  289 |       await expect(this.includePastEmployeesCheckbox).toBeChecked();
  290 |     } else {
  291 |       await expect(this.includePastEmployeesCheckbox).not.toBeChecked();
  292 |     }
  293 |   }
  294 | 
  295 |   async selectFirstAvailableEmployee(partialName: string): Promise<string> {
  296 |     await this.employeeNameInput.fill(partialName);
  297 | 
  298 |     const validOptions = this.autocompleteOptions.filter({
  299 |       hasNotText: /Searching|No Records Found/i,
  300 |     });
  301 | 
  302 |     await expect(validOptions.first()).toBeVisible({
  303 |       timeout: 15_000,
  304 |     });
  305 | 
  306 |     const firstEmployeeOption = validOptions.first();
  307 | 
  308 |     const employeeName = (await firstEmployeeOption.innerText()).trim();
  309 | 
  310 |     await firstEmployeeOption.click();
  311 | 
  312 |     await expect(this.employeeNameInput).toHaveValue(
  313 |       new RegExp(employeeName.trim().split(/\s+/).join("\\s+")),
  314 |     );
  315 | 
  316 |     return employeeName;
  317 |   }
  318 | 
  319 |   async selectFirstAvailableLeaveType(): Promise<string> {
  320 |     await this.leaveTypeDropdown.click();
  321 | 
  322 |     await expect(this.dropdownOptions.first()).toBeVisible();
  323 | 
  324 |     const leaveTypeOptions = this.dropdownOptions.filter({
  325 |       hasNotText: /^(-- Select --|No Records Found)$/,
  326 |     });
  327 | 
  328 |     if ((await leaveTypeOptions.count()) === 0) {
  329 |       await this.page.keyboard.press("Escape");
  330 |       return "-- Select --";
  331 |     }
  332 | 
  333 |     const firstLeaveTypeOption = leaveTypeOptions.first();
  334 | 
  335 |     const leaveType = (await firstLeaveTypeOption.innerText()).trim();
  336 | 
  337 |     await firstLeaveTypeOption.click();
  338 | 
  339 |     await expect(this.leaveTypeDropdown).toContainText(leaveType);
  340 | 
  341 |     return leaveType;
  342 |   }
  343 | 
  344 | //   async removeSelectedLeaveStatus(
  345 | //   status: string
  346 | // ): Promise<void> {
  347 | //   const selectedStatus =
  348 | //     this.leaveStatusDropdown.locator(
  349 | //       '.oxd-select-text-selected'
  350 | //     ).filter({
  351 | //       hasText: status,
  352 | //     });
  353 | 
  354 | //   await expect(
  355 | //     selectedStatus
  356 | //   ).toBeVisible();
  357 | 
  358 | //   await selectedStatus
  359 | //     .locator('.oxd-select-text--close')
  360 | //     .click();
  361 | 
  362 | //   await expect(
  363 | //     selectedStatus
  364 | //   ).toHaveCount(0);
  365 | // }
  366 | 
  367 | async getVisibleLeaveRecords():
```