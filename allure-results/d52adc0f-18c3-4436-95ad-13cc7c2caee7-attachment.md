# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PIM\pim-employee.spec.ts >> TC_PIM_038 - Admin should delete multiple employees using bulk selection @positive @bulk-delete @regression
- Location: tests\PIM\pim-employee.spec.ts:1017:6

# Error details

```
Error: expect(locator).toHaveValue(expected) failed

Locator:  locator('form').filter({ has: locator('input[name="firstName"]') }).locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input')
Expected: "0417"
Received: "0418"
Timeout:  10000ms

Call log:
  - Expect "toHaveValue" with timeout 10000ms
  - waiting for locator('form').filter({ has: locator('input[name="firstName"]') }).locator('.oxd-input-group').filter({ hasText: 'Employee Id' }).locator('input')
    23 × locator resolved to <input data-v-1f99f73c="" class="oxd-input oxd-input--active"/>
       - unexpected value "0418"

```

```yaml
- textbox: "0418"
```

# Test source

```ts
  975  | 
  976  |   await navigationPage.gotoPIM();
  977  |   await pimPage.gotoAddEmployee();
  978  | 
  979  |   const employeeId = await pimPage.addEmployeeWithLoginDetails({
  980  |     firstName,
  981  |     middleName,
  982  |     lastName,
  983  |     username,
  984  |     password,
  985  |     status: "Enabled",
  986  |   });
  987  |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  988  |     timeout: 15_000,
  989  |   });
  990  | 
  991  |   await expect(pimPage.personalDetailsHeading).toBeVisible();
  992  | 
  993  |   await expect(pimPage.firstnameInput).toHaveValue(firstName);
  994  | 
  995  |   await expect(pimPage.middlenameInput).toHaveValue(middleName);
  996  | 
  997  |   await expect(pimPage.lastnameInput).toHaveValue(lastName);
  998  | 
  999  |   await expect(pimPage.employeeID).toHaveValue(employeeId);
  1000 | 
  1001 |   await pimPage.gotoEmployeeList();
  1002 | 
  1003 |   await pimPage.filterEmployeeList({ employeeId });
  1004 |   await pimPage.clickOnFilterSearch();
  1005 | 
  1006 |   await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  1007 |   await pimPage.canceldeleteEmployeeById(employeeId);
  1008 | 
  1009 |    await pimPage.deleteEmployeeById(employeeId);
  1010 | 
  1011 |    await pimPage.filterEmployeeList({ employeeId });
  1012 |    await pimPage.clickOnFilterSearch();
  1013 |    await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  1014 | });
  1015 | 
  1016 | 
  1017 | test.only("TC_PIM_038 - Admin should delete multiple employees using bulk selection @positive @bulk-delete @regression", async ({
  1018 |   page,
  1019 |   loginPage,
  1020 |   navigationPage,dashboardPage,
  1021 |   pimPage,
  1022 | }) => {
  1023 |   const uniqueValue = Date.now();
  1024 | 
  1025 |     const firstEmployee = {
  1026 |       firstName: `BulkA${uniqueValue}`,
  1027 |       middleName: 'Test',
  1028 |       lastName: 'User',
  1029 |     };
  1030 | 
  1031 |     const secondEmployee = {
  1032 |       firstName: `BulkB${uniqueValue}`,
  1033 |       middleName: 'Test',
  1034 |       lastName: 'User',
  1035 |     };
  1036 | 
  1037 |   await loginPage.visitPage();
  1038 |   await loginPage.login("Admin", "admin123");
  1039 |   await loginPage.verifyLoginSuccessful();
  1040 | 
  1041 |   await navigationPage.gotoPIM();
  1042 |   await pimPage.gotoAddEmployee();
  1043 | 
  1044 |   const employeeId1 = await pimPage.addEmployee(firstEmployee);
  1045 |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  1046 |     timeout: 15_000,
  1047 |   });
  1048 | 
  1049 |   await expect(pimPage.personalDetailsHeading).toBeVisible();
  1050 | 
  1051 |   await expect(pimPage.firstnameInput).toHaveValue(firstEmployee.firstName);
  1052 | 
  1053 |   await expect(pimPage.middlenameInput).toHaveValue(firstEmployee.middleName);
  1054 | 
  1055 |   await expect(pimPage.lastnameInput).toHaveValue(firstEmployee.lastName);
  1056 | 
  1057 |   await expect(pimPage.employeeID).toHaveValue(employeeId1);
  1058 | 
  1059 |   await pimPage.gotoAddEmployee();
  1060 | 
  1061 |   const employeeId2 = await pimPage.addEmployee(secondEmployee);
  1062 | 
  1063 |   await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  1064 |     timeout: 15_000,
  1065 |   });
  1066 | 
  1067 |   await expect(pimPage.personalDetailsHeading).toBeVisible();
  1068 | 
  1069 |   await expect(pimPage.firstnameInput).toHaveValue(secondEmployee.firstName);
  1070 | 
  1071 |   await expect(pimPage.middlenameInput).toHaveValue(secondEmployee.middleName);
  1072 | 
  1073 |   await expect(pimPage.lastnameInput).toHaveValue(secondEmployee.lastName);
  1074 | 
> 1075 |   await expect(pimPage.employeeID).toHaveValue(employeeId1);
       |                                    ^ Error: expect(locator).toHaveValue(expected) failed
  1076 | 
  1077 | 
  1078 |   await pimPage.gotoEmployeeList();
  1079 |   await expect(pimPage.loadingSpinner).toBeHidden();
  1080 |       const firstRow = pimPage.employeeRows.filter({
  1081 |       hasText: employeeId1,
  1082 |     });
  1083 | 
  1084 |     const secondRow = pimPage.employeeRows.filter({
  1085 |       hasText: employeeId2,
  1086 |     });
  1087 | 
  1088 |    await expect(firstRow).toHaveCount(1);
  1089 |   await expect(secondRow).toHaveCount(1);
  1090 | 
  1091 |   
  1092 |   
  1093 | });
  1094 | 
  1095 | 
  1096 | 
```