# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> PIM Employee >> TC_PIM_025 - Required employee-name validation @negative @validation @regression
- Location: tests\PIM\pim-employee.spec.ts:82:9

# Error details

```
Test timeout of 60000ms exceeded.
```

```
TimeoutError: locator.click: Timeout 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Save' })

```

# Page snapshot

```yaml
- generic [ref=f3e2]:
  - generic [ref=f3e3]:
    - generic:
      - complementary [ref=f3e4]:
        - navigation "Sidepanel" [ref=f3e5]:
          - generic [ref=f3e6]:
            - link [ref=f3e7] [cursor=pointer]:
              - /url: https://www.orangehrm.com/
              - img "client brand banner" [ref=f3e9]
            - text: 
          - generic [ref=f3e10]:
            - generic [ref=f3e11]:
              - generic [ref=f3e12]:
                - textbox "Search" [ref=f3e15]
                - button "" [ref=f3e16] [cursor=pointer]
              - separator [ref=f3e18]
            - list [ref=f3e19]:
              - listitem [ref=f3e20]:
                - link "Admin" [ref=f3e21] [cursor=pointer]:
                  - /url: /web/index.php/admin/viewAdminModule
              - listitem [ref=f3e25]:
                - link "PIM" [ref=f3e26] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewPimModule
              - listitem [ref=f3e41]:
                - link "Leave" [ref=f3e42] [cursor=pointer]:
                  - /url: /web/index.php/leave/viewLeaveModule
              - listitem [ref=f3e46]:
                - link "Time" [ref=f3e47] [cursor=pointer]:
                  - /url: /web/index.php/time/viewTimeModule
              - listitem [ref=f3e54]:
                - link "Recruitment" [ref=f3e55] [cursor=pointer]:
                  - /url: /web/index.php/recruitment/viewRecruitmentModule
              - listitem [ref=f3e62]:
                - link "My Info" [ref=f3e63] [cursor=pointer]:
                  - /url: /web/index.php/pim/viewMyDetails
              - listitem [ref=f3e70]:
                - link "Performance" [ref=f3e71] [cursor=pointer]:
                  - /url: /web/index.php/performance/viewPerformanceModule
              - listitem [ref=f3e80]:
                - link "Dashboard" [ref=f3e81] [cursor=pointer]:
                  - /url: /web/index.php/dashboard/index
              - listitem [ref=f3e85]:
                - link "Directory" [ref=f3e86] [cursor=pointer]:
                  - /url: /web/index.php/directory/viewDirectory
              - listitem [ref=f3e90]:
                - link "Maintenance" [ref=f3e91] [cursor=pointer]:
                  - /url: /web/index.php/maintenance/viewMaintenanceModule
              - listitem [ref=f3e96]:
                - link "Claim" [ref=f3e97] [cursor=pointer]:
                  - /url: /web/index.php/claim/viewClaimModule
              - listitem [ref=f3e105]:
                - link "Buzz" [ref=f3e106] [cursor=pointer]:
                  - /url: /web/index.php/buzz/viewBuzz
      - banner [ref=f3e110]:
        - generic [ref=f3e111]:
          - generic [ref=f3e112]:
            - text: 
            - heading "PIM" [level=6] [ref=f3e114]
          - link [ref=f3e116]:
            - /url: https://orangehrm.com/open-source/upgrade-to-advanced
            - button "Upgrade" [ref=f3e117] [cursor=pointer]
          - list [ref=f3e123]:
            - listitem [ref=f3e124]:
              - generic [ref=f3e125] [cursor=pointer]:
                - img "profile picture" [ref=f3e126]
                - paragraph [ref=f3e127]: mandaa Doe
                - generic [ref=f3e128]: 
        - navigation "Topbar Menu" [ref=f3e130]:
          - list [ref=f3e131]:
            - listitem [ref=f3e132] [cursor=pointer]:
              - generic [ref=f3e133]:
                - text: Configuration
                - generic [ref=f3e134]: 
            - listitem [ref=f3e135] [cursor=pointer]:
              - link "Employee List" [ref=f3e136]:
                - /url: "#"
            - listitem [ref=f3e137] [cursor=pointer]:
              - link "Add Employee" [ref=f3e138]:
                - /url: "#"
            - listitem [ref=f3e139] [cursor=pointer]:
              - link "Reports" [ref=f3e140]:
                - /url: "#"
            - button "" [ref=f3e142] [cursor=pointer]
    - generic [ref=f3e144]:
      - generic [ref=f3e147]:
        - heading "Add Employee" [level=6] [ref=f3e148]
        - separator [ref=f3e149]
        - generic [ref=f3e150]:
          - generic [ref=f3e151]:
            - generic [ref=f3e152]:
              - generic [ref=f3e154]:
                - button "Choose File"
                - generic [ref=f3e155]:
                  - img "profile picture" [ref=f3e157]
                  - button "" [ref=f3e158] [cursor=pointer]
              - paragraph [ref=f3e160]: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
            - generic [ref=f3e161]:
              - generic [ref=f3e162]:
                - generic [ref=f3e165]:
                  - generic [ref=f3e166]: Employee Full Name*
                  - generic [ref=f3e168]:
                    - textbox "First Name" [ref=f3e171]: Auto1786432426963744
                    - textbox "Middle Name" [ref=f3e174]: Test
                    - generic [ref=f3e175]:
                      - textbox "Last Name" [active] [ref=f3e177]
                      - generic [ref=f3e178]: Required
                - generic [ref=f3e181]:
                  - generic [ref=f3e182]: Employee Id
                  - textbox [ref=f3e185]: "0554"
              - separator [ref=f3e186]
              - generic [ref=f3e187]:
                - paragraph [ref=f3e188]: Create Login Details
                - checkbox [ref=f3e191]
          - separator [ref=f3e193]
          - generic [ref=f3e194]:
            - paragraph [ref=f3e195]: "* Required"
            - button "Cancel" [ref=f3e196] [cursor=pointer]
            - button "Save" [ref=f3e197] [cursor=pointer]
      - generic [ref=f3e198]:
        - paragraph [ref=f3e199]: OrangeHRM OS 5.9
        - paragraph [ref=f3e200]:
          - text: © 2005 - 2026
          - link "OrangeHRM, Inc" [ref=f3e201] [cursor=pointer]:
            - /url: http://www.orangehrm.com
          - text: . All rights reserved.
  - generic [ref=f3e203] [cursor=pointer]:
    - generic [ref=f3e204]:
      - generic [ref=f3e205]: 
      - generic [ref=f3e208]:
        - paragraph [ref=f3e209]: Error
        - paragraph [ref=f3e210]: Unexpected Error!
    - button "×" [ref=f3e212]
```

