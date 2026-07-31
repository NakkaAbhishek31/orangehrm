import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";
import path from "node:path";

test("TC_PIM_001 - Admin should add a new employee successfully @positive @regression", async ({
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

  console.log("emplyeeid", employeeId);

  await expect(page).toHaveURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
    timeout: 15_000,
  });

  await expect(pimPage.personalDetailsHeading).toBeVisible();
  await expect(pimPage.firstnameInput).toHaveValue(firstName);
  await expect(pimPage.middlenameInput).toHaveValue(middleName);
  await expect(pimPage.lastnameInput).toHaveValue(lastName);
});

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
    timeout: 15_000,
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

test("TC_PIM_006 - Admin should update employee personal details @positive @regression", async ({
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
  await pimPage.updatePersonalDetails({
    middleName: updatedMiddleName,
    lastName: updatedLastName,
  });
  await expect(pimPage.firstnameInput).toHaveValue(firstName);
  await expect(pimPage.middlenameInput).toHaveValue(updatedMiddleName);
  await expect(pimPage.lastnameInput).toHaveValue(updatedLastName);
  await expect(pimPage.employeeID).toHaveValue(employeeId);
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

test("TC_PIM_008 - Admin should upload an employee profile picture @positive @upload @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const middleName = "Test";
  const lastName = "User";
  const profilePicturePath = path.resolve("test-data/OIP.jpg");

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployee({
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    profilePicturePath: profilePicturePath,
  });

  // await page.waitForURL(
  //   /pim\/viewPersonalDetails\/empNumber\/\d+/,
  //   { timeout: 15_000 }
  // );

  await expect(pimPage.personalDetailsHeading).toBeVisible();
  await expect(pimPage.profilePicturePreview).toBeVisible();
  await pimPage.gotoEmployeeList();
  await pimPage.filterEmployeeList({ employeeId });
  await pimPage.clickOnFilterSearch();
  await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  await pimPage.deleteEmployeeById(employeeId);
  await pimPage.filterEmployeeList({ employeeId });
  await pimPage.clickOnFilterSearch();
  await pimPage.verifyNoEmployeeRecordsFound(employeeId);
});

test("TC_PIM_009 - Invalid profile picture format should be rejected @negative @upload @validation", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const profilePicturePath = path.resolve("test-data/txt_crlf_log_sample.txt");

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();
  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();
  await expect(pimPage.profilePictureInput).toBeAttached();
  await pimPage.verifyInvalidProfilePicture(profilePicturePath);
});

test("TC_PIM_023 - Admin should cancel adding a new employee @negative @regression", async ({
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

  let employeeId = await pimPage.fillAddEmployeeForm({
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
  });

  await pimPage.cancelAddingEmployee();
});


test("TC_PIM_024 - Required validation should appear when employee first and last names are empty @negative @validation @regression", async ({
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

  const employeeId = await pimPage.saveEmployeeWithoutRequiredDetails({
   firstName: "",
  lastName: "",
  middleName:middleName

});

await expect(pimPage.requiredValidationMessages).toHaveCount(2);
await expect(pimPage.requiredValidationMessages).toHaveText([
  'Required',
  'Required',
]);

});


test("TC_PIM_025 - Required validation should appear when employee last name is empty @negative @validation @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const middleName = "test";
  
  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();
  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();
  const employeeId = await pimPage.saveEmployeeWithoutRequiredDetails({
   firstName:firstName,
  lastName: " ",
  middleName:middleName

});
await expect(pimPage.requiredValidationMessages).toHaveCount(1);
await expect(pimPage.requiredValidationMessages).toHaveText([
  'Required',
]);

await expect(page).toHaveURL(/pim\/addEmployee/);

});



test("TC_PIM_026 - Required validation should appear when employee first name is empty @negative @validation @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const middleName = 'Test';
const lastName = `User${Date.now()}`;
  
  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();
  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();
  const employeeId = await pimPage.saveEmployeeWithoutRequiredDetails({
  firstName:" ",
  middleName:middleName,
  lastName:lastName,

});
await expect(pimPage.requiredValidationMessages).toHaveCount(1);
await expect(pimPage.requiredValidationMessages).toHaveText([
  'Required',
]);

await expect(page).toHaveURL(/pim\/addEmployee/);

});


test("'TC_PIM_027 - Duplicate validation should appear for an existing employee ID @negative @validation @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const middleName = 'Test';
const lastName = `User${Date.now()}`;
  
  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();
  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();
  const employeeId = await pimPage.saveEmployeeWithoutRequiredDetails({
  firstName:" ",
  middleName:middleName,
  lastName:lastName,

});
await expect(pimPage.requiredValidationMessages).toHaveCount(1);
await expect(pimPage.requiredValidationMessages).toHaveText([
  'Required',
]);

await expect(page).toHaveURL(/pim\/addEmployee/);

});


