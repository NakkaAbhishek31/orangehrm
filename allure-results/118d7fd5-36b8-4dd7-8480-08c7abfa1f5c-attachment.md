# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_058 - Admin should select and deselect all visible System Users @positive @selection @regression
- Location: tests\Admin\admin-users.spec.ts:1191:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.click: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('.oxd-topbar-body-nav-tab').filter({ hasText: 'User Management' })

```

# Test source

```ts
  197 | 
  198 |     this.addUserCancelButton = page.getByRole("button", {
  199 |       name: "Cancel",
  200 |       exact: true,
  201 |     });
  202 | 
  203 |     this.autocompleteOptions = page.locator(".oxd-autocomplete-option");
  204 | 
  205 |     this.successToast = page.locator(".oxd-toast-content-text").filter({
  206 |       hasText: /Successfully Saved/i,
  207 |     });
  208 | 
  209 |     this.validationMessages = page.locator(".oxd-input-field-error-message");
  210 | 
  211 |     this.toastMessage = page.locator(".oxd-toast-content-text");
  212 | 
  213 |     this.usernameValidation = page
  214 |       .locator(".oxd-input-group")
  215 |       .filter({
  216 |         has: page.getByText("Username", {
  217 |           exact: true,
  218 |         }),
  219 |       })
  220 |       .locator(".oxd-input-field-error-message");
  221 |     this.confirmPasswordValidation = page
  222 |       .locator(".oxd-input-group")
  223 |       .filter({
  224 |         has: page.getByText("Confirm Password", {
  225 |           exact: true,
  226 |         }),
  227 |       })
  228 |       .locator(".oxd-input-field-error-message");
  229 | 
  230 |     this.editUserHeading = page.getByRole("heading", {
  231 |       name: "Edit User",
  232 |       exact: true,
  233 |     });
  234 | 
  235 |     this.editStatusDropdown = page
  236 |       .locator(".oxd-input-group")
  237 |       .filter({
  238 |         has: page.getByText("Status", {
  239 |           exact: true,
  240 |         }),
  241 |       })
  242 |       .locator(".oxd-select-text");
  243 | 
  244 |     this.editUserSaveButton = page.getByRole("button", {
  245 |       name: "Save",
  246 |       exact: true,
  247 |     });
  248 | 
  249 |  this.deleteSelectedButton = page
  250 |   .locator(
  251 |     '.orangehrm-horizontal-padding ' +
  252 |     'button.oxd-button--label-danger'
  253 |   )
  254 |   .filter({
  255 |     has: page.locator(
  256 |       'i.bi-trash-fill'
  257 |     ),
  258 |   });
  259 | 
  260 | 
  261 |     this.nextPageButton = page.locator(
  262 |   'button.oxd-pagination-page-item--previous-next'
  263 | ).filter({
  264 |   has: page.locator('i.bi-chevron-right'),
  265 | });
  266 | 
  267 | this.previousPageButton = page.locator(
  268 |   'button.oxd-pagination-page-item--previous-next'
  269 | ).filter({
  270 |   has: page.locator('i.bi-chevron-left'),
  271 | });
  272 | 
  273 | this.passwordValidation = page
  274 |   .locator('.oxd-input-group')
  275 |   .filter({
  276 |     has: page.getByText('Password', {
  277 |       exact: true,
  278 |     }),
  279 |   })
  280 |   .locator('.oxd-input-field-error-message');
  281 | 
  282 | this.employeeNameValidation = page
  283 |   .locator('.oxd-input-group')
  284 |   .filter({
  285 |     has: page
  286 |       .locator('label')
  287 |       .getByText('Employee Name', {
  288 |         exact: true,
  289 |       }),
  290 |   })
  291 |   .locator('.oxd-input-field-error-message');
  292 | 
  293 | 
  294 |   }
  295 | 
  296 |   async gotoUserManagementUsers(): Promise<void> {
> 297 |     await this.userManagementMenu.click();
      |                                   ^ Error: locator.click: Test timeout of 60000ms exceeded.
  298 |     await this.usersMenuItem.click();
  299 |   }
  300 | 
  301 |   private async selectDropdownOption(
  302 |     dropdown: Locator,
  303 |     option: string,
  304 |   ): Promise<void> {
  305 |     await dropdown.click();
  306 | 
  307 |     const dropdownOption = this.page
  308 |       .locator(".oxd-select-option")
  309 |       .getByText(option, {
  310 |         exact: true,
  311 |       });
  312 | 
  313 |     await expect(dropdownOption).toBeVisible();
  314 |     await dropdownOption.click();
  315 |   }
  316 | 
  317 |   async searchSystemUsers(filters: SystemUserFilters): Promise<void> {
  318 |     if (filters.username !== undefined) {
  319 |       await this.usernameInput.fill(filters.username);
  320 |     }
  321 | 
  322 |     if (filters.userRole !== undefined) {
  323 |       await this.selectDropdownOption(this.userRoleDropdown, filters.userRole);
  324 |     }
  325 | 
  326 |     if (filters.employeeName !== undefined) {
  327 |       await this.employeeNameInput.fill(filters.employeeName);
  328 | 
  329 |       const employeeOption = this.page
  330 |         .locator(".oxd-autocomplete-option")
  331 |         .filter({
  332 |           hasText: filters.employeeName,
  333 |         })
  334 |         .first();
  335 | 
  336 |       await expect(employeeOption).toBeVisible({
  337 |         timeout: 15_000,
  338 |       });
  339 | 
  340 |       await employeeOption.click();
  341 |     }
  342 | 
  343 |     if (filters.status !== undefined) {
  344 |       await this.selectDropdownOption(this.statusDropdown, filters.status);
  345 |     }
  346 | 
  347 |     const searchResponse = this.page.waitForResponse(
  348 |       (response) =>
  349 |         response.url().includes("/api/v2/admin/users") &&
  350 |         response.request().method() === "GET" &&
  351 |         response.ok(),
  352 |       {
  353 |         timeout: 20_000,
  354 |       },
  355 |     );
  356 | 
  357 |     await this.searchButton.click();
  358 |     await searchResponse;
  359 | 
  360 |     await expect(this.loadingSpinner).toBeHidden();
  361 |   }
  362 | 
  363 |   async verifySystemUserResult(expected: SystemUserFilters): Promise<void> {
  364 |     await expect(this.userRows.first()).toBeVisible();
  365 | 
  366 |     const matchingRow = expected.username
  367 |       ? this.userRows.filter({
  368 |           has: this.page
  369 |             .locator(".oxd-table-cell")
  370 |             .nth(1)
  371 |             .getByText(expected.username, {
  372 |               exact: true,
  373 |             }),
  374 |         })
  375 |       : this.userRows.first();
  376 | 
  377 |     await expect(matchingRow).toHaveCount(1);
  378 | 
  379 |     const cells = matchingRow.locator(".oxd-table-cell");
  380 | 
  381 |     if (expected.username !== undefined) {
  382 |       await expect(cells.nth(1)).toHaveText(expected.username);
  383 |     }
  384 | 
  385 |     if (expected.userRole !== undefined) {
  386 |       await expect(cells.nth(2)).toHaveText(expected.userRole);
  387 |     }
  388 | 
  389 |     if (expected.employeeName !== undefined) {
  390 |       await expect(cells.nth(3)).toContainText(expected.employeeName);
  391 |     }
  392 | 
  393 |     if (expected.status !== undefined) {
  394 |       await expect(cells.nth(4)).toHaveText(expected.status);
  395 |     }
  396 |   }
  397 | 
```