# Test source

```ts
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
  590 |     await expect(employeeRow).toHaveCount(1);
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
> 625 |     await this.SaveEmployeeButton.click();
      |                                   ^ TimeoutError: locator.click: Timeout 30000ms exceeded.
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
  691 |     });
  692 | 
  693 |     const employeeId = await this.employeeID.inputValue();
  694 | 
  695 |     if (!(await this.createLoginDetailsCheckbox.isChecked())) {
  696 |       await this.createLoginDetailsSwitch.click();
  697 |     }
  698 | 
  699 |     await expect(this.createLoginDetailsCheckbox).toBeChecked();
  700 | 
  701 |     await expect(this.employeeUsernameInput).toBeVisible();
  702 |     await expect(this.employeePasswordInput).toBeVisible();
  703 |     await expect(this.confirmPasswordInput).toBeVisible();
  704 | 
  705 |     await this.employeeUsernameInput.fill(details.username);
  706 |     await this.employeePasswordInput.fill(details.password);
  707 |     await this.confirmPasswordInput.fill(details.password);
  708 | 
  709 |     if (details.status === "Disabled") {
  710 |       await this.disabledStatusRadio.check({
  711 |         force: true,
  712 |       });
  713 | 
  714 |       await expect(this.disabledStatusRadio).toBeChecked();
  715 |     } else {
  716 |       await this.enabledStatusRadio.check({
  717 |         force: true,
  718 |       });
  719 | 
  720 |       await expect(this.enabledStatusRadio).toBeChecked();
  721 |     }
  722 |     await expect(this.employeeUsernameInput).toHaveValue(details.username);
  723 | 
  724 |     await expect(this.employeePasswordInput).toHaveValue(details.password);
  725 | 
```