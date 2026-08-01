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
    middleName: middleName,
  });

  await expect(pimPage.requiredValidationMessages).toHaveCount(2);
  await expect(pimPage.requiredValidationMessages).toHaveText([
    "Required",
    "Required",
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
    firstName: firstName,
    lastName: " ",
    middleName: middleName,
  });
  await expect(pimPage.requiredValidationMessages).toHaveCount(1);
  await expect(pimPage.requiredValidationMessages).toHaveText(["Required"]);

  await expect(page).toHaveURL(/pim\/addEmployee/);
});

test("TC_PIM_026 - Required validation should appear when employee first name is empty @negative @validation @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const middleName = "Test";
  const lastName = `User${Date.now()}`;

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();
  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();
  const employeeId = await pimPage.saveEmployeeWithoutRequiredDetails({
    firstName: " ",
    middleName: middleName,
    lastName: lastName,
  });
  await expect(pimPage.requiredValidationMessages).toHaveCount(1);
  await expect(pimPage.requiredValidationMessages).toHaveText(["Required"]);

  await expect(page).toHaveURL(/pim\/addEmployee/);
});

test("TC_PIM_027 - Duplicate validation should appear for an existing employee ID @negative @validation @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const secondFirstName = `Duplicate${Date.now()}`;

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();
  const employeeId = await pimPage.addEmployee({
    firstName,
    middleName: "Test",
    lastName: "User",
  });
  await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
    timeout: 15_000,
  });

  await pimPage.gotoAddEmployee();

  await pimPage.fillAddEmployeeForm({
    firstName: secondFirstName,
    middleName: "Test",
    lastName: "User",
    employeeId,
  });

  await expect(pimPage.employeeIdValidation).toBeVisible();

  await expect(pimPage.employeeIdValidation).toHaveText(
    "Employee Id already exists",
  );

  await expect(page).toHaveURL(/pim\/addEmployee/);

  await pimPage.cancelAddingEmployee();
  await pimPage.filterEmployeeList({ employeeId });
  await pimPage.clickOnFilterSearch();
  await pimPage.verifyEmployeeSearchResult(employeeId, firstName, "User");

  await pimPage.deleteEmployeeById(employeeId);

  await pimPage.filterEmployeeList({ employeeId });
  await pimPage.clickOnFilterSearch();
  await pimPage.verifyNoEmployeeRecordsFound(employeeId);
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
  const password = "Test@12345";

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployeeWithLoginDetails({
    firstName,
    middleName,
    lastName,
    username,
    password,
    status: "Enabled",
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

  // Cleanup.
  await pimPage.deleteEmployeeById(employeeId);

  await pimPage.filterEmployeeList({ employeeId });
  await pimPage.clickOnFilterSearch();

  await pimPage.verifyNoEmployeeRecordsFound(employeeId);
});

test("TC_PIM_031 - Password mismatch validation should appear while creating employee login details @negative @validation @account @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const username = `user${Date.now()}`;
  const password = "Test@12345";
  const confirmPassword = "Wrong@12345";

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  await pimPage.fillAddEmployeeForm({
    firstName,
    middleName: "Test",
    lastName: "User",
  });

  await pimPage.createLoginDetailsSwitch.click();

  await expect(pimPage.createLoginDetailsCheckbox).toBeChecked();

  await pimPage.employeeUsernameInput.fill(username);
  await pimPage.employeePasswordInput.fill(password);
  await pimPage.confirmPasswordInput.fill(confirmPassword);

  await pimPage.confirmPasswordInput.blur();

  await expect(pimPage.confirmPasswordValidation).toBeVisible();

  await expect(pimPage.confirmPasswordValidation).toHaveText(
    "Passwords do not match",
  );

  await pimPage.SaveEmployeeButton.click();

  await expect(page).toHaveURL(/pim\/addEmployee/);

  await expect(pimPage.confirmPasswordValidation).toHaveText(
    "Passwords do not match",
  );
});

test("TC_PIM_032 - Weak password validation should appear while creating employee login details @negative @validation @account @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const username = `user${Date.now()}`;
  const weakPassword = "12345";

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  await pimPage.fillAddEmployeeForm({
    firstName,
    middleName: "Test",
    lastName: "User",
  });

  // Click the visible switch.
  await pimPage.createLoginDetailsSwitch.click();

  // Verify the hidden checkbox is checked.
  await expect(pimPage.createLoginDetailsCheckbox).toBeChecked();

  // Verify login fields are displayed.
  await expect(pimPage.employeeUsernameInput).toBeVisible();

  await expect(pimPage.employeePasswordInput).toBeVisible();

  await expect(pimPage.confirmPasswordInput).toBeVisible();

  // Enter the login details with a weak password.
  await pimPage.employeeUsernameInput.fill(username);

  await pimPage.employeePasswordInput.fill(weakPassword);

  await pimPage.confirmPasswordInput.fill(weakPassword);

  await pimPage.confirmPasswordInput.blur();

  // Verify weak-password validation.
  await expect(pimPage.passwordValidation).toBeVisible();

  await expect(pimPage.passwordValidation).toContainText(
    /at least|characters|password/i,
  );

  // Verify strength when OrangeHRM displays the indicator.
  if (await pimPage.passwordStrengthIndicator.isVisible()) {
    await expect(pimPage.passwordStrengthIndicator).toHaveText(
      /Very Weak|Weak/i,
    );
  }

  // Try to save the invalid form.
  await pimPage.SaveEmployeeButton.click();

  // Employee must not be created.
  await expect(page).toHaveURL(/pim\/addEmployee/);

  await expect(pimPage.passwordValidation).toBeVisible();
});

