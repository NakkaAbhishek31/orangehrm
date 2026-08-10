# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> TC_PIM_029 - Admin should search for an employee using a partial employee name @positive @search @regression
- Location: tests\PIM\pim-employee-list.spec.ts:195:5

# Error details

```
TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
Call log:
  - waiting for locator('.oxd-autocomplete-option').filter({ hasText: 'Auto1786074194739 test user' }) to be visible

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
              - paragraph [ref=f5e127]: Ge orged Russe lld
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
              - generic [ref=f5e165]:
                - textbox "Type for hints..." [active] [ref=f5e167]: Auto1786
                - listbox [ref=f5e168]:
                  - option "No Records Found" [ref=f5e169] [cursor=pointer]
            - generic [ref=f5e171]:
              - generic [ref=f5e172]: Employee Id
              - textbox [ref=f5e175]
            - generic [ref=f5e177]:
              - generic [ref=f5e178]: Employment Status
              - generic [ref=f5e182] [cursor=pointer]:
                - generic [ref=f5e183]: "-- Select --"
                - generic [ref=f5e184]: 
            - generic [ref=f5e187]:
              - generic [ref=f5e188]: Include
              - generic [ref=f5e192] [cursor=pointer]:
                - generic [ref=f5e193]: Current Employees Only
                - generic [ref=f5e194]: 
            - generic [ref=f5e197]:
              - generic [ref=f5e198]: Supervisor Name
              - textbox "Type for hints..." [ref=f5e203]
            - generic [ref=f5e205]:
              - generic [ref=f5e206]: Job Title
              - generic [ref=f5e210] [cursor=pointer]:
                - generic [ref=f5e211]: "-- Select --"
                - generic [ref=f5e212]: 
            - generic [ref=f5e215]:
              - generic [ref=f5e216]: Sub Unit
              - generic [ref=f5e220] [cursor=pointer]:
                - generic [ref=f5e221]: "-- Select --"
                - generic [ref=f5e222]: 
          - separator [ref=f5e224]
          - generic [ref=f5e225]:
            - button "Reset" [ref=f5e226] [cursor=pointer]
            - button "Search" [ref=f5e227] [cursor=pointer]
      - generic [ref=f5e228]:
        - button " Add" [ref=f5e230] [cursor=pointer]:
          - generic [ref=f5e231]: 
          - text: Add
        - generic [ref=f5e232]:
          - separator [ref=f5e233]
          - generic [ref=f5e234]: (2) Records Found
        - table [ref=f5e237]:
          - rowgroup [ref=f5e238]:
            - row [ref=f5e239]:
              - columnheader "" [ref=f5e240]:
                - generic [ref=f5e242] [cursor=pointer]:
                  - checkbox "" [ref=f5e243]
                  - generic [ref=f5e244]: 
              - columnheader "Id " [ref=f5e246]:
                - text: Id
                - generic [ref=f5e247]:
                  - generic [ref=f5e248] [cursor=pointer]: 
                  - text:  
              - columnheader "First (& Middle) Name " [ref=f5e249]:
                - text: First (& Middle) Name
                - generic [ref=f5e250]:
                  - generic [ref=f5e251] [cursor=pointer]: 
                  - text:  
              - columnheader "Last Name " [ref=f5e252]:
                - text: Last Name
                - generic [ref=f5e253]:
                  - generic [ref=f5e254] [cursor=pointer]: 
                  - text:  
              - columnheader "Job Title " [ref=f5e255]:
                - text: Job Title
                - generic [ref=f5e256]:
                  - generic [ref=f5e257] [cursor=pointer]: 
                  - text:  
              - columnheader "Employment Status " [ref=f5e258]:
                - text: Employment Status
                - generic [ref=f5e259]:
                  - generic [ref=f5e260] [cursor=pointer]: 
                  - text:  
              - columnheader "Sub Unit " [ref=f5e261]:
                - text: Sub Unit
                - generic [ref=f5e262]:
                  - generic [ref=f5e263] [cursor=pointer]: 
                  - text:  
              - columnheader "Supervisor " [ref=f5e264]:
                - text: Supervisor
                - generic [ref=f5e265]:
                  - generic [ref=f5e266] [cursor=pointer]: 
                  - text:  
              - columnheader "Actions" [ref=f5e267]
          - rowgroup [ref=f5e268]:
            - row [ref=f5e270] [cursor=pointer]:
              - cell "" [ref=f5e271]:
                - generic [ref=f5e274]:
                  - checkbox "" [ref=f5e275]
                  - generic [ref=f5e276]: 
              - cell "0480" [ref=f5e278]
              - cell "Ak1786074203432" [ref=f5e280]
              - cell "Dove" [ref=f5e282]
              - cell [ref=f5e284]
              - cell [ref=f5e285]
              - cell [ref=f5e286]
              - cell [ref=f5e287]
              - cell [ref=f5e288]:
                - generic [ref=f5e289]:
                  - button "" [ref=f5e290]
                  - button "" [ref=f5e292]
            - row [ref=f5e295] [cursor=pointer]:
              - cell "" [ref=f5e296]:
                - generic [ref=f5e300]:
                  - checkbox "" [ref=f5e301]
                  - generic [ref=f5e302]: 
              - cell "muser" [ref=f5e304]
              - cell "Ge orged akh ild" [ref=f5e306]
              - cell "Russe lld" [ref=f5e308]
              - cell "HR Manager" [ref=f5e310]
              - cell "Full-Time Permanent" [ref=f5e312]
              - cell "Human Resources" [ref=f5e314]
              - cell [ref=f5e316]
              - cell [ref=f5e317]:
                - button "" [ref=f5e319]
    - generic [ref=f5e322]:
      - paragraph [ref=f5e323]: OrangeHRM OS 5.9
      - paragraph [ref=f5e324]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f5e325] [cursor=pointer]:
          - /url: http://www.orangehrm.com
        - text: . All rights reserved.
```

