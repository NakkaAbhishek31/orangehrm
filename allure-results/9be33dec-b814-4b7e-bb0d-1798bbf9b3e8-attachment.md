# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> TC_PIM_039 - Admin should open employee personal details from the Employee List @positive @navigation @regression
- Location: tests\PIM\pim-employee-list.spec.ts:382:5

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-table-body .oxd-table-card').filter({ hasText: 'ERX2DA71ZO' })
Expected: 0
Received: 1

Call log:
  - Expect "toHaveCount" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').filter({ hasText: 'ERX2DA71ZO' })
    6 × locator resolved to 1 element
      - unexpected value "1"
  - Test timeout of 60000ms exceeded.

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
                - paragraph [ref=f7e127]: Surya king
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
                - textbox [ref=f7e173]: ERX2DA71ZO
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
              - button "Search" [ref=f7e225] [cursor=pointer]
        - generic [ref=f7e226]:
          - button " Add" [ref=f7e228] [cursor=pointer]:
            - generic [ref=f7e229]: 
            - text: Add
          - generic [ref=f7e230]:
            - separator [ref=f7e231]
            - generic [ref=f7e232]: (1) Record Found
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
            - rowgroup [ref=f7e266]:
              - row [ref=f7e268] [cursor=pointer]:
                - cell "" [ref=f7e269]:
                  - generic [ref=f7e272]:
                    - checkbox "" [ref=f7e273]
                    - generic [ref=f7e274]: 
                - cell "ERX2DA71ZO" [ref=f7e276]
                - cell "Auto1785915371773 Test" [ref=f7e278]
                - cell "User" [ref=f7e280]
                - cell [ref=f7e282]
                - cell [ref=f7e283]
                - cell [ref=f7e284]
                - cell [ref=f7e285]
                - cell [ref=f7e286]:
                  - generic [ref=f7e287]:
                    - button "" [ref=f7e288]
                    - button "" [ref=f7e290]
      - generic [ref=f7e293]:
        - paragraph [ref=f7e294]: OrangeHRM OS 5.9
        - paragraph [ref=f7e295]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f7e296] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=f7e298] [cursor=pointer]:
    - generic [ref=f7e299]:
      - generic [ref=f7e300]: 
      - generic [ref=f7e303]:
        - paragraph [ref=f7e304]: Success
        - paragraph [ref=f7e305]: Successfully Deleted
    - button "×" [ref=f7e307]
```

# Test source

```ts
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
> 500 |     await expect(matchingRow).toHaveCount(0);
      |                               ^ Error: expect(locator).toHaveCount(expected) failed
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
  542 |         exact: true,
  543 |       });
  544 | 
  545 |     await expect(pageButton).toBeVisible();
  546 | 
  547 |     const employeesResponse = this.page.waitForResponse(
  548 |       (response) =>
  549 |         response.url().includes("/api/v2/pim/employees") &&
  550 |         response.request().method() === "GET" &&
  551 |         response.ok(),
  552 |       { timeout: 20_000 },
  553 |     );
  554 | 
  555 |     await pageButton.click();
  556 |     await employeesResponse;
  557 | 
  558 |     await expect
  559 |       .poll(async () => this.getVisibleEmployeeIds(), { timeout: 15_000 })
  560 |       .not.toEqual(currentPageIds);
  561 |   }
  562 | 
  563 |   async openEmployeeById(employeeId: string): Promise<void> {
  564 |     const employeeRow = this.employeeRows.filter({
  565 |       has: this.page
  566 |         .locator(".oxd-table-cell")
  567 |         .nth(1)
  568 |         .filter({ hasText: employeeId }),
  569 |     });
  570 | 
  571 |     await expect(employeeRow).toHaveCount(1);
  572 | 
  573 |     await employeeRow.locator(".oxd-table-cell").nth(1).click();
  574 | 
  575 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  576 |       timeout: 15_000,
  577 |     });
  578 |   }
  579 | 
  580 |   async cancelAddingEmployee(): Promise<void> {
  581 |     expect(this.cancelProfilepageButton).toBeVisible();
  582 |     expect(this.cancelProfilepageButton).toBeEnabled();
  583 |     this.cancelProfilepageButton.click();
  584 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  585 |   }
  586 | 
  587 |   async saveEmployeeWithoutRequiredDetails(
  588 |     details: AddEmployeeDetails,
  589 |   ): Promise<void> {
  590 |     await this.firstnameInput.fill(details.firstName);
  591 | 
  592 |     if (details.middleName !== undefined) {
  593 |       await this.middlenameInput.fill(details.middleName);
  594 |     }
  595 | 
  596 |     await this.lastnameInput.fill(details.lastName);
  597 | 
  598 |     if (details.employeeId !== undefined) {
  599 |       await this.employeeID.fill(details.employeeId);
  600 |     }
```