test("TC_PIM_033 - Required validation should appear when login username is empty @negative @validation @account @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const username = ``;
  const Password = "123457896";

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  await pimPage.fillAddEmployeeForm({
    firstName,
    middleName: "Test",
    lastName: "User",
  });

  await pimPage.createLoginDetailsSwitch.click();

  await expect(pimPage.createLoginDetailsCheckbox).toBeChecked();

  await expect(pimPage.employeeUsernameInput).toBeVisible();

  await expect(pimPage.employeePasswordInput).toBeVisible();

  await expect(pimPage.confirmPasswordInput).toBeVisible();

  await pimPage.employeeUsernameInput.fill(username);

  await pimPage.employeePasswordInput.fill(Password);

  await pimPage.confirmPasswordInput.fill(Password);

  await pimPage.SaveEmployeeButton.click();

  await expect(page).toHaveURL(/pim\/addEmployee/);

  await expect(pimPage.passwordValidation).toBeVisible();
  await expect(pimPage.usernameValidation).toBeVisible();
  await expect(pimPage.usernameValidation).toHaveText("Required");
});

test("TC_PIM_034 - Duplicate validation should appear for an existing login username @negative @validation @account @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const username = `Admin`;
  const Password = "123457896";

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  await pimPage.fillAddEmployeeForm({
    firstName,
    middleName: "Test",
    lastName: "User",
  });

  await pimPage.createLoginDetailsSwitch.click();

  await expect(pimPage.createLoginDetailsCheckbox).toBeChecked();

  await expect(pimPage.employeeUsernameInput).toBeVisible();

  await expect(pimPage.employeePasswordInput).toBeVisible();

  await expect(pimPage.confirmPasswordInput).toBeVisible();

  await pimPage.employeeUsernameInput.fill(username);

  await pimPage.employeeUsernameInput.blur();

  await pimPage.employeePasswordInput.fill(Password);

  await pimPage.confirmPasswordInput.fill(Password);

  await pimPage.SaveEmployeeButton.click();

  await expect(page).toHaveURL(/pim\/addEmployee/);

  await expect(pimPage.passwordValidation).toBeVisible();
  await expect(pimPage.usernameValidation).toBeVisible();
  await expect(pimPage.usernameValidation).toHaveText(
    "Username already exists",
  );
});

test("TC_PIM_035 - Disabled employee account should not be able to login @negative @security @account @regression", async ({
  page,
  loginPage,
  navigationPage,
  dashboardPage,
  pimPage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const middleName = "Test";
  const lastName = "User";
  const username = `user${Date.now()}`;
  const password = "Test@12345";

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployeeWithLoginDetails({
    firstName,
    middleName,
    lastName,
    username,
    password,
    status: "Disabled",
  });
  await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
    timeout: 15_000,
  });

  await expect(pimPage.personalDetailsHeading).toBeVisible();

  await expect(pimPage.firstnameInput).toHaveValue(firstName);

  await expect(pimPage.employeeID).toHaveValue(employeeId);

  // Logout from the Admin account.
  await dashboardPage.clickOnLogout();

  await expect(page).toHaveURL(/auth\/login/);

  // Attempt to login using the disabled account.
  await loginPage.login(username, password);

  await expect(loginPage.errorMessage).toBeVisible();

  await expect(loginPage.errorMessage).toHaveText("Invalid credentials");

  await loginPage.verifyLoginUnsuccessful();

  // Login again as Admin for cleanup.
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoPIM();
  await pimPage.gotoEmployeeList();

  await pimPage.filterEmployeeList({ employeeId });
  await pimPage.clickOnFilterSearch();

  await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);

  await pimPage.deleteEmployeeById(employeeId);

  await pimPage.filterEmployeeList({ employeeId });
  await pimPage.clickOnFilterSearch();

  await pimPage.verifyNoEmployeeRecordsFound(employeeId);
});


test("TC_PIM_036 - Enabled employee account should login successfully @positive @security @account @regression", async ({
  page,
  loginPage,
  navigationPage,dashboardPage,
  pimPage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const middleName = "Test";
  const lastName = "User";
  const username = `user${Date.now()}`;
  const password = "Test@12345";

  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployeeWithLoginDetails({
    firstName,
    middleName,
    lastName,
    username,
    password,
    status: "Enabled",
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

  await dashboardPage.clickOnLogout();

    await loginPage.login(username, password);

    await loginPage.verifyLoginSuccessful();

});

