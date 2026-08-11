# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> PIM Employee >> TC_PIM_035 - Disabled employee account should not login @negative @security @account @regression
- Location: tests\PIM\pim-employee.spec.ts:178:7

# Error details

```
Test timeout of 60000ms exceeded.
```

```
Error: expect(locator).toHaveText(expected) failed

Locator:  getByText(/^(Invalid credentials|Account disabled)$/)
Expected: "Account disabled"
Received: ""
Timeout:  10000ms

Call log:
  - Expect "toHaveText" with timeout 10000ms
  - waiting for getByText(/^(Invalid credentials|Account disabled)$/)

```

# Test source

```ts
  86  |         firstName: "firstNamePrefix" in raw ? `${raw.firstNamePrefix}${unique()}` : raw.firstName,
  87  |         middleName: raw.middleName,
  88  |         lastName: "lastNamePrefix" in raw ? `${raw.lastNamePrefix}${unique()}` : raw.lastName,
  89  |       };
  90  |       await navigationPage.gotoPIM();
  91  |       await pimPage.gotoAddEmployee();
  92  |       await pimPage.saveEmployeeWithoutRequiredDetails(employee);
  93  |       await expect(pimPage.requiredValidationMessages).toHaveCount(data.expectedValidations.length);
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
> 186 |     await expect(loginPage.errorMessage).toHaveText(data.expectedError);
      |                                          ^ Error: expect(locator).toHaveText(expected) failed
  187 |     await loginPage.login(loginData.validAdmin.username, loginData.validAdmin.password);
  188 |     await navigationPage.gotoPIM(); 
  189 |     await pimPage.gotoEmployeeList();
  190 |     await pimPage.filterEmployeeList({ employeeId }); 
  191 |     await pimPage.clickOnFilterSearch();
  192 |     await pimPage.deleteEmployeeById(employeeId);
  193 |   });
  194 | 
  195 |   test("TC_PIM_036 - Enabled employee account should login successfully @positive @security @account @regression", async ({ loginPage, navigationPage, dashboardPage, pimPage }) => {
  196 |     const data = pimData.TC_PIM_036;
  197 |     const employee = employeeFrom(data.employee);
  198 |     const username = `${data.login.usernamePrefix}${unique()}`;
  199 |     await navigationPage.gotoPIM(); await pimPage.gotoAddEmployee();
  200 |     await pimPage.addEmployeeWithLoginDetails({ ...employee, username, password: data.login.password, status: data.login.status as "Enabled" });
  201 |     await dashboardPage.clickOnLogout();
  202 |     await loginPage.login(username, data.login.password);
  203 |     await loginPage.verifyLoginSuccessful();
  204 |   });
  205 | });
  206 | 
```