# Test source

```ts
  548 | 
  549 |     await expect
  550 |       .poll(async () => this.getVisibleEmployeeIds(), { timeout: 15_000 })
  551 |       .not.toEqual(currentPageIds);
  552 |   }
  553 | 
  554 |   async openEmployeeById(employeeId: string): Promise<void> {
  555 |     const employeeRow = this.employeeRows.filter({
  556 |       has: this.page
  557 |         .locator(".oxd-table-cell")
  558 |         .nth(1)
  559 |         .filter({ hasText: employeeId }),
  560 |     });
  561 | 
  562 |     await expect(employeeRow).toHaveCount(1);
  563 | 
  564 |     await employeeRow.locator(".oxd-table-cell").nth(1).click();
  565 | 
  566 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  567 |       timeout: 15_000,
  568 |     });
  569 |   }
  570 | 
  571 |   async cancelAddingEmployee(): Promise<void> {
  572 |     expect(this.cancelProfilepageButton).toBeVisible();
  573 |     expect(this.cancelProfilepageButton).toBeEnabled();
  574 |     this.cancelProfilepageButton.click();
  575 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  576 |   }
  577 | 
  578 |   async saveEmployeeWithoutRequiredDetails(
  579 |     details: AddEmployeeDetails,
  580 |   ): Promise<void> {
  581 |     await this.firstnameInput.fill(details.firstName);
  582 | 
  583 |     if (details.middleName !== undefined) {
  584 |       await this.middlenameInput.fill(details.middleName);
  585 |     }
  586 | 
  587 |     await this.lastnameInput.fill(details.lastName);
  588 | 
  589 |     if (details.employeeId !== undefined) {
  590 |       await this.employeeID.fill(details.employeeId);
  591 |     }
  592 | 
  593 |     if (details.profilePicturePath !== undefined) {
  594 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  595 |     }
  596 | 
  597 |     await this.SaveEmployeeButton.click();
  598 |   }
  599 | 
  600 |   async fillAddEmployeeForm(details: AddEmployeeDetails): Promise<void> {
  601 |     if (details.firstName !== undefined) {
  602 |       await this.firstnameInput.fill(details.firstName);
  603 |     }
  604 | 
  605 |     if (details.middleName !== undefined) {
  606 |       await this.middlenameInput.fill(details.middleName);
  607 |     }
  608 | 
  609 |     if (details.lastName !== undefined) {
  610 |       await this.lastnameInput.fill(details.lastName);
  611 |     }
  612 | 
  613 |     if (details.employeeId !== undefined) {
  614 |       await this.employeeID.fill(details.employeeId);
  615 |       await this.employeeID.blur();
  616 |     }
  617 | 
  618 |     if (details.profilePicturePath !== undefined) {
  619 |       await this.profilePictureInput.setInputFiles(details.profilePicturePath);
  620 |     }
  621 |   }
  622 | 
  623 |   async resetEmployeeFilters(): Promise<void> {
  624 |     const employeeListResponse = this.page.waitForResponse(
  625 |       (response) =>
  626 |         response.url().includes("/api/v2/pim/employees") &&
  627 |         response.request().method() === "GET" &&
  628 |         response.ok(),
  629 |       { timeout: 15_000 },
  630 |     );
  631 | 
  632 |     await this.page.getByRole("button", { name: "Reset", exact: true }).click();
  633 | 
  634 |     await employeeListResponse;
  635 |     await expect(this.loadingSpinner).toBeHidden();
  636 |   }
  637 | 
  638 |   async selectEmployeeFromAutocomplete(
  639 |     partialName: string,
  640 |     expectedFullName: string,
  641 |   ): Promise<void> {
  642 |     await this.employeeNameFilterInput.fill(partialName);
  643 | 
  644 |   const matchingOption = this.page
  645 |   .locator(".oxd-autocomplete-option")
  646 |   .filter({ hasText: expectedFullName });
  647 | 
> 648 |   await matchingOption.waitFor({ state: "visible" });
      |                        ^ TimeoutError: locator.waitFor: Timeout 30000ms exceeded.
  649 | 
  650 |     await expect(matchingOption).toBeVisible({ timeout: 15000 });
  651 |     await matchingOption.click();
  652 |   }
  653 | 
  654 |   async addEmployeeWithLoginDetails(
  655 |     details: EmployeeWithLoginDetails,
  656 |   ): Promise<string> {
  657 |     await this.fillAddEmployeeForm({
  658 |       firstName: details.firstName,
  659 |       middleName: details.middleName,
  660 |       lastName: details.lastName,
  661 |       employeeId: details.employeeId,
  662 |       profilePicturePath: details.profilePicturePath,
  663 |     });
  664 | 
  665 |     const employeeId = await this.employeeID.inputValue();
  666 | 
  667 |     if (!(await this.createLoginDetailsCheckbox.isChecked())) {
  668 |       await this.createLoginDetailsSwitch.click();
  669 |     }
  670 | 
  671 |     await expect(this.createLoginDetailsCheckbox).toBeChecked();
  672 | 
  673 |     await expect(this.employeeUsernameInput).toBeVisible();
  674 |     await expect(this.employeePasswordInput).toBeVisible();
  675 |     await expect(this.confirmPasswordInput).toBeVisible();
  676 | 
  677 |     await this.employeeUsernameInput.fill(details.username);
  678 |     await this.employeePasswordInput.fill(details.password);
  679 |     await this.confirmPasswordInput.fill(details.password);
  680 | 
  681 |     if (details.status === "Disabled") {
  682 |       await this.disabledStatusRadio.check({
  683 |         force: true,
  684 |       });
  685 | 
  686 |       await expect(this.disabledStatusRadio).toBeChecked();
  687 |     } else {
  688 |       await this.enabledStatusRadio.check({
  689 |         force: true,
  690 |       });
  691 | 
  692 |       await expect(this.enabledStatusRadio).toBeChecked();
  693 |     }
  694 |     await expect(this.employeeUsernameInput).toHaveValue(details.username);
  695 | 
  696 |     await expect(this.employeePasswordInput).toHaveValue(details.password);
  697 | 
  698 |     await expect(this.confirmPasswordInput).toHaveValue(details.password);
  699 | 
  700 |     const createEmployeeResponse = this.page.waitForResponse(
  701 |       (response) =>
  702 |         response.url().includes("/api/v2/pim/employees") &&
  703 |         response.request().method() === "POST" &&
  704 |         response.ok(),
  705 |       { timeout: 20_000 },
  706 |     );
  707 | 
  708 |     await this.SaveEmployeeButton.click();
  709 | 
  710 |     await createEmployeeResponse;
  711 | 
  712 |     await this.page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  713 |       timeout: 20_000,
  714 |     });
  715 | 
  716 |     await expect(this.loadingSpinner).toBeHidden();
  717 | 
  718 |     return employeeId;
  719 |   }
  720 | 
  721 |   async verifyPasswordStrength(expectedStrength: RegExp): Promise<void> {
  722 |     await expect(this.passwordStrengthIndicator).toBeVisible();
  723 | 
  724 |     await expect(this.passwordStrengthIndicator).toHaveText(expectedStrength);
  725 |   }
  726 | 
  727 |   async canceldeleteEmployeeById(employeeId: string): Promise<void> {
  728 |     await expect(this.loadingSpinner).toBeHidden();
  729 |     const matchingRow = this.employeeRows.filter({ hasText: employeeId });
  730 |     await expect(matchingRow).toHaveCount(1);
  731 |     const deleteButton = matchingRow.locator("button").filter({
  732 |       has: this.page.locator("i.bi-trash"),
  733 |     });
  734 |     await deleteButton.click();
  735 | 
  736 |     const confirmationDilaog = this.page.getByRole("dialog");
  737 |     await expect(confirmationDilaog).toBeVisible();
  738 | 
  739 |     await confirmationDilaog.getByText("No, Cancel", { exact: true }).click();
  740 | 
  741 |     await expect(this.page).toHaveURL(/pim\/viewEmployeeList/);
  742 |   }
  743 | 
  744 |   async selectEmployeeById(employeeId: string): Promise<void> {
  745 |     const employeeRow = this.employeeRows.filter({
  746 |       has: this.page
  747 |         .locator(".oxd-table-cell")
  748 |         .nth(1)
```