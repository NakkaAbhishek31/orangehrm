# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Leave\leave.spec.ts >> Leaves - leaves for  Users >> TC_LEAVE_109 - Admin should navigate to the Leave List page @smoke @navigation @regression
- Location: tests\Leave\leave.spec.ts:40:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-switch-wrapper').filter({ hasText: 'Include Past Employees' }).locator('input[type="checkbox"]')
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.oxd-switch-wrapper').filter({ hasText: 'Include Past Employees' }).locator('input[type="checkbox"]')

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
  122 |       .locator("form")
  123 |       .locator(".oxd-input-field-error-message");
  124 | 
  125 |     this.toDateValidation = page
  126 |       .locator(".oxd-input-group")
  127 |       .filter({
  128 |         has: page.locator("label").getByText("To Date", {
  129 |           exact: true,
  130 |         }),
  131 |       })
  132 |       .locator(".oxd-input-field-error-message");
  133 | 
  134 |     this.dropdownOptions = page.locator(
  135 |       ".oxd-select-dropdown:visible " + ".oxd-select-option",
  136 |     );
  137 | 
  138 |     this.includePastEmployeesLabel = page
  139 |       .locator(".oxd-switch-wrapper")
  140 |       .filter({
  141 |         hasText: "Include Past Employees",
  142 |       })
  143 |       .locator(".oxd-checkbox-wrapper label");
  144 | 
  145 |     this.autocompleteOptions = page.locator(
  146 |       ".oxd-autocomplete-dropdown:visible " + ".oxd-autocomplete-option",
  147 |     );
  148 | 
  149 |     this.employeeNameValidation = page
  150 |       .locator(".oxd-input-group")
  151 |       .filter({
  152 |         has: page.locator("label").getByText("Employee Name", {
  153 |           exact: true,
  154 |         }),
  155 |       })
  156 |       .locator(".oxd-input-field-error-message");
  157 |       this.fromDateValidation = page
  158 |   .locator('.oxd-input-group')
  159 |   .filter({
  160 |     has: page
  161 |       .locator('label')
  162 |       .getByText('From Date', {
  163 |         exact: true,
  164 |       }),
  165 |   })
  166 |   .locator(
  167 |     '.oxd-input-field-error-message'
  168 |   );
  169 | 
  170 |  this.nextPageButton = page
  171 |   .locator(
  172 |     'button.oxd-pagination-page-item--previous-next'
  173 |   )
  174 |   .filter({
  175 |     has: page.locator(
  176 |       'i.bi-chevron-right'
  177 |     ),
  178 |   });
  179 | 
  180 | 
  181 |   this.leaveStatusField = page
  182 |   .locator('.oxd-input-group')
  183 |   .filter({
  184 |     has: page
  185 |       .locator('label')
  186 |       .getByText(
  187 |         'Show Leave with Status',
  188 |         { exact: true }
  189 |       ),
  190 |   });
  191 | 
  192 | this.leaveStatusDropdown =
  193 |   this.leaveStatusField.locator(
  194 |     '.oxd-select-text'
  195 |   );
  196 | 
  197 | this.previousPageButton = page
  198 |   .locator(
  199 |     'button.oxd-pagination-page-item--previous-next'
  200 |   )
  201 |   .filter({
  202 |     has: page.locator(
  203 |       'i.bi-chevron-left'
  204 |     ),
  205 |   });
  206 | 
  207 |   }
  208 | 
  209 |   async verifyLeaveListPage(): Promise<void> {
  210 |     await expect(this.leaveListHeading).toBeVisible();
  211 | 
  212 |     await expect(this.fromDateInput).toBeVisible();
  213 | 
  214 |     await expect(this.toDateInput).toBeVisible();
  215 | 
  216 |     await expect(this.leaveStatusDropdown).toBeVisible();
  217 | 
  218 |     await expect(this.employeeNameInput).toBeVisible();
  219 | 
  220 |     await expect(this.leaveTypeDropdown).toBeVisible();
  221 | 
> 222 |     await expect(this.includePastEmployeesCheckbox).toBeVisible();
      |                                                     ^ Error: expect(locator).toBeVisible() failed
  223 | 
  224 |     await expect(this.searchButton).toBeVisible();
  225 | 
  226 |     await expect(this.resetButton).toBeVisible();
  227 | 
  228 |     await expect(this.leaveTable).toBeVisible();
  229 |   }
  230 | 
  231 | async selectLeaveStatus(
  232 |   status: string
  233 | ): Promise<void> {
  234 |   await this.leaveStatusDropdown.click();
  235 | 
  236 |   const dropdown =
  237 |     this.page.locator(
  238 |       '.oxd-select-dropdown:visible'
  239 |     );
  240 | 
  241 |   await expect(dropdown).toBeVisible();
  242 | 
  243 |   const option = dropdown
  244 |     .locator('.oxd-select-option')
  245 |     .filter({
  246 |       hasText: new RegExp(
  247 |         `^\\s*${status}\\s*$`,
  248 |         'i'
  249 |       ),
  250 |     })
  251 |     .first();
  252 | 
  253 |   await expect(option).toBeVisible();
  254 | 
  255 |   await option.click();
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
  297 |     await expect(this.employeeNameInput).toHaveValue(employeeName);
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
```