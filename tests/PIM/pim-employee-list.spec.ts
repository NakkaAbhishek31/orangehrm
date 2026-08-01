import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";


test("TC_PIM_002 - Admin should search for an employee by employee ID @positive @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const middleName = "test";
  const lastName = "user";
  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();
  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();
  const employeeId = await pimPage.addEmployee({
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
  });
  // await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
  //   timeout: 20_000,
  // });

  await expect(pimPage.personalDetailsHeading).toBeVisible();
  await expect(pimPage.firstnameInput).toHaveValue(firstName);
  await expect(pimPage.middlenameInput).toHaveValue(middleName);
  await expect(pimPage.lastnameInput).toHaveValue(lastName);

  await pimPage.gotoEmployeeList();
  await pimPage.filterEmployeeList({ employeeId: employeeId });
  await pimPage.clickOnFilterSearch();
  await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
});

test("TC_PIM_003 - No records should appear for a nonexistent employee ID @negative @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const nonexistentEmployeeId = "9999999999";
  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();
  await navigationPage.gotoPIM();
  await pimPage.gotoEmployeeList();
  await pimPage.filterEmployeeList({ employeeId: nonexistentEmployeeId });
  await pimPage.clickOnFilterSearch();
  await pimPage.verifyNoEmployeeRecordsFound(nonexistentEmployeeId);
});

test("TC_PIM_004 - Admin should search for an employee by name @positive @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const middleName = "Test";
  const lastName = "User";

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployee({
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
  });
  await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
    timeout: 55_000,
  });

  await pimPage.gotoEmployeeList();

  await pimPage.filterEmployeeList({
    employeeName: firstName,
  });

  await pimPage.clickOnFilterSearch();

  await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
});

test("TC_PIM_005 - Admin should search using employee ID and employee name @positive @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const middleName = "Test";
  const lastName = "User";

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployee({
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
  });

  await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
    timeout: 15_000,
  });

  await pimPage.gotoEmployeeList();

  await pimPage.filterEmployeeList({
    employeeName: firstName,
    employeeId: employeeId,
  });

  await pimPage.clickOnFilterSearch();

  await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
});

test("TC_PIM_007 - Admin should delete an employee successfully @positive @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const middleName = "Test";
  const lastName = "User";
  const updatedMiddleName = "updatedTest";
  const updatedLastName = "updatedUser";

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployee({
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
  });

  await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
    timeout: 15_000,
  });

  await pimPage.gotoEmployeeList();
  await pimPage.filterEmployeeList({ employeeId: employeeId });
  await pimPage.clickOnFilterSearch();
  await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  await pimPage.deleteEmployeeById(employeeId);
  await pimPage.filterEmployeeList({ employeeId: employeeId });
  await pimPage.verifyNoEmployeeRecordsFound(employeeId);
});


test("'TC_PIM_028 - Admin should reset Employee List search filters @positive @filter @regression',", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const employeeId = "999999";
  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();
  await navigationPage.gotoPIM();
  await pimPage.gotoEmployeeList();
  await pimPage.filterEmployeeList({ employeeId });
  await expect(pimPage.employeeIdFilterInput).toHaveValue(employeeId);

  await pimPage.resetEmployeeFilters();

  await expect(pimPage.employeeIdFilterInput).toHaveValue("");

  await expect(pimPage.employeeNameFilterInput).toHaveValue("");

  expect((await pimPage.getVisibleEmployeeIds()).length).toBeGreaterThan(0);
});

test("TC_PIM_029 - Admin should search for an employee using a partial employee name @positive @search @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const middleName = "test";
  const lastName = "user";
  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();
  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();
  const employeeId = await pimPage.addEmployee({
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
  });
  await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
    timeout: 15_000,
  });

  await pimPage.gotoEmployeeList();

  const partialName = firstName.substring(0, 8);
  const fullName = `${firstName} ${middleName} ${lastName}`;

  await pimPage.selectEmployeeFromAutocomplete(partialName, fullName);
  await pimPage.clickOnFilterSearch();
});

test(
  'TC_PIM_037 - Admin should cancel employee deletion @negative @delete @regression',
  async ({ loginPage, navigationPage, pimPage }) => {
    const firstName = `Auto${Date.now()}`;
    const middleName = 'Test';
    const lastName = 'User';

    await loginPage.visitPage();
    await loginPage.login('Admin', 'admin123');
    await loginPage.verifyLoginSuccessful();

    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();

    const employeeId = await pimPage.addEmployee({
      firstName,
      middleName,
      lastName,
    });

    await pimPage.gotoEmployeeList();

    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();

    await pimPage.verifyEmployeeSearchResult(
      employeeId,
      firstName,
      lastName
    );

    await pimPage.cancelEmployeeDeletion(
      employeeId
    );

    // Verify the employee remains after cancellation.
    await pimPage.verifyEmployeeSearchResult(
      employeeId,
      firstName,
      lastName
    );

    // Final cleanup.
    await pimPage.deleteEmployeeById(employeeId);

    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();

    await pimPage.verifyNoEmployeeRecordsFound(
      employeeId
    );
  }
);


