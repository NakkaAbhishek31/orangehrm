# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> PIM Employee >> TC_PIM_008 - Admin should upload an employee profile picture @positive @upload @regression
- Location: tests\PIM\pim-employee.spec.ts:71:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Personal Details' })
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 10000ms
  - waiting for getByRole('heading', { name: 'Personal Details' })

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
  - heading "PIM" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: mandaa user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Add Employee" [level=6]
- separator
- button "Choose File"
- img "profile picture"
- button ""
- paragraph: "Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px"
- text: Employee Full Name*
- textbox "First Name": Auto1786452603822817
- textbox "Middle Name": Test
- textbox "Last Name": User
- text: Employee Id
- textbox: "0488"
- text: Employee Id already exists
- separator
- paragraph: Create Login Details
- checkbox
- separator
- paragraph: "* Required"
- button "Cancel"
- button "Save"
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1   | import { expect } from "@playwright/test";
  2   | import { test } from "../../fixtures/baseTest";
  3   | import path from "node:path";
  4   | import loginData from "../../test-data/login.data.json";
  5   | import pimData from "../../test-data/pimEmployee.data.json";
  6   | 
  7   | const unique = () => `${Date.now()}${Math.floor(Math.random() * 1000)}`;
  8   | const employeeFrom = (d: {
  9   |   firstNamePrefix: string;
  10  |   middleName: string;
  11  |   lastName: string;
  12  | }) => ({
  13  |   firstName: `${d.firstNamePrefix}${unique()}`,
  14  |   middleName: d.middleName,
  15  |   lastName: d.lastName,
  16  | });
  17  | 
  18  | test.describe("PIM Employee", () => {
  19  |   test.beforeEach(async ({ loginPage }) => {
  20  |     await loginPage.visitPage();
  21  |     await loginPage.login(
  22  |       loginData.validAdmin.username,
  23  |       loginData.validAdmin.password,
  24  |     );
  25  |     await loginPage.verifyLoginSuccessful();
  26  |   });
  27  | 
  28  |   test("TC_PIM_001 - Admin should add a new employee successfully @positive @regression", async ({
  29  |     page,
  30  |     navigationPage,
  31  |     pimPage,
  32  |   }) => {
  33  |     const employee = employeeFrom(pimData.TC_PIM_001.employee);
  34  |     await navigationPage.gotoPIM();
  35  |     await pimPage.gotoAddEmployee();
  36  |     const employeeId = await pimPage.addEmployee(employee);
  37  |     await expect(page).toHaveURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  38  |       timeout: 15_000,
  39  |     });
  40  |     await expect(pimPage.personalDetailsHeading).toBeVisible();
  41  |     await expect(pimPage.firstnameInput).toHaveValue(employee.firstName);
  42  |     await expect(pimPage.middlenameInput).toHaveValue(employee.middleName);
  43  |     await expect(pimPage.lastnameInput).toHaveValue(employee.lastName);
  44  |     await expect(pimPage.employeeID).toHaveValue(employeeId);
  45  |   });
  46  | 
  47  |   test("TC_PIM_006 - Admin should update employee personal details @positive @regression", async ({
  48  |     page,
  49  |     navigationPage,
  50  |     pimPage,
  51  |   }) => {
  52  |     const data = pimData.TC_PIM_006;
  53  |     const employee = employeeFrom(data.employee);
  54  |     await navigationPage.gotoPIM();
  55  |     await pimPage.gotoAddEmployee();
  56  |     const employeeId = await pimPage.addEmployee(employee);
  57  |     await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  58  |       timeout: 20_000,
  59  |     });
  60  |     await pimPage.updatePersonalDetails(data.updatedEmployee);
  61  |     await expect(pimPage.firstnameInput).toHaveValue(employee.firstName);
  62  |     await expect(pimPage.middlenameInput).toHaveValue(
  63  |       data.updatedEmployee.middleName,
  64  |     );
  65  |     await expect(pimPage.lastnameInput).toHaveValue(
  66  |       data.updatedEmployee.lastName,
  67  |     );
  68  |     await expect(pimPage.employeeID).toHaveValue(employeeId);
  69  |   });
  70  | 
  71  |   test("TC_PIM_008 - Admin should upload an employee profile picture @positive @upload @regression", async ({
  72  |     navigationPage,
  73  |     pimPage,
  74  |   }) => {
  75  |     const data = pimData.TC_PIM_008;
  76  |     const employee = employeeFrom(data.employee);
  77  |     await navigationPage.gotoPIM();
  78  |     await pimPage.gotoAddEmployee();
  79  |     const employeeId = await pimPage.addEmployee({
  80  |       ...employee,
  81  |       profilePicturePath: path.resolve(data.profilePicturePath),
  82  |     });
> 83  |     await expect(pimPage.personalDetailsHeading).toBeVisible();
      |                                                  ^ Error: expect(locator).toBeVisible() failed
  84  |     await expect(pimPage.profilePicturePreview).toBeVisible();
  85  |     await pimPage.gotoEmployeeList();
  86  |     await pimPage.filterEmployeeList({ employeeId });
  87  |     await pimPage.clickOnFilterSearch();
  88  |     await pimPage.verifyEmployeeSearchResult(
  89  |       employeeId,
  90  |       employee.firstName,
  91  |       employee.lastName,
  92  |     );
  93  |     await pimPage.deleteEmployeeById(employeeId);
  94  |     await pimPage.filterEmployeeList({ employeeId });
  95  |     await pimPage.clickOnFilterSearch();
  96  |     await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  97  |   });
  98  | 
  99  |   test("TC_PIM_009 - Invalid profile picture format should be rejected @negative @upload @validation", async ({
  100 |     navigationPage,
  101 |     pimPage,
  102 |   }) => {
  103 |     await navigationPage.gotoPIM();
  104 |     await pimPage.gotoAddEmployee();
  105 |     await expect(pimPage.profilePictureInput).toBeAttached();
  106 |     await pimPage.verifyInvalidProfilePicture(
  107 |       path.resolve(pimData.TC_PIM_009.invalidProfilePicturePath),
  108 |     );
  109 |   });
  110 | 
  111 |   test("TC_PIM_023 - Admin should cancel adding a new employee @negative @regression", async ({
  112 |     navigationPage,
  113 |     pimPage,
  114 |   }) => {
  115 |     const employee = employeeFrom(pimData.TC_PIM_023.employee);
  116 |     await navigationPage.gotoPIM();
  117 |     await pimPage.gotoAddEmployee();
  118 |     await pimPage.fillAddEmployeeForm(employee);
  119 |     await pimPage.cancelAddingEmployee();
  120 |   });
  121 | 
  122 |   for (const id of ["TC_PIM_024", "TC_PIM_025", "TC_PIM_026"] as const) {
  123 |     test(`${id} - Required employee-name validation @negative @validation @regression`, async ({
  124 |       page,
  125 |       navigationPage,
  126 |       pimPage,
  127 |     }) => {
  128 |       const data = pimData[id];
  129 |       const raw = data.employee;
  130 |       const employee = {
  131 |         firstName:
  132 |           "firstNamePrefix" in raw
  133 |             ? `${raw.firstNamePrefix}${unique()}`
  134 |             : raw.firstName,
  135 |         middleName: raw.middleName,
  136 |         lastName:
  137 |           "lastNamePrefix" in raw
  138 |             ? `${raw.lastNamePrefix}${unique()}`
  139 |             : raw.lastName,
  140 |       };
  141 |       await navigationPage.gotoPIM();
  142 |       await pimPage.gotoAddEmployee();
  143 |       await pimPage.saveEmployeeWithoutRequiredDetails(employee);
  144 |       await expect(pimPage.requiredValidationMessages).toHaveCount(
  145 |         data.expectedValidations.length,
  146 |       );
  147 |       await expect(pimPage.requiredValidationMessages).toHaveText(
  148 |         data.expectedValidations,
  149 |       );
  150 |       await expect(page).toHaveURL(/pim\/addEmployee/);
  151 |     });
  152 |   }
  153 | 
  154 |   test("TC_PIM_027 - Duplicate validation should appear for an existing employee ID @negative @validation @regression", async ({
  155 |     page,
  156 |     navigationPage,
  157 |     pimPage,
  158 |   }) => {
  159 |     const data = pimData.TC_PIM_027;
  160 |     const employee = employeeFrom(data.employee);
  161 |     const duplicate = employeeFrom(data.duplicateEmployee);
  162 |     await navigationPage.gotoPIM();
  163 |     await pimPage.gotoAddEmployee();
  164 |     const employeeId = await pimPage.addEmployee(employee);
  165 |     await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  166 |       timeout: 15_000,
  167 |     });
  168 |     await pimPage.gotoAddEmployee();
  169 |     await pimPage.fillAddEmployeeForm({ ...duplicate, employeeId });
  170 |     await expect(pimPage.employeeIdValidation).toHaveText(data.expectedError);
  171 |     await pimPage.cancelAddingEmployee();
  172 |     await pimPage.filterEmployeeList({ employeeId });
  173 |     await pimPage.clickOnFilterSearch();
  174 |     await pimPage.deleteEmployeeById(employeeId);
  175 |   });
  176 | 
  177 |   test("TC_PIM_030 - Admin should create an employee with login credentials @positive @account @regression", async ({
  178 |     page,
  179 |     navigationPage,
  180 |     pimPage,
  181 |   }) => {
  182 |     const data = pimData.TC_PIM_030;
  183 |     const employee = employeeFrom(data.employee);
```