# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> TC_PIM_002 - Admin should search for an employee by employee ID @positive @regression
- Location: tests\PIM\pim-employee-list.spec.ts:5:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "Auto1785572571302"
Received: "Auto1785571204323"
```

# Page snapshot

```yaml
- generic [ref=f5e3]:
  - generic:
    - complementary [ref=f5e4]:
      - navigation "Sidepanel" [ref=f5e5]:
        - generic [ref=f5e6]:
          - link [ref=f5e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f5e9]
          - text: 
        - generic [ref=f5e10]:
          - generic [ref=f5e11]:
            - generic [ref=f5e12]:
              - textbox "Search" [ref=f5e15]
              - button "" [ref=f5e16] [cursor=pointer]
            - separator [ref=f5e18]
          - list [ref=f5e19]:
            - listitem [ref=f5e20]:
              - link "Admin" [ref=f5e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f5e25]:
              - link "PIM" [ref=f5e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f5e41]:
              - link "Leave" [ref=f5e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f5e46]:
              - link "Time" [ref=f5e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f5e54]:
              - link "Recruitment" [ref=f5e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f5e62]:
              - link "My Info" [ref=f5e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f5e70]:
              - link "Performance" [ref=f5e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f5e80]:
              - link "Dashboard" [ref=f5e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f5e85]:
              - link "Directory" [ref=f5e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f5e90]:
              - link "Maintenance" [ref=f5e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f5e96]:
              - link "Claim" [ref=f5e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f5e105]:
              - link "Buzz" [ref=f5e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f5e110]:
      - generic [ref=f5e111]:
        - generic [ref=f5e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f5e114]
        - link [ref=f5e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f5e117] [cursor=pointer]
        - list [ref=f5e123]:
          - listitem [ref=f5e124]:
            - generic [ref=f5e125] [cursor=pointer]:
              - img "profile picture" [ref=f5e126]
              - paragraph [ref=f5e127]: manda user
              - generic [ref=f5e128]: 
      - navigation "Topbar Menu" [ref=f5e130]:
        - list [ref=f5e131]:
          - listitem [ref=f5e132] [cursor=pointer]:
            - generic [ref=f5e133]:
              - text: Configuration
              - generic [ref=f5e134]: 
          - listitem [ref=f5e135] [cursor=pointer]:
            - link "Employee List" [ref=f5e136]:
              - /url: "#"
          - listitem [ref=f5e137] [cursor=pointer]:
            - link "Add Employee" [ref=f5e138]:
              - /url: "#"
          - listitem [ref=f5e139] [cursor=pointer]:
            - link "Reports" [ref=f5e140]:
              - /url: "#"
          - button "" [ref=f5e142] [cursor=pointer]
  - generic [ref=f5e144]:
    - generic [ref=f5e146]:
      - generic [ref=f5e147]:
        - generic [ref=f5e148]:
          - heading "Employee Information" [level=5] [ref=f5e150]
          - button "" [ref=f5e153] [cursor=pointer]
        - separator [ref=f5e155]
        - generic [ref=f5e157]:
          - generic [ref=f5e159]:
            - generic [ref=f5e161]:
              - generic [ref=f5e162]: Employee Name
              - textbox "Type for hints..." [ref=f5e167]
            - generic [ref=f5e169]:
              - generic [ref=f5e170]: Employee Id
              - textbox [ref=f5e173]: "0432"
            - generic [ref=f5e175]:
              - generic [ref=f5e176]: Employment Status
              - generic [ref=f5e180] [cursor=pointer]:
                - generic [ref=f5e181]: "-- Select --"
                - generic [ref=f5e182]: 
            - generic [ref=f5e185]:
              - generic [ref=f5e186]: Include
              - generic [ref=f5e190] [cursor=pointer]:
                - generic [ref=f5e191]: Current Employees Only
                - generic [ref=f5e192]: 
            - generic [ref=f5e195]:
              - generic [ref=f5e196]: Supervisor Name
              - textbox "Type for hints..." [ref=f5e201]
            - generic [ref=f5e203]:
              - generic [ref=f5e204]: Job Title
              - generic [ref=f5e208] [cursor=pointer]:
                - generic [ref=f5e209]: "-- Select --"
                - generic [ref=f5e210]: 
            - generic [ref=f5e213]:
              - generic [ref=f5e214]: Sub Unit
              - generic [ref=f5e218] [cursor=pointer]:
                - generic [ref=f5e219]: "-- Select --"
                - generic [ref=f5e220]: 
          - separator [ref=f5e222]
          - generic [ref=f5e223]:
            - button "Reset" [ref=f5e224] [cursor=pointer]
            - button "Search" [active] [ref=f5e225] [cursor=pointer]
      - generic [ref=f5e226]:
        - button " Add" [ref=f5e228] [cursor=pointer]:
          - generic [ref=f5e229]: 
          - text: Add
        - generic [ref=f5e230]:
          - separator [ref=f5e231]
          - generic [ref=f5e232]: (1) Record Found
        - table [ref=f5e235]:
          - rowgroup [ref=f5e236]:
            - row [ref=f5e237]:
              - columnheader "" [ref=f5e238]:
                - generic [ref=f5e240] [cursor=pointer]:
                  - checkbox "" [ref=f5e241]
                  - generic [ref=f5e242]: 
              - columnheader "Id " [ref=f5e244]:
                - text: Id
                - generic [ref=f5e245]:
                  - generic [ref=f5e246] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f5e247]:
                - text: First (& Middle) Name
                - generic [ref=f5e248]:
                  - generic [ref=f5e249] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f5e250]:
                - text: Last Name
                - generic [ref=f5e251]:
                  - generic [ref=f5e252] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f5e253]:
                - text: Job Title
                - generic [ref=f5e254]:
                  - generic [ref=f5e255] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f5e256]:
                - text: Employment Status
                - generic [ref=f5e257]:
                  - generic [ref=f5e258] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f5e259]:
                - text: Sub Unit
                - generic [ref=f5e260]:
                  - generic [ref=f5e261] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f5e262]:
                - text: Supervisor
                - generic [ref=f5e263]:
                  - generic [ref=f5e264] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f5e265]
          - rowgroup [ref=f5e266]:
            - row [ref=f5e268] [cursor=pointer]:
              - cell "" [ref=f5e269]:
                - generic [ref=f5e272]:
                  - checkbox "" [ref=f5e273]
                  - generic [ref=f5e274]: 
              - cell "0432" [ref=f5e276]
              - cell "Auto1785572571302 test" [ref=f5e278]
              - cell "user" [ref=f5e280]
              - cell [ref=f5e282]
              - cell [ref=f5e283]
              - cell [ref=f5e284]
              - cell [ref=f5e285]
              - cell [ref=f5e286]:
                - generic [ref=f5e287]:
                  - button "" [ref=f5e288]
                  - button "" [ref=f5e290]
    - generic [ref=f5e293]:
      - paragraph [ref=f5e294]: OrangeHRM OS 5.9
      - paragraph [ref=f5e295]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f5e296] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
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
> 442 |     expect(actualFirstName).toBe(firstName);
      |                             ^ Error: expect(received).toBe(expected) // Object.is equality
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
```