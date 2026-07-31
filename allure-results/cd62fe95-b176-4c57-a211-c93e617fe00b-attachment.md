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

Locator: locator('//input[@fdprocessedid=\'enwsr\']')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('//input[@fdprocessedid=\'enwsr\']')

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
- textbox "First Name": Auto1785488279773
- textbox "Middle Name": User
- textbox "Last Name"
- text: Employee Id
- textbox: "0637"
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
  456 | 
  457 |   await this.firstnameInput.fill(details.firstName);
  458 | 
  459 |     if (details.middleName !== undefined) {
  460 |       await this.middlenameInput.fill(details.middleName);
  461 |     }
  462 | 
  463 |     await this.lastnameInput.fill(details.lastName);
  464 | 
  465 |     if (details.employeeId !== undefined) {
  466 |       await this.employeeID.fill(details.employeeId);
  467 |     }
  468 | 
  469 |     if (details.profilePicturePath !== undefined) {
  470 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  471 |     }
  472 |  
  473 |     await this.SaveEmployeeButton.click(); 
  474 |  }
  475 | 
  476 | 
  477 |  async fillAddEmployeeForm(
  478 |   details: AddEmployeeDetails
  479 | ): Promise<void> {
  480 |   
  481 |     if (details.firstName !== undefined) {
  482 |     await this.firstnameInput.fill(details.firstName);
  483 |   }
  484 | 
  485 |   if (details.middleName !== undefined) {
  486 |     await this.middlenameInput.fill(details.middleName);
  487 |   }
  488 | 
  489 | 
  490 |     if (details.lastName !== undefined) {
  491 |     await this.middlenameInput.fill(details.lastName);
  492 |   }
  493 | 
  494 |   if (details.employeeId !== undefined) {
  495 |     await this.employeeID.fill(details.employeeId);
  496 |     await this.employeeID.blur();
  497 |   }
  498 | 
  499 |   if (details.profilePicturePath !== undefined) {
  500 |     await this.profilePictureInput.setInputFiles(
  501 |       details.profilePicturePath
  502 |     );
  503 |   }
  504 | }
  505 | 
  506 | 
  507 | async resetEmployeeFilters(): Promise<void> {
  508 |   const employeeListResponse = this.page.waitForResponse(
  509 |     response =>
  510 |       response.url().includes('/api/v2/pim/employees') &&
  511 |       response.request().method() === 'GET' &&
  512 |       response.ok(),
  513 |     { timeout: 15_000 }
  514 |   );
  515 | 
  516 |   await this.page
  517 |     .getByRole('button', { name: 'Reset', exact: true })
  518 |     .click();
  519 | 
  520 |   await employeeListResponse;
  521 |   await expect(this.loadingSpinner).toBeHidden();
  522 | }
  523 | 
  524 | async selectEmployeeFromAutocomplete(
  525 |   partialName: string,
  526 |   expectedName: string
  527 | ): Promise<void> {
  528 |   await this.employeeNameFilterInput.fill(partialName);
  529 | 
  530 |   const matchingOption = this.page
  531 |     .locator('.oxd-autocomplete-option')
  532 |     .filter({ hasText: expectedName });
  533 | 
  534 |   await expect(matchingOption).toBeVisible({
  535 |     timeout: 15_000,
  536 |   });
  537 | 
  538 |   await matchingOption.click();
  539 | }
  540 | 
  541 | async addEmployeeWithLoginDetails(
  542 |   details: EmployeeWithLoginDetails
  543 | ): Promise<string> {
  544 |   await this.fillAddEmployeeForm({
  545 |     firstName: details.firstName,
  546 |     middleName: details.middleName,
  547 |     lastName: details.lastName,
  548 |     employeeId: details.employeeId,
  549 |     profilePicturePath: details.profilePicturePath,
  550 |   });
  551 | 
  552 |   const employeeId = await this.employeeID.inputValue();
  553 | 
  554 |   await this.createLoginDetailsSwitch.check();
  555 | 
> 556 |   await expect(this.employeeUsernameInput).toBeVisible();
      |                                            ^ Error: expect(locator).toBeVisible() failed
  557 |   await expect(this.employeePasswordInput).toBeVisible();
  558 |   await expect(this.confirmPasswordInput).toBeVisible();
  559 | 
  560 |   await this.employeeUsernameInput.fill(details.username);
  561 |   await this.employeePasswordInput.fill(details.password);
  562 |   await this.confirmPasswordInput.fill(details.password);
  563 | 
  564 |   if (details.status === 'Disabled') {
  565 |     await this.disabledStatusRadio.check();
  566 |   } else {
  567 |     await this.enabledStatusRadio.check();
  568 |   }
  569 | 
  570 |   await expect(this.employeeUsernameInput).toHaveValue(
  571 |     details.username
  572 |   );
  573 | 
  574 |   await expect(this.employeePasswordInput).toHaveValue(
  575 |     details.password
  576 |   );
  577 | 
  578 |   await expect(this.confirmPasswordInput).toHaveValue(
  579 |     details.password
  580 |   );
  581 | 
  582 |   const createEmployeeResponse = this.page.waitForResponse(
  583 |     response =>
  584 |       response.url().includes('/api/v2/pim/employees') &&
  585 |       response.request().method() === 'POST' &&
  586 |       response.ok(),
  587 |     { timeout: 20_000 }
  588 |   );
  589 | 
  590 |   await this.SaveEmployeeButton.click();
  591 | 
  592 |   await createEmployeeResponse;
  593 | 
  594 |   await this.page.waitForURL(
  595 |     /pim\/viewPersonalDetails\/empNumber\/\d+/,
  596 |     { timeout: 20_000 }
  597 |   );
  598 | 
  599 |   await expect(this.loadingSpinner).toBeHidden();
  600 | 
  601 |   return employeeId;
  602 | }
  603 | 
  604 | }
  605 | 
```