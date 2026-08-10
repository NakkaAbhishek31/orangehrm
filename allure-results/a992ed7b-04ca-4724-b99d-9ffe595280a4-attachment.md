# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_006 - Admin should update employee personal details @positive @regression
- Location: tests\PIM\pim-employee.spec.ts:43:5

# Error details

```
TimeoutError: page.waitForResponse: Timeout 20000ms exceeded while waiting for event "response"
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
              - paragraph [ref=f4e127]: mandaa t
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
    - generic [ref=f4e148]:
      - generic [ref=f4e149]:
        - generic [ref=f4e150]:
          - heading "Auto1785915180522 User" [level=6] [ref=f4e152]
          - img "profile picture" [ref=f4e155] [cursor=pointer]
        - tablist [ref=f4e156]:
          - tab [ref=f4e157]:
            - link "Personal Details" [ref=f4e158] [cursor=pointer]:
              - /url: /web/index.php/pim/viewPersonalDetails/empNumber/617
          - tab [ref=f4e159]:
            - link "Contact Details" [ref=f4e160] [cursor=pointer]:
              - /url: /web/index.php/pim/contactDetails/empNumber/617
          - tab [ref=f4e161]:
            - link "Emergency Contacts" [ref=f4e162] [cursor=pointer]:
              - /url: /web/index.php/pim/viewEmergencyContacts/empNumber/617
          - tab [ref=f4e163]:
            - link "Dependents" [ref=f4e164] [cursor=pointer]:
              - /url: /web/index.php/pim/viewDependents/empNumber/617
          - tab [ref=f4e165]:
            - link "Immigration" [ref=f4e166] [cursor=pointer]:
              - /url: /web/index.php/pim/viewImmigration/empNumber/617
          - tab [ref=f4e167]:
            - link "Job" [ref=f4e168] [cursor=pointer]:
              - /url: /web/index.php/pim/viewJobDetails/empNumber/617
          - tab [ref=f4e169]:
            - link "Salary" [ref=f4e170] [cursor=pointer]:
              - /url: /web/index.php/pim/viewSalaryList/empNumber/617
          - tab [ref=f4e171]:
            - link "Report-to" [ref=f4e172] [cursor=pointer]:
              - /url: /web/index.php/pim/viewReportToDetails/empNumber/617
          - tab [ref=f4e173]:
            - link "Qualifications" [ref=f4e174] [cursor=pointer]:
              - /url: /web/index.php/pim/viewQualifications/empNumber/617
          - tab [ref=f4e175]:
            - link "Memberships" [ref=f4e176] [cursor=pointer]:
              - /url: /web/index.php/pim/viewMemberships/empNumber/617
      - generic [ref=f4e177]:
        - generic [ref=f4e178]:
          - heading "Personal Details" [level=6] [ref=f4e179]
          - separator [ref=f4e180]
          - generic [ref=f4e181]:
            - generic [ref=f4e188]:
              - generic [ref=f4e189]: Employee Full Name*
              - generic [ref=f4e191]:
                - textbox "First Name" [ref=f4e194]: Auto1785915180522
                - textbox "Middle Name" [ref=f4e197]: updatedTest
                - textbox "Last Name" [ref=f4e200]: updatedUser
            - separator [ref=f4e201]
            - generic [ref=f4e202]:
              - generic [ref=f4e203]:
                - generic [ref=f4e205]:
                  - generic [ref=f4e206]: Employee Id
                  - textbox [ref=f4e209]: ERSYDKWVCL
                - generic [ref=f4e211]:
                  - generic [ref=f4e212]: Other Id
                  - textbox [ref=f4e215]
              - generic [ref=f4e216]:
                - generic [ref=f4e218]:
                  - generic [ref=f4e219]: Driver's License Number
                  - textbox [ref=f4e222]
                - generic [ref=f4e224]:
                  - generic [ref=f4e225]: License Expiry Date
                  - generic [ref=f4e229]:
                    - textbox "yyyy-dd-mm" [ref=f4e230]
                    - generic [ref=f4e231] [cursor=pointer]: 
            - separator [ref=f4e232]
            - generic [ref=f4e233]:
              - generic [ref=f4e234]:
                - generic [ref=f4e236]:
                  - generic [ref=f4e237]: Nationality
                  - generic [ref=f4e241] [cursor=pointer]:
                    - generic [ref=f4e242]: "-- Select --"
                    - generic [ref=f4e243]: 
                - generic [ref=f4e246]:
                  - generic [ref=f4e247]: Marital Status
                  - generic [ref=f4e251] [cursor=pointer]:
                    - generic [ref=f4e252]: "-- Select --"
                    - generic [ref=f4e253]: 
              - generic [ref=f4e255]:
                - generic [ref=f4e257]:
                  - generic [ref=f4e258]: Date of Birth
                  - generic [ref=f4e262]:
                    - textbox "yyyy-dd-mm" [ref=f4e263]
                    - generic [ref=f4e264] [cursor=pointer]: 
                - generic [ref=f4e266]:
                  - generic [ref=f4e267]: Gender
                  - generic [ref=f4e269]:
                    - generic [ref=f4e273] [cursor=pointer]:
                      - radio "Male" [ref=f4e274]
                      - text: Male
                    - generic [ref=f4e279] [cursor=pointer]:
                      - radio "Female" [ref=f4e280]
                      - text: Female
            - separator [ref=f4e282]
            - generic [ref=f4e283]:
              - paragraph [ref=f4e284]: "* Required"
              - button "Save" [active] [ref=f4e285] [cursor=pointer]
        - generic [ref=f4e286]:
          - separator [ref=f4e287]
          - generic [ref=f4e288]:
            - heading "Custom Fields" [level=6] [ref=f4e289]
            - separator [ref=f4e290]
            - generic [ref=f4e291]:
              - generic [ref=f4e293]:
                - generic [ref=f4e295]:
                  - generic [ref=f4e296]: Blood Type
                  - generic [ref=f4e300] [cursor=pointer]:
                    - generic [ref=f4e301]: "-- Select --"
                    - generic [ref=f4e302]: 
                - generic [ref=f4e305]:
                  - generic [ref=f4e306]: Test_Field
                  - textbox [ref=f4e309]
              - separator [ref=f4e310]
              - button "Save" [ref=f4e312] [cursor=pointer]
        - generic [ref=f4e313]:
          - separator [ref=f4e314]
          - generic [ref=f4e316]:
            - heading "Attachments" [level=6] [ref=f4e317]
            - button " Add" [ref=f4e318] [cursor=pointer]:
              - generic [ref=f4e319]: 
              - text: Add
          - generic [ref=f4e320]:
            - separator [ref=f4e321]
            - generic [ref=f4e322]: No Records Found
          - table [ref=f4e325]:
            - rowgroup [ref=f4e326]:
              - row [ref=f4e327]:
                - columnheader "" [ref=f4e328]:
                  - generic [ref=f4e330] [cursor=pointer]:
                    - checkbox "" [ref=f4e331]
                    - generic [ref=f4e332]: 
                - columnheader "File Name" [ref=f4e334]
                - columnheader "Description" [ref=f4e335]
                - columnheader "Size" [ref=f4e336]
                - columnheader "Type" [ref=f4e337]
                - columnheader "Date Added" [ref=f4e338]
                - columnheader "Added By" [ref=f4e339]
                - columnheader "Actions" [ref=f4e340]
            - rowgroup
    - generic [ref=f4e341]:
      - paragraph [ref=f4e342]: OrangeHRM OS 5.9
      - paragraph [ref=f4e343]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f4e344] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
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
> 451 |     const updateResponse = this.page.waitForResponse(
      |                                      ^ TimeoutError: page.waitForResponse: Timeout 20000ms exceeded while waiting for event "response"
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
```