# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_057 - Admin should delete multiple System Users using bulk selection @positive @bulk-delete @regression
- Location: tests\Admin\admin-users.spec.ts:978:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.oxd-dialog-container')
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
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
      - paragraph: Ge orged Russe lld
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
    - row " Admin Admin Ge orged Russe lld Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "Ge orged Russe lld"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Employee ESS Employee User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Employee"
      - cell "ESS"
      - cell "Employee User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ess1786074507323198 ESS Auto1786074507323198 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ess1786074507323198"
      - cell "ESS"
      - cell "Auto1786074507323198 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " essA1786074561243387 ESS AutoA1786074561243387 User Enabled  ":
      - cell "":
        - checkbox "" [checked]
        - text: 
      - cell "essA1786074561243387"
      - cell "ESS"
      - cell "AutoA1786074561243387 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " essB1786074561243387 ESS AutoB1786074561243387 User Enabled  ":
      - cell "":
        - checkbox "" [checked]
        - text: 
      - cell "essB1786074561243387"
      - cell "ESS"
      - cell "AutoB1786074561243387 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " hm17860744184211052 ESS Hiring17860744184211052 Manager Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "hm17860744184211052"
      - cell "ESS"
      - cell "Hiring17860744184211052 Manager"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " iv17860744184211052 ESS Interview17860744184211052 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "iv17860744184211052"
      - cell "ESS"
      - cell "Interview17860744184211052 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Ravinder Admin Ge orged Russe lld Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Ravinder"
      - cell "Admin"
      - cell "Ge orged Russe lld"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Ravinder@123 Admin Ge orged Russe lld Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Ravinder@123"
      - cell "Admin"
      - cell "Ge orged Russe lld"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " user1786074427043 ESS Auto1786074427043 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "user1786074427043"
      - cell "ESS"
      - cell "Auto1786074427043 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " yusuf ESS muhammad qureshi Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "yusuf"
      - cell "ESS"
      - cell "muhammad qureshi"
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
  710 |       'input[type="checkbox"]'
  711 |     );
  712 | 
  713 |   // Exclude disabled row checkboxes.
  714 |   const selectableRowCheckboxes =
  715 |     this.userRows.locator(
  716 |       'input[type="checkbox"]:not(:disabled)'
  717 |     );
  718 | 
  719 |   const selectableRowCount =
  720 |     await selectableRowCheckboxes.count();
  721 | 
  722 |   expect(
  723 |     selectableRowCount
  724 |   ).toBeGreaterThan(0);
  725 | 
  726 |   await headerCheckboxLabel.click();
  727 | 
  728 |   await expect(
  729 |     headerCheckbox
  730 |   ).toBeChecked();
  731 | 
  732 |   await expect
  733 |     .poll(
  734 |       async () =>
  735 |         selectableRowCheckboxes.evaluateAll(
  736 |           checkboxes =>
  737 |             checkboxes.filter(
  738 |               checkbox =>
  739 |                 (
  740 |                   checkbox as HTMLInputElement
  741 |                 ).checked
  742 |             ).length
  743 |         ),
  744 |       {
  745 |         timeout: 15_000,
  746 |       }
  747 |     )
  748 |     .toBe(selectableRowCount);
  749 | }
  750 | 
  751 | async deselectAllVisibleSystemUsers(): Promise<void> {
  752 |   const headerCheckboxLabel =
  753 |     this.page.locator(
  754 |       '.oxd-table-header ' +
  755 |       '.oxd-checkbox-wrapper label'
  756 |     );
  757 | 
  758 |   const headerCheckbox =
  759 |     this.page.locator(
  760 |       '.oxd-table-header ' +
  761 |       'input[type="checkbox"]'
  762 |     );
  763 | 
  764 |   const selectableRowCheckboxes =
  765 |     this.userRows.locator(
  766 |       'input[type="checkbox"]:not(:disabled)'
  767 |     );
  768 | 
  769 |   await headerCheckboxLabel.click();
  770 | 
  771 |   await expect(
  772 |     headerCheckbox
  773 |   ).not.toBeChecked();
  774 | 
  775 |   await expect
  776 |     .poll(
  777 |       async () =>
  778 |         selectableRowCheckboxes.evaluateAll(
  779 |           checkboxes =>
  780 |             checkboxes.filter(
  781 |               checkbox =>
  782 |                 (
  783 |                   checkbox as HTMLInputElement
  784 |                 ).checked
  785 |             ).length
  786 |         ),
  787 |       {
  788 |         timeout: 15_000,
  789 |       }
  790 |     )
  791 |     .toBe(0);
  792 | }
  793 | 
  794 | async deleteSelectedSystemUsers(): Promise<void> {
  795 |   await expect(
  796 |     this.deleteSelectedButton
  797 |   ).toBeVisible({
  798 |     timeout: 15_000,
  799 |   });
  800 | 
  801 |   await this.deleteSelectedButton.click();
  802 | 
  803 |   const confirmationDialog =
  804 |     this.page.locator(
  805 |       '.oxd-dialog-container'
  806 |     );
  807 | 
  808 |   await expect(
  809 |     confirmationDialog
> 810 |   ).toBeVisible();
      |     ^ Error: expect(locator).toBeVisible() failed
  811 | 
  812 |   const confirmDeleteButton =
  813 |     confirmationDialog.locator(
  814 |       'button.oxd-button--label-danger'
  815 |     );
  816 | 
  817 |   await expect(
  818 |     confirmDeleteButton
  819 |   ).toBeVisible();
  820 | 
  821 |   await confirmDeleteButton.click();
  822 | 
  823 |   await expect(
  824 |     confirmationDialog
  825 |   ).toBeHidden({
  826 |     timeout: 20_000,
  827 |   });
  828 | 
  829 |   await expect(
  830 |     this.toastMessage.filter({
  831 |       hasText: /Successfully Deleted/i,
  832 |     })
  833 |   ).toBeVisible({
  834 |     timeout: 20_000,
  835 |   });
  836 | 
  837 |   await expect(
  838 |     this.loadingSpinner
  839 |   ).toBeHidden();
  840 | }
  841 | 
  842 | async updateSystemUsername(
  843 |   updatedUsername: string
  844 | ): Promise<void> {
  845 |   await this.addUsernameInput.fill(
  846 |     updatedUsername
  847 |   );
  848 | 
  849 |   await this.addUsernameInput.blur();
  850 | 
  851 |   await expect(
  852 |     this.addUsernameInput
  853 |   ).toHaveValue(updatedUsername);
  854 | 
  855 |   await expect(
  856 |     this.usernameValidation
  857 |   ).toBeHidden();
  858 | 
  859 |   const updatedToast = expect(
  860 |     this.toastMessage.filter({
  861 |       hasText: /Successfully Updated/i,
  862 |     })
  863 |   ).toBeVisible({
  864 |     timeout: 20_000,
  865 |   });
  866 | 
  867 |   await this.editUserSaveButton.click();
  868 | 
  869 |   await expect(this.page).toHaveURL(
  870 |     /admin\/viewSystemUsers/,
  871 |     {
  872 |       timeout: 20_000,
  873 |     }
  874 |   );
  875 | 
  876 |   await updatedToast;
  877 | 
  878 |   await expect(
  879 |     this.systemUsersHeading
  880 |   ).toBeVisible();
  881 | }
  882 | 
  883 | }
  884 | 
```