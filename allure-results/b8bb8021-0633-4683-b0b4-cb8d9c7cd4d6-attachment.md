# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Performance\performance.spec.ts >> Performance - Employee Reviews >> TC_PERFORMANCE_209 - Reset should restore the default review date range @positive @reset @date @regression
- Location: tests\Performance\performance.spec.ts:347:7

# Error details

```
Test timeout of 120000ms exceeded.
```

```
TimeoutError: locator.click: Timeout 70000ms exceeded.
Call log:
  - waiting for locator('.oxd-dropdown-menu:visible').getByText('Employee Reviews', { exact: true })
    - locator resolved to <a href="#" role="menuitem" class="oxd-topbar-body-nav-tab-link">Employee Reviews</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not stable
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - click action done
    - waiting for scheduled navigations to finish
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/performance/searchEvaluatePerformanceReview#"

```

# Test source

```ts
  106 |             exact: true,
  107 |           }),
  108 |       })
  109 |       .locator('.oxd-select-text');
  110 | 
  111 |     const fromDateGroup = searchForm
  112 |       .locator('.oxd-input-group')
  113 |       .filter({
  114 |         has: page
  115 |           .locator('label')
  116 |           .getByText('From Date', {
  117 |             exact: true,
  118 |           }),
  119 |       });
  120 | 
  121 |     this.fromDateInput =
  122 |       fromDateGroup.locator('input');
  123 | 
  124 |     const toDateGroup = searchForm
  125 |       .locator('.oxd-input-group')
  126 |       .filter({
  127 |         has: page
  128 |           .locator('label')
  129 |           .getByText('To Date', {
  130 |             exact: true,
  131 |           }),
  132 |       });
  133 | 
  134 |     this.toDateInput =
  135 |       toDateGroup.locator('input');
  136 | 
  137 |     this.searchButton =
  138 |       searchForm.getByRole('button', {
  139 |         name: 'Search',
  140 |         exact: true,
  141 |       });
  142 | 
  143 |     this.resetButton =
  144 |       searchForm.getByRole('button', {
  145 |         name: 'Reset',
  146 |         exact: true,
  147 |       });
  148 | 
  149 |     this.reviewRows = page.locator(
  150 |       '.oxd-table-body .oxd-table-card'
  151 |     );
  152 | 
  153 |     this.noRecordsFound = page
  154 |       .getByText('No Records Found', {
  155 |         exact: true,
  156 |       })
  157 |       .filter({ visible: true })
  158 |       .first();
  159 | 
  160 |     this.loadingSpinner = page.locator(
  161 |       '.oxd-loading-spinner'
  162 |     );
  163 | 
  164 |     this.autocompleteDropdown = page.locator(
  165 |   '.oxd-autocomplete-dropdown:visible'
  166 | );
  167 | 
  168 | this.autocompleteOptions =
  169 |   this.autocompleteDropdown.locator(
  170 |     '.oxd-autocomplete-option'
  171 |   );
  172 | 
  173 | this.autocompleteNoRecords =
  174 |   this.autocompleteDropdown.getByText(
  175 |     'No Records Found',
  176 |     {
  177 |       exact: true,
  178 |     }
  179 |   );
  180 | 
  181 | this.employeeNameValidation = page
  182 |   .locator('.oxd-input-group')
  183 |   .filter({
  184 |     has: page
  185 |       .locator('label')
  186 |       .getByText('Employee Name', {
  187 |         exact: true,
  188 |       }),
  189 |   })
  190 |   .locator(
  191 |     '.oxd-input-field-error-message'
  192 |   );
  193 |   }
  194 | 
  195 |   async gotoEmployeeReviews(): Promise<void> {
  196 |   await expect(
  197 |     this.manageReviewsMenu
  198 |   ).toBeVisible();
  199 | 
  200 |   await this.manageReviewsMenu.click();
  201 | 
  202 |   await expect(
  203 |     this.employeeReviewsMenuItem
  204 |   ).toBeVisible();
  205 | 
> 206 |   await this.employeeReviewsMenuItem.click();
      |                                      ^ TimeoutError: locator.click: Timeout 70000ms exceeded.
  207 | 
  208 |   await this.page.waitForURL(
  209 |     /\/performance\/searchEvaluatePerformanceReview$/,
  210 |     {
  211 |       timeout: 30_000,
  212 |     }
  213 |   );
  214 | 
  215 |   await expect(
  216 |     this.employeeReviewsHeading
  217 |   ).toBeVisible({
  218 |     timeout: 20_000,
  219 |   });
  220 | 
  221 |   await expect(
  222 |     this.employeeNameInput
  223 |   ).toBeVisible();
  224 | }
  225 | 
  226 | async selectDropdownOption(
  227 |   dropdown: Locator,
  228 |   optionText: string
  229 | ): Promise<void> {
  230 |   await expect(dropdown).toBeVisible();
  231 | 
  232 |   await dropdown.click();
  233 | 
  234 |   const visibleDropdown =
  235 |     this.page.locator(
  236 |       '.oxd-select-dropdown:visible'
  237 |     );
  238 | 
  239 |   await expect(
  240 |     visibleDropdown
  241 |   ).toBeVisible({
  242 |     timeout: 15_000,
  243 |   });
  244 | 
  245 |   const option =
  246 |     visibleDropdown
  247 |       .locator('.oxd-select-option')
  248 |       .getByText(optionText, {
  249 |         exact: true,
  250 |       });
  251 | 
  252 |   await expect(option).toBeVisible({
  253 |     timeout: 15_000,
  254 |   });
  255 | 
  256 |   await option.click();
  257 | 
  258 |   await expect(dropdown).toContainText(
  259 |     optionText
  260 |   );
  261 | }
  262 | 
  263 | async selectFirstAvailableDropdownOption(
  264 |   dropdown: Locator
  265 | ): Promise<string> {
  266 |   await expect(dropdown).toBeVisible();
  267 |   await dropdown.click();
  268 | 
  269 |   const option = this.page
  270 |     .locator('.oxd-select-dropdown:visible')
  271 |     .locator('.oxd-select-option')
  272 |     .filter({
  273 |       hasNotText: /^-- Select --$/,
  274 |     })
  275 |     .first();
  276 | 
  277 |   await expect(option).toBeVisible({
  278 |     timeout: 15_000,
  279 |   });
  280 | 
  281 |   const optionText = (await option.innerText()).trim();
  282 |   await option.click();
  283 |   await expect(dropdown).toContainText(optionText);
  284 | 
  285 |   return optionText;
  286 | }
  287 | 
  288 | async selectEmployeeFromAutocomplete(
  289 |   searchText: string
  290 | ): Promise<string> {
  291 |   await expect(
  292 |     this.employeeNameInput
  293 |   ).toBeVisible();
  294 | 
  295 |   await this.employeeNameInput.fill(
  296 |     searchText
  297 |   );
  298 | 
  299 |   await expect(
  300 |     this.autocompleteDropdown
  301 |   ).toBeVisible({
  302 |     timeout: 20_000,
  303 |   });
  304 | 
  305 |   const employeeOption =
  306 |     this.autocompleteOptions
```