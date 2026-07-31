# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> 'TC_PIM_030 - Admin should create an employee with login credentials @positive @account @regression'
- Location: tests\PIM\pim-employee.spec.ts:586:6

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('textbox', { name: 'Username', exact: true })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('textbox', { name: 'Username', exact: true })

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
  - heading "PIM" [level=6]
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
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Add Employee" [level=6]
- separator
- button "Choose File"
- img "profile picture"
- button ""
- paragraph: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
- text: Employee Full Name*
- textbox "First Name": Auto1785488138692
- textbox "Middle Name": User
- textbox "Last Name"
- text: Employee Id
- textbox: "0635"
- separator
- paragraph: Create Login Details
- checkbox [checked]
- text: Username*
- textbox
- text: Status
- radio "Enabled" [checked]
- text: Enabled
- radio "Disabled"
- text: Disabled Password*
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
  459 | 
  460 |   await this.firstnameInput.fill(details.firstName);
  461 | 
  462 |     if (details.middleName !== undefined) {
  463 |       await this.middlenameInput.fill(details.middleName);
  464 |     }
  465 | 
  466 |     await this.lastnameInput.fill(details.lastName);
  467 | 
  468 |     if (details.employeeId !== undefined) {
  469 |       await this.employeeID.fill(details.employeeId);
  470 |     }
  471 | 
  472 |     if (details.profilePicturePath !== undefined) {
  473 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  474 |     }
  475 |  
  476 |     await this.SaveEmployeeButton.click(); 
  477 |  }
  478 | 
  479 | 
  480 |  async fillAddEmployeeForm(
  481 |   details: AddEmployeeDetails
  482 | ): Promise<void> {
  483 |   
  484 |     if (details.firstName !== undefined) {
  485 |     await this.firstnameInput.fill(details.firstName);
  486 |   }
  487 | 
  488 |   if (details.middleName !== undefined) {
  489 |     await this.middlenameInput.fill(details.middleName);
  490 |   }
  491 | 
  492 | 
  493 |     if (details.lastName !== undefined) {
  494 |     await this.middlenameInput.fill(details.lastName);
  495 |   }
  496 | 
  497 |   if (details.employeeId !== undefined) {
  498 |     await this.employeeID.fill(details.employeeId);
  499 |     await this.employeeID.blur();
  500 |   }
  501 | 
  502 |   if (details.profilePicturePath !== undefined) {
  503 |     await this.profilePictureInput.setInputFiles(
  504 |       details.profilePicturePath
  505 |     );
  506 |   }
  507 | }
  508 | 
  509 | 
  510 | async resetEmployeeFilters(): Promise<void> {
  511 |   const employeeListResponse = this.page.waitForResponse(
  512 |     response =>
  513 |       response.url().includes('/api/v2/pim/employees') &&
  514 |       response.request().method() === 'GET' &&
  515 |       response.ok(),
  516 |     { timeout: 15_000 }
  517 |   );
  518 | 
  519 |   await this.page
  520 |     .getByRole('button', { name: 'Reset', exact: true })
  521 |     .click();
  522 | 
  523 |   await employeeListResponse;
  524 |   await expect(this.loadingSpinner).toBeHidden();
  525 | }
  526 | 
  527 | async selectEmployeeFromAutocomplete(
  528 |   partialName: string,
  529 |   expectedName: string
  530 | ): Promise<void> {
  531 |   await this.employeeNameFilterInput.fill(partialName);
  532 | 
  533 |   const matchingOption = this.page
  534 |     .locator('.oxd-autocomplete-option')
  535 |     .filter({ hasText: expectedName });
  536 | 
  537 |   await expect(matchingOption).toBeVisible({
  538 |     timeout: 15_000,
  539 |   });
  540 | 
  541 |   await matchingOption.click();
  542 | }
  543 | 
  544 | async addEmployeeWithLoginDetails(
  545 |   details: EmployeeWithLoginDetails
  546 | ): Promise<string> {
  547 |   await this.fillAddEmployeeForm({
  548 |     firstName: details.firstName,
  549 |     middleName: details.middleName,
  550 |     lastName: details.lastName,
  551 |     employeeId: details.employeeId,
  552 |     profilePicturePath: details.profilePicturePath,
  553 |   });
  554 | 
  555 |   const employeeId = await this.employeeID.inputValue();
  556 | 
  557 |   await this.createLoginDetailsSwitch.check();
  558 | 
> 559 |   await expect(this.employeeUsernameInput).toBeVisible();
      |                                            ^ Error: expect(locator).toBeVisible() failed
  560 |   await expect(this.employeePasswordInput).toBeVisible();
  561 |   await expect(this.confirmPasswordInput).toBeVisible();
  562 | 
  563 |   await this.employeeUsernameInput.fill(details.username);
  564 |   await this.employeePasswordInput.fill(details.password);
  565 |   await this.confirmPasswordInput.fill(details.password);
  566 | 
  567 |   if (details.status === 'Disabled') {
  568 |     await this.disabledStatusRadio.check();
  569 |   } else {
  570 |     await this.enabledStatusRadio.check();
  571 |   }
  572 | 
  573 |   await expect(this.employeeUsernameInput).toHaveValue(
  574 |     details.username
  575 |   );
  576 | 
  577 |   await expect(this.employeePasswordInput).toHaveValue(
  578 |     details.password
  579 |   );
  580 | 
  581 |   await expect(this.confirmPasswordInput).toHaveValue(
  582 |     details.password
  583 |   );
  584 | 
  585 |   const createEmployeeResponse = this.page.waitForResponse(
  586 |     response =>
  587 |       response.url().includes('/api/v2/pim/employees') &&
  588 |       response.request().method() === 'POST' &&
  589 |       response.ok(),
  590 |     { timeout: 20_000 }
  591 |   );
  592 | 
  593 |   await this.SaveEmployeeButton.click();
  594 | 
  595 |   await createEmployeeResponse;
  596 | 
  597 |   await this.page.waitForURL(
  598 |     /pim\/viewPersonalDetails\/empNumber\/\d+/,
  599 |     { timeout: 20_000 }
  600 |   );
  601 | 
  602 |   await expect(this.loadingSpinner).toBeHidden();
  603 | 
  604 |   return employeeId;
  605 | }
  606 | 
  607 | }
  608 | 
```