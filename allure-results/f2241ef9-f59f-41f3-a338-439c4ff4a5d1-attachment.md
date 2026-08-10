# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_051 - Password mismatch validation should appear while adding a System User @negative @validation @regression
- Location: tests\Admin\admin-users.spec.ts:493:5

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
- generic [ref=f10e2]:
  - generic [ref=f10e3]:
    - generic:
      - complementary [ref=f10e4]:
        - navigation "Sidepanel" [ref=f10e5]:
          - generic [ref=f10e6]:
            - link [ref=f10e7] [cursor=pointer]:
              - /url: https://www.orangehrm.com/
              - img "client brand banner" [ref=f10e9]
            - text: 
          - generic [ref=f10e10]:
            - generic [ref=f10e11]:
              - generic [ref=f10e12]:
                - textbox "Search" [ref=f10e15]
                - button "" [ref=f10e16] [cursor=pointer]
              - separator [ref=f10e18]
            - list [ref=f10e19]:
              - listitem [ref=f10e20]:
                - link "Admin" [ref=f10e21] [cursor=pointer]:
                  - /url: /web/index.php/admin/viewAdminModule
              - listitem [ref=f10e25]:
                - link "PIM" [ref=f10e26] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewPimModule
              - listitem [ref=f10e41]:
                - link "Leave" [ref=f10e42] [cursor=pointer]:
                  - /url: /web/index.php/leave/viewLeaveModule
              - listitem [ref=f10e46]:
                - link "Time" [ref=f10e47] [cursor=pointer]:
                  - /url: /web/index.php/time/viewTimeModule
              - listitem [ref=f10e54]:
                - link "Recruitment" [ref=f10e55] [cursor=pointer]:
                  - /url: /web/index.php/recruitment/viewRecruitmentModule
              - listitem [ref=f10e62]:
                - link "My Info" [ref=f10e63] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewMyDetails
              - listitem [ref=f10e70]:
                - link "Performance" [ref=f10e71] [cursor=pointer]:
                  - /url: /web/index.php/performance/viewPerformanceModule
              - listitem [ref=f10e80]:
                - link "Dashboard" [ref=f10e81] [cursor=pointer]:
                  - /url: /web/index.php/dashboard/index
              - listitem [ref=f10e85]:
                - link "Directory" [ref=f10e86] [cursor=pointer]:
                  - /url: /web/index.php/directory/viewDirectory
              - listitem [ref=f10e90]:
                - link "Maintenance" [ref=f10e91] [cursor=pointer]:
                  - /url: /web/index.php/maintenance/viewMaintenanceModule
              - listitem [ref=f10e96]:
                - link "Claim" [ref=f10e97] [cursor=pointer]:
                  - /url: /web/index.php/claim/viewClaimModule
              - listitem [ref=f10e105]:
                - link "Buzz" [ref=f10e106] [cursor=pointer]:
                  - /url: /web/index.php/buzz/viewBuzz
      - banner [ref=f10e110]:
        - generic [ref=f10e111]:
          - generic [ref=f10e112]:
            - text: 
            - heading "PIM" [level=6] [ref=f10e114]
          - link [ref=f10e116]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "Upgrade" [ref=f10e117] [cursor=pointer]
          - list [ref=f10e123]:
            - listitem [ref=f10e124]:
              - generic [ref=f10e125] [cursor=pointer]:
                - img "profile picture" [ref=f10e126]
                - paragraph [ref=f10e127]: Surya king
                - generic [ref=f10e128]: 
        - navigation "Topbar Menu" [ref=f10e130]:
          - list [ref=f10e131]:
            - listitem [ref=f10e132] [cursor=pointer]:
              - generic [ref=f10e133]:
                - text: Configuration
                - generic [ref=f10e134]: 
            - listitem [ref=f10e135] [cursor=pointer]:
              - link "Employee List" [ref=f10e136]:
                - /url: "#"
            - listitem [ref=f10e137] [cursor=pointer]:
              - link "Add Employee" [ref=f10e138]:
                - /url: "#"
            - listitem [ref=f10e139] [cursor=pointer]:
              - link "Reports" [ref=f10e140]:
                - /url: "#"
            - button "" [ref=f10e142] [cursor=pointer]
    - generic [ref=f10e144]:
      - generic [ref=f10e146]:
        - generic [ref=f10e147]:
          - generic [ref=f10e148]:
            - heading "Employee Information" [level=5] [ref=f10e150]
            - button "" [ref=f10e153] [cursor=pointer]
          - separator [ref=f10e155]
          - generic [ref=f10e157]:
            - generic [ref=f10e159]:
              - generic [ref=f10e161]:
                - generic [ref=f10e162]: Employee Name
                - textbox "Type for hints..." [ref=f10e167]
              - generic [ref=f10e169]:
                - generic [ref=f10e170]: Employee Id
                - textbox [ref=f10e173]: EQ4VZLIFXH
              - generic [ref=f10e175]:
                - generic [ref=f10e176]: Employment Status
                - generic [ref=f10e180] [cursor=pointer]:
                  - generic [ref=f10e181]: "-- Select --"
                  - generic [ref=f10e182]: 
              - generic [ref=f10e185]:
                - generic [ref=f10e186]: Include
                - generic [ref=f10e190] [cursor=pointer]:
                  - generic [ref=f10e191]: Current Employees Only
                  - generic [ref=f10e192]: 
              - generic [ref=f10e195]:
                - generic [ref=f10e196]: Supervisor Name
                - textbox "Type for hints..." [ref=f10e201]
              - generic [ref=f10e203]:
                - generic [ref=f10e204]: Job Title
                - generic [ref=f10e208] [cursor=pointer]:
                  - generic [ref=f10e209]: "-- Select --"
                  - generic [ref=f10e210]: 
              - generic [ref=f10e213]:
                - generic [ref=f10e214]: Sub Unit
                - generic [ref=f10e218] [cursor=pointer]:
                  - generic [ref=f10e219]: "-- Select --"
                  - generic [ref=f10e220]: 
            - separator [ref=f10e222]
            - generic [ref=f10e223]:
              - button "Reset" [ref=f10e224] [cursor=pointer]
              - button "Search" [active] [ref=f10e225] [cursor=pointer]
        - generic [ref=f10e226]:
          - button " Add" [ref=f10e228] [cursor=pointer]:
            - generic [ref=f10e229]: 
            - text: Add
          - generic [ref=f10e230]:
            - separator [ref=f10e231]
            - generic [ref=f10e232]: No Records Found
          - table [ref=f10e235]:
            - rowgroup [ref=f10e236]:
              - row [ref=f10e237]:
                - columnheader "" [ref=f10e238]:
                  - generic [ref=f10e240] [cursor=pointer]:
                    - checkbox "" [ref=f10e241]
                    - generic [ref=f10e242]: 
                - columnheader "Id " [ref=f10e244]:
                  - text: Id
                  - generic [ref=f10e245]:
                    - generic [ref=f10e246] [cursor=pointer]: 
                    - text:  
                - columnheader "First (& Middle) Name " [ref=f10e247]:
                  - text: First (& Middle) Name
                  - generic [ref=f10e248]:
                    - generic [ref=f10e249] [cursor=pointer]: 
                    - text:  
                - columnheader "Last Name " [ref=f10e250]:
                  - text: Last Name
                  - generic [ref=f10e251]:
                    - generic [ref=f10e252] [cursor=pointer]: 
                    - text:  
                - columnheader "Job Title " [ref=f10e253]:
                  - text: Job Title
                  - generic [ref=f10e254]:
                    - generic [ref=f10e255] [cursor=pointer]: 
                    - text:  
                - columnheader "Employment Status " [ref=f10e256]:
                  - text: Employment Status
                  - generic [ref=f10e257]:
                    - generic [ref=f10e258] [cursor=pointer]: 
                    - text:  
                - columnheader "Sub Unit " [ref=f10e259]:
                  - text: Sub Unit
                  - generic [ref=f10e260]:
                    - generic [ref=f10e261] [cursor=pointer]: 
                    - text:  
                - columnheader "Supervisor " [ref=f10e262]:
                  - text: Supervisor
                  - generic [ref=f10e263]:
                    - generic [ref=f10e264] [cursor=pointer]: 
                    - text:  
                - columnheader "Actions" [ref=f10e265]
            - rowgroup
      - generic [ref=f10e267]:
        - paragraph [ref=f10e268]: OrangeHRM OS 5.9
        - paragraph [ref=f10e269]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f10e270] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=f10e271]:
    - generic [ref=f10e272] [cursor=pointer]:
      - generic [ref=f10e273]:
        - generic [ref=f10e274]: 
        - generic [ref=f10e277]:
          - paragraph [ref=f10e278]: Info
          - paragraph [ref=f10e279]: No Records Found
      - button "×" [ref=f10e281]
    - generic [ref=f10e282] [cursor=pointer]:
      - generic [ref=f10e283]:
        - generic [ref=f10e284]: 
        - generic [ref=f10e287]:
          - paragraph [ref=f10e288]: Info
          - paragraph [ref=f10e289]: No Records Found
      - button "×" [ref=f10e291]
```

# Test source

```ts
  330 | 
  331 |     await this.employeeID.fill(employeeId);
  332 |     await this.employeeID.blur();
  333 | 
  334 |     await expect(this.employeeID).toHaveValue(employeeId);
  335 | 
  336 |     // Upload an optional profile picture.
  337 |     if (details.profilePicturePath !== undefined) {
  338 |       const originalImageSource =
  339 |         await this.profilePicturePreview.getAttribute("src");
  340 | 
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
> 430 |     await expect(this.noRecordsFound).toBeVisible();
      |                                       ^ Error: expect(locator).toBeVisible() failed
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
  441 |     if (details.middleName !== undefined) {
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
```