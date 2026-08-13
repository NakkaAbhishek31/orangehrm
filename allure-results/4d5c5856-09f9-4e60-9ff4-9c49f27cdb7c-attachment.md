# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_ADMIN_063 - Admin should update an existing System User username @positive @edit @regression
- Location: tests\Admin\admin-users.spec.ts:613:6

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('.oxd-input-group').filter({ has: getByText('Username', { exact: true }) }).locator('input')
Expected: "updated1786596637596130"
Received: "ess1786596637596130updated1786596637596130"
Timeout:  20000ms

Call log:
  - Expect "toHaveValue" with timeout 20000ms
  - waiting for locator('.oxd-input-group').filter({ has: getByText('Username', { exact: true }) }).locator('input')
    43 × locator resolved to <input data-v-1f99f73c="" autocomplete="off" class="oxd-input oxd-input--active oxd-input--error"/>
       - unexpected value "ess1786596637596130updated1786596637596130"

```

```yaml
- textbox: ess1786596637596130updated1786596637596130
```

# Test source

```ts
  672 |     const selectableRowCheckboxes = this.userRows.locator(
  673 |       'input[type="checkbox"]:not(:disabled)',
  674 |     );
  675 | 
  676 |     const selectableRowCount = await selectableRowCheckboxes.count();
  677 | 
  678 |     expect(selectableRowCount).toBeGreaterThan(0);
  679 | 
  680 |     await headerCheckboxLabel.click();
  681 | 
  682 |     await expect(headerCheckbox).toBeChecked();
  683 | 
  684 |     await expect
  685 |       .poll(
  686 |         async () =>
  687 |           selectableRowCheckboxes.evaluateAll(
  688 |             (checkboxes) =>
  689 |               checkboxes.filter(
  690 |                 (checkbox) => (checkbox as HTMLInputElement).checked,
  691 |               ).length,
  692 |           ),
  693 |         {
  694 |           timeout: 15_000,
  695 |         },
  696 |       )
  697 |       .toBe(selectableRowCount);
  698 |   }
  699 | 
  700 |   async deselectAllVisibleSystemUsers(): Promise<void> {
  701 |     const headerCheckboxLabel = this.page.locator(
  702 |       ".oxd-table-header " + ".oxd-checkbox-wrapper label",
  703 |     );
  704 | 
  705 |     const headerCheckbox = this.page.locator(
  706 |       ".oxd-table-header " + 'input[type="checkbox"]',
  707 |     );
  708 | 
  709 |     const selectableRowCheckboxes = this.userRows.locator(
  710 |       'input[type="checkbox"]:not(:disabled)',
  711 |     );
  712 | 
  713 |     await headerCheckboxLabel.click();
  714 | 
  715 |     await expect(headerCheckbox).not.toBeChecked();
  716 | 
  717 |     await expect
  718 |       .poll(
  719 |         async () =>
  720 |           selectableRowCheckboxes.evaluateAll(
  721 |             (checkboxes) =>
  722 |               checkboxes.filter(
  723 |                 (checkbox) => (checkbox as HTMLInputElement).checked,
  724 |               ).length,
  725 |           ),
  726 |         {
  727 |           timeout: 15_000,
  728 |         },
  729 |       )
  730 |       .toBe(0);
  731 |   }
  732 | 
  733 |   async deleteSelectedSystemUsers(): Promise<void> {
  734 |     await expect(this.deleteSelectedButton).toBeVisible({
  735 |       timeout: 15_000,
  736 |     });
  737 | 
  738 |     await this.deleteSelectedButton.click();
  739 | 
  740 |     const confirmationDialog = this.page.locator(".oxd-dialog-container");
  741 | 
  742 |     await expect(confirmationDialog).toBeVisible();
  743 | 
  744 |     const confirmDeleteButton = confirmationDialog.locator(
  745 |       "button.oxd-button--label-danger",
  746 |     );
  747 | 
  748 |     await expect(confirmDeleteButton).toBeVisible();
  749 | 
  750 |     await confirmDeleteButton.click();
  751 | 
  752 |     await expect(confirmationDialog).toBeHidden({
  753 |       timeout: 20_000,
  754 |     });
  755 | 
  756 |     await expect(
  757 |       this.toastMessage.filter({
  758 |         hasText: /Successfully Deleted/i,
  759 |       }),
  760 |     ).toBeVisible({
  761 |       timeout: 20_000,
  762 |     });
  763 | 
  764 |     await expect(this.loadingSpinner).toBeHidden();
  765 |   }
  766 | 
  767 |   async updateSystemUsername(updatedUsername: string): Promise<void> {
  768 |     await this.addUsernameInput.fill(updatedUsername);
  769 | 
  770 |     await this.addUsernameInput.blur();
  771 | 
> 772 |     await expect(this.addUsernameInput).toHaveValue(updatedUsername);
      |                                         ^ Error: expect(locator).toHaveValue(expected) failed
  773 | 
  774 |     await expect(this.usernameValidation).toBeHidden();
  775 | 
  776 |     await this.editUserSaveButton.click();
  777 | 
  778 |     await expect(this.page).toHaveURL(/admin\/viewSystemUsers/, {
  779 |       timeout: 20_000,
  780 |     });
  781 | 
  782 |     await expect(this.toastMessage).toContainText("Successfully Updated", {
  783 |       timeout: 20_000,
  784 |     });
  785 |   }
  786 | }
  787 | 
```