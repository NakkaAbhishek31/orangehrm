# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> 'TC_PIM_030 - Admin should create an employee with login credentials @positive @account @regression'
- Location: tests\PIM\pim-employee.spec.ts:586:6

# Error details

```
TimeoutError: locator.check: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('label').filter({ hasText: 'Create Login Details' }).locator('input[type="checkbox"]')

```

# Page snapshot

```yaml
- generic [ref=f3e3]:
  - generic:
    - complementary [ref=f3e4]:
      - navigation "Sidepanel" [ref=f3e5]:
        - generic [ref=f3e6]:
          - link [ref=f3e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f3e9]
          - text: 
        - generic [ref=f3e10]:
          - generic [ref=f3e11]:
            - generic [ref=f3e12]:
              - textbox "Search" [ref=f3e15]
              - button "" [ref=f3e16] [cursor=pointer]
            - separator [ref=f3e18]
          - list [ref=f3e19]:
            - listitem [ref=f3e20]:
              - link "Admin" [ref=f3e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f3e25]:
              - link "PIM" [ref=f3e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f3e41]:
              - link "Leave" [ref=f3e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f3e46]:
              - link "Time" [ref=f3e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f3e54]:
              - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f3e62]:
              - link "My Info" [ref=f3e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f3e70]:
              - link "Performance" [ref=f3e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f3e80]:
              - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f3e85]:
              - link "Directory" [ref=f3e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f3e90]:
              - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f3e96]:
              - link "Claim" [ref=f3e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f3e105]:
              - link "Buzz" [ref=f3e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f3e110]:
      - generic [ref=f3e111]:
        - generic [ref=f3e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f3e114]
        - link [ref=f3e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e117] [cursor=pointer]
        - list [ref=f3e123]:
          - listitem [ref=f3e124]:
            - generic [ref=f3e125] [cursor=pointer]:
              - img "profile picture" [ref=f3e126]
              - paragraph [ref=f3e127]: manda281 user
              - generic [ref=f3e128]: 
      - navigation "Topbar Menu" [ref=f3e130]:
        - list [ref=f3e131]:
          - listitem [ref=f3e132] [cursor=pointer]:
            - generic [ref=f3e133]:
              - text: Configuration
              - generic [ref=f3e134]: 
          - listitem [ref=f3e135] [cursor=pointer]:
            - link "Employee List" [ref=f3e136]:
              - /url: "#"
          - listitem [ref=f3e137] [cursor=pointer]:
            - link "Add Employee" [ref=f3e138]:
              - /url: "#"
          - listitem [ref=f3e139] [cursor=pointer]:
            - link "Reports" [ref=f3e140]:
              - /url: "#"
          - button "" [ref=f3e142] [cursor=pointer]
  - generic [ref=f3e144]:
    - generic [ref=f3e147]:
      - heading "Add Employee" [level=6] [ref=f3e148]
      - separator [ref=f3e149]
      - generic [ref=f3e150]:
        - generic [ref=f3e151]:
          - generic [ref=f3e152]:
            - generic [ref=f3e154]:
              - button "Choose File"
              - generic [ref=f3e155]:
                - img "profile picture" [ref=f3e157]
                - button "" [ref=f3e158] [cursor=pointer]
            - paragraph [ref=f3e160]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=f3e161]:
            - generic [ref=f3e162]:
              - generic [ref=f3e165]:
                - generic [ref=f3e166]: Employee Full Name*
                - generic [ref=f3e168]:
                  - textbox "First Name" [ref=f3e171]: Auto1785488035808
                  - textbox "Middle Name" [active] [ref=f3e174]: User
                  - textbox "Last Name" [ref=f3e177]
              - generic [ref=f3e180]:
                - generic [ref=f3e181]: Employee Id
                - textbox [ref=f3e184]: "0632"
            - separator [ref=f3e185]
            - generic [ref=f3e186]:
              - paragraph [ref=f3e187]: Create Login Details
              - checkbox [ref=f3e190]
        - separator [ref=f3e192]
        - generic [ref=f3e193]:
          - paragraph [ref=f3e194]: "* Required"
          - button "Cancel" [ref=f3e195] [cursor=pointer]
          - button "Save" [ref=f3e196] [cursor=pointer]
    - generic [ref=f3e197]:
      - paragraph [ref=f3e198]: OrangeHRM OS 5.9
      - paragraph [ref=f3e199]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e200] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  458 |  async saveEmployeeWithoutRequiredDetails(details: AddEmployeeDetails): Promise<void>
  459 |  {
  460 | 
  461 |   await this.firstnameInput.fill(details.firstName);
  462 | 
  463 |     if (details.middleName !== undefined) {
  464 |       await this.middlenameInput.fill(details.middleName);
  465 |     }
  466 | 
  467 |     await this.lastnameInput.fill(details.lastName);
  468 | 
  469 |     if (details.employeeId !== undefined) {
  470 |       await this.employeeID.fill(details.employeeId);
  471 |     }
  472 | 
  473 |     if (details.profilePicturePath !== undefined) {
  474 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  475 |     }
  476 |  
  477 |     await this.SaveEmployeeButton.click(); 
  478 |  }
  479 | 
  480 | 
  481 |  async fillAddEmployeeForm(
  482 |   details: AddEmployeeDetails
  483 | ): Promise<void> {
  484 |   
  485 |     if (details.firstName !== undefined) {
  486 |     await this.firstnameInput.fill(details.firstName);
  487 |   }
  488 | 
  489 |   if (details.middleName !== undefined) {
  490 |     await this.middlenameInput.fill(details.middleName);
  491 |   }
  492 | 
  493 | 
  494 |     if (details.lastName !== undefined) {
  495 |     await this.middlenameInput.fill(details.lastName);
  496 |   }
  497 | 
  498 |   if (details.employeeId !== undefined) {
  499 |     await this.employeeID.fill(details.employeeId);
  500 |     await this.employeeID.blur();
  501 |   }
  502 | 
  503 |   if (details.profilePicturePath !== undefined) {
  504 |     await this.profilePictureInput.setInputFiles(
  505 |       details.profilePicturePath
  506 |     );
  507 |   }
  508 | }
  509 | 
  510 | 
  511 | async resetEmployeeFilters(): Promise<void> {
  512 |   const employeeListResponse = this.page.waitForResponse(
  513 |     response =>
  514 |       response.url().includes('/api/v2/pim/employees') &&
  515 |       response.request().method() === 'GET' &&
  516 |       response.ok(),
  517 |     { timeout: 15_000 }
  518 |   );
  519 | 
  520 |   await this.page
  521 |     .getByRole('button', { name: 'Reset', exact: true })
  522 |     .click();
  523 | 
  524 |   await employeeListResponse;
  525 |   await expect(this.loadingSpinner).toBeHidden();
  526 | }
  527 | 
  528 | async selectEmployeeFromAutocomplete(
  529 |   partialName: string,
  530 |   expectedName: string
  531 | ): Promise<void> {
  532 |   await this.employeeNameFilterInput.fill(partialName);
  533 | 
  534 |   const matchingOption = this.page
  535 |     .locator('.oxd-autocomplete-option')
  536 |     .filter({ hasText: expectedName });
  537 | 
  538 |   await expect(matchingOption).toBeVisible({
  539 |     timeout: 15_000,
  540 |   });
  541 | 
  542 |   await matchingOption.click();
  543 | }
  544 | 
  545 | async addEmployeeWithLoginDetails(
  546 |   details: EmployeeWithLoginDetails
  547 | ): Promise<string> {
  548 |   await this.fillAddEmployeeForm({
  549 |     firstName: details.firstName,
  550 |     middleName: details.middleName,
  551 |     lastName: details.lastName,
  552 |     employeeId: details.employeeId,
  553 |     profilePicturePath: details.profilePicturePath,
  554 |   });
  555 | 
  556 |   const employeeId = await this.employeeID.inputValue();
  557 | 
> 558 |   await this.createLoginDetailsSwitch.check();
      |                                       ^ TimeoutError: locator.check: Timeout 15000ms exceeded.
  559 | 
  560 |   await expect(this.employeeUsernameInput).toBeVisible();
  561 |   await expect(this.employeePasswordInput).toBeVisible();
  562 |   await expect(this.confirmPasswordInput).toBeVisible();
  563 | 
  564 |   await this.employeeUsernameInput.fill(details.username);
  565 |   await this.employeePasswordInput.fill(details.password);
  566 |   await this.confirmPasswordInput.fill(details.password);
  567 | 
  568 |   if (details.status === 'Disabled') {
  569 |     await this.disabledStatusRadio.check();
  570 |   } else {
  571 |     await this.enabledStatusRadio.check();
  572 |   }
  573 | 
  574 |   await expect(this.employeeUsernameInput).toHaveValue(
  575 |     details.username
  576 |   );
  577 | 
  578 |   await expect(this.employeePasswordInput).toHaveValue(
  579 |     details.password
  580 |   );
  581 | 
  582 |   await expect(this.confirmPasswordInput).toHaveValue(
  583 |     details.password
  584 |   );
  585 | 
  586 |   const createEmployeeResponse = this.page.waitForResponse(
  587 |     response =>
  588 |       response.url().includes('/api/v2/pim/employees') &&
  589 |       response.request().method() === 'POST' &&
  590 |       response.ok(),
  591 |     { timeout: 20_000 }
  592 |   );
  593 | 
  594 |   await this.SaveEmployeeButton.click();
  595 | 
  596 |   await createEmployeeResponse;
  597 | 
  598 |   await this.page.waitForURL(
  599 |     /pim\/viewPersonalDetails\/empNumber\/\d+/,
  600 |     { timeout: 20_000 }
  601 |   );
  602 | 
  603 |   await expect(this.loadingSpinner).toBeHidden();
  604 | 
  605 |   return employeeId;
  606 | }
  607 | 
  608 | }
  609 | 
```