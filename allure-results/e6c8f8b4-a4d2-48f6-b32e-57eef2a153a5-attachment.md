# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee-list.spec.ts >> PIM Employee List >> TC_PIM_002 - Admin should search for an employee by employee ID @positive @regression
- Location: tests\PIM\pim-employee-list.spec.ts:28:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Personal Details' })
Expected: visible
Timeout: 20000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 20000ms
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
      - paragraph: manda user
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
- textbox "First Name": Auto1786457105874993
- textbox "Middle Name": Test
- textbox "Last Name": User
- text: Employee Id
- textbox: "0382"
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
  3   | import loginData from "../../test-data/login.data.json";
  4   | import employeeListData from "../../test-data/pimEmployeeList.data.json";
  5   | 
  6   | type EmployeeTemplate = {
  7   |   firstNamePrefix: string;
  8   |   middleName: string;
  9   |   lastName: string;
  10  | };
  11  | 
  12  | const createEmployee = (template: EmployeeTemplate) => ({
  13  |   firstName: `${template.firstNamePrefix}${Date.now()}${Math.floor(Math.random() * 1000)}`,
  14  |   middleName: template.middleName,
  15  |   lastName: template.lastName,
  16  | });
  17  | 
  18  | test.describe("PIM Employee List", () => {
  19  |   test.beforeEach(async ({ loginPage }) => {
  20  |     await loginPage.visitPage();
  21  |     await loginPage.login(
  22  |       loginData.validAdmin.username,
  23  |       loginData.validAdmin.password,
  24  |     );
  25  |     await loginPage.verifyLoginSuccessful();
  26  |   });
  27  | 
  28  |   test("TC_PIM_002 - Admin should search for an employee by employee ID @positive @regression", async ({
  29  |     navigationPage,
  30  |     pimPage,
  31  |   }) => {
  32  |     const data = employeeListData.TC_PIM_002;
  33  |     const employee = createEmployee(data.employee);
  34  | 
  35  |     await navigationPage.gotoPIM();
  36  |     await pimPage.gotoAddEmployee();
  37  |     const employeeId = await pimPage.addEmployee(employee);
  38  | 
> 39  |     await expect(pimPage.personalDetailsHeading).toBeVisible();
      |                                                  ^ Error: expect(locator).toBeVisible() failed
  40  |     await expect(pimPage.firstnameInput).toHaveValue(employee.firstName);
  41  |     await expect(pimPage.middlenameInput).toHaveValue(employee.middleName);
  42  |     await expect(pimPage.lastnameInput).toHaveValue(employee.lastName);
  43  | 
  44  |     await pimPage.gotoEmployeeList();
  45  |     await pimPage.filterEmployeeList({ employeeId });
  46  |     await pimPage.clickOnFilterSearch();
  47  |     await pimPage.verifyEmployeeSearchResult(
  48  |       employeeId,
  49  |       employee.firstName,
  50  |       employee.lastName,
  51  |     );
  52  |   });
  53  | 
  54  |   test("TC_PIM_003 - No records should appear for a nonexistent employee ID @negative @regression", async ({
  55  |     navigationPage,
  56  |     pimPage,
  57  |   }) => {
  58  |     const data = employeeListData.TC_PIM_003;
  59  | 
  60  |     await navigationPage.gotoPIM();
  61  |     await pimPage.gotoEmployeeList();
  62  |     await pimPage.filterEmployeeList({
  63  |       employeeId: data.nonexistentEmployeeId,
  64  |     });
  65  |     await pimPage.clickOnFilterSearch();
  66  |     await pimPage.verifyNoEmployeeRecordsFound(data.nonexistentEmployeeId);
  67  |   });
  68  | 
  69  |   test("TC_PIM_004 - Admin should search for an employee by name @positive @regression", async ({
  70  |     page,
  71  |     navigationPage,
  72  |     pimPage,
  73  |   }) => {
  74  |     const data = employeeListData.TC_PIM_004;
  75  |     const employee = createEmployee(data.employee);
  76  | 
  77  |     await navigationPage.gotoPIM();
  78  |     await pimPage.gotoAddEmployee();
  79  |     const employeeId = await pimPage.addEmployee(employee);
  80  | 
  81  |     await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  82  |       timeout: 55_000,
  83  |     });
  84  | 
  85  |     await pimPage.gotoEmployeeList();
  86  |     await pimPage.filterEmployeeList({ employeeName: employee.firstName });
  87  |     await pimPage.clickOnFilterSearch();
  88  |     await pimPage.verifyEmployeeSearchResult(
  89  |       employeeId,
  90  |       employee.firstName,
  91  |       employee.lastName,
  92  |     );
  93  |   });
  94  | 
  95  |   test("TC_PIM_005 - Admin should search using employee ID and employee name @positive @regression", async ({
  96  |     page,
  97  |     navigationPage,
  98  |     pimPage,
  99  |   }) => {
  100 |    test.setTimeout(120_000);
  101 |     const data = employeeListData.TC_PIM_005;
  102 |     const employee = createEmployee(data.employee);
  103 | 
  104 |     await navigationPage.gotoPIM();
  105 |     await pimPage.gotoAddEmployee();
  106 |     const employeeId = await pimPage.addEmployee(employee);
  107 | 
  108 |     await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  109 |       timeout: 15_000,
  110 |     });
  111 | 
  112 |     await pimPage.gotoEmployeeList();
  113 |     await pimPage.filterEmployeeList({
  114 |       employeeName: employee.firstName,
  115 |       employeeId,
  116 |     });
  117 |     await pimPage.clickOnFilterSearch();
  118 |     await pimPage.verifyEmployeeSearchResult(
  119 |       employeeId,
  120 |       employee.firstName,
  121 |       employee.lastName,
  122 |     );
  123 |   });
  124 | 
  125 |   test("TC_PIM_007 - Admin should delete an employee successfully @positive @regression", async ({
  126 |     page,
  127 |     navigationPage,
  128 |     pimPage,
  129 |   }) => {
  130 |     const data = employeeListData.TC_PIM_007;
  131 |     const employee = createEmployee(data.employee);
  132 | 
  133 |     await navigationPage.gotoPIM();
  134 |     await pimPage.gotoAddEmployee();
  135 |     const employeeId = await pimPage.addEmployee(employee);
  136 | 
  137 |     await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  138 |       timeout: 15_000,
  139 |     });
```