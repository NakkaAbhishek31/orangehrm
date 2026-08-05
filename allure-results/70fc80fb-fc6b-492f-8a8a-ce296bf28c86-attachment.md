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
  571 | 
  572 |     const confirmationDialog = this.page.getByRole("dialog");
  573 | 
  574 |     await expect(confirmationDialog).toBeVisible();
  575 | 
  576 |     await confirmationDialog
  577 |       .getByRole("button", {
  578 |         name: "No, Cancel",
  579 |         exact: true,
  580 |       })
  581 |       .click();
  582 | 
  583 |     await expect(confirmationDialog).toBeHidden();
  584 | 
  585 |     await expect(userRow).toBeVisible();
  586 |   }
  587 | 
  588 |   async selectSystemUsers(usernames: string[]): Promise<void> {
  589 |     for (const username of usernames) {
  590 |       const userRow = this.userRows.filter({
  591 |         has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
  592 |           exact: true,
  593 |         }),
  594 |       });
  595 | 
  596 |       await expect(userRow).toHaveCount(1);
  597 | 
  598 |       const checkbox = userRow.locator('input[type="checkbox"]');
  599 | 
  600 |       await checkbox.check({
  601 |         force: true,
  602 |       });
  603 | 
  604 |       await expect(checkbox).toBeChecked();
  605 |     }
  606 |   }
  607 | 
  608 |   async deleteSelectedSystemUsers(): Promise<void> {
  609 |     const deleteSelectedButton = this.page.getByRole("button", {
  610 |       name: /Delete Selected/i,
  611 |     });
  612 | 
  613 |     await expect(deleteSelectedButton).toBeVisible();
  614 | 
  615 |     await deleteSelectedButton.click();
  616 | 
  617 |     const confirmationDialog = this.page.getByRole("dialog");
  618 | 
  619 |     await expect(confirmationDialog).toBeVisible();
  620 | 
  621 |     const deleteResponse = this.page.waitForResponse(
  622 |       (response) =>
  623 |         response.url().includes("/api/v2/admin/users") &&
  624 |         response.request().method() === "DELETE" &&
  625 |         response.ok(),
  626 |       {
  627 |         timeout: 20_000,
  628 |       },
  629 |     );
  630 | 
  631 |     const deletedToast = expect(
  632 |       this.toastMessage.filter({
  633 |         hasText: /Successfully Deleted/i,
  634 |       }),
  635 |     ).toBeVisible({
  636 |       timeout: 20_000,
  637 |     });
  638 | 
  639 |     await confirmationDialog
  640 |       .getByRole("button", {
  641 |         name: "Yes, Delete",
  642 |         exact: true,
  643 |       })
  644 |       .click();
  645 | 
  646 |     await Promise.all([deleteResponse, deletedToast]);
  647 | 
  648 |     await expect(confirmationDialog).toBeHidden();
  649 |   }
  650 | 
  651 |   async selectAllVisibleSystemUsers(): Promise<void> {
  652 |     await expect(this.loadingSpinner).toBeHidden();
  653 | 
  654 |     const headerCheckbox = this.page.locator(
  655 |       '.oxd-table-header input[type="checkbox"]',
  656 |     );
  657 | 
  658 |     const rowCheckboxes = this.userRows.locator('input[type="checkbox"]');
  659 | 
  660 |     const rowCount = await rowCheckboxes.count();
  661 | 
  662 |     expect(rowCount).toBeGreaterThan(0);
  663 | 
  664 |     await headerCheckbox.check({
  665 |       force: true,
  666 |     });
  667 | 
  668 |     await expect(headerCheckbox).toBeChecked();
  669 | 
  670 |     for (let index = 0; index < rowCount; index++) {
> 671 |       await expect(rowCheckboxes.nth(index)).toBeChecked();
      |                                              ^ Error: expect(locator).toBeChecked() failed
  672 |     }
  673 |   }
  674 | 
  675 |   async deselectAllVisibleSystemUsers(): Promise<void> {
  676 |     const headerCheckbox = this.page.locator(
  677 |       '.oxd-table-header input[type="checkbox"]',
  678 |     );
  679 | 
  680 |     const rowCheckboxes = this.userRows.locator('input[type="checkbox"]');
  681 | 
  682 |     const rowCount = await rowCheckboxes.count();
  683 | 
  684 |     await headerCheckbox.uncheck({
  685 |       force: true,
  686 |     });
  687 | 
  688 |     await expect(headerCheckbox).not.toBeChecked();
  689 | 
  690 |     for (let index = 0; index < rowCount; index++) {
  691 |       await expect(rowCheckboxes.nth(index)).not.toBeChecked();
  692 |     }
  693 |   }
  694 | 
  695 | 
  696 |   async getVisibleSystemUsernames(): Promise<string[]> {
  697 |   await expect(
  698 |     this.loadingSpinner
  699 |   ).toBeHidden();
  700 | 
  701 |   await expect(
  702 |     this.userRows.first()
  703 |   ).toBeVisible({
  704 |     timeout: 15_000,
  705 |   });
  706 | 
  707 |   return this.userRows
  708 |     .locator('.oxd-table-cell')
  709 |     .nth(1)
  710 |     .allInnerTexts();
  711 | }
  712 | 
  713 | async goToNextSystemUsersPage(): Promise<void> {
  714 |   await expect(
  715 |     this.nextPageButton
  716 |   ).toBeVisible();
  717 | 
  718 |   await expect(
  719 |     this.nextPageButton
  720 |   ).toBeEnabled();
  721 | 
  722 |   await this.nextPageButton.click();
  723 | 
  724 |   await expect(
  725 |     this.loadingSpinner
  726 |   ).toBeHidden();
  727 | }
  728 | 
  729 | async goToPreviousSystemUsersPage(): Promise<void> {
  730 |   await expect(
  731 |     this.previousPageButton
  732 |   ).toBeVisible();
  733 | 
  734 |   await expect(
  735 |     this.previousPageButton
  736 |   ).toBeEnabled();
  737 | 
  738 |   await this.previousPageButton.click();
  739 | 
  740 |   await expect(
  741 |     this.loadingSpinner
  742 |   ).toBeHidden();
  743 | }
  744 | }
  745 | 
```