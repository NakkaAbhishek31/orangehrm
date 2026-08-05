# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_058 - Admin should select and deselect all visible System Users @positive @selection @regression
- Location: tests\Admin\admin-users.spec.ts:1284:6

# Error details

```
Error: expect(locator).toBeChecked() failed

Locator:  locator('.oxd-table-body .oxd-table-card').locator('input[type="checkbox"]').first()
Expected: checked
Received: unchecked
Timeout:  10000ms

Call log:
  - Expect "toBeChecked" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').locator('input[type="checkbox"]').first()
    23 × locator resolved to <input type="checkbox" data-v-6179b72a=""/>
       - unexpected value "unchecked"

```

```yaml
- checkbox ""
```

# Test source

```ts
  656 |   for (const username of usernames) {
  657 |     const userRow = this.userRows.filter({
  658 |       has: this.page
  659 |         .locator('.oxd-table-cell')
  660 |         .nth(1)
  661 |         .getByText(username, {
  662 |           exact: true,
  663 |         }),
  664 |     });
  665 | 
  666 |     await expect(userRow).toHaveCount(1);
  667 | 
  668 |     const checkbox = userRow.locator(
  669 |       'input[type="checkbox"]'
  670 |     );
  671 | 
  672 |     await checkbox.check({
  673 |       force: true,
  674 |     });
  675 | 
  676 |     await expect(checkbox).toBeChecked();
  677 |   }
  678 | }
  679 | 
  680 | async deleteSelectedSystemUsers(): Promise<void> {
  681 |   await expect(
  682 |     this.deleteSelectedButton
  683 |   ).toBeVisible();
  684 | 
  685 |   await this.deleteSelectedButton.click();
  686 | 
  687 |   const confirmationDialog =
  688 |     this.page.getByRole('dialog');
  689 | 
  690 |   await expect(
  691 |     confirmationDialog
  692 |   ).toBeVisible();
  693 | 
  694 |   const deleteResponse =
  695 |     this.page.waitForResponse(
  696 |       response =>
  697 |         response.url().includes(
  698 |           '/api/v2/admin/users'
  699 |         ) &&
  700 |         response.request().method() ===
  701 |           'DELETE' &&
  702 |         response.ok(),
  703 |       {
  704 |         timeout: 20_000,
  705 |       }
  706 |     );
  707 | 
  708 |   const deletedToast = expect(
  709 |     this.toastMessage.filter({
  710 |       hasText: /Successfully Deleted/i,
  711 |     })
  712 |   ).toBeVisible({
  713 |     timeout: 20_000,
  714 |   });
  715 | 
  716 |   await confirmationDialog
  717 |     .getByRole('button', {
  718 |       name: 'Yes, Delete',
  719 |       exact: true,
  720 |     })
  721 |     .click();
  722 | 
  723 |   await Promise.all([
  724 |     deleteResponse,
  725 |     deletedToast,
  726 |   ]);
  727 | 
  728 |   await expect(
  729 |     confirmationDialog
  730 |   ).toBeHidden();
  731 | }
  732 | 
  733 | async selectAllVisibleSystemUsers(): Promise<void> {
  734 |   const headerCheckbox = this.page.locator(
  735 |     '.oxd-table-header input[type="checkbox"]'
  736 |   );
  737 | 
  738 |   const rowCheckboxes =
  739 |     this.userRows.locator(
  740 |       'input[type="checkbox"]'
  741 |     );
  742 | 
  743 |   const rowCount =
  744 |     await rowCheckboxes.count();
  745 | 
  746 |   expect(rowCount).toBeGreaterThan(0);
  747 | 
  748 |   await headerCheckbox.check({
  749 |     force: true,
  750 |   });
  751 | 
  752 |   await expect(
  753 |     headerCheckbox
  754 |   ).toBeChecked();
  755 | 
> 756 |   for (
      |       ^ Error: expect(locator).toBeChecked() failed
  757 |     let index = 0;
  758 |     index < rowCount;
  759 |     index++
  760 |   ) {
  761 |     await expect(
  762 |       rowCheckboxes.nth(index)
  763 |     ).toBeChecked();
  764 |   }
  765 | }
  766 | 
  767 | async deselectAllVisibleSystemUsers(): Promise<void> {
  768 |   const headerCheckbox = this.page.locator(
  769 |     '.oxd-table-header input[type="checkbox"]'
  770 |   );
  771 | 
  772 |   const rowCheckboxes =
  773 |     this.userRows.locator(
  774 |       'input[type="checkbox"]'
  775 |     );
  776 | 
  777 |   const rowCount =
  778 |     await rowCheckboxes.count();
  779 | 
  780 |   await headerCheckbox.uncheck({
  781 |     force: true,
  782 |   });
  783 | 
  784 |   await expect(
  785 |     headerCheckbox
  786 |   ).not.toBeChecked();
  787 | 
  788 |   for (
  789 |     let index = 0;
  790 |     index < rowCount;
  791 |     index++
  792 |   ) {
  793 |     await expect(
  794 |       rowCheckboxes.nth(index)
  795 |     ).not.toBeChecked();
  796 |   }
  797 | }
  798 | 
  799 | }
  800 | 
```