# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Admin\admin-users.spec.ts >> Admin - System Users >> TC_ADMIN_045 - Admin should filter system users by enabled status @positive @filter @regression
- Location: tests\Admin\admin-users.spec.ts:95:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('.oxd-table-body .oxd-table-card').first().locator('.oxd1-table-cell').nth(4)
Expected: "Enabled"
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" with timeout 10000ms
  - waiting for locator('.oxd-table-body .oxd-table-card').first().locator('.oxd1-table-cell').nth(4)

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
      - paragraph: Nguyễn Đức
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
- text: Status Enabled 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (44) Records Found
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
    - row " Admin Admin Nguyễn Đức Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "Nguyễn Đức"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " attack ESS ABC Abhinay Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "attack"
      - cell "ESS"
      - cell "ABC Abhinay"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " auraqa_1786450904074 Admin A8DCo 010Z Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "auraqa_1786450904074"
      - cell "Admin"
      - cell "A8DCo 010Z"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " auraqa_1786453443699 Admin A8DCo 010Z Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "auraqa_1786453443699"
      - cell "Admin"
      - cell "A8DCo 010Z"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " candidate_1786450103861 Admin James Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "candidate_1786450103861"
      - cell "Admin"
      - cell "James Brown"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " candidate_1786450741035 Admin James Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "candidate_1786450741035"
      - cell "Admin"
      - cell "James Brown"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " candidate_1786451203778 Admin James Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "candidate_1786451203778"
      - cell "Admin"
      - cell "James Brown"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " candidate_1786451485115 Admin James Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "candidate_1786451485115"
      - cell "Admin"
      - cell "James Brown"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " candidate_1786451892443 Admin James Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "candidate_1786451892443"
      - cell "Admin"
      - cell "James Brown"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " candidate_1786453012050 Admin James Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "candidate_1786453012050"
      - cell "Admin"
      - cell "James Brown"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " candidate_1786453664271 Admin James Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "candidate_1786453664271"
      - cell "Admin"
      - cell "James Brown"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ess1786453350789413 ESS Auto1786453350789413 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ess1786453350789413"
      - cell "ESS"
      - cell "Auto1786453350789413 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ess1786453397200280 ESS Auto1786453397200280 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ess1786453397200280"
      - cell "ESS"
      - cell "Auto1786453397200280 User"
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
    - row " helloo ESS sww test Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "helloo"
      - cell "ESS"
      - cell "sww test"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " jamesbrown4863 Admin James Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "jamesbrown4863"
      - cell "Admin"
      - cell "James Brown"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " jamesbrown5008 ESS James Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "jamesbrown5008"
      - cell "ESS"
      - cell "James Brown"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " jamesbrown5141 ESS James Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "jamesbrown5141"
      - cell "ESS"
      - cell "James Brown"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " jamesbrown5405 Admin James Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "jamesbrown5405"
      - cell "Admin"
      - cell "James Brown"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " jamesbrown5453 ESS James Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "jamesbrown5453"
      - cell "ESS"
      - cell "James Brown"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " jamesbrown5781 ESS James Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "jamesbrown5781"
      - cell "ESS"
      - cell "James Brown"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " jamesbrown6120 ESS James Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "jamesbrown6120"
      - cell "ESS"
      - cell "James Brown"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " jamesbrown6764 Admin James Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "jamesbrown6764"
      - cell "Admin"
      - cell "James Brown"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " jamesbrown6996 ESS James Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "jamesbrown6996"
      - cell "ESS"
      - cell "James Brown"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " jamesbrown8218 ESS James Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "jamesbrown8218"
      - cell "ESS"
      - cell "James Brown"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " jamesbrown8747 Admin James Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "jamesbrown8747"
      - cell "Admin"
      - cell "James Brown"
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
    - row " manda user Admin Nguyễn Đức Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "manda user"
      - cell "Admin"
      - cell "Nguyễn Đức"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Mithilesh11458 ESS Mithilesh Vallapadas Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Mithilesh11458"
      - cell "ESS"
      - cell "Mithilesh Vallapadas"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Mithilesh28433 ESS Mithilesh Vallapadas Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Mithilesh28433"
      - cell "ESS"
      - cell "Mithilesh Vallapadas"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Mithilesh49673 ESS Mithilesh Vallapadas Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Mithilesh49673"
      - cell "ESS"
      - cell "Mithilesh Vallapadas"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Mithilesh54764 ESS Mithilesh Vallapadas Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Mithilesh54764"
      - cell "ESS"
      - cell "Mithilesh Vallapadas"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Mithilesh6199 ESS Mithilesh Vallapadas Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Mithilesh6199"
      - cell "ESS"
      - cell "Mithilesh Vallapadas"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " OtisKeeling88297 ESS Elias Wyman Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "OtisKeeling88297"
      - cell "ESS"
      - cell "Elias Wyman"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " pallove@gmail.com Admin Pallove Jain Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "pallove@gmail.com"
      - cell "Admin"
      - cell "Pallove Jain"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " QAEngineer Admin Abhinay ABC Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "QAEngineer"
      - cell "Admin"
      - cell "Abhinay ABC"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " qauser_7b7c9365 ESS Sumana Testuser Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "qauser_7b7c9365"
      - cell "ESS"
      - cell "Sumana Testuser"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " qa_agent_042 ESS Orange Test Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "qa_agent_042"
      - cell "ESS"
      - cell "Orange Test"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Sudhir@gmail.com ESS Sudhir Kalmegh Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Sudhir@gmail.com"
      - cell "ESS"
      - cell "Sudhir Kalmegh"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " test_user Admin A8DCo 010Z Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "test_user"
      - cell "Admin"
      - cell "A8DCo 010Z"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " User1786451003716 Admin Amelia Brown Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "User1786451003716"
      - cell "Admin"
      - cell "Amelia Brown"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " user17864529641154 ESS Auto1786452964115742 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "user17864529641154"
      - cell "ESS"
      - cell "Auto1786452964115742 User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " user1786453048790522 ESS Auto1786453048790771 User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "user1786453048790522"
      - cell "ESS"
      - cell "Auto1786453048790771 User"
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
  8   |   d: { firstNamePrefix: string; middleName: string; lastName: string },
  9   |   value = unique(),
  10  | ) => ({
  11  |   firstName: `${d.firstNamePrefix}${value}`,
  12  |   middleName: d.middleName,
  13  |   lastName: d.lastName,
  14  | });
  15  | 
  16  | test.describe("Admin - System Users", () => {
  17  |   test.beforeEach(async ({ loginPage }) => {
  18  |     await loginPage.visitPage();
  19  |     await loginPage.login(
  20  |       loginData.validAdmin.username,
  21  |       loginData.validAdmin.password,
  22  |     );
  23  |     await loginPage.verifyLoginSuccessful();
  24  |   });
  25  | 
  26  |   test("TC_ADMIN_041 - Admin should navigate to the System Users page @smoke @navigation @regression", async ({
  27  |     page,
  28  |     navigationPage,
  29  |     adminPage,
  30  |   }) => {
  31  |     await navigationPage.gotoAdmin();
  32  |     await adminPage.gotoUserManagementUsers();
  33  |     await expect(page).toHaveURL(
  34  |       new RegExp(adminData.TC_ADMIN_041.expectedUrlPattern),
  35  |     );
  36  |     await expect(adminPage.systemUsersHeading).toBeVisible();
  37  |     await expect(adminPage.usernameInput).toBeVisible();
  38  |     await expect(adminPage.userRoleDropdown).toBeVisible();
  39  |     await expect(adminPage.employeeNameInput).toBeVisible();
  40  |     await expect(adminPage.statusDropdown).toBeVisible();
  41  |     await expect(adminPage.searchButton).toBeVisible();
  42  |     await expect(adminPage.resetButton).toBeVisible();
  43  |     await expect(adminPage.addButton).toBeVisible();
  44  |     await expect(adminPage.systemUsersTable).toBeVisible();
  45  |   });
  46  | 
  47  |   test("TC_ADMIN_042 - Admin should search for a system user by username @positive @search @regression", async ({
  48  |     navigationPage,
  49  |     adminPage,
  50  |   }) => {
  51  |     const data = adminData.TC_ADMIN_042;
  52  |     await navigationPage.gotoAdmin();
  53  |     await adminPage.gotoUserManagementUsers();
  54  |     await adminPage.searchSystemUsers({ username: data.username });
  55  |     await adminPage.verifySystemUserResult({ username: data.username });
  56  |     await adminPage.resetSystemUserFilters();
  57  |   });
  58  | 
  59  |   test("TC_ADMIN_043 - Admin should see no records for a nonexistent username @negative @search @regression", async ({
  60  |     navigationPage,
  61  |     adminPage,
  62  |   }) => {
  63  |     const data = adminData.TC_ADMIN_043;
  64  |     const username = `${data.usernamePrefix}${unique()}`;
  65  |     await navigationPage.gotoAdmin();
  66  |     await adminPage.gotoUserManagementUsers();
  67  |     await adminPage.searchSystemUsers({ username });
  68  |     await expect(adminPage.noRecordsFound).toBeVisible();
  69  |     await expect(adminPage.userRows).toHaveCount(0);
  70  |     await expect(adminPage.usernameInput).toHaveValue(username);
  71  |     await adminPage.resetSystemUserFilters();
  72  |     await expect(adminPage.usernameInput).toHaveValue(data.emptyValue);
  73  |   });
  74  | 
  75  |   test("TC_ADMIN_044 - Admin should filter system users by user role @positive @filter @regression", async ({
  76  |     navigationPage,
  77  |     adminPage,
  78  |   }) => {
  79  |     const data = adminData.TC_ADMIN_044;
  80  |     await navigationPage.gotoAdmin();
  81  |     await adminPage.gotoUserManagementUsers();
  82  |     await adminPage.searchSystemUsers({ userRole: data.userRole });
  83  |     const count = await adminPage.userRows.count();
  84  |     expect(count).toBeGreaterThan(0);
  85  |     for (let i = 0; i < count; i++)
  86  |       await expect(
  87  |         adminPage.userRows.nth(i).locator(".oxd-table-cell").nth(2),
  88  |       ).toHaveText(data.userRole);
  89  |     await adminPage.resetSystemUserFilters();
  90  |     await expect(adminPage.userRoleDropdown).toContainText(
  91  |       data.defaultDropdownValue,
  92  |     );
  93  |   });
  94  | 
  95  |   test("TC_ADMIN_045 - Admin should filter system users by enabled status @positive @filter @regression", async ({
  96  |     navigationPage,
  97  |     adminPage,
  98  |   }) => {
  99  |     const data = adminData.TC_ADMIN_045;
  100 |     await navigationPage.gotoAdmin();
  101 |     await adminPage.gotoUserManagementUsers();
  102 |     await adminPage.searchSystemUsers({ status: data.status });
  103 |     const count = await adminPage.userRows.count();
  104 |     expect(count).toBeGreaterThan(0);
  105 |     for (let i = 0; i < count; i++)
  106 |       await expect(
  107 |         adminPage.userRows.nth(i).locator(".oxd1-table-cell").nth(4),
> 108 |       ).toHaveText(data.status);
      |         ^ Error: expect(locator).toHaveText(expected) failed
  109 |     await adminPage.resetSystemUserFilters();
  110 |     await expect(adminPage.statusDropdown).toContainText(
  111 |       data.defaultDropdownValue,
  112 |     );
  113 |   });
  114 | 
  115 |   test("TC_ADMIN_046 - Admin should search using username, role, and status filters @positive @filter @regression", async ({
  116 |     navigationPage,
  117 |     adminPage,
  118 |   }) => {
  119 |     const data = adminData.TC_ADMIN_046;
  120 |     await navigationPage.gotoAdmin();
  121 |     await adminPage.gotoUserManagementUsers();
  122 |     await adminPage.searchSystemUsers(data.filters);
  123 |     await expect(adminPage.userRows.first()).toBeVisible();
  124 |     await adminPage.resetSystemUserFilters();
  125 |     await expect(adminPage.usernameInput).toHaveValue(data.emptyValue);
  126 |     await expect(adminPage.userRoleDropdown).toContainText(
  127 |       data.defaultDropdownValue,
  128 |     );
  129 |     await expect(adminPage.statusDropdown).toContainText(
  130 |       data.defaultDropdownValue,
  131 |     );
  132 |   });
  133 | 
  134 |   test("TC_ADMIN_047 - Admin should add a new ESS system user successfully @positive @create @regression", async ({
  135 |     navigationPage,
  136 |     pimPage,
  137 |     adminPage,
  138 |   }) => {
  139 |     const data = adminData.TC_ADMIN_047;
  140 |     const value = unique();
  141 |     const employee = employeeFrom(data.employee, value);
  142 |     const username = `${data.systemUser.usernamePrefix}${value}`;
  143 |     const employeeName = `${employee.firstName} ${employee.middleName} ${employee.lastName}`;
  144 |     await navigationPage.gotoPIM();
  145 |     await pimPage.gotoAddEmployee();
  146 |     const employeeId = await pimPage.addEmployee(employee);
  147 |     await navigationPage.gotoAdmin();
  148 |     await adminPage.gotoUserManagementUsers();
  149 |     await adminPage.gotoAddSystemUser();
  150 |     await adminPage.fillSystemUserForm({
  151 |       ...data.systemUser,
  152 |       employeeName,
  153 |       username,
  154 |     });
  155 |     await adminPage.saveSystemUser();
  156 |     await adminPage.searchSystemUsers({ username });
  157 |     await adminPage.verifySystemUserResult({
  158 |       username,
  159 |       userRole: data.systemUser.userRole,
  160 |       employeeName: `${employee.firstName} ${employee.lastName}`,
  161 |       status: data.systemUser.status,
  162 |     });
  163 |     await adminPage.deleteSystemUserByUsername(username);
  164 |     await navigationPage.gotoPIM();
  165 |     await pimPage.gotoEmployeeList();
  166 |     await pimPage.filterEmployeeList({ employeeId });
  167 |     await pimPage.clickOnFilterSearch();
  168 |     await pimPage.deleteEmployeeById(employeeId);
  169 |   });
  170 | 
  171 |   test("TC_ADMIN_048 - Required validation should appear when System User fields are empty @negative @validation @regression", async ({
  172 |     page,
  173 |     navigationPage,
  174 |     adminPage,
  175 |   }) => {
  176 |     const data = adminData.TC_ADMIN_048;
  177 |     await navigationPage.gotoAdmin();
  178 |     await adminPage.gotoUserManagementUsers();
  179 |     await adminPage.gotoAddSystemUser();
  180 |     await adminPage.addUserSaveButton.click();
  181 |     await expect(adminPage.validationMessages).toHaveCount(
  182 |       data.expectedValidations.length,
  183 |     );
  184 |     await expect(adminPage.validationMessages).toHaveText(
  185 |       data.expectedValidations,
  186 |     );
  187 |     await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern));
  188 |   });
  189 | 
  190 |   test("TC_ADMIN_049 - Admin should cancel adding a new System User @negative @cancel @regression", async ({
  191 |     page,
  192 |     navigationPage,
  193 |     adminPage,
  194 |   }) => {
  195 |     const data = adminData.TC_ADMIN_049;
  196 |     const username = `${data.usernamePrefix}${unique()}`;
  197 |     await navigationPage.gotoAdmin();
  198 |     await adminPage.gotoUserManagementUsers();
  199 |     await adminPage.gotoAddSystemUser();
  200 |     await adminPage.addUsernameInput.fill(username);
  201 |     await adminPage.addPasswordInput.fill(data.password);
  202 |     await adminPage.addConfirmPasswordInput.fill(data.password);
  203 |     await adminPage.addUserCancelButton.click();
  204 |     await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern));
  205 |     await adminPage.searchSystemUsers({ username });
  206 |     await expect(adminPage.userRows).toHaveCount(0);
  207 |   });
  208 | 
```