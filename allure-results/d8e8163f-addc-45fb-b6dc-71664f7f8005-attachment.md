# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_ADMIN_063 - Admin should update an existing System User username @positive @edit @regression
- Location: tests\Admin\admin-users.spec.ts:613:6

# Error details

```
TimeoutError: page.waitForURL: Timeout 20000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
  navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
============================================================
```

# Test source

```ts
  342 |         response.ok(),
  343 |       {
  344 |         timeout: 20_000,
  345 |       },
  346 |     );
  347 | 
  348 |     await this.searchButton.click();
  349 |     await searchResponse;
  350 | 
  351 |     await expect(this.loadingSpinner).toBeHidden();
  352 |   }
  353 | 
  354 |   async verifySystemUserResult(expected: SystemUserFilters): Promise<void> {
  355 |     await expect(this.userRows.first()).toBeVisible();
  356 | 
  357 |     const matchingRow = expected.username
  358 |       ? this.userRows.filter({
  359 |           has: this.page
  360 |             .locator(".oxd-table-cell")
  361 |             .nth(1)
  362 |             .getByText(expected.username, {
  363 |               exact: true,
  364 |             }),
  365 |         })
  366 |       : this.userRows.first();
  367 | 
  368 |     await expect(matchingRow).toHaveCount(1);
  369 | 
  370 |     const cells = matchingRow.locator(".oxd-table-cell");
  371 | 
  372 |     if (expected.username !== undefined) {
  373 |       await expect(cells.nth(1)).toHaveText(expected.username);
  374 |     }
  375 | 
  376 |     if (expected.userRole !== undefined) {
  377 |       await expect(cells.nth(2)).toHaveText(expected.userRole);
  378 |     }
  379 | 
  380 |     if (expected.employeeName !== undefined) {
  381 |       await expect(cells.nth(3)).toContainText(expected.employeeName);
  382 |     }
  383 | 
  384 |     if (expected.status !== undefined) {
  385 |       await expect(cells.nth(4)).toHaveText(expected.status);
  386 |     }
  387 |   }
  388 | 
  389 |   async resetSystemUserFilters(): Promise<void> {
  390 |     await this.resetButton.click();
  391 | 
  392 |     await expect(this.usernameInput).toHaveValue("");
  393 |     await expect(this.employeeNameInput).toHaveValue("");
  394 |   }
  395 | 
  396 |   async gotoAddSystemUser(): Promise<void> {
  397 |     await this.addButton.click();
  398 |     await this.page.waitForURL(/admin\/saveSystemUser/, {
  399 |       timeout: 20_000,
  400 |     });
  401 | 
  402 |     await expect(this.addUserHeading).toBeVisible();
  403 |   }
  404 | 
  405 |   async fillSystemUserForm(details: AddSystemUserDetails): Promise<void> {
  406 |     await this.selectDropdownOption(this.addUserRoleDropdown, details.userRole);
  407 | 
  408 |     await this.addEmployeeNameInput.fill(details.employeeName);
  409 | 
  410 |     const matchingEmployee = this.autocompleteOptions
  411 |       .filter({
  412 |         hasText: details.employeeName,
  413 |       })
  414 |       .first();
  415 | 
  416 |     await expect(matchingEmployee).toBeVisible({
  417 |       timeout: 20_000,
  418 |     });
  419 | 
  420 |     await matchingEmployee.click();
  421 | 
  422 |     await this.selectDropdownOption(this.addStatusDropdown, details.status);
  423 | 
  424 |     await this.addUsernameInput.fill(details.username);
  425 | 
  426 |     await this.addPasswordInput.fill(details.password);
  427 | 
  428 |     await this.addConfirmPasswordInput.fill(details.password);
  429 |   }
  430 | 
  431 |   async saveSystemUser(): Promise<void> {
  432 |     const createUserResponse = this.page.waitForResponse(
  433 |       (response) =>
  434 |         response.url().includes("/api/v2/admin/users") &&
  435 |         response.request().method() === "POST" &&
  436 |         response.ok(),
  437 |       {
  438 |         timeout: 20_000,
  439 |       },
  440 |     );
  441 | 
> 442 |     const systemUsersPage = this.page.waitForURL(/admin\/viewSystemUsers/, {
      |                                       ^ TimeoutError: page.waitForURL: Timeout 20000ms exceeded.
  443 |       timeout: 20_000,
  444 |     });
  445 | 
  446 |     // Begin watching for the temporary toast
  447 |     // before clicking Save.
  448 |     const successToastAppears = expect(this.successToast).toContainText(
  449 |       "Successfully Saved",
  450 |       {
  451 |         timeout: 20_000,
  452 |       },
  453 |     );
  454 | 
  455 |     await this.addUserSaveButton.click();
  456 | 
  457 |     await Promise.all([
  458 |       createUserResponse,
  459 |       systemUsersPage,
  460 |       successToastAppears,
  461 |     ]);
  462 | 
  463 |     await expect(this.systemUsersHeading).toBeVisible();
  464 |   }
  465 | 
  466 |   async deleteSystemUserByUsername(username: string): Promise<void> {
  467 |     const matchingRow = this.userRows.filter({
  468 |       has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
  469 |         exact: true,
  470 |       }),
  471 |     });
  472 | 
  473 |     await expect(matchingRow).toHaveCount(1);
  474 | 
  475 |     await matchingRow
  476 |       .locator("button")
  477 |       .filter({
  478 |         has: this.page.locator("i.bi-trash, i.bi-trash-fill"),
  479 |       })
  480 |       .click();
  481 | 
  482 |     const confirmationDialog = this.page.getByRole("dialog");
  483 | 
  484 |     await expect(confirmationDialog).toBeVisible();
  485 | 
  486 |     const deleteResponse = this.page.waitForResponse(
  487 |       (response) =>
  488 |         response.url().includes("/api/v2/admin/users") &&
  489 |         response.request().method() === "DELETE" &&
  490 |         response.ok(),
  491 |       {
  492 |         timeout: 15_000,
  493 |       },
  494 |     );
  495 | 
  496 |     // Start waiting before clicking because the toast
  497 |     // may disappear quickly.
  498 |     const deletedToastAppears = expect(
  499 |       this.toastMessage.filter({
  500 |         hasText: /Successfully Deleted/i,
  501 |       }),
  502 |     ).toBeVisible({
  503 |       timeout: 10_000,
  504 |     });
  505 | 
  506 |     await confirmationDialog
  507 |       .getByRole("button", {
  508 |         name: /Yes, Delete/i,
  509 |       })
  510 |       .click();
  511 | 
  512 |     await Promise.all([deleteResponse, deletedToastAppears]);
  513 | 
  514 |     await expect(confirmationDialog).toBeHidden();
  515 |   }
  516 | 
  517 |   async openSystemUserForEditing(username: string): Promise<void> {
  518 |     const userRow = this.userRows.filter({
  519 |       has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
  520 |         exact: true,
  521 |       }),
  522 |     });
  523 | 
  524 |     await expect(userRow).toHaveCount(1);
  525 | 
  526 |     await userRow
  527 |       .getByRole("button")
  528 |       .filter({
  529 |         has: this.page.locator("i.bi-pencil-fill"),
  530 |       })
  531 |       .click();
  532 | 
  533 |     await expect(this.page).toHaveURL(/admin\/saveSystemUser\/\d+/);
  534 | 
  535 |     await expect(this.editUserHeading).toBeVisible();
  536 |   }
  537 | 
  538 |   async updateSystemUserStatus(status: string): Promise<void> {
  539 |     await this.editStatusDropdown.click();
  540 | 
  541 |     await this.page
  542 |       .locator(".oxd-select-option")
```