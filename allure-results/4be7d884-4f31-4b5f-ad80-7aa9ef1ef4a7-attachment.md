# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_PIM_101 - Admin should verify that a deleted employee cannot be opened @negative @delete @regression
- Location: tests\Admin\admin-users.spec.ts:1528:7

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-table-body .oxd-table-card').filter({ hasText: '0599' })
Expected: 1
Received: 0
Timeout:  10000ms

Call log:
  - Expect "toHaveCount" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').filter({ hasText: '0599' })
    23 × locator resolved to 0 elements
       - unexpected value "0"

```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - generic:
    - complementary [ref=f4e4]:
      - navigation "Sidepanel" [ref=f4e5]:
        - generic [ref=f4e6]:
          - link [ref=f4e7] [cursor=pointer]:
            - /url: https://www.orangehrm.com/
            - img "client brand banner" [ref=f4e9]
          - text: 
        - generic [ref=f4e10]:
          - generic [ref=f4e11]:
            - generic [ref=f4e12]:
              - textbox "Search" [ref=f4e15]
              - button "" [ref=f4e16] [cursor=pointer]
            - separator [ref=f4e18]
          - list [ref=f4e19]:
            - listitem [ref=f4e20]:
              - link "Admin" [ref=f4e21] [cursor=pointer]:
                - /url: /web/index.php/admin/viewAdminModule
            - listitem [ref=f4e25]:
              - link "PIM" [ref=f4e26] [cursor=pointer]:
                - /url: /web/index.php/pim/viewPimModule
            - listitem [ref=f4e41]:
              - link "Leave" [ref=f4e42] [cursor=pointer]:
                - /url: /web/index.php/leave/viewLeaveModule
            - listitem [ref=f4e46]:
              - link "Time" [ref=f4e47] [cursor=pointer]:
                - /url: /web/index.php/time/viewTimeModule
            - listitem [ref=f4e54]:
              - link "Recruitment" [ref=f4e55] [cursor=pointer]:
                - /url: /web/index.php/recruitment/viewRecruitmentModule
            - listitem [ref=f4e62]:
              - link "My Info" [ref=f4e63] [cursor=pointer]:
                - /url: /web/index.php/pim/viewMyDetails
            - listitem [ref=f4e70]:
              - link "Performance" [ref=f4e71] [cursor=pointer]:
                - /url: /web/index.php/performance/viewPerformanceModule
            - listitem [ref=f4e80]:
              - link "Dashboard" [ref=f4e81] [cursor=pointer]:
                - /url: /web/index.php/dashboard/index
            - listitem [ref=f4e85]:
              - link "Directory" [ref=f4e86] [cursor=pointer]:
                - /url: /web/index.php/directory/viewDirectory
            - listitem [ref=f4e90]:
              - link "Maintenance" [ref=f4e91] [cursor=pointer]:
                - /url: /web/index.php/maintenance/viewMaintenanceModule
            - listitem [ref=f4e96]:
              - link "Claim" [ref=f4e97] [cursor=pointer]:
                - /url: /web/index.php/claim/viewClaimModule
            - listitem [ref=f4e105]:
              - link "Buzz" [ref=f4e106] [cursor=pointer]:
                - /url: /web/index.php/buzz/viewBuzz
    - banner [ref=f4e110]:
      - generic [ref=f4e111]:
        - generic [ref=f4e112]:
          - text: 
          - heading "PIM" [level=6] [ref=f4e114]
        - link [ref=f4e116]:
          - /url: https://orangehrm.com/open-source/upgrade-to-advanced
          - button "Upgrade" [ref=f4e117] [cursor=pointer]
        - list [ref=f4e123]:
          - listitem [ref=f4e124]:
            - generic [ref=f4e125] [cursor=pointer]:
              - img "profile picture" [ref=f4e126]
              - paragraph [ref=f4e127]: Nguyễn Đức
              - generic [ref=f4e128]: 
      - navigation "Topbar Menu" [ref=f4e130]:
        - list [ref=f4e131]:
          - listitem [ref=f4e132] [cursor=pointer]:
            - generic [ref=f4e133]:
              - text: Configuration
              - generic [ref=f4e134]: 
          - listitem [ref=f4e135] [cursor=pointer]:
            - link "Employee List" [ref=f4e136]:
              - /url: "#"
          - listitem [ref=f4e137] [cursor=pointer]:
            - link "Add Employee" [ref=f4e138]:
              - /url: "#"
          - listitem [ref=f4e139] [cursor=pointer]:
            - link "Reports" [ref=f4e140]:
              - /url: "#"
          - button "" [ref=f4e142] [cursor=pointer]
  - generic [ref=f4e144]:
    - generic [ref=f4e146]:
      - generic [ref=f4e147]:
        - generic [ref=f4e148]:
          - heading "Employee Information" [level=5] [ref=f4e150]
          - button "" [ref=f4e153] [cursor=pointer]
        - separator [ref=f4e155]
        - generic [ref=f4e157]:
          - generic [ref=f4e159]:
            - generic [ref=f4e161]:
              - generic [ref=f4e162]: Employee Name
              - textbox "Type for hints..." [ref=f4e167]
            - generic [ref=f4e169]:
              - generic [ref=f4e170]: Employee Id
              - textbox [ref=f4e173]: "0599"
            - generic [ref=f4e175]:
              - generic [ref=f4e176]: Employment Status
              - generic [ref=f4e180] [cursor=pointer]:
                - generic [ref=f4e181]: "-- Select --"
                - generic [ref=f4e182]: 
            - generic [ref=f4e185]:
              - generic [ref=f4e186]: Include
              - generic [ref=f4e190] [cursor=pointer]:
                - generic [ref=f4e191]: Current Employees Only
                - generic [ref=f4e192]: 
            - generic [ref=f4e195]:
              - generic [ref=f4e196]: Supervisor Name
              - textbox "Type for hints..." [ref=f4e201]
            - generic [ref=f4e203]:
              - generic [ref=f4e204]: Job Title
              - generic [ref=f4e208] [cursor=pointer]:
                - generic [ref=f4e209]: "-- Select --"
                - generic [ref=f4e210]: 
            - generic [ref=f4e213]:
              - generic [ref=f4e214]: Sub Unit
              - generic [ref=f4e218] [cursor=pointer]:
                - generic [ref=f4e219]: "-- Select --"
                - generic [ref=f4e220]: 
          - separator [ref=f4e222]
          - generic [ref=f4e223]:
            - button "Reset" [ref=f4e224] [cursor=pointer]
            - button "Search" [active] [ref=f4e225] [cursor=pointer]
      - generic [ref=f4e226]:
        - button " Add" [ref=f4e228] [cursor=pointer]:
          - generic [ref=f4e229]: 
          - text: Add
        - generic [ref=f4e230]:
          - separator [ref=f4e231]
          - generic [ref=f4e232]: No Records Found
        - table [ref=f4e235]:
          - rowgroup [ref=f4e236]:
            - row [ref=f4e237]:
              - columnheader "" [ref=f4e238]:
                - generic [ref=f4e240] [cursor=pointer]:
                  - checkbox "" [ref=f4e241]
                  - generic [ref=f4e242]: 
              - columnheader "Id " [ref=f4e244]:
                - text: Id
                - generic [ref=f4e245]:
                  - generic [ref=f4e246] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f4e247]:
                - text: First (& Middle) Name
                - generic [ref=f4e248]:
                  - generic [ref=f4e249] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f4e250]:
                - text: Last Name
                - generic [ref=f4e251]:
                  - generic [ref=f4e252] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f4e253]:
                - text: Job Title
                - generic [ref=f4e254]:
                  - generic [ref=f4e255] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f4e256]:
                - text: Employment Status
                - generic [ref=f4e257]:
                  - generic [ref=f4e258] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f4e259]:
                - text: Sub Unit
                - generic [ref=f4e260]:
                  - generic [ref=f4e261] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f4e262]:
                - text: Supervisor
                - generic [ref=f4e263]:
                  - generic [ref=f4e264] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f4e265]
          - rowgroup
    - generic [ref=f4e267]:
      - paragraph [ref=f4e268]: OrangeHRM OS 5.9
      - paragraph [ref=f4e269]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e270] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  388 |     await this.SaveEmployeeButton.click();
  389 | 
  390 |     return await this.employeeID.inputValue();
  391 |   }
  392 | 
  393 |   async gotoEmployeeList(): Promise<void> {
  394 |     await this.employeeListLink.click();
  395 |   }
  396 | 
  397 |   async filterEmployeeList(filters: EmployeeFilters): Promise<void> {
  398 |     if (filters.employeeId !== undefined) {
  399 |       await this.employeeIdFilterInput.fill(filters.employeeId);
  400 |     }
  401 | 
  402 |     if (filters.employeeName !== undefined) {
  403 |       await this.employeeNameFilterInput.fill(filters.employeeName);
  404 | 
  405 |       const matchingOption = this.autocompleteOptions
  406 |         .filter({ hasText: filters.employeeName })
  407 |         .first();
  408 | 
  409 |       await expect(matchingOption).toBeVisible();
  410 |       await matchingOption.click();
  411 |     }
  412 |   }
  413 | 
  414 |   async clickOnFilterSearch(): Promise<void> {
  415 |     await this.filterSearchButton.click();
  416 |   }
  417 | 
  418 |   async verifyEmployeeSearchResult(
  419 |     employeeId: string,
  420 |     firstName: string,
  421 |     lastName: string,
  422 |   ): Promise<void> {
  423 |     await expect(this.loadingSpinner).toBeHidden();
  424 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  425 |     const cells = matchingRow.locator(".oxd-table-cell");
  426 |     const fullName = await cells.nth(2).innerText();
  427 |     const actualFirstName = fullName.trim().split(/\s+/)[0];
  428 |     await expect(cells.nth(1)).toHaveText(employeeId);
  429 |     expect(actualFirstName).toBe(firstName);
  430 |     await expect(cells.nth(3)).toHaveText(lastName);
  431 |     await expect(this.noRecordsFound).not.toBeVisible();
  432 |   }
  433 | 
  434 |   async verifyNoEmployeeRecordsFound(employeeId: string) {
  435 |     await expect(this.loadingSpinner).toBeHidden({
  436 |       timeout: 15_000,
  437 |     });
  438 | 
  439 |     await expect(this.employeeRows).toHaveCount(0, {
  440 |       timeout: 15_000,
  441 |     });
  442 | 
  443 |     await expect(this.employeeIdFilterInput).toHaveValue(employeeId);
  444 |   }
  445 | 
  446 |   async updatePersonalDetails(details: PersonalDetails): Promise<void> {
  447 |     await expect(this.personalDetailsHeading).toBeVisible();
  448 |     await expect(this.loadingSpinner).toBeHidden();
  449 |     await expect(this.personalDetailsSaveButton).toBeEnabled();
  450 | 
  451 |     if (details.middleName !== undefined) {
  452 |       await this.middlenameInput.fill(details.middleName);
  453 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  454 |     }
  455 | 
  456 |     if (details.lastName !== undefined) {
  457 |       await this.lastnameInput.fill(details.lastName);
  458 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  459 |     }
  460 | 
  461 |     const updateResponse = this.page.waitForResponse(
  462 |       (response) =>
  463 |         response.url().includes("/personal-details") &&
  464 |         response.request().method() === "PUT" &&
  465 |         response.ok(),
  466 |       { timeout: 20_000 },
  467 |     );
  468 | 
  469 |     await this.personalDetailsSaveButton.click();
  470 |     await updateResponse;
  471 | 
  472 |     await expect(this.successToast).toContainText("Successfully Updated");
  473 | 
  474 |     await expect(this.loadingSpinner).toBeHidden();
  475 | 
  476 |     if (details.middleName !== undefined) {
  477 |       await expect(this.middlenameInput).toHaveValue(details.middleName);
  478 |     }
  479 | 
  480 |     if (details.lastName !== undefined) {
  481 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  482 |     }
  483 |   }
  484 |   //deleting the Records
  485 |   async deleteEmployeeById(employeeId: string): Promise<void> {
  486 |     await expect(this.loadingSpinner).toBeHidden();
  487 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
> 488 |     await expect(matchingRow).toHaveCount(1);
      |                               ^ Error: expect(locator).toHaveCount(expected) failed
  489 |     const deleteButton = matchingRow.locator("button").filter({
  490 |       has: this.page.locator("i.bi-trash"),
  491 |     });
  492 |     await deleteButton.click();
  493 | 
  494 |     const confirmationDilaog = this.page.getByRole("dialog");
  495 |     await expect(confirmationDilaog).toBeVisible();
  496 |     const deleteResponse = this.page.waitForResponse(
  497 |       (response) =>
  498 |         response.url().includes("/api/v2/pim/employees") &&
  499 |         response.request().method() === "DELETE" &&
  500 |         response.ok(),
  501 |       { timeout: 20_000 },
  502 |     );
  503 | 
  504 |     await confirmationDilaog.getByText("Yes, Delete", { exact: true }).click();
  505 | 
  506 |     await deleteResponse;
  507 | 
  508 |     await expect(this.successToast).toContainText("Successfully Deleted");
  509 | 
  510 |     await expect(matchingRow).toHaveCount(0);
  511 |   }
  512 | 
  513 |   async verifyInvalidProfilePicture(invalidFilePath: string): Promise<void> {
  514 |     //const originalImageSrc= await this.profilePicturePreview.getAttribute('src');
  515 | 
  516 |     await this.profilePictureInput.setInputFiles(invalidFilePath, {
  517 |       timeout: 20_000,
  518 |     });
  519 | 
  520 |     await expect(this.profilePictureValidation).toBeVisible();
  521 | 
  522 |     await expect(this.profilePictureValidation).toContainText(
  523 |       "File type not allowed",
  524 |     );
  525 |   }
  526 | 
  527 |   async getVisibleEmployeeIds(): Promise<string[]> {
  528 |     await expect(this.employeeRows.first()).toBeVisible({
  529 |       timeout: 15_000,
  530 |     });
  531 | 
  532 |     await expect(this.employeeIdCells.first()).toBeVisible({
  533 |       timeout: 15_000,
  534 |     });
  535 | 
  536 |     const employeeIds = await this.employeeIdCells.allTextContents();
  537 | 
  538 |     return employeeIds
  539 |       .map((employeeId) => employeeId.trim())
  540 |       .filter((employeeId) => employeeId.length > 0);
  541 |   }
  542 | 
  543 |   async goToPage(pageNumber: number): Promise<void> {
  544 |     const currentPageIds = await this.getVisibleEmployeeIds();
  545 | 
  546 |     const pageButton = this.page
  547 |       .getByRole("navigation", {
  548 |         name: "Pagination Navigation",
  549 |       })
  550 |       .getByRole("button", {
  551 |         name: String(pageNumber),
  552 |         exact: true,
  553 |       });
  554 | 
  555 |     await expect(pageButton).toBeVisible();
  556 | 
  557 |     const employeesResponse = this.page.waitForResponse(
  558 |       (response) =>
  559 |         response.url().includes("/api/v2/pim/employees") &&
  560 |         response.request().method() === "GET" &&
  561 |         response.ok(),
  562 |       { timeout: 20_000 },
  563 |     );
  564 | 
  565 |     await pageButton.click();
  566 |     await employeesResponse;
  567 | 
  568 |     await expect
  569 |       .poll(async () => this.getVisibleEmployeeIds(), { timeout: 15_000 })
  570 |       .not.toEqual(currentPageIds);
  571 |   }
  572 | 
  573 |   async openEmployeeById(employeeId: string): Promise<void> {
  574 |     const employeeRow = this.employeeRows.filter({
  575 |       has: this.page
  576 |         .locator(".oxd-table-cell")
  577 |         .nth(1)
  578 |         .filter({ hasText: employeeId }),
  579 |     });
  580 | 
  581 |     await expect(employeeRow).toHaveCount(1);
  582 | 
  583 |     await employeeRow.locator(".oxd-table-cell").nth(1).click();
  584 | 
  585 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  586 |       timeout: 15_000,
  587 |     });
  588 |   }
```