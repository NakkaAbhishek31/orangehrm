# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_002 - Admin should search for an employee by employee ID @positive @regression
- Location: tests\PIM\pim-employee.spec.ts:42:5

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  getByRole('textbox', { name: 'Middle Name' })
Expected: "Test"
Received: "test"
Timeout:  10000ms

Call log:
  - Expect "toHaveValue" with timeout 10000ms
  - waiting for getByRole('textbox', { name: 'Middle Name' })
    23 × locator resolved to <input name="middleName" data-v-1f99f73c="" placeholder="Middle Name" class="oxd-input oxd-input--active orangehrm-middlename"/>
       - unexpected value "test"

```

```yaml
- textbox "Middle Name": test
```

# Test source

```ts
  1   | import { expect } from "@playwright/test";
  2   | import { test } from "../../fixtures/baseTest";
  3   | import path from "node:path";
  4   | 
  5   | test("TC_PIM_001 - Admin should add a new employee successfully @positive @regression", async ({
  6   |   page,
  7   |   loginPage,
  8   |   navigationPage,
  9   |   pimPage,
  10  | }) => {
  11  |   const firstName = `Auto${Date.now()}`;
  12  |   const middleName = "test";
  13  |   const lastName = "user";
  14  |   await loginPage.visitPage();
  15  | 
  16  |   await loginPage.login("Admin", "admin123");
  17  | 
  18  |   await loginPage.verifyLoginSuccessful();
  19  | 
  20  |   await navigationPage.gotoPIM();
  21  | 
  22  |   await pimPage.gotoAddEmployee();
  23  | 
  24  |   const employeeId = await pimPage.addEmployee({
  25  |     firstName: firstName,
  26  |     middleName: middleName,
  27  |     lastName: lastName,
  28  |   });
  29  | 
  30  |   console.log("emplyeeid", employeeId);
  31  | 
  32  |   await expect(page).toHaveURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  33  |     timeout: 15_000,
  34  |   });
  35  | 
  36  |   await expect(pimPage.personalDetailsHeading).toBeVisible();
  37  |   await expect(pimPage.firstnameInput).toHaveValue(firstName);
  38  |   await expect(pimPage.middlenameInput).toHaveValue("Test");
  39  |   await expect(pimPage.lastnameInput).toHaveValue("User");
  40  | });
  41  | 
  42  | test("TC_PIM_002 - Admin should search for an employee by employee ID @positive @regression", async ({
  43  |   page,
  44  |   loginPage,
  45  |   navigationPage,
  46  |   pimPage,
  47  | }) => {
  48  |   const firstName = `Auto${Date.now()}`;
  49  |   const middleName = "test";
  50  |   const lastName = "user";
  51  |   await loginPage.visitPage();
  52  |   await loginPage.login("Admin", "admin123");
  53  |   await loginPage.verifyLoginSuccessful();
  54  |   await navigationPage.gotoPIM();
  55  |   await pimPage.gotoAddEmployee();
  56  |   const employeeId = await pimPage.addEmployee({
  57  |     firstName: firstName,
  58  |     middleName: middleName,
  59  |     lastName: lastName,
  60  |   });
  61  |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  62  |     timeout: 15_000,
  63  |   });
  64  | 
  65  |   await expect(pimPage.personalDetailsHeading).toBeVisible();
  66  |   await expect(pimPage.firstnameInput).toHaveValue(firstName);
> 67  |   await expect(pimPage.middlenameInput).toHaveValue("Test");
      |                                         ^ Error: expect(locator).toHaveValue(expected) failed
  68  |   await expect(pimPage.lastnameInput).toHaveValue("User");
  69  | 
  70  |   await pimPage.gotoEmployeeList();
  71  |   await pimPage.filterEmployeeList({ employeeId: employeeId });
  72  |   await pimPage.clickOnFilterSearch();
  73  |   await pimPage.verifyEmployeeSearchResult(employeeId, firstName, "User");
  74  | });
  75  | 
  76  | test("TC_PIM_003 - No records should appear for a nonexistent employee ID @negative @regression", async ({
  77  |   page,
  78  |   loginPage,
  79  |   navigationPage,
  80  |   pimPage,
  81  | }) => {
  82  |   const nonexistentEmployeeId = "9999999999";
  83  |   await loginPage.visitPage();
  84  |   await loginPage.login("Admin", "admin123");
  85  |   await loginPage.verifyLoginSuccessful();
  86  |   await navigationPage.gotoPIM();
  87  |   await pimPage.gotoEmployeeList();
  88  |   await pimPage.filterEmployeeList({ employeeId: nonexistentEmployeeId });
  89  |   await pimPage.clickOnFilterSearch();
  90  |   await pimPage.verifyNoEmployeeRecordsFound(nonexistentEmployeeId);
  91  | });
  92  | 
  93  | test("TC_PIM_004 - Admin should search for an employee by name @positive @regression", async ({
  94  |   page,
  95  |   loginPage,
  96  |   navigationPage,
  97  |   pimPage,
  98  | }) => {
  99  |   const firstName = `Auto${Date.now()}`;
  100 |   const middleName = "Test";
  101 |   const lastName = "User";
  102 | 
  103 |   await loginPage.visitPage();
  104 |   await loginPage.login("Admin", "admin123");
  105 |   await loginPage.verifyLoginSuccessful();
  106 | 
  107 |   await navigationPage.gotoPIM();
  108 |   await pimPage.gotoAddEmployee();
  109 | 
  110 |   const employeeId = await pimPage.addEmployee({
  111 |     firstName: firstName,
  112 |     middleName: middleName,
  113 |     lastName: lastName,
  114 |   });
  115 |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  116 |     timeout: 15_000,
  117 |   });
  118 | 
  119 |   await pimPage.gotoEmployeeList();
  120 | 
  121 |   await pimPage.filterEmployeeList({
  122 |     employeeName: firstName,
  123 |   });
  124 | 
  125 |   await pimPage.clickOnFilterSearch();
  126 | 
  127 |   await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  128 | });
  129 | 
  130 | test("TC_PIM_005 - Admin should search using employee ID and employee name @positive @regression", async ({
  131 |   page,
  132 |   loginPage,
  133 |   navigationPage,
  134 |   pimPage,
  135 | }) => {
  136 |   const firstName = `Auto${Date.now()}`;
  137 |   const middleName = "Test";
  138 |   const lastName = "User";
  139 | 
  140 |   await loginPage.visitPage();
  141 |   await loginPage.login("Admin", "admin123");
  142 |   await loginPage.verifyLoginSuccessful();
  143 | 
  144 |   await navigationPage.gotoPIM();
  145 |   await pimPage.gotoAddEmployee();
  146 | 
  147 |   const employeeId = await pimPage.addEmployee({
  148 |     firstName: firstName,
  149 |     middleName: middleName,
  150 |     lastName: lastName,
  151 |   });
  152 | 
  153 |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  154 |     timeout: 15_000,
  155 |   });
  156 | 
  157 |   await pimPage.gotoEmployeeList();
  158 | 
  159 |   await pimPage.filterEmployeeList({
  160 |     employeeName: firstName,
  161 |     employeeId: employeeId,
  162 |   });
  163 | 
  164 |   await pimPage.clickOnFilterSearch();
  165 | 
  166 |   await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  167 | });
```