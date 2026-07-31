# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-pagination.spec.ts >> TC_PIM_010 - Admin should navigate through Employee List pages @pagination @regression
- Location: tests\PIM\pim-pagination.spec.ts:4:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-table-body .oxd-table-card').first()
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').first()
  - Test timeout of 60000ms exceeded.

```

# Test source

```ts
  311 |     const cells = matchingRow.locator(".oxd-table-cell");
  312 |     const fullName = await cells.nth(2).innerText();
  313 |     const actualFirstName = fullName.trim().split(/\s+/)[0];
  314 |     await expect(cells.nth(1)).toHaveText(employeeId);
  315 |     expect(actualFirstName).toBe(firstName);
  316 |     await expect(cells.nth(3)).toHaveText(lastName);
  317 |     await expect(this.noRecordsFound).not.toBeVisible();
  318 |   }
  319 | 
  320 |   async verifyNoEmployeeRecordsFound(employeeId: string): Promise<void> {
  321 |     await expect(this.loadingSpinner).toBeHidden();
  322 | 
  323 |     await expect(this.noRecordsFound).toBeVisible();
  324 |     await expect(this.employeeRows).toHaveCount(0);
  325 | 
  326 |     await expect(this.employeeIdFilterInput).toHaveValue(employeeId);
  327 |   }
  328 | 
  329 |   async updatePersonalDetails(details: PersonalDetails): Promise<void> {
  330 |     await expect(this.personalDetailsHeading).toBeVisible();
  331 |     //await expect(this.loadingSpinner).toBeHidden();
  332 |     await expect(this.personalDetailsSaveButton).toBeEnabled();
  333 | 
  334 |     if (details.middleName !== undefined) {
  335 |       await this.middlenameInput.fill(details.middleName);
  336 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  337 |     }
  338 | 
  339 |     if (details.lastName !== undefined) {
  340 |       await this.lastnameInput.fill(details.lastName);
  341 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  342 |     }
  343 | 
  344 |     const updateResponse = this.page.waitForResponse(
  345 |       (response) =>
  346 |         response.url().includes("/personal-details") &&
  347 |         response.request().method() === "PUT" &&
  348 |         response.ok(),
  349 |       { timeout: 20_000 },
  350 |     );
  351 | 
  352 |     await this.personalDetailsSaveButton.click();
  353 |     await updateResponse;
  354 | 
  355 |     await expect(this.successToast).toContainText("Successfully Updated");
  356 | 
  357 |     //await expect(this.loadingSpinner).toBeHidden();
  358 | 
  359 |     if (details.middleName !== undefined) {
  360 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  361 |     }
  362 | 
  363 |     if (details.lastName !== undefined) {
  364 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  365 |     }
  366 |   }
  367 |   //deleting the Records
  368 |   async deleteEmployeeById(employeeId: string): Promise<void> {
  369 |     await expect(this.loadingSpinner).toBeHidden();
  370 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  371 |     await expect(matchingRow).toHaveCount(1);
  372 |     const deleteButton = matchingRow.locator("button").filter({
  373 |       has: this.page.locator("i.bi-trash"),
  374 |     });
  375 |     await deleteButton.click();
  376 | 
  377 |     const confirmationDilaog = this.page.getByRole("dialog");
  378 |     await expect(confirmationDilaog).toBeVisible();
  379 |     const deleteResponse = this.page.waitForResponse(
  380 |       (response) =>
  381 |         response.url().includes("/api/v2/pim/employees") &&
  382 |         response.request().method() === "DELETE" &&
  383 |         response.ok(),
  384 |       { timeout: 20_000 },
  385 |     );
  386 | 
  387 |     await confirmationDilaog.getByText("Yes, Delete", { exact: true }).click();
  388 | 
  389 |     await deleteResponse;
  390 | 
  391 |     await expect(this.successToast).toContainText("Successfully Deleted");
  392 | 
  393 |     await expect(matchingRow).toHaveCount(0);
  394 |   }
  395 | 
  396 |   async verifyInvalidProfilePicture(invalidFilePath: string): Promise<void> {
  397 |     //const originalImageSrc= await this.profilePicturePreview.getAttribute('src');
  398 | 
  399 |     await this.profilePictureInput.setInputFiles(invalidFilePath, {
  400 |       timeout: 20_000,
  401 |     });
  402 | 
  403 |     await expect(this.profilePictureValidation).toBeVisible();
  404 | 
  405 |     await expect(this.profilePictureValidation).toContainText(
  406 |       "File type not allowed",
  407 |     );
  408 |   }
  409 | 
  410 |   async getVisibleEmployeeIds(): Promise<string[]> {
> 411 |     await expect(this.employeeRows.first()).toBeVisible({
      |                                             ^ Error: expect(locator).toBeVisible() failed
  412 |       timeout: 15_000,
  413 |     });
  414 | 
  415 |     await expect(this.employeeIdCells.first()).toBeVisible({
  416 |       timeout: 15_000,
  417 |     });
  418 | 
  419 |     const employeeIds = await this.employeeIdCells.allTextContents();
  420 | 
  421 |     return employeeIds
  422 |       .map((employeeId) => employeeId.trim())
  423 |       .filter((employeeId) => employeeId.length > 0);
  424 |   }
  425 | 
  426 |   async goToPage(pageNumber: number): Promise<void> {
  427 |     const currentPageIds = await this.getVisibleEmployeeIds();
  428 | 
  429 |     const pageButton = this.page
  430 |       .getByRole("navigation", {
  431 |         name: "Pagination Navigation",
  432 |       })
  433 |       .getByRole("button", {
  434 |         name: String(pageNumber),
  435 |         exact: true,
  436 |       });
  437 | 
  438 |     await expect(pageButton).toBeVisible();
  439 | 
  440 |     const employeesResponse = this.page.waitForResponse(
  441 |       (response) =>
  442 |         response.url().includes("/api/v2/pim/employees") &&
  443 |         response.request().method() === "GET" &&
  444 |         response.ok(),
  445 |       { timeout: 20_000 },
  446 |     );
  447 | 
  448 |     await pageButton.click();
  449 |     await employeesResponse;
  450 | 
  451 |     await expect
  452 |       .poll(async () => this.getVisibleEmployeeIds(), { timeout: 15_000 })
  453 |       .not.toEqual(currentPageIds);
  454 |   }
  455 | 
  456 |   async openEmployeeById(employeeId: string): Promise<void> {
  457 |     const employeeRow = this.employeeRows.filter({
  458 |       has: this.page
  459 |         .locator(".oxd-table-cell")
  460 |         .nth(1)
  461 |         .filter({ hasText: employeeId }),
  462 |     });
  463 | 
  464 |     await expect(employeeRow).toHaveCount(1);
  465 | 
  466 |     await employeeRow.locator(".oxd-table-cell").nth(1).click();
  467 | 
  468 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  469 |       timeout: 15_000,
  470 |     });
  471 |   }
  472 | 
  473 |   async cancelAddingEmployee(): Promise<void> {
  474 |     expect(this.cancelProfilepageButton).toBeVisible();
  475 |     expect(this.cancelProfilepageButton).toBeEnabled();
  476 |     this.cancelProfilepageButton.click();
  477 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  478 |   }
  479 | 
  480 | 
  481 |  async saveEmployeeWithoutRequiredDetails(details: AddEmployeeDetails): Promise<void>
  482 |  {
  483 | 
  484 |   await this.firstnameInput.fill(details.firstName);
  485 | 
  486 |     if (details.middleName !== undefined) {
  487 |       await this.middlenameInput.fill(details.middleName);
  488 |     }
  489 | 
  490 |     await this.lastnameInput.fill(details.lastName);
  491 | 
  492 |     if (details.employeeId !== undefined) {
  493 |       await this.employeeID.fill(details.employeeId);
  494 |     }
  495 | 
  496 |     if (details.profilePicturePath !== undefined) {
  497 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  498 |     }
  499 |  
  500 |     await this.SaveEmployeeButton.click(); 
  501 |  }
  502 | 
  503 | 
  504 |  async fillAddEmployeeForm(
  505 |   details: AddEmployeeDetails
  506 | ): Promise<void> {
  507 |   
  508 |     if (details.firstName !== undefined) {
  509 |     await this.firstnameInput.fill(details.firstName);
  510 |   }
  511 | 
```