test(
  'TC_PIM_027 - Duplicate validation should appear for an existing employee ID @negative @validation @regression',
  async ({ page, loginPage, navigationPage, pimPage }) => {
    const firstName = `Auto${Date.now()}`;
    const secondFirstName = `Duplicate${Date.now()}`;

    await loginPage.visitPage();
    await loginPage.login('Admin', 'admin123');
    await loginPage.verifyLoginSuccessful();

    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee({
      firstName,
      middleName: 'Test',
      lastName: 'User',
    });
    await page.waitForURL(
      /pim\/viewPersonalDetails\/empNumber\/\d+/,
      { timeout: 15_000 }
    );

    await pimPage.gotoAddEmployee();

    await pimPage.fillAddEmployeeForm({
      firstName: secondFirstName,
      middleName: 'Test',
      lastName: 'User',
      employeeId,
    });

    await expect(pimPage.employeeIdValidation).toBeVisible();

    await expect(pimPage.employeeIdValidation).toHaveText(
      'Employee Id already exists'
    );

    await expect(page).toHaveURL(/pim\/addEmployee/);

    await pimPage.cancelAddingEmployee();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(
      employeeId,
      firstName,
      'User'
    );

    await pimPage.deleteEmployeeById(employeeId);

    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  }
);


test("'TC_PIM_028 - Admin should reset Employee List search filters @positive @filter @regression',", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {


  const employeeId = '999999';
  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();
  await navigationPage.gotoPIM();
  await pimPage.gotoEmployeeList();
  await pimPage.filterEmployeeList({ employeeId });
   await expect(
      pimPage.employeeIdFilterInput
    ).toHaveValue(employeeId);

  await pimPage.resetEmployeeFilters();

    await expect(
      pimPage.employeeIdFilterInput
    ).toHaveValue('');

    await expect(
      pimPage.employeeNameFilterInput
    ).toHaveValue('');

    expect(
      (await pimPage.getVisibleEmployeeIds()).length
    ).toBeGreaterThan(0);
  }
);

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

test("'TC_PIM_030 - Admin should create an employee with login credentials @positive @account @regression'", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const middleName = "Test";
  const lastName = "User";
  const username = `user${Date.now()}`;
  const password = 'Test@12345';

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

const employeeId =
      await pimPage.addEmployeeWithLoginDetails({
        firstName,
        middleName,
        lastName,
        username,
        password,
        status: 'Enabled',
      });
  await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
    timeout: 15_000,
  });

 await expect(pimPage.personalDetailsHeading).toBeVisible();

    await expect(pimPage.firstnameInput).toHaveValue(
      firstName
    );

    await expect(pimPage.middlenameInput).toHaveValue(
      middleName
    );

    await expect(pimPage.lastnameInput).toHaveValue(
      lastName
    );

    await expect(pimPage.employeeID).toHaveValue(
      employeeId
    );

     await pimPage.gotoEmployeeList();

    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();

    await pimPage.verifyEmployeeSearchResult(
      employeeId,
      firstName,
      lastName
    );

    // Cleanup.
    await pimPage.deleteEmployeeById(employeeId);

    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();

    await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  
});


test(
  'TC_PIM_031 - Password mismatch validation should appear while creating employee login details @negative @validation @account @regression',
  async ({ page, loginPage, navigationPage, pimPage }) => {
    const firstName = `Auto${Date.now()}`;
    const username = `user${Date.now()}`;
    const password = 'Test@12345';
    const confirmPassword = 'Wrong@12345';

    await loginPage.visitPage();
    await loginPage.login('Admin', 'admin123');
    await loginPage.verifyLoginSuccessful();

    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();

    
    await pimPage.fillAddEmployeeForm({
      firstName,
      middleName: 'Test',
      lastName: 'User',
    });

   
    await pimPage.createLoginDetailsSwitch.check({
      force: true,
    });

    await expect(
      pimPage.createLoginDetailsSwitch
    ).toBeChecked();


    await pimPage.employeeUsernameInput.fill(username);
    await pimPage.employeePasswordInput.fill(password);
    await pimPage.confirmPasswordInput.fill(
      confirmPassword
    );

    await pimPage.confirmPasswordInput.blur();

    await expect(
      pimPage.confirmPasswordValidation
    ).toBeVisible();

    await expect(
      pimPage.confirmPasswordValidation
    ).toHaveText('Passwords do not match');

    await pimPage.SaveEmployeeButton.click();

    await expect(page).toHaveURL(/pim\/addEmployee/);

    await expect(
      pimPage.confirmPasswordValidation
    ).toHaveText('Passwords do not match');
  }
);