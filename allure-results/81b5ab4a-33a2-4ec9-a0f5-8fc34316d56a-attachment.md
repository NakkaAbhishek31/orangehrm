# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_047 - Admin should add a new ESS system user successfully @positive @create @regression
- Location: tests\Admin\admin-users.spec.ts:218:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Personal Details' })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 15000ms
  - waiting for getByRole('heading', { name: 'Personal Details' })
  - Test timeout of 60000ms exceeded.

```

# Test source

```ts
  266 |   //   }
  267 | 
  268 |   //   if (details.middleName !== undefined) {
  269 |   //     await this.middlenameInput.fill(details.middleName);
  270 |   //   }
  271 | 
  272 |   //   if (details.lastName !== undefined) {
  273 |   //     await this.lastnameInput.fill(details.lastName);
  274 |   //   }
  275 | 
  276 |   //   let employeeId = details.employeeId ?? (await this.employeeID.inputValue());
  277 | 
  278 |   //   // if (details.employeeId !== undefined) {
  279 |   //   //   await this.employeeID.fill(employeeId);
  280 |   //   // }
  281 | 
  282 |   //   // await this.employeeID.blur();
  283 | 
  284 |   //   // const duplicateIdFound = await this.employeeIdValidation
  285 |   //   //   .waitFor({
  286 |   //   //     state: "visible",
  287 |   //   //     timeout: 3_000,
  288 |   //   //   })
  289 |   //   //   .then(() => true)
  290 |   //   //   .catch(() => false);
  291 | 
  292 |   //   // if (duplicateIdFound) {
  293 |   //   //   employeeId = `E${Date.now().toString().slice(-9)}`;
  294 | 
  295 |   //   //   await this.employeeID.fill(employeeId);
  296 |   //   //   await this.employeeID.blur();
  297 | 
  298 |   //   //   await expect(this.employeeID).toHaveValue(employeeId);
  299 |   //   //   await expect(this.employeeIdValidation).toBeHidden();
  300 |   //   // }
  301 | 
  302 |   //   if (details.profilePicturePath !== undefined) {
  303 |   //     const defaultImageSrc =
  304 |   //       await this.profilePicturePreview.getAttribute("src");
  305 | 
  306 |   //     await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  307 | 
  308 |   //     await expect(this.profilePicturePreview).not.toHaveAttribute(
  309 |   //       "src",
  310 |   //       defaultImageSrc ?? "",
  311 |   //     );
  312 |   //   }
  313 | 
  314 |   //   const personalDetailsLoaded = this.page.waitForResponse(
  315 |   //     (response) =>
  316 |   //       response.url().includes("/personal-details") &&
  317 |   //       response.request().method() === "GET" &&
  318 |   //       response.ok(),
  319 |   //     { timeout: 20_000 },
  320 |   //   );
  321 | 
  322 |   //   await this.SaveEmployeeButton.click();
  323 | 
  324 |   //   await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  325 |   //     timeout: 20_000,
  326 |   //   });
  327 | 
  328 |   //   await personalDetailsLoaded;
  329 |   //   await expect(this.loadingSpinner).toBeHidden();
  330 |   //   await expect(this.personalDetailsHeading).toBeVisible();
  331 | 
  332 |   //   return employeeId;
  333 |   // }
  334 | async addEmployee(employee: EmployeeData): Promise<string> {
  335 |   await this.firstnameInput.fill(employee.firstName);
  336 | 
  337 |   if (employee.middleName) {
  338 |     await this.middlenameInput.fill(employee.middleName);
  339 |   }
  340 | 
  341 |   await this.lastnameInput.fill(employee.lastName);
  342 | 
  343 |   /*
  344 |    * OrangeHRM generates the same next ID when multiple workers
  345 |    * open Add Employee simultaneously. Override it with a unique ID.
  346 |    */
  347 |   const employeeId =
  348 |     employee.employeeId ??
  349 |     `${Date.now().toString().slice(-6)}${Math.floor(
  350 |       Math.random() * 1000
  351 |     )
  352 |       .toString()
  353 |       .padStart(3, "0")}`;
  354 | 
  355 |   await this.employeeID.fill(employeeId);
  356 | 
  357 |   await this.SaveEmployeeButton.click();
  358 | 
  359 |   await expect(this.page).toHaveURL(
  360 |     /pim\/viewPersonalDetails\/empNumber\/\d+/,
  361 |     {
  362 |       timeout: 30_000,
  363 |     }
  364 |   );
  365 | 
> 366 |   await expect(this.personalDetailsHeading).toBeVisible({
      |                                             ^ Error: expect(locator).toBeVisible() failed
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
  458 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  459 |     }
  460 | 
  461 |     if (details.lastName !== undefined) {
  462 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  463 |     }
  464 |   }
  465 |   //deleting the Records
  466 |   async deleteEmployeeById(employeeId: string): Promise<void> {
```