# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_ADMIN_063 - Admin should update an existing System User username @positive @edit @regression
- Location: tests\Admin\admin-users.spec.ts:613:6

# Error details

```
Error: expect(locator).toContainText(expected) failed

Locator: locator('.oxd-toast-content-text')
Expected substring: "Successfully Updated"
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toContainText" with timeout 20000ms
  - waiting for locator('.oxd-toast-content-text')

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
      - paragraph: manda Panchal
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
- text: (23) Records Found
- table:
  - rowgroup:
    - row " Username  User Role  Employee Name  Status  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
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
    - row " Admin Admin manda Panchal Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "manda Panchal"
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
```

# Test source

```ts
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
  742 |     await expect(confirmationDialog).toBeVisible();
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
  768 |     await this.addUsernameInput.clear();
  769 |     await this.addUsernameInput.fill(updatedUsername);
  770 | 
  771 |     await this.addUsernameInput.blur();
  772 | 
  773 |     await expect(this.addUsernameInput).toHaveValue(updatedUsername);
  774 | 
  775 |     await expect(this.usernameValidation).toBeHidden();
  776 | 
  777 |     await this.editUserSaveButton.click();
  778 | 
  779 |     await expect(this.page).toHaveURL(/admin\/viewSystemUsers/, {
  780 |       timeout: 20_000,
  781 |     });
  782 | 
> 783 |     await expect(this.toastMessage).toContainText("Successfully Updated", {
      |                                     ^ Error: expect(locator).toContainText(expected) failed
  784 |       timeout: 20_000,
  785 |     });
  786 |   }
  787 | }
  788 | 
```