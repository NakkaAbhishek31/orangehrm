# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> TC_PIM_002 - Admin should search for an employee by employee ID @positive @regression
- Location: tests\PIM\pim-employee-list.spec.ts:5:5

# Error details

```
Error: page.waitForURL: Target page, context or browser has been closed
=========================== logs ===========================
waiting for navigation until "load"
============================================================
```

```
Error: locator.click: Target page, context or browser has been closed
```

# Test source

```ts
  294 |   //       defaultImageSrc ?? "",
  295 |   //     );
  296 |   //   }
  297 | 
  298 |   //   const personalDetailsLoaded = this.page.waitForResponse(
  299 |   //     (response) =>
  300 |   //       response.url().includes("/personal-details") &&
  301 |   //       response.request().method() === "GET" &&
  302 |   //       response.ok(),
  303 |   //     { timeout: 20_000 },
  304 |   //   );
  305 | 
  306 |   //   await this.SaveEmployeeButton.click();
  307 | 
  308 |   //   await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  309 |   //     timeout: 20_000,
  310 |   //   });
  311 | 
  312 |   //   await personalDetailsLoaded;
  313 |   //   await expect(this.loadingSpinner).toBeHidden();
  314 |   //   await expect(this.personalDetailsHeading).toBeVisible();
  315 | 
  316 |   //   return employeeId;
  317 |   // }
  318 | 
  319 |   async addEmployee(details: AddEmployeeDetails): Promise<string> {
  320 |     // Fill employee name fields.
  321 |     await this.firstnameInput.fill(details.firstName);
  322 | 
  323 |     if (details.middleName !== undefined) {
  324 |       await this.middlenameInput.fill(details.middleName);
  325 |     }
  326 | 
  327 |     await this.lastnameInput.fill(details.lastName);
  328 | 
  329 |     // Use the provided ID or keep the generated ID.
  330 |     if (details.employeeId !== undefined) {
  331 |       await this.employeeID.fill(details.employeeId);
  332 |     }
  333 | 
  334 |     let employeeId = await this.employeeID.inputValue();
  335 | 
  336 |     // Trigger duplicate-ID validation.
  337 |     await this.employeeID.blur();
  338 | 
  339 |     const duplicateIdFound = await this.employeeIdValidation
  340 |       .waitFor({
  341 |         state: "visible",
  342 |         timeout: 3_000,
  343 |       })
  344 |       .then(() => true)
  345 |       .catch(() => false);
  346 | 
  347 |     // Replace a duplicate ID with a unique ID.
  348 |     if (duplicateIdFound) {
  349 |       employeeId = `E${Date.now().toString().slice(-8)}`;
  350 | 
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
> 394 |     await this.SaveEmployeeButton.click();
      |                                   ^ Error: locator.click: Target page, context or browser has been closed
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
  451 |     await expect(this.employeeRows).toHaveCount(0);
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
```