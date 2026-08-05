# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_058 - Admin should select and deselect all visible System Users @positive @selection @regression
- Location: tests\Admin\admin-users.spec.ts:1205:6

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
  581 | 
  582 |     const confirmationDialog = this.page.getByRole("dialog");
  583 | 
  584 |     await expect(confirmationDialog).toBeVisible();
  585 | 
  586 |     await confirmationDialog
  587 |       .getByRole("button", {
  588 |         name: "No, Cancel",
  589 |         exact: true,
  590 |       })
  591 |       .click();
  592 | 
  593 |     await expect(confirmationDialog).toBeHidden();
  594 | 
  595 |     await expect(userRow).toBeVisible();
  596 |   }
  597 | 
  598 |   async selectSystemUsers(usernames: string[]): Promise<void> {
  599 |     for (const username of usernames) {
  600 |       const userRow = this.userRows.filter({
  601 |         has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
  602 |           exact: true,
  603 |         }),
  604 |       });
  605 | 
  606 |       await expect(userRow).toHaveCount(1);
  607 | 
  608 |       const checkbox = userRow.locator('input[type="checkbox"]');
  609 | 
  610 |       await checkbox.check({
  611 |         force: true,
  612 |       });
  613 | 
  614 |       await expect(checkbox).toBeChecked();
  615 |     }
  616 |   }
  617 | 
  618 |   async deleteSelectedSystemUsers(): Promise<void> {
  619 |     const deleteSelectedButton = this.page.getByRole("button", {
  620 |       name: /Delete Selected/i,
  621 |     });
  622 | 
  623 |     await expect(deleteSelectedButton).toBeVisible();
  624 | 
  625 |     await deleteSelectedButton.click();
  626 | 
  627 |     const confirmationDialog = this.page.getByRole("dialog");
  628 | 
  629 |     await expect(confirmationDialog).toBeVisible();
  630 | 
  631 |     const deleteResponse = this.page.waitForResponse(
  632 |       (response) =>
  633 |         response.url().includes("/api/v2/admin/users") &&
  634 |         response.request().method() === "DELETE" &&
  635 |         response.ok(),
  636 |       {
  637 |         timeout: 20_000,
  638 |       },
  639 |     );
  640 | 
  641 |     const deletedToast = expect(
  642 |       this.toastMessage.filter({
  643 |         hasText: /Successfully Deleted/i,
  644 |       }),
  645 |     ).toBeVisible({
  646 |       timeout: 20_000,
  647 |     });
  648 | 
  649 |     await confirmationDialog
  650 |       .getByRole("button", {
  651 |         name: "Yes, Delete",
  652 |         exact: true,
  653 |       })
  654 |       .click();
  655 | 
  656 |     await Promise.all([deleteResponse, deletedToast]);
  657 | 
  658 |     await expect(confirmationDialog).toBeHidden();
  659 |   }
  660 | 
  661 |   async selectAllVisibleSystemUsers(): Promise<void> {
  662 |     await expect(this.loadingSpinner).toBeHidden();
  663 | 
  664 |     const headerCheckbox = this.page.locator(
  665 |       '.oxd-table-header input[type="checkbox"]',
  666 |     );
  667 | 
  668 |     const rowCheckboxes = this.userRows.locator('input[type="checkbox"]');
  669 | 
  670 |     const rowCount = await rowCheckboxes.count();
  671 | 
  672 |     expect(rowCount).toBeGreaterThan(0);
  673 | 
  674 |     await headerCheckbox.check({
  675 |       force: true,
  676 |     });
  677 | 
  678 |     await expect(headerCheckbox).toBeChecked();
  679 | 
  680 |     for (let index = 0; index < rowCount; index++) {
> 681 |       await expect(rowCheckboxes.nth(index)).toBeChecked();
      |                                              ^ Error: expect(locator).toBeChecked() failed
  682 |     }
  683 |   }
  684 | 
  685 |   async deselectAllVisibleSystemUsers(): Promise<void> {
  686 |     const headerCheckbox = this.page.locator(
  687 |       '.oxd-table-header input[type="checkbox"]',
  688 |     );
  689 | 
  690 |     const rowCheckboxes = this.userRows.locator('input[type="checkbox"]');
  691 | 
  692 |     const rowCount = await rowCheckboxes.count();
  693 | 
  694 |     await headerCheckbox.uncheck({
  695 |       force: true,
  696 |     });
  697 | 
  698 |     await expect(headerCheckbox).not.toBeChecked();
  699 | 
  700 |     for (let index = 0; index < rowCount; index++) {
  701 |       await expect(rowCheckboxes.nth(index)).not.toBeChecked();
  702 |     }
  703 |   }
  704 | 
  705 | 
  706 |   async getVisibleSystemUsernames(): Promise<string[]> {
  707 |   await expect(
  708 |     this.loadingSpinner
  709 |   ).toBeHidden();
  710 | 
  711 |   await expect(
  712 |     this.userRows.first()
  713 |   ).toBeVisible({
  714 |     timeout: 15_000,
  715 |   });
  716 | 
  717 |   return this.userRows
  718 |     .locator('.oxd-table-cell')
  719 |     .nth(1)
  720 |     .allInnerTexts();
  721 | }
  722 | 
  723 | async goToNextSystemUsersPage(): Promise<void> {
  724 |   await expect(
  725 |     this.nextPageButton
  726 |   ).toBeVisible();
  727 | 
  728 |   await expect(
  729 |     this.nextPageButton
  730 |   ).toBeEnabled();
  731 | 
  732 |   await this.nextPageButton.click();
  733 | 
  734 |   await expect(
  735 |     this.loadingSpinner
  736 |   ).toBeHidden();
  737 | }
  738 | 
  739 | async goToPreviousSystemUsersPage(): Promise<void> {
  740 |   await expect(
  741 |     this.previousPageButton
  742 |   ).toBeVisible();
  743 | 
  744 |   await expect(
  745 |     this.previousPageButton
  746 |   ).toBeEnabled();
  747 | 
  748 |   await this.previousPageButton.click();
  749 | 
  750 |   await expect(
  751 |     this.loadingSpinner
  752 |   ).toBeHidden();
  753 | }
  754 | }
  755 | 
```