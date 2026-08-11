# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> PIM Employee List >> TC_PIM_029 - Admin should search for an employee using a partial employee name @positive @search @regression
- Location: tests\PIM\pim-employee-list.spec.ts:196:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Employee List' })
    - locator resolved to <a href="#" class="oxd-topbar-body-nav-tab-item">Employee List</a>
  - attempting click action
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - performing click action
    - click action done
    - waiting for scheduled navigations to finish
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/359#"

```

# Test source

```ts
  301 |   //   //   await expect(this.employeeIdValidation).toBeHidden();
  302 |   //   // }
  303 | 
  304 |   //   if (details.profilePicturePath !== undefined) {
  305 |   //     const defaultImageSrc =
  306 |   //       await this.profilePicturePreview.getAttribute("src");
  307 | 
  308 |   //     await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  309 | 
  310 |   //     await expect(this.profilePicturePreview).not.toHaveAttribute(
  311 |   //       "src",
  312 |   //       defaultImageSrc ?? "",
  313 |   //     );
  314 |   //   }
  315 | 
  316 |   //   const personalDetailsLoaded = this.page.waitForResponse(
  317 |   //     (response) =>
  318 |   //       response.url().includes("/personal-details") &&
  319 |   //       response.request().method() === "GET" &&
  320 |   //       response.ok(),
  321 |   //     { timeout: 20_000 },
  322 |   //   );
  323 | 
  324 |   //   await this.SaveEmployeeButton.click();
  325 | 
  326 |   //   await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  327 |   //     timeout: 20_000,
  328 |   //   });
  329 | 
  330 |   //   await personalDetailsLoaded;
  331 |   //   await expect(this.loadingSpinner).toBeHidden();
  332 |   //   await expect(this.personalDetailsHeading).toBeVisible();
  333 | 
  334 |   //   return employeeId;
  335 |   // }
  336 | // async addEmployee(employee: EmployeeData): Promise<string> {
  337 | //   await this.firstnameInput.fill(employee.firstName);
  338 | 
  339 | //   if (employee.middleName) {
  340 | //     await this.middlenameInput.fill(employee.middleName);
  341 | //   }
  342 | 
  343 | //   await this.lastnameInput.fill(employee.lastName);
  344 | 
  345 | //   /*
  346 | //    * OrangeHRM generates the same next ID when multiple workers
  347 | //    * open Add Employee simultaneously. Override it with a unique ID.
  348 | //    */
  349 | //   const employeeId =
  350 | //     employee.employeeId ??
  351 | //     `${Date.now().toString().slice(-6)}${Math.floor(
  352 | //       Math.random() * 1000
  353 | //     )
  354 | //       .toString()
  355 | //       .padStart(3, "0")}`;
  356 | 
  357 | //   await this.employeeID.fill(employeeId);
  358 | 
  359 | //   await this.SaveEmployeeButton.click();
  360 | 
  361 | //   await expect(this.page).toHaveURL(
  362 | //     /pim\/viewPersonalDetails\/empNumber\/\d+/,
  363 | //     {
  364 | //       timeout: 30_000,
  365 | //     }
  366 | //   );
  367 | 
  368 | //   await expect(this.personalDetailsHeading).toBeVisible({
  369 | //     timeout: 15_000,
  370 | //   });
  371 | 
  372 | //   return employeeId;
  373 | // }
  374 | 
  375 | 
  376 | async addEmployee(data: EmployeeData): Promise<string> {
  377 |   await this.firstnameInput.fill(data.firstName);
  378 | 
  379 |   if (data.middleName !== undefined) {
  380 |     await this.middlenameInput.fill(data.middleName);
  381 |   }
  382 | 
  383 |   await this.lastnameInput.fill(data.lastName);
  384 | 
  385 |   if (data.employeeId !== undefined) {
  386 |     await this.employeeID.fill(data.employeeId);
  387 |   }
  388 | 
  389 |   if (data.profilePicturePath) {
  390 |     await this.profilePictureInput.setInputFiles(
  391 |       data.profilePicturePath,
  392 |     );
  393 |   }
  394 | 
  395 |   await this.SaveEmployeeButton.click();
  396 | 
  397 |   return await this.employeeID.inputValue();
  398 | }
  399 | 
  400 |   async gotoEmployeeList(): Promise<void> {
> 401 |     await this.employeeListLink.click();
      |                                 ^ TimeoutError: locator.click: Timeout 30000ms exceeded.
  402 |   }
  403 | 
  404 |   async filterEmployeeList(filters: EmployeeFilters): Promise<void> {
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
```