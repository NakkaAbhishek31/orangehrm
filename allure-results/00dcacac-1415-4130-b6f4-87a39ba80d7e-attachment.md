# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Performance\performance.spec.ts >> Performance - Employee Reviews >> TC_PERFORMANCE_204 - Admin should search employee reviews using a valid employee name @positive @search @autocomplete @regression
- Location: tests\Performance\performance.spec.ts:184:5

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('form').locator('.oxd-input-group').filter({ has: locator('label').getByText('Employee Name', { exact: true }) }).locator('input')
Expected: "Searching...."
Received: "ReviewEmployee1787550677108"
Timeout:  20000ms

Call log:
  - Expect "toHaveValue" with timeout 20000ms
  - waiting for locator('form').locator('.oxd-input-group').filter({ has: locator('label').getByText('Employee Name', { exact: true }) }).locator('input')
    43 × locator resolved to <input data-v-75e744cd="" placeholder="Type for hints..."/>
       - unexpected value "ReviewEmployee1787550677108"

```

```yaml
- textbox "Type for hints...": ReviewEmployee1787550677108
```

# Test source

```ts
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
  253 |   await expect(option).toBeVisible({
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
> 302 |   ).toHaveValue(selectedEmployeeName);
      |     ^ Error: expect(locator).toHaveValue(expected) failed
  303 | 
  304 |   return selectedEmployeeName;
  305 | }
  306 | }
  307 | 
```