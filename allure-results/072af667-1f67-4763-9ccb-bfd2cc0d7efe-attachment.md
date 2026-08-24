# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Performance\performance.spec.ts >> Time - Timesheets, Attendance and Reports >> TC_PERFORMANCE_201 - Admin should navigate to the Employee Reviews page @smoke @navigation @regression
- Location: tests\Performance\performance.spec.ts:50:8

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Manage Reviews', { exact: true })
Expected: visible
Error: strict mode violation: getByText('Manage Reviews', { exact: true }) resolved to 2 elements:
    1) <h6 data-v-7b563373="" data-v-c286b6e5="" class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-level">Manage Reviews</h6> aka getByRole('heading', { name: '/ Manage Reviews' })
    2) <span class="oxd-topbar-body-nav-tab-item">…</span> aka getByLabel('Topbar Menu').getByText('Manage Reviews')

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for getByText('Manage Reviews', { exact: true })

```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - generic:
    - complementary [ref=f2e4]:
      - navigation "Sidepanel" [ref=f2e5]:
        - generic [ref=f2e6]:
          - link [ref=f2e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f2e9]
          - text: 
        - generic [ref=f2e10]:
          - generic [ref=f2e11]:
            - generic [ref=f2e12]:
              - textbox "Search" [ref=f2e15]
              - button "" [ref=f2e16] [cursor=pointer]
            - separator [ref=f2e18]
          - list [ref=f2e19]:
            - listitem [ref=f2e20]:
              - link "Admin" [ref=f2e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f2e25]:
              - link "PIM" [ref=f2e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f2e41]:
              - link "Leave" [ref=f2e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f2e46]:
              - link "Time" [ref=f2e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f2e54]:
              - link "Recruitment" [ref=f2e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f2e62]:
              - link "My Info" [ref=f2e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f2e70]:
              - link "Performance" [ref=f2e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f2e80]:
              - link "Dashboard" [ref=f2e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f2e85]:
              - link "Directory" [ref=f2e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f2e90]:
              - link "Maintenance" [ref=f2e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f2e96]:
              - link "Claim" [ref=f2e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f2e105]:
              - link "Buzz" [ref=f2e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f2e110]:
      - generic [ref=f2e111]:
        - generic [ref=f2e112]:
          - text: 
          - generic [ref=f2e113]:
            - heading "Performance" [level=6] [ref=f2e114]
            - heading "/ Manage Reviews" [level=6] [ref=f2e115]
        - link [ref=f2e117]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f2e118] [cursor=pointer]
        - list [ref=f2e124]:
          - listitem [ref=f2e125]:
            - generic [ref=f2e126] [cursor=pointer]:
              - img "profile picture" [ref=f2e127]
              - paragraph [ref=f2e128]: Arjun Rao
              - generic [ref=f2e129]: 
      - navigation "Topbar Menu" [ref=f2e131]:
        - list [ref=f2e132]:
          - listitem [ref=f2e133] [cursor=pointer]:
            - generic [ref=f2e134]:
              - text: Configure
              - generic [ref=f2e135]: 
          - listitem [ref=f2e136] [cursor=pointer]:
            - generic [ref=f2e137]:
              - text: Manage Reviews
              - generic [ref=f2e138]: 
          - listitem [ref=f2e139] [cursor=pointer]:
            - link "My Trackers" [ref=f2e140]:
              - /url: "#"
          - listitem [ref=f2e141] [cursor=pointer]:
            - link "Employee Trackers" [ref=f2e142]:
              - /url: "#"
          - button "" [ref=f2e144] [cursor=pointer]
  - generic [ref=f2e146]:
    - generic [ref=f2e148]:
      - generic [ref=f2e149]:
        - generic [ref=f2e150]:
          - heading "Employee Reviews" [level=5] [ref=f2e152]
          - button "" [ref=f2e155] [cursor=pointer]
        - separator [ref=f2e157]
        - generic [ref=f2e159]:
          - generic [ref=f2e160]:
            - generic [ref=f2e162]:
              - generic [ref=f2e163]: Employee Name
              - textbox "Type for hints..." [ref=f2e168]
            - generic [ref=f2e170]:
              - generic [ref=f2e171]: Job Title
              - generic [ref=f2e175] [cursor=pointer]:
                - generic [ref=f2e176]: "-- Select --"
                - generic [ref=f2e177]: 
            - generic [ref=f2e180]:
              - generic [ref=f2e181]: Sub Unit
              - generic [ref=f2e185] [cursor=pointer]:
                - generic [ref=f2e186]: "-- Select --"
                - generic [ref=f2e187]: 
            - generic [ref=f2e190]:
              - generic [ref=f2e191]: Include
              - generic [ref=f2e195] [cursor=pointer]:
                - generic [ref=f2e196]: Current Employees Only
                - generic [ref=f2e197]: 
            - generic [ref=f2e200]:
              - generic [ref=f2e201]: Review Status
              - generic [ref=f2e205] [cursor=pointer]:
                - generic [ref=f2e206]: "-- Select --"
                - generic [ref=f2e207]: 
            - generic [ref=f2e210]:
              - generic [ref=f2e211]: From Date
              - generic [ref=f2e215]:
                - textbox "mm-dd-yyyy" [ref=f2e216]: 01-01-2026
                - generic [ref=f2e217] [cursor=pointer]: 
            - generic [ref=f2e219]:
              - generic [ref=f2e220]: To Date
              - generic [ref=f2e224]:
                - textbox "mm-dd-yyyy" [ref=f2e225]: 12-31-2026
                - generic [ref=f2e226] [cursor=pointer]: 
          - separator [ref=f2e227]
          - generic [ref=f2e228]:
            - button "Reset" [ref=f2e229] [cursor=pointer]
            - button "Search" [ref=f2e230] [cursor=pointer]
      - table [ref=f2e233]
    - generic [ref=f2e238]:
      - paragraph [ref=f2e239]: OrangeHRM OS 5.9
      - paragraph [ref=f2e240]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f2e241] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  100 | 
  101 |     this.reviewStatusDropdown = searchForm
  102 |       .locator('.oxd-input-group')
  103 |       .filter({
  104 |         has: page
  105 |           .locator('label')
  106 |           .getByText('Review Status', {
  107 |             exact: true,
  108 |           }),
  109 |       })
  110 |       .locator('.oxd-select-text');
  111 | 
  112 |     const fromDateGroup = searchForm
  113 |       .locator('.oxd-input-group')
  114 |       .filter({
  115 |         has: page
  116 |           .locator('label')
  117 |           .getByText('From Date', {
  118 |             exact: true,
  119 |           }),
  120 |       });
  121 | 
  122 |     this.fromDateInput =
  123 |       fromDateGroup.locator('input');
  124 | 
  125 |     const toDateGroup = searchForm
  126 |       .locator('.oxd-input-group')
  127 |       .filter({
  128 |         has: page
  129 |           .locator('label')
  130 |           .getByText('To Date', {
  131 |             exact: true,
  132 |           }),
  133 |       });
  134 | 
  135 |     this.toDateInput =
  136 |       toDateGroup.locator('input');
  137 | 
  138 |     this.searchButton =
  139 |       searchForm.getByRole('button', {
  140 |         name: 'Search',
  141 |         exact: true,
  142 |       });
  143 | 
  144 |     this.resetButton =
  145 |       searchForm.getByRole('button', {
  146 |         name: 'Reset',
  147 |         exact: true,
  148 |       });
  149 | 
  150 |     this.reviewRows = page.locator(
  151 |       '.oxd-table-body .oxd-table-card'
  152 |     );
  153 | 
  154 |     // Scope this locator to the results container.
  155 |     // OrangeHRM may also show the same text in a toast.
  156 |     this.noRecordsFound = page
  157 |       .locator('.orangehrm-container')
  158 |       .getByText('No Records Found', {
  159 |         exact: true,
  160 |       });
  161 | 
  162 |     this.loadingSpinner = page.locator(
  163 |       '.oxd-loading-spinner'
  164 |     );
  165 | 
  166 |     this.autocompleteDropdown = page.locator(
  167 |   '.oxd-autocomplete-dropdown:visible'
  168 | );
  169 | 
  170 | this.autocompleteOptions =
  171 |   this.autocompleteDropdown.locator(
  172 |     '.oxd-autocomplete-option'
  173 |   );
  174 | 
  175 | this.autocompleteNoRecords =
  176 |   this.autocompleteDropdown.getByText(
  177 |     'No Records Found',
  178 |     {
  179 |       exact: true,
  180 |     }
  181 |   );
  182 | 
  183 | this.employeeNameValidation = page
  184 |   .locator('.oxd-input-group')
  185 |   .filter({
  186 |     has: page
  187 |       .locator('label')
  188 |       .getByText('Employee Name', {
  189 |         exact: true,
  190 |       }),
  191 |   })
  192 |   .locator(
  193 |     '.oxd-input-field-error-message'
  194 |   );
  195 |   }
  196 | 
  197 |   async gotoEmployeeReviews(): Promise<void> {
  198 |   await expect(
  199 |     this.manageReviewsMenu
> 200 |   ).toBeVisible();
      |     ^ Error: expect(locator).toBeVisible() failed
  201 | 
  202 |   await this.manageReviewsMenu.click();
  203 | 
  204 |   await expect(
  205 |     this.employeeReviewsMenuItem
  206 |   ).toBeVisible();
  207 | 
  208 |   await this.employeeReviewsMenuItem.click();
  209 | 
  210 |   await this.page.waitForURL(
  211 |     /\/performance\/searchEvaluatePerformanceReview$/,
  212 |     {
  213 |       timeout: 30_000,
  214 |     }
  215 |   );
  216 | 
  217 |   await expect(
  218 |     this.employeeReviewsHeading
  219 |   ).toBeVisible({
  220 |     timeout: 20_000,
  221 |   });
  222 | 
  223 |   await expect(
  224 |     this.employeeNameInput
  225 |   ).toBeVisible();
  226 | }
  227 | 
  228 | async selectDropdownOption(
  229 |   dropdown: Locator,
  230 |   optionText: string
  231 | ): Promise<void> {
  232 |   await expect(dropdown).toBeVisible();
  233 | 
  234 |   await dropdown.click();
  235 | 
  236 |   const visibleDropdown =
  237 |     this.page.locator(
  238 |       '.oxd-select-dropdown:visible'
  239 |     );
  240 | 
  241 |   await expect(
  242 |     visibleDropdown
  243 |   ).toBeVisible({
  244 |     timeout: 15_000,
  245 |   });
  246 | 
  247 |   const option =
  248 |     visibleDropdown
  249 |       .locator('.oxd-select-option')
  250 |       .getByText(optionText, {
  251 |         exact: true,
  252 |       });
  253 | 
  254 |   await expect(option).toBeVisible({
  255 |     timeout: 15_000,
  256 |   });
  257 | 
  258 |   await option.click();
  259 | 
  260 |   await expect(dropdown).toContainText(
  261 |     optionText
  262 |   );
  263 | }
  264 | 
  265 | async selectEmployeeFromAutocomplete(
  266 |   searchText: string
  267 | ): Promise<string> {
  268 |   await expect(
  269 |     this.employeeNameInput
  270 |   ).toBeVisible();
  271 | 
  272 |   await this.employeeNameInput.fill(
  273 |     searchText
  274 |   );
  275 | 
  276 |   await expect(
  277 |     this.autocompleteDropdown
  278 |   ).toBeVisible({
  279 |     timeout: 20_000,
  280 |   });
  281 | 
  282 |   const employeeOption =
  283 |     this.autocompleteOptions
  284 |       .filter({
  285 |         hasNotText: 'No Records Found',
  286 |       })
  287 |       .first();
  288 | 
  289 |   await expect(
  290 |     employeeOption
  291 |   ).toBeVisible({
  292 |     timeout: 20_000,
  293 |   });
  294 | 
  295 |   const selectedEmployeeName = (
  296 |     await employeeOption.innerText()
  297 |   ).trim();
  298 | 
  299 |   await employeeOption.click();
  300 | 
```