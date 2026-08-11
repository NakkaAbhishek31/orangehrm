# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> PIM Employee List >> TC_PIM_039 - Admin should open employee personal details from the Employee List @positive @navigation @regression
- Location: tests\PIM\pim-employee-list.spec.ts:292:7

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-table-body .oxd-table-card').filter({ has: locator('.oxd-table-cell').nth(1).filter({ hasText: '0563' }) })
Expected: 1
Received: 0
Timeout:  10000ms

Call log:
  - Expect "toHaveCount" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').filter({ has: locator('.oxd-table-cell').nth(1).filter({ hasText: '0563' }) })
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
              - paragraph [ref=f4e127]: mandaa Doe
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
              - textbox [ref=f4e173]: "0563"
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
  490 |       await expect(this.lastnameInput).toHaveValue(details.lastName);
  491 |     }
  492 |   }
  493 |   //deleting the Records
  494 |   async deleteEmployeeById(employeeId: string): Promise<void> {
  495 |     await expect(this.loadingSpinner).toBeHidden();
  496 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  497 |     await expect(matchingRow).toHaveCount(1);
  498 |     const deleteButton = matchingRow.locator("button").filter({
  499 |       has: this.page.locator("i.bi-trash"),
  500 |     });
  501 |     await deleteButton.click();
  502 | 
  503 |     const confirmationDilaog = this.page.getByRole("dialog");
  504 |     await expect(confirmationDilaog).toBeVisible();
  505 |     const deleteResponse = this.page.waitForResponse(
  506 |       (response) =>
  507 |         response.url().includes("/api/v2/pim/employees") &&
  508 |         response.request().method() === "DELETE" &&
  509 |         response.ok(),
  510 |       { timeout: 20_000 },
  511 |     );
  512 | 
  513 |     await confirmationDilaog.getByText("Yes, Delete", { exact: true }).click();
  514 | 
  515 |     await deleteResponse;
  516 | 
  517 |     await expect(this.successToast).toContainText("Successfully Deleted");
  518 | 
  519 |     await expect(matchingRow).toHaveCount(0);
  520 |   }
  521 | 
  522 |   async verifyInvalidProfilePicture(invalidFilePath: string): Promise<void> {
  523 |     //const originalImageSrc= await this.profilePicturePreview.getAttribute('src');
  524 | 
  525 |     await this.profilePictureInput.setInputFiles(invalidFilePath, {
  526 |       timeout: 20_000,
  527 |     });
  528 | 
  529 |     await expect(this.profilePictureValidation).toBeVisible();
  530 | 
  531 |     await expect(this.profilePictureValidation).toContainText(
  532 |       "File type not allowed",
  533 |     );
  534 |   }
  535 | 
  536 |   async getVisibleEmployeeIds(): Promise<string[]> {
  537 |     await expect(this.employeeRows.first()).toBeVisible({
  538 |       timeout: 15_000,
  539 |     });
  540 | 
  541 |     await expect(this.employeeIdCells.first()).toBeVisible({
  542 |       timeout: 15_000,
  543 |     });
  544 | 
  545 |     const employeeIds = await this.employeeIdCells.allTextContents();
  546 | 
  547 |     return employeeIds
  548 |       .map((employeeId) => employeeId.trim())
  549 |       .filter((employeeId) => employeeId.length > 0);
  550 |   }
  551 | 
  552 |   async goToPage(pageNumber: number): Promise<void> {
  553 |     const currentPageIds = await this.getVisibleEmployeeIds();
  554 | 
  555 |     const pageButton = this.page
  556 |       .getByRole("navigation", {
  557 |         name: "Pagination Navigation",
  558 |       })
  559 |       .getByRole("button", {
  560 |         name: String(pageNumber),
  561 |         exact: true,
  562 |       });
  563 | 
  564 |     await expect(pageButton).toBeVisible();
  565 | 
  566 |     const employeesResponse = this.page.waitForResponse(
  567 |       (response) =>
  568 |         response.url().includes("/api/v2/pim/employees") &&
  569 |         response.request().method() === "GET" &&
  570 |         response.ok(),
  571 |       { timeout: 20_000 },
  572 |     );
  573 | 
  574 |     await pageButton.click();
  575 |     await employeesResponse;
  576 | 
  577 |     await expect
  578 |       .poll(async () => this.getVisibleEmployeeIds(), { timeout: 15_000 })
  579 |       .not.toEqual(currentPageIds);
  580 |   }
  581 | 
  582 |   async openEmployeeById(employeeId: string): Promise<void> {
  583 |     const employeeRow = this.employeeRows.filter({
  584 |       has: this.page
  585 |         .locator(".oxd-table-cell")
  586 |         .nth(1)
  587 |         .filter({ hasText: employeeId }),
  588 |     });
  589 | 
> 590 |     await expect(employeeRow).toHaveCount(1);
      |                               ^ Error: expect(locator).toHaveCount(expected) failed
  591 | 
  592 |     await employeeRow.locator(".oxd-table-cell").nth(1).click();
  593 | 
  594 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  595 |       timeout: 15_000,
  596 |     });
  597 |   }
  598 | 
  599 |   async cancelAddingEmployee(): Promise<void> {
  600 |     expect(this.cancelProfilepageButton).toBeVisible();
  601 |     expect(this.cancelProfilepageButton).toBeEnabled();
  602 |     this.cancelProfilepageButton.click();
  603 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  604 |   }
  605 | 
  606 |   async saveEmployeeWithoutRequiredDetails(
  607 |     details: AddEmployeeDetails,
  608 |   ): Promise<void> {
  609 |     await this.firstnameInput.fill(details.firstName);
  610 | 
  611 |     if (details.middleName !== undefined) {
  612 |       await this.middlenameInput.fill(details.middleName);
  613 |     }
  614 | 
  615 |     await this.lastnameInput.fill(details.lastName);
  616 | 
  617 |     if (details.employeeId !== undefined) {
  618 |       await this.employeeID.fill(details.employeeId);
  619 |     }
  620 | 
  621 |     if (details.profilePicturePath !== undefined) {
  622 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  623 |     }
  624 | 
  625 |     await this.SaveEmployeeButton.click();
  626 |   }
  627 | 
  628 |   async fillAddEmployeeForm(details: AddEmployeeDetails): Promise<void> {
  629 |     if (details.firstName !== undefined) {
  630 |       await this.firstnameInput.fill(details.firstName);
  631 |     }
  632 | 
  633 |     if (details.middleName !== undefined) {
  634 |       await this.middlenameInput.fill(details.middleName);
  635 |     }
  636 | 
  637 |     if (details.lastName !== undefined) {
  638 |       await this.lastnameInput.fill(details.lastName);
  639 |     }
  640 | 
  641 |     if (details.employeeId !== undefined) {
  642 |       await this.employeeID.fill(details.employeeId);
  643 |       await this.employeeID.blur();
  644 |     }
  645 | 
  646 |     if (details.profilePicturePath !== undefined) {
  647 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  648 |     }
  649 |   }
  650 | 
  651 |   async resetEmployeeFilters(): Promise<void> {
  652 |     const employeeListResponse = this.page.waitForResponse(
  653 |       (response) =>
  654 |         response.url().includes("/api/v2/pim/employees") &&
  655 |         response.request().method() === "GET" &&
  656 |         response.ok(),
  657 |       { timeout: 15_000 },
  658 |     );
  659 | 
  660 |     await this.page.getByRole("button", { name: "Reset", exact: true }).click();
  661 | 
  662 |     await employeeListResponse;
  663 |     await expect(this.loadingSpinner).toBeHidden();
  664 |   }
  665 | 
  666 |   async selectEmployeeFromAutocomplete(
  667 |     partialName: string,
  668 |     expectedFullName: string,
  669 |   ): Promise<void> {
  670 |     await this.employeeNameFilterInput.fill(partialName);
  671 | 
  672 |   const matchingOption = this.page
  673 |   .locator(".oxd-autocomplete-option")
  674 |   .filter({ hasText: expectedFullName });
  675 | 
  676 |   await matchingOption.waitFor({ state: "visible" });
  677 | 
  678 |     await expect(matchingOption).toBeVisible({ timeout: 15000 });
  679 |     await matchingOption.click();
  680 |   }
  681 | 
  682 |   async addEmployeeWithLoginDetails(
  683 |     details: EmployeeWithLoginDetails,
  684 |   ): Promise<string> {
  685 |     await this.fillAddEmployeeForm({
  686 |       firstName: details.firstName,
  687 |       middleName: details.middleName,
  688 |       lastName: details.lastName,
  689 |       employeeId: details.employeeId,
  690 |       profilePicturePath: details.profilePicturePath,
```