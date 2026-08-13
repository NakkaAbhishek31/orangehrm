# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_125 - Admin should filter Leave List by Scheduled status @positive @filter @regression
- Location: tests\Leave\leave.spec.ts:671:8

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-input-group').filter({ has: locator('label').getByText('Show Leave with Status', { exact: true }) }).locator('.oxd-select-text-selected').filter({ hasText: 'Scheduled' })
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: locator('label').getByText('Show Leave with Status', { exact: true }) }).locator('.oxd-select-text-selected').filter({ hasText: 'Scheduled' })

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
      - paragraph: krish gandhi
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
- text:  Show Leave with Status* -- Select --  Pending Approval  Scheduled  Leave Type -- Select --  Employee Name
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
  152 |       ".oxd-autocomplete-dropdown:visible " + ".oxd-autocomplete-option",
  153 |     );
  154 | 
  155 |     this.employeeNameValidation = page
  156 |       .locator(".oxd-input-group")
  157 |       .filter({
  158 |         has: page.locator("label").getByText("Employee Name", {
  159 |           exact: true,
  160 |         }),
  161 |       })
  162 |       .locator(".oxd-input-field-error-message");
  163 |       this.fromDateValidation = page
  164 |   .locator('.oxd-input-group')
  165 |   .filter({
  166 |     has: page
  167 |       .locator('label')
  168 |       .getByText('From Date', {
  169 |         exact: true,
  170 |       }),
  171 |   })
  172 |   .locator(
  173 |     '.oxd-input-field-error-message'
  174 |   );
  175 | 
  176 |  this.nextPageButton = page
  177 |   .locator(
  178 |     'button.oxd-pagination-page-item--previous-next'
  179 |   )
  180 |   .filter({
  181 |     has: page.locator(
  182 |       'i.bi-chevron-right'
  183 |     ),
  184 |   });
  185 | 
  186 | this.previousPageButton = page
  187 |   .locator(
  188 |     'button.oxd-pagination-page-item--previous-next'
  189 |   )
  190 |   .filter({
  191 |     has: page.locator(
  192 |       'i.bi-chevron-left'
  193 |     ),
  194 |   });
  195 | 
  196 |   }
  197 | 
  198 |   async verifyLeaveListPage(): Promise<void> {
  199 |     await expect(this.leaveListHeading).toBeVisible();
  200 | 
  201 |     await expect(this.fromDateInput).toBeVisible();
  202 | 
  203 |     await expect(this.toDateInput).toBeVisible();
  204 | 
  205 |     await expect(this.leaveStatusDropdown).toBeVisible();
  206 | 
  207 |     await expect(this.employeeNameInput).toBeVisible();
  208 | 
  209 |     await expect(this.leaveTypeDropdown).toBeVisible();
  210 | 
  211 |     await expect(this.includePastEmployeesCheckbox).toBeVisible();
  212 | 
  213 |     await expect(this.searchButton).toBeVisible();
  214 | 
  215 |     await expect(this.resetButton).toBeVisible();
  216 | 
  217 |     await expect(this.leaveTable).toBeVisible();
  218 |   }
  219 | 
  220 | async selectLeaveStatus(
  221 |   status: string
  222 | ): Promise<void> {
  223 |   await this.leaveStatusDropdown.click();
  224 | 
  225 |   const visibleDropdown =
  226 |     this.page.locator(
  227 |       '.oxd-select-dropdown:visible'
  228 |     );
  229 | 
  230 |   await expect(
  231 |     visibleDropdown
  232 |   ).toBeVisible();
  233 | 
  234 |   const option =
  235 |     visibleDropdown
  236 |       .locator('.oxd-select-option')
  237 |       .filter({
  238 |         hasText: new RegExp(
  239 |           `^${status}$`,
  240 |           'i'
  241 |         ),
  242 |       });
  243 | 
  244 |   await expect(option).toBeVisible();
  245 | 
  246 |   await option.click();
  247 | 
  248 |   await expect(
  249 |     this.selectedLeaveStatuses.filter({
  250 |       hasText: status,
  251 |     })
> 252 |   ).toBeVisible();
      |     ^ Error: expect(locator).toBeVisible() failed
  253 | }
  254 |   async setIncludePastEmployees(shouldInclude: boolean): Promise<void> {
  255 |     const isChecked = await this.includePastEmployeesCheckbox.isChecked();
  256 | 
  257 |     if (isChecked !== shouldInclude) {
  258 |       await this.includePastEmployeesLabel.click();
  259 |     }
  260 | 
  261 |     if (shouldInclude) {
  262 |       await expect(this.includePastEmployeesCheckbox).toBeChecked();
  263 |     } else {
  264 |       await expect(this.includePastEmployeesCheckbox).not.toBeChecked();
  265 |     }
  266 |   }
  267 | 
  268 |   async selectFirstAvailableEmployee(partialName: string): Promise<string> {
  269 |     await this.employeeNameInput.fill(partialName);
  270 | 
  271 |     const validOptions = this.autocompleteOptions.filter({
  272 |       hasNotText: /Searching|No Records Found/i,
  273 |     });
  274 | 
  275 |     await expect(validOptions.first()).toBeVisible({
  276 |       timeout: 15_000,
  277 |     });
  278 | 
  279 |     const firstEmployeeOption = validOptions.first();
  280 | 
  281 |     const employeeName = (await firstEmployeeOption.innerText()).trim();
  282 | 
  283 |     await firstEmployeeOption.click();
  284 | 
  285 |     await expect(this.employeeNameInput).toHaveValue(employeeName);
  286 | 
  287 |     return employeeName;
  288 |   }
  289 | 
  290 |   async selectFirstAvailableLeaveType(): Promise<string> {
  291 |     await this.leaveTypeDropdown.click();
  292 | 
  293 |     await expect(this.dropdownOptions.first()).toBeVisible();
  294 | 
  295 |     const optionCount = await this.dropdownOptions.count();
  296 | 
  297 |     expect(optionCount).toBeGreaterThan(1);
  298 | 
  299 |     const firstLeaveTypeOption = this.dropdownOptions.nth(1);
  300 | 
  301 |     const leaveType = (await firstLeaveTypeOption.innerText()).trim();
  302 | 
  303 |     await firstLeaveTypeOption.click();
  304 | 
  305 |     await expect(this.leaveTypeDropdown).toContainText(leaveType);
  306 | 
  307 |     return leaveType;
  308 |   }
  309 | 
  310 |   async removeSelectedLeaveStatus(
  311 |   status: string
  312 | ): Promise<void> {
  313 |   const selectedStatus =
  314 |     this.leaveStatusDropdown.locator(
  315 |       '.oxd-select-text-selected'
  316 |     ).filter({
  317 |       hasText: status,
  318 |     });
  319 | 
  320 |   await expect(
  321 |     selectedStatus
  322 |   ).toBeVisible();
  323 | 
  324 |   await selectedStatus
  325 |     .locator('.oxd-select-text--close')
  326 |     .click();
  327 | 
  328 |   await expect(
  329 |     selectedStatus
  330 |   ).toHaveCount(0);
  331 | }
  332 | 
  333 | async getVisibleLeaveRecords():
  334 | Promise<string[]> {
  335 |   await expect(
  336 |     this.loadingSpinner
  337 |   ).toBeHidden();
  338 | 
  339 |   return this.leaveRows.allInnerTexts();
  340 | }
  341 | 
  342 | }
  343 | 
```