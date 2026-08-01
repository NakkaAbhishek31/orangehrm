# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_023 - Admin should cancel adding a new employee @negative @regression
- Location: tests\PIM\pim-employee.spec.ts:141:5

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
```

# Test source

```ts
  444 | 
  445 |     await expect(this.profilePictureValidation).toContainText(
  446 |       "File type not allowed",
  447 |     );
  448 |   }
  449 | 
  450 |   async getVisibleEmployeeIds(): Promise<string[]> {
  451 |     await expect(this.employeeRows.first()).toBeVisible({
  452 |       timeout: 15_000,
  453 |     });
  454 | 
  455 |     await expect(this.employeeIdCells.first()).toBeVisible({
  456 |       timeout: 15_000,
  457 |     });
  458 | 
  459 |     const employeeIds = await this.employeeIdCells.allTextContents();
  460 | 
  461 |     return employeeIds
  462 |       .map((employeeId) => employeeId.trim())
  463 |       .filter((employeeId) => employeeId.length > 0);
  464 |   }
  465 | 
  466 |   async goToPage(pageNumber: number): Promise<void> {
  467 |     const currentPageIds = await this.getVisibleEmployeeIds();
  468 | 
  469 |     const pageButton = this.page
  470 |       .getByRole("navigation", {
  471 |         name: "Pagination Navigation",
  472 |       })
  473 |       .getByRole("button", {
  474 |         name: String(pageNumber),
  475 |         exact: true,
  476 |       });
  477 | 
  478 |     await expect(pageButton).toBeVisible();
  479 | 
  480 |     const employeesResponse = this.page.waitForResponse(
  481 |       (response) =>
  482 |         response.url().includes("/api/v2/pim/employees") &&
  483 |         response.request().method() === "GET" &&
  484 |         response.ok(),
  485 |       { timeout: 20_000 },
  486 |     );
  487 | 
  488 |     await pageButton.click();
  489 |     await employeesResponse;
  490 | 
  491 |     await expect
  492 |       .poll(async () => this.getVisibleEmployeeIds(), { timeout: 15_000 })
  493 |       .not.toEqual(currentPageIds);
  494 |   }
  495 | 
  496 |   async openEmployeeById(employeeId: string): Promise<void> {
  497 |     const employeeRow = this.employeeRows.filter({
  498 |       has: this.page
  499 |         .locator(".oxd-table-cell")
  500 |         .nth(1)
  501 |         .filter({ hasText: employeeId }),
  502 |     });
  503 | 
  504 |     await expect(employeeRow).toHaveCount(1);
  505 | 
  506 |     await employeeRow.locator(".oxd-table-cell").nth(1).click();
  507 | 
  508 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  509 |       timeout: 15_000,
  510 |     });
  511 |   }
  512 | 
  513 |   async cancelAddingEmployee(): Promise<void> {
  514 |     expect(this.cancelProfilepageButton).toBeVisible();
  515 |     expect(this.cancelProfilepageButton).toBeEnabled();
  516 |     this.cancelProfilepageButton.click();
  517 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  518 |   }
  519 | 
  520 |   async saveEmployeeWithoutRequiredDetails(
  521 |     details: AddEmployeeDetails,
  522 |   ): Promise<void> {
  523 |     await this.firstnameInput.fill(details.firstName);
  524 | 
  525 |     if (details.middleName !== undefined) {
  526 |       await this.middlenameInput.fill(details.middleName);
  527 |     }
  528 | 
  529 |     await this.lastnameInput.fill(details.lastName);
  530 | 
  531 |     if (details.employeeId !== undefined) {
  532 |       await this.employeeID.fill(details.employeeId);
  533 |     }
  534 | 
  535 |     if (details.profilePicturePath !== undefined) {
  536 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  537 |     }
  538 | 
  539 |     await this.SaveEmployeeButton.click();
  540 |   }
  541 | 
  542 |   async fillAddEmployeeForm(details: AddEmployeeDetails): Promise<void> {
  543 |     if (details.firstName !== undefined) {
> 544 |       await this.firstnameInput.fill(details.firstName);
      |                                 ^ Error: locator.fill: Target page, context or browser has been closed
  545 |     }
  546 | 
  547 |     if (details.middleName !== undefined) {
  548 |       await this.middlenameInput.fill(details.middleName);
  549 |     }
  550 | 
  551 |     if (details.lastName !== undefined) {
  552 |       await this.lastnameInput.fill(details.lastName);
  553 |     }
  554 | 
  555 |     if (details.employeeId !== undefined) {
  556 |       await this.employeeID.fill(details.employeeId);
  557 |       await this.employeeID.blur();
  558 |     }
  559 | 
  560 |     if (details.profilePicturePath !== undefined) {
  561 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  562 |     }
  563 |   }
  564 | 
  565 |   async resetEmployeeFilters(): Promise<void> {
  566 |     const employeeListResponse = this.page.waitForResponse(
  567 |       (response) =>
  568 |         response.url().includes("/api/v2/pim/employees") &&
  569 |         response.request().method() === "GET" &&
  570 |         response.ok(),
  571 |       { timeout: 15_000 },
  572 |     );
  573 | 
  574 |     await this.page.getByRole("button", { name: "Reset", exact: true }).click();
  575 | 
  576 |     await employeeListResponse;
  577 |     await expect(this.loadingSpinner).toBeHidden();
  578 |   }
  579 | 
  580 |   async selectEmployeeFromAutocomplete(
  581 |     partialName: string,
  582 |     expectedFullName: string,
  583 |   ): Promise<void> {
  584 |     await this.employeeNameFilterInput.fill(partialName);
  585 | 
  586 |     const matchingOption = this.page
  587 |       .locator(".oxd-autocomplete-option")
  588 |       .filter({ hasText: expectedFullName });
  589 | 
  590 |     await expect(matchingOption).toBeVisible({ timeout: 15000 });
  591 |     await matchingOption.click();
  592 |   }
  593 | 
  594 |   async addEmployeeWithLoginDetails(
  595 |     details: EmployeeWithLoginDetails,
  596 |   ): Promise<string> {
  597 |     await this.fillAddEmployeeForm({
  598 |       firstName: details.firstName,
  599 |       middleName: details.middleName,
  600 |       lastName: details.lastName,
  601 |       employeeId: details.employeeId,
  602 |       profilePicturePath: details.profilePicturePath,
  603 |     });
  604 | 
  605 |     const employeeId = await this.employeeID.inputValue();
  606 | 
  607 |     if (!(await this.createLoginDetailsCheckbox.isChecked())) {
  608 |       await this.createLoginDetailsSwitch.click();
  609 |     }
  610 | 
  611 |     await expect(this.createLoginDetailsCheckbox).toBeChecked();
  612 | 
  613 |     await expect(this.employeeUsernameInput).toBeVisible();
  614 |     await expect(this.employeePasswordInput).toBeVisible();
  615 |     await expect(this.confirmPasswordInput).toBeVisible();
  616 | 
  617 |     await this.employeeUsernameInput.fill(details.username);
  618 |     await this.employeePasswordInput.fill(details.password);
  619 |     await this.confirmPasswordInput.fill(details.password);
  620 | 
  621 |     if (details.status === "Disabled") {
  622 |       await this.disabledStatusRadio.check({
  623 |         force: true,
  624 |       });
  625 | 
  626 |       await expect(this.disabledStatusRadio).toBeChecked();
  627 |     } else {
  628 |       await this.enabledStatusRadio.check({
  629 |         force: true,
  630 |       });
  631 | 
  632 |       await expect(this.enabledStatusRadio).toBeChecked();
  633 |     }
  634 |     await expect(this.employeeUsernameInput).toHaveValue(details.username);
  635 | 
  636 |     await expect(this.employeePasswordInput).toHaveValue(details.password);
  637 | 
  638 |     await expect(this.confirmPasswordInput).toHaveValue(details.password);
  639 | 
  640 |     const createEmployeeResponse = this.page.waitForResponse(
  641 |       (response) =>
  642 |         response.url().includes("/api/v2/pim/employees") &&
  643 |         response.request().method() === "POST" &&
  644 |         response.ok(),
```