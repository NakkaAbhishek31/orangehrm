# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_035 - Disabled employee account should not be able to login @negative @security @account @regression
- Location: tests\PIM\pim-employee.spec.ts:580:5

# Error details

```
TimeoutError: page.waitForResponse: Timeout 20000ms exceeded while waiting for event "response"
```

# Page snapshot

```yaml
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
              - paragraph [ref=f3e127]: manda user
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
                  - textbox "First Name" [ref=f3e171]: Auto1785572045264
                  - textbox "Middle Name" [ref=f3e174]: Test
                  - textbox "Last Name" [ref=f3e177]: User
              - generic [ref=f3e180]:
                - generic [ref=f3e181]: Employee Id
                - textbox [ref=f3e184]: "0412"
                - generic [ref=f3e185]: Employee Id already exists
            - separator [ref=f3e186]
            - generic [ref=f3e187]:
              - paragraph [ref=f3e188]: Create Login Details
              - checkbox [checked] [ref=f3e191]
            - generic [ref=f3e194]:
              - generic [ref=f3e196]:
                - generic [ref=f3e197]: Username*
                - textbox [ref=f3e200]: user1785572045265
              - generic [ref=f3e202]:
                - generic [ref=f3e203]: Status
                - generic [ref=f3e205]:
                  - generic [ref=f3e209] [cursor=pointer]:
                    - radio "Enabled" [ref=f3e210]
                    - text: Enabled
                  - generic [ref=f3e215] [cursor=pointer]:
                    - radio "Disabled" [checked] [ref=f3e216]
                    - text: Disabled
            - generic [ref=f3e219]:
              - generic [ref=f3e220]:
                - generic [ref=f3e221]: Better
                - generic [ref=f3e222]:
                  - generic [ref=f3e223]: Password*
                  - textbox [ref=f3e226]: Test@12345
                - paragraph [ref=f3e227]: For a strong password, please use a hard to guess combination of text with upper and lower case characters, symbols and numbers
              - generic [ref=f3e229]:
                - generic [ref=f3e230]: Confirm Password*
                - textbox [ref=f3e233]: Test@12345
        - separator [ref=f3e234]
        - generic [ref=f3e235]:
          - paragraph [ref=f3e236]: "* Required"
          - button "Cancel" [ref=f3e237] [cursor=pointer]
          - button "Save" [active] [ref=f3e238] [cursor=pointer]
    - generic [ref=f3e239]:
      - paragraph [ref=f3e240]: OrangeHRM OS 5.9
      - paragraph [ref=f3e241]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e242] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
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
  551 |   }
  552 | 
  553 |   async goToPage(pageNumber: number): Promise<void> {
  554 |     const currentPageIds = await this.getVisibleEmployeeIds();
  555 | 
  556 |     const pageButton = this.page
  557 |       .getByRole("navigation", {
  558 |         name: "Pagination Navigation",
  559 |       })
  560 |       .getByRole("button", {
  561 |         name: String(pageNumber),
  562 |         exact: true,
  563 |       });
  564 | 
  565 |     await expect(pageButton).toBeVisible();
  566 | 
  567 |     const employeesResponse = this.page.waitForResponse(
  568 |       (response) =>
  569 |         response.url().includes("/api/v2/pim/employees") &&
  570 |         response.request().method() === "GET" &&
  571 |         response.ok(),
  572 |       { timeout: 20_000 },
  573 |     );
  574 | 
  575 |     await pageButton.click();
  576 |     await employeesResponse;
  577 | 
  578 |     await expect
  579 |       .poll(async () => this.getVisibleEmployeeIds(), { timeout: 15_000 })
  580 |       .not.toEqual(currentPageIds);
  581 |   }
  582 | 
  583 |   async openEmployeeById(employeeId: string): Promise<void> {
  584 |     const employeeRow = this.employeeRows.filter({
  585 |       has: this.page
  586 |         .locator(".oxd-table-cell")
  587 |         .nth(1)
  588 |         .filter({ hasText: employeeId }),
  589 |     });
  590 | 
  591 |     await expect(employeeRow).toHaveCount(1);
  592 | 
  593 |     await employeeRow.locator(".oxd-table-cell").nth(1).click();
  594 | 
  595 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  596 |       timeout: 15_000,
  597 |     });
  598 |   }
  599 | 
  600 |   async cancelAddingEmployee(): Promise<void> {
  601 |     expect(this.cancelProfilepageButton).toBeVisible();
  602 |     expect(this.cancelProfilepageButton).toBeEnabled();
  603 |     this.cancelProfilepageButton.click();
  604 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  605 |   }
  606 | 
  607 |   async saveEmployeeWithoutRequiredDetails(
  608 |     details: AddEmployeeDetails,
  609 |   ): Promise<void> {
  610 |     await this.firstnameInput.fill(details.firstName);
  611 | 
  612 |     if (details.middleName !== undefined) {
  613 |       await this.middlenameInput.fill(details.middleName);
  614 |     }
  615 | 
  616 |     await this.lastnameInput.fill(details.lastName);
  617 | 
  618 |     if (details.employeeId !== undefined) {
  619 |       await this.employeeID.fill(details.employeeId);
  620 |     }
  621 | 
  622 |     if (details.profilePicturePath !== undefined) {
  623 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  624 |     }
  625 | 
  626 |     await this.SaveEmployeeButton.click();
  627 |   }
  628 | 
  629 |   async fillAddEmployeeForm(details: AddEmployeeDetails): Promise<void> {
  630 |     if (details.firstName !== undefined) {
  631 |       await this.firstnameInput.fill(details.firstName);
  632 |     }
  633 | 
  634 |     if (details.middleName !== undefined) {
  635 |       await this.middlenameInput.fill(details.middleName);
  636 |     }
  637 | 
  638 |     if (details.lastName !== undefined) {
  639 |       await this.lastnameInput.fill(details.lastName);
> 640 |     }
      |                                              ^ TimeoutError: page.waitForResponse: Timeout 20000ms exceeded while waiting for event "response"
  641 | 
  642 |     if (details.employeeId !== undefined) {
  643 |       await this.employeeID.fill(details.employeeId);
  644 |       await this.employeeID.blur();
  645 |     }
  646 | 
  647 |     if (details.profilePicturePath !== undefined) {
  648 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  649 |     }
  650 |   }
  651 | 
  652 |   async resetEmployeeFilters(): Promise<void> {
  653 |     const employeeListResponse = this.page.waitForResponse(
  654 |       (response) =>
  655 |         response.url().includes("/api/v2/pim/employees") &&
  656 |         response.request().method() === "GET" &&
  657 |         response.ok(),
  658 |       { timeout: 15_000 },
  659 |     );
  660 | 
  661 |     await this.page.getByRole("button", { name: "Reset", exact: true }).click();
  662 | 
  663 |     await employeeListResponse;
  664 |     await expect(this.loadingSpinner).toBeHidden();
  665 |   }
  666 | 
  667 |   async selectEmployeeFromAutocomplete(
  668 |     partialName: string,
  669 |     expectedFullName: string,
  670 |   ): Promise<void> {
  671 |     await this.employeeNameFilterInput.fill(partialName);
  672 | 
  673 |     const matchingOption = this.page
  674 |       .locator(".oxd-autocomplete-option")
  675 |       .filter({ hasText: expectedFullName });
  676 | 
  677 |     await expect(matchingOption).toBeVisible({ timeout: 15000 });
  678 |     await matchingOption.click();
  679 |   }
  680 | 
  681 |   async addEmployeeWithLoginDetails(
  682 |     details: EmployeeWithLoginDetails,
  683 |   ): Promise<string> {
  684 |     await this.fillAddEmployeeForm({
  685 |       firstName: details.firstName,
  686 |       middleName: details.middleName,
  687 |       lastName: details.lastName,
  688 |       employeeId: details.employeeId,
  689 |       profilePicturePath: details.profilePicturePath,
  690 |     });
  691 | 
  692 |     const employeeId = await this.employeeID.inputValue();
  693 | 
  694 |     if (!(await this.createLoginDetailsCheckbox.isChecked())) {
  695 |       await this.createLoginDetailsSwitch.click();
  696 |     }
  697 | 
  698 |     await expect(this.createLoginDetailsCheckbox).toBeChecked();
  699 | 
  700 |     await expect(this.employeeUsernameInput).toBeVisible();
  701 |     await expect(this.employeePasswordInput).toBeVisible();
  702 |     await expect(this.confirmPasswordInput).toBeVisible();
  703 | 
  704 |     await this.employeeUsernameInput.fill(details.username);
  705 |     await this.employeePasswordInput.fill(details.password);
  706 |     await this.confirmPasswordInput.fill(details.password);
  707 | 
  708 |     if (details.status === "Disabled") {
  709 |       await this.disabledStatusRadio.check({
  710 |         force: true,
  711 |       });
  712 | 
  713 |       await expect(this.disabledStatusRadio).toBeChecked();
  714 |     } else {
  715 |       await this.enabledStatusRadio.check({
  716 |         force: true,
  717 |       });
  718 | 
  719 |       await expect(this.enabledStatusRadio).toBeChecked();
  720 |     }
  721 |     await expect(this.employeeUsernameInput).toHaveValue(details.username);
  722 | 
  723 |     await expect(this.employeePasswordInput).toHaveValue(details.password);
  724 | 
  725 |     await expect(this.confirmPasswordInput).toHaveValue(details.password);
  726 | 
  727 |     const createEmployeeResponse = this.page.waitForResponse(
  728 |       (response) =>
  729 |         response.url().includes("/api/v2/pim/employees") &&
  730 |         response.request().method() === "POST" &&
  731 |         response.ok(),
  732 |       { timeout: 20_000 },
  733 |     );
  734 | 
  735 |     await this.SaveEmployeeButton.click();
  736 | 
  737 |     await createEmployeeResponse;
  738 | 
  739 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  740 |       timeout: 20_000,
```