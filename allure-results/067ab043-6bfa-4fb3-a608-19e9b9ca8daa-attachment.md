# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> TC_PIM_004 - Admin should search for an employee by name @positive @regression
- Location: tests\PIM\pim-employee-list.spec.ts:56:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-autocomplete-option').filter({ hasText: 'Auto1785574490595' }).first()
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('.oxd-autocomplete-option').filter({ hasText: 'Auto1785574490595' }).first()
  - Protocol error (Runtime.callFunctionOn): Internal server error, session closed.

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Noor Eman
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Employee Information" [level=5]
- button ""
- separator
- text: Employee Name
- textbox "Type for hints...": Auto1785574490595
- listbox:
  - option "Searching...."
- text: Employee Id
- textbox
- text: Employment Status -- Select --  Include Current Employees Only  Supervisor Name
- textbox "Type for hints..."
- text: Job Title -- Select --  Sub Unit -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- table
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  341 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  342 | 
  343 |       await expect
  344 |         .poll(async () => this.profilePicturePreview.getAttribute("src"), {
  345 |           timeout: 10_000,
  346 |           message: "Waiting for profile picture preview",
  347 |         })
  348 |         .not.toBe(originalImageSource);
  349 |     }
  350 | 
  351 |     // Save and wait for the Personal Details page.
  352 |     await Promise.all([
  353 |       this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  354 |         timeout: 30_000,
  355 |       }),
  356 |       this.SaveEmployeeButton.click(),
  357 |     ]);
  358 | 
  359 |     await expect(this.personalDetailsHeading).toBeVisible({
  360 |       timeout: 20_000,
  361 |     });
  362 | 
  363 |     await expect(this.loadingSpinner).toBeHidden({
  364 |       timeout: 20_000,
  365 |     });
  366 | 
  367 |     // Verify the saved employee data.
  368 |     await expect(this.firstnameInput).toHaveValue(details.firstName, {
  369 |       timeout: 20_000,
  370 |     });
  371 | 
  372 |     await expect(this.lastnameInput).toHaveValue(details.lastName, {
  373 |       timeout: 20_000,
  374 |     });
  375 | 
  376 |     if (details.middleName !== undefined) {
  377 |       await expect(this.middlenameInput).toHaveValue(details.middleName, {
  378 |         timeout: 20_000,
  379 |       });
  380 |     }
  381 | 
  382 |     await expect(this.employeeID).toHaveValue(employeeId);
  383 | 
  384 |     return employeeId;
  385 |   }
  386 |   async gotoEmployeeList(): Promise<void> {
  387 |     await this.employeeListLink.click();
  388 |   }
  389 | 
  390 |   async filterEmployeeList(filters: EmployeeFilters): Promise<void> {
  391 |     if (filters.employeeId !== undefined) {
  392 |       await this.employeeIdFilterInput.fill(filters.employeeId);
  393 |     }
  394 | 
  395 |     if (filters.employeeName !== undefined) {
  396 |       await this.employeeNameFilterInput.fill(filters.employeeName);
  397 | 
  398 |       const matchingOption = this.autocompleteOptions
  399 |         .filter({ hasText: filters.employeeName })
  400 |         .first();
  401 | 
  402 |       await expect(matchingOption).toBeVisible();
  403 |       await matchingOption.click();
  404 |     }
  405 |   }
  406 | 
  407 |   async clickOnFilterSearch(): Promise<void> {
  408 |     await this.filterSearchButton.click();
  409 |   }
  410 | 
  411 |   async verifyEmployeeSearchResult(
  412 |     employeeId: string,
  413 |     firstName: string,
  414 |     lastName: string,
  415 |   ): Promise<void> {
  416 |     await expect(this.loadingSpinner).toBeHidden();
  417 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  418 |     const cells = matchingRow.locator(".oxd-table-cell");
  419 |     const fullName = await cells.nth(2).innerText();
  420 |     const actualFirstName = fullName.trim().split(/\s+/)[0];
  421 |     await expect(cells.nth(1)).toHaveText(employeeId);
  422 |     expect(actualFirstName).toBe(firstName);
  423 |     await expect(cells.nth(3)).toHaveText(lastName);
  424 |     await expect(this.noRecordsFound).not.toBeVisible();
  425 |   }
  426 | 
  427 |   async verifyNoEmployeeRecordsFound(employeeId: string): Promise<void> {
  428 |     await expect(this.loadingSpinner).toBeHidden();
  429 | 
  430 |     await expect(this.noRecordsFound).toBeVisible();
  431 |     await expect(this.employeeRows).toHaveCount(0);
  432 | 
  433 |     await expect(this.employeeIdFilterInput).toHaveValue(employeeId);
  434 |   }
  435 | 
  436 |   async updatePersonalDetails(details: PersonalDetails): Promise<void> {
  437 |     await expect(this.personalDetailsHeading).toBeVisible();
  438 |     //await expect(this.loadingSpinner).toBeHidden();
  439 |     await expect(this.personalDetailsSaveButton).toBeEnabled();
  440 | 
> 441 |     if (details.middleName !== undefined) {
      |                                    ^ Error: expect(locator).toBeVisible() failed
  442 |       await this.middlenameInput.fill(details.middleName);
  443 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  444 |     }
  445 | 
  446 |     if (details.lastName !== undefined) {
  447 |       await this.lastnameInput.fill(details.lastName);
  448 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  449 |     }
  450 | 
  451 |     const updateResponse = this.page.waitForResponse(
  452 |       (response) =>
  453 |         response.url().includes("/personal-details") &&
  454 |         response.request().method() === "PUT" &&
  455 |         response.ok(),
  456 |       { timeout: 20_000 },
  457 |     );
  458 | 
  459 |     await this.personalDetailsSaveButton.click();
  460 |     await updateResponse;
  461 | 
  462 |     await expect(this.successToast).toContainText("Successfully Updated");
  463 | 
  464 |     //await expect(this.loadingSpinner).toBeHidden();
  465 | 
  466 |     if (details.middleName !== undefined) {
  467 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  468 |     }
  469 | 
  470 |     if (details.lastName !== undefined) {
  471 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  472 |     }
  473 |   }
  474 |   //deleting the Records
  475 |   async deleteEmployeeById(employeeId: string): Promise<void> {
  476 |     await expect(this.loadingSpinner).toBeHidden();
  477 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  478 |     await expect(matchingRow).toHaveCount(1);
  479 |     const deleteButton = matchingRow.locator("button").filter({
  480 |       has: this.page.locator("i.bi-trash"),
  481 |     });
  482 |     await deleteButton.click();
  483 | 
  484 |     const confirmationDilaog = this.page.getByRole("dialog");
  485 |     await expect(confirmationDilaog).toBeVisible();
  486 |     const deleteResponse = this.page.waitForResponse(
  487 |       (response) =>
  488 |         response.url().includes("/api/v2/pim/employees") &&
  489 |         response.request().method() === "DELETE" &&
  490 |         response.ok(),
  491 |       { timeout: 20_000 },
  492 |     );
  493 | 
  494 |     await confirmationDilaog.getByText("Yes, Delete", { exact: true }).click();
  495 | 
  496 |     await deleteResponse;
  497 | 
  498 |     await expect(this.successToast).toContainText("Successfully Deleted");
  499 | 
  500 |     await expect(matchingRow).toHaveCount(0);
  501 |   }
  502 | 
  503 |   async verifyInvalidProfilePicture(invalidFilePath: string): Promise<void> {
  504 |     //const originalImageSrc= await this.profilePicturePreview.getAttribute('src');
  505 | 
  506 |     await this.profilePictureInput.setInputFiles(invalidFilePath, {
  507 |       timeout: 20_000,
  508 |     });
  509 | 
  510 |     await expect(this.profilePictureValidation).toBeVisible();
  511 | 
  512 |     await expect(this.profilePictureValidation).toContainText(
  513 |       "File type not allowed",
  514 |     );
  515 |   }
  516 | 
  517 |   async getVisibleEmployeeIds(): Promise<string[]> {
  518 |     await expect(this.employeeRows.first()).toBeVisible({
  519 |       timeout: 15_000,
  520 |     });
  521 | 
  522 |     await expect(this.employeeIdCells.first()).toBeVisible({
  523 |       timeout: 15_000,
  524 |     });
  525 | 
  526 |     const employeeIds = await this.employeeIdCells.allTextContents();
  527 | 
  528 |     return employeeIds
  529 |       .map((employeeId) => employeeId.trim())
  530 |       .filter((employeeId) => employeeId.length > 0);
  531 |   }
  532 | 
  533 |   async goToPage(pageNumber: number): Promise<void> {
  534 |     const currentPageIds = await this.getVisibleEmployeeIds();
  535 | 
  536 |     const pageButton = this.page
  537 |       .getByRole("navigation", {
  538 |         name: "Pagination Navigation",
  539 |       })
  540 |       .getByRole("button", {
  541 |         name: String(pageNumber),
```