test("TC_PIM_038 - Admin should delete multiple employees using bulk selection @positive @bulk-delete @regression", async ({
  page,
  loginPage,
  navigationPage,dashboardPage,
  pimPage,
}) => {
  const uniqueValue = Date.now();

    const firstEmployee = {
      firstName: `BulkA${uniqueValue}`,
      middleName: 'Test',
      lastName: 'User',
    };

    const secondEmployee = {
      firstName: `BulkB${uniqueValue}`,
      middleName: 'Test',
      lastName: 'User',
    };

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId1 = await pimPage.addEmployee(firstEmployee);
  await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
    timeout: 15_000,
  });

  await expect(pimPage.personalDetailsHeading).toBeVisible();

  await expect(pimPage.firstnameInput).toHaveValue(firstEmployee.firstName);

  await expect(pimPage.middlenameInput).toHaveValue(firstEmployee.middleName);

  await expect(pimPage.lastnameInput).toHaveValue(firstEmployee.lastName);

  await expect(pimPage.employeeID).toHaveValue(employeeId1);

  await pimPage.gotoAddEmployee();

  const employeeId2 = await pimPage.addEmployee(secondEmployee);

  await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
    timeout: 15_000,
  });

  await expect(pimPage.personalDetailsHeading).toBeVisible();

  await expect(pimPage.firstnameInput).toHaveValue(secondEmployee.firstName);

  await expect(pimPage.middlenameInput).toHaveValue(secondEmployee.middleName);

  await expect(pimPage.lastnameInput).toHaveValue(secondEmployee.lastName);

  await expect(pimPage.employeeID).toHaveValue(employeeId2);


  await pimPage.gotoEmployeeList();
  await expect(pimPage.loadingSpinner).toBeHidden();
      const firstRow = pimPage.employeeRows.filter({
      hasText: employeeId1,
    });

    const secondRow = pimPage.employeeRows.filter({
      hasText: employeeId2,
    });

   await expect(firstRow).toHaveCount(1);
  await expect(secondRow).toHaveCount(1);
 await pimPage.selectEmployeeById(employeeId1);
    await pimPage.selectEmployeeById(employeeId2);

    await pimPage.deleteSelectedEmployees();

    await pimPage.filterEmployeeList({
      employeeId: employeeId1,
    });

    await pimPage.clickOnFilterSearch();

    await pimPage.verifyNoEmployeeRecordsFound(
      employeeId1
    );

    await pimPage.filterEmployeeList({
      employeeId: employeeId2,
    });

    await pimPage.clickOnFilterSearch();

    await pimPage.verifyNoEmployeeRecordsFound(
      employeeId2
    );
  }
);


test("TC_PIM_039 - Admin should open employee personal details from the Employee List @positive @navigation @regression", async ({
  page,
  loginPage,
  navigationPage,dashboardPage,
  pimPage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const middleName = "Test";
  const lastName = "User";
 

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployee({
    firstName,
    middleName,
    lastName,
  });
  await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
    timeout: 15_000,
  });

  await expect(pimPage.personalDetailsHeading).toBeVisible();

  await expect(pimPage.firstnameInput).toHaveValue(firstName);

  await expect(pimPage.middlenameInput).toHaveValue(middleName);

  await expect(pimPage.lastnameInput).toHaveValue(lastName);

  await expect(pimPage.employeeID).toHaveValue(employeeId);

  await pimPage.gotoEmployeeList();

  await pimPage.filterEmployeeList({ employeeId });
  await pimPage.clickOnFilterSearch();

  await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);

  await pimPage.openEmployeeById(employeeId);

  await expect(page).toHaveURL(
  /pim\/viewPersonalDetails\/empNumber\/\d+/
);

await pimPage.gotoEmployeeList();
  await pimPage.filterEmployeeList({ employeeId });
  await pimPage.clickOnFilterSearch();

  await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  await pimPage.deleteEmployeeById(employeeId);

  await pimPage.filterEmployeeList({ employeeId });
  await pimPage.clickOnFilterSearch();

  await pimPage.verifyNoEmployeeRecordsFound(employeeId);
});

test("TC_PIM_040 - Admin should select and deselect all employees on the current page @positive @selection @regression", async ({
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const uniqueValue = Date.now();

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoPIM();

  await pimPage.gotoEmployeeList();

  await pimPage.selectAllVisibleEmployees();

  await pimPage.deselectAllVisibleEmployees();
   
});







