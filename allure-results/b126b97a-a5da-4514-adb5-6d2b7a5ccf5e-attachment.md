# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> PIM Employee >> TC_PIM_035 - Disabled employee account should not login @negative @security @account @regression
- Location: tests\PIM\pim-employee.spec.ts:273:7

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
              - paragraph [ref=f3e127]: Demo Source
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
                  - textbox "First Name" [ref=f3e171]: Auto1787819844194879
                  - textbox "Middle Name" [ref=f3e174]: Test
                  - textbox "Last Name" [ref=f3e177]: User
              - generic [ref=f3e180]:
                - generic [ref=f3e181]: Employee Id
                - textbox [ref=f3e184]: "0511"
                - generic [ref=f3e185]: Employee Id already exists
            - separator [ref=f3e186]
            - generic [ref=f3e187]:
              - paragraph [ref=f3e188]: Create Login Details
              - checkbox [checked] [ref=f3e191]
            - generic [ref=f3e194]:
              - generic [ref=f3e196]:
                - generic [ref=f3e197]: Username*
                - textbox [ref=f3e200]: user178781984419410
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
  643 |   async fillAddEmployeeForm(details: AddEmployeeDetails): Promise<void> {
  644 |     if (details.firstName !== undefined) {
  645 |       await this.firstnameInput.fill(details.firstName);
  646 |     }
  647 | 
  648 |     if (details.middleName !== undefined) {
  649 |       await this.middlenameInput.fill(details.middleName);
  650 |     }
  651 | 
  652 |     if (details.lastName !== undefined) {
  653 |       await this.lastnameInput.fill(details.lastName);
  654 |     }
  655 | 
  656 |     if (details.employeeId !== undefined) {
  657 |       await this.employeeID.fill(details.employeeId);
  658 |       await this.employeeID.blur();
  659 |     }
  660 | 
  661 |     if (details.profilePicturePath !== undefined) {
  662 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  663 |     }
  664 |   }
  665 | 
  666 |   async resetEmployeeFilters(): Promise<void> {
  667 |     const employeeListResponse = this.page.waitForResponse(
  668 |       (response) =>
  669 |         response.url().includes("/api/v2/pim/employees") &&
  670 |         response.request().method() === "GET" &&
  671 |         response.ok(),
  672 |       { timeout: 15_000 },
  673 |     );
  674 | 
  675 |     await this.page.getByRole("button", { name: "Reset", exact: true }).click();
  676 | 
  677 |     await employeeListResponse;
  678 |     await expect(this.loadingSpinner).toBeHidden();
  679 |   }
  680 | 
  681 |   async selectEmployeeFromAutocomplete(
  682 |     partialName: string,
  683 |     expectedFullName: string,
  684 |   ): Promise<void> {
  685 |     await this.employeeNameFilterInput.fill(partialName);
  686 | 
  687 |     const matchingOption = this.page
  688 |       .locator(".oxd-autocomplete-option")
  689 |       .filter({ hasText: expectedFullName });
  690 | 
  691 |     await matchingOption.waitFor({ state: "visible" });
  692 | 
  693 |     await expect(matchingOption).toBeVisible({ timeout: 15000 });
  694 |     await matchingOption.click();
  695 |   }
  696 | 
  697 |   async addEmployeeWithLoginDetails(
  698 |     details: EmployeeWithLoginDetails,
  699 |   ): Promise<string> {
  700 |     await this.fillAddEmployeeForm({
  701 |       firstName: details.firstName,
  702 |       middleName: details.middleName,
  703 |       lastName: details.lastName,
  704 |       employeeId: details.employeeId,
  705 |       profilePicturePath: details.profilePicturePath,
  706 |     });
  707 | 
  708 |     const employeeId = await this.employeeID.inputValue();
  709 | 
  710 |     if (!(await this.createLoginDetailsCheckbox.isChecked())) {
  711 |       await this.createLoginDetailsSwitch.click();
  712 |     }
  713 | 
  714 |     await expect(this.createLoginDetailsCheckbox).toBeChecked();
  715 | 
  716 |     await expect(this.employeeUsernameInput).toBeVisible();
  717 |     await expect(this.employeePasswordInput).toBeVisible();
  718 |     await expect(this.confirmPasswordInput).toBeVisible();
  719 | 
  720 |     await this.employeeUsernameInput.fill(details.username);
  721 |     await this.employeePasswordInput.fill(details.password);
  722 |     await this.confirmPasswordInput.fill(details.password);
  723 | 
  724 |     if (details.status === "Disabled") {
  725 |       await this.disabledStatusRadio.check({
  726 |         force: true,
  727 |       });
  728 | 
  729 |       await expect(this.disabledStatusRadio).toBeChecked();
  730 |     } else {
  731 |       await this.enabledStatusRadio.check({
  732 |         force: true,
  733 |       });
  734 | 
  735 |       await expect(this.enabledStatusRadio).toBeChecked();
  736 |     }
  737 |     await expect(this.employeeUsernameInput).toHaveValue(details.username);
  738 | 
  739 |     await expect(this.employeePasswordInput).toHaveValue(details.password);
  740 | 
  741 |     await expect(this.confirmPasswordInput).toHaveValue(details.password);
  742 | 
> 743 |     const createEmployeeResponse = this.page.waitForResponse(
      |                                              ^ TimeoutError: page.waitForResponse: Timeout 20000ms exceeded while waiting for event "response"
  744 |       (response) =>
  745 |         response.url().includes("/api/v2/pim/employees") &&
  746 |         response.request().method() === "POST" &&
  747 |         response.ok(),
  748 |       { timeout: 20_000 },
  749 |     );
  750 | 
  751 |     await this.SaveEmployeeButton.click();
  752 | 
  753 |     await createEmployeeResponse;
  754 | 
  755 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  756 |       timeout: 20_000,
  757 |     });
  758 | 
  759 |     await expect(this.loadingSpinner).toBeHidden();
  760 | 
  761 |     return employeeId;
  762 |   }
  763 | 
  764 |   async verifyPasswordStrength(expectedStrength: RegExp): Promise<void> {
  765 |     await expect(this.passwordStrengthIndicator).toBeVisible();
  766 | 
  767 |     await expect(this.passwordStrengthIndicator).toHaveText(expectedStrength);
  768 |   }
  769 | 
  770 |   async canceldeleteEmployeeById(employeeId: string): Promise<void> {
  771 |     await expect(this.loadingSpinner).toBeHidden();
  772 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  773 |     await expect(matchingRow).toHaveCount(1);
  774 |     const deleteButton = matchingRow.locator("button").filter({
  775 |       has: this.page.locator("i.bi-trash"),
  776 |     });
  777 |     await deleteButton.click();
  778 | 
  779 |     const confirmationDilaog = this.page.getByRole("dialog");
  780 |     await expect(confirmationDilaog).toBeVisible();
  781 | 
  782 |     await confirmationDilaog.getByText("No, Cancel", { exact: true }).click();
  783 | 
  784 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  785 |   }
  786 | 
  787 |   async selectEmployeeById(employeeId: string): Promise<void> {
  788 |     const employeeRow = this.employeeRows.filter({
  789 |       has: this.page
  790 |         .locator(".oxd-table-cell")
  791 |         .nth(1)
  792 |         .getByText(employeeId, { exact: true }),
  793 |     });
  794 | 
  795 |     await expect(employeeRow).toHaveCount(1);
  796 | 
  797 |     const rowCheckbox = employeeRow.locator('input[type="checkbox"]');
  798 | 
  799 |     await rowCheckbox.check({
  800 |       force: true,
  801 |     });
  802 | 
  803 |     await expect(rowCheckbox).toBeChecked();
  804 |   }
  805 | 
  806 |   async deleteSelectedEmployees(): Promise<void> {
  807 |     const deleteSelectedButton = this.page.getByRole("button", {
  808 |       name: /Delete Selected/i,
  809 |     });
  810 | 
  811 |     await expect(deleteSelectedButton).toBeVisible();
  812 |     await deleteSelectedButton.click();
  813 | 
  814 |     const confirmationDialog = this.page.getByRole("dialog");
  815 | 
  816 |     await expect(confirmationDialog).toBeVisible();
  817 | 
  818 |     const deleteResponse = this.page.waitForResponse(
  819 |       (response) =>
  820 |         response.url().includes("/api/v2/pim/employees") &&
  821 |         response.request().method() === "DELETE" &&
  822 |         response.ok(),
  823 |       { timeout: 20_000 },
  824 |     );
  825 | 
  826 |     await confirmationDialog
  827 |       .getByRole("button", {
  828 |         name: /Yes, Delete/i,
  829 |       })
  830 |       .click();
  831 | 
  832 |     await deleteResponse;
  833 | 
  834 |     await expect(confirmationDialog).toBeHidden();
  835 | 
  836 |     await expect(this.successToast).toContainText("Successfully Deleted");
  837 | 
  838 |     await expect(this.loadingSpinner).toBeHidden();
  839 |   }
  840 | 
  841 |   async selectAllVisibleEmployees(): Promise<void> {
  842 |     await expect(this.loadingSpinner).toBeHidden({
  843 |       timeout: 20_000,
```