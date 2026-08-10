# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> TC_PIM_029 - Admin should search for an employee using a partial employee name @positive @search @regression
- Location: tests\PIM\pim-employee-list.spec.ts:195:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: locator.fill: Test timeout of 60000ms exceeded.
Call log:
  - waiting for locator('//div[@class=\'oxd-grid-4 orangehrm-full-width-grid\']//div[1]//div[1]//div[2]//div[1]//div[1]//input[1]')

```

# Test source

```ts
  551 |         response.ok(),
  552 |       { timeout: 20_000 },
  553 |     );
  554 | 
  555 |     await pageButton.click();
  556 |     await employeesResponse;
  557 | 
  558 |     await expect
  559 |       .poll(async () => this.getVisibleEmployeeIds(), { timeout: 15_000 })
  560 |       .not.toEqual(currentPageIds);
  561 |   }
  562 | 
  563 |   async openEmployeeById(employeeId: string): Promise<void> {
  564 |     const employeeRow = this.employeeRows.filter({
  565 |       has: this.page
  566 |         .locator(".oxd-table-cell")
  567 |         .nth(1)
  568 |         .filter({ hasText: employeeId }),
  569 |     });
  570 | 
  571 |     await expect(employeeRow).toHaveCount(1);
  572 | 
  573 |     await employeeRow.locator(".oxd-table-cell").nth(1).click();
  574 | 
  575 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  576 |       timeout: 15_000,
  577 |     });
  578 |   }
  579 | 
  580 |   async cancelAddingEmployee(): Promise<void> {
  581 |     expect(this.cancelProfilepageButton).toBeVisible();
  582 |     expect(this.cancelProfilepageButton).toBeEnabled();
  583 |     this.cancelProfilepageButton.click();
  584 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  585 |   }
  586 | 
  587 |   async saveEmployeeWithoutRequiredDetails(
  588 |     details: AddEmployeeDetails,
  589 |   ): Promise<void> {
  590 |     await this.firstnameInput.fill(details.firstName);
  591 | 
  592 |     if (details.middleName !== undefined) {
  593 |       await this.middlenameInput.fill(details.middleName);
  594 |     }
  595 | 
  596 |     await this.lastnameInput.fill(details.lastName);
  597 | 
  598 |     if (details.employeeId !== undefined) {
  599 |       await this.employeeID.fill(details.employeeId);
  600 |     }
  601 | 
  602 |     if (details.profilePicturePath !== undefined) {
  603 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  604 |     }
  605 | 
  606 |     await this.SaveEmployeeButton.click();
  607 |   }
  608 | 
  609 |   async fillAddEmployeeForm(details: AddEmployeeDetails): Promise<void> {
  610 |     if (details.firstName !== undefined) {
  611 |       await this.firstnameInput.fill(details.firstName);
  612 |     }
  613 | 
  614 |     if (details.middleName !== undefined) {
  615 |       await this.middlenameInput.fill(details.middleName);
  616 |     }
  617 | 
  618 |     if (details.lastName !== undefined) {
  619 |       await this.lastnameInput.fill(details.lastName);
  620 |     }
  621 | 
  622 |     if (details.employeeId !== undefined) {
  623 |       await this.employeeID.fill(details.employeeId);
  624 |       await this.employeeID.blur();
  625 |     }
  626 | 
  627 |     if (details.profilePicturePath !== undefined) {
  628 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  629 |     }
  630 |   }
  631 | 
  632 |   async resetEmployeeFilters(): Promise<void> {
  633 |     const employeeListResponse = this.page.waitForResponse(
  634 |       (response) =>
  635 |         response.url().includes("/api/v2/pim/employees") &&
  636 |         response.request().method() === "GET" &&
  637 |         response.ok(),
  638 |       { timeout: 15_000 },
  639 |     );
  640 | 
  641 |     await this.page.getByRole("button", { name: "Reset", exact: true }).click();
  642 | 
  643 |     await employeeListResponse;
  644 |     await expect(this.loadingSpinner).toBeHidden();
  645 |   }
  646 | 
  647 |   async selectEmployeeFromAutocomplete(
  648 |     partialName: string,
  649 |     expectedFullName: string,
  650 |   ): Promise<void> {
> 651 |     await this.employeeNameFilterInput.fill(partialName);
      |                                        ^ Error: locator.fill: Test timeout of 60000ms exceeded.
  652 | 
  653 |   const matchingOption = this.page
  654 |   .locator(".oxd-autocomplete-option")
  655 |   .filter({ hasText: expectedFullName });
  656 | 
  657 |   await matchingOption.waitFor({ state: "visible" });
  658 | 
  659 |     await expect(matchingOption).toBeVisible({ timeout: 15000 });
  660 |     await matchingOption.click();
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
```