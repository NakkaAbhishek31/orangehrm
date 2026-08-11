# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> PIM Employee >> TC_PIM_024 - Required employee-name validation @negative @validation @regression
- Location: tests\PIM\pim-employee.spec.ts:82:9

# Error details

```
Error: expect(locator).toHaveCount(expected) failed

Locator:  locator('.oxd-input-field-error-message')
Expected: 2
Received: 3
Timeout:  10000ms

Call log:
  - Expect "toHaveCount" with timeout 10000ms
  - waiting for locator('.oxd-input-field-error-message')
    6 × locator resolved to 0 elements
      - unexpected value "0"
    17 × locator resolved to 3 elements
       - unexpected value "3"

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
              - paragraph [ref=f3e127]: mandaa user
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
                  - generic [ref=f3e169]:
                    - textbox "First Name" [ref=f3e171]
                    - generic [ref=f3e172]: Required
                  - textbox "Middle Name" [ref=f3e175]: Test
                  - generic [ref=f3e176]:
                    - textbox "Last Name" [ref=f3e178]
                    - generic [ref=f3e179]: Required
              - generic [ref=f3e182]:
                - generic [ref=f3e183]: Employee Id
                - textbox [ref=f3e186]: "0476"
                - generic [ref=f3e187]: Employee Id already exists
            - separator [ref=f3e188]
            - generic [ref=f3e189]:
              - paragraph [ref=f3e190]: Create Login Details
              - checkbox [ref=f3e193]
        - separator [ref=f3e195]
        - generic [ref=f3e196]:
          - paragraph [ref=f3e197]: "* Required"
          - button "Cancel" [ref=f3e198] [cursor=pointer]
          - button "Save" [active] [ref=f3e199] [cursor=pointer]
    - generic [ref=f3e200]:
      - paragraph [ref=f3e201]: OrangeHRM OS 5.9
      - paragraph [ref=f3e202]:
        - text: © 2005 - 2026
        - link "OrangeHRM, Inc" [ref=f3e203] [cursor=pointer]:
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
  8   | const employeeFrom = (d: { firstNamePrefix: string; middleName: string; lastName: string }) => ({
  9   |   firstName: `${d.firstNamePrefix}${unique()}`,
  10  |   middleName: d.middleName,
  11  |   lastName: d.lastName,
  12  | });
  13  | 
  14  | test.describe("PIM Employee", () => {
  15  |   test.beforeEach(async ({ loginPage }) => {
  16  |     await loginPage.visitPage();
  17  |     await loginPage.login(loginData.validAdmin.username, loginData.validAdmin.password);
  18  |     await loginPage.verifyLoginSuccessful();
  19  |   });
  20  | 
  21  |   test("TC_PIM_001 - Admin should add a new employee successfully @positive @regression", async ({ page, navigationPage, pimPage }) => {
  22  |     const employee = employeeFrom(pimData.TC_PIM_001.employee);
  23  |     await navigationPage.gotoPIM();
  24  |     await pimPage.gotoAddEmployee();
  25  |     const employeeId = await pimPage.addEmployee(employee);
  26  |     await expect(page).toHaveURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, { timeout: 15_000 });
  27  |     await expect(pimPage.personalDetailsHeading).toBeVisible();
  28  |     await expect(pimPage.firstnameInput).toHaveValue(employee.firstName);
  29  |     await expect(pimPage.middlenameInput).toHaveValue(employee.middleName);
  30  |     await expect(pimPage.lastnameInput).toHaveValue(employee.lastName);
  31  |     await expect(pimPage.employeeID).toHaveValue(employeeId);
  32  |   });
  33  | 
  34  |   test("TC_PIM_006 - Admin should update employee personal details @positive @regression", async ({ page, navigationPage, pimPage }) => {
  35  |     const data = pimData.TC_PIM_006;
  36  |     const employee = employeeFrom(data.employee);
  37  |     await navigationPage.gotoPIM();
  38  |     await pimPage.gotoAddEmployee();
  39  |     const employeeId = await pimPage.addEmployee(employee);
  40  |     await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, { timeout: 20_000 });
  41  |     await pimPage.updatePersonalDetails(data.updatedEmployee);
  42  |     await expect(pimPage.firstnameInput).toHaveValue(employee.firstName);
  43  |     await expect(pimPage.middlenameInput).toHaveValue(data.updatedEmployee.middleName);
  44  |     await expect(pimPage.lastnameInput).toHaveValue(data.updatedEmployee.lastName);
  45  |     await expect(pimPage.employeeID).toHaveValue(employeeId);
  46  |   });
  47  | 
  48  |   test("TC_PIM_008 - Admin should upload an employee profile picture @positive @upload @regression", async ({ navigationPage, pimPage }) => {
  49  |     const data = pimData.TC_PIM_008;
  50  |     const employee = employeeFrom(data.employee);
  51  |     await navigationPage.gotoPIM();
  52  |     await pimPage.gotoAddEmployee();
  53  |     const employeeId = await pimPage.addEmployee({ ...employee, profilePicturePath: path.resolve(data.profilePicturePath) });
  54  |     await expect(pimPage.personalDetailsHeading).toBeVisible();
  55  |     await expect(pimPage.profilePicturePreview).toBeVisible();
  56  |     await pimPage.gotoEmployeeList();
  57  |     await pimPage.filterEmployeeList({ employeeId });
  58  |     await pimPage.clickOnFilterSearch();
  59  |     await pimPage.verifyEmployeeSearchResult(employeeId, employee.firstName, employee.lastName);
  60  |     await pimPage.deleteEmployeeById(employeeId);
  61  |     await pimPage.filterEmployeeList({ employeeId });
  62  |     await pimPage.clickOnFilterSearch();
  63  |     await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  64  |   });
  65  | 
  66  |   test("TC_PIM_009 - Invalid profile picture format should be rejected @negative @upload @validation", async ({ navigationPage, pimPage }) => {
  67  |     await navigationPage.gotoPIM();
  68  |     await pimPage.gotoAddEmployee();
  69  |     await expect(pimPage.profilePictureInput).toBeAttached();
  70  |     await pimPage.verifyInvalidProfilePicture(path.resolve(pimData.TC_PIM_009.invalidProfilePicturePath));
  71  |   });
  72  | 
  73  |   test("TC_PIM_023 - Admin should cancel adding a new employee @negative @regression", async ({ navigationPage, pimPage }) => {
  74  |     const employee = employeeFrom(pimData.TC_PIM_023.employee);
  75  |     await navigationPage.gotoPIM();
  76  |     await pimPage.gotoAddEmployee();
  77  |     await pimPage.fillAddEmployeeForm(employee);
  78  |     await pimPage.cancelAddingEmployee();
  79  |   });
  80  | 
  81  |   for (const id of ["TC_PIM_024", "TC_PIM_025", "TC_PIM_026"] as const) {
  82  |     test(`${id} - Required employee-name validation @negative @validation @regression`, async ({ page, navigationPage, pimPage }) => {
  83  |       const data = pimData[id];
  84  |       const raw = data.employee;
  85  |       const employee = {
  86  |         firstName: "firstNamePrefix" in raw ? `${raw.firstNamePrefix}${unique()}` : raw.firstName,
  87  |         middleName: raw.middleName,
  88  |         lastName: "lastNamePrefix" in raw ? `${raw.lastNamePrefix}${unique()}` : raw.lastName,
  89  |       };
  90  |       await navigationPage.gotoPIM();
  91  |       await pimPage.gotoAddEmployee();
  92  |       await pimPage.saveEmployeeWithoutRequiredDetails(employee);
> 93  |       await expect(pimPage.requiredValidationMessages).toHaveCount(data.expectedValidations.length);
      |                                                        ^ Error: expect(locator).toHaveCount(expected) failed
  94  |       await expect(pimPage.requiredValidationMessages).toHaveText(data.expectedValidations);
  95  |       await expect(page).toHaveURL(/pim\/addEmployee/);
  96  |     });
  97  |   }
  98  | 
  99  |   test("TC_PIM_027 - Duplicate validation should appear for an existing employee ID @negative @validation @regression", async ({ page, navigationPage, pimPage }) => {
  100 |     const data = pimData.TC_PIM_027;
  101 |     const employee = employeeFrom(data.employee);
  102 |     const duplicate = employeeFrom(data.duplicateEmployee);
  103 |     await navigationPage.gotoPIM();
  104 |     await pimPage.gotoAddEmployee();
  105 |     const employeeId = await pimPage.addEmployee(employee);
  106 |     await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, { timeout: 15_000 });
  107 |     await pimPage.gotoAddEmployee();
  108 |     await pimPage.fillAddEmployeeForm({ ...duplicate, employeeId });
  109 |     await expect(pimPage.employeeIdValidation).toHaveText(data.expectedError);
  110 |     await pimPage.cancelAddingEmployee();
  111 |     await pimPage.filterEmployeeList({ employeeId });
  112 |     await pimPage.clickOnFilterSearch();
  113 |     await pimPage.deleteEmployeeById(employeeId);
  114 |   });
  115 | 
  116 |   test("TC_PIM_030 - Admin should create an employee with login credentials @positive @account @regression", async ({ page, navigationPage, pimPage }) => {
  117 |     const data = pimData.TC_PIM_030;
  118 |     const employee = employeeFrom(data.employee);
  119 |     await navigationPage.gotoPIM();
  120 |     await pimPage.gotoAddEmployee();
  121 |     const employeeId = await pimPage.addEmployeeWithLoginDetails({ ...employee, username: `${data.login.usernamePrefix}${unique()}`, password: data.login.password, status: data.login.status as "Enabled" });
  122 |     await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, { timeout: 15_000 });
  123 |     await expect(pimPage.employeeID).toHaveValue(employeeId);
  124 |     await pimPage.gotoEmployeeList();
  125 |     await pimPage.filterEmployeeList({ employeeId });
  126 |     await pimPage.clickOnFilterSearch();
  127 |     await pimPage.deleteEmployeeById(employeeId);
  128 |   });
  129 | 
  130 |   test("TC_PIM_031 - Password mismatch validation should appear @negative @validation @account @regression", async ({ page, navigationPage, pimPage }) => {
  131 |     const data = pimData.TC_PIM_031;
  132 |     const employee = employeeFrom(data.employee);
  133 |     await navigationPage.gotoPIM(); 
  134 |     await pimPage.gotoAddEmployee();
  135 |     await pimPage.fillAddEmployeeForm(employee);
  136 |     await pimPage.createLoginDetailsSwitch.click();
  137 |     await pimPage.employeeUsernameInput.fill(`${data.login.usernamePrefix}${unique()}`);
  138 |     await pimPage.employeePasswordInput.fill(data.login.password);
  139 |     await pimPage.confirmPasswordInput.fill(data.login.confirmPassword);
  140 |     await pimPage.confirmPasswordInput.blur();
  141 |     await expect(pimPage.confirmPasswordValidation).toHaveText(data.expectedError);
  142 |     await pimPage.SaveEmployeeButton.click();
  143 |     await expect(page).toHaveURL(/pim\/addEmployee/);
  144 |   });
  145 | 
  146 |   test("TC_PIM_032 - Weak password validation should appear @negative @validation @account @regression", async ({ page, navigationPage, pimPage }) => {
  147 |     const data = pimData.TC_PIM_032;
  148 |     await navigationPage.gotoPIM(); 
  149 |     await pimPage.gotoAddEmployee();
  150 |     await pimPage.fillAddEmployeeForm(employeeFrom(data.employee));
  151 |     await pimPage.createLoginDetailsSwitch.click();
  152 |     await pimPage.employeeUsernameInput.fill(`${data.login.usernamePrefix}${unique()}`);
  153 |     await pimPage.employeePasswordInput.fill(data.login.password);
  154 |     await pimPage.confirmPasswordInput.fill(data.login.password);
  155 |     await pimPage.confirmPasswordInput.blur();
  156 |     await expect(pimPage.passwordValidation).toContainText(new RegExp(data.expectedPasswordPattern, "i"));
  157 |     if (await pimPage.passwordStrengthIndicator.isVisible()) 
  158 |       await expect(pimPage.passwordStrengthIndicator).toHaveText(new RegExp(data.expectedStrengthPattern, "i"));
  159 |     await pimPage.SaveEmployeeButton.click();
  160 |     await expect(page).toHaveURL(/pim\/addEmployee/);
  161 |   });
  162 | 
  163 |   for (const id of ["TC_PIM_033", "TC_PIM_034"] as const) {
  164 |     test(`${id} - Employee username validation @negative @validation @account @regression`, async ({ page, navigationPage, pimPage }) => {
  165 |       const data = pimData[id];
  166 |       await navigationPage.gotoPIM(); await pimPage.gotoAddEmployee();
  167 |       await pimPage.fillAddEmployeeForm(employeeFrom(data.employee));
  168 |       await pimPage.createLoginDetailsSwitch.click();
  169 |       await pimPage.employeeUsernameInput.fill(data.login.username);
  170 |       await pimPage.employeePasswordInput.fill(data.login.password);
  171 |       await pimPage.confirmPasswordInput.fill(data.login.password);
  172 |       await pimPage.SaveEmployeeButton.click();
  173 |       await expect(page).toHaveURL(/pim\/addEmployee/);
  174 |       await expect(pimPage.usernameValidation).toHaveText(data.expectedError);
  175 |     });
  176 |   }
  177 | 
  178 |   test("TC_PIM_035 - Disabled employee account should not login @negative @security @account @regression", async ({ page, loginPage, navigationPage, dashboardPage, pimPage }) => {
  179 |     const data = pimData.TC_PIM_035;
  180 |     const employee = employeeFrom(data.employee);
  181 |     const username = `${data.login.usernamePrefix}${unique()}`;
  182 |     await navigationPage.gotoPIM(); await pimPage.gotoAddEmployee();
  183 |     const employeeId = await pimPage.addEmployeeWithLoginDetails({ ...employee, username, password: data.login.password, status: data.login.status as "Disabled" });
  184 |     await dashboardPage.clickOnLogout();
  185 |     await loginPage.login(username, data.login.password);
  186 |     await expect(loginPage.errorMessage).toHaveText(data.expectedError);
  187 |     await loginPage.login(loginData.validAdmin.username, loginData.validAdmin.password);
  188 |     await navigationPage.gotoPIM(); 
  189 |     await pimPage.gotoEmployeeList();
  190 |     await pimPage.filterEmployeeList({ employeeId }); 
  191 |     await pimPage.clickOnFilterSearch();
  192 |     await pimPage.deleteEmployeeById(employeeId);
  193 |   });
```