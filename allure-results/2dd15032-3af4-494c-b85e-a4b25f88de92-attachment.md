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
      - paragraph: Kirubakaran Loganathan
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
    - row " mohanbabu ESS Mohan babu Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "mohanbabu"
      - cell "ESS"
      - cell "Mohan babu"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Admin Admin Kirubakaran Loganathan Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "Kirubakaran Loganathan"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Betsy_Breitenberg-Ledner27 ESS Deanna Rice Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Betsy_Breitenberg-Ledner27"
      - cell "ESS"
      - cell "Deanna Rice"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Brendon.Kuhn ESS Elsie Wolff Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Brendon.Kuhn"
      - cell "ESS"
      - cell "Elsie Wolff"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Charlene65 ESS Sharon Christiansen Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Charlene65"
      - cell "ESS"
      - cell "Sharon Christiansen"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Charlene654 ESS Sharon Christiansen Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Charlene654"
      - cell "ESS"
      - cell "Sharon Christiansen"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Christie_Leuschke ESS Thomas Grady Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Christie_Leuschke"
      - cell "ESS"
      - cell "Thomas Grady"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " dani_a3836cdd Admin yedghjb1 90jsnd Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "dani_a3836cdd"
      - cell "Admin"
      - cell "yedghjb1 90jsnd"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " devon.cole.06792 ESS Devon Cole Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "devon.cole.06792"
      - cell "ESS"
      - cell "Devon Cole"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Eloisa.Miller ESS Alison Wintheiser Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Eloisa.Miller"
      - cell "ESS"
      - cell "Alison Wintheiser"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ess1786596637596130 ESS Auto1786596637596130 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ess1786596637596130"
      - cell "ESS"
      - cell "Auto1786596637596130 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ess1786596802363583 ESS Auto1786596802363583 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ess1786596802363583"
      - cell "ESS"
      - cell "Auto1786596802363583 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ess1786596906595666 ESS Auto1786596906595666 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ess1786596906595666"
      - cell "ESS"
      - cell "Auto1786596906595666 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ess1786597164227817 ESS Auto1786597164227817 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ess1786597164227817"
      - cell "ESS"
      - cell "Auto1786597164227817 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ess1786597371734783 ESS Auto1786597371734783 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ess1786597371734783"
      - cell "ESS"
      - cell "Auto1786597371734783 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ess1786597481977159 ESS Auto1786597481977159 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ess1786597481977159"
      - cell "ESS"
      - cell "Auto1786597481977159 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " essA1786597820775164 ESS AutoA1786597820775164 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "essA1786597820775164"
      - cell "ESS"
      - cell "AutoA1786597820775164 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " essA1786598598555249 ESS AutoA1786598598555249 User Enabled  ":
      - cell "":
        - checkbox "" [checked]
        - text: 
      - cell "essA1786598598555249"
      - cell "ESS"
      - cell "AutoA1786598598555249 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " essB1786597820775164 ESS AutoB1786597820775164 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "essB1786597820775164"
      - cell "ESS"
      - cell "AutoB1786597820775164 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " essB1786598598555249 ESS AutoB1786598598555249 User Enabled  ":
      - cell "":
        - checkbox "" [checked]
        - text: 
      - cell "essB1786598598555249"
      - cell "ESS"
      - cell "AutoB1786598598555249 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ess_user_1786596428312_03lkd ESS RBACFirst_1786596428312_u2t3h RBACLast_1786596428312_u2t3h Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ess_user_1786596428312_03lkd"
      - cell "ESS"
      - cell "RBACFirst_1786596428312_u2t3h RBACLast_1786596428312_u2t3h"
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
    - row " Jalal1786594656 ESS Jalal1786594656 Udin Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Jalal1786594656"
      - cell "ESS"
      - cell "Jalal1786594656 Udin"
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
    - row " louisa.ryan.05911 ESS Louisa Ryan Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "louisa.ryan.05911"
      - cell "ESS"
      - cell "Louisa Ryan"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Maryann42 ESS Marietta Beatty Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Maryann42"
      - cell "ESS"
      - cell "Marietta Beatty"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Maryann421 ESS Marietta Beatty Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Maryann421"
      - cell "ESS"
      - cell "Marietta Beatty"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Medha9 ESS Medha1 Gireesha Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Medha9"
      - cell "ESS"
      - cell "Medha1 Gireesha"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " pimuser98417330 ESS Raj ravi Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "pimuser98417330"
      - cell "ESS"
      - cell "Raj ravi"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " pimuser98585085 ESS Raj ravi Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "pimuser98585085"
      - cell "ESS"
      - cell "Raj ravi"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Vernon77 ESS Elbert Lehner Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Vernon77"
      - cell "ESS"
      - cell "Elbert Lehner"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " VinothKannan7236 Admin savina dulvin Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "VinothKannan7236"
      - cell "Admin"
      - cell "savina dulvin"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " VinothKannan7974 Admin savina dulvin Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "VinothKannan7974"
      - cell "Admin"
      - cell "savina dulvin"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
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
  656 |       });
  657 | 
  658 |       await expect(userRow).toHaveCount(1);
  659 | 
  660 |       const checkbox = userRow.locator('input[type="checkbox"]');
  661 |       const checkboxLabel = userRow.locator(".oxd-checkbox-wrapper label");
  662 | 
  663 |       await expect(checkboxLabel).toBeVisible();
  664 |       await checkboxLabel.click();
  665 | 
  666 |       await expect(checkbox).toBeChecked();
  667 |     }
  668 | 
  669 |     await expect(this.deleteSelectedButton).toBeVisible({ timeout: 15_000 });
  670 |     await expect(this.deleteSelectedButton).toBeEnabled();
  671 |   }
  672 | 
  673 |   async selectAllVisibleSystemUsers(): Promise<void> {
  674 |     await expect(this.loadingSpinner).toBeHidden();
  675 | 
  676 |     const headerCheckboxLabel = this.page.locator(
  677 |       ".oxd-table-header " + ".oxd-checkbox-wrapper label",
  678 |     );
  679 | 
  680 |     const headerCheckbox = this.page.locator(
  681 |       ".oxd-table-header " + 'input[type="checkbox"]',
  682 |     );
  683 | 
  684 |     // Exclude disabled row checkboxes.
  685 |     const selectableRowCheckboxes = this.userRows.locator(
  686 |       'input[type="checkbox"]:not(:disabled)',
  687 |     );
  688 | 
  689 |     const selectableRowCount = await selectableRowCheckboxes.count();
  690 | 
  691 |     expect(selectableRowCount).toBeGreaterThan(0);
  692 | 
  693 |     await headerCheckboxLabel.click();
  694 | 
  695 |     await expect(headerCheckbox).toBeChecked();
  696 | 
  697 |     await expect
  698 |       .poll(
  699 |         async () =>
  700 |           selectableRowCheckboxes.evaluateAll(
  701 |             (checkboxes) =>
  702 |               checkboxes.filter(
  703 |                 (checkbox) => (checkbox as HTMLInputElement).checked,
  704 |               ).length,
  705 |           ),
  706 |         {
  707 |           timeout: 15_000,
  708 |         },
  709 |       )
  710 |       .toBe(selectableRowCount);
  711 |   }
  712 | 
  713 |   async deselectAllVisibleSystemUsers(): Promise<void> {
  714 |     const headerCheckboxLabel = this.page.locator(
  715 |       ".oxd-table-header " + ".oxd-checkbox-wrapper label",
  716 |     );
  717 | 
  718 |     const headerCheckbox = this.page.locator(
  719 |       ".oxd-table-header " + 'input[type="checkbox"]',
  720 |     );
  721 | 
  722 |     const selectableRowCheckboxes = this.userRows.locator(
  723 |       'input[type="checkbox"]:not(:disabled)',
  724 |     );
  725 | 
  726 |     await headerCheckboxLabel.click();
  727 | 
  728 |     await expect(headerCheckbox).not.toBeChecked();
  729 | 
  730 |     await expect
  731 |       .poll(
  732 |         async () =>
  733 |           selectableRowCheckboxes.evaluateAll(
  734 |             (checkboxes) =>
  735 |               checkboxes.filter(
  736 |                 (checkbox) => (checkbox as HTMLInputElement).checked,
  737 |               ).length,
  738 |           ),
  739 |         {
  740 |           timeout: 15_000,
  741 |         },
  742 |       )
  743 |       .toBe(0);
  744 |   }
  745 | 
  746 |   async deleteSelectedSystemUsers(): Promise<void> {
  747 |     await expect(this.deleteSelectedButton).toBeVisible({
  748 |       timeout: 15_000,
  749 |     });
  750 |     await expect(this.deleteSelectedButton).toBeEnabled();
  751 | 
  752 |     await this.deleteSelectedButton.click();
  753 | 
  754 |     const confirmationDialog = this.page.locator(".oxd-dialog-container");
  755 | 
> 756 |     await expect(confirmationDialog).toBeVisible();
      |                                      ^ Error: expect(locator).toBeVisible() failed
  757 | 
  758 |     const confirmDeleteButton = confirmationDialog.locator(
  759 |       "button.oxd-button--label-danger",
  760 |     );
  761 | 
  762 |     await expect(confirmDeleteButton).toBeVisible();
  763 | 
  764 |     await confirmDeleteButton.click();
  765 | 
  766 |     await expect(confirmationDialog).toBeHidden({
  767 |       timeout: 20_000,
  768 |     });
  769 | 
  770 |     await expect(
  771 |       this.toastMessage.filter({
  772 |         hasText: /Successfully Deleted/i,
  773 |       }),
  774 |     ).toBeVisible({
  775 |       timeout: 20_000,
  776 |     });
  777 | 
  778 |     await expect(this.loadingSpinner).toBeHidden();
  779 |   }
  780 | 
  781 |   async updateSystemUsername(updatedUsername: string): Promise<void> {
  782 |     await this.addUsernameInput.clear();
  783 |     await this.addUsernameInput.fill(updatedUsername);
  784 | 
  785 |     await this.addUsernameInput.blur();
  786 | 
  787 |     await expect(this.addUsernameInput).toHaveValue(updatedUsername);
  788 | 
  789 |     await expect(this.usernameValidation).toBeHidden();
  790 | 
  791 |     const updateUserResponse = this.page.waitForResponse(
  792 |       (response) =>
  793 |         /\/api\/v2\/admin\/users\/\d+$/.test(response.url()) &&
  794 |         response.request().method() === "PUT" &&
  795 |         response.ok(),
  796 |       { timeout: 20_000 },
  797 |     );
  798 | 
  799 |     await this.editUserSaveButton.click();
  800 |     await updateUserResponse;
  801 | 
  802 |     await expect(this.page).toHaveURL(/admin\/viewSystemUsers/, {
  803 |       timeout: 20_000,
  804 |     });
  805 |     await expect(this.systemUsersHeading).toBeVisible();
  806 |   }
  807 | }
  808 | 
```