# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> TC_PIM_040 - Admin should select and deselect all employees on the current page @positive @selection @regression
- Location: tests\PIM\pim-employee-list.spec.ts:445:5

# Error details

```
Error: expect(locator).toBeChecked() failed

Locator:  locator('.oxd-table-body .oxd-table-card').locator('input[type="checkbox"]').nth(5)
Expected: checked
Received: unchecked
Timeout:  10000ms

Call log:
  - Expect "toBeChecked" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').locator('input[type="checkbox"]').nth(5)
    23 × locator resolved to <input type="checkbox" data-v-6179b72a=""/>
       - unexpected value "unchecked"

```

```yaml
- checkbox ""
```

# Test source

```ts
  729 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  730 |     await expect(matchingRow).toHaveCount(1);
  731 |     const deleteButton = matchingRow.locator("button").filter({
  732 |       has: this.page.locator("i.bi-trash"),
  733 |     });
  734 |     await deleteButton.click();
  735 | 
  736 |     const confirmationDilaog = this.page.getByRole("dialog");
  737 |     await expect(confirmationDilaog).toBeVisible();
  738 | 
  739 |     await confirmationDilaog.getByText("No, Cancel", { exact: true }).click();
  740 | 
  741 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  742 |   }
  743 | 
  744 |   async selectEmployeeById(employeeId: string): Promise<void> {
  745 |     const employeeRow = this.employeeRows.filter({
  746 |       has: this.page
  747 |         .locator(".oxd-table-cell")
  748 |         .nth(1)
  749 |         .getByText(employeeId, { exact: true }),
  750 |     });
  751 | 
  752 |     await expect(employeeRow).toHaveCount(1);
  753 | 
  754 |     const rowCheckbox = employeeRow.locator('input[type="checkbox"]');
  755 | 
  756 |     await rowCheckbox.check({
  757 |       force: true,
  758 |     });
  759 | 
  760 |     await expect(rowCheckbox).toBeChecked();
  761 |   }
  762 | 
  763 |   async deleteSelectedEmployees(): Promise<void> {
  764 |     const deleteSelectedButton = this.page.getByRole("button", {
  765 |       name: /Delete Selected/i,
  766 |     });
  767 | 
  768 |     await expect(deleteSelectedButton).toBeVisible();
  769 |     await deleteSelectedButton.click();
  770 | 
  771 |     const confirmationDialog = this.page.getByRole("dialog");
  772 | 
  773 |     await expect(confirmationDialog).toBeVisible();
  774 | 
  775 |     const deleteResponse = this.page.waitForResponse(
  776 |       (response) =>
  777 |         response.url().includes("/api/v2/pim/employees") &&
  778 |         response.request().method() === "DELETE" &&
  779 |         response.ok(),
  780 |       { timeout: 20_000 },
  781 |     );
  782 | 
  783 |     await confirmationDialog
  784 |       .getByRole("button", {
  785 |         name: /Yes, Delete/i,
  786 |       })
  787 |       .click();
  788 | 
  789 |     await deleteResponse;
  790 | 
  791 |     await expect(confirmationDialog).toBeHidden();
  792 | 
  793 |     await expect(this.successToast).toContainText("Successfully Deleted");
  794 | 
  795 |     await expect(this.loadingSpinner).toBeHidden();
  796 |   }
  797 | 
  798 |   async selectAllVisibleEmployees(): Promise<void> {
  799 |     await expect(this.loadingSpinner).toBeHidden({
  800 |       timeout: 20_000,
  801 |     });
  802 | 
  803 |     await expect(this.employeeRows.first()).toBeVisible({
  804 |       timeout: 20_000,
  805 |     });
  806 | 
  807 |     const headerCheckbox = this.page.locator(
  808 |       '.oxd-table-header input[type="checkbox"]',
  809 |     );
  810 | 
  811 |     const rowCheckboxes = this.employeeRows.locator('input[type="checkbox"]');
  812 | 
  813 |     await expect
  814 |       .poll(async () => rowCheckboxes.count(), {
  815 |         timeout: 20_000,
  816 |         message: "Waiting for Employee List rows to load",
  817 |       })
  818 |       .toBeGreaterThan(0);
  819 | 
  820 |     const rowCount = await rowCheckboxes.count();
  821 | 
  822 |     await headerCheckbox.check({
  823 |       force: true,
  824 |     });
  825 | 
  826 |     await expect(headerCheckbox).toBeChecked();
  827 | 
  828 |     for (let index = 0; index < rowCount; index++) {
> 829 |       await expect(rowCheckboxes.nth(index)).toBeChecked();
      |                                              ^ Error: expect(locator).toBeChecked() failed
  830 |     }
  831 |   }
  832 | 
  833 |   async deselectAllVisibleEmployees(): Promise<void> {
  834 |     const headerCheckbox = this.page.locator(
  835 |       '.oxd-table-header input[type="checkbox"]',
  836 |     );
  837 | 
  838 |     const rowCheckboxes = this.employeeRows.locator('input[type="checkbox"]');
  839 | 
  840 |     const rowCount = await rowCheckboxes.count();
  841 | 
  842 |     expect(rowCount).toBeGreaterThan(0);
  843 | 
  844 |     await headerCheckbox.uncheck({
  845 |       force: true,
  846 |     });
  847 | 
  848 |     await expect(headerCheckbox).not.toBeChecked();
  849 | 
  850 |     for (let index = 0; index < rowCount; index++) {
  851 |       await expect(rowCheckboxes.nth(index)).not.toBeChecked();
  852 |     }
  853 |   }
  854 | 
  855 |   async cancelEmployeeDeletion(employeeId: string): Promise<void> {
  856 |     const employeeRow = this.employeeRows.filter({
  857 |       has: this.page.locator(".oxd-table-cell").nth(1).getByText(employeeId, {
  858 |         exact: true,
  859 |       }),
  860 |     });
  861 | 
  862 |     await expect(employeeRow).toHaveCount(1);
  863 | 
  864 |     const deleteButton = employeeRow.locator("button").filter({
  865 |       has: this.page.locator("i.bi-trash"),
  866 |     });
  867 | 
  868 |     await expect(deleteButton).toBeVisible();
  869 |     await deleteButton.click();
  870 | 
  871 |     const confirmationDialog = this.page.getByRole("dialog");
  872 | 
  873 |     await expect(confirmationDialog).toBeVisible();
  874 | 
  875 |     await expect(confirmationDialog).toContainText("Are you Sure?");
  876 | 
  877 |     await confirmationDialog
  878 |       .getByRole("button", {
  879 |         name: /No, Cancel/i,
  880 |       })
  881 |       .click();
  882 | 
  883 |     await expect(confirmationDialog).toBeHidden();
  884 | 
  885 |     // Confirm the employee remains in the table.
  886 |     await expect(employeeRow).toHaveCount(1);
  887 | 
  888 |     await expect(employeeRow.locator(".oxd-table-cell").nth(1)).toHaveText(
  889 |       employeeId,
  890 |     );
  891 |   }
  892 | 
  893 |   private generateUniqueEmployeeId(): string {
  894 |     const timestamp = Date.now().toString(36).slice(-5);
  895 | 
  896 |     const randomValue = Math.random().toString(36).slice(2, 6);
  897 | 
  898 |     return `E${timestamp}${randomValue}`.toUpperCase().slice(0, 10);
  899 |   }
  900 | }
  901 | 
```