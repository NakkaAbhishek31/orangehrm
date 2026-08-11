# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> PIM Employee List >> TC_PIM_039 - Admin should open employee personal details from the Employee List @positive @navigation @regression
- Location: tests\PIM\pim-employee-list.spec.ts:294:7

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-table-body .oxd-table-card').filter({ has: locator('.oxd-table-cell').nth(1).filter({ hasText: '0684' }) })
Expected: 1
Received: 0
Timeout:  10000ms

Call log:
  - Expect "toHaveCount" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').filter({ has: locator('.oxd-table-cell').nth(1).filter({ hasText: '0684' }) })
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
              - textbox [ref=f4e173]: "0684"
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
  481 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  482 |     }
  483 |   }
  484 |   //deleting the Records
  485 |   async deleteEmployeeById(employeeId: string): Promise<void> {
  486 |     await expect(this.loadingSpinner).toBeHidden();
  487 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  488 |     await expect(matchingRow).toHaveCount(1);
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
> 581 |     await expect(employeeRow).toHaveCount(1);
      |                               ^ Error: expect(locator).toHaveCount(expected) failed
  582 | 
  583 |     await employeeRow.locator(".oxd-table-cell").nth(1).click();
  584 | 
  585 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  586 |       timeout: 15_000,
  587 |     });
  588 |   }
  589 | 
  590 |   async cancelAddingEmployee(): Promise<void> {
  591 |     expect(this.cancelProfilepageButton).toBeVisible();
  592 |     expect(this.cancelProfilepageButton).toBeEnabled();
  593 |     this.cancelProfilepageButton.click();
  594 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  595 |   }
  596 | 
  597 |   async saveEmployeeWithoutRequiredDetails(
  598 |     details: AddEmployeeDetails,
  599 |   ): Promise<void> {
  600 |     await this.firstnameInput.fill(details.firstName);
  601 | 
  602 |     if (details.middleName !== undefined) {
  603 |       await this.middlenameInput.fill(details.middleName);
  604 |     }
  605 | 
  606 |     await this.lastnameInput.fill(details.lastName);
  607 | 
  608 |     if (details.employeeId !== undefined) {
  609 |       await this.employeeID.fill(details.employeeId);
  610 |     }
  611 | 
  612 |     if (details.profilePicturePath !== undefined) {
  613 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  614 |     }
  615 | 
  616 |     await this.SaveEmployeeButton.click();
  617 |   }
  618 | 
  619 |   async fillAddEmployeeForm(details: AddEmployeeDetails): Promise<void> {
  620 |     if (details.firstName !== undefined) {
  621 |       await this.firstnameInput.fill(details.firstName);
  622 |     }
  623 | 
  624 |     if (details.middleName !== undefined) {
  625 |       await this.middlenameInput.fill(details.middleName);
  626 |     }
  627 | 
  628 |     if (details.lastName !== undefined) {
  629 |       await this.lastnameInput.fill(details.lastName);
  630 |     }
  631 | 
  632 |     if (details.employeeId !== undefined) {
  633 |       await this.employeeID.fill(details.employeeId);
  634 |       await this.employeeID.blur();
  635 |     }
  636 | 
  637 |     if (details.profilePicturePath !== undefined) {
  638 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  639 |     }
  640 |   }
  641 | 
  642 |   async resetEmployeeFilters(): Promise<void> {
  643 |     const employeeListResponse = this.page.waitForResponse(
  644 |       (response) =>
  645 |         response.url().includes("/api/v2/pim/employees") &&
  646 |         response.request().method() === "GET" &&
  647 |         response.ok(),
  648 |       { timeout: 15_000 },
  649 |     );
  650 | 
  651 |     await this.page.getByRole("button", { name: "Reset", exact: true }).click();
  652 | 
  653 |     await employeeListResponse;
  654 |     await expect(this.loadingSpinner).toBeHidden();
  655 |   }
  656 | 
  657 |   async selectEmployeeFromAutocomplete(
  658 |     partialName: string,
  659 |     expectedFullName: string,
  660 |   ): Promise<void> {
  661 |     await this.employeeNameFilterInput.fill(partialName);
  662 | 
  663 |     const matchingOption = this.page
  664 |       .locator(".oxd-autocomplete-option")
  665 |       .filter({ hasText: expectedFullName });
  666 | 
  667 |     await matchingOption.waitFor({ state: "visible" });
  668 | 
  669 |     await expect(matchingOption).toBeVisible({ timeout: 15000 });
  670 |     await matchingOption.click();
  671 |   }
  672 | 
  673 |   async addEmployeeWithLoginDetails(
  674 |     details: EmployeeWithLoginDetails,
  675 |   ): Promise<string> {
  676 |     await this.fillAddEmployeeForm({
  677 |       firstName: details.firstName,
  678 |       middleName: details.middleName,
  679 |       lastName: details.lastName,
  680 |       employeeId: details.employeeId,
  681 |       profilePicturePath: details.profilePicturePath,
```