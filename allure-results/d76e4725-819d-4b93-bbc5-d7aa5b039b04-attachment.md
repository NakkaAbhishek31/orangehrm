# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_ADMIN_057 - Admin should delete multiple System Users using bulk selection @positive @bulk-delete @regression
- Location: tests\Admin\admin-users.spec.ts:423:8

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-dialog-container')
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
  - waiting for locator('.oxd-dialog-container')

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Admin" [level=6]
  - heading "/ User Management" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: LfVJZqyBDe user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: User Management 
      - listitem: Job 
      - listitem: Organization 
      - listitem: Qualifications 
      - listitem:
        - link "Nationalities":
          - /url: "#"
      - listitem:
        - link "Corporate Branding":
          - /url: "#"
      - listitem: Configuration 
      - button ""
- heading "System Users" [level=5]
- button ""
- separator
- text: Username
- textbox
- text: User Role -- Select --  Employee Name
- textbox "Type for hints..."
- text: Status -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (2) Records Selected
- button " Delete Selected"
- table:
  - rowgroup:
    - row " Username  User Role  Employee Name  Status  Actions":
      - columnheader "":
        - checkbox "" [checked]
        - text: 
      - columnheader "Username "
      - columnheader "User Role "
      - columnheader "Employee Name "
      - columnheader "Status "
      - columnheader "Actions"
  - rowgroup:
    - row " Admin Admin LfVJZqyBDe user Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "LfVJZqyBDe user"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " auto_user_1786516568 ESS Peter Anderson Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "auto_user_1786516568"
      - cell "ESS"
      - cell "Peter Anderson"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " charanram197 ESS ram k Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "charanram197"
      - cell "ESS"
      - cell "ram k"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " charanram835 ESS ram k Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "charanram835"
      - cell "ESS"
      - cell "ram k"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ess1786514914661985 ESS Auto1786514914661985 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ess1786514914661985"
      - cell "ESS"
      - cell "Auto1786514914661985 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ess178651588968790 ESS Auto178651588968790 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ess178651588968790"
      - cell "ESS"
      - cell "Auto178651588968790 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " essA1786519851619925 ESS AutoA1786519851619925 User Enabled  ":
      - cell "":
        - checkbox "" [checked]
        - text: 
      - cell "essA1786519851619925"
      - cell "ESS"
      - cell "AutoA1786519851619925 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " essB1786519851619925 ESS AutoB1786519851619925 User Enabled  ":
      - cell "":
        - checkbox "" [checked]
        - text: 
      - cell "essB1786519851619925"
      - cell "ESS"
      - cell "AutoB1786519851619925 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " FMLName ESS Qwerty LName Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "FMLName"
      - cell "ESS"
      - cell "Qwerty LName"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " FMLName1 ESS FName LName Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "FMLName1"
      - cell "ESS"
      - cell "FName LName"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Gunatest ESS Guna test Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Gunatest"
      - cell "ESS"
      - cell "Guna test"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Hmgr167226 ESS Hmgr QA167226 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Hmgr167226"
      - cell "ESS"
      - cell "Hmgr QA167226"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Hmgr244192 ESS Hmgr QA244192 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Hmgr244192"
      - cell "ESS"
      - cell "Hmgr QA244192"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Hmgr372847 ESS Hmgr QA372847 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Hmgr372847"
      - cell "ESS"
      - cell "Hmgr QA372847"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Hmgr430998 ESS Hmgr QA430998 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Hmgr430998"
      - cell "ESS"
      - cell "Hmgr QA430998"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Hmgr452519 ESS Hmgr QA452519 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Hmgr452519"
      - cell "ESS"
      - cell "Hmgr QA452519"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Hmgr545386 ESS Hmgr QA545386 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Hmgr545386"
      - cell "ESS"
      - cell "Hmgr QA545386"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Hmgr569275 ESS Hmgr QA569275 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Hmgr569275"
      - cell "ESS"
      - cell "Hmgr QA569275"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Hmgr605446 ESS Hmgr QA605446 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Hmgr605446"
      - cell "ESS"
      - cell "Hmgr QA605446"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Hmgr666923 ESS Hmgr QA666923 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Hmgr666923"
      - cell "ESS"
      - cell "Hmgr QA666923"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Hmgr716822 ESS Hmgr QA716822 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Hmgr716822"
      - cell "ESS"
      - cell "Hmgr QA716822"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Hmgr725910 ESS Hmgr QA725910 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Hmgr725910"
      - cell "ESS"
      - cell "Hmgr QA725910"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Hmgr780839 ESS Hmgr QA780839 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Hmgr780839"
      - cell "ESS"
      - cell "Hmgr QA780839"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Hmgr791917 ESS Hmgr QA791917 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Hmgr791917"
      - cell "ESS"
      - cell "Hmgr QA791917"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Hmgr857814 ESS Hmgr QA857814 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Hmgr857814"
      - cell "ESS"
      - cell "Hmgr QA857814"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Hmgr905340 ESS Hmgr QA905340 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Hmgr905340"
      - cell "ESS"
      - cell "Hmgr QA905340"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Hmgr967983 ESS Hmgr QA967983 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Hmgr967983"
      - cell "ESS"
      - cell "Hmgr QA967983"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Intvr073746 ESS Intvr QA073746 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Intvr073746"
      - cell "ESS"
      - cell "Intvr QA073746"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Intvr167226 ESS Intvr QA167226 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Intvr167226"
      - cell "ESS"
      - cell "Intvr QA167226"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Intvr244192 ESS Intvr QA244192 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Intvr244192"
      - cell "ESS"
      - cell "Intvr QA244192"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Intvr372847 ESS Intvr QA372847 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Intvr372847"
      - cell "ESS"
      - cell "Intvr QA372847"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Intvr430998 ESS Intvr QA430998 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Intvr430998"
      - cell "ESS"
      - cell "Intvr QA430998"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Intvr452519 ESS Intvr QA452519 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Intvr452519"
      - cell "ESS"
      - cell "Intvr QA452519"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Intvr545386 ESS Intvr QA545386 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Intvr545386"
      - cell "ESS"
      - cell "Intvr QA545386"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Intvr569275 ESS Intvr QA569275 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Intvr569275"
      - cell "ESS"
      - cell "Intvr QA569275"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Intvr605446 ESS Intvr QA605446 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Intvr605446"
      - cell "ESS"
      - cell "Intvr QA605446"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Intvr666923 ESS Intvr QA666923 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Intvr666923"
      - cell "ESS"
      - cell "Intvr QA666923"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Intvr716822 ESS Intvr QA716822 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Intvr716822"
      - cell "ESS"
      - cell "Intvr QA716822"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Intvr725910 ESS Intvr QA725910 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Intvr725910"
      - cell "ESS"
      - cell "Intvr QA725910"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Intvr780839 ESS Intvr QA780839 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Intvr780839"
      - cell "ESS"
      - cell "Intvr QA780839"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Intvr791917 ESS Intvr QA791917 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Intvr791917"
      - cell "ESS"
      - cell "Intvr QA791917"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Intvr857814 ESS Intvr QA857814 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Intvr857814"
      - cell "ESS"
      - cell "Intvr QA857814"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Intvr905340 ESS Intvr QA905340 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Intvr905340"
      - cell "ESS"
      - cell "Intvr QA905340"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Intvr967983 ESS Intvr QA967983 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Intvr967983"
      - cell "ESS"
      - cell "Intvr QA967983"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Iyalrithu ESS Iyal Rithu Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Iyalrithu"
      - cell "ESS"
      - cell "Iyal Rithu"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Jobinsam@6742 ESS Jobin Sam Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Jobinsam@6742"
      - cell "ESS"
      - cell "Jobin Sam"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Praveen ESS Ranga Akunuri Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Praveen"
      - cell "ESS"
      - cell "Ranga Akunuri"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " qaess7420aaac ESS Qaz7420aaac Automation7420aaac Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "qaess7420aaac"
      - cell "ESS"
      - cell "Qaz7420aaac Automation7420aaac"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " qaess7c566d91 ESS Qaz7c566d91 Automation7c566d91 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "qaess7c566d91"
      - cell "ESS"
      - cell "Qaz7c566d91 Automation7c566d91"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " RaviMB Admin Ravi B Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "RaviMB"
      - cell "Admin"
      - cell "Ravi B"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
- navigation "Pagination Navigation":
  - list:
    - listitem:
      - button "1"
    - listitem:
      - button "2"
    - listitem:
      - button ""
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- dialog:
  - document:
    - button "×"
    - paragraph: Are you Sure?
    - paragraph: The selected record will be permanently deleted. Are you sure you want to continue?
    - button "No, Cancel"
    - button " Yes, Delete"
```

# Test source

```ts
  642 |       const userRow = this.userRows.filter({
  643 |         has: this.page.locator(".oxd-table-cell").nth(1).getByText(username, {
  644 |           exact: true,
  645 |         }),
  646 |       });
  647 | 
  648 |       await expect(userRow).toHaveCount(1);
  649 | 
  650 |       const checkbox = userRow.locator('input[type="checkbox"]');
  651 | 
  652 |       await checkbox.check({
  653 |         force: true,
  654 |       });
  655 | 
  656 |       await expect(checkbox).toBeChecked();
  657 |     }
  658 |   }
  659 | 
  660 |   async selectAllVisibleSystemUsers(): Promise<void> {
  661 |     await expect(this.loadingSpinner).toBeHidden();
  662 | 
  663 |     const headerCheckboxLabel = this.page.locator(
  664 |       ".oxd-table-header " + ".oxd-checkbox-wrapper label",
  665 |     );
  666 | 
  667 |     const headerCheckbox = this.page.locator(
  668 |       ".oxd-table-header " + 'input[type="checkbox"]',
  669 |     );
  670 | 
  671 |     // Exclude disabled row checkboxes.
  672 |     const selectableRowCheckboxes = this.userRows.locator(
  673 |       'input[type="checkbox"]:not(:disabled)',
  674 |     );
  675 | 
  676 |     const selectableRowCount = await selectableRowCheckboxes.count();
  677 | 
  678 |     expect(selectableRowCount).toBeGreaterThan(0);
  679 | 
  680 |     await headerCheckboxLabel.click();
  681 | 
  682 |     await expect(headerCheckbox).toBeChecked();
  683 | 
  684 |     await expect
  685 |       .poll(
  686 |         async () =>
  687 |           selectableRowCheckboxes.evaluateAll(
  688 |             (checkboxes) =>
  689 |               checkboxes.filter(
  690 |                 (checkbox) => (checkbox as HTMLInputElement).checked,
  691 |               ).length,
  692 |           ),
  693 |         {
  694 |           timeout: 15_000,
  695 |         },
  696 |       )
  697 |       .toBe(selectableRowCount);
  698 |   }
  699 | 
  700 |   async deselectAllVisibleSystemUsers(): Promise<void> {
  701 |     const headerCheckboxLabel = this.page.locator(
  702 |       ".oxd-table-header " + ".oxd-checkbox-wrapper label",
  703 |     );
  704 | 
  705 |     const headerCheckbox = this.page.locator(
  706 |       ".oxd-table-header " + 'input[type="checkbox"]',
  707 |     );
  708 | 
  709 |     const selectableRowCheckboxes = this.userRows.locator(
  710 |       'input[type="checkbox"]:not(:disabled)',
  711 |     );
  712 | 
  713 |     await headerCheckboxLabel.click();
  714 | 
  715 |     await expect(headerCheckbox).not.toBeChecked();
  716 | 
  717 |     await expect
  718 |       .poll(
  719 |         async () =>
  720 |           selectableRowCheckboxes.evaluateAll(
  721 |             (checkboxes) =>
  722 |               checkboxes.filter(
  723 |                 (checkbox) => (checkbox as HTMLInputElement).checked,
  724 |               ).length,
  725 |           ),
  726 |         {
  727 |           timeout: 15_000,
  728 |         },
  729 |       )
  730 |       .toBe(0);
  731 |   }
  732 | 
  733 |   async deleteSelectedSystemUsers(): Promise<void> {
  734 |     await expect(this.deleteSelectedButton).toBeVisible({
  735 |       timeout: 15_000,
  736 |     });
  737 | 
  738 |     await this.deleteSelectedButton.click();
  739 | 
  740 |     const confirmationDialog = this.page.locator(".oxd-dialog-container");
  741 | 
> 742 |     await expect(confirmationDialog).toBeVisible();
      |                                      ^ Error: expect(locator).toBeVisible() failed
  743 | 
  744 |     const confirmDeleteButton = confirmationDialog.locator(
  745 |       "button.oxd-button--label-danger",
  746 |     );
  747 | 
  748 |     await expect(confirmDeleteButton).toBeVisible();
  749 | 
  750 |     await confirmDeleteButton.click();
  751 | 
  752 |     await expect(confirmationDialog).toBeHidden({
  753 |       timeout: 20_000,
  754 |     });
  755 | 
  756 |     await expect(
  757 |       this.toastMessage.filter({
  758 |         hasText: /Successfully Deleted/i,
  759 |       }),
  760 |     ).toBeVisible({
  761 |       timeout: 20_000,
  762 |     });
  763 | 
  764 |     await expect(this.loadingSpinner).toBeHidden();
  765 |   }
  766 | 
  767 |   async updateSystemUsername(updatedUsername: string): Promise<void> {
  768 |     await this.addUsernameInput.fill(updatedUsername);
  769 | 
  770 |     await this.addUsernameInput.blur();
  771 | 
  772 |     await expect(this.addUsernameInput).toHaveValue(updatedUsername);
  773 | 
  774 |     await expect(this.usernameValidation).toBeHidden();
  775 | 
  776 |     const updatedToast = expect(
  777 |       this.toastMessage.filter({
  778 |         hasText: /Successfully Updated/i,
  779 |       }),
  780 |     ).toBeVisible({
  781 |       timeout: 20_000,
  782 |     });
  783 | 
  784 |     await this.editUserSaveButton.click();
  785 | 
  786 |     await expect(this.page).toHaveURL(/admin\/viewSystemUsers/, {
  787 |       timeout: 20_000,
  788 |     });
  789 | 
  790 |     await updatedToast;
  791 | 
  792 |     await expect(this.systemUsersHeading).toBeVisible();
  793 |   }
  794 | }
  795 | 
```