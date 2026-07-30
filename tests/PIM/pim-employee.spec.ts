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
  await expect(pimPage.middlenameInput).toHaveValue("Test");
  await expect(pimPage.lastnameInput).toHaveValue("User");
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
  await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
    timeout: 15_000,
  });

  await expect(pimPage.personalDetailsHeading).toBeVisible();
  await expect(pimPage.firstnameInput).toHaveValue(firstName);
  await expect(pimPage.middlenameInput).toHaveValue("Test");
  await expect(pimPage.lastnameInput).toHaveValue("User");

  await pimPage.gotoEmployeeList();
  await pimPage.filterEmployeeList({ employeeId: employeeId });
  await pimPage.clickOnFilterSearch();
  await pimPage.verifyEmployeeSearchResult(employeeId, firstName, "User");
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
