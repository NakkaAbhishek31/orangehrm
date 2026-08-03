# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> TC_ADMIN_041 - Admin should navigate to the System Users page @smoke @navigation @regression
- Location: tests\Admin\admin-users.spec.ts:4:5

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Add', exact: true })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('button', { name: 'Add', exact: true })

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
      - paragraph: Leks pulicherla
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem:
        - text: User Management 
        - menu:
          - listitem:
            - menuitem "Users"
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
- text: (13) Records Found
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
    - row " Admin Admin Leks pulicherla Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "Leks pulicherla"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " amelia01 Admin Amelia Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "amelia01"
      - cell "Admin"
      - cell "Amelia Brown"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " autoUser312774 ESS A8DCo 010Z Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "autoUser312774"
      - cell "ESS"
      - cell "A8DCo 010Z"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " autoUser509590 ESS A8DCo 010Z Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "autoUser509590"
      - cell "ESS"
      - cell "A8DCo 010Z"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " autoUser821410 ESS A8DCo 010Z Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "autoUser821410"
      - cell "ESS"
      - cell "A8DCo 010Z"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Clifton.Johns Admin A8DCo 010Z Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Clifton.Johns"
      - cell "Admin"
      - cell "A8DCo 010Z"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " dsnkd Admin A8DCo 010Z Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "dsnkd"
      - cell "Admin"
      - cell "A8DCo 010Z"
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
    - row " l94954 Admin Ranga Akunuri Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "l94954"
      - cell "Admin"
      - cell "Ranga Akunuri"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ssssssssss ESS A8DCo 010Z Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ssssssssss"
      - cell "ESS"
      - cell "A8DCo 010Z"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " user_u7NBBo Admin Ranga Akunuri Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "user_u7NBBo"
      - cell "Admin"
      - cell "Ranga Akunuri"
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
  1  | import { expect } from "@playwright/test";
  2  | import { test } from "../../fixtures/baseTest";
  3  | 
  4  | test("TC_ADMIN_041 - Admin should navigate to the System Users page @smoke @navigation @regression", async ({
  5  |   page,
  6  |   loginPage,
  7  |   navigationPage,
  8  |   adminPage,
  9  | }) => {
  10 |   // Login using Admin credentials.
  11 |   await loginPage.visitPage();
  12 |   await loginPage.login("Admin", "admin123");
  13 |   await loginPage.verifyLoginSuccessful();
  14 |   // Click Admin in the main navigation.
  15 |   await navigationPage.gotoAdmin();
  16 |   // Navigate to User Management → Users.
  17 |   await adminPage.gotoUserManagementUsers();
  18 | 
  19 |   await expect(page).toHaveURL(/admin\/viewSystemUsers/);
  20 | 
  21 |   // Verify the System Users heading.
  22 |   await expect(adminPage.systemUsersHeading).toBeVisible();
  23 |   // Verify the Username filter.
  24 |   await expect(adminPage.usernameInput).toBeVisible();
  25 |   // Verify the User Role filter.
  26 |   await expect(adminPage.userRoleDropdown).toBeVisible();
  27 |   // Verify the Employee Name filter.
  28 |   await expect(adminPage.employeeNameInput).toBeVisible();
  29 |   // Verify the Status filter.
  30 |   await expect(adminPage.statusDropdown).toBeVisible();
  31 |   // Verify Search, Reset, and Add buttons.
  32 |   await expect(adminPage.searchButton).toBeVisible();
  33 |   await expect(adminPage.resetButton).toBeVisible();
> 34 |   await expect(adminPage.addButton).toBeVisible();
     |                                     ^ Error: expect(locator).toBeVisible() failed
  35 |   // Verify the System Users table is visible.
  36 |   await expect(adminPage.systemUsersTable).toBeVisible();
  37 | });
  38 | 
  39 | test('TC_ADMIN_042 - Admin should search for a system user by username @positive @search @regression',
  40 |   async ({ loginPage, navigationPage, adminPage }) => {
  41 |     await loginPage.visitPage();
  42 |     await loginPage.login('Admin', 'admin123');
  43 |     await loginPage.verifyLoginSuccessful();
  44 | 
  45 |     await navigationPage.gotoAdmin();
  46 |     await adminPage.gotoUserManagementUsers();
  47 | 
  48 |     await adminPage.searchSystemUsers({
  49 |       username: 'Admin',
  50 |     });
  51 | 
  52 |     await adminPage.verifySystemUserResult({
  53 |       username: 'Admin',
  54 |     });
  55 | 
  56 |     await adminPage.resetSystemUserFilters();
  57 |   }
  58 | );
  59 | 
```