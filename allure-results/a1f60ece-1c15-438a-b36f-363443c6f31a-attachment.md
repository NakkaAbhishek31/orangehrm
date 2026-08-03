# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_047 - Admin should add a new ESS system user successfully @positive @create @regression
- Location: tests\Admin\admin-users.spec.ts:242:6

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-toast').filter({ hasText: /Successfully Saved/i })
Expected substring: "Successfully Saved"
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 10000ms
  - waiting for locator('.oxd-toast').filter({ hasText: /Successfully Saved/i })

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
  - heading "/ User Management" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: manda user
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
- heading "System Users" [level=5]
- button ""
- separator
- text: Username
- textbox
- text: User Role -- Select --  Employee Name
- textbox "Type for hints..."
- text: Status -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (6) Records Found
- table:
  - rowgroup:
    - row " Username  User Role  Employee Name  Status  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Username "
      - columnheader "User Role "
      - columnheader "Employee Name "
      - columnheader "Status "
      - columnheader "Actions"
  - rowgroup:
    - row " Admin Admin manda user Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "manda user"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Elmira35 ESS Maryjane Dicki Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Elmira35"
      - cell "ESS"
      - cell "Maryjane Dicki"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ess178573812567840 ESS Auto178573812567840 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ess178573812567840"
      - cell "ESS"
      - cell "Auto178573812567840 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ess1785738197695673 ESS Auto1785738197695673 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ess1785738197695673"
      - cell "ESS"
      - cell "Auto1785738197695673 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Martin Venus Schuppe Test ESS Martin Schuppe Test Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Martin Venus Schuppe Test"
      - cell "ESS"
      - cell "Martin Schuppe Test"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Richmond.Abbott75 ESS Ramiro Rohan-Hettinger Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Richmond.Abbott75"
      - cell "ESS"
      - cell "Ramiro Rohan-Hettinger"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  359 |     await expect(cells.nth(4)).toHaveText(
  360 |       expected.status
  361 |     );
  362 |   }
  363 | }
  364 | 
  365 | async resetSystemUserFilters(): Promise<void> {
  366 |   await this.resetButton.click();
  367 | 
  368 |   await expect(this.usernameInput).toHaveValue('');
  369 |   await expect(this.employeeNameInput).toHaveValue('');
  370 | }
  371 | 
  372 | async gotoAddSystemUser():Promise<void>
  373 | {
  374 |  await this.addButton.click();
  375 |  await this.page.waitForURL(
  376 |     /admin\/saveSystemUser/,
  377 |     {
  378 |       timeout: 20_000,
  379 |     }
  380 |   );
  381 | 
  382 |   await expect(this.addUserHeading).toBeVisible();
  383 | 
  384 | }
  385 | 
  386 | async fillSystemUserForm(
  387 |   details: AddSystemUserDetails
  388 | ): Promise<void> {
  389 |   await this.selectDropdownOption(
  390 |     this.addUserRoleDropdown,
  391 |     details.userRole
  392 |   );
  393 | 
  394 |   await this.addEmployeeNameInput.fill(
  395 |     details.employeeName
  396 |   );
  397 | 
  398 |   const matchingEmployee =
  399 |     this.autocompleteOptions
  400 |       .filter({
  401 |         hasText: details.employeeName,
  402 |       })
  403 |       .first();
  404 | 
  405 |   await expect(matchingEmployee).toBeVisible({
  406 |     timeout: 20_000,
  407 |   });
  408 | 
  409 |   await matchingEmployee.click();
  410 | 
  411 |   await this.selectDropdownOption(
  412 |     this.addStatusDropdown,
  413 |     details.status
  414 |   );
  415 | 
  416 |   await this.addUsernameInput.fill(
  417 |     details.username
  418 |   );
  419 | 
  420 |   await this.addPasswordInput.fill(
  421 |     details.password
  422 |   );
  423 | 
  424 |   await this.addConfirmPasswordInput.fill(
  425 |     details.password
  426 |   );
  427 | }
  428 | 
  429 | 
  430 | async saveSystemUser(): Promise<void> {
  431 |   const createUserResponse =
  432 |     this.page.waitForResponse(
  433 |       response =>
  434 |         response.url().includes(
  435 |           '/api/v2/admin/users'
  436 |         ) &&
  437 |         response.request().method() === 'POST' &&
  438 |         response.ok(),
  439 |       {
  440 |         timeout: 20_000,
  441 |       }
  442 |     );
  443 | 
  444 |   const systemUsersPage =
  445 |     this.page.waitForURL(
  446 |       /admin\/viewSystemUsers/,
  447 |       {
  448 |         timeout: 20_000,
  449 |       }
  450 |     );
  451 | 
  452 |   await this.addUserSaveButton.click();
  453 | 
  454 |   await Promise.all([
  455 |     createUserResponse,
  456 |     systemUsersPage,
  457 |   ]);
  458 | 
> 459 |   await expect(this.successToast).toContainText(
      |                                   ^ Error: expect(locator).toContainText(expected) failed
  460 |     'Successfully Saved'
  461 |   );
  462 | 
  463 |   await expect(this.systemUsersHeading).toBeVisible();
  464 | }
  465 | 
  466 | async deleteSystemUserByUsername(
  467 |   username: string
  468 | ): Promise<void> {
  469 |   const matchingRow = this.userRows.filter({
  470 |     has: this.page
  471 |       .locator('.oxd-table-cell')
  472 |       .nth(1)
  473 |       .getByText(username, {
  474 |         exact: true,
  475 |       }),
  476 |   });
  477 | 
  478 |   await expect(matchingRow).toHaveCount(1);
  479 | 
  480 |   await matchingRow
  481 |     .locator('button')
  482 |     .filter({
  483 |       has: this.page.locator(
  484 |         'i.bi-trash, i.bi-trash-fill'
  485 |       ),
  486 |     })
  487 |     .click();
  488 | 
  489 |   const confirmationDialog =
  490 |     this.page.getByRole('dialog');
  491 | 
  492 |   await expect(confirmationDialog).toBeVisible();
  493 | 
  494 |   const deleteResponse =
  495 |     this.page.waitForResponse(
  496 |       response =>
  497 |         response.url().includes(
  498 |           '/api/v2/admin/users'
  499 |         ) &&
  500 |         response.request().method() === 'DELETE' &&
  501 |         response.ok(),
  502 |       {
  503 |         timeout: 20_000,
  504 |       }
  505 |     );
  506 | 
  507 |   await confirmationDialog
  508 |     .getByRole('button', {
  509 |       name: /Yes, Delete/i,
  510 |     })
  511 |     .click();
  512 | 
  513 |   await deleteResponse;
  514 | 
  515 |   await expect(confirmationDialog).toBeHidden();
  516 | 
  517 |   await expect(this.successToast).toContainText(
  518 |     'Successfully Deleted'
  519 |   );
  520 | }
  521 | 
  522 |   }
  523 | 
  524 |    
  525 | 
  526 | 
```