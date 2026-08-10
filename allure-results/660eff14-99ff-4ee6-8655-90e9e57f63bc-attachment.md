# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_056 - Admin should cancel System User deletion @negative @delete @regression
- Location: tests\Admin\admin-users.spec.ts:873:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-autocomplete-option').filter({ hasText: 'Auto1785912583416216 Test User' }).first()
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.oxd-autocomplete-option').filter({ hasText: 'Auto1785912583416216 Test User' }).first()

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
  - heading "Admin" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Surya king
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: User Management 
      - listitem: Job 
      - listitem: Organization 
      - listitem: Qualifications 
      - listitem:
        - link "Nationalities":
          - /url: "#"
      - listitem:
        - link "Corporate Branding":
          - /url: "#"
      - listitem: Configuration 
      - button ""
- heading "Add User" [level=6]
- separator
- text: User Role* ESS  Employee Name*
- textbox "Type for hints...": Auto1785912583416216 Test User
- listbox:
  - option "No Records Found"
- text: Status* -- Select --  Username*
- textbox
- text: Password*
- textbox
- paragraph: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
- text: Confirm Password*
- textbox
- separator
- paragraph: "* Required"
- button "Cancel"
- button "Save"
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
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
  398 |   async resetSystemUserFilters(): Promise<void> {
  399 |     await this.resetButton.click();
  400 | 
  401 |     await expect(this.usernameInput).toHaveValue("");
  402 |     await expect(this.employeeNameInput).toHaveValue("");
  403 |   }
  404 | 
  405 |   async gotoAddSystemUser(): Promise<void> {
  406 |     await this.addButton.click();
  407 |     await this.page.waitForURL(/admin\/saveSystemUser/, {
  408 |       timeout: 20_000,
  409 |     });
  410 | 
  411 |     await expect(this.addUserHeading).toBeVisible();
  412 |   }
  413 | 
  414 |   async fillSystemUserForm(details: AddSystemUserDetails): Promise<void> {
  415 |     await this.selectDropdownOption(this.addUserRoleDropdown, details.userRole);
  416 | 
  417 |     await this.addEmployeeNameInput.fill(details.employeeName);
  418 | 
  419 |     const matchingEmployee = this.autocompleteOptions
  420 |       .filter({
  421 |         hasText: details.employeeName,
  422 |       })
  423 |       .first();
  424 | 
> 425 |     await expect(matchingEmployee).toBeVisible({
      |                                    ^ Error: expect(locator).toBeVisible() failed
  426 |       timeout: 20_000,
  427 |     });
  428 | 
  429 |     await matchingEmployee.click();
  430 | 
  431 |     await this.selectDropdownOption(this.addStatusDropdown, details.status);
  432 | 
  433 |     await this.addUsernameInput.fill(details.username);
  434 | 
  435 |     await this.addPasswordInput.fill(details.password);
  436 | 
  437 |     await this.addConfirmPasswordInput.fill(details.password);
  438 |   }
  439 | 
  440 |   async saveSystemUser(): Promise<void> {
  441 |     const createUserResponse = this.page.waitForResponse(
  442 |       (response) =>
  443 |         response.url().includes("/api/v2/admin/users") &&
  444 |         response.request().method() === "POST" &&
  445 |         response.ok(),
  446 |       {
  447 |         timeout: 20_000,
  448 |       },
  449 |     );
  450 | 
  451 |     const systemUsersPage = this.page.waitForURL(/admin\/viewSystemUsers/, {
  452 |       timeout: 20_000,
  453 |     });
  454 | 
  455 |     // Begin watching for the temporary toast
  456 |     // before clicking Save.
  457 |     const successToastAppears = expect(this.successToast).toContainText(
  458 |       "Successfully Saved",
  459 |       {
  460 |         timeout: 20_000,
  461 |       },
  462 |     );
  463 | 
  464 |     await this.addUserSaveButton.click();
  465 | 
  466 |     await Promise.all([
  467 |       createUserResponse,
  468 |       systemUsersPage,
  469 |       successToastAppears,
  470 |     ]);
  471 | 
  472 |     await expect(this.systemUsersHeading).toBeVisible();
  473 |   }
  474 | 
  475 |   async deleteSystemUserByUsername(username: string): Promise<void> {
  476 |     const matchingRow = this.userRows.filter({
  477 |       has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
  478 |         exact: true,
  479 |       }),
  480 |     });
  481 | 
  482 |     await expect(matchingRow).toHaveCount(1);
  483 | 
  484 |     await matchingRow
  485 |       .locator("button")
  486 |       .filter({
  487 |         has: this.page.locator("i.bi-trash, i.bi-trash-fill"),
  488 |       })
  489 |       .click();
  490 | 
  491 |     const confirmationDialog = this.page.getByRole("dialog");
  492 | 
  493 |     await expect(confirmationDialog).toBeVisible();
  494 | 
  495 |     const deleteResponse = this.page.waitForResponse(
  496 |       (response) =>
  497 |         response.url().includes("/api/v2/admin/users") &&
  498 |         response.request().method() === "DELETE" &&
  499 |         response.ok(),
  500 |       {
  501 |         timeout: 20_000,
  502 |       },
  503 |     );
  504 | 
  505 |     // Start waiting before clicking because the toast
  506 |     // may disappear quickly.
  507 |     const deletedToastAppears = expect(
  508 |       this.toastMessage.filter({
  509 |         hasText: /Successfully Deleted/i,
  510 |       }),
  511 |     ).toBeVisible({
  512 |       timeout: 20_000,
  513 |     });
  514 | 
  515 |     await confirmationDialog
  516 |       .getByRole("button", {
  517 |         name: /Yes, Delete/i,
  518 |       })
  519 |       .click();
  520 | 
  521 |     await Promise.all([deleteResponse, deletedToastAppears]);
  522 | 
  523 |     await expect(confirmationDialog).toBeHidden();
  524 |   }
  525 | 
```