# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Performance\performance.spec.ts >> Performance - Employee Reviews >> TC_PERFORMANCE_205 - Admin should reset Employee Review search filters @positive @filter @regression
- Location: tests\Performance\performance.spec.ts:286:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-select-dropdown:visible').locator('.oxd-select-option').getByText('Account Assistant', { exact: true })
Expected: visible
Timeout: 15000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('.oxd-select-dropdown:visible').locator('.oxd-select-option').getByText('Account Assistant', { exact: true })

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
- textbox "Type for hints...": ResetEmployee1787550717832
- text: Invalid Job Title -- Select -- 
- listbox:
  - option "-- Select --"
  - option "Accountant"
  - option "Administrative Assistant"
  - option "Automation Tester 1787550442273"
  - option "Automaton Tester"
  - option "Business Analyst"
  - option "Central Security Director"
  - option "Chief Executive Officer"
  - option "Chief Financial Officer"
  - option "Chief Technical Officer"
  - option "Content Specialist"
  - option "Customer Service Representative"
  - option "Customer Success Manager"
  - option "Cypress Job 1787544032764"
  - option "Cypress Job 1787544056730"
  - option "Database Administrator"
  - option "Finance Manager"
  - option "Financial Analyst"
  - option "Forward Quality Manager"
  - option "Future Tactics Associate"
  - option "Head of Support"
  - option "HR Associate"
  - option "HR Manager"
  - option "HR Officer"
  - option "Human Markets Orchestrator"
  - option "Internal Functionality Assistant"
  - option "IT Manager"
  - option "National Integration Designer"
  - option "Network Administrator"
  - option "Payroll Administrator"
  - option "Payroll Specialist"
  - option "Pre-Sales Coordinator"
  - option "Project Manager"
  - option "qa engineering"
  - option "QA Lead Kumkara"
  - option "QA Test Title"
  - option "qwer"
  - option "Recruitment Specialist"
  - option "Regional Division Associate"
  - option "RPA Developer"
  - option "rsjsrii"
  - option "Sales Executive"
  - option "Sales Representative"
  - option "Senior Developer QA"
  - option "Social Media Marketer"
  - option "Software Architect"
  - option "Software Developer"
  - option "Software Engineer"
  - option "Support Specialist"
  - option "VP - Client Services"
  - option "VP - Sales & Marketing"
- text: Sub Unit -- Select --  Include Current Employees Only  Review Status -- Select --  From Date
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
  153 |     // Scope this locator to the results container.
  154 |     // OrangeHRM may also show the same text in a toast.
  155 |     this.noRecordsFound = page
  156 |       .locator('.orangehrm-container')
  157 |       .getByText('No Records Found', {
  158 |         exact: true,
  159 |       });
  160 | 
  161 |     this.loadingSpinner = page.locator(
  162 |       '.oxd-loading-spinner'
  163 |     );
  164 | 
  165 |     this.autocompleteDropdown = page.locator(
  166 |   '.oxd-autocomplete-dropdown:visible'
  167 | );
  168 | 
  169 | this.autocompleteOptions =
  170 |   this.autocompleteDropdown.locator(
  171 |     '.oxd-autocomplete-option'
  172 |   );
  173 | 
  174 | this.autocompleteNoRecords =
  175 |   this.autocompleteDropdown.getByText(
  176 |     'No Records Found',
  177 |     {
  178 |       exact: true,
  179 |     }
  180 |   );
  181 | 
  182 | this.employeeNameValidation = page
  183 |   .locator('.oxd-input-group')
  184 |   .filter({
  185 |     has: page
  186 |       .locator('label')
  187 |       .getByText('Employee Name', {
  188 |         exact: true,
  189 |       }),
  190 |   })
  191 |   .locator(
  192 |     '.oxd-input-field-error-message'
  193 |   );
  194 |   }
  195 | 
  196 |   async gotoEmployeeReviews(): Promise<void> {
  197 |   await expect(
  198 |     this.manageReviewsMenu
  199 |   ).toBeVisible();
  200 | 
  201 |   await this.manageReviewsMenu.click();
  202 | 
  203 |   await expect(
  204 |     this.employeeReviewsMenuItem
  205 |   ).toBeVisible();
  206 | 
  207 |   await this.employeeReviewsMenuItem.click();
  208 | 
  209 |   await this.page.waitForURL(
  210 |     /\/performance\/searchEvaluatePerformanceReview$/,
  211 |     {
  212 |       timeout: 30_000,
  213 |     }
  214 |   );
  215 | 
  216 |   await expect(
  217 |     this.employeeReviewsHeading
  218 |   ).toBeVisible({
  219 |     timeout: 20_000,
  220 |   });
  221 | 
  222 |   await expect(
  223 |     this.employeeNameInput
  224 |   ).toBeVisible();
  225 | }
  226 | 
  227 | async selectDropdownOption(
  228 |   dropdown: Locator,
  229 |   optionText: string
  230 | ): Promise<void> {
  231 |   await expect(dropdown).toBeVisible();
  232 | 
  233 |   await dropdown.click();
  234 | 
  235 |   const visibleDropdown =
  236 |     this.page.locator(
  237 |       '.oxd-select-dropdown:visible'
  238 |     );
  239 | 
  240 |   await expect(
  241 |     visibleDropdown
  242 |   ).toBeVisible({
  243 |     timeout: 15_000,
  244 |   });
  245 | 
  246 |   const option =
  247 |     visibleDropdown
  248 |       .locator('.oxd-select-option')
  249 |       .getByText(optionText, {
  250 |         exact: true,
  251 |       });
  252 | 
> 253 |   await expect(option).toBeVisible({
      |                        ^ Error: expect(locator).toBeVisible() failed
  254 |     timeout: 15_000,
  255 |   });
  256 | 
  257 |   await option.click();
  258 | 
  259 |   await expect(dropdown).toContainText(
  260 |     optionText
  261 |   );
  262 | }
  263 | 
  264 | async selectEmployeeFromAutocomplete(
  265 |   searchText: string
  266 | ): Promise<string> {
  267 |   await expect(
  268 |     this.employeeNameInput
  269 |   ).toBeVisible();
  270 | 
  271 |   await this.employeeNameInput.fill(
  272 |     searchText
  273 |   );
  274 | 
  275 |   await expect(
  276 |     this.autocompleteDropdown
  277 |   ).toBeVisible({
  278 |     timeout: 20_000,
  279 |   });
  280 | 
  281 |   const employeeOption =
  282 |     this.autocompleteOptions
  283 |       .filter({
  284 |         hasNotText: 'No Records Found',
  285 |       })
  286 |       .first();
  287 | 
  288 |   await expect(
  289 |     employeeOption
  290 |   ).toBeVisible({
  291 |     timeout: 20_000,
  292 |   });
  293 | 
  294 |   const selectedEmployeeName = (
  295 |     await employeeOption.innerText()
  296 |   ).trim();
  297 | 
  298 |   await employeeOption.click();
  299 | 
  300 |   await expect(
  301 |     this.employeeNameInput
  302 |   ).toHaveValue(selectedEmployeeName);
  303 | 
  304 |   return selectedEmployeeName;
  305 | }
  306 | }
  307 | 
```