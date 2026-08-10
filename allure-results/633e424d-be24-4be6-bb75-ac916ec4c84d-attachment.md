# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> TC_PIM_038 - Admin should delete multiple employees using bulk selection @positive @bulk-delete @regression
- Location: tests\PIM\pim-employee-list.spec.ts:281:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-table-body .oxd-table-card').filter({ has: locator('.oxd-table-cell').nth(1).getByText('ERQAB5R9MR', { exact: true }) })
Expected: 1
Received: 0

Call log:
  - Expect "toHaveCount" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').filter({ has: locator('.oxd-table-cell').nth(1).getByText('ERQAB5R9MR', { exact: true }) })
    5 × locator resolved to 0 elements
      - unexpected value "0"
  - Test timeout of 60000ms exceeded.

```

# Test source

```ts
  661 |   }
  662 | 
  663 |   async addEmployeeWithLoginDetails(
  664 |     details: EmployeeWithLoginDetails,
  665 |   ): Promise<string> {
  666 |     await this.fillAddEmployeeForm({
  667 |       firstName: details.firstName,
  668 |       middleName: details.middleName,
  669 |       lastName: details.lastName,
  670 |       employeeId: details.employeeId,
  671 |       profilePicturePath: details.profilePicturePath,
  672 |     });
  673 | 
  674 |     const employeeId = await this.employeeID.inputValue();
  675 | 
  676 |     if (!(await this.createLoginDetailsCheckbox.isChecked())) {
  677 |       await this.createLoginDetailsSwitch.click();
  678 |     }
  679 | 
  680 |     await expect(this.createLoginDetailsCheckbox).toBeChecked();
  681 | 
  682 |     await expect(this.employeeUsernameInput).toBeVisible();
  683 |     await expect(this.employeePasswordInput).toBeVisible();
  684 |     await expect(this.confirmPasswordInput).toBeVisible();
  685 | 
  686 |     await this.employeeUsernameInput.fill(details.username);
  687 |     await this.employeePasswordInput.fill(details.password);
  688 |     await this.confirmPasswordInput.fill(details.password);
  689 | 
  690 |     if (details.status === "Disabled") {
  691 |       await this.disabledStatusRadio.check({
  692 |         force: true,
  693 |       });
  694 | 
  695 |       await expect(this.disabledStatusRadio).toBeChecked();
  696 |     } else {
  697 |       await this.enabledStatusRadio.check({
  698 |         force: true,
  699 |       });
  700 | 
  701 |       await expect(this.enabledStatusRadio).toBeChecked();
  702 |     }
  703 |     await expect(this.employeeUsernameInput).toHaveValue(details.username);
  704 | 
  705 |     await expect(this.employeePasswordInput).toHaveValue(details.password);
  706 | 
  707 |     await expect(this.confirmPasswordInput).toHaveValue(details.password);
  708 | 
  709 |     const createEmployeeResponse = this.page.waitForResponse(
  710 |       (response) =>
  711 |         response.url().includes("/api/v2/pim/employees") &&
  712 |         response.request().method() === "POST" &&
  713 |         response.ok(),
  714 |       { timeout: 20_000 },
  715 |     );
  716 | 
  717 |     await this.SaveEmployeeButton.click();
  718 | 
  719 |     await createEmployeeResponse;
  720 | 
  721 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  722 |       timeout: 20_000,
  723 |     });
  724 | 
  725 |     await expect(this.loadingSpinner).toBeHidden();
  726 | 
  727 |     return employeeId;
  728 |   }
  729 | 
  730 |   async verifyPasswordStrength(expectedStrength: RegExp): Promise<void> {
  731 |     await expect(this.passwordStrengthIndicator).toBeVisible();
  732 | 
  733 |     await expect(this.passwordStrengthIndicator).toHaveText(expectedStrength);
  734 |   }
  735 | 
  736 |   async canceldeleteEmployeeById(employeeId: string): Promise<void> {
  737 |     await expect(this.loadingSpinner).toBeHidden();
  738 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  739 |     await expect(matchingRow).toHaveCount(1);
  740 |     const deleteButton = matchingRow.locator("button").filter({
  741 |       has: this.page.locator("i.bi-trash"),
  742 |     });
  743 |     await deleteButton.click();
  744 | 
  745 |     const confirmationDilaog = this.page.getByRole("dialog");
  746 |     await expect(confirmationDilaog).toBeVisible();
  747 | 
  748 |     await confirmationDilaog.getByText("No, Cancel", { exact: true }).click();
  749 | 
  750 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  751 |   }
  752 | 
  753 |   async selectEmployeeById(employeeId: string): Promise<void> {
  754 |     const employeeRow = this.employeeRows.filter({
  755 |       has: this.page
  756 |         .locator(".oxd-table-cell")
  757 |         .nth(1)
  758 |         .getByText(employeeId, { exact: true }),
  759 |     });
  760 | 
> 761 |     await expect(employeeRow).toHaveCount(1);
      |                               ^ Error: expect(locator).toHaveCount(expected) failed
  762 | 
  763 |     const rowCheckbox = employeeRow.locator('input[type="checkbox"]');
  764 | 
  765 |     await rowCheckbox.check({
  766 |       force: true,
  767 |     });
  768 | 
  769 |     await expect(rowCheckbox).toBeChecked();
  770 |   }
  771 | 
  772 |   async deleteSelectedEmployees(): Promise<void> {
  773 |     const deleteSelectedButton = this.page.getByRole("button", {
  774 |       name: /Delete Selected/i,
  775 |     });
  776 | 
  777 |     await expect(deleteSelectedButton).toBeVisible();
  778 |     await deleteSelectedButton.click();
  779 | 
  780 |     const confirmationDialog = this.page.getByRole("dialog");
  781 | 
  782 |     await expect(confirmationDialog).toBeVisible();
  783 | 
  784 |     const deleteResponse = this.page.waitForResponse(
  785 |       (response) =>
  786 |         response.url().includes("/api/v2/pim/employees") &&
  787 |         response.request().method() === "DELETE" &&
  788 |         response.ok(),
  789 |       { timeout: 20_000 },
  790 |     );
  791 | 
  792 |     await confirmationDialog
  793 |       .getByRole("button", {
  794 |         name: /Yes, Delete/i,
  795 |       })
  796 |       .click();
  797 | 
  798 |     await deleteResponse;
  799 | 
  800 |     await expect(confirmationDialog).toBeHidden();
  801 | 
  802 |     await expect(this.successToast).toContainText("Successfully Deleted");
  803 | 
  804 |     await expect(this.loadingSpinner).toBeHidden();
  805 |   }
  806 | 
  807 |   async selectAllVisibleEmployees(): Promise<void> {
  808 |     await expect(this.loadingSpinner).toBeHidden({
  809 |       timeout: 20_000,
  810 |     });
  811 | 
  812 |     await expect(this.employeeRows.first()).toBeVisible({
  813 |       timeout: 20_000,
  814 |     });
  815 | 
  816 |     const headerCheckbox = this.page.locator(
  817 |       '.oxd-table-header input[type="checkbox"]',
  818 |     );
  819 | 
  820 |     const rowCheckboxes = this.employeeRows.locator('input[type="checkbox"]');
  821 | 
  822 |     await expect
  823 |       .poll(async () => rowCheckboxes.count(), {
  824 |         timeout: 20_000,
  825 |         message: "Waiting for Employee List rows to load",
  826 |       })
  827 |       .toBeGreaterThan(0);
  828 | 
  829 |     const rowCount = await rowCheckboxes.count();
  830 | 
  831 |     await headerCheckbox.check({
  832 |       force: true,
  833 |     });
  834 | 
  835 |     await expect(headerCheckbox).toBeChecked();
  836 | 
  837 |     for (let index = 0; index < rowCount; index++) {
  838 |       await expect(rowCheckboxes.nth(index)).toBeChecked();
  839 |     }
  840 |   }
  841 | 
  842 |   async deselectAllVisibleEmployees(): Promise<void> {
  843 |     const headerCheckbox = this.page.locator(
  844 |       '.oxd-table-header input[type="checkbox"]',
  845 |     );
  846 | 
  847 |     const rowCheckboxes = this.employeeRows.locator('input[type="checkbox"]');
  848 | 
  849 |     const rowCount = await rowCheckboxes.count();
  850 | 
  851 |     expect(rowCount).toBeGreaterThan(0);
  852 | 
  853 |     await headerCheckbox.uncheck({
  854 |       force: true,
  855 |     });
  856 | 
  857 |     await expect(headerCheckbox).not.toBeChecked();
  858 | 
  859 |     for (let index = 0; index < rowCount; index++) {
  860 |       await expect(rowCheckboxes.nth(index)).not.toBeChecked();
  861 |     }
```