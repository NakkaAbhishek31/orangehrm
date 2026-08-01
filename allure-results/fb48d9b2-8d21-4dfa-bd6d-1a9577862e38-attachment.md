# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> TC_PIM_038 - Admin should delete multiple employees using bulk selection @positive @bulk-delete @regression
- Location: tests\PIM\pim-employee-list.spec.ts:284:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-toast-content-text').filter({ hasText: 'No Records Found' })
Expected: visible
Error: strict mode violation: locator('.oxd-toast-content-text').filter({ hasText: 'No Records Found' }) resolved to 2 elements:
    1) <p data-v-7b563373="" data-v-35c8fe09="" class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text">No Records Found</p> aka getByText('No Records Found').nth(1)
    2) <p data-v-7b563373="" data-v-35c8fe09="" class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text">No Records Found</p> aka getByText('No Records Found').nth(2)

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for locator('.oxd-toast-content-text').filter({ hasText: 'No Records Found' })

```

# Page snapshot

```yaml
- generic [ref=f7e2]:
  - generic [ref=f7e3]:
    - generic:
      - complementary [ref=f7e4]:
        - navigation "Sidepanel" [ref=f7e5]:
          - generic [ref=f7e6]:
            - link [ref=f7e7] [cursor=pointer]:
              - /url: https://www.orangehrm.com/
              - img "client brand banner" [ref=f7e9]
            - text: 
          - generic [ref=f7e10]:
            - generic [ref=f7e11]:
              - generic [ref=f7e12]:
                - textbox "Search" [ref=f7e15]
                - button "" [ref=f7e16] [cursor=pointer]
              - separator [ref=f7e18]
            - list [ref=f7e19]:
              - listitem [ref=f7e20]:
                - link "Admin" [ref=f7e21] [cursor=pointer]:
                  - /url: /web/index.php/admin/viewAdminModule
              - listitem [ref=f7e25]:
                - link "PIM" [ref=f7e26] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewPimModule
              - listitem [ref=f7e41]:
                - link "Leave" [ref=f7e42] [cursor=pointer]:
                  - /url: /web/index.php/leave/viewLeaveModule
              - listitem [ref=f7e46]:
                - link "Time" [ref=f7e47] [cursor=pointer]:
                  - /url: /web/index.php/time/viewTimeModule
              - listitem [ref=f7e54]:
                - link "Recruitment" [ref=f7e55] [cursor=pointer]:
                  - /url: /web/index.php/recruitment/viewRecruitmentModule
              - listitem [ref=f7e62]:
                - link "My Info" [ref=f7e63] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewMyDetails
              - listitem [ref=f7e70]:
                - link "Performance" [ref=f7e71] [cursor=pointer]:
                  - /url: /web/index.php/performance/viewPerformanceModule
              - listitem [ref=f7e80]:
                - link "Dashboard" [ref=f7e81] [cursor=pointer]:
                  - /url: /web/index.php/dashboard/index
              - listitem [ref=f7e85]:
                - link "Directory" [ref=f7e86] [cursor=pointer]:
                  - /url: /web/index.php/directory/viewDirectory
              - listitem [ref=f7e90]:
                - link "Maintenance" [ref=f7e91] [cursor=pointer]:
                  - /url: /web/index.php/maintenance/viewMaintenanceModule
              - listitem [ref=f7e96]:
                - link "Claim" [ref=f7e97] [cursor=pointer]:
                  - /url: /web/index.php/claim/viewClaimModule
              - listitem [ref=f7e105]:
                - link "Buzz" [ref=f7e106] [cursor=pointer]:
                  - /url: /web/index.php/buzz/viewBuzz
      - banner [ref=f7e110]:
        - generic [ref=f7e111]:
          - generic [ref=f7e112]:
            - text: 
            - heading "PIM" [level=6] [ref=f7e114]
          - link [ref=f7e116]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "Upgrade" [ref=f7e117] [cursor=pointer]
          - list [ref=f7e123]:
            - listitem [ref=f7e124]:
              - generic [ref=f7e125] [cursor=pointer]:
                - img "profile picture" [ref=f7e126]
                - paragraph [ref=f7e127]: manda user
                - generic [ref=f7e128]: 
        - navigation "Topbar Menu" [ref=f7e130]:
          - list [ref=f7e131]:
            - listitem [ref=f7e132] [cursor=pointer]:
              - generic [ref=f7e133]:
                - text: Configuration
                - generic [ref=f7e134]: 
            - listitem [ref=f7e135] [cursor=pointer]:
              - link "Employee List" [ref=f7e136]:
                - /url: "#"
            - listitem [ref=f7e137] [cursor=pointer]:
              - link "Add Employee" [ref=f7e138]:
                - /url: "#"
            - listitem [ref=f7e139] [cursor=pointer]:
              - link "Reports" [ref=f7e140]:
                - /url: "#"
            - button "" [ref=f7e142] [cursor=pointer]
    - generic [ref=f7e144]:
      - generic [ref=f7e146]:
        - generic [ref=f7e147]:
          - generic [ref=f7e148]:
            - heading "Employee Information" [level=5] [ref=f7e150]
            - button "" [ref=f7e153] [cursor=pointer]
          - separator [ref=f7e155]
          - generic [ref=f7e157]:
            - generic [ref=f7e159]:
              - generic [ref=f7e161]:
                - generic [ref=f7e162]: Employee Name
                - textbox "Type for hints..." [ref=f7e167]
              - generic [ref=f7e169]:
                - generic [ref=f7e170]: Employee Id
                - textbox [ref=f7e173]: "0455"
              - generic [ref=f7e175]:
                - generic [ref=f7e176]: Employment Status
                - generic [ref=f7e180] [cursor=pointer]:
                  - generic [ref=f7e181]: "-- Select --"
                  - generic [ref=f7e182]: 
              - generic [ref=f7e185]:
                - generic [ref=f7e186]: Include
                - generic [ref=f7e190] [cursor=pointer]:
                  - generic [ref=f7e191]: Current Employees Only
                  - generic [ref=f7e192]: 
              - generic [ref=f7e195]:
                - generic [ref=f7e196]: Supervisor Name
                - textbox "Type for hints..." [ref=f7e201]
              - generic [ref=f7e203]:
                - generic [ref=f7e204]: Job Title
                - generic [ref=f7e208] [cursor=pointer]:
                  - generic [ref=f7e209]: "-- Select --"
                  - generic [ref=f7e210]: 
              - generic [ref=f7e213]:
                - generic [ref=f7e214]: Sub Unit
                - generic [ref=f7e218] [cursor=pointer]:
                  - generic [ref=f7e219]: "-- Select --"
                  - generic [ref=f7e220]: 
            - separator [ref=f7e222]
            - generic [ref=f7e223]:
              - button "Reset" [ref=f7e224] [cursor=pointer]
              - button "Search" [active] [ref=f7e225] [cursor=pointer]
        - generic [ref=f7e226]:
          - button " Add" [ref=f7e228] [cursor=pointer]:
            - generic [ref=f7e229]: 
            - text: Add
          - generic [ref=f7e230]:
            - separator [ref=f7e231]
            - generic [ref=f7e232]: No Records Found
          - table [ref=f7e235]:
            - rowgroup [ref=f7e236]:
              - row [ref=f7e237]:
                - columnheader "" [ref=f7e238]:
                  - generic [ref=f7e240] [cursor=pointer]:
                    - checkbox "" [ref=f7e241]
                    - generic [ref=f7e242]: 
                - columnheader "Id " [ref=f7e244]:
                  - text: Id
                  - generic [ref=f7e245]:
                    - generic [ref=f7e246] [cursor=pointer]: 
                    - text:  
                - columnheader "First (& Middle) Name " [ref=f7e247]:
                  - text: First (& Middle) Name
                  - generic [ref=f7e248]:
                    - generic [ref=f7e249] [cursor=pointer]: 
                    - text:  
                - columnheader "Last Name " [ref=f7e250]:
                  - text: Last Name
                  - generic [ref=f7e251]:
                    - generic [ref=f7e252] [cursor=pointer]: 
                    - text:  
                - columnheader "Job Title " [ref=f7e253]:
                  - text: Job Title
                  - generic [ref=f7e254]:
                    - generic [ref=f7e255] [cursor=pointer]: 
                    - text:  
                - columnheader "Employment Status " [ref=f7e256]:
                  - text: Employment Status
                  - generic [ref=f7e257]:
                    - generic [ref=f7e258] [cursor=pointer]: 
                    - text:  
                - columnheader "Sub Unit " [ref=f7e259]:
                  - text: Sub Unit
                  - generic [ref=f7e260]:
                    - generic [ref=f7e261] [cursor=pointer]: 
                    - text:  
                - columnheader "Supervisor " [ref=f7e262]:
                  - text: Supervisor
                  - generic [ref=f7e263]:
                    - generic [ref=f7e264] [cursor=pointer]: 
                    - text:  
                - columnheader "Actions" [ref=f7e265]
            - rowgroup
      - generic [ref=f7e267]:
        - paragraph [ref=f7e268]: OrangeHRM OS 5.9
        - paragraph [ref=f7e269]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f7e270] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=f7e271]:
    - generic [ref=f7e272] [cursor=pointer]:
      - generic [ref=f7e273]:
        - generic [ref=f7e274]: 
        - generic [ref=f7e277]:
          - paragraph [ref=f7e278]: Info
          - paragraph [ref=f7e279]: No Records Found
      - button "×" [ref=f7e281]
    - generic [ref=f7e282] [cursor=pointer]:
      - generic [ref=f7e283]:
        - generic [ref=f7e284]: 
        - generic [ref=f7e287]:
          - paragraph [ref=f7e288]: Info
          - paragraph [ref=f7e289]: No Records Found
      - button "×" [ref=f7e291]
```

# Test source

```ts
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
  442 |     expect(actualFirstName).toBe(firstName);
  443 |     await expect(cells.nth(3)).toHaveText(lastName);
  444 |     await expect(this.noRecordsFound).not.toBeVisible();
  445 |   }
  446 | 
  447 |   async verifyNoEmployeeRecordsFound(employeeId: string): Promise<void> {
  448 |     await expect(this.loadingSpinner).toBeHidden();
  449 | 
> 450 |     await expect(this.noRecordsFound).toBeVisible();
      |                                       ^ Error: expect(locator).toBeVisible() failed
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
  543 |       timeout: 15_000,
  544 |     });
  545 | 
  546 |     const employeeIds = await this.employeeIdCells.allTextContents();
  547 | 
  548 |     return employeeIds
  549 |       .map((employeeId) => employeeId.trim())
  550 |       .filter((employeeId) => employeeId.length > 0);
```