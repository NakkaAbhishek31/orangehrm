# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> PIM Employee >> TC_PIM_027 - Duplicate validation should appear for an existing employee ID @negative @validation @regression
- Location: tests\PIM\pim-employee.spec.ts:99:7

# Error details

```
Error: page.waitForResponse: Test ended.
```

# Test source

```ts
  405 |     if (filters.employeeId !== undefined) {
  406 |       await this.employeeIdFilterInput.fill(filters.employeeId);
  407 |     }
  408 | 
  409 |     if (filters.employeeName !== undefined) {
  410 |       await this.employeeNameFilterInput.fill(filters.employeeName);
  411 | 
  412 |       const matchingOption = this.autocompleteOptions
  413 |         .filter({ hasText: filters.employeeName })
  414 |         .first();
  415 | 
  416 |       await expect(matchingOption).toBeVisible();
  417 |       await matchingOption.click();
  418 |     }
  419 |   }
  420 | 
  421 |   async clickOnFilterSearch(): Promise<void> {
  422 |     await this.filterSearchButton.click();
  423 |   }
  424 | 
  425 |   async verifyEmployeeSearchResult(
  426 |     employeeId: string,
  427 |     firstName: string,
  428 |     lastName: string,
  429 |   ): Promise<void> {
  430 |     await expect(this.loadingSpinner).toBeHidden();
  431 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  432 |     const cells = matchingRow.locator(".oxd-table-cell");
  433 |     const fullName = await cells.nth(2).innerText();
  434 |     const actualFirstName = fullName.trim().split(/\s+/)[0];
  435 |     await expect(cells.nth(1)).toHaveText(employeeId);
  436 |     expect(actualFirstName).toBe(firstName);
  437 |     await expect(cells.nth(3)).toHaveText(lastName);
  438 |     await expect(this.noRecordsFound).not.toBeVisible();
  439 |   }
  440 | 
  441 | async verifyNoEmployeeRecordsFound(employeeId: string) {
  442 |   await expect(this.loadingSpinner).toBeHidden({
  443 |     timeout: 15_000,
  444 |   });
  445 | 
  446 |   await expect(this.employeeRows).toHaveCount(0, {
  447 |     timeout: 15_000,
  448 |   });
  449 | 
  450 |   await expect(this.employeeIdFilterInput).toHaveValue(
  451 |     employeeId
  452 |   );
  453 | }
  454 | 
  455 |   async updatePersonalDetails(details: PersonalDetails): Promise<void> {
  456 |     await expect(this.personalDetailsHeading).toBeVisible();
  457 |     await expect(this.loadingSpinner).toBeHidden();
  458 |     await expect(this.personalDetailsSaveButton).toBeEnabled();
  459 | 
  460 |     if (details.middleName !== undefined) {
  461 |       await this.middlenameInput.fill(details.middleName);
  462 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  463 |     }
  464 | 
  465 |     if (details.lastName !== undefined) {
  466 |       await this.lastnameInput.fill(details.lastName);
  467 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  468 |     }
  469 | 
  470 |     const updateResponse = this.page.waitForResponse(
  471 |       (response) =>
  472 |         response.url().includes("/personal-details") &&
  473 |         response.request().method() === "PUT" &&
  474 |         response.ok(),
  475 |       { timeout: 20_000 },
  476 |     );
  477 | 
  478 |     await this.personalDetailsSaveButton.click();
  479 |     await updateResponse;
  480 | 
  481 |     await expect(this.successToast).toContainText("Successfully Updated");
  482 | 
  483 |     await expect(this.loadingSpinner).toBeHidden();
  484 | 
  485 |     if (details.middleName !== undefined) {
  486 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  487 |     }
  488 | 
  489 |     if (details.lastName !== undefined) {
  490 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  491 |     }
  492 |   }
  493 |   //deleting the Records
  494 |   async deleteEmployeeById(employeeId: string): Promise<void> {
  495 |     await expect(this.loadingSpinner).toBeHidden();
  496 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  497 |     await expect(matchingRow).toHaveCount(1);
  498 |     const deleteButton = matchingRow.locator("button").filter({
  499 |       has: this.page.locator("i.bi-trash"),
  500 |     });
  501 |     await deleteButton.click();
  502 | 
  503 |     const confirmationDilaog = this.page.getByRole("dialog");
  504 |     await expect(confirmationDilaog).toBeVisible();
> 505 |     const deleteResponse = this.page.waitForResponse(
      |                                      ^ Error: page.waitForResponse: Test ended.
  506 |       (response) =>
  507 |         response.url().includes("/api/v2/pim/employees") &&
  508 |         response.request().method() === "DELETE" &&
  509 |         response.ok(),
  510 |       { timeout: 20_000 },
  511 |     );
  512 | 
  513 |     await confirmationDilaog.getByText("Yes, Delete", { exact: true }).click();
  514 | 
  515 |     await deleteResponse;
  516 | 
  517 |     await expect(this.successToast).toContainText("Successfully Deleted");
  518 | 
  519 |     await expect(matchingRow).toHaveCount(0);
  520 |   }
  521 | 
  522 |   async verifyInvalidProfilePicture(invalidFilePath: string): Promise<void> {
  523 |     //const originalImageSrc= await this.profilePicturePreview.getAttribute('src');
  524 | 
  525 |     await this.profilePictureInput.setInputFiles(invalidFilePath, {
  526 |       timeout: 20_000,
  527 |     });
  528 | 
  529 |     await expect(this.profilePictureValidation).toBeVisible();
  530 | 
  531 |     await expect(this.profilePictureValidation).toContainText(
  532 |       "File type not allowed",
  533 |     );
  534 |   }
  535 | 
  536 |   async getVisibleEmployeeIds(): Promise<string[]> {
  537 |     await expect(this.employeeRows.first()).toBeVisible({
  538 |       timeout: 15_000,
  539 |     });
  540 | 
  541 |     await expect(this.employeeIdCells.first()).toBeVisible({
  542 |       timeout: 15_000,
  543 |     });
  544 | 
  545 |     const employeeIds = await this.employeeIdCells.allTextContents();
  546 | 
  547 |     return employeeIds
  548 |       .map((employeeId) => employeeId.trim())
  549 |       .filter((employeeId) => employeeId.length > 0);
  550 |   }
  551 | 
  552 |   async goToPage(pageNumber: number): Promise<void> {
  553 |     const currentPageIds = await this.getVisibleEmployeeIds();
  554 | 
  555 |     const pageButton = this.page
  556 |       .getByRole("navigation", {
  557 |         name: "Pagination Navigation",
  558 |       })
  559 |       .getByRole("button", {
  560 |         name: String(pageNumber),
  561 |         exact: true,
  562 |       });
  563 | 
  564 |     await expect(pageButton).toBeVisible();
  565 | 
  566 |     const employeesResponse = this.page.waitForResponse(
  567 |       (response) =>
  568 |         response.url().includes("/api/v2/pim/employees") &&
  569 |         response.request().method() === "GET" &&
  570 |         response.ok(),
  571 |       { timeout: 20_000 },
  572 |     );
  573 | 
  574 |     await pageButton.click();
  575 |     await employeesResponse;
  576 | 
  577 |     await expect
  578 |       .poll(async () => this.getVisibleEmployeeIds(), { timeout: 15_000 })
  579 |       .not.toEqual(currentPageIds);
  580 |   }
  581 | 
  582 |   async openEmployeeById(employeeId: string): Promise<void> {
  583 |     const employeeRow = this.employeeRows.filter({
  584 |       has: this.page
  585 |         .locator(".oxd-table-cell")
  586 |         .nth(1)
  587 |         .filter({ hasText: employeeId }),
  588 |     });
  589 | 
  590 |     await expect(employeeRow).toHaveCount(1);
  591 | 
  592 |     await employeeRow.locator(".oxd-table-cell").nth(1).click();
  593 | 
  594 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  595 |       timeout: 15_000,
  596 |     });
  597 |   }
  598 | 
  599 |   async cancelAddingEmployee(): Promise<void> {
  600 |     expect(this.cancelProfilepageButton).toBeVisible();
  601 |     expect(this.cancelProfilepageButton).toBeEnabled();
  602 |     this.cancelProfilepageButton.click();
  603 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  604 |   }
  605 | 
```