# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> PIM Employee >> TC_PIM_035 - Disabled employee account should not login @negative @security @account @regression
- Location: tests\PIM\pim-employee.spec.ts:178:7

# Error details

```
TimeoutError: page.waitForResponse: Timeout 20000ms exceeded while waiting for event "response"
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
              - paragraph [ref=f3e127]: Maria de Jesus
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
                  - textbox "First Name" [ref=f3e171]: Auto178641882066823
                  - textbox "Middle Name" [ref=f3e174]: Test
                  - textbox "Last Name" [ref=f3e177]: User
              - generic [ref=f3e180]:
                - generic [ref=f3e181]: Employee Id
                - textbox [ref=f3e184]: "0514"
                - generic [ref=f3e185]: Employee Id already exists
            - separator [ref=f3e186]
            - generic [ref=f3e187]:
              - paragraph [ref=f3e188]: Create Login Details
              - checkbox [checked] [ref=f3e191]
            - generic [ref=f3e194]:
              - generic [ref=f3e196]:
                - generic [ref=f3e197]: Username*
                - textbox [ref=f3e200]: user1786418820668925
              - generic [ref=f3e202]:
                - generic [ref=f3e203]: Status
                - generic [ref=f3e205]:
                  - generic [ref=f3e209] [cursor=pointer]:
                    - radio "Enabled" [ref=f3e210]
                    - text: Enabled
                  - generic [ref=f3e215] [cursor=pointer]:
                    - radio "Disabled" [checked] [ref=f3e216]
                    - text: Disabled
            - generic [ref=f3e219]:
              - generic [ref=f3e220]:
                - generic [ref=f3e221]: Better
                - generic [ref=f3e222]:
                  - generic [ref=f3e223]: Password*
                  - textbox [ref=f3e226]: Test@12345
                - paragraph [ref=f3e227]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
              - generic [ref=f3e229]:
                - generic [ref=f3e230]: Confirm Password*
                - textbox [ref=f3e233]: Test@12345
        - separator [ref=f3e234]
        - generic [ref=f3e235]:
          - paragraph [ref=f3e236]: "* Required"
          - button "Cancel" [ref=f3e237] [cursor=pointer]
          - button "Save" [active] [ref=f3e238] [cursor=pointer]
    - generic [ref=f3e239]:
      - paragraph [ref=f3e240]: OrangeHRM OS 5.9
      - paragraph [ref=f3e241]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e242] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  628 |   async fillAddEmployeeForm(details: AddEmployeeDetails): Promise<void> {
  629 |     if (details.firstName !== undefined) {
  630 |       await this.firstnameInput.fill(details.firstName);
  631 |     }
  632 | 
  633 |     if (details.middleName !== undefined) {
  634 |       await this.middlenameInput.fill(details.middleName);
  635 |     }
  636 | 
  637 |     if (details.lastName !== undefined) {
  638 |       await this.lastnameInput.fill(details.lastName);
  639 |     }
  640 | 
  641 |     if (details.employeeId !== undefined) {
  642 |       await this.employeeID.fill(details.employeeId);
  643 |       await this.employeeID.blur();
  644 |     }
  645 | 
  646 |     if (details.profilePicturePath !== undefined) {
  647 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  648 |     }
  649 |   }
  650 | 
  651 |   async resetEmployeeFilters(): Promise<void> {
  652 |     const employeeListResponse = this.page.waitForResponse(
  653 |       (response) =>
  654 |         response.url().includes("/api/v2/pim/employees") &&
  655 |         response.request().method() === "GET" &&
  656 |         response.ok(),
  657 |       { timeout: 15_000 },
  658 |     );
  659 | 
  660 |     await this.page.getByRole("button", { name: "Reset", exact: true }).click();
  661 | 
  662 |     await employeeListResponse;
  663 |     await expect(this.loadingSpinner).toBeHidden();
  664 |   }
  665 | 
  666 |   async selectEmployeeFromAutocomplete(
  667 |     partialName: string,
  668 |     expectedFullName: string,
  669 |   ): Promise<void> {
  670 |     await this.employeeNameFilterInput.fill(partialName);
  671 | 
  672 |   const matchingOption = this.page
  673 |   .locator(".oxd-autocomplete-option")
  674 |   .filter({ hasText: expectedFullName });
  675 | 
  676 |   await matchingOption.waitFor({ state: "visible" });
  677 | 
  678 |     await expect(matchingOption).toBeVisible({ timeout: 15000 });
  679 |     await matchingOption.click();
  680 |   }
  681 | 
  682 |   async addEmployeeWithLoginDetails(
  683 |     details: EmployeeWithLoginDetails,
  684 |   ): Promise<string> {
  685 |     await this.fillAddEmployeeForm({
  686 |       firstName: details.firstName,
  687 |       middleName: details.middleName,
  688 |       lastName: details.lastName,
  689 |       employeeId: details.employeeId,
  690 |       profilePicturePath: details.profilePicturePath,
  691 |     });
  692 | 
  693 |     const employeeId = await this.employeeID.inputValue();
  694 | 
  695 |     if (!(await this.createLoginDetailsCheckbox.isChecked())) {
  696 |       await this.createLoginDetailsSwitch.click();
  697 |     }
  698 | 
  699 |     await expect(this.createLoginDetailsCheckbox).toBeChecked();
  700 | 
  701 |     await expect(this.employeeUsernameInput).toBeVisible();
  702 |     await expect(this.employeePasswordInput).toBeVisible();
  703 |     await expect(this.confirmPasswordInput).toBeVisible();
  704 | 
  705 |     await this.employeeUsernameInput.fill(details.username);
  706 |     await this.employeePasswordInput.fill(details.password);
  707 |     await this.confirmPasswordInput.fill(details.password);
  708 | 
  709 |     if (details.status === "Disabled") {
  710 |       await this.disabledStatusRadio.check({
  711 |         force: true,
  712 |       });
  713 | 
  714 |       await expect(this.disabledStatusRadio).toBeChecked();
  715 |     } else {
  716 |       await this.enabledStatusRadio.check({
  717 |         force: true,
  718 |       });
  719 | 
  720 |       await expect(this.enabledStatusRadio).toBeChecked();
  721 |     }
  722 |     await expect(this.employeeUsernameInput).toHaveValue(details.username);
  723 | 
  724 |     await expect(this.employeePasswordInput).toHaveValue(details.password);
  725 | 
  726 |     await expect(this.confirmPasswordInput).toHaveValue(details.password);
  727 | 
> 728 |     const createEmployeeResponse = this.page.waitForResponse(
      |                                              ^ TimeoutError: page.waitForResponse: Timeout 20000ms exceeded while waiting for event "response"
  729 |       (response) =>
  730 |         response.url().includes("/api/v2/pim/employees") &&
  731 |         response.request().method() === "POST" &&
  732 |         response.ok(),
  733 |       { timeout: 20_000 },
  734 |     );
  735 | 
  736 |     await this.SaveEmployeeButton.click();
  737 | 
  738 |     await createEmployeeResponse;
  739 | 
  740 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  741 |       timeout: 20_000,
  742 |     });
  743 | 
  744 |     await expect(this.loadingSpinner).toBeHidden();
  745 | 
  746 |     return employeeId;
  747 |   }
  748 | 
  749 |   async verifyPasswordStrength(expectedStrength: RegExp): Promise<void> {
  750 |     await expect(this.passwordStrengthIndicator).toBeVisible();
  751 | 
  752 |     await expect(this.passwordStrengthIndicator).toHaveText(expectedStrength);
  753 |   }
  754 | 
  755 |   async canceldeleteEmployeeById(employeeId: string): Promise<void> {
  756 |     await expect(this.loadingSpinner).toBeHidden();
  757 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  758 |     await expect(matchingRow).toHaveCount(1);
  759 |     const deleteButton = matchingRow.locator("button").filter({
  760 |       has: this.page.locator("i.bi-trash"),
  761 |     });
  762 |     await deleteButton.click();
  763 | 
  764 |     const confirmationDilaog = this.page.getByRole("dialog");
  765 |     await expect(confirmationDilaog).toBeVisible();
  766 | 
  767 |     await confirmationDilaog.getByText("No, Cancel", { exact: true }).click();
  768 | 
  769 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  770 |   }
  771 | 
  772 |   async selectEmployeeById(employeeId: string): Promise<void> {
  773 |     const employeeRow = this.employeeRows.filter({
  774 |       has: this.page
  775 |         .locator(".oxd-table-cell")
  776 |         .nth(1)
  777 |         .getByText(employeeId, { exact: true }),
  778 |     });
  779 | 
  780 |     await expect(employeeRow).toHaveCount(1);
  781 | 
  782 |     const rowCheckbox = employeeRow.locator('input[type="checkbox"]');
  783 | 
  784 |     await rowCheckbox.check({
  785 |       force: true,
  786 |     });
  787 | 
  788 |     await expect(rowCheckbox).toBeChecked();
  789 |   }
  790 | 
  791 |   async deleteSelectedEmployees(): Promise<void> {
  792 |     const deleteSelectedButton = this.page.getByRole("button", {
  793 |       name: /Delete Selected/i,
  794 |     });
  795 | 
  796 |     await expect(deleteSelectedButton).toBeVisible();
  797 |     await deleteSelectedButton.click();
  798 | 
  799 |     const confirmationDialog = this.page.getByRole("dialog");
  800 | 
  801 |     await expect(confirmationDialog).toBeVisible();
  802 | 
  803 |     const deleteResponse = this.page.waitForResponse(
  804 |       (response) =>
  805 |         response.url().includes("/api/v2/pim/employees") &&
  806 |         response.request().method() === "DELETE" &&
  807 |         response.ok(),
  808 |       { timeout: 20_000 },
  809 |     );
  810 | 
  811 |     await confirmationDialog
  812 |       .getByRole("button", {
  813 |         name: /Yes, Delete/i,
  814 |       })
  815 |       .click();
  816 | 
  817 |     await deleteResponse;
  818 | 
  819 |     await expect(confirmationDialog).toBeHidden();
  820 | 
  821 |     await expect(this.successToast).toContainText("Successfully Deleted");
  822 | 
  823 |     await expect(this.loadingSpinner).toBeHidden();
  824 |   }
  825 | 
  826 |   async selectAllVisibleEmployees(): Promise<void> {
  827 |     await expect(this.loadingSpinner).toBeHidden({
  828 |       timeout: 20_000,
```