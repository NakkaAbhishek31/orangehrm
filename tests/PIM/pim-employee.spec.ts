import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";
import path from "node:path";
import loginData from "../../test-data/login.data.json";
import pimData from "../../test-data/pimEmployee.data.json";

const unique = () => `${Date.now()}${Math.floor(Math.random() * 1000)}`;
const employeeFrom = (d: {
  firstNamePrefix: string;
  middleName: string;
  lastName: string;
}) => ({
  firstName: `${d.firstNamePrefix}${unique()}`,
  middleName: d.middleName,
  lastName: d.lastName,
});

test.describe("PIM Employee", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visitPage();
    await loginPage.login(
      loginData.validAdmin.username,
      loginData.validAdmin.password,
    );
    await loginPage.verifyLoginSuccessful();
  });

  test("TC_PIM_001 - Admin should add a new employee successfully @positive @regression", async ({
    page,
    navigationPage,
    pimPage,
  }) => {
    const employee = employeeFrom(pimData.TC_PIM_001.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);
    await expect(page).toHaveURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
      timeout: 15_000,
    });
    await expect(pimPage.personalDetailsHeading).toBeVisible();
    await expect(pimPage.firstnameInput).toHaveValue(employee.firstName);
    await expect(pimPage.middlenameInput).toHaveValue(employee.middleName);
    await expect(pimPage.lastnameInput).toHaveValue(employee.lastName);
    await expect(pimPage.employeeID).toHaveValue(employeeId);
  });

  test("TC_PIM_006 - Admin should update employee personal details @positive @regression", async ({
    page,
    navigationPage,
    pimPage,
  }) => {
    const data = pimData.TC_PIM_006;
    const employee = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);
    await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
      timeout: 20_000,
    });
    await pimPage.updatePersonalDetails(data.updatedEmployee);
    await expect(pimPage.firstnameInput).toHaveValue(employee.firstName);
    await expect(pimPage.middlenameInput).toHaveValue(
      data.updatedEmployee.middleName,
    );
    await expect(pimPage.lastnameInput).toHaveValue(
      data.updatedEmployee.lastName,
    );
    await expect(pimPage.employeeID).toHaveValue(employeeId);
  });

  test("TC_PIM_008 - Admin should upload an employee profile picture @positive @upload @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = pimData.TC_PIM_008;
    const employee = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee({
      ...employee,
      profilePicturePath: path.resolve(data.profilePicturePath),
    });
    await expect(pimPage.personalDetailsHeading).toBeVisible();
    await expect(pimPage.profilePicturePreview).toBeVisible();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(
      employeeId,
      employee.firstName,
      employee.lastName,
    );
    await pimPage.deleteEmployeeById(employeeId);
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyNoEmployeeRecordsFound(employeeId);
  });

  test("TC_PIM_009 - Invalid profile picture format should be rejected @negative @upload @validation", async ({
    navigationPage,
    pimPage,
  }) => {
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    await expect(pimPage.profilePictureInput).toBeAttached();
    await pimPage.verifyInvalidProfilePicture(
      path.resolve(pimData.TC_PIM_009.invalidProfilePicturePath),
    );
  });

  test("TC_PIM_023 - Admin should cancel adding a new employee @negative @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const employee = employeeFrom(pimData.TC_PIM_023.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    await pimPage.fillAddEmployeeForm(employee);
    await pimPage.cancelAddingEmployee();
  });

  for (const id of ["TC_PIM_024", "TC_PIM_025", "TC_PIM_026"] as const) {
    test(`${id} - Required employee-name validation @negative @validation @regression`, async ({
      page,
      navigationPage,
      pimPage,
    }) => {
      const data = pimData[id];
      const raw = data.employee;
      const employee = {
        firstName:
          "firstNamePrefix" in raw
            ? `${raw.firstNamePrefix}${unique()}`
            : raw.firstName,
        middleName: raw.middleName,
        lastName:
          "lastNamePrefix" in raw
            ? `${raw.lastNamePrefix}${unique()}`
            : raw.lastName,
      };
      await navigationPage.gotoPIM();
      await pimPage.gotoAddEmployee();
      await pimPage.saveEmployeeWithoutRequiredDetails(employee);
      await expect(pimPage.requiredValidationMessages).toHaveCount(
        data.expectedValidations.length,
      );
      await expect(pimPage.requiredValidationMessages).toHaveText(
        data.expectedValidations,
      );
      await expect(page).toHaveURL(/pim\/addEmployee/);
    });
  }

  test("TC_PIM_027 - Duplicate validation should appear for an existing employee ID @negative @validation @regression", async ({
    page,
    navigationPage,
    pimPage,
  }) => {
    const data = pimData.TC_PIM_027;
    const employee = employeeFrom(data.employee);
    const duplicate = employeeFrom(data.duplicateEmployee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);
    await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
      timeout: 15_000,
    });
    await pimPage.gotoAddEmployee();
    await pimPage.fillAddEmployeeForm({ ...duplicate, employeeId });
    await expect(pimPage.employeeIdValidation).toHaveText(data.expectedError);
    await pimPage.cancelAddingEmployee();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_PIM_030 - Admin should create an employee with login credentials @positive @account @regression", async ({
    page,
    navigationPage,
    pimPage,
  }) => {
    const data = pimData.TC_PIM_030;
    const employee = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployeeWithLoginDetails({
      ...employee,
      username: `${data.login.usernamePrefix}${unique()}`,
      password: data.login.password,
      status: data.login.status as "Enabled",
    });
    await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
      timeout: 15_000,
    });
    await expect(pimPage.employeeID).toHaveValue(employeeId);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_PIM_031 - Password mismatch validation should appear @negative @validation @account @regression", async ({
    page,
    navigationPage,
    pimPage,
  }) => {
    const data = pimData.TC_PIM_031;
    const employee = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    await pimPage.fillAddEmployeeForm(employee);
    await pimPage.createLoginDetailsSwitch.click();
    await pimPage.employeeUsernameInput.fill(
      `${data.login.usernamePrefix}${unique()}`,
    );
    await pimPage.employeePasswordInput.fill(data.login.password);
    await pimPage.confirmPasswordInput.fill(data.login.confirmPassword);
    await pimPage.confirmPasswordInput.blur();
    await expect(pimPage.confirmPasswordValidation).toHaveText(
      data.expectedError,
    );
    await pimPage.SaveEmployeeButton.click();
    await expect(page).toHaveURL(/pim\/addEmployee/);
  });

  test("TC_PIM_032 - Weak password validation should appear @negative @validation @account @regression", async ({
    page,
    navigationPage,
    pimPage,
  }) => {
    const data = pimData.TC_PIM_032;
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    await pimPage.fillAddEmployeeForm(employeeFrom(data.employee));
    await pimPage.createLoginDetailsSwitch.click();
    await pimPage.employeeUsernameInput.fill(
      `${data.login.usernamePrefix}${unique()}`,
    );
    await pimPage.employeePasswordInput.fill(data.login.password);
    await pimPage.confirmPasswordInput.fill(data.login.password);
    await pimPage.confirmPasswordInput.blur();
    await expect(pimPage.passwordValidation).toContainText(
      new RegExp(data.expectedPasswordPattern, "i"),
    );
    if (await pimPage.passwordStrengthIndicator.isVisible())
      await expect(pimPage.passwordStrengthIndicator).toHaveText(
        new RegExp(data.expectedStrengthPattern, "i"),
      );
    await pimPage.SaveEmployeeButton.click();
    await expect(page).toHaveURL(/pim\/addEmployee/);
  });

  for (const id of ["TC_PIM_033", "TC_PIM_034"] as const) {
    test(`${id} - Employee username validation @negative @validation @account @regression`, async ({
      page,
      navigationPage,
      pimPage,
    }) => {
      const data = pimData[id];
      await navigationPage.gotoPIM();
      await pimPage.gotoAddEmployee();
      await pimPage.fillAddEmployeeForm(employeeFrom(data.employee));
      await pimPage.createLoginDetailsSwitch.click();
      await pimPage.employeeUsernameInput.fill(data.login.username);
      await pimPage.employeePasswordInput.fill(data.login.password);
      await pimPage.confirmPasswordInput.fill(data.login.password);
      await pimPage.SaveEmployeeButton.click();
      await expect(page).toHaveURL(/pim\/addEmployee/);
      await expect(pimPage.usernameValidation).toHaveText(data.expectedError);
    });
  }

  test("TC_PIM_035 - Disabled employee account should not login @negative @security @account @regression", async ({
    page,
    loginPage,
    navigationPage,
    dashboardPage,
    pimPage,
  }) => {
    const data = pimData.TC_PIM_035;
    const employee = employeeFrom(data.employee);
    const username = `${data.login.usernamePrefix}${unique()}`;
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployeeWithLoginDetails({
      ...employee,
      username,
      password: data.login.password,
      status: data.login.status as "Disabled",
    });
    await dashboardPage.clickOnLogout();
    await loginPage.login(username, data.login.password);
    await expect(loginPage.errorMessage).toHaveText(data.expectedError);
    await loginPage.login(
      loginData.validAdmin.username,
      loginData.validAdmin.password,
    );
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_PIM_036 - Enabled employee account should login successfully @positive @security @account @regression", async ({
    loginPage,
    navigationPage,
    dashboardPage,
    pimPage,
  }) => {
    const data = pimData.TC_PIM_036;
    const employee = employeeFrom(data.employee);
    const username = `${data.login.usernamePrefix}${unique()}`;
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    await pimPage.addEmployeeWithLoginDetails({
      ...employee,
      username,
      password: data.login.password,
      status: data.login.status as "Enabled",
    });
    await dashboardPage.clickOnLogout();
    await loginPage.login(username, data.login.password);
    await loginPage.verifyLoginSuccessful();
  });
});
