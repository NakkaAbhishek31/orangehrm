# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_PIM_076 - Admin should search for two employees independently @positive @search @regression
- Location: tests\Admin\admin-users.spec.ts:1014:7

# Error details

```
Test timeout of 120000ms exceeded.
```

```
Error: locator.fill: Test timeout of 120000ms exceeded.
Call log:
  - waiting for locator('.oxd-table-filter').locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input')

```

# Test source

```ts
  313 |   //     (response) =>
  314 |   //       response.url().includes("/personal-details") &&
  315 |   //       response.request().method() === "GET" &&
  316 |   //       response.ok(),
  317 |   //     { timeout: 20_000 },
  318 |   //   );
  319 | 
  320 |   //   await this.SaveEmployeeButton.click();
  321 | 
  322 |   //   await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  323 |   //     timeout: 20_000,
  324 |   //   });
  325 | 
  326 |   //   await personalDetailsLoaded;
  327 |   //   await expect(this.loadingSpinner).toBeHidden();
  328 |   //   await expect(this.personalDetailsHeading).toBeVisible();
  329 | 
  330 |   //   return employeeId;
  331 |   // }
  332 |   // async addEmployee(employee: EmployeeData): Promise<string> {
  333 |   //   await this.firstnameInput.fill(employee.firstName);
  334 | 
  335 |   //   if (employee.middleName) {
  336 |   //     await this.middlenameInput.fill(employee.middleName);
  337 |   //   }
  338 | 
  339 |   //   await this.lastnameInput.fill(employee.lastName);
  340 | 
  341 |   //   /*
  342 |   //    * OrangeHRM generates the same next ID when multiple workers
  343 |   //    * open Add Employee simultaneously. Override it with a unique ID.
  344 |   //    */
  345 |   //   const employeeId =
  346 |   //     employee.employeeId ??
  347 |   //     `${Date.now().toString().slice(-6)}${Math.floor(
  348 |   //       Math.random() * 1000
  349 |   //     )
  350 |   //       .toString()
  351 |   //       .padStart(3, "0")}`;
  352 | 
  353 |   //   await this.employeeID.fill(employeeId);
  354 | 
  355 |   //   await this.SaveEmployeeButton.click();
  356 | 
  357 |   //   await expect(this.page).toHaveURL(
  358 |   //     /pim\/viewPersonalDetails\/empNumber\/\d+/,
  359 |   //     {
  360 |   //       timeout: 30_000,
  361 |   //     }
  362 |   //   );
  363 | 
  364 |   //   await expect(this.personalDetailsHeading).toBeVisible({
  365 |   //     timeout: 15_000,
  366 |   //   });
  367 | 
  368 |   //   return employeeId;
  369 |   // }
  370 | 
  371 |   async addEmployee(data: EmployeeData): Promise<string> {
  372 |     await this.firstnameInput.fill(data.firstName);
  373 | 
  374 |     if (data.middleName !== undefined) {
  375 |       await this.middlenameInput.fill(data.middleName);
  376 |     }
  377 | 
  378 |     await this.lastnameInput.fill(data.lastName);
  379 | 
  380 |     const employeeId =
  381 |       data.employeeId ??
  382 |       `${Date.now().toString().slice(-8)}${Math.floor(Math.random() * 10)}`;
  383 |     await this.employeeID.fill(employeeId);
  384 | 
  385 |     if (data.profilePicturePath) {
  386 |       await this.profilePictureInput.setInputFiles(data.profilePicturePath);
  387 |     }
  388 | 
  389 |     const createEmployeeResponse = this.page.waitForResponse(
  390 |       (response) =>
  391 |         response.url().includes("/api/v2/pim/employees") &&
  392 |         response.request().method() === "POST" &&
  393 |         response.ok(),
  394 |       { timeout: 20_000 },
  395 |     );
  396 | 
  397 |     await this.SaveEmployeeButton.click();
  398 |     await createEmployeeResponse;
  399 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  400 |       timeout: 20_000,
  401 |     });
  402 |     await expect(this.loadingSpinner).toBeHidden({ timeout: 20_000 });
  403 | 
  404 |     return employeeId;
  405 |   }
  406 | 
  407 |   async gotoEmployeeList(): Promise<void> {
  408 |     await this.employeeListLink.click();
  409 |   }
  410 | 
  411 |   async filterEmployeeList(filters: EmployeeFilters): Promise<void> {
  412 |     if (filters.employeeId !== undefined) {
> 413 |       await this.employeeIdFilterInput.fill(filters.employeeId);
      |                                        ^ Error: locator.fill: Test timeout of 120000ms exceeded.
  414 |     }
  415 | 
  416 |     if (filters.employeeName !== undefined) {
  417 |       await this.employeeNameFilterInput.fill(filters.employeeName);
  418 | 
  419 |       const matchingOption = this.autocompleteOptions
  420 |         .filter({ hasText: filters.employeeName })
  421 |         .first();
  422 | 
  423 |       await expect(matchingOption).toBeVisible();
  424 |       await matchingOption.click();
  425 |     }
  426 |   }
  427 | 
  428 |   async clickOnFilterSearch(): Promise<void> {
  429 |     const employeeListResponse = this.page.waitForResponse(
  430 |       (response) =>
  431 |         response.url().includes("/api/v2/pim/employees") &&
  432 |         response.request().method() === "GET" &&
  433 |         response.ok(),
  434 |       { timeout: 20_000 },
  435 |     );
  436 | 
  437 |     await this.filterSearchButton.click();
  438 |     await employeeListResponse;
  439 |     await expect(this.loadingSpinner).toBeHidden({ timeout: 20_000 });
  440 |   }
  441 | 
  442 |   async verifyEmployeeSearchResult(
  443 |     employeeId: string,
  444 |     firstName: string,
  445 |     lastName: string,
  446 |   ): Promise<void> {
  447 |     await expect(this.loadingSpinner).toBeHidden();
  448 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  449 |     const cells = matchingRow.locator(".oxd-table-cell");
  450 |     const fullName = await cells.nth(2).innerText();
  451 |     const actualFirstName = fullName.trim().split(/\s+/)[0];
  452 |     await expect(cells.nth(1)).toHaveText(employeeId);
  453 |     expect(actualFirstName).toBe(firstName);
  454 |     await expect(cells.nth(3)).toHaveText(lastName);
  455 |     await expect(this.noRecordsFound).not.toBeVisible();
  456 |   }
  457 | 
  458 |   async verifyNoEmployeeRecordsFound(employeeId: string) {
  459 |     await expect(this.loadingSpinner).toBeHidden({
  460 |       timeout: 15_000,
  461 |     });
  462 | 
  463 |     await expect(this.employeeRows).toHaveCount(0, {
  464 |       timeout: 15_000,
  465 |     });
  466 | 
  467 |     await expect(this.employeeIdFilterInput).toHaveValue(employeeId);
  468 |   }
  469 | 
  470 |   async updatePersonalDetails(details: PersonalDetails): Promise<void> {
  471 |     await expect(this.personalDetailsHeading).toBeVisible();
  472 |     await expect(this.loadingSpinner).toBeHidden();
  473 |     await expect(this.personalDetailsSaveButton).toBeEnabled();
  474 | 
  475 |     if (details.middleName !== undefined) {
  476 |       await this.middlenameInput.fill(details.middleName);
  477 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  478 |     }
  479 | 
  480 |     if (details.lastName !== undefined) {
  481 |       await this.lastnameInput.fill(details.lastName);
  482 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  483 |     }
  484 | 
  485 |     const updateResponse = this.page.waitForResponse(
  486 |       (response) =>
  487 |         response.url().includes("/personal-details") &&
  488 |         response.request().method() === "PUT" &&
  489 |         response.ok(),
  490 |       { timeout: 20_000 },
  491 |     );
  492 | 
  493 |     await this.personalDetailsSaveButton.click();
  494 |     await updateResponse;
  495 | 
  496 |     await expect(this.successToast).toContainText("Successfully Updated");
  497 | 
  498 |     await expect(this.loadingSpinner).toBeHidden();
  499 | 
  500 |     if (details.middleName !== undefined) {
  501 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  502 |     }
  503 | 
  504 |     if (details.lastName !== undefined) {
  505 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  506 |     }
  507 |   }
  508 |   //deleting the Records
  509 |   async deleteEmployeeById(employeeId: string): Promise<void> {
  510 |     await expect(this.loadingSpinner).toBeHidden();
  511 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  512 |     await expect(matchingRow).toHaveCount(1);
  513 |     const deleteButton = matchingRow.locator("button").filter({
```