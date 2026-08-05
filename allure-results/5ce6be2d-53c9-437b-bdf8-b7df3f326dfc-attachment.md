# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_053 - Admin should reset System User search filters @positive @filter @regression
- Location: tests\Admin\admin-users.spec.ts:629:6

# Error details

```
Error: page.waitForResponse: Target page, context or browser has been closed
```

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('button', { name: 'Search', exact: true })

```

# Test source

```ts
  225 |       .locator(".oxd-input-field-error-message");
  226 | 
  227 |     this.editUserHeading = page.getByRole("heading", {
  228 |       name: "Edit User",
  229 |       exact: true,
  230 |     });
  231 | 
  232 |     this.editStatusDropdown = page
  233 |       .locator(".oxd-input-group")
  234 |       .filter({
  235 |         has: page.getByText("Status", {
  236 |           exact: true,
  237 |         }),
  238 |       })
  239 |       .locator(".oxd-select-text");
  240 | 
  241 |     this.editUserSaveButton = page.getByRole("button", {
  242 |       name: "Save",
  243 |       exact: true,
  244 |     });
  245 | 
  246 |     this.deleteSelectedButton = page.getByRole("button", {
  247 |       name: /Delete Selected/i,
  248 |     });
  249 | 
  250 |     this.nextPageButton = page.locator(
  251 |   'button.oxd-pagination-page-item--previous-next'
  252 | ).filter({
  253 |   has: page.locator('i.bi-chevron-right'),
  254 | });
  255 | 
  256 | this.previousPageButton = page.locator(
  257 |   'button.oxd-pagination-page-item--previous-next'
  258 | ).filter({
  259 |   has: page.locator('i.bi-chevron-left'),
  260 | });
  261 | 
  262 |   }
  263 | 
  264 |   async gotoUserManagementUsers(): Promise<void> {
  265 |     await this.userManagementMenu.click();
  266 |     await this.usersMenuItem.click();
  267 |   }
  268 | 
  269 |   private async selectDropdownOption(
  270 |     dropdown: Locator,
  271 |     option: string,
  272 |   ): Promise<void> {
  273 |     await dropdown.click();
  274 | 
  275 |     const dropdownOption = this.page
  276 |       .locator(".oxd-select-option")
  277 |       .getByText(option, {
  278 |         exact: true,
  279 |       });
  280 | 
  281 |     await expect(dropdownOption).toBeVisible();
  282 |     await dropdownOption.click();
  283 |   }
  284 | 
  285 |   async searchSystemUsers(filters: SystemUserFilters): Promise<void> {
  286 |     if (filters.username !== undefined) {
  287 |       await this.usernameInput.fill(filters.username);
  288 |     }
  289 | 
  290 |     if (filters.userRole !== undefined) {
  291 |       await this.selectDropdownOption(this.userRoleDropdown, filters.userRole);
  292 |     }
  293 | 
  294 |     if (filters.employeeName !== undefined) {
  295 |       await this.employeeNameInput.fill(filters.employeeName);
  296 | 
  297 |       const employeeOption = this.page
  298 |         .locator(".oxd-autocomplete-option")
  299 |         .filter({
  300 |           hasText: filters.employeeName,
  301 |         })
  302 |         .first();
  303 | 
  304 |       await expect(employeeOption).toBeVisible({
  305 |         timeout: 15_000,
  306 |       });
  307 | 
  308 |       await employeeOption.click();
  309 |     }
  310 | 
  311 |     if (filters.status !== undefined) {
  312 |       await this.selectDropdownOption(this.statusDropdown, filters.status);
  313 |     }
  314 | 
  315 |     const searchResponse = this.page.waitForResponse(
  316 |       (response) =>
  317 |         response.url().includes("/api/v2/admin/users") &&
  318 |         response.request().method() === "GET" &&
  319 |         response.ok(),
  320 |       {
  321 |         timeout: 20_000,
  322 |       },
  323 |     );
  324 | 
> 325 |     await this.searchButton.click();
      |                             ^ Error: locator.click: Target page, context or browser has been closed
  326 |     await searchResponse;
  327 | 
  328 |     await expect(this.loadingSpinner).toBeHidden();
  329 |   }
  330 | 
  331 |   async verifySystemUserResult(expected: SystemUserFilters): Promise<void> {
  332 |     await expect(this.userRows.first()).toBeVisible();
  333 | 
  334 |     const matchingRow = expected.username
  335 |       ? this.userRows.filter({
  336 |           has: this.page
  337 |             .locator(".oxd-table-cell")
  338 |             .nth(1)
  339 |             .getByText(expected.username, {
  340 |               exact: true,
  341 |             }),
  342 |         })
  343 |       : this.userRows.first();
  344 | 
  345 |     await expect(matchingRow).toHaveCount(1);
  346 | 
  347 |     const cells = matchingRow.locator(".oxd-table-cell");
  348 | 
  349 |     if (expected.username !== undefined) {
  350 |       await expect(cells.nth(1)).toHaveText(expected.username);
  351 |     }
  352 | 
  353 |     if (expected.userRole !== undefined) {
  354 |       await expect(cells.nth(2)).toHaveText(expected.userRole);
  355 |     }
  356 | 
  357 |     if (expected.employeeName !== undefined) {
  358 |       await expect(cells.nth(3)).toContainText(expected.employeeName);
  359 |     }
  360 | 
  361 |     if (expected.status !== undefined) {
  362 |       await expect(cells.nth(4)).toHaveText(expected.status);
  363 |     }
  364 |   }
  365 | 
  366 |   async resetSystemUserFilters(): Promise<void> {
  367 |     await this.resetButton.click();
  368 | 
  369 |     await expect(this.usernameInput).toHaveValue("");
  370 |     await expect(this.employeeNameInput).toHaveValue("");
  371 |   }
  372 | 
  373 |   async gotoAddSystemUser(): Promise<void> {
  374 |     await this.addButton.click();
  375 |     await this.page.waitForURL(/admin\/saveSystemUser/, {
  376 |       timeout: 20_000,
  377 |     });
  378 | 
  379 |     await expect(this.addUserHeading).toBeVisible();
  380 |   }
  381 | 
  382 |   async fillSystemUserForm(details: AddSystemUserDetails): Promise<void> {
  383 |     await this.selectDropdownOption(this.addUserRoleDropdown, details.userRole);
  384 | 
  385 |     await this.addEmployeeNameInput.fill(details.employeeName);
  386 | 
  387 |     const matchingEmployee = this.autocompleteOptions
  388 |       .filter({
  389 |         hasText: details.employeeName,
  390 |       })
  391 |       .first();
  392 | 
  393 |     await expect(matchingEmployee).toBeVisible({
  394 |       timeout: 20_000,
  395 |     });
  396 | 
  397 |     await matchingEmployee.click();
  398 | 
  399 |     await this.selectDropdownOption(this.addStatusDropdown, details.status);
  400 | 
  401 |     await this.addUsernameInput.fill(details.username);
  402 | 
  403 |     await this.addPasswordInput.fill(details.password);
  404 | 
  405 |     await this.addConfirmPasswordInput.fill(details.password);
  406 |   }
  407 | 
  408 |   async saveSystemUser(): Promise<void> {
  409 |     const createUserResponse = this.page.waitForResponse(
  410 |       (response) =>
  411 |         response.url().includes("/api/v2/admin/users") &&
  412 |         response.request().method() === "POST" &&
  413 |         response.ok(),
  414 |       {
  415 |         timeout: 20_000,
  416 |       },
  417 |     );
  418 | 
  419 |     const systemUsersPage = this.page.waitForURL(/admin\/viewSystemUsers/, {
  420 |       timeout: 20_000,
  421 |     });
  422 | 
  423 |     // Begin watching for the temporary toast
  424 |     // before clicking Save.
  425 |     const successToastAppears = expect(this.successToast).toContainText(
```