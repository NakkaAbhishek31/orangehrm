# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_006 - Admin should update employee personal details @positive @regression
- Location: tests\PIM\pim-employee.spec.ts:43:5

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  getByRole('textbox', { name: 'Middle Name' })
Expected: "updatedTest"
Received: "Test"
Timeout:  10000ms

Call log:
  - Expect "toHaveValue" with timeout 10000ms
  - waiting for getByRole('textbox', { name: 'Middle Name' })
    23 × locator resolved to <input name="middleName" data-v-1f99f73c="" placeholder="Middle Name" class="oxd-input oxd-input--active orangehrm-middlename"/>
       - unexpected value "Test"

```

```yaml
- textbox "Middle Name": Test
```

# Test source

```ts
  358 | 
  359 |   await expect(this.page).toHaveURL(
  360 |     /pim\/viewPersonalDetails\/empNumber\/\d+/,
  361 |     {
  362 |       timeout: 30_000,
  363 |     }
  364 |   );
  365 | 
  366 |   await expect(this.personalDetailsHeading).toBeVisible({
  367 |     timeout: 15_000,
  368 |   });
  369 | 
  370 |   return employeeId;
  371 | }
  372 |   async gotoEmployeeList(): Promise<void> {
  373 |     await this.employeeListLink.click();
  374 |   }
  375 | 
  376 |   async filterEmployeeList(filters: EmployeeFilters): Promise<void> {
  377 |     if (filters.employeeId !== undefined) {
  378 |       await this.employeeIdFilterInput.fill(filters.employeeId);
  379 |     }
  380 | 
  381 |     if (filters.employeeName !== undefined) {
  382 |       await this.employeeNameFilterInput.fill(filters.employeeName);
  383 | 
  384 |       const matchingOption = this.autocompleteOptions
  385 |         .filter({ hasText: filters.employeeName })
  386 |         .first();
  387 | 
  388 |       await expect(matchingOption).toBeVisible();
  389 |       await matchingOption.click();
  390 |     }
  391 |   }
  392 | 
  393 |   async clickOnFilterSearch(): Promise<void> {
  394 |     await this.filterSearchButton.click();
  395 |   }
  396 | 
  397 |   async verifyEmployeeSearchResult(
  398 |     employeeId: string,
  399 |     firstName: string,
  400 |     lastName: string,
  401 |   ): Promise<void> {
  402 |     await expect(this.loadingSpinner).toBeHidden();
  403 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  404 |     const cells = matchingRow.locator(".oxd-table-cell");
  405 |     const fullName = await cells.nth(2).innerText();
  406 |     const actualFirstName = fullName.trim().split(/\s+/)[0];
  407 |     await expect(cells.nth(1)).toHaveText(employeeId);
  408 |     expect(actualFirstName).toBe(firstName);
  409 |     await expect(cells.nth(3)).toHaveText(lastName);
  410 |     await expect(this.noRecordsFound).not.toBeVisible();
  411 |   }
  412 | 
  413 | async verifyNoEmployeeRecordsFound(employeeId: string) {
  414 |   await expect(this.loadingSpinner).toBeHidden({
  415 |     timeout: 15_000,
  416 |   });
  417 | 
  418 |   await expect(this.employeeRows).toHaveCount(0, {
  419 |     timeout: 15_000,
  420 |   });
  421 | 
  422 |   await expect(this.employeeIdFilterInput).toHaveValue(
  423 |     employeeId
  424 |   );
  425 | }
  426 | 
  427 |   async updatePersonalDetails(details: PersonalDetails): Promise<void> {
  428 |     await expect(this.personalDetailsHeading).toBeVisible();
  429 |     //await expect(this.loadingSpinner).toBeHidden();
  430 |     await expect(this.personalDetailsSaveButton).toBeEnabled();
  431 | 
  432 |     if (details.middleName !== undefined) {
  433 |       await this.middlenameInput.fill(details.middleName);
  434 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  435 |     }
  436 | 
  437 |     if (details.lastName !== undefined) {
  438 |       await this.lastnameInput.fill(details.lastName);
  439 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  440 |     }
  441 | 
  442 |     const updateResponse = this.page.waitForResponse(
  443 |       (response) =>
  444 |         response.url().includes("/personal-details") &&
  445 |         response.request().method() === "PUT" &&
  446 |         response.ok(),
  447 |       { timeout: 20_000 },
  448 |     );
  449 | 
  450 |     await this.personalDetailsSaveButton.click();
  451 |     await updateResponse;
  452 | 
  453 |     await expect(this.successToast).toContainText("Successfully Updated");
  454 | 
  455 |     //await expect(this.loadingSpinner).toBeHidden();
  456 | 
  457 |     if (details.middleName !== undefined) {
> 458 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
      |                                          ^ Error: expect(locator).toHaveValue(expected) failed
  459 |     }
  460 | 
  461 |     if (details.lastName !== undefined) {
  462 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  463 |     }
  464 |   }
  465 |   //deleting the Records
  466 |   async deleteEmployeeById(employeeId: string): Promise<void> {
  467 |     await expect(this.loadingSpinner).toBeHidden();
  468 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  469 |     await expect(matchingRow).toHaveCount(1);
  470 |     const deleteButton = matchingRow.locator("button").filter({
  471 |       has: this.page.locator("i.bi-trash"),
  472 |     });
  473 |     await deleteButton.click();
  474 | 
  475 |     const confirmationDilaog = this.page.getByRole("dialog");
  476 |     await expect(confirmationDilaog).toBeVisible();
  477 |     const deleteResponse = this.page.waitForResponse(
  478 |       (response) =>
  479 |         response.url().includes("/api/v2/pim/employees") &&
  480 |         response.request().method() === "DELETE" &&
  481 |         response.ok(),
  482 |       { timeout: 20_000 },
  483 |     );
  484 | 
  485 |     await confirmationDilaog.getByText("Yes, Delete", { exact: true }).click();
  486 | 
  487 |     await deleteResponse;
  488 | 
  489 |     await expect(this.successToast).toContainText("Successfully Deleted");
  490 | 
  491 |     await expect(matchingRow).toHaveCount(0);
  492 |   }
  493 | 
  494 |   async verifyInvalidProfilePicture(invalidFilePath: string): Promise<void> {
  495 |     //const originalImageSrc= await this.profilePicturePreview.getAttribute('src');
  496 | 
  497 |     await this.profilePictureInput.setInputFiles(invalidFilePath, {
  498 |       timeout: 20_000,
  499 |     });
  500 | 
  501 |     await expect(this.profilePictureValidation).toBeVisible();
  502 | 
  503 |     await expect(this.profilePictureValidation).toContainText(
  504 |       "File type not allowed",
  505 |     );
  506 |   }
  507 | 
  508 |   async getVisibleEmployeeIds(): Promise<string[]> {
  509 |     await expect(this.employeeRows.first()).toBeVisible({
  510 |       timeout: 15_000,
  511 |     });
  512 | 
  513 |     await expect(this.employeeIdCells.first()).toBeVisible({
  514 |       timeout: 15_000,
  515 |     });
  516 | 
  517 |     const employeeIds = await this.employeeIdCells.allTextContents();
  518 | 
  519 |     return employeeIds
  520 |       .map((employeeId) => employeeId.trim())
  521 |       .filter((employeeId) => employeeId.length > 0);
  522 |   }
  523 | 
  524 |   async goToPage(pageNumber: number): Promise<void> {
  525 |     const currentPageIds = await this.getVisibleEmployeeIds();
  526 | 
  527 |     const pageButton = this.page
  528 |       .getByRole("navigation", {
  529 |         name: "Pagination Navigation",
  530 |       })
  531 |       .getByRole("button", {
  532 |         name: String(pageNumber),
  533 |         exact: true,
  534 |       });
  535 | 
  536 |     await expect(pageButton).toBeVisible();
  537 | 
  538 |     const employeesResponse = this.page.waitForResponse(
  539 |       (response) =>
  540 |         response.url().includes("/api/v2/pim/employees") &&
  541 |         response.request().method() === "GET" &&
  542 |         response.ok(),
  543 |       { timeout: 20_000 },
  544 |     );
  545 | 
  546 |     await pageButton.click();
  547 |     await employeesResponse;
  548 | 
  549 |     await expect
  550 |       .poll(async () => this.getVisibleEmployeeIds(), { timeout: 15_000 })
  551 |       .not.toEqual(currentPageIds);
  552 |   }
  553 | 
  554 |   async openEmployeeById(employeeId: string): Promise<void> {
  555 |     const employeeRow = this.employeeRows.filter({
  556 |       has: this.page
  557 |         .locator(".oxd-table-cell")
  558 |         .nth(1)
```