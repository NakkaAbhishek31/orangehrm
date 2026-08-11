import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";
import loginData from "../../test-data/login.data.json";
import adminData from "../../test-data/admin.data.json";

const unique = () => `${Date.now()}${Math.floor(Math.random() * 1000)}`;
const employeeFrom = (
  d: { firstNamePrefix: string; middleName: string; lastName: string },
  value = unique(),
) => ({
  firstName: `${d.firstNamePrefix}${value}`,
  middleName: d.middleName,
  lastName: d.lastName,
});

test.describe("Admin - System Users", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.visitPage();
    await loginPage.login(
      loginData.validAdmin.username,
      loginData.validAdmin.password,
    );
    await loginPage.verifyLoginSuccessful();
  });

  test("TC_ADMIN_041 - Admin should navigate to the System Users page @smoke @navigation @regression", async ({
    page,
    navigationPage,
    adminPage,
  }) => {
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await expect(page).toHaveURL(
      new RegExp(adminData.TC_ADMIN_041.expectedUrlPattern),
    );
    await expect(adminPage.systemUsersHeading).toBeVisible();
    await expect(adminPage.usernameInput).toBeVisible();
    await expect(adminPage.userRoleDropdown).toBeVisible();
    await expect(adminPage.employeeNameInput).toBeVisible();
    await expect(adminPage.statusDropdown).toBeVisible();
    await expect(adminPage.searchButton).toBeVisible();
    await expect(adminPage.resetButton).toBeVisible();
    await expect(adminPage.addButton).toBeVisible();
    await expect(adminPage.systemUsersTable).toBeVisible();
  });

  test("TC_ADMIN_042 - Admin should search for a system user by username @positive @search @regression", async ({
    navigationPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_042;
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.searchSystemUsers({ username: data.username });
    await adminPage.verifySystemUserResult({ username: data.username });
    await adminPage.resetSystemUserFilters();
  });

  test("TC_ADMIN_043 - Admin should see no records for a nonexistent username @negative @search @regression", async ({
    navigationPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_043;
    const username = `${data.usernamePrefix}${unique()}`;
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.searchSystemUsers({ username });
    await expect(adminPage.noRecordsFound).toBeVisible();
    await expect(adminPage.userRows).toHaveCount(0);
    await expect(adminPage.usernameInput).toHaveValue(username);
    await adminPage.resetSystemUserFilters();
    await expect(adminPage.usernameInput).toHaveValue(data.emptyValue);
  });

  test("TC_ADMIN_044 - Admin should filter system users by user role @positive @filter @regression", async ({
    navigationPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_044;
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.searchSystemUsers({ userRole: data.userRole });
    const count = await adminPage.userRows.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++)
      await expect(
        adminPage.userRows.nth(i).locator(".oxd-table-cell").nth(2),
      ).toHaveText(data.userRole);
    await adminPage.resetSystemUserFilters();
    await expect(adminPage.userRoleDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_ADMIN_045 - Admin should filter system users by enabled status @positive @filter @regression", async ({
    navigationPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_045;
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.searchSystemUsers({ status: data.status });
    const count = await adminPage.userRows.count();
    expect(count).toBeGreaterThan(0);
    for (let i = 0; i < count; i++)
      await expect(
        adminPage.userRows.nth(i).locator(".oxd1-table-cell").nth(4),
      ).toHaveText(data.status);
    await adminPage.resetSystemUserFilters();
    await expect(adminPage.statusDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_ADMIN_046 - Admin should search using username, role, and status filters @positive @filter @regression", async ({
    navigationPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_046;
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.searchSystemUsers(data.filters);
    await expect(adminPage.userRows.first()).toBeVisible();
    await adminPage.resetSystemUserFilters();
    await expect(adminPage.usernameInput).toHaveValue(data.emptyValue);
    await expect(adminPage.userRoleDropdown).toContainText(
      data.defaultDropdownValue,
    );
    await expect(adminPage.statusDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_ADMIN_047 - Admin should add a new ESS system user successfully @positive @create @regression", async ({
    navigationPage,
    pimPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_047;
    const value = unique();
    const employee = employeeFrom(data.employee, value);
    const username = `${data.systemUser.usernamePrefix}${value}`;
    const employeeName = `${employee.firstName} ${employee.middleName} ${employee.lastName}`;
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();
    await adminPage.fillSystemUserForm({
      ...data.systemUser,
      employeeName,
      username,
    });
    await adminPage.saveSystemUser();
    await adminPage.searchSystemUsers({ username });
    await adminPage.verifySystemUserResult({
      username,
      userRole: data.systemUser.userRole,
      employeeName: `${employee.firstName} ${employee.lastName}`,
      status: data.systemUser.status,
    });
    await adminPage.deleteSystemUserByUsername(username);
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_ADMIN_048 - Required validation should appear when System User fields are empty @negative @validation @regression", async ({
    page,
    navigationPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_048;
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();
    await adminPage.addUserSaveButton.click();
    await expect(adminPage.validationMessages).toHaveCount(
      data.expectedValidations.length,
    );
    await expect(adminPage.validationMessages).toHaveText(
      data.expectedValidations,
    );
    await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern));
  });

  test("TC_ADMIN_049 - Admin should cancel adding a new System User @negative @cancel @regression", async ({
    page,
    navigationPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_049;
    const username = `${data.usernamePrefix}${unique()}`;
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();
    await adminPage.addUsernameInput.fill(username);
    await adminPage.addPasswordInput.fill(data.password);
    await adminPage.addConfirmPasswordInput.fill(data.password);
    await adminPage.addUserCancelButton.click();
    await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern));
    await adminPage.searchSystemUsers({ username });
    await expect(adminPage.userRows).toHaveCount(0);
  });

  test("TC_ADMIN_050 - Duplicate validation should appear for an existing username @negative @validation @regression", async ({
    navigationPage,
    pimPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_050;
    const employee = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();
    await adminPage.fillSystemUserForm({
      ...data.systemUser,
      employeeName: `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
    });
    await adminPage.addUsernameInput.blur();
    await expect(adminPage.usernameValidation).toHaveText(
      new RegExp(data.expectedErrorPattern, "i"),
    );
    await adminPage.addUserCancelButton.click();
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_ADMIN_051 - Password mismatch validation should appear @negative @validation @regression", async ({
    navigationPage,
    pimPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_051;
    const value = unique();
    const employee = employeeFrom(data.employee, value);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();
    await adminPage.fillSystemUserForm({
      userRole: data.systemUser.userRole,
      employeeName: `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
      status: data.systemUser.status,
      username: `${data.systemUser.usernamePrefix}${value}`,
      password: data.systemUser.password,
    });
    await adminPage.addConfirmPasswordInput.fill(
      data.systemUser.confirmPassword,
    );
    await adminPage.addConfirmPasswordInput.blur();
    await expect(adminPage.confirmPasswordValidation).toHaveText(
      data.expectedError,
    );
    await adminPage.addUserCancelButton.click();
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_ADMIN_052 - Required validation should appear when adding an empty System User @negative @validation @regression", async ({
    page,
    navigationPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_052;
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();
    await adminPage.addUserSaveButton.click();
    await expect(adminPage.validationMessages).toHaveCount(
      data.expectedValidations.length,
    );
    await expect(adminPage.validationMessages).toHaveText(
      data.expectedValidations,
    );
    await expect(page).toHaveURL(new RegExp(data.expectedUrlPattern));
  });

  test("TC_ADMIN_053 - Admin should reset System User search filters @positive @filter @regression", async ({
    navigationPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_053;
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.searchSystemUsers(data.filters);
    await adminPage.resetSystemUserFilters();
    await expect(adminPage.usernameInput).toHaveValue(data.emptyValue);
    await expect(adminPage.employeeNameInput).toHaveValue(data.emptyValue);
    await expect(adminPage.userRoleDropdown).toContainText(
      data.defaultDropdownValue,
    );
    await expect(adminPage.statusDropdown).toContainText(
      data.defaultDropdownValue,
    );
  });

  test("TC_ADMIN_054 - Admin should edit an existing System User status @positive @edit @regression", async ({
    navigationPage,
    pimPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_054;
    const value = unique();
    const employee = employeeFrom(data.employee, value);
    const username = `${data.systemUser.usernamePrefix}${value}`;
    const employeeName = `${employee.firstName} ${employee.middleName} ${employee.lastName}`;
    const tableName = `${employee.firstName} ${employee.lastName}`;
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();
    await adminPage.fillSystemUserForm({
      userRole: data.systemUser.userRole,
      employeeName,
      status: data.systemUser.initialStatus,
      username,
      password: data.systemUser.password,
    });
    await adminPage.saveSystemUser();
    await adminPage.searchSystemUsers({ username });
    await adminPage.openSystemUserForEditing(username);
    await adminPage.updateSystemUserStatus(data.systemUser.updatedStatus);
    await adminPage.searchSystemUsers({ username });
    await adminPage.verifySystemUserResult({
      username,
      userRole: data.systemUser.userRole,
      employeeName: tableName,
      status: data.systemUser.updatedStatus,
    });
    await adminPage.deleteSystemUserByUsername(username);
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_ADMIN_055 - Admin should delete an existing System User @positive @delete @regression", async ({
    navigationPage,
    pimPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_055;
    test.setTimeout(data.timeout);
    const value = unique();
    const employee = employeeFrom(data.employee, value);
    const username = `${data.systemUser.usernamePrefix}${value}`;
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();
    await adminPage.fillSystemUserForm({
      ...data.systemUser,
      username,
      employeeName: `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
    });
    await adminPage.saveSystemUser();
    await adminPage.searchSystemUsers({ username });
    await expect(adminPage.userRows).toHaveCount(1);
    await adminPage.deleteSystemUserByUsername(username);
    await adminPage.searchSystemUsers({ username });
    await expect(adminPage.userRows).toHaveCount(0);
    await expect(adminPage.noRecordsFound).toBeVisible();
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_ADMIN_056 - Admin should cancel System User deletion @negative @delete @regression", async ({
    navigationPage,
    pimPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_056;
    test.setTimeout(data.timeout);
    const value = unique();
    const employee = employeeFrom(data.employee, value);
    const username = `${data.systemUser.usernamePrefix}${value}`;
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();
    await adminPage.fillSystemUserForm({
      ...data.systemUser,
      username,
      employeeName: `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
    });
    await adminPage.saveSystemUser();
    await adminPage.searchSystemUsers({ username });
    await adminPage.cancelSystemUserDeletion(username);
    await expect(adminPage.userRows).toHaveCount(1);
    await adminPage.deleteSystemUserByUsername(username);
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_ADMIN_057 - Admin should delete multiple System Users using bulk selection @positive @bulk-delete @regression", async ({
    navigationPage,
    pimPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_057;
    test.setTimeout(data.timeout);
    const value = unique();
    const first = employeeFrom(data.firstEmployee, value);
    const second = employeeFrom(data.secondEmployee, value);
    const firstUsername = `${data.firstUsernamePrefix}${value}`;
    const secondUsername = `${data.secondUsernamePrefix}${value}`;
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const firstId = await pimPage.addEmployee(first);
    await pimPage.gotoAddEmployee();
    const secondId = await pimPage.addEmployee(second);
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    for (const [employee, username] of [
      [first, firstUsername],
      [second, secondUsername],
    ] as const) {
      await adminPage.gotoAddSystemUser();
      await adminPage.fillSystemUserForm({
        userRole: data.userRole,
        employeeName: `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
        status: data.status,
        username,
        password: data.password,
      });
      await adminPage.saveSystemUser();
    }
    await adminPage.resetSystemUserFilters();
    await adminPage.selectSystemUsers([firstUsername, secondUsername]);
    await adminPage.deleteSelectedSystemUsers();
    for (const username of [firstUsername, secondUsername]) {
      await adminPage.searchSystemUsers({ username });
      await expect(adminPage.userRows).toHaveCount(0);
      await adminPage.resetSystemUserFilters();
    }
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    for (const employeeId of [firstId, secondId]) {
      await pimPage.filterEmployeeList({ employeeId });
      await pimPage.clickOnFilterSearch();
      await pimPage.deleteEmployeeById(employeeId);
      await pimPage.gotoEmployeeList();
    }
  });

  test("TC_ADMIN_058 - Admin should select and deselect all visible System Users @positive @selection @regression", async ({
    navigationPage,
    adminPage,
  }) => {
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await expect(adminPage.loadingSpinner).toBeHidden();
    await expect(adminPage.userRows.first()).toBeVisible();
    await adminPage.selectAllVisibleSystemUsers();
    await expect(adminPage.deleteSelectedButton).toBeVisible();
    await adminPage.deselectAllVisibleSystemUsers();
    await expect(adminPage.deleteSelectedButton).not.toBeVisible();
  });

  test("TC_ADMIN_059 - Admin should navigate through System Users pages @pagination @regression", async ({
    navigationPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_059;
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await expect(adminPage.loadingSpinner).toBeHidden();
    const firstPage = await adminPage.getVisibleSystemUsernames();
    expect(firstPage.length).toBeGreaterThan(0);
    test.skip((await adminPage.nextPageButton.count()) === 0, data.skipMessage);
    await adminPage.goToNextSystemUsersPage();
    await expect
      .poll(() => adminPage.getVisibleSystemUsernames(), {
        timeout: data.pollTimeout,
      })
      .not.toEqual(firstPage);
    await adminPage.goToPreviousSystemUsersPage();
    await expect
      .poll(() => adminPage.getVisibleSystemUsernames(), {
        timeout: data.pollTimeout,
      })
      .toEqual(firstPage);
  });

  test("TC_ADMIN_060 - Minimum-length validation should appear for a short System User username @negative @validation @regression", async ({
    page,
    navigationPage,
    pimPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_060;
    test.setTimeout(data.timeout);
    const employee = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();
    await adminPage.fillSystemUserForm({
      ...data.systemUser,
      employeeName: `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
    });
    await adminPage.addUsernameInput.blur();
    await expect(adminPage.usernameValidation).toHaveText(data.expectedError);
    await expect(page).toHaveURL(/admin\/saveSystemUser/);
    await adminPage.addUserCancelButton.click();
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_ADMIN_061 - Weak password validation should appear while adding a System User @negative @validation @security @regression", async ({
    page,
    navigationPage,
    pimPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_061;
    const value = unique();
    const employee = employeeFrom(data.employee, value);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();
    await adminPage.fillSystemUserForm({
      ...data.systemUser,
      username: `${data.systemUser.usernamePrefix}${value}`,
      employeeName: `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
    });
    await adminPage.addPasswordInput.blur();
    await expect(adminPage.passwordValidation).toContainText(
      new RegExp(data.expectedErrorPattern, "i"),
    );
    await expect(page).toHaveURL(/admin\/saveSystemUser/);
    await adminPage.addUserCancelButton.click();
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_ADMIN_062 - Admin should filter System Users by employee name @positive @filter @regression", async ({
    navigationPage,
    pimPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_062;
    const value = unique();
    const employee = employeeFrom(data.employee, value);
    const username = `${data.systemUser.usernamePrefix}${value}`;
    const employeeName = `${employee.firstName} ${employee.middleName} ${employee.lastName}`;
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();
    await adminPage.fillSystemUserForm({
      ...data.systemUser,
      username,
      employeeName,
    });
    await adminPage.saveSystemUser();
    await adminPage.searchSystemUsers({ employeeName });
    await expect(adminPage.userRows).toHaveCount(1);
    await adminPage.resetSystemUserFilters();
    await expect(adminPage.employeeNameInput).toHaveValue(data.emptyValue);
    await adminPage.searchSystemUsers({ username });
    await adminPage.deleteSystemUserByUsername(username);
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_ADMIN_063 - Admin should update an existing System User username @positive @edit @regression", async ({
    navigationPage,
    pimPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_063;
    const value = unique();
    const employee = employeeFrom(data.employee, value);
    const original = `${data.systemUser.originalUsernamePrefix}${value}`;
    const updated = `${data.systemUser.updatedUsernamePrefix}${value}`;
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();
    await adminPage.fillSystemUserForm({
      userRole: data.systemUser.userRole,
      status: data.systemUser.status,
      password: data.systemUser.password,
      username: original,
      employeeName: `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
    });
    await adminPage.saveSystemUser();
    await adminPage.searchSystemUsers({ username: original });
    await adminPage.openSystemUserForEditing(original);
    await adminPage.updateSystemUsername(updated);
    await adminPage.searchSystemUsers({ username: updated });
    await expect(adminPage.userRows).toHaveCount(1);
    await adminPage.deleteSystemUserByUsername(updated);
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_ADMIN_064 - Admin should cancel editing a System User @negative @cancel @edit @regression", async ({
    navigationPage,
    pimPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_064;
    test.setTimeout(data.timeout);
    const value = unique();
    const employee = employeeFrom(data.employee, value);
    const original = `${data.systemUser.originalUsernamePrefix}${value}`;
    const cancelled = `${data.systemUser.cancelledUsernamePrefix}${value}`;
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();
    await adminPage.fillSystemUserForm({
      userRole: data.systemUser.userRole,
      status: data.systemUser.status,
      password: data.systemUser.password,
      username: original,
      employeeName: `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
    });
    await adminPage.saveSystemUser();
    await adminPage.searchSystemUsers({ username: original });
    await adminPage.openSystemUserForEditing(original);
    await adminPage.addUsernameInput.fill(cancelled);
    await adminPage.addUserCancelButton.click();
    await adminPage.searchSystemUsers({ username: cancelled });
    await expect(adminPage.userRows).toHaveCount(0);
    await adminPage.resetSystemUserFilters();
    await adminPage.searchSystemUsers({ username: original });
    await expect(adminPage.userRows).toHaveCount(1);
    await adminPage.deleteSystemUserByUsername(original);
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_ADMIN_065 - Invalid validation should appear for a nonexistent employee name @negative @validation @autocomplete @regression", async ({
    page,
    navigationPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_065;
    const value = unique();
    const invalidName = `${data.invalidEmployeeNamePrefix}${value}`;
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();
    await adminPage.addUserRoleDropdown.click();
    await page
      .locator(".oxd-select-dropdown:visible")
      .getByText(data.userRole, { exact: true })
      .click();
    await adminPage.addStatusDropdown.click();
    await page
      .locator(".oxd-select-dropdown:visible")
      .getByText(data.status, { exact: true })
      .click();
    await adminPage.addEmployeeNameInput.fill(invalidName);
    await expect(
      page
        .locator(".oxd-autocomplete-dropdown:visible")
        .getByText(data.expectedAutocompleteMessage, { exact: true }),
    ).toBeVisible();
    await adminPage.addEmployeeNameInput.press("Escape");
    await adminPage.addUsernameInput.fill(`${data.usernamePrefix}${value}`);
    await adminPage.addPasswordInput.fill(data.password);
    await adminPage.addConfirmPasswordInput.fill(data.password);
    await adminPage.addUserSaveButton.click();
    await expect(adminPage.employeeNameValidation).toHaveText(
      data.expectedError,
    );
    await expect(page).toHaveURL(/admin\/saveSystemUser/);
    await adminPage.addUserCancelButton.click();
  });

  test("TC_ADMIN_066 - Admin should filter System Users by disabled status @positive @filter @status @regression", async ({
    navigationPage,
    pimPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_066;
    test.setTimeout(data.timeout);
    const value = unique();
    const employee = employeeFrom(data.employee, value);
    const username = `${data.systemUser.usernamePrefix}${value}`;
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const employeeId = await pimPage.addEmployee(employee);
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.gotoAddSystemUser();
    await adminPage.fillSystemUserForm({
      ...data.systemUser,
      username,
      employeeName: `${employee.firstName} ${employee.middleName} ${employee.lastName}`,
    });
    await adminPage.saveSystemUser();
    await adminPage.searchSystemUsers({
      username,
      status: data.systemUser.status,
    });
    await expect(adminPage.userRows).toHaveCount(1);
    await adminPage.deleteSystemUserByUsername(username);
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_ADMIN_067 - Admin should open an existing System User for editing @positive @navigation @edit @regression", async ({
    page,
    navigationPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_067;
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.searchSystemUsers({ username: data.username });
    await adminPage.openSystemUserForEditing(data.username);
    await expect(page).toHaveURL(/admin\/saveSystemUser\/\d+/);
    await expect(adminPage.addUsernameInput).toHaveValue(data.username);
    await expect(adminPage.addUserRoleDropdown).toContainText(data.userRole);
    await expect(adminPage.addStatusDropdown).toContainText(data.status);
    await adminPage.addUserCancelButton.click();
  });

  test("TC_ADMIN_068 - Admin should select and deselect an individual System User @positive @selection @regression", async ({
    page,
    navigationPage,
    adminPage,
  }) => {
    const data = adminData.TC_ADMIN_068;
    await navigationPage.gotoAdmin();
    await adminPage.gotoUserManagementUsers();
    await adminPage.searchSystemUsers({ username: data.username });
    await expect(adminPage.userRows).toHaveCount(1);
    const row = adminPage.userRows.filter({
      has: page
        .locator(".oxd-table-cell")
        .nth(1)
        .getByText(data.username, { exact: true }),
    });
    const checkbox = row.locator('input[type="checkbox"]');
    const label = row.locator(".oxd-checkbox-wrapper label");
    await label.click();
    await expect(checkbox).toBeChecked();
    await label.click();
    await expect(checkbox).not.toBeChecked();
  });

  test("TC_PIM_069 - Admin should find a newly created employee by name @positive @search @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_069;
    const employee = employeeFrom(data.employee);

    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();

    const employeeId = await pimPage.addEmployee(employee);

    await pimPage.gotoEmployeeList();

    const fullName =
      `${employee.firstName} ` +
      `${employee.middleName} ` +
      `${employee.lastName}`;

    await pimPage.selectEmployeeFromAutocomplete(employee.firstName, fullName);

    await pimPage.clickOnFilterSearch();

    await pimPage.verifyEmployeeSearchResult(
      employeeId,
      employee.firstName,
      employee.lastName,
    );

    await pimPage.deleteEmployeeById(employeeId);
  });

  test("TC_PIM_070 - Employee search should return no records for an invalid ID @negative @search @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const id = `${adminData.TC_PIM_070.invalidEmployeeIdPrefix}${Date.now()}`;
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyNoEmployeeRecordsFound(id);
  });

  test("TC_PIM_071 - Deleted employee should not appear in search results @positive @delete @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_071;
    test.setTimeout(data.timeout);
    const employee = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(employee);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(id);
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyNoEmployeeRecordsFound(id);
  });

  test("TC_PIM_072 - Reset should clear employee ID and name filters @positive @filter @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_072;
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({
      employeeId: data.employeeId,
      employeeName: data.employeeName,
    });
    await pimPage.resetEmployeeFilters();
    await expect(pimPage.employeeIdFilterInput).toHaveValue(data.emptyValue);
    await expect(pimPage.employeeNameFilterInput).toHaveValue(data.emptyValue);
  });

  test("TC_PIM_073 - Admin should open employee details after searching by ID @positive @navigation @regression", async ({
    page,
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_073;
    test.setTimeout(data.timeout);
    const employee = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(employee);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.openEmployeeById(id);
    await expect(page).toHaveURL(/pim\/viewPersonalDetails\/empNumber\/\d+/);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_074 - Employee should remain after deletion is cancelled @negative @delete @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_074;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.cancelEmployeeDeletion(id);
    await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_075 - ID and name belonging to different employees should return no records @negative @search @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_075;
    test.setTimeout(data.timeout);
    const value = unique();
    const first = employeeFrom(data.firstEmployee, value);
    const second = employeeFrom(data.secondEmployee, value);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const firstId = await pimPage.addEmployee(first);
    await pimPage.gotoAddEmployee();
    const secondId = await pimPage.addEmployee(second);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({
      employeeId: firstId,
      employeeName: second.firstName,
    });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyNoEmployeeRecordsFound(firstId);
    for (const id of [firstId, secondId]) {
      await pimPage.resetEmployeeFilters();
      await pimPage.filterEmployeeList({ employeeId: id });
      await pimPage.clickOnFilterSearch();
      await pimPage.deleteEmployeeById(id);
    }
  });

  test("TC_PIM_076 - Admin should search for two employees independently @positive @search @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_076;
    test.setTimeout(data.timeout);
    const value = unique();
    const employees = [
      employeeFrom(data.firstEmployee, value),
      employeeFrom(data.secondEmployee, value),
    ];
    const ids: string[] = [];
    await navigationPage.gotoPIM();
    for (const e of employees) {
      await pimPage.gotoAddEmployee();
      ids.push(await pimPage.addEmployee(e));
    }
    await pimPage.gotoEmployeeList();
    for (let i = 0; i < ids.length; i++) {
      await pimPage.filterEmployeeList({ employeeId: ids[i] });
      await pimPage.clickOnFilterSearch();
      await pimPage.verifyEmployeeSearchResult(
        ids[i],
        employees[i].firstName,
        employees[i].lastName,
      );
      await pimPage.resetEmployeeFilters();
    }
    for (const id of ids) {
      await pimPage.filterEmployeeList({ employeeId: id });
      await pimPage.clickOnFilterSearch();
      await pimPage.deleteEmployeeById(id);
    }
  });

  test("TC_PIM_077 - Employee should remain searchable after navigating away and returning @positive @navigation @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_077;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_078 - Admin should find an employee using a partial employee name @positive @search @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_078;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.selectEmployeeFromAutocomplete(
      e.firstName.substring(0, data.partialNameLength),
      `${e.firstName} ${e.middleName} ${e.lastName}`,
    );
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_079 - Reset should restore Employee List after unsuccessful search @positive @filter @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_079;
    test.setTimeout(data.timeout);
    const id = `${data.invalidEmployeeIdPrefix}${Date.now()}`;
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyNoEmployeeRecordsFound(id);
    await pimPage.resetEmployeeFilters();
    await expect(pimPage.employeeIdFilterInput).toHaveValue(data.emptyValue);
    await expect(pimPage.employeeNameFilterInput).toHaveValue(data.emptyValue);
    expect((await pimPage.getVisibleEmployeeIds()).length).toBeGreaterThan(0);
  });

  test.skip("TC_PIM_080 - Admin should search for the same employee by ID and then by name @positive @search @regression", async () => {
    // The supplied test ends immediately after gotoAddEmployee().
  });

  test("TC_PIM_081 - Employee details should contain values entered during creation @positive @details @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_081;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await expect(pimPage.firstnameInput).toHaveValue(e.firstName);
    await expect(pimPage.middlenameInput).toHaveValue(e.middleName);
    await expect(pimPage.lastnameInput).toHaveValue(e.lastName);
    await expect(pimPage.employeeID).toHaveValue(id);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_082 - Reset should clear a selected employee name filter @positive @filter @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_082;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.selectEmployeeFromAutocomplete(
      e.firstName,
      `${e.firstName} ${e.middleName} ${e.lastName}`,
    );
    await pimPage.resetEmployeeFilters();
    await expect(pimPage.employeeNameFilterInput).toHaveValue(data.emptyValue);
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_083 - Admin should search using matching employee ID and name @positive @search @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_083;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({
      employeeId: id,
      employeeName: e.firstName,
    });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_084 - Admin should open employee details after cancelling deletion @negative @delete @navigation @regression", async ({
    page,
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_084;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.cancelEmployeeDeletion(id);
    await pimPage.openEmployeeById(id);
    await expect(page).toHaveURL(/pim\/viewPersonalDetails\/empNumber\/\d+/);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_085 - Deleting one employee should not delete another @positive @delete @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_085;
    test.setTimeout(data.timeout);
    const value = unique();
    const first = employeeFrom(data.firstEmployee, value);
    const second = employeeFrom(data.secondEmployee, value);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const firstId = await pimPage.addEmployee(first);
    await pimPage.gotoAddEmployee();
    const secondId = await pimPage.addEmployee(second);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: firstId });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(firstId);
    await pimPage.resetEmployeeFilters();
    await pimPage.filterEmployeeList({ employeeId: secondId });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(
      secondId,
      second.firstName,
      second.lastName,
    );
    await pimPage.deleteEmployeeById(secondId);
  });

  test("TC_PIM_086 - Admin should search again after resetting employee ID filter @positive @filter @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_086;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.resetEmployeeFilters();
    await expect(pimPage.employeeIdFilterInput).toHaveValue(data.emptyValue);
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_087 - Employee should remain after deletion is cancelled @negative @delete @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_087;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.cancelEmployeeDeletion(id);
    await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_088 - Admin should open employee details after searching by employee ID @positive @navigation @regression", async ({
    page,
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_088;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.openEmployeeById(id);
    await expect(page).toHaveURL(/pim\/viewPersonalDetails\/empNumber\/\d+/);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_089 - Deleted employee should not appear after reopening Employee List @positive @delete @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_089;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(id);
    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyNoEmployeeRecordsFound(id);
  });

  test("TC_PIM_090 - Admin should search using employee ID and name together @positive @search @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_090;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({
      employeeId: id,
      employeeName: e.firstName,
    });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
    await expect(pimPage.employeeIdFilterInput).toHaveValue(id);
    await expect(pimPage.employeeNameFilterInput).toHaveValue(
      new RegExp(e.firstName),
    );
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_091 - Admin should reset employee search filters multiple times @positive @filter @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_091;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    for (let i = 0; i < 2; i++) {
      await pimPage.filterEmployeeList({ employeeId: id });
      await expect(pimPage.employeeIdFilterInput).toHaveValue(id);
      await pimPage.resetEmployeeFilters();
      await expect(pimPage.employeeIdFilterInput).toHaveValue(data.emptyValue);
    }
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_092 - Deleting one employee should not delete another @positive @delete @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_092;
    test.setTimeout(data.timeout);
    const value = unique();
    const first = employeeFrom(data.firstEmployee, value);
    const second = employeeFrom(data.secondEmployee, value);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const firstId = await pimPage.addEmployee(first);
    await pimPage.gotoAddEmployee();
    const secondId = await pimPage.addEmployee(second);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: firstId });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(firstId);
    await pimPage.filterEmployeeList({ employeeId: firstId });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyNoEmployeeRecordsFound(firstId);
    await pimPage.resetEmployeeFilters();
    await pimPage.filterEmployeeList({ employeeId: secondId });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(
      secondId,
      second.firstName,
      second.lastName,
    );
    await pimPage.deleteEmployeeById(secondId);
  });

  test("TC_PIM_093 - Admin should distinguish employees with similar names using employee ID @positive @search @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_093;
    test.setTimeout(data.timeout);
    const name = `${data.sharedFirstNamePrefix}${unique()}`;
    const first = {
      firstName: name,
      middleName: data.middleName,
      lastName: data.firstLastName,
    };
    const second = {
      firstName: name,
      middleName: data.middleName,
      lastName: data.secondLastName,
    };
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const firstId = await pimPage.addEmployee(first);
    await pimPage.gotoAddEmployee();
    const secondId = await pimPage.addEmployee(second);
    expect(firstId).not.toBe(secondId);
    await pimPage.gotoEmployeeList();
    for (const [id, e] of [
      [firstId, first],
      [secondId, second],
    ] as const) {
      await pimPage.filterEmployeeList({ employeeId: id });
      await pimPage.clickOnFilterSearch();
      await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
      await pimPage.resetEmployeeFilters();
    }
    for (const id of [secondId, firstId]) {
      await pimPage.filterEmployeeList({ employeeId: id });
      await pimPage.clickOnFilterSearch();
      await pimPage.deleteEmployeeById(id);
      await pimPage.resetEmployeeFilters();
    }
  });

  test("TC_PIM_094 - New employee ID should replace previous employee ID filter @positive @filter @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_094;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: data.invalidEmployeeId });
    await expect(pimPage.employeeIdFilterInput).toHaveValue(
      data.invalidEmployeeId,
    );
    await pimPage.filterEmployeeList({ employeeId: id });
    await expect(pimPage.employeeIdFilterInput).toHaveValue(id);
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_095 - Employee details should remain unchanged after returning from Employee List @positive @details @regression", async ({
    page,
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_095;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.openEmployeeById(id);
    await expect(page).toHaveURL(/pim\/viewPersonalDetails\/empNumber\/\d+/);
    await expect(pimPage.firstnameInput).toHaveValue(e.firstName);
    await expect(pimPage.middlenameInput).toHaveValue(e.middleName);
    await expect(pimPage.lastnameInput).toHaveValue(e.lastName);
    await expect(pimPage.employeeID).toHaveValue(id);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_096 - Admin should search successfully after invalid employee ID search @positive @search @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_096;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: data.invalidEmployeeId });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyNoEmployeeRecordsFound(data.invalidEmployeeId);
    await pimPage.resetEmployeeFilters();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_097 - Admin should search using a partial employee name @positive @search @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_097;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.selectEmployeeFromAutocomplete(
      e.firstName.substring(0, data.partialNameLength),
      `${e.firstName} ${e.middleName} ${e.lastName}`,
    );
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_098 - Employee should remain searchable after deletion is cancelled @negative @delete @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_098;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.cancelEmployeeDeletion(id);
    await pimPage.resetEmployeeFilters();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_099 - Reset should clear employee ID and name together @positive @filter @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_099;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({
      employeeId: id,
      employeeName: e.firstName,
    });
    await expect(pimPage.employeeIdFilterInput).toHaveValue(id);
    await expect(pimPage.employeeNameFilterInput).toHaveValue(
      new RegExp(e.firstName),
    );
    await pimPage.resetEmployeeFilters();
    await expect(pimPage.employeeIdFilterInput).toHaveValue(data.emptyValue);
    await expect(pimPage.employeeNameFilterInput).toHaveValue(data.emptyValue);
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_100 - Admin should return to Employee List after opening employee details @positive @navigation @regression", async ({
    page,
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_100;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.openEmployeeById(id);
    await expect(page).toHaveURL(/pim\/viewPersonalDetails\/empNumber\/\d+/);
    await pimPage.gotoEmployeeList();
    await expect(page).toHaveURL(/pim\/viewEmployeeList/);
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_101 - Admin should verify that a deleted employee cannot be opened @negative @delete @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_101;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.deleteEmployeeById(id);
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyNoEmployeeRecordsFound(id);
    await expect(pimPage.employeeRows).toHaveCount(0);
  });

  test("TC_PIM_102 - Admin should find employee after refreshing Employee List @positive @search @regression", async ({
    page,
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_102;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await page.reload();
    await expect(page).toHaveURL(/pim\/viewEmployeeList/);
    await expect(pimPage.loadingSpinner).toBeHidden({
      timeout: data.spinnerTimeout,
    });
    await pimPage.filterEmployeeList({ employeeId: id });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_103 - Search filters should retain values after clicking Search @positive @filter @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_103;
    test.setTimeout(data.timeout);
    const e = employeeFrom(data.employee);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const id = await pimPage.addEmployee(e);
    await pimPage.gotoEmployeeList();
    await pimPage.filterEmployeeList({
      employeeId: id,
      employeeName: e.firstName,
    });
    await pimPage.clickOnFilterSearch();
    await pimPage.verifyEmployeeSearchResult(id, e.firstName, e.lastName);
    await expect(pimPage.employeeIdFilterInput).toHaveValue(id);
    await expect(pimPage.employeeNameFilterInput).toHaveValue(
      new RegExp(e.firstName),
    );
    await pimPage.deleteEmployeeById(id);
  });

  test("TC_PIM_104 - Admin should delete multiple newly created employees using bulk selection @positive @bulk-delete @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_104;
    test.setTimeout(data.timeout);
    const value = unique();
    const first = employeeFrom(data.firstEmployee, value);
    const second = employeeFrom(data.secondEmployee, value);
    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();
    const firstId = await pimPage.addEmployee(first);
    await pimPage.gotoAddEmployee();
    const secondId = await pimPage.addEmployee(second);
    await pimPage.gotoEmployeeList();
    await pimPage.selectEmployeeById(firstId);
    await pimPage.selectEmployeeById(secondId);
    await pimPage.deleteSelectedEmployees();
    for (const id of [firstId, secondId]) {
      await pimPage.filterEmployeeList({ employeeId: id });
      await pimPage.clickOnFilterSearch();
      await pimPage.verifyNoEmployeeRecordsFound(id);
      await pimPage.resetEmployeeFilters();
    }
  });

  test("TC_PIM_105 - Admin should find a newly created employee by ID @positive @regression", async ({
    navigationPage,
    pimPage,
  }) => {
    const data = adminData.TC_PIM_105;
    const employee = employeeFrom(data.employee);

    await navigationPage.gotoPIM();
    await pimPage.gotoAddEmployee();

    const employeeId = await pimPage.addEmployee(employee);

    await pimPage.gotoEmployeeList();

    await pimPage.filterEmployeeList({
      employeeId,
    });

    await pimPage.clickOnFilterSearch();

    await pimPage.verifyEmployeeSearchResult(
      employeeId,
      employee.firstName,
      employee.lastName,
    );

    await pimPage.deleteEmployeeById(employeeId);
  });
});
