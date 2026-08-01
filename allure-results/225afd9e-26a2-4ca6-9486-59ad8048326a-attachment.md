# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> TC_PIM_040 - Admin should select and deselect all employees on the current page @positive @selection @regression
- Location: tests\PIM\pim-employee-list.spec.ts:448:6

# Error details

```
Error: expect(received).toBeGreaterThan(expected)

Expected: > 0
Received:   0
```

# Test source

```ts
  650 |     await createEmployeeResponse;
  651 | 
  652 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  653 |       timeout: 20_000,
  654 |     });
  655 | 
  656 |     await expect(this.loadingSpinner).toBeHidden();
  657 | 
  658 |     return employeeId;
  659 |   }
  660 | 
  661 |   async verifyPasswordStrength(expectedStrength: RegExp): Promise<void> {
  662 |     await expect(this.passwordStrengthIndicator).toBeVisible();
  663 | 
  664 |     await expect(this.passwordStrengthIndicator).toHaveText(expectedStrength);
  665 |   }
  666 | 
  667 |   async canceldeleteEmployeeById(employeeId: string): Promise<void> {
  668 |     await expect(this.loadingSpinner).toBeHidden();
  669 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  670 |     await expect(matchingRow).toHaveCount(1);
  671 |     const deleteButton = matchingRow.locator("button").filter({
  672 |       has: this.page.locator("i.bi-trash"),
  673 |     });
  674 |     await deleteButton.click();
  675 | 
  676 |     const confirmationDilaog = this.page.getByRole("dialog");
  677 |     await expect(confirmationDilaog).toBeVisible();
  678 | 
  679 |     await confirmationDilaog.getByText("No, Cancel", { exact: true }).click();
  680 | 
  681 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  682 |   }
  683 | 
  684 |   async selectEmployeeById(employeeId: string): Promise<void> {
  685 |     const employeeRow = this.employeeRows.filter({
  686 |       has: this.page
  687 |         .locator(".oxd-table-cell")
  688 |         .nth(1)
  689 |         .getByText(employeeId, { exact: true }),
  690 |     });
  691 | 
  692 |     await expect(employeeRow).toHaveCount(1);
  693 | 
  694 |     const rowCheckbox = employeeRow.locator('input[type="checkbox"]');
  695 | 
  696 |     await rowCheckbox.check({
  697 |       force: true,
  698 |     });
  699 | 
  700 |     await expect(rowCheckbox).toBeChecked();
  701 |   }
  702 | 
  703 |   async deleteSelectedEmployees(): Promise<void> {
  704 |     const deleteSelectedButton = this.page.getByRole("button", {
  705 |       name: /Delete Selected/i,
  706 |     });
  707 | 
  708 |     await expect(deleteSelectedButton).toBeVisible();
  709 |     await deleteSelectedButton.click();
  710 | 
  711 |     const confirmationDialog = this.page.getByRole("dialog");
  712 | 
  713 |     await expect(confirmationDialog).toBeVisible();
  714 | 
  715 |     const deleteResponse = this.page.waitForResponse(
  716 |       (response) =>
  717 |         response.url().includes("/api/v2/pim/employees") &&
  718 |         response.request().method() === "DELETE" &&
  719 |         response.ok(),
  720 |       { timeout: 20_000 },
  721 |     );
  722 | 
  723 |     await confirmationDialog
  724 |       .getByRole("button", {
  725 |         name: /Yes, Delete/i,
  726 |       })
  727 |       .click();
  728 | 
  729 |     await deleteResponse;
  730 | 
  731 |     await expect(confirmationDialog).toBeHidden();
  732 | 
  733 |     await expect(this.successToast).toContainText("Successfully Deleted");
  734 | 
  735 |     await expect(this.loadingSpinner).toBeHidden();
  736 |   }
  737 | 
  738 |   
  739 | async selectAllVisibleEmployees(): Promise<void> {
  740 |   const headerCheckbox = this.page.locator(
  741 |     '.oxd-table-header input[type="checkbox"]'
  742 |   );
  743 | 
  744 |   const rowCheckboxes = this.page.locator(
  745 |     '.oxd-table-body .oxd-table-card input[type="checkbox"]'
  746 |   );
  747 | 
  748 |   const rowCount = await rowCheckboxes.count();
  749 | 
> 750 |   expect(rowCount).toBeGreaterThan(0);
      |                    ^ Error: expect(received).toBeGreaterThan(expected)
  751 | 
  752 |   await headerCheckbox.check({
  753 |     force: true,
  754 |   });
  755 | 
  756 |   await expect(headerCheckbox).toBeChecked();
  757 | 
  758 |   for (let index = 0; index < rowCount; index++) {
  759 |     await expect(
  760 |       rowCheckboxes.nth(index)
  761 |     ).toBeChecked();
  762 |   }
  763 | }
  764 | 
  765 | async deselectAllVisibleEmployees(): Promise<void> {
  766 |   const headerCheckbox = this.page.locator(
  767 |     '.oxd-table-header input[type="checkbox"]'
  768 |   );
  769 | 
  770 |   const rowCheckboxes = this.page.locator(
  771 |     '.oxd-table-body .oxd-table-card input[type="checkbox"]'
  772 |   );
  773 | 
  774 |   const rowCount = await rowCheckboxes.count();
  775 | 
  776 |   await headerCheckbox.uncheck({
  777 |     force: true,
  778 |   });
  779 | 
  780 |   await expect(headerCheckbox).not.toBeChecked();
  781 | 
  782 |   for (let index = 0; index < rowCount; index++) {
  783 |     await expect(
  784 |       rowCheckboxes.nth(index)
  785 |     ).not.toBeChecked();
  786 |   }
  787 | }
  788 | }
  789 | 
```