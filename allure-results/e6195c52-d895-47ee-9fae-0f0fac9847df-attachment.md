# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_035 - Disabled employee account should not be able to login @negative @security @account @regression
- Location: tests\PIM\pim-employee.spec.ts:933:6

# Error details

```
TimeoutError: locator.check: Timeout 15000ms exceeded.
Call log:
  - waiting for getByText('Disabled', { exact: true }).locator('..').locator('input[type="radio"]')
    - locator resolved to <input value="2" type="radio" data-v-7ef819fd=""/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span data-v-7ef819fd="" class="oxd-radio-input oxd-radio-input--active --label-right oxd-radio-input"></span> intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span data-v-7ef819fd="" class="oxd-radio-input oxd-radio-input--active --label-right oxd-radio-input"></span> intercepts pointer events
    - retrying click action
      - waiting 100ms
    28 × waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <span data-v-7ef819fd="" class="oxd-radio-input oxd-radio-input--active --label-right oxd-radio-input"></span> intercepts pointer events
     - retrying click action
       - waiting 500ms

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
              - link "Recruitment" [ref=f3e42] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f3e49]:
              - link "My Info" [ref=f3e50] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f3e57]:
              - link "Performance" [ref=f3e58] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f3e67]:
              - link "Dashboard" [ref=f3e68] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f3e72]:
              - link "Directory" [ref=f3e73] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f3e77]:
              - link "Maintenance" [ref=f3e78] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f3e83]:
              - link "Claim" [ref=f3e84] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f3e92]:
              - link "Buzz" [ref=f3e93] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f3e97]:
      - generic [ref=f3e98]:
        - generic [ref=f3e99]:
          - text: 
          - heading "PIM" [level=6] [ref=f3e101]
        - link [ref=f3e103]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f3e104] [cursor=pointer]
        - list [ref=f3e110]:
          - listitem [ref=f3e111]:
            - generic [ref=f3e112] [cursor=pointer]:
              - img "profile picture" [ref=f3e113]
              - paragraph [ref=f3e114]: Nikitha SM
              - generic [ref=f3e115]: 
      - navigation "Topbar Menu" [ref=f3e117]:
        - list [ref=f3e118]:
          - listitem [ref=f3e119] [cursor=pointer]:
            - generic [ref=f3e120]:
              - text: Configuration
              - generic [ref=f3e121]: 
          - listitem [ref=f3e122] [cursor=pointer]:
            - link "Employee List" [ref=f3e123]:
              - /url: "#"
          - listitem [ref=f3e124] [cursor=pointer]:
            - link "Add Employee" [ref=f3e125]:
              - /url: "#"
          - listitem [ref=f3e126] [cursor=pointer]:
            - link "Reports" [ref=f3e127]:
              - /url: "#"
          - button "" [ref=f3e129] [cursor=pointer]
  - generic [ref=f3e131]:
    - generic [ref=f3e134]:
      - heading "Add Employee" [level=6] [ref=f3e135]
      - separator [ref=f3e136]
      - generic [ref=f3e137]:
        - generic [ref=f3e138]:
          - generic [ref=f3e139]:
            - generic [ref=f3e141]:
              - button "Choose File"
              - generic [ref=f3e142]:
                - img "profile picture" [ref=f3e144]
                - button "" [ref=f3e145] [cursor=pointer]
            - paragraph [ref=f3e147]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
          - generic [ref=f3e148]:
            - generic [ref=f3e149]:
              - generic [ref=f3e152]:
                - generic [ref=f3e153]: Employee Full Name*
                - generic [ref=f3e155]:
                  - textbox "First Name" [ref=f3e158]: Auto1785512019463
                  - textbox "Middle Name" [ref=f3e161]: Test
                  - textbox "Last Name" [ref=f3e164]: User
              - generic [ref=f3e167]:
                - generic [ref=f3e168]: Employee Id
                - textbox [ref=f3e171]: "0543"
            - separator [ref=f3e172]
            - generic [ref=f3e173]:
              - paragraph [ref=f3e174]: Create Login Details
              - checkbox [checked] [ref=f3e177]
            - generic [ref=f3e180]:
              - generic [ref=f3e182]:
                - generic [ref=f3e183]: Username*
                - textbox [ref=f3e186]: user1785512019463
              - generic [ref=f3e188]:
                - generic [ref=f3e189]: Status
                - generic [ref=f3e191]:
                  - generic [ref=f3e195] [cursor=pointer]:
                    - radio "Enabled" [checked] [ref=f3e196]
                    - text: Enabled
                  - generic [ref=f3e201] [cursor=pointer]:
                    - radio "Disabled" [ref=f3e202]
                    - text: Disabled
            - generic [ref=f3e205]:
              - generic [ref=f3e206]:
                - generic [ref=f3e207]: Better
                - generic [ref=f3e208]:
                  - generic [ref=f3e209]: Password*
                  - textbox [ref=f3e212]: Test@12345
                - paragraph [ref=f3e213]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
              - generic [ref=f3e215]:
                - generic [ref=f3e216]: Confirm Password*
                - textbox [active] [ref=f3e219]: Test@12345
        - separator [ref=f3e220]
        - generic [ref=f3e221]:
          - paragraph [ref=f3e222]: "* Required"
          - button "Cancel" [ref=f3e223] [cursor=pointer]
          - button "Save" [ref=f3e224] [cursor=pointer]
    - generic [ref=f3e225]:
      - paragraph [ref=f3e226]: OrangeHRM OS 5.9
      - paragraph [ref=f3e227]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e228] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  539 |     }
  540 |  
  541 |     await this.SaveEmployeeButton.click(); 
  542 |  }
  543 | 
  544 | 
  545 |  async fillAddEmployeeForm(
  546 |   details: AddEmployeeDetails
  547 | ): Promise<void> {
  548 |   
  549 |     if (details.firstName !== undefined) {
  550 |     await this.firstnameInput.fill(details.firstName);
  551 |   }
  552 | 
  553 |   if (details.middleName !== undefined) {
  554 |     await this.middlenameInput.fill(details.middleName);
  555 |   }
  556 | 
  557 | 
  558 |     if (details.lastName !== undefined) {
  559 |     await this.lastnameInput.fill(details.lastName);
  560 |   }
  561 | 
  562 |   if (details.employeeId !== undefined) {
  563 |     await this.employeeID.fill(details.employeeId);
  564 |     await this.employeeID.blur();
  565 |   }
  566 | 
  567 |   if (details.profilePicturePath !== undefined) {
  568 |     await this.profilePictureInput.setInputFiles(
  569 |       details.profilePicturePath
  570 |     );
  571 |   }
  572 | }
  573 | 
  574 | 
  575 | async resetEmployeeFilters(): Promise<void> {
  576 |   const employeeListResponse = this.page.waitForResponse(
  577 |     response =>
  578 |       response.url().includes('/api/v2/pim/employees') &&
  579 |       response.request().method() === 'GET' &&
  580 |       response.ok(),
  581 |     { timeout: 15_000 }
  582 |   );
  583 | 
  584 |   await this.page
  585 |     .getByRole('button', { name: 'Reset', exact: true })
  586 |     .click();
  587 | 
  588 |   await employeeListResponse;
  589 |   await expect(this.loadingSpinner).toBeHidden();
  590 | }
  591 | 
  592 | async selectEmployeeFromAutocomplete(
  593 |   partialName: string,
  594 |   expectedFullName: string
  595 | ): Promise<void> {
  596 |   await this.employeeNameFilterInput.fill(partialName);
  597 | 
  598 |   const matchingOption = this.page
  599 |     .locator('.oxd-autocomplete-option')
  600 |     .filter({ hasText: expectedFullName });
  601 | 
  602 |   await expect(matchingOption).toBeVisible({ timeout: 15000 });
  603 |   await matchingOption.click();
  604 | }
  605 | 
  606 | 
  607 | async addEmployeeWithLoginDetails(
  608 |   details: EmployeeWithLoginDetails
  609 | ): Promise<string> {
  610 |   await this.fillAddEmployeeForm({
  611 |     firstName: details.firstName,
  612 |     middleName: details.middleName,
  613 |     lastName: details.lastName,
  614 |     employeeId: details.employeeId,
  615 |     profilePicturePath: details.profilePicturePath,
  616 |   });
  617 | 
  618 |   const employeeId = await this.employeeID.inputValue();
  619 | 
  620 |   if (
  621 |   !(await this.createLoginDetailsCheckbox.isChecked())
  622 | ) {
  623 |   await this.createLoginDetailsSwitch.click();
  624 | }
  625 | 
  626 | await expect(
  627 |   this.createLoginDetailsCheckbox
  628 | ).toBeChecked();
  629 | 
  630 |   await expect(this.employeeUsernameInput).toBeVisible();
  631 |   await expect(this.employeePasswordInput).toBeVisible();
  632 |   await expect(this.confirmPasswordInput).toBeVisible();
  633 | 
  634 |   await this.employeeUsernameInput.fill(details.username);
  635 |   await this.employeePasswordInput.fill(details.password);
  636 |   await this.confirmPasswordInput.fill(details.password);
  637 | 
  638 |   if (details.status === 'Disabled') {
> 639 |     await this.disabledStatusRadio.check();
      |                                    ^ TimeoutError: locator.check: Timeout 15000ms exceeded.
  640 |   } else {
  641 |     await this.enabledStatusRadio.check();
  642 |   }
  643 | 
  644 |   await expect(this.employeeUsernameInput).toHaveValue(
  645 |     details.username
  646 |   );
  647 | 
  648 |   await expect(this.employeePasswordInput).toHaveValue(
  649 |     details.password
  650 |   );
  651 | 
  652 |   await expect(this.confirmPasswordInput).toHaveValue(
  653 |     details.password
  654 |   );
  655 | 
  656 |   const createEmployeeResponse = this.page.waitForResponse(
  657 |     response =>
  658 |       response.url().includes('/api/v2/pim/employees') &&
  659 |       response.request().method() === 'POST' &&
  660 |       response.ok(),
  661 |     { timeout: 20_000 }
  662 |   );
  663 | 
  664 |   await this.SaveEmployeeButton.click();
  665 | 
  666 |   await createEmployeeResponse;
  667 | 
  668 |   await this.page.waitForURL(
  669 |     /pim\/viewPersonalDetails\/empNumber\/\d+/,
  670 |     { timeout: 20_000 }
  671 |   );
  672 | 
  673 |   await expect(this.loadingSpinner).toBeHidden();
  674 | 
  675 |   return employeeId;
  676 | }
  677 | 
  678 | 
  679 | async verifyPasswordStrength(
  680 |   expectedStrength: RegExp
  681 | ): Promise<void> {
  682 |   await expect(
  683 |     this.passwordStrengthIndicator
  684 |   ).toBeVisible();
  685 | 
  686 |   await expect(
  687 |     this.passwordStrengthIndicator
  688 |   ).toHaveText(expectedStrength);
  689 | }
  690 | 
  691 | }
  692 | 
```