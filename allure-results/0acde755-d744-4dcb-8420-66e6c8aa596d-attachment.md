# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_054 - Admin should edit an existing System User status @positive @edit @regression
- Location: tests\Admin\admin-users.spec.ts:672:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: page.waitForURL: Test timeout of 60000ms exceeded.
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

# Page snapshot

```yaml
- generic [ref=f7e2]:
  - generic [ref=f7e3]:
    - generic:
      - complementary [ref=f7e4]:
        - navigation "Sidepanel" [ref=f7e5]:
          - generic [ref=f7e6]:
            - link [ref=f7e7] [cursor=pointer]:
              - /url: https://www.orangehrm.com/
              - img "client brand banner" [ref=f7e9]
            - text: 
          - generic [ref=f7e10]:
            - generic [ref=f7e11]:
              - generic [ref=f7e12]:
                - textbox "Search" [ref=f7e15]
                - button "" [ref=f7e16] [cursor=pointer]
              - separator [ref=f7e18]
            - list [ref=f7e19]:
              - listitem [ref=f7e20]:
                - link "Admin" [ref=f7e21] [cursor=pointer]:
                  - /url: /web/index.php/admin/viewAdminModule
              - listitem [ref=f7e25]:
                - link "PIM" [ref=f7e26] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewPimModule
              - listitem [ref=f7e41]:
                - link "Leave" [ref=f7e42] [cursor=pointer]:
                  - /url: /web/index.php/leave/viewLeaveModule
              - listitem [ref=f7e46]:
                - link "Time" [ref=f7e47] [cursor=pointer]:
                  - /url: /web/index.php/time/viewTimeModule
              - listitem [ref=f7e54]:
                - link "Recruitment" [ref=f7e55] [cursor=pointer]:
                  - /url: /web/index.php/recruitment/viewRecruitmentModule
              - listitem [ref=f7e62]:
                - link "My Info" [ref=f7e63] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewMyDetails
              - listitem [ref=f7e70]:
                - link "Performance" [ref=f7e71] [cursor=pointer]:
                  - /url: /web/index.php/performance/viewPerformanceModule
              - listitem [ref=f7e80]:
                - link "Dashboard" [ref=f7e81] [cursor=pointer]:
                  - /url: /web/index.php/dashboard/index
              - listitem [ref=f7e85]:
                - link "Directory" [ref=f7e86] [cursor=pointer]:
                  - /url: /web/index.php/directory/viewDirectory
              - listitem [ref=f7e90]:
                - link "Maintenance" [ref=f7e91] [cursor=pointer]:
                  - /url: /web/index.php/maintenance/viewMaintenanceModule
              - listitem [ref=f7e96]:
                - link "Claim" [ref=f7e97] [cursor=pointer]:
                  - /url: /web/index.php/claim/viewClaimModule
              - listitem [ref=f7e105]:
                - link "Buzz" [ref=f7e106] [cursor=pointer]:
                  - /url: /web/index.php/buzz/viewBuzz
      - banner [ref=f7e110]:
        - generic [ref=f7e111]:
          - generic [ref=f7e112]:
            - text: 
            - heading "Admin" [level=6] [ref=f7e114]
          - link [ref=f7e116]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "Upgrade" [ref=f7e117] [cursor=pointer]
          - list [ref=f7e123]:
            - listitem [ref=f7e124]:
              - generic [ref=f7e125] [cursor=pointer]:
                - img "profile picture" [ref=f7e126]
                - paragraph [ref=f7e127]: Odiss Adalwin
                - generic [ref=f7e128]: 
        - navigation "Topbar Menu" [ref=f7e130]:
          - list [ref=f7e131]:
            - listitem [ref=f7e132] [cursor=pointer]:
              - generic [ref=f7e133]:
                - text: User Management
                - generic [ref=f7e134]: 
            - listitem [ref=f7e135] [cursor=pointer]:
              - generic [ref=f7e136]:
                - text: Job
                - generic [ref=f7e137]: 
            - listitem [ref=f7e138] [cursor=pointer]:
              - generic [ref=f7e139]:
                - text: Organization
                - generic [ref=f7e140]: 
            - listitem [ref=f7e141] [cursor=pointer]:
              - generic [ref=f7e142]:
                - text: Qualifications
                - generic [ref=f7e143]: 
            - listitem [ref=f7e144] [cursor=pointer]:
              - link "Nationalities" [ref=f7e145]:
                - /url: "#"
            - listitem [ref=f7e146] [cursor=pointer]:
              - link "Corporate Branding" [ref=f7e147]:
                - /url: "#"
            - listitem [ref=f7e148] [cursor=pointer]:
              - generic [ref=f7e149]:
                - text: Configuration
                - generic [ref=f7e150]: 
            - button "" [ref=f7e152] [cursor=pointer]
    - generic [ref=f7e154]:
      - generic [ref=f7e157]:
        - heading "Add User" [level=6] [ref=f7e158]
        - separator [ref=f7e159]
        - generic [ref=f7e160]:
          - generic [ref=f7e165]:
            - generic [ref=f7e167]:
              - generic [ref=f7e168]: User Role*
              - generic [ref=f7e172] [cursor=pointer]:
                - generic [ref=f7e173]: ESS
                - generic [ref=f7e174]: 
            - generic [ref=f7e177]:
              - generic [ref=f7e178]: Employee Name*
              - textbox "Type for hints..." [ref=f7e183]: Auto1786376117731749 Test User
            - generic [ref=f7e185]:
              - generic [ref=f7e186]: Status*
              - generic [ref=f7e190] [cursor=pointer]:
                - generic [ref=f7e191]: Enabled
                - generic [ref=f7e192]: 
            - generic [ref=f7e195]:
              - generic [ref=f7e196]: Username*
              - textbox [ref=f7e199]: ess1786376117731749
          - generic [ref=f7e201]:
            - generic [ref=f7e202]:
              - generic [ref=f7e203]: Better
              - generic [ref=f7e204]:
                - generic [ref=f7e205]: Password*
                - textbox [ref=f7e208]: Test@12345
              - paragraph [ref=f7e209]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
            - generic [ref=f7e211]:
              - generic [ref=f7e212]: Confirm Password*
              - textbox [ref=f7e215]: Test@12345
          - separator [ref=f7e216]
          - generic [ref=f7e217]:
            - paragraph [ref=f7e218]: "* Required"
            - button "Cancel" [ref=f7e219] [cursor=pointer]
            - button "Save" [active] [ref=f7e220] [cursor=pointer]
      - generic [ref=f7e221]:
        - paragraph [ref=f7e222]: OrangeHRM OS 5.9
        - paragraph [ref=f7e223]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f7e224] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=f7e226] [cursor=pointer]:
    - generic [ref=f7e227]:
      - generic [ref=f7e228]: 
      - generic [ref=f7e231]:
        - paragraph [ref=f7e232]: Success
        - paragraph [ref=f7e233]: Successfully Saved
    - button "×" [ref=f7e235]
```

# Test source

```ts
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
  425 |     await expect(matchingEmployee).toBeVisible({
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
> 451 |     const systemUsersPage = this.page.waitForURL(/admin\/viewSystemUsers/, {
      |                                       ^ Error: page.waitForURL: Test timeout of 60000ms exceeded.
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
  526 |   async openSystemUserForEditing(username: string): Promise<void> {
  527 |     const userRow = this.userRows.filter({
  528 |       has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
  529 |         exact: true,
  530 |       }),
  531 |     });
  532 | 
  533 |     await expect(userRow).toHaveCount(1);
  534 | 
  535 |     await userRow
  536 |       .getByRole("button")
  537 |       .filter({
  538 |         has: this.page.locator("i.bi-pencil-fill"),
  539 |       })
  540 |       .click();
  541 | 
  542 |     await expect(this.page).toHaveURL(/admin\/saveSystemUser\/\d+/);
  543 | 
  544 |     await expect(this.editUserHeading).toBeVisible();
  545 |   }
  546 | 
  547 |   async updateSystemUserStatus(status: "Enabled" | "Disabled"): Promise<void> {
  548 |     await this.editStatusDropdown.click();
  549 | 
  550 |     await this.page
  551 |       .locator(".oxd-select-option")
```