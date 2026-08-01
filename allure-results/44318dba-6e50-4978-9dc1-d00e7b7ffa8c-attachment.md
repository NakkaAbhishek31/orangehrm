# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> TC_PIM_003 - No records should appear for a nonexistent employee ID @negative @regression
- Location: tests\PIM\pim-employee-list.spec.ts:39:5

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-table-body .oxd-table-card')
Expected: 0
Received: 50

Call log:
  - Expect "toHaveCount" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card')
    8 × locator resolved to 50 elements
      - unexpected value "50"
  - Test ended.

```

# Test source

```ts
  351 |       await this.employeeID.fill(employeeId);
  352 |       await this.employeeID.blur();
  353 | 
  354 |       await expect(this.employeeID).toHaveValue(employeeId);
  355 | 
  356 |       await expect(this.employeeIdValidation).toBeHidden({
  357 |         timeout: 10_000,
  358 |       });
  359 |     }
  360 | 
  361 |     // Upload an optional profile picture.
  362 |     if (details.profilePicturePath !== undefined) {
  363 |       const originalImageSource =
  364 |         await this.profilePicturePreview.getAttribute("src");
  365 | 
  366 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  367 | 
  368 |       await expect
  369 |         .poll(async () => this.profilePicturePreview.getAttribute("src"), {
  370 |           timeout: 10_000,
  371 |           message: "Waiting for profile picture preview to update",
  372 |         })
  373 |         .not.toBe(originalImageSource);
  374 |     }
  375 | 
  376 |     // Set all waiters before clicking Save.
  377 |     const personalDetailsResponse = this.page.waitForResponse(
  378 |       (response) =>
  379 |         response.url().includes("/personal-details") &&
  380 |         response.request().method() === "GET" &&
  381 |         response.ok(),
  382 |       {
  383 |         timeout: 20_000,
  384 |       },
  385 |     );
  386 | 
  387 |     const personalDetailsURL = this.page.waitForURL(
  388 |       /pim\/viewPersonalDetails\/empNumber\/\d+/,
  389 |       {
  390 |         timeout: 20_000,
  391 |       },
  392 |     );
  393 | 
  394 |     await this.SaveEmployeeButton.click();
  395 | 
  396 |     await Promise.all([personalDetailsResponse, personalDetailsURL]);
  397 | 
  398 |     await expect(this.loadingSpinner).toBeHidden({
  399 |       timeout: 20_000,
  400 |     });
  401 | 
  402 |     await expect(this.personalDetailsHeading).toBeVisible();
  403 | 
  404 |     return employeeId;
  405 |   }
  406 |   async gotoEmployeeList(): Promise<void> {
  407 |     await this.employeeListLink.click();
  408 |   }
  409 | 
  410 |   async filterEmployeeList(filters: EmployeeFilters): Promise<void> {
  411 |     if (filters.employeeId !== undefined) {
  412 |       await this.employeeIdFilterInput.fill(filters.employeeId);
  413 |     }
  414 | 
  415 |     if (filters.employeeName !== undefined) {
  416 |       await this.employeeNameFilterInput.fill(filters.employeeName);
  417 | 
  418 |       const matchingOption = this.autocompleteOptions
  419 |         .filter({ hasText: filters.employeeName })
  420 |         .first();
  421 | 
  422 |       await expect(matchingOption).toBeVisible();
  423 |       await matchingOption.click();
  424 |     }
  425 |   }
  426 | 
  427 |   async clickOnFilterSearch(): Promise<void> {
  428 |     await this.filterSearchButton.click();
  429 |   }
  430 | 
  431 |   async verifyEmployeeSearchResult(
  432 |     employeeId: string,
  433 |     firstName: string,
  434 |     lastName: string,
  435 |   ): Promise<void> {
  436 |     await expect(this.loadingSpinner).toBeHidden();
  437 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  438 |     const cells = matchingRow.locator(".oxd-table-cell");
  439 |     const fullName = await cells.nth(2).innerText();
  440 |     const actualFirstName = fullName.trim().split(/\s+/)[0];
  441 |     await expect(cells.nth(1)).toHaveText(employeeId);
  442 |     expect(actualFirstName).toBe(firstName);
  443 |     await expect(cells.nth(3)).toHaveText(lastName);
  444 |     await expect(this.noRecordsFound).not.toBeVisible();
  445 |   }
  446 | 
  447 |   async verifyNoEmployeeRecordsFound(employeeId: string): Promise<void> {
  448 |     await expect(this.loadingSpinner).toBeHidden();
  449 | 
  450 |     await expect(this.noRecordsFound).toBeVisible();
> 451 |     await expect(this.employeeRows).toHaveCount(0);
      |                                     ^ Error: expect(locator).toHaveCount(expected) failed
  452 | 
  453 |     await expect(this.employeeIdFilterInput).toHaveValue(employeeId);
  454 |   }
  455 | 
  456 |   async updatePersonalDetails(details: PersonalDetails): Promise<void> {
  457 |     await expect(this.personalDetailsHeading).toBeVisible();
  458 |     //await expect(this.loadingSpinner).toBeHidden();
  459 |     await expect(this.personalDetailsSaveButton).toBeEnabled();
  460 | 
  461 |     if (details.middleName !== undefined) {
  462 |       await this.middlenameInput.fill(details.middleName);
  463 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  464 |     }
  465 | 
  466 |     if (details.lastName !== undefined) {
  467 |       await this.lastnameInput.fill(details.lastName);
  468 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  469 |     }
  470 | 
  471 |     const updateResponse = this.page.waitForResponse(
  472 |       (response) =>
  473 |         response.url().includes("/personal-details") &&
  474 |         response.request().method() === "PUT" &&
  475 |         response.ok(),
  476 |       { timeout: 20_000 },
  477 |     );
  478 | 
  479 |     await this.personalDetailsSaveButton.click();
  480 |     await updateResponse;
  481 | 
  482 |     await expect(this.successToast).toContainText("Successfully Updated");
  483 | 
  484 |     //await expect(this.loadingSpinner).toBeHidden();
  485 | 
  486 |     if (details.middleName !== undefined) {
  487 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  488 |     }
  489 | 
  490 |     if (details.lastName !== undefined) {
  491 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  492 |     }
  493 |   }
  494 |   //deleting the Records
  495 |   async deleteEmployeeById(employeeId: string): Promise<void> {
  496 |     await expect(this.loadingSpinner).toBeHidden();
  497 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  498 |     await expect(matchingRow).toHaveCount(1);
  499 |     const deleteButton = matchingRow.locator("button").filter({
  500 |       has: this.page.locator("i.bi-trash"),
  501 |     });
  502 |     await deleteButton.click();
  503 | 
  504 |     const confirmationDilaog = this.page.getByRole("dialog");
  505 |     await expect(confirmationDilaog).toBeVisible();
  506 |     const deleteResponse = this.page.waitForResponse(
  507 |       (response) =>
  508 |         response.url().includes("/api/v2/pim/employees") &&
  509 |         response.request().method() === "DELETE" &&
  510 |         response.ok(),
  511 |       { timeout: 20_000 },
  512 |     );
  513 | 
  514 |     await confirmationDilaog.getByText("Yes, Delete", { exact: true }).click();
  515 | 
  516 |     await deleteResponse;
  517 | 
  518 |     await expect(this.successToast).toContainText("Successfully Deleted");
  519 | 
  520 |     await expect(matchingRow).toHaveCount(0);
  521 |   }
  522 | 
  523 |   async verifyInvalidProfilePicture(invalidFilePath: string): Promise<void> {
  524 |     //const originalImageSrc= await this.profilePicturePreview.getAttribute('src');
  525 | 
  526 |     await this.profilePictureInput.setInputFiles(invalidFilePath, {
  527 |       timeout: 20_000,
  528 |     });
  529 | 
  530 |     await expect(this.profilePictureValidation).toBeVisible();
  531 | 
  532 |     await expect(this.profilePictureValidation).toContainText(
  533 |       "File type not allowed",
  534 |     );
  535 |   }
  536 | 
  537 |   async getVisibleEmployeeIds(): Promise<string[]> {
  538 |     await expect(this.employeeRows.first()).toBeVisible({
  539 |       timeout: 15_000,
  540 |     });
  541 | 
  542 |     await expect(this.employeeIdCells.first()).toBeVisible({
  543 |       timeout: 15_000,
  544 |     });
  545 | 
  546 |     const employeeIds = await this.employeeIdCells.allTextContents();
  547 | 
  548 |     return employeeIds
  549 |       .map((employeeId) => employeeId.trim())
  550 |       .filter((employeeId) => employeeId.length > 0);
  551 |   }
```