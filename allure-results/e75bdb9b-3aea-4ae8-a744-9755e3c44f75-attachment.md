# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_050 - Duplicate validation should appear for an existing System User username @negative @validation @regression
- Location: tests\Admin\admin-users.spec.ts:477:6

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Add User', exact: true })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('heading', { name: 'Add User', exact: true })
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

```

# Test source

```ts
  297 |       })
  298 |       .first();
  299 | 
  300 |     await expect(employeeOption).toBeVisible({
  301 |       timeout: 15_000,
  302 |     });
  303 | 
  304 |     await employeeOption.click();
  305 |   }
  306 | 
  307 |   if (filters.status !== undefined) {
  308 |     await this.selectDropdownOption(
  309 |       this.statusDropdown,
  310 |       filters.status
  311 |     );
  312 |   }
  313 | 
  314 |   const searchResponse =
  315 |     this.page.waitForResponse(
  316 |       response =>
  317 |         response.url().includes(
  318 |           '/api/v2/admin/users'
  319 |         ) &&
  320 |         response.request().method() === 'GET' &&
  321 |         response.ok(),
  322 |       {
  323 |         timeout: 20_000,
  324 |       }
  325 |     );
  326 | 
  327 |   await this.searchButton.click();
  328 |   await searchResponse;
  329 | 
  330 |   await expect(this.loadingSpinner).toBeHidden();
  331 | }
  332 | 
  333 | async verifySystemUserResult(
  334 |   expected: SystemUserFilters
  335 | ): Promise<void> {
  336 |   await expect(this.userRows.first()).toBeVisible();
  337 | 
  338 |   const matchingRow = expected.username
  339 |     ? this.userRows.filter({
  340 |         has: this.page
  341 |           .locator('.oxd-table-cell')
  342 |           .nth(1)
  343 |           .getByText(expected.username, {
  344 |             exact: true,
  345 |           }),
  346 |       })
  347 |     : this.userRows.first();
  348 | 
  349 |   await expect(matchingRow).toHaveCount(1);
  350 | 
  351 |   const cells = matchingRow.locator(
  352 |     '.oxd-table-cell'
  353 |   );
  354 | 
  355 |   if (expected.username !== undefined) {
  356 |     await expect(cells.nth(1)).toHaveText(
  357 |       expected.username
  358 |     );
  359 |   }
  360 | 
  361 |   if (expected.userRole !== undefined) {
  362 |     await expect(cells.nth(2)).toHaveText(
  363 |       expected.userRole
  364 |     );
  365 |   }
  366 | 
  367 |   if (expected.employeeName !== undefined) {
  368 |     await expect(cells.nth(3)).toContainText(
  369 |       expected.employeeName
  370 |     );
  371 |   }
  372 | 
  373 |   if (expected.status !== undefined) {
  374 |     await expect(cells.nth(4)).toHaveText(
  375 |       expected.status
  376 |     );
  377 |   }
  378 | }
  379 | 
  380 | async resetSystemUserFilters(): Promise<void> {
  381 |   await this.resetButton.click();
  382 | 
  383 |   await expect(this.usernameInput).toHaveValue('');
  384 |   await expect(this.employeeNameInput).toHaveValue('');
  385 | }
  386 | 
  387 | async gotoAddSystemUser():Promise<void>
  388 | {
  389 |  await this.addButton.click();
  390 |  await this.page.waitForURL(
  391 |     /admin\/saveSystemUser/,
  392 |     {
  393 |       timeout: 20_000,
  394 |     }
  395 |   );
  396 | 
> 397 |   await expect(this.addUserHeading).toBeVisible();
      |                                     ^ Error: expect(locator).toBeVisible() failed
  398 | 
  399 | }
  400 | 
  401 | async fillSystemUserForm(
  402 |   details: AddSystemUserDetails
  403 | ): Promise<void> {
  404 |   await this.selectDropdownOption(
  405 |     this.addUserRoleDropdown,
  406 |     details.userRole
  407 |   );
  408 | 
  409 |   await this.addEmployeeNameInput.fill(
  410 |     details.employeeName
  411 |   );
  412 | 
  413 |   const matchingEmployee =
  414 |     this.autocompleteOptions
  415 |       .filter({
  416 |         hasText: details.employeeName,
  417 |       })
  418 |       .first();
  419 | 
  420 |   await expect(matchingEmployee).toBeVisible({
  421 |     timeout: 20_000,
  422 |   });
  423 | 
  424 |   await matchingEmployee.click();
  425 | 
  426 |   await this.selectDropdownOption(
  427 |     this.addStatusDropdown,
  428 |     details.status
  429 |   );
  430 | 
  431 |   await this.addUsernameInput.fill(
  432 |     details.username
  433 |   );
  434 | 
  435 |   await this.addPasswordInput.fill(
  436 |     details.password
  437 |   );
  438 | 
  439 |   await this.addConfirmPasswordInput.fill(
  440 |     details.password
  441 |   );
  442 | }
  443 | 
  444 | 
  445 | async saveSystemUser(): Promise<void> {
  446 |   const createUserResponse =
  447 |     this.page.waitForResponse(
  448 |       response =>
  449 |         response.url().includes(
  450 |           '/api/v2/admin/users'
  451 |         ) &&
  452 |         response.request().method() === 'POST' &&
  453 |         response.ok(),
  454 |       {
  455 |         timeout: 20_000,
  456 |       }
  457 |     );
  458 | 
  459 |   const systemUsersPage =
  460 |     this.page.waitForURL(
  461 |       /admin\/viewSystemUsers/,
  462 |       {
  463 |         timeout: 20_000,
  464 |       }
  465 |     );
  466 | 
  467 |   // Begin watching for the temporary toast
  468 |   // before clicking Save.
  469 |   const successToastAppears = expect(
  470 |     this.successToast
  471 |   ).toContainText(
  472 |     'Successfully Saved',
  473 |     {
  474 |       timeout: 20_000,
  475 |     }
  476 |   );
  477 | 
  478 |   await this.addUserSaveButton.click();
  479 | 
  480 |   await Promise.all([
  481 |     createUserResponse,
  482 |     systemUsersPage,
  483 |     successToastAppears,
  484 |   ]);
  485 | 
  486 |   await expect(
  487 |     this.systemUsersHeading
  488 |   ).toBeVisible();
  489 | }
  490 | 
  491 | async deleteSystemUserByUsername(
  492 |   username: string
  493 | ): Promise<void> {
  494 |   const matchingRow = this.userRows.filter({
  495 |     has: this.page
  496 |       .locator('.oxd-table-cell')
  497 |       .nth